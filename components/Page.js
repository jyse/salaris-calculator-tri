import React, { useState } from 'react'
import Image from 'next/image'
import pagesData from '../pagesData'
import Summary from './Summary'
import Question from './Question'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Welcome from './Welcome'
import Calculation from './Calculation'

const style = {
  wrapper: ``,
  main: `flex `,
  leftSide: `w-[70vw] h-[100vh] relative`,
  rightSide: `w-[30vw] h-[100vh] bg-[#FFE002] relative`,
  box: `flex-col mt-[0.4rem] mb-[2.5rem] absolute -top-[-220px] mx-[3.5rem] `,
  text: `text-[#121212] font-bold text-4xl mb-[10px]`,
  description: `text-[#121212] text-xl mb-[30px]`,
  submitButton: `mt-10 flex h-[80px] w-full justify-center items-center bg-[#232323] text-white rounded-lg `,
  textSubmitButton: ` text-white text-xl font-bold cursor-pointer`,
}

function Page() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const handleNext = () => {
    let nextPage = currentPage + 1
    setCurrentPage(nextPage)
  }

  const handlePrevious = () => {
    const prevPage = currentPage - 1
    prevPage >= 0 && setCurrentPage(prevPage)
  }

  return (
    <div className={style.main}>
      {currentPage <= pagesData.length && (
        <>
          <div className={style.leftSide}>
            <div className={style.imageLeft}>
              {pagesData[currentPage]?.type == 'welcome' && <Welcome />}
              {pagesData[currentPage]?.type == 'question' && (
                <Image
                  src={pagesData[currentPage]?.image}
                  layout="fill"
                  objectFit="cover"
                />
              )}
              {pagesData[currentPage]?.type == 'calculation01' && (
                <Calculation />
              )}
              {pagesData[currentPage]?.type == 'summary' && (
                <Summary selectedAnswers={selectedAnswers} />
              )}
            </div>
          </div>
          <div className={style.rightSide}>
            {pagesData[currentPage]?.type == 'question' ? (
              <Question
                handlePrevious={handlePrevious}
                currentPage={currentPage}
                selectedAnswers={selectedAnswers}
                setSelectedAnswers={setSelectedAnswers}
                handleNext={handleNext}
              />
            ) : (
              <>
                <div className={style.box}>
                  <div className={style.text}>
                    {pagesData[currentPage]?.text}
                  </div>
                  <div className={style.description}>
                    {pagesData[currentPage]?.description}
                  </div>
                  <div className={style.submitButton}>
                    <button onClick={handleNext}>
                      <div className={style.textSubmitButton}>
                        Verder <ArrowRightAltIcon />
                      </div>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Page
