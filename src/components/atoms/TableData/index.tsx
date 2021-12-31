import { FC } from 'react'

interface ITableData {
  width: string
}

const TableData: FC<ITableData> = ({ width, children }: ITableData) => {
  return (
    <td
      className={`${width} p-2 md:border md:border-grey-500 text-left block md:table-cell space-x-2`}
    >
      {children}
    </td>
  )
}

export default TableData
