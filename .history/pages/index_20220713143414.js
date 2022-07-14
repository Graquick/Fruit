import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Container

import useFetchJobs from './../hooks/useFetchJobs';

export default function Home() {
  const { jobs, loading, error} = useFetchJobs()
  
  return (
    <>
      <main className="min-h-screen">
      </main>
    </>
  )
}

