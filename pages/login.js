import Layout from "../components/layout";
import LoginForm from "../components/loginForm";
import { authInitialProps } from "../lib/auth";

const Login = (props) => (
  <Layout title="Login" {...props}>
    <LoginForm />
  </Layout>
);

Login.getInitialProps = authInitialProps();

export default Login;
