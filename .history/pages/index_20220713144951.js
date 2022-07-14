import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Container from 'react-bootstrap'

export default function Home() {
  
  return (
    <>
      <Container>
        {loading && <h1>Loading...</h1>}
        {error && <h1>Try refreshing</h1>}
        <h1>{jobs.length}</h1>
      </Container>
    </>
  )
}

