import { Layout } from "antd"

interface PageLayoutProps {
  header: React.ReactNode,
  body: React.ReactNode, 
}

const { Content } = Layout;


const PageLayout = ({header, body}: PageLayoutProps) => (
    <Layout style={{height: '100%'}}>
      {header}
      <Content style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', padding: '24px 0'}}>
        <Content style={{ maxWidth: '1271px' }}>
          {body}
        </Content>
      </Content>
    </Layout>
  )

export default PageLayout;
