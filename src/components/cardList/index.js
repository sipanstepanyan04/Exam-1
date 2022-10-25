import { Component } from "react";
import { API_URL } from "../../constatnt";

import UserCArd from "../userCArd";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.users = [];
    this.state = {
      users: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => this.setState({ users: res }));
  }

  handleInput = (e) => {
    this.setState({ searchInput: e.target.value });
    console.log(e.target.value);
  };

  // handleLike = (id) => {
  //   this.users;
  // };

  render() {
    const {
      state: { users, searchInput },
    } = this;
    return (
      <>
        <label htmlFor="search">searchInput</label>
        <input
          onChange={this.handleInput}
          type="text"
          id="search"
          value={searchInput}
        ></input>
        <div className="container">
          {users.map((user, id) => (
            <UserCArd key={id} {...user} />
          ))}
        </div>
      </>
    );
  }
}

export default CardList;
