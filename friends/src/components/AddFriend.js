import React from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {
    state = {
        name: '',
        age: '',
        food: '',
        email: ''
    };

    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };


    addFriend = () => {
        axiosWithAuth()
            .post('/friends', this.state)
            .then(res => {
                console.log('new friend res: ' + res);
                
            })
            .catch(err => console.log('new friend err: ' + err))
    };

    render() {
        return (
            <>
                <form onSubmit={this.addFriend}>
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.name}
                    />

                    <input
                        type="text"
                        placeholder="Age"
                        name="age"
                        onChange={this.handleChange}
                        value={this.state.age}
                    />

                    <input
                        type="text"
                        placeholder="Favorite Food"
                        name="food"
                        onChange={this.handleChange}
                        value={this.state.food}
                    />

                    <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                    />
                    <button>Add Friend</button>
                </form>
            </>
        )
    }
}

export default AddFriend;