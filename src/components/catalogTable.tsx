import { Avatar, Button, Table } from "antd";
import { getCatalog } from "../utils/catalog";
import { PlusSquareOutlined } from "@ant-design/icons";
import { hasError, hasSuccess, useLoading } from "../utils/loadingState";

const { Column } = Table;

interface AddToCartActionProps {
  onAdd: (itemId: string) => void;
  id: string;
}

const AddToCartAction = ({id,  onAdd }: AddToCartActionProps) => (
  <Button onClick={() => onAdd(id)} type="text"><PlusSquareOutlined /></Button>
)

const CatalogTable = () => {
  const state = useLoading(getCatalog);
  if (hasError(state)) {
    return <div>Failed loading catalog</div>
  }
  return (
      <Table
        dataSource={hasSuccess(state) ? state.data : []}
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
          dataIndex="id"
          key="add-to-cart-action"
          render={(id) => <AddToCartAction id={id} onAdd={() => console.log('add id', id)} /> }
        />
      </Table>
  );
}

export default CatalogTable;
