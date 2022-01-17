import Navigation from '../components/molecules/Navigation'
import Layout from '../components/templates/Layout'

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row justify-evenly items-center gap-10 h-full w-full">
        <Navigation
          icon="bi bi-file-earmark-person"
          title="Membros"
          link="/members"
        />
        <Navigation
          icon="bi bi-file-earmark-pdf"
          title="Gerar relatório"
          link="/report"
        />
      </div>
    </Layout>
  )
}
