import { createContext, useState, FC, Dispatch, SetStateAction } from 'react'
import { memberList as memberListMock } from '../utils/mocks'

interface IEditItemWithValue {
  member: string
  value: string
  index: number
}

interface IAddMember {
  id: number
  code: string
  name: string
}

type ContextType = {
  codeSelected: string
  listWithValue: string[][]
  editItemWithValue: IEditItemWithValue
  setEditItemWithValue: Dispatch<SetStateAction<IEditItemWithValue>>
  setListWithValue: Dispatch<SetStateAction<string[][]>>
  memberList: IAddMember[]
  getItemByCode: (code: string, kind: 'edit' | 'delete') => void
  setMember: (data: IAddMember) => void
}

const DataContext = createContext<ContextType>({} as ContextType)

export const DataProvider: FC = ({ children }) => {
  const [codeSelected, setCodeSelected] = useState('')
  const [listWithValue, setListWithValue] = useState<string[][]>([])
  const [memberList, setMemberList] = useState<IAddMember[]>(memberListMock)
  const [editItemWithValue, setEditItemWithValue] =
    useState<IEditItemWithValue>({
      member: '',
      value: '',
      index: -1,
    })

  const functions = {
    delete: (code: string) => {
      const listTemp = listWithValue.filter(list => !list.includes(code))
      setListWithValue(listTemp)
    },
    edit: (code: string) => {
      let index = 0
      for (const i in listWithValue) {
        if (listWithValue[i].includes(code)) {
          index = Number(i)
          break
        }
      }

      const obj = {
        member: `${listWithValue[index][0]} - ${listWithValue[index][1]}`,
        value: listWithValue[index][2],
        index,
      }

      setEditItemWithValue(obj)
    },
  }

  function getItemByCode(code: string, kind: 'edit' | 'delete') {
    functions[kind](code)
  }

  function setMember(newMember: IAddMember) {
    setMemberList([...memberList, newMember])
  }

  return (
    <DataContext.Provider
      value={{
        listWithValue,
        editItemWithValue,
        setEditItemWithValue,
        setListWithValue,
        codeSelected,
        getItemByCode,
        memberList,
        setMember,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
