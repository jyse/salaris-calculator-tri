import Header from '../components/Header'
import Page from '../components/Page'

const style = {
  wrapper: ``,
  main: `flex `,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Header />
      <Page />
    </div>
  )
}

// In react zou ik dit
// welcome component gemaakt
// zodra op continue is geklikt, eerste vraag laten zien
// als dan op submit wordt geklikt de volgende vraag laten zien
// en daarna omdat je beide vragen hebt beantwoord, een berekening laten zien maar waar zou ik deze route samen stellen
// plus hoe zal / waar zou ik de data gemeenschappelijk maken?
// waar het publiek toegankelijk is vanaf alle componenten?
