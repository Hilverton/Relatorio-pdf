import { useState, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'

import Layout from '../components/templates/Layout'
import SectionTitle from '../components/atoms/SectionTitle'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import HeaderPage from '../components/molecules/HeaderPage'
import DataList from '../components/atoms/DataList'
import TableWithAddition from '../components/organisms/TableWithAddition'

const months = ['Janeiro', 'Fevereiro', 'Março']

interface DataPage {
  month: string
  starting_day: string
  final_day: string
}

const INITIAL_DATA = {
  month: '',
  starting_day: '',
  final_day: '',
}

export default function Report() {
  const history = useHistory()
  const [infos, setInfos] = useState<DataPage>(INITIAL_DATA)

  const handleGoBack = () => history.replace('/')

  function InfosDoc(event: ChangeEvent<HTMLInputElement>) {
    setInfos({ ...infos, [event.target.name]: event.target.value })
  }

  function getData() {
    console.log('infos', infos)
  }

  return (
    <Layout>
      <div className="flex flex-col text-white h-auto space-y-16 w-full">
        <HeaderPage title="Produção do Relatório" />
        <section className="flex-col space-y-4">
          <SectionTitle>Informações do documento</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <DataList
              label="Digite o mês"
              name="month"
              dataList={months}
              value={infos.month}
              onChange={InfosDoc}
            />
            <Input
              label="Dia inicial"
              name="starting_day"
              type="date"
              value={infos.starting_day}
              onChange={InfosDoc}
            />
            <Input
              label="Dia final"
              name="final_day"
              type="date"
              value={infos.final_day}
              onChange={InfosDoc}
            />
          </div>
        </section>
        <section className="flex-col space-y-4">
          <SectionTitle>Informações do documento</SectionTitle>
          <TableWithAddition />
        </section>
        <section className="flex justify-end space-x-2 mt-4">
          <Button hasOutline bgColor="delete" onClick={handleGoBack}>
            Voltar
          </Button>
          <Button bgColor="success" onClick={getData}>
            Gerar Arquivo
          </Button>
        </section>
      </div>
    </Layout>
  )
}
