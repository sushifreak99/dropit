import Logo from "../components/logo"
import CartBadge from "../components/cartBadge"
import Header from "../components/header"
import PageLayout from "../layout/pageLayout"
import { Avatar, Spin, Table, Typography } from "antd"
import { computedCatalogMap, useCatalog } from "../utils/catalogContext"
import { hasError, hasSuccess, isLoading } from "../utils/loadingState"
import { useCart } from "../utils/cartContext"
import ConnectedQuantityInput from "../components/quantityInput"

const { Title } = Typography;
const { Column } = Table;

interface CartData {
  key: string,
  id: string,
  image: string,
  title: string,
  price: number,
  quantity: number,
  total: number,
}

const CartContent = () => {
  const mappedCatalog = computedCatalogMap();
  const { items } = useCart();
  const { state } = useCatalog();

  let dataSource: CartData[] = [];
  if (hasError(state)) {
    return <div>Oh no! Something went wrong! Cannot load catalog items.</div>
  }

  if (hasSuccess(state)) {
    dataSource = Object.keys(items).map(itemId => {
      const price = mappedCatalog.get(itemId)?.price || 0;
      const quantity = items[itemId] ?? 0;
      return {
        key: itemId,
        id: itemId,
        image: mappedCatalog.get(itemId)?.image || '',
        title: mappedCatalog.get(itemId)?.title || '',
        price,
        quantity,
        total: quantity * price,
      }
    })
  }

  return (
      <>
      <Title level={3}>Your cart</Title>
      <Spin tip="Loading catalog items..." spinning={isLoading(state)}>
        <Table
          dataSource={dataSource}
          pagination={false}
          scroll={{
            scrollToFirstRowOnChange: true,
            y: 600,
          }}
        >
          <Column title="Item"
            dataIndex="image"
            key="cart_image"
            render={(imageUrl) => <Avatar shape="square" size={35} src={imageUrl} />}
          />
          <Column title="Title" dataIndex="title" key="cart_title" />
          <Column title="Price" dataIndex="price" key="cart_price" render={(price) => `$${price}`} />
          <Column title="Quantity" dataIndex="id" key="cart_quantity" render={(id) => <ConnectedQuantityInput id={id} />} />
          <Column title="Total" dataIndex="total" key="cart_total" />
        </Table>
      </Spin>
      </>
  )
}

const CartPage = () => {
  return (
    <PageLayout
      header={<Header left={<Logo />} right={<CartBadge />} />}
      body={<CartContent />}
    />
  )
}

export default CartPage;
