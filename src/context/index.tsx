import { createContext, useState, FC } from 'react'

type ContextType = {
  codeSelected: string
  getItemByCode: (code: string) => void
}

const DataContext = createContext<ContextType>({} as ContextType)

export const DataProvider: FC = ({ children }) => {
  const [codeSelected, setCodeSelected] = useState('')

  function getItemByCode(code: string) {
    setCodeSelected(code)
  }

  return (
    <DataContext.Provider value={{ codeSelected, getItemByCode }}>
      {children}
    </DataContext.Provider>
  )
}

export default DataContext
