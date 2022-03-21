import Image from 'next/image'

import React from 'react'

const style = {
  header: `flex bg-[#121212] w-screen px-[1.2rem] py-[0.8rem]  items-center h-[120px]`,
  logoText: ` ml-[0.8rem] text-white font-semibold text-3xl flex-1`,
  headerItems: ` flex items-end justify-end px-10`,
  headerItem: `text-white text-2xl hover:text-[#FFE002] px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
}

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.logoContainer}>
        <Image src="/assets/logo.svg" height={110} width={110} />
      </div>
      <div className={style.logoText}> Salariscalculator</div>
      <div className={style.headerItems}>
        <div className={style.headerItem}> Over ons </div>
        <div className={style.headerItem}> Guide </div>
        <div className={style.headerItem}> FAQ </div>
        <div className={style.headerItem}> Contact </div>
      </div>
    </div>
  )
}

export default Header
