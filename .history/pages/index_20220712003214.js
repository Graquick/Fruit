import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const toggleVariants = {
  opened: {
    x: 110
  },
  closed: {
    x: 0
  }
}

export default function Home() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <motion.section className={`fixed top-0 bottom-0 left-0 right-0 flex items-center w-40 h-12 px-1 m-auto rounded-full bg-neutral-500`}
          
        >
          <motion.div className=" onClick={() => setOpen(!open)}
            variants={toggleVariants}
            animate={open ? 'opened' : 'closed'}
          ></motion.div>
        </motion.section>
      </main>
    </>
  )
}
