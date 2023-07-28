import { Avatar, Button, Table } from "antd";
import { getCatalog } from "../utils/catalog";
import { PlusSquareOutlined } from "@ant-design/icons";
import { hasError, hasSuccess, useLoading } from "../utils/loadingState";
import { useCart } from "../utils/cartContext";
import { useFilter } from "../utils/filterContext";

const { Column } = Table;

interface AddToCartActionProps {
  onAdd: (itemId: string) => void;
  id: string;
}

const AddToCartAction = ({id,  onAdd }: AddToCartActionProps) => (
  <Button onClick={() => onAdd(id)} type="text"><PlusSquareOutlined /></Button>
)

const ConnectedAddToCartAction = ({id}: Pick<AddToCartActionProps, 'id'>) => {
  const { add: onAdd } = useCart();
  return <AddToCartAction id={id} onAdd={onAdd} />
}

const CatalogTable = () => {
  const state = useLoading(getCatalog);
  const { searchTerm } = useFilter();
  if (hasError(state)) {
    return <div>Failed loading catalog</div>
  }
  console.log(state)
  return (
      <Table
        dataSource={hasSuccess(state) ? state.data.filter(item => searchTerm === '' || item.title.includes(searchTerm) || item.id.includes(searchTerm)) : []}
        pagination={false}
        scroll={{
          scrollToFirstRowOnChange: true,
          y: 600,
        }}
      >
        <Column title="Image"
          dataIndex="image"
          key="image"
          render={(imageUrl) => <Avatar shape="square" size={35} src={imageUrl} />}
        />
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Title" dataIndex="title" key="title" />
        <Column title="Price" dataIndex="price" key="price" render={(price) => `$${price}`} />
        <Column
          title=""
          width={"100px"}
          dataIndex="id"
          key="add-to-cart-action"
          render={(id) => <ConnectedAddToCartAction id={id} /> }
        />
      </Table>
  );
}

export default CatalogTable;
