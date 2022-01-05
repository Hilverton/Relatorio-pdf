import { FC } from 'react'
import AddItemTable from '../../molecules/AddItemTable'
import Table from '../Table'

interface IList {
  id: number
  code: string
  name: string
}

interface ITableWithAddition {
  memberList: IList[]
  headers: string[]
  datas: string[][]
  getDataItem: (data: string[]) => void
}

const TableWithAddition: FC<ITableWithAddition> = ({
  memberList,
  headers,
  datas,
  getDataItem,
}) => {
  function getDataAddItemTable(data: string[]) {
    getDataItem(data)
  }

  return (
    <div className="rounded-md overflow-hidden w-full">
      <AddItemTable getDatas={getDataAddItemTable} list={memberList} />
      <Table headers={headers} datas={datas} />
    </div>
  )
}

export default TableWithAddition
