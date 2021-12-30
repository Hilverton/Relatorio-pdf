import TableHeaderMain from '../../molecules/TableHeaderMain'

export default function Table({ headers }: TableHeader) {
  return (
    <table className="min-w-full border-collapse block md:table">
      <TableHeaderMain headers={headers} />
    </table>
  )
}
