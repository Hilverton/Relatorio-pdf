import { createContext, useState, FC, Dispatch, SetStateAction } from 'react'

type ContextType = {
  codeSelected: string
  listWithValue: string[][]
  setListWithValue: Dispatch<SetStateAction<string[][]>>
  getItemByCode: (code: string, kind: 'edit' | 'delete') => void
}

const DataContext = createContext<ContextType>({} as ContextType)

export const DataProvider: FC = ({ children }) => {
  const [codeSelected, setCodeSelected] = useState('')
  const [listWithValue, setListWithValue] = useState<string[][]>([])

  function getItemByCode(code: string, kind: 'edit' | 'delete') {
    if (kind === 'delete') {
      const listTemp = listWithValue.filter(list => !list.includes(code))
      setListWithValue(listTemp)
    }
  }

  return (
    <DataContext.Provider
      value={{ listWithValue, setListWithValue, codeSelected, getItemByCode }}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
