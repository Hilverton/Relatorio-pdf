import { useState, useEffect, useContext } from 'react'
import DataContext from '../../../context'

import DataList from '../../atoms/DataList'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

interface IList {
  id: number
  code: string
  name: string
}

interface IAddInTable {
  list: IList[]
  getDatas: (data: string[]) => void
}

export default function AddInTable({ list, getDatas }: IAddInTable) {
  const [memberList, setMemberList] = useState<string[]>([])
  const [member, setMember] = useState('')
  const [value, setValue] = useState('')
  const { editItemWithValue } = useContext(DataContext)

  useEffect(() => {
    const mapList = list.map(item => `${item.code} - ${item.name}`)
    setMemberList(mapList)
  }, [])

  useEffect(() => {
    setMember(editItemWithValue.member)
    setValue(editItemWithValue.value)
  }, [editItemWithValue])

  function getDataInputs() {
    const data = member.split(' - ')
    data.push(value)
    setMember('')
    setValue('')
    getDatas(data)
  }

  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2 bg-white w-full">
      <DataList
        name="search_member"
        label=""
        placeholder="Digite o código ou nome do membro"
        dataList={memberList}
        value={member}
        onChange={event => setMember(event.target.value)}
      />
      <Input
        name="value"
        label=""
        type="text"
        placeholder="R$ 0,00"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Button bgColor="edit" onClick={getDataInputs}>
        Adicionar
      </Button>
    </div>
  )
}
