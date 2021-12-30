import TableHead from '../../atoms/TableHead'
import TableHeaderRow from '../TableHeaderRow'

export default function TableHeaderMain({ headers }: TableHeader) {
  return (
    <TableHead>
      <TableHeaderRow headers={headers} />
    </TableHead>
  )
}
