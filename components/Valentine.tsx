'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const Valentine = () => {
  
  const catNo = ["/img/cat-0.jpg", "/img/cat-1.jpg", "/img/cat-2.jpg", "/img/cat-3.jpg", "/img/cat-4.jpg", "/img/cat-5.jpg"];
  const catYes = "/img/cat-yes.jpg";
  const textNo = ["No", "Are you sure???", "Please pookiee!!", "Don't do this to me..", "You're breaking me :(", "I'm gonna cry T_T"];
  const [index, setIndex] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [scale, setScale] = useState(1);
  const changeIndex = () => {
    if (index < 5) {
      setIndex(index+1);
      setScale(scale*1.1);
    }
  }

  const clickedYes = () => {
    setAccepted(true);
    document.body.style.backgroundImage = `url(${"/img/hearts.gif"})`;
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      { !accepted ? <Image height={300} width={300} src={catNo[index]} alt="img"></Image> : <Image height={200} width={200} src={catYes} alt="img"></Image>}
      <h1 style={{fontFamily: "Protest Riot", fontSize: 28}} className='pb-5 text-red-500'>{!accepted ? "Will you be my valentine?" : "Yeyyyyyy!!!!! :3"}</h1>
      <div className="mx-auto space-x-10">
        {!accepted && <button style={{scale: scale}} className='items-center justify-center px-1.5 py-2.5 border-none border-r-2 text-white cursor-pointer bg-green-500 w-fit' onClick={ clickedYes }>YESSS</button>}
        {!accepted && <button className = 'items-center justify-center px-1.5 py-2.5 border-none border-r-2 text-white cursor-pointer bg-red-500 w-fit' onClick={changeIndex}>{textNo[index]}</button>}
      </div>
    </div>
  )
}

export default Valentine
