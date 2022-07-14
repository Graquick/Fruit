import React from 'react'

export default function useFetchJobs() {
  return {
    jobs: [],
    loading: true,
    error: false
  }
}
