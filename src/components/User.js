import React from 'react';
import axios from 'axios';

class User extends React.Component {
    state = {
        userData: [],
    }

   componentDidMount(){
        axios.get('https://api.github.com/users/Jaredhall18')
        .then(resp=> {
            console.log(resp.data);
            this.setState({
                ...this.state,
                userData: resp.data
            });
        })
   }
      
 

    render(){
        return(
            <div>
                <h1>{this.state.userData.name}'s Profile</h1>
                <div>
                    <img src={this.state.userData.avatar_url} alt={this.state.userData.avatar_url}/>
                    <div>
                        <h3>{this.state.userData.login}</h3>
                        <h3>{this.state.userData.location}</h3>
                        <h3>URL: {this.state.userData.html_url}</h3>
                        <h3>Bio: {this.state.userData.bio} </h3>
                    </div>
                </div>
                <h2>Jared Has {this.state.userData.followers} Followers!</h2>
            </div>
        )
    }
}
export default User;