import { useState, useEffect } from 'react'
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
}

export default function AddInTable({ list }: IAddInTable) {
  const [memberList, setMemberList] = useState<string[]>([])

  useEffect(() => {
    const mapList = list.map(item => `${item.code} - ${item.name}`)
    setMemberList(mapList)
  }, [])
  return (
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 p-2 bg-white w-full">
      <DataList
        name="search_member"
        label=""
        placeholder="Digite o código ou nome do membro"
        dataList={memberList}
      />
      <Input name="value" label="" type="text" placeholder="R$ 0,00" />
      <Button bgColor="edit">Adicionar</Button>
    </div>
  )
}
