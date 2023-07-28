import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, GlobalToken, theme } from "antd";
import { computeCartQuantity } from "../utils/cartContext";

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
  const count = computeCartQuantity();
  return <CartBadge fontSize={token.fontSize} count={count} />
}

export default ConnectedCartBadge;
