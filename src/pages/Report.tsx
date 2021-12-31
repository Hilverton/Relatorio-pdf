import Layout from '../components/templates/Layout'
import SectionTitle from '../components/atoms/SectionTitle'
import Input from '../components/atoms/Input'
import HeaderPage from '../components/molecules/HeaderPage'
import DataList from '../components/atoms/DataList'
import Table from '../components/organisms/Table'

const months = ['Janeiro', 'Fevereiro', 'Março']

export default function Report() {
  return (
    <Layout>
      <div className="flex flex-col text-white h-auto space-y-16 w-full">
        <HeaderPage title="Produção do Relatório" />
        <section className="flex-col space-y-4">
          <SectionTitle>Informações do documento</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <DataList label="Digite o mês" name="month" dataList={months} />
            <Input label="Dia inicial" name="starting_day" type="date" />
            <Input label="Dia final" name="final_day" type="date" />
          </div>
        </section>
        <section className="flex-col space-y-4">
          <SectionTitle>Informações do documento</SectionTitle>
          <div>
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
        </section>
      </div>
    </Layout>
  )
}
