import {
  createContext,
  useState,
  useEffect,
  FC,
  Dispatch,
  SetStateAction,
} from 'react'

import { IInsertMember } from '../../electron/database'

interface IEditItemWithValue {
  member: string
  value: string
  index: number
}

interface IEditMember {
  savedCode: string
  code: string
  name: string
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
  editMember: IEditMember
  setEditMember: Dispatch<SetStateAction<IEditMember>>
  setListWithValue: Dispatch<SetStateAction<string[][]>>
  memberList: IAddMember[]
  memberListTable: string[][]
  getItemByCode: (code: string, kind: 'edit' | 'delete') => void
  modal: boolean
  setModal: Dispatch<SetStateAction<boolean>>
  isEditingMember: boolean
  setIsEditingMember: Dispatch<SetStateAction<boolean>>
}

const DataContext = createContext<ContextType>({} as ContextType)

export const DataProvider: FC = ({ children }) => {
  const [codeSelected, setCodeSelected] = useState('')
  const [listWithValue, setListWithValue] = useState<string[][]>([])
  const [memberListTable, setMemberListTable] = useState<string[][]>([[]])
  const [memberList, setMemberList] = useState<IAddMember[]>([])
  const [editItemWithValue, setEditItemWithValue] =
    useState<IEditItemWithValue>({
      member: '',
      value: '',
      index: -1,
    })
  const [editMember, setEditMember] = useState<IEditMember>({
    name: '',
    code: '',
    savedCode: '',
  })
  const [modal, setModal] = useState(false)
  const [isEditingMember, setIsEditingMember] = useState(false)

  useEffect(() => {
    window.Main.getMembers()
    window.Main.on('get', (data: IInsertMember[]) => {
      const members = data.map(member => ({
        id: member.id,
        name: member.name,
        code: member.code,
      }))
      setMemberList(members)
      setMemberListTable(transform(members))
    })
  }, [])

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
    edit_member: (code: string) => {
      let index = 0
      for (const i in memberListTable) {
        if (memberListTable[i].includes(code)) {
          index = Number(i)
          break
        }
      }

      const obj = {
        code: memberListTable[index][0],
        name: memberListTable[index][1],
        savedCode: code,
      }

      console.log(obj)
      setEditMember(obj)
      setIsEditingMember(true)
      setModal(true)
    },
    delete_member: (code: string) => {
      window.Main.deleteMember(code)
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

  function getItemByCode(
    code: string,
    kind: 'edit' | 'delete' | 'edit_member' | 'delete_member'
  ) {
    functions[kind](code)
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
        modal,
        setModal,
        editMember,
        setEditMember,
        isEditingMember,
        setIsEditingMember,
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
