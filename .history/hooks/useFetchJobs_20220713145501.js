import { useReducer } from 'react'

export default function useFetchJobs() {
  
  
  return {
    jobs: [],
    loading: false,
    error: false
  }
}
