import { FC } from 'react'

const TableHead: FC = ({ children }) => {
  return (
    <thead className="block w-full md:table-header-group">{children}</thead>
  )
}

export default TableHead
