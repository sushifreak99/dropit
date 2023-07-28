import { PropsWithChildren, createContext, useContext, useRef, useState } from "react";

enum FilterStateType {
  TYPING = 'TYPING',
  IDLE = 'IDLE',
}

interface FilterContextProp {
  searchTerm: string;
  onType: (term: string) => void;
  state: FilterStateType,
}

export const isTyping = (state: FilterStateType) => state === FilterStateType.TYPING;

const FilterContext = createContext<FilterContextProp | undefined>(undefined);

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [state, setState] = useState<FilterStateType>(FilterStateType.IDLE);
  const tid = useRef<number | undefined>(undefined);
  const onType = (term: string) => {
    setState(FilterStateType.TYPING);
    clearTimeout(tid.current);
    tid.current = setTimeout(() => {
      setSearchTerm(term);
      setState(FilterStateType.IDLE);
    }, 500)
  }
  return <FilterContext.Provider value={{searchTerm, state, onType}}>{children}</FilterContext.Provider>
}

export function useFilter() {
  const filterCtx = useContext(FilterContext);
  if (filterCtx === undefined) {
    throw new Error()
  }
  return filterCtx;
}
