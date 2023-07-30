import { createContext, PropsWithChildren, useContext } from 'react';
import { getCatalog } from './catalog';
import { hasSuccess, useLoading } from './loadingState';

type GetCatalogResponseType = Awaited<ReturnType<typeof getCatalog>>
type CatalogContextProp = {
  state: ReturnType<typeof useLoading<GetCatalogResponseType>>
}

const CatalogContext = createContext<CatalogContextProp | undefined>(undefined);

export const CatalogProvider = ({ children }: PropsWithChildren) => {
  const state = useLoading(getCatalog);
  return <CatalogContext.Provider value={{ state }}>{children}</CatalogContext.Provider>
}

export function useCatalog() {
  const catalogCtx = useContext(CatalogContext);
  if (catalogCtx === undefined) {
    throw new Error("useCatalog must be within a CatalogtProvider")
  }
  return catalogCtx;
}

export function computedCatalogMap() {
  const mappedItems = new Map<string, GetCatalogResponseType[0]>();
  const {state} = useCatalog();
  if (hasSuccess(state)) {
    state.data.forEach(item => {
      mappedItems.set(item.id, item);
    });
  }
  return mappedItems;
}
