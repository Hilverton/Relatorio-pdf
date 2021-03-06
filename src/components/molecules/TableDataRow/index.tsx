import { useContext } from 'react'
import DataContext from '../../../context'

import TableRowHead from '../../atoms/TableRowHead'
import TableData from '../../atoms/TableData'
import Button from '../../atoms/Button'

export default function TableDataRow({
  headers,
  datas,
  idx,
  members = false,
}: TableDataRow) {
  const { getItemByCode } = useContext(DataContext)
  return (
    <TableRowHead isEven={idx % 2 === 0}>
      {headers.map((header, index) => {
        if (header === 'Ações') {
          return (
            <TableData key={index} width="w-full md:w-52">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Ações
              </span>
              <Button
                bgColor="edit"
                onClick={() =>
                  getItemByCode(datas[0], members ? 'edit_member' : 'edit')
                }
              >
                Editar
              </Button>
              <Button
                bgColor="delete"
                onClick={() =>
                  getItemByCode(datas[0], members ? 'delete_member' : 'delete')
                }
              >
                Apagar
              </Button>
            </TableData>
          )
        }

        if (header === 'Ação') {
          return (
            <TableData key={index} width="w-full md:w-52">
              <span className="inline-block w-1/3 md:hidden font-bold">
                Ação
              </span>
              <Button bgColor="delete">Apagar</Button>
            </TableData>
          )
        }

        return (
          <TableData
            key={index}
            width={index % 2 === 0 ? 'w-full md:w-52' : ''}
          >
            <span className="inline-block w-1/3 md:hidden font-bold">
              {header}
            </span>
            {datas[index]}
          </TableData>
        )
      })}
    </TableRowHead>
  )
}
