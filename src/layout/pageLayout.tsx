import { Layout } from "antd"

interface PageLayoutProps {
  header: React.ReactNode,
  body: React.ReactNode, 
}

const PageLayout = ({header, body}: PageLayoutProps) => (
    <Layout>
      {header}
      {body}
    </Layout>
  )

export default PageLayout;
