import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { isTyping, useFilter } from "../utils/filterContext";

const ConnectedSearchInput = () => {
  const { onType, state } = useFilter();
  return (
    <Input
      style={{ margin: '16px 0', maxWidth: '622px' }}
      size="large"
      placeholder="Search Item"
      prefix={<SearchOutlined />}
      onChange={event => onType(event.currentTarget.value)}
      suffix={isTyping(state) ? <LoadingOutlined /> : null}
    />
  );
}

export default ConnectedSearchInput;
