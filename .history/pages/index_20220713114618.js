import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function Home() {
  const [state, setState] = useState({name: '', age: ''})

  const changeName = (e) => {
    const updateName = {}
    updateName = {name:e.target.value}
    setState({
      ...state,
      ...updateName
    })
  }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className={`w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 m-auto`}>
          <div className={`transform scale-150 flex flex-col gap-4 bg-white text-black p-4`}>
            <h1 className={`text-4xl font-bold`}>Modify object with useState</h1>
            <label for="name">Name:</label>
            <input type="name" name="name" placeholder="Enter name" />
            <br/>
            <label for="name">Age:</label>
            <input type="number" name="age" placeholder="1+" />
            <div>
              <p>Hello, my name is {state.name}</p>
              <p>I am {state.age} years old.</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

