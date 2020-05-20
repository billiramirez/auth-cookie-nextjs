import Layout from "../components/layout";
import Link from "next/link";

const Index = () => (
  <Layout title="Home">
    <Link href="/profile">
      <a> Go to Profile</a>
    </Link>
  </Layout>
);

export default Index;
