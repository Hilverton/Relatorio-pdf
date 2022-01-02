import AddItemTable from '../../molecules/AddItemTable'
import Table from '../Table'

const list = [
  {
    id: 1,
    code: '123',
    name: 'Jóse Carlos',
  },
  {
    id: 2,
    code: '9845',
    name: 'João Vitor',
  },
]

const TableWithAddition = () => {
  return (
    <div className="rounded-md overflow-hidden w-full">
      <AddItemTable list={list} />
      <Table
        headers={['Código', 'Nome', 'Valor']}
        datas={[
          ['123', 'José', '2000'],
          ['153', 'José', '900'],
          ['456', 'João', '2500'],
          ['136', 'Carlos', '2750'],
        ]}
      />
    </div>
  )
}

export default TableWithAddition
