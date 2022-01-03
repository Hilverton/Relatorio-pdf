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
        headers={['Código', 'Nome', 'Valor', 'Ação']}
        datas={[
          ['123', 'José'],
          ['153', 'José'],
          ['456', 'João'],
          ['136', 'Carlos'],
        ]}
      />
    </div>
  )
}

export default TableWithAddition
