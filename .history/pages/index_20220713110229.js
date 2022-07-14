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
  name: 'Rue',
  age: 20
}

export default function Home() {
  const [shopCart, setShopCart] = useState(state);
  const handleChange = (e) => {
    const updatedValue = {};
    updatedValue = {name:e.target.value};
    setShopCart(shopCart => ({
        ...shopCart,
        ...updatedValue
      }));
   }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className={`w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 m-auto`}>
          <div className={`transform scale-150`}>
            <br/>
            <label>Name:</label>
            <input className={`px-2 ml-2`} type="text" name="item1" defaultValue={shopCart.item1} onChange={(e) => handleChange(e)}/>
            <br></br>
            <pre>{JSON.stringify(shopCart, null, 1)}</pre>
          </div>
        </div>
      </main>
    </>
  )
}

