import { useMDXComponent } from 'next-contentlayer/hooks';
import Layout from '../../components/Layout';

export default function Blog({ blog }: any) {
  const Component = useMDXComponent(blog.mdx);
  return (
    <Layout>
      <Component />
    </Layout>
  );
}
