import { Component } from "react";

class UserCArd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { avatar_url, login } = this.props;

    return (
      <div className="card">
        <img src={avatar_url} alt="avatar" />
        <div>{login}</div>
      </div>
    );
  }
}

export default UserCArd;
