import TableRowHead from '../../atoms/TableRowHead'
import TableHeader from '../../atoms/TableHeader'

export default function TableHeaderRow({ headers }: TableHeader) {
  return (
    <TableRowHead isHeader>
      {headers.map((header, index) => {
        if (header === 'Ações' || header === 'Ação') {
          return (
            <TableHeader key={header} width="w-full md:w-52">
              {header}
            </TableHeader>
          )
        }
        return (
          <TableHeader
            key={header}
            width={index % 2 === 0 ? 'w-full md:w-52' : ''}
          >
            {header}
          </TableHeader>
        )
      })}
    </TableRowHead>
  )
}
