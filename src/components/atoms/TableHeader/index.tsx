import { FC } from 'react'

interface ITableHeader {
  width: string
}

const TableHeader: FC<ITableHeader> = ({ width, children }: ITableHeader) => {
  return (
    <th
      className={`${width} bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell`}
    >
      {children}
    </th>
  )
}

export default TableHeader
