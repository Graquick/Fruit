import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence, Reorder } from 'framer-motion';
import { Icon } from '@iconify/react';
import Tomato from './../components/Modals/Tomato';
import Orange from './../components/Modals/Orange';
import Lemon from './../components/Modals/Lemon';
import Pear from './../components/Modals/Pear';
import Footer from './../components/footer';

export default function Home() {
  const [tomato, setTomato] = useState(false);
  const [orange, setOrange] = useState(false);
  const [lemon, setLemon] = useState(false);
  const [pear, setPear] = useState(false);

  const cards = [ {id: 1, emoji: '🍅', show: () => setTomato(true) }, {id: 2, emoji: '🍊', show: () => setOrange(true)}, {id: 3, emoji: '🍋', show: () => setLemon(true)}, {id: 4, emoji: '🍐', show: () => setPear(true)} ]
  
  return (
    <>
      <Tomato tomato={tomato} setTomato={setTomato} />
      <Orange orange={orange} setOrange={setOrange} />
      <Lemon lemon={lemon} setLemon={setLemon} />
      <Pear pear={pear} setPear={setPear} />
      <main className={`w-full min-h-screen xl:h-[1350px]`}>
        <div className={`flex gap-4 bg-neutral-200 absolute h-fit w-fit p-4 top-8 mb-8 mxl:top-0 mxl:bottom-0 left-0 right-0 mx-auto mxl:my-auto xl:flex-col xl:top-8`}>
          {cards.map((card, i) => (
            <motion.div className={`bg-white shadow-md w-[200px] h-[286px] flex items-center justify-center text-[100px] cursor-pointer`} key={card} whileHover={{ scale: 1.075, y: i % 2 === 0 ? 2 : -2 }} whileTap={{ scale: 0.75 }} onClick={card.show}>
              {card.emoji}
            </motion.div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
}