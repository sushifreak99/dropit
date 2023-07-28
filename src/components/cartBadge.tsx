import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, BadgeProps, GlobalToken, theme } from "antd";
import { computeCartQuantity } from "../utils/cartContext";

interface CartBadgeProps {
  count: number;
  badgeSize: BadgeProps['size'];
  cartFontSize: GlobalToken['fontSize'];
}

const CartBadge = ({count, badgeSize, cartFontSize}: CartBadgeProps) => (
  <Badge count={count} size={badgeSize}>
    <ShoppingCartOutlined style={{fontSize: cartFontSize}} />
  </Badge>
)

const ConnectedCartBadge = () => {
  const { token } = theme.useToken();
  const count = computeCartQuantity();
  return <CartBadge badgeSize="small" cartFontSize={token.fontSizeXL} count={count} />
}

export default ConnectedCartBadge;
