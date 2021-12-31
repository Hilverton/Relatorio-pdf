import TableDataRow from '../../molecules/TableDataRow'

export default function TableBody({
  headers,
  datas,
}: TableHeader & TableDatas) {
  return (
    <tbody className="block md:table-row-group text-gray-900">
      {datas.map((data, index) => (
        <TableDataRow idx={index} headers={headers} datas={data} />
      ))}
    </tbody>
  )
}
