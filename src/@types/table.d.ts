interface TableHeader {
  headers: string[]
}

interface TableData {
  datas: string[]
}

interface TableDatas {
  datas: string[][]
}

interface TableDataRow extends TableHeader, TableData {
  idx: number
}
