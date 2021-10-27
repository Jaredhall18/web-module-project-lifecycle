import React from 'react';
import axios from 'axios';

class Follower extends React.Component {
    state = {
        followerData: [],
    }

   componentDidMount(){
        axios.get('https://api.github.com/users/Jaredhall18/followers')
        .then(resp=> {
            console.log(resp.data);
            this.setState({
                ...this.state,
                followerData: resp.data
            });
        })
   }


    render(){
        return(
            <div>
                {
                    this.state.followerData.map(follower => {
                        return(
                            <div key={follower.id}>
                                <div>
                                    <img src={follower.avatar_url} alt={follower.login}/>
                                </div>
                                <div>
                                    <h3>{follower.login}</h3>
                                    <p>{follower.url}</p>
                                </div>
                                
                                
                                <h3>Bio</h3>
                            </div>
                        )
                    })
                }
            </div>
    )
    }
}
export default Follower;