import { Footer } from './domain/footer/footer'
import { Header } from './domain/header/header'
import { LandingPage } from './domain/landing-page/landing-page'
import './styles.css'

export const App = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  )
}
