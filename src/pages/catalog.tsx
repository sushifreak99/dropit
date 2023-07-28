import PageLayout from "../layout/pageLayout"
import Header from "../components/header"
import Logo from "../components/logo"
import CartBadge from "../components/cartBadge"
import CatalogTable from "../components/catalogTable"
import { Layout, Typography } from "antd"

const { Content } = Layout;

const CatalogContent = () => {
  return (
    <Content>
      <Content style={{ maxWidth: '1271px' }}>
        <Typography.Title level={3}>Catalog page</Typography.Title>
        <CatalogTable />
      </Content>
    </Content>
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
