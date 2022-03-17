import React, { useState } from 'react'
import Image from 'next/image'
import questionsData from '../questionsData'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import Summary from './Summary'

const style = {
  wrapper: ``,
  main: `flex `,
  leftSide: `w-[70vw] h-[100vh] relative`,
  rightSide: `w-[30vw] h-[100vh] bg-[#FFE002] relative`,
  rightTop: `flex items-center mt-[0.8rem]`,
  previousButton: `bg-[#121212]  h-[60px] w-[125px]  mx-[3.5rem] flex justify-center items-center  rounded-xl `,
  textPreviousButton: `flex text-white text-xl font-bold`,
  currentQuestionBox: ` font-bold text-xl text-fuchsia-50`,
  qaBox: `flex-col mt-[0.4rem] mb-[2.5rem] absolute -top-[-220px] mx-[3.5rem] `,
  question: `text-[#121212] font-bold text-4xl mb-[10px]`,
  description: `text-[#121212] text-xl mb-[30px]`,
  answerOptions: ` m-2 ml-0 flex w-full h-[80px] cursor-pointer items-center space-x-2 rounded-xl bg-[#232323] py-4 pl-5`,
  input: `h-6 w-6 bg-black`,
  answerInput: `"ml-6 text-white"`,
  submitButton: `mt-10 flex h-[80px] w-full justify-center items-center bg-[#232323] text-white rounded-lg `,
  textSubmitButton: ` text-white text-xl font-bold cursor-pointer`,
  summary: `bg-[#121212] h-[100vh] w-full`,
}

function Question() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState([])

  const handleNext = () => {
    let nextQuestion = currentQuestion + 1
    nextQuestion < questionsData.length && setCurrentQuestion(nextQuestion)
  }

  const handlePrevious = () => {
    const prevQuestion = currentQuestion - 1
    prevQuestion >= 0 && setCurrentQuestion(prevQuestion)
  }

  const pickedAnswer = (answer) => {
    setSelectedAnswers([
      (selectedAnswers[currentQuestion] = { answerByUser: answer }),
    ])
    setSelectedAnswers([...selectedAnswers])
  }

  console.log(
    selectedAnswers,
    'what is in selected Answers? question component'
  )
  return (
    <div className={style.main}>
      {selectedAnswers.length < questionsData.length ? (
        <>
          <div className={style.leftSide}>
            <div className={style.imageLeft}>
              <Image
                src={questionsData[currentQuestion].image}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className={style.rightSide}>
            <div className={style.rightTop}>
              <div className={style.previousButton}>
                <button onClick={handlePrevious}>
                  <div className={style.textPreviousButton}>
                    <ArrowBackIcon />
                    <h1>Terug</h1>
                  </div>
                </button>
              </div>
              <div className={style.currentQuestionBox}>
                Vraag {currentQuestion + 1} of {questionsData.length}
              </div>
            </div>
            <div className={style.qaBox}>
              <div className={style.question}>
                {questionsData[currentQuestion]?.question}
              </div>
              <div className={style.description}>
                {questionsData[currentQuestion]?.description}
              </div>
              <div className={style.answers}>
                {questionsData[currentQuestion]?.answerOptions.map(
                  (answerObj, index) => {
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
                            selectedAnswers[currentQuestion]?.answerByUser
                          }
                          onChange={(e) => pickedAnswer(answerObj.answer)}
                          className={style.input}
                        />
                        <p className={style.answerInput}>{answerObj.answer}</p>
                      </div>
                    )
                  }
                )}
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
          {selectedAnswers[1]?.answerByUser && <h1>Two questions answered!</h1>}
        </>
      ) : (
        <Summary selectedAnswers={selectedAnswers} />
      )}
    </div>
  )
}

export default Question

//Route gaan bepalen
// vraag 1 en 2 bepaald => berekening laten zien
// user story schrijven in de code nu schrijven

pages

// Welcome, klik op een continue
// dan moet je bij de eerste vraag terecht komen
// daarna bij de tweede vraag
// na beantwoording van de tweede vraag,
// een scherm met verwachte omzet per maand
// maar dan wil je waarschijnlijk wel de derde vraag aan de rechterkant reeds hebben.

// dus binnen 1 component met een linker en rechter gedeelte, daarvan verandert de inhoud alleen op basis can bepaalde parameters
