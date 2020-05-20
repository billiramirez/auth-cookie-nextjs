import Layout from "../components/layout";
import { getUserProfile } from "../lib/auth";

class Profile extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    getUserProfile()
      .then((user) => this.setState({ user }))
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { user } = this.state;

    return (
      <Layout title="Profile">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </Layout>
    );
  }
}

export default Profile;
