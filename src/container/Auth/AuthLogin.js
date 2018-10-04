import React, { Component } from 'react';

class AuthLogin extends Component {

    constructor() {
        super(props);
        this.state = {
            login: {
                email: {
                    elementType: 'input',
                    elementConfig: {
                        name: 'email',
                        type: 'text',
                        label: 'Email',
                        validations: 'isEmail',
                        validationError: 'Email is not valid',
                        required: true
                    }
                },
                password: {
                    elementType: 'password',
                    elementConfig: {
                        name: 'password',
                        type: 'password',
                        label: 'Password',
                        required: true
                    }
                },
            }
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default AuthLogin;