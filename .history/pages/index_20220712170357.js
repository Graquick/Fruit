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
  const toggleSwitch = () => {
    setOpen(!open)
  }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className={`w-full h-screen flex items-center justify-center top-0 left-0 right-0 bottom-0 m-auto`}>
          <div className={`w-52 h-[100px] bg-white/40 flex rounded-[50px] p-[10px] cursor-pointer ${open ? 'justify-end bg-green-500' : 'justify-start'}`} onClick={() => setOpen(!open)}>
            <motion.div className={`w-[80px] h-[80px] rounded-full bg-white`} layout transition={spring} />
          </div>
        </div>
      </main>
    </>
  )
}

