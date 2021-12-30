import { FC } from 'react'

interface ITableRowHead {
  isHeader?: boolean
}

const style = {
  header:
    'border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative',
  cell: 'bg-gray-300 border border-grey-500 md:border-none block md:table-row',
}

const TableRowHead: FC<ITableRowHead> = ({ isHeader = false, children }) => {
  return (
    <tr className={`${isHeader ? style.header : style.cell}`}>{children}</tr>
  )
}

export default TableRowHead
