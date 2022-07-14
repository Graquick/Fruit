import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const toggleVariants = {
  opened: {
    background: '#68C151',
    justifyContent: 'flex-end'
  },
  closed: {
    background: 'grey',
    justifyContent: 'flex-start'
  }
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function Home() {
  // useState hook for modifying an object
  // current state: object, 
  const [state, setState] = useState({name: '', age: ''});

  const handleChangeName = (e) => {
    // define updateName
    const updateName = {}
    updateName = {name:e.target.value}
    setState({
        ...state,
        ...updateName
      });
   }

  const handleChangeAge = (e) => {
    // define updateAge
    const updateAge = {}
    updateAge = {age:e.target.value}
    setState({
      ...state,
      ...updateAge
    })
  }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className={`w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 m-auto`}>
          <div className={`transform scale-150 flex gap-4 bg-white text-black`}>

          </div>
        </div>
      </main>
    </>
  )
}

