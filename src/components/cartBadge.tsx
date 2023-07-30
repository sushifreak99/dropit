import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Badge, BadgeProps, GlobalToken, theme } from "antd";
import { computeCartQuantity } from "../utils/cartContext";
import { useNavigate } from "react-router-dom";

interface CartBadgeProps {
  count: number,
  badgeSize: BadgeProps['size'],
  cartFontSize: GlobalToken['fontSize'],
  onClick: () => void,
}

const CartBadge = ({count, badgeSize, cartFontSize, onClick}: CartBadgeProps) => (
  <Button onClick={onClick}>
    <Badge count={count} size={badgeSize}>
      <ShoppingCartOutlined style={{fontSize: cartFontSize}} />
    </Badge>
  </Button>
)

const ConnectedCartBadge = () => {
  const { token } = theme.useToken();
  const count = computeCartQuantity();
  const navigate = useNavigate();
  return (
    <CartBadge
      badgeSize="small"
      cartFontSize={token.fontSizeXL}
      count={count}
      onClick={() => navigate("/cart")}
    />
  )
}

export default ConnectedCartBadge;
