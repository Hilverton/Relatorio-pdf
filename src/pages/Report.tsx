import Layout from '../components/templates/Layout'
import DateInput from '../components/atoms/DateInput'
import DataList from '../components/atoms/DataList'
import Table from '../components/organisms/Table'

const months = ['Janeiro', 'Fevereiro', 'Março']

export default function Report() {
  return (
    <Layout>
      <div className="flex flex-col text-white h-auto space-y-16 w-full">
        <h1 className="text-5xl text-center">Produção do Relatório</h1>
        <section className="flex-col space-y-4">
          <h2 className="text-4xl">Informações do documento</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <DataList label="Digite o mês" name="month" dataList={months} />
            </div>
            <div>
              <DateInput label="Dia inicial" name="starting_day" type="date" />
            </div>
            <div>
              <DateInput label="Dia final" name="final_day" type="date" />
            </div>
          </div>
        </section>
        <section className="flex-col space-y-4">
          <h2 className="text-4xl">Informações do documento</h2>
          <div>
            <Table headers={['Código', 'Nome', 'Valor', 'Ações']} />
          </div>
        </section>
      </div>
    </Layout>
  )
}
