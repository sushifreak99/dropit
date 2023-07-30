import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useCart } from "../utils/cartContext";

const { Group } = Button

interface QuantityInputProps {
  count: number,
  onIncrement: () => void,
  onDecrement: () => void,
}

const QuantityInput = ({ count, onIncrement, onDecrement}: QuantityInputProps) => {
  return (
    <Group>
      <Button icon={<MinusOutlined />} onClick={onDecrement} />
      <Button>{count}</Button>
      <Button icon={<PlusOutlined />} onClick={onIncrement} />
    </Group>
  );
}

interface ConnectedQuantityInputProps {
  id: string,
}

const ConnectedQuantityInput = ({ id }: ConnectedQuantityInputProps) => {
  const {add, remove, items} = useCart();
  return (
    <QuantityInput
      count={items[id] ?? 0}
      onIncrement={() => add(id)}
      onDecrement={() => remove(id)} />
  )
}

export default ConnectedQuantityInput;
