import TableRowHead from '../../atoms/TableRowHead'
import TableData from '../../atoms/TableData'
import Button from '../../atoms/Button'

export default function TableDataRow({ headers, datas, idx }: TableDataRow) {
  console.log('isEven', idx % 2 === 0)
  const totalItems = datas.length - 1
  let currentIndex = 0
  console.log('currentIndex', currentIndex)
  return (
    <TableRowHead isEven={idx % 2 === 0}>
      {headers.map((header, index) => {
        currentIndex = index
        return (
          <TableData width={index % 2 === 0 ? 'w-full md:w-52' : ''}>
            <span className="inline-block w-1/3 md:hidden font-bold">
              {header}
            </span>
            {datas[index]}
          </TableData>
        )
      })}
      {currentIndex === totalItems && (
        <TableData width="w-full md:w-52">
          <span className="inline-block w-1/3 md:hidden font-bold">Ações</span>
          <Button bgColor="edit">Editar</Button>
          <Button bgColor="delete">Apagar</Button>
        </TableData>
      )}
    </TableRowHead>
  )
}
