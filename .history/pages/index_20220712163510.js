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
    
  }
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <div className="switch" data-isOn={open} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} whileHover={{ scale: 1.2 }} />
        </div>
      </main>
    </>
  )
}

