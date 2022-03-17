import React from 'react'
import questionsData from '../questionsData'
function Summary({ selectedAnswers }) {
  const style = {
    wrapper: ``,
    main: `flex `,
    leftSide: `w-[70vw] h-[100vh] relative bg-[#121212]`,
    // rightSide: `w-[30vw] h-[100vh] bg-[#FFE002] relative`,
    // rightTop: `flex items-center mt-[0.8rem]`,
    // previousButton: `bg-[#121212]  h-[60px] w-[125px]  mx-[3.5rem] flex justify-center items-center  rounded-xl `,
    // textPreviousButton: `flex text-white text-xl font-bold`,
    // currentQuestionBox: ` font-bold text-xl text-fuchsia-50`,
    // qaBox: `flex-col mt-[0.4rem] mb-[2.5rem] absolute -top-[-220px] mx-[3.5rem] `,
    // question: `text-[#121212] font-bold text-4xl mb-[10px]`,
    // description: `text-[#121212] text-xl mb-[30px]`,
    // answerOptions: ` m-2 ml-0 flex w-full h-[80px] cursor-pointer items-center space-x-2 rounded-xl bg-[#232323] py-4 pl-5`,
    // input: `h-6 w-6 bg-black`,
    // answerInput: `"ml-6 text-white"`,
    // submitButton: `mt-10 flex h-[80px] w-full justify-center items-center bg-[#232323] text-white rounded-lg `,
    // textSubmitButton: ` text-white text-xl font-bold cursor-pointer`,
    // summary: `bg-[#121212] h-[100vh] w-full`,
  }

  return (
    <div className={style.main}>
      <div className={style.leftSide}>
        <div className={style.summary}>
          <h1>Samenvatting</h1>
          {selectedAnswers.map((obj, index) => {
            return (
              <h1>
                {questionsData[index].question}
                {obj.answerByUser}
              </h1>
            )
          })}
        </div>
      </div>
      <div className={style.rightSide}></div>
    </div>
  )
}

export default Summary
