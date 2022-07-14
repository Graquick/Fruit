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
  const [open, setOpen] = useState(false);
  const [state, setState] = useState({});

  const updatedValue = {}

  const toggleSwitch = () => {
    setOpen(!open)
  }

  const obj = {
    name: 'Ryu',
    age: 30
  }

  const handleClick = (e) => {
    setState({
      name: 'Yoshi'
    })
  }

  function handleMouseOver(e) {
    console.log(e.target, e.pageX)
  }

  function handleCopy(e) {
    console.log('Try creating some original work!')
  }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className={`w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 m-auto`}>
          <div className={`text-white`}>
          <h3>useState with object in React Hooks - <a href="https://www.logrocket.com">LogRocket</a></h3>
      <br/>
            <label>Name:</label>
            <input type="text" name="item1" defaultValue={shopCart.item1} onChange={(e) => handleChange(e)}/>
            <br></br>
            <label>Output:</label>
            <pre>{JSON.stringify(shopCart, null, 2)}</pre>
          </div>
        </div>
      </main>
    </>
  )
}

