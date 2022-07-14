import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Container } from 'react-bootstrap'

import useFetchJobs from './../hooks/useFetchJobs';
import Job from './../components/Job';

export default function Home() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error} = useFetchJobs(params, page)
  
  return (
    <>
      <main className={`w-full min-h-screen bg-red-400`}>
        <div>
          
        </div>
        <Container className={`top-0 bottom-0 left-0 right-0 m-auto w-full h-[800px] bg-blue-400 overflow-scroll`}>
          {loading && <h1>Loading...</h1>}
          {error && <h1>Error. Try refreshing</h1>}
          {jobs.map((job, i) => {
            return <Job key={i} job={job} />
          })}
        </Container>
      </main>
    </>
  )
}

