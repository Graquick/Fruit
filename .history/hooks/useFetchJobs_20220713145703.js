import { useReducer } from 'react'

function reducer(state, action) {

}

export default function useFetchJobs() {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  dispatch
  return {
    jobs: [],
    loading: false,
    error: false
  }
}