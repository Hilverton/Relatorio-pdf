import TableHeaderMain from '../../molecules/TableHeaderMain'
import TableBody from '../../molecules/TableBody'

interface ITable extends TableHeader, TableDatas {
  members?: boolean
}

export default function Table({ headers, datas, members = false }: ITable) {
  return (
    <table className="min-w-full border-collapse block md:table">
      <TableHeaderMain headers={headers} />
      <TableBody headers={headers} datas={datas} members={members} />
    </table>
  )
}
