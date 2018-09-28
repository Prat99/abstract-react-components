import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormsyElement from '../FormsyElement/FormsyElement';
class Auth extends Component {

    constructor(props) {
        super(props);
        this.state = {
            auth: {
                login: {
                    email: {
                        elementType: 'input',
                        elementConfig: {
                            name: 'email',
                            type: 'text',
                            label: 'Email',
                            validations: 'isEmail',
                            validationError: 'Email is not valid',
                            required:true
                        }
                    },
                    password: {
                        elementType: 'input',
                        elementConfig: {
                            name: 'password',
                            type: 'password',
                            label: 'Password',
                            required: true
                        }
                    },
                },
                register: {
                    name: {
                        elementType: 'input',
                        elementConfig: {
                            name: 'name',
                            type: 'text',
                            label: 'Name',
                            required: true
                        }
                    },
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
                    dob: {
                        elementType: 'calendar',
                        elementConfig: {
                            name: 'dob',
                            type: 'text',
                            label: 'Date of Birth',
                            required: true
                        }
                    },
                    gender: {
                        elementType: 'radio',
                        elementConfig: {
                            name: 'gender',
                            label: '',
                            options: ['Male', 'Female'],
                            required: true,
                            selectedOptions: []
                        }
                    },
                    password: {
                        elementType: 'input',
                        elementConfig: {
                            name: 'password',
                            type: 'password',
                            label: 'Password',
                            required: true
                        }
                    },
                    cpassword: {
                        elementType: 'input',
                        elementConfig: {
                            type: 'password',
                            name: 'cpassword',
                            label: 'Confirm Password',
                            validations: 'equalsField:password',
                            validationErrors: {
                                minLength: 'min password length should be 6',
                                equalsField: 'password and confirm password should match'
                            },
                            required: true
                        }
                    },
                    term: {
                        elementType: 'checkbox',
                        elementConfig: {
                            name: 'term',
                            label: '',
                            required: 'isFalse'
                        }
                    },
                    
                }
            },
            canSubmit: false
        }
    }


    // whenevr the form becomes invalid this handler will be called which invalidate the state
    disableButton = () => {
        this.setState({ canSubmit: false });
    }

    // whenever the form becomes valid enableButton handler will be called 
    // and can change the state.
    enableButton = () => {
        this.setState({ canSubmit: true });
    }

    submit(model, reset, inv) {
        // fetch('http://example.com/', {
        //   method: 'post',
        //   body: JSON.stringify(model)
        // });
        // console.log('reset', reset);
        // console.log('invalidate object', inv);
        console.log('final submit', model);
        // reset();
    }
    render() {
        let authForm = [];
        let registerElm;
        const registerObj = this.state.auth.register;
       // console.log('register obj', registerObj);
        for (const key in registerObj) {
            if (registerObj.hasOwnProperty(key)) {
                registerElm = null;
                let element = registerObj[key];
               console.log('element',element);
                registerElm = <FormsyElement
                    key = {key + 1}
                    name={element.elementConfig.name}
                    label={element.elementConfig.label}
                    validations={element.elementConfig.validations}
                    validationErrors={element.elementConfig.validationErrors}
                    required={element.elementConfig.required}
                    element={element.elementType}
                    options={element.elementConfig.options}
                    selectedOptions={element.elementConfig.selectedOptions}
                />
            }
            authForm.push(registerElm);
        }
        return (
            <div>
                <Formsy
                    className='Register'
                    onValidSubmit={this.submit}
                    ref='form'
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onInvalidSubmit={this.notifyFormError}>
                    {authForm}
                </Formsy>
            </div>
        );
    }
}

export default Auth;