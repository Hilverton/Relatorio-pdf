import { FC } from 'react'

interface ITableRowHead {
  isHeader?: boolean
  isEven?: boolean
}

const TableRowHead: FC<ITableRowHead> = ({
  isHeader = false,
  isEven,
  children,
}) => {
  const style = {
    header:
      'border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative',
    cell: `${
      isEven ? 'bg-gray-300' : 'bg-white'
    } border border-grey-500 md:border-none block md:table-row`,
  }
  return (
    <tr className={`${isHeader ? style.header : style.cell}`}>{children}</tr>
  )
}

export default TableRowHead
