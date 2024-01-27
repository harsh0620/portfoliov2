'use client'
import { TypeWriter } from '@/app/lib/definitions';
import React from 'react'
import Typewriter from 'typewriter-effect';

const TypeWriter:React.FC<TypeWriter> = ({optionsData}) => {
  return (
    <Typewriter
    options={{
      strings: optionsData,
      autoStart: true,
      loop: true,
    }}
  />
  )
}

export default TypeWriter