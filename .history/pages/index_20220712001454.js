import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

export default function Home() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <main className="min-h-screen bg-neutral-700">
        <section className-{}>
          <div className="w-[2.5rem] h-[2.5rem] bg-white rounded-full cursor-pointer"></div>
        </section>
      </main>
    </>
  )
}
