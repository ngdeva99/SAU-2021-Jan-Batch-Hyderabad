import React from "react";

export default class Fetch_API extends React.Component {
    
  state = {
    loading: true,
    person: null
  };

  async componentDidMount() {
   //const url = "https://api.randomuser.me/";
   const url = "https://api.github.com/users/hadley/orgs"
   const response = await fetch(url);
   const data = await response.json();
    this.setState({ person: data[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <div>
          
        <div>{this.state.person.login}</div><br/>
        <div>{this.state.person.url}</div>
        <div>{this.state.person.node_id}</div>
        <img src={this.state.person.avatar_url} />

      </div>
    );
  }
}