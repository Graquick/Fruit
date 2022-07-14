import { useReducer } from 'react'

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

function reducer(state, action) {
  switch ()
}

export default function useFetchJobs() {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  return {
    jobs: [],
    loading: false,
    error: false
  }
}
