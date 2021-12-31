import TableRowHead from '../../atoms/TableRowHead'
import TableHeader from '../../atoms/TableHeader'

export default function TableHeaderRow({ headers }: TableHeader) {
  const totalItems = headers.length - 1
  let currentIndex = 0
  return (
    <TableRowHead isHeader>
      {headers.map((header, index) => {
        currentIndex = index
        return (
          <TableHeader width={index % 2 === 0 ? 'w-full md:w-52' : ''}>
            {header}
          </TableHeader>
        )
      })}
      {currentIndex === totalItems && (
        <TableHeader width="w-full md:w-52">Ações</TableHeader>
      )}
    </TableRowHead>
  )
}
