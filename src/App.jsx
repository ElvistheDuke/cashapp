import BankingSection from './components/BankingSection'
import CashCardSection from './components/CashCardSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import InvestingSection from './components/InvestingSection'
import Navbar from './components/Navbar'
import PaymentSection from './components/PaymentSection'

function App() {

  return (
    <>
      <div className='container'>
        <HeroSection />
        <PaymentSection />
        <BankingSection />
        <CashCardSection />
        <InvestingSection />
      </div>
    </>
  )
}

export default App
