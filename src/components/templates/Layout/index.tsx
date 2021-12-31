import { FC } from 'react'
import LogoAD from '../../../../assets/logo_ad.png'

const Layout: FC = ({ children }) => {
  return (
    <main className="min-h-screen max-w-6xl mx-auto px-8 xl:px-0 py-8 flex flex-col justify-center items-center">
      <section>
        <img
          className="w-auto h-16 md:h-24 mb-16"
          src={LogoAD}
          alt="Logo da igreja"
        />
      </section>
      {children}
    </main>
  )
}

export default Layout
