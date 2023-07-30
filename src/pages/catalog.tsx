import PageLayout from "../layout/pageLayout"
import Header from "../components/header"
import Logo from "../components/logo"
import CartBadge from "../components/cartBadge"
import CatalogTable from "../components/catalogTable"
import SearchInput from "../components/searchInput"
import { Typography } from "antd"
import { FilterProvider } from "../utils/filterContext"

const { Title } = Typography;

const CatalogContent = () => {
  return (
    <>
      <Title level={3}>Catalog page</Title>
      <FilterProvider>
        <SearchInput />
        <CatalogTable />
      </FilterProvider>
    </>
  )
}

const CatalogPage = () => (
  <PageLayout
    header={
      <Header
        left={<Logo />}
        right={<CartBadge />}
      />
    }
    body={<CatalogContent />}
  />
)

export default CatalogPage;
