import { useReducer } from 'react'

const ACTIONS = {
  
}

function reducer(state, action) {

}

export default function useFetchJobs() {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

  return {
    jobs: [],
    loading: false,
    error: false
  }
}
