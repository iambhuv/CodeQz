import Controller from '../../src/components/Quiz/Controller';
import React, { useState } from 'react'

const Quiz = () => {
  // Different Boxes Changer/Controller
  // info, quiz, result
  const [currBox, setCurrBox] = useState("info");
  
  return (
    <Controller currBox={currBox} />
  )
}

export default Quiz