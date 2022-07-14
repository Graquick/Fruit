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

const state = {
  name: '',
  age: ''
}

export default function Home() {
  const [shopCart, setShopCart] = useState(state);
  const handleChange = (e) => {
    const updateName = {}
    const updateAge = {}
    updateName = {name:e.target.value}
    updateAge = {age:e.target.value}
    setShopCart(shopCart => ({
        ...shopCart,
        ...updateName
        ...updateAge
      }));
   }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className={`w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 m-auto`}>
          <div className={`transform scale-150 flex gap-4`}>
            <br/>
            <label>Name:</label>
            <input className={`px-2 ml-2`} type="text" name="name" defaultValue={shopCart.name} onChange={(e) => handleChange(e)}/>
            <br></br>
            <input className={`px-2 ml-2`} type="text" name="age" defaultValue={shopCart.age} onChange={(e) => handleChange(e)}/>
            <br></br>
            <pre>My name is <span className={`border-b-2 bg-white text-black`}>{shopCart.name}</span> and I am {shopCart.age} years old!</pre>
          </div>
        </div>
      </main>
    </>
  )
}

