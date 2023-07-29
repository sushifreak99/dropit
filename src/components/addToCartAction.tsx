import { useCart } from "../utils/cartContext";
import { PlusSquareOutlined } from "@ant-design/icons";
import { Button } from "antd";

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

export default ConnectedAddToCartAction
