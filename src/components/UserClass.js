import React from 'react'
import { DEFAULT_AVATAR_URL, USER_API } from '../utils/constants';

class UserClass extends React.Component {
  constructor(){
    super();
    this.state = {
      userInfo:{
        name: "Dummy",
        location: "World",
        avatar_url: DEFAULT_AVATAR_URL,
      }
    };
    
  }

  async componentDidMount (){
    const user = await fetch(USER_API);
    const json = await user.json();
    this.setState({userInfo: json});
  }

  render() {
    const {name,location, avatar_url} = this.state.userInfo;
    return (
      <div>
        <img src = {avatar_url} />
        <h3>Name: {name}</h3>
        <h4>Location: {location}</h4>
      </div>
    )
  }
}

export default UserClass;