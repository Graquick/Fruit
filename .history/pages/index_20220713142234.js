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

  const changeAge = (e) => {
    const updateAge = {}
    updateAge = {age:e.target.value}
    setState({
      ...state,
      ...updateAge
    })
  }
  
  return (
    <>
      <main className="min-h-screen">
      </main>
    </>
  )
}

