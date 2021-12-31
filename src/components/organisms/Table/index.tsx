import TableHeaderMain from '../../molecules/TableHeaderMain'
import TableBody from '../../molecules/TableBody'

export default function Table({ headers, datas }: TableHeader & TableDatas) {
  return (
    <table className="min-w-full border-collapse block md:table">
      <TableHeaderMain headers={headers} />
      <TableBody headers={headers} datas={datas} />
    </table>
  )
}
