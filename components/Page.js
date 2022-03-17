import React, { useState } from 'react'
import Image from 'next/image'
import pagesData from '../pagesData'
import Summary from './Summary'
import Question from './Question'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

const style = {
  wrapper: ``,
  main: `flex `,
  leftSide: `w-[70vw] h-[100vh] relative`,
  rightSide: `w-[30vw] h-[100vh] bg-[#FFE002] relative`,
  submitButton: `mt-10 flex h-[80px] w-full justify-center items-center bg-[#232323] text-white rounded-lg `,
  textSubmitButton: ` text-white text-xl font-bold cursor-pointer`,
}

function Page() {
  const [currentPage, setCurrentPage] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const handleNext = () => {
    let nextPage = currentPage + 1
    nextPage < pagesData.length && setCurrentPage(nextPage)
  }

  const handlePrevious = () => {
    const prevPage = currentPage - 1
    prevPage >= 0 && setCurrentPage(prevPage)
  }

  const pickedAnswer = (answer) => {
    setSelectedAnswers([
      (selectedAnswers[currentPage] = { answerByUser: answer }),
    ])
    setSelectedAnswers([...selectedAnswers])
  }

  return (
    <div className={style.main}>
      {selectedAnswers.length < pagesData.length ? (
        <>
          <div className={style.leftSide}>
            <div className={style.imageLeft}>
              <Image
                src={pagesData[currentPage].image}
                layout="fill"
                objectFit="cover"
              />
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
                <h2>{pagesData[currentPage]?.text}</h2>
                <div className={style.submitButton}>
                  <button onClick={handleNext}>
                    <div className={style.textSubmitButton}>
                      Verder <ArrowRightAltIcon />
                    </div>
                  </button>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <Summary selectedAnswers={selectedAnswers} />
      )}
    </div>
  )
}

export default Page
