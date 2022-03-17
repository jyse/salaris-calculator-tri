import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import pagesData from '../pagesData'

const style = {
  rightTop: `flex items-center mt-[0.8rem]`,
  previousButton: `bg-[#121212]  h-[60px] w-[125px]  mx-[3.5rem] flex justify-center items-center  rounded-xl `,
  textPreviousButton: `flex text-white text-xl font-bold`,
  currentPageBox: ` font-bold text-xl text-fuchsia-50`,
  qaBox: `flex-col mt-[0.4rem] mb-[2.5rem] absolute -top-[-220px] mx-[3.5rem] `,
  question: `text-[#121212] font-bold text-4xl mb-[10px]`,
  description: `text-[#121212] text-xl mb-[30px]`,
  answerOptions: ` m-2 ml-0 flex w-full h-[80px] cursor-pointer items-center space-x-2 rounded-xl bg-[#232323] py-4 pl-5`,
  input: `h-6 w-6 bg-black`,
  answerInput: `"ml-6 text-white"`,
  submitButton: `mt-10 flex h-[80px] w-full justify-center items-center bg-[#232323] text-white rounded-lg `,
  textSubmitButton: ` text-white text-xl font-bold cursor-pointer`,
}

function Question({
  handlePrevious,
  currentPage,
  selectedAnswers,
  setSelectedAnswers,
  handleNext,
}) {
  const pickedAnswer = (answer) => {
    setSelectedAnswers([
      (selectedAnswers[currentPage] = { answerByUser: answer }),
    ])
    setSelectedAnswers([...selectedAnswers])
  }
  return (
    <div>
      <div className={style.rightTop}>
        <div className={style.previousButton}>
          <button onClick={handlePrevious}>
            <div className={style.textPreviousButton}>
              <ArrowBackIcon />
              <h1>Terug</h1>
            </div>
          </button>
        </div>
        <div className={style.currentPageBox}>
          Vraag {currentPage + 1} of {pagesData.length}
        </div>
      </div>
      <div className={style.qaBox}>
        <div className={style.question}>{pagesData[currentPage]?.question}</div>
        <div className={style.description}>
          {pagesData[currentPage]?.description}
        </div>
        <div className={style.answers}>
          {pagesData[currentPage]?.answerOptions.map((answerObj, index) => {
            return (
              <div
                key={index}
                className={style.answerOptions}
                onClick={(e) => pickedAnswer(answerObj.answer)}
              >
                <input
                  type="radio"
                  name={answerObj.answer}
                  value={answerObj.answer}
                  checked={
                    answerObj.answer ===
                    selectedAnswers[currentPage]?.answerByUser
                  }
                  onChange={(e) => pickedAnswer(answerObj.answer)}
                  className={style.input}
                />
                <p className={style.answerInput}>{answerObj.answer}</p>
              </div>
            )
          })}
        </div>
        <div className={style.submitButton}>
          <button onClick={handleNext}>
            <div className={style.textSubmitButton}>
              Verder <ArrowRightAltIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Question
