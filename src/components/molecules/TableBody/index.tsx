import TableDataRow from '../../molecules/TableDataRow'

interface ITableBody extends TableHeader, TableDatas {
  members?: boolean
}

export default function TableBody({
  headers,
  datas,
  members = false,
}: ITableBody) {
  return (
    <tbody className="block md:table-row-group text-gray-900">
      {datas.map((data, index) => (
        <TableDataRow
          key={index}
          idx={index}
          headers={headers}
          datas={data}
          members={members}
        />
      ))}
    </tbody>
  )
}
