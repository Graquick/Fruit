import React from 'react'

export function useFetchJobs(params, page) {
  return {
    jobs: [],
    loading: false,
    error: true
  }
}
