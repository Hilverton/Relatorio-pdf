import { FC } from 'react'

const TableHeader: FC = ({ children }) => {
  return (
    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">
      {children}
    </th>
  )
}

export default TableHeader
