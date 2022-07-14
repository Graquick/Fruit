import { useReducer } from 'react'

export default function useFetchJobs() {
  const [state, dispatch] = useReducer()

  return {
    jobs: [],
    loading: false,
    error: false
  }
}
