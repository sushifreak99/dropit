import { GlobalToken, Layout, theme, } from "antd";

const { Header: LayoutHeader } = Layout;


interface SimpleHeaderProps extends Pick<GlobalToken, 'colorBgContainer'>{
  left: React.ReactNode,
  right: React.ReactNode,
}

const SimpleHeader = ({left, right, colorBgContainer}: SimpleHeaderProps) => (
      <LayoutHeader
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colorBgContainer,
        }}
      >
        {left}
        {right}
      </LayoutHeader>
)

const ConnectedDropItHeader = (props: Pick<SimpleHeaderProps, 'left' | 'right'>) => {
  const { token } = theme.useToken();
  return <SimpleHeader {...props} colorBgContainer={token.colorBgContainer} />
}

export default ConnectedDropItHeader;
