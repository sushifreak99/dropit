import PageLayout from "../layout/pageLayout"
import Header from "../components/header"
import Logo from "../components/logo"
import CartBadge from "../components/cartBadge"

const CatalogPage = () => (
  <PageLayout
    header={
      <Header
        left={<Logo />}
        right={<CartBadge />}
      />
    }
    body={null}
  />
)

export default CatalogPage;
