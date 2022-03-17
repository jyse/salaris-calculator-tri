import { useState } from 'react'
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
