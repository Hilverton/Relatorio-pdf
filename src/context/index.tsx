import { createContext, useState, FC, Dispatch, SetStateAction } from 'react'

interface IEditItemWithValue {
  member: string
  value: string
  index: number
}

type ContextType = {
  codeSelected: string
  listWithValue: string[][]
  editItemWithValue: IEditItemWithValue
  setEditItemWithValue: Dispatch<SetStateAction<IEditItemWithValue>>
  setListWithValue: Dispatch<SetStateAction<string[][]>>
  getItemByCode: (code: string, kind: 'edit' | 'delete') => void
}

const DataContext = createContext<ContextType>({} as ContextType)

export const DataProvider: FC = ({ children }) => {
  const [codeSelected, setCodeSelected] = useState('')
  const [listWithValue, setListWithValue] = useState<string[][]>([])
  const [editItemWithValue, setEditItemWithValue] =
    useState<IEditItemWithValue>({
      member: '',
      value: '',
      index: -1,
    })

  function getItemByCode(code: string, kind: 'edit' | 'delete') {
    if (kind === 'delete') {
      const listTemp = listWithValue.filter(list => !list.includes(code))
      setListWithValue(listTemp)
    }
    if (kind === 'edit') {
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
      console.log('edit')
    }
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
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
