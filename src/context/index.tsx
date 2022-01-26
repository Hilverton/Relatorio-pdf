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
  memberListTable: string[][]
  getItemByCode: (code: string, kind: 'edit' | 'delete') => void
  setMember: (data: Omit<IAddMember, 'id'>) => void
}

const DataContext = createContext<ContextType>({} as ContextType)

export const DataProvider: FC = ({ children }) => {
  const [codeSelected, setCodeSelected] = useState('')
  const [listWithValue, setListWithValue] = useState<string[][]>([])
  const [memberListTable, setMemberListTable] = useState<string[][]>(
    transform(memberListMock)
  )
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

  function transform(list: IAddMember[]) {
    const arrayMemberListTable = []
    for (const item of list) {
      const itemArray = [item.code, item.name]
      arrayMemberListTable.push(itemArray)
    }
    return arrayMemberListTable
  }

  function getItemByCode(code: string, kind: 'edit' | 'delete') {
    functions[kind](code)
  }

  function setMember(member: Omit<IAddMember, 'id'>) {
    const newMember = {
      id: memberList.length + 1,
      code: member.code,
      name: member.name,
    }

    setMemberList([...memberList, newMember])

    const arrayMemberListTable = [member.code, member.name]
    setMemberListTable([...memberListTable, arrayMemberListTable])
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
        memberListTable,
        setMember,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
