import Layout from '../components/templates/Layout'
import Table from '../components/organisms/Table'
import HeaderPage from '../components/molecules/HeaderPage'
import SectionTitle from '../components/atoms/SectionTitle'
import Button from '../components/atoms/Button'

const headers = ['Código', 'Nome', 'Ações']

const list = [
  ['1236563', 'Jóse Carlos'],
  ['9845986', 'João Vitor'],
  ['7419845', 'Nicodemos Vitor'],
  ['7419145', 'Antônio Gilberto'],
]

export default function Members() {
  return (
    <Layout>
      <div className="flex flex-col text-white h-auto space-y-16 w-full">
        <HeaderPage title="Membros" />
        <section className="flex-col space-y-4">
          <div className="flex justify-between items-center">
            <SectionTitle>Lista</SectionTitle>
            <Button bgColor="edit">Adicionar</Button>
          </div>
          <Table headers={headers} datas={list} />
        </section>
      </div>
    </Layout>
  )
}
