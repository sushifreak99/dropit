import { Avatar, Spin, Table } from "antd";
import { hasError, hasSuccess, isLoading } from "../utils/loadingState";
import { useFilter } from "../utils/filterContext";
import ConnectedAddToCartAction from "./addToCartAction";
import { useCatalog } from "../utils/catalogContext";

const { Column } = Table;


const CatalogTable = () => {
  const { state } = useCatalog();
  const { searchTerm } = useFilter();
  if (hasError(state)) {
    return <div>Failed loading catalog</div>
  }
  return (
    <Spin tip="Loading catalog items" spinning={isLoading(state)}>
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
    </Spin>
  );
}

export default CatalogTable;
