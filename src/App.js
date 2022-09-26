import { Component } from "react";
import Users from "./card";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user_data: [], loading: false };
    this.updateState = this.updateState.bind(this);
  }
  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ user_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="navitems">
            <h2>EasyGoing</h2>
            <button className="fetchbtn" onClick={this.updateState}>
              Get Users
            </button>
          </div>
        </nav>
        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.user_data} />
        </div>
      </>
    );
  }
}
export default App;
