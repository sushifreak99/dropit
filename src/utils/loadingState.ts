import { useEffect, useState } from "react"

enum LoadingStateType {
  LOADING = 'LOADING',
  SUCCESS = 'SUCESS',
  FAILURE = 'FAILURE',
};

type LoadingState<T> =
  {type: LoadingStateType.LOADING} |
  {type: LoadingStateType.FAILURE, err: Error} |
  { type: LoadingStateType.SUCCESS, data: T }


export function useLoading<T>(fetchData: () => Promise<T>) {
  const [state, setState] = useState<LoadingState<T>>({type: LoadingStateType.LOADING})
  useEffect(() => {
    fetchData()
      .then(data => setState({ type: LoadingStateType.SUCCESS, data }))
      .catch(err => setState({ type: LoadingStateType.FAILURE, err }))
  }, [])
  return state
}

export const hasError = <T>(state: LoadingState<T>): state is {type: LoadingStateType.FAILURE, err: Error} => state.type === LoadingStateType.FAILURE
export const hasSuccess = <T>(state: LoadingState<T>): state is {type: LoadingStateType.SUCCESS, data: T} => state.type === LoadingStateType.SUCCESS
export const isLoading = <T>(state: LoadingState<T>): state is {type: LoadingStateType.LOADING} => state.type === LoadingStateType.LOADING
