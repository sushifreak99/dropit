import { theme, Typography } from "antd";

const { Text } = Typography;

const ConnectedLogo = () => {
  const { token } = theme.useToken();
  return <Text style={{fontSize: token.fontSize}}>Drop it</Text>
}

export default ConnectedLogo;
