import { useState, useEffect, useContext, FormEvent } from 'react'
import DataContext from '../../../context'

import Input from '../../atoms/Input'
import Button from '../../atoms/Button'

interface IModal {
  closeModal: () => void
  isEdit: boolean
}

const emptyEditMember = { name: '', code: '', savedCode: '' }

export default function Modal({ closeModal, isEdit }: IModal) {
  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const { editMember, setEditMember } = useContext(DataContext)

  function close() {
    setEditMember(emptyEditMember)
    closeModal()
  }

  useEffect(() => {
    setName(editMember.name)
    setCode(editMember.code)
  }, [editMember])

  function submit(event: FormEvent) {
    event.preventDefault()
    if (isEdit) window.Main.updateMember(name, code, editMember.savedCode)
    else window.Main.insertMember(name, code)
    setName('')
    setCode('')
    setEditMember(emptyEditMember)
    closeModal()
  }

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 flex justify-center items-center h-modal md:h-full md:inset-0">
      <div className="relative px-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-gray-400 rounded-lg shadow border border-gray-600">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-200 bg-transparent hover:bg-gray-700 hover:text-gray-300 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              onClick={close}
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900">
              {isEdit ? 'Editar' : 'Adicionar'} membro
            </h3>
            <Input
              name="code"
              label="C??digo"
              type="text"
              value={code}
              onChange={event => setCode(event.target.value)}
              required
            />
            <Input
              name="name"
              label="Nome"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
            <Button type="submit" bgColor="success" onClick={submit}>
              {isEdit ? 'Salvar' : 'Adicionar'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
