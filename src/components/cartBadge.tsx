import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, GlobalToken, theme } from "antd";

interface CartBadgeProps extends Pick<GlobalToken, 'fontSize'>{
  count: number;
}

const CartBadge = ({count, fontSize}: CartBadgeProps) => (
  <Badge count={count}>
    <ShoppingCartOutlined style={{fontSize}} />
  </Badge>
)

const ConnectedCartBadge = () => {
  const { token } = theme.useToken();
  const count = 0 // TODO: replace this with context value
  return <CartBadge fontSize={token.fontSize} count={count} />
}

export default ConnectedCartBadge;
