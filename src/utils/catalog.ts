
export const CATALOG_URL = "https://mocki.io/v1/9f345655-d334-4ac6-adc8-e44e53272e1f";

interface CatalogItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  price: number;
  rating: {rate: number, count: number};
}

type CatalogData = Omit<CatalogItem, 'category' | 'description' | 'rating'>[]

export const getCatalog = (): Promise<CatalogData> => fetch(CATALOG_URL)
  .then(response => response.json())
  .then(catalog => catalog.map((item: CatalogItem) => ({ 
    image: item.image,
    id: item.id.toString(),
    title: item.title,
    price: item.price,
    key: item.id,
  })))
