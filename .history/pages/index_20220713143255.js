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
  
  return (
    <>
      <main className="min-h-screen">
      </main>
    </>
  )
}

