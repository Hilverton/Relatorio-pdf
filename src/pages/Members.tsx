import { useState, useContext } from 'react'

import DataContext from '../context'

import Layout from '../components/templates/Layout'
import Table from '../components/organisms/Table'
import Modal from '../components/organisms/Modal'
import HeaderPage from '../components/molecules/HeaderPage'
import SectionTitle from '../components/atoms/SectionTitle'
import Button from '../components/atoms/Button'

import { memberTableHeaders } from '../utils/mocks'

export default function Members() {
  const [modal, setModal] = useState(false)
  const { memberListTable } = useContext(DataContext)

  function toggleModal() {
    setModal(!modal)
    window.Main.sendMessage('Sucesso main')
  }

  return (
    <Layout>
      <div className="flex flex-col text-white h-auto space-y-16 w-full">
        <HeaderPage title="Membros" />
        <section className="flex-col space-y-4">
          <div className="flex justify-between items-center">
            <SectionTitle>Lista</SectionTitle>
            <Button bgColor="edit" onClick={toggleModal}>
              Adicionar
            </Button>
          </div>
          <Table headers={memberTableHeaders} datas={memberListTable} />
        </section>
      </div>
      {modal && <Modal closeModal={toggleModal} />}
    </Layout>
  )
}
