import React, { Component } from 'react';
import Formsy from 'formsy-react';
import FormsyElement from '../FormsyElement/FormsyElement';
import SweetAlert from 'sweetalert2-react';
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
                },
                register: {
                    name: {
                        elementType: 'input',
                        elementConfig: {
                            name: 'name',
                            type: 'text',
                            label: 'Name',
                            validations: {isWords: true},
                            validationErrors: {isWords: 'Not a valid name'},
                            required: true
                        }
                    },
                    email: {
                        elementType: 'email',
                        elementConfig: {
                            name: 'email',
                            type: 'email',
                            label: 'Email',
                            validations:{ isEmail: true, maxLength: 20 },
                            validationErrors : {
                                isEmail: 'not a valid email',
                                maxLength: 'max length is 20 words'
                            },
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
                            options: ['male', 'female'],
                            required: true,
                            selectedOptions: []
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
                    cpassword: {
                        elementType: 'password',
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
            canSubmit: false,
            show: false,
            model:''
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

    submit = (model, reset, inv) => {
        // fetch('http://example.com/', {
        //   method: 'post',
        //   body: JSON.stringify(model)
        // });
        // console.log('reset', reset);
        // console.log('invalidate object', inv);
        this.setState({ show:true });
        console.log('final submit', model);
        // reset();
    }

    resetForm = () => {
        console.log('reset form', this.refs.form);
        this.setState({ canSubmit: false })
        this.refs.form.reset({ terms: false, gender: 'male' });
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
                registerElm = <FormsyElement
                    key={key + 1}
                    name={element.elementConfig.name}
                    type={element.elementConfig.type}
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
                <h1 style={{ 'textAlign': 'center', 'marginTop': '30px' }}>New User Registration Form</h1>
                <SweetAlert
                    show={this.state.show}
                    title="Demo"
                    text="Final submit"
                    onConfirm={() => this.setState({ show: false})}
                />
                <Formsy
                    className='Register'
                    onValidSubmit={this.submit}
                    ref='form'
                    onValid={this.enableButton}
                    onInvalid={this.disableButton}
                    onInvalidSubmit={this.notifyFormError}>
                    {authForm}
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                            <button className="btn btn-success" disabled={!this.state.canSubmit}>Submit</button>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <button className="btn btn-danger" onClick={this.resetForm}>Cancel</button>
                        </div>
                    </div>
                </Formsy>
            </div>
        );
    }
}

export default Auth;