import { FC } from 'react'

const TableData: FC = ({ children }) => {
  return (
    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
      {children}
    </td>
  )
}

export default TableData
