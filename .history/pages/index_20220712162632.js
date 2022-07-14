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
  type: 'spring',
  stiffness: 700,
  damping: 30
}

export default function Home() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <motion.section className={`${open ? 'justify-end bg-green-400' : ' justify-start'} fixed top-0 bottom-0 left-0 right-0 flex items-center w-40 h-12 px-1 m-auto rounded-full cursor-pointer`}
          layout
          transition={spring}
          onClick={() => setOpen(!open)}
        >
          <motion.div className={`bg-white w-[2.5rem] h-[2.5rem] rounded-full cursor-pointer`} onClick={() => setOpen(!open)}
          ></motion.div>
        </motion.section>
      </main>
    </>
  )
}
