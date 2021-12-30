import TableRowHead from '../../atoms/TableRowHead'
import TableHeader from '../../atoms/TableHeader'

export default function TableHeaderRow({ headers }: TableHeader) {
  return (
    <TableRowHead>
      {headers.map(header => (
        <TableHeader>{header}</TableHeader>
      ))}
    </TableRowHead>
  )
}
