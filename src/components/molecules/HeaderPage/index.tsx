import { useHistory } from 'react-router-dom'
import PageTitle from '../../atoms/PageTitle'

interface IHeaderPage {
  title: string
}

export default function HeaderPage({ title }: IHeaderPage) {
  const history = useHistory()

  function GoBack() {
    history.goBack()
  }

  return (
    <div className="relative w-full">
      <button className="bg-transparent" onClick={GoBack}>
        <i className="bi bi-box-arrow-left absolute -top-4 md:top-4 left-0 text-3xl md:text-6xl mb-4 transition-all duration-300 group-hover:-translate-y-4" />
      </button>
      <PageTitle>{title}</PageTitle>
    </div>
  )
}
