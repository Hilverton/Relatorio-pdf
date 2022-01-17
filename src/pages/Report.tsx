import { useState, useContext, useEffect, ChangeEvent } from 'react'
import { useHistory } from 'react-router-dom'

import DataContext from '../context'
import convertToFloat from '../utils/convertToFloat'

import Layout from '../components/templates/Layout'
import SectionTitle from '../components/atoms/SectionTitle'
import Button from '../components/atoms/Button'
import Input from '../components/atoms/Input'
import HeaderPage from '../components/molecules/HeaderPage'
import DataList from '../components/atoms/DataList'
import TableWithAddition from '../components/organisms/TableWithAddition'

import { monthsOfYear, titheTableHeaders, memberList } from '../utils/mocks'

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
  const {
    listWithValue,
    setListWithValue,
    editItemWithValue,
    setEditItemWithValue,
  } = useContext(DataContext)
  const [infos, setInfos] = useState<DataPage>(INITIAL_DATA)
  const [total, setTotal] = useState('')

  const handleGoBack = () => history.replace('/')

  function InfosDoc(event: ChangeEvent<HTMLInputElement>) {
    setInfos({ ...infos, [event.target.name]: event.target.value })
  }

  function getData() {
    console.log('infos', infos)
    console.log('listWithValue', listWithValue)
  }

  useEffect(() => {
    let totalValue = 0
    for (const item of listWithValue) {
      console.log('item da tabela', item)
      const value = convertToFloat(item[2])
      totalValue += Number(value)
    }

    setTotal(
      totalValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    )
  }, [listWithValue, editItemWithValue])

  function getNewItem(data: string[]) {
    if (editItemWithValue.index !== -1) {
      const newList = listWithValue
      newList.splice(editItemWithValue.index, 1, data)
      console.log('newList', newList)
      setListWithValue(newList)
      setEditItemWithValue({ member: '', value: '', index: -1 })
    } else {
      setListWithValue([...listWithValue, data])
    }
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
              dataList={monthsOfYear}
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
          <TableWithAddition
            headers={titheTableHeaders}
            datas={listWithValue}
            memberList={memberList}
            getDataItem={getNewItem}
          />
        </section>
        <section className="flex flex-row-reverse">
          <Input
            label="Valor Total"
            name="totalValue"
            type="teste"
            defaultValue={total}
            disabled
          />
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
