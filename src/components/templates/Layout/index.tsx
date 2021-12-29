import { FC } from 'react'
import LogoAD from '../../../../assets/logo_ad.png'

const Layout: FC = ({ children }) => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto py-10 md:py-0 flex flex-col justify-center items-center">
      <section>
        <img
          className="w-auto h-16 md:h-32 mb-24"
          src={LogoAD}
          alt="Logo da igreja"
        />
      </section>
      <section>{children}</section>
    </main>
  )
}

export default Layout
