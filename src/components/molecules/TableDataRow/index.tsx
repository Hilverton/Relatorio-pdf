import TableRowHead from '../../atoms/TableRowHead'
import TableData from '../../atoms/TableData'

export default function TableDataRow({ headers, datas, idx }: TableDataRow) {
  console.log('isEven', idx % 2 === 0)
  return (
    <TableRowHead isEven={idx % 2 === 0}>
      {headers.map((header, index) => (
        <TableData>
          <span className="inline-block w-1/3 md:hidden font-bold">
            {header}
          </span>
          {datas[index]}
        </TableData>
      ))}
    </TableRowHead>
  )
}
