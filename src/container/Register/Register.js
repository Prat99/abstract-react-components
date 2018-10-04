import React, { Component } from 'react'
import Form from '../../components/Form/Form';
import './Register.css';
import Formsy from 'formsy-react';
import FormsyElement from '../FormsyElement/FormsyElement';

const USER_DATA = {
  profile: "Backend",
  btechnology: "Node",
  cpassword: "foobar",
  email: "foo@test.com",
  gender: "Male",
  message: "looking for  node developer.",
  name: "Foo",
  password: "foobar",
  terms: true,
  username: "Foo_36"
}
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { canSubmit: false, isChecked: false, selectOption: null };
  }
  // service worker API example to cache the pages for offline loading
  componentWillMount() {
    // check if service worker is enabled
    // if('serviceWorker' in navigator) {
    //   console.log('service worker is registered');
    //   navigator.serviceWorker.register('./sw_registeredpages.js')
    //   .then(reg => console.log('service worker is registered'))
    //   .catch( err => console.log(`error: ${err}`))
    // }
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

  notifiyFormError = (model) => {
    console.log('notifyFormError', model);
  }

  backPageHandler = () => {
    this.props.history.goBack();
  }

  selectChangeHandler = (e) => {
    console.log('selectChanngeHandler', e.target.value);
    const { value } = e.target;
    switch (value) {
      case 'Frontend':
        this.setState({
          selectOption: value
        });
        break;
      case 'Backend':
        this.setState({
          selectOption: value
        });
        break;
      case 'System Admin':
        this.setState({
          selectOption: value
        });
        break;

      default:
        break;
    }
  }
  resetForm = () => {
    console.log('reset form', this.refs.form);
    this.setState({ isChecked: false })
    this.refs.form.reset({ terms: false, gender: 'Male' });
  }

  render() {
    let subSelect = null;
    switch (this.state.selectOption) {
      case 'Frontend':
        subSelect = <FormsyElement
          name="ftechnology"
          label='Choose your technology'
          required
          element='select'
          options={['Angular', 'Reactjs', 'Vuejs']}
        />
        break;
      case 'Backend':
        subSelect = <FormsyElement
          name="btechnology"
          label='Choose your technology'
          required
          element='select'
          options={['Node', 'Java', 'Python']}
        />
        break;
      case 'System Admin':
        subSelect = <FormsyElement
          name="stechnology"
          label='Choose your technology'
          required
          element='select'
          options={['AWS', 'Azure', 'Google Cloud']}
        />
        break;
      default:
        break;
    }
    return (
      <div className='row'>
        <div className='col-md-4 col-lg-4'>
          <button style={{ marginTop: '20px' }} className='btn btn-dark' type='button' onClick={this.backPageHandler}>
            <i className="fa fa-arrow-left"></i>
            back
          </button>
        </div>
        <div className='column-md-4 col-lg-4'>
          <Formsy className='Register'
            onValidSubmit={this.submit} // when form is submitted with the valid state, submit handler
            // will be called submit(formData, reset, invalidateTheForm) 
            ref='form'
            onValid={this.enableButton}
            onInvalid={this.disableButton}
            onInvalidSubmit={this.notifyFormError}>
            <FormsyElement
              name="name"
              label='Name'
              validations="isWords"
              validationError="only words Name allowed"
              required
              value={USER_DATA.name}
              element='input'
            />
            <FormsyElement
              name="username"
              label='Username'
              validations={{ maxLength: 10, minLength: 4 }}
              validationErrors={{
                maxLength: "maximum 10 words allowed",
                minLength: 'minimum 4 character is required'
              }}
              required
              value={USER_DATA.username}
              element='input'
            />
            <FormsyElement
              name="email"
              label='Email'
              type='email'
              validations={{ isEmail: true, maxLength: 20 }}
              validationErrors={{
                isEmail: 'not a valid email',
                maxLength: 'max length is 20 words'
              }}
              value={USER_DATA.email}
              required
              element='email'
            />
            <FormsyElement
              name="password"
              label='Password'
              validations={{ minLength: 6 }}
              validationErrors={{
                minLength: 'min password length should be 6'
              }}
              value={USER_DATA.password}
              required
              element='password'
            />
            <FormsyElement
              name="cpassword"
              label='Confirm Password'
              validations="equalsField:password"
              validationErrors={{
                minLength: 'min password length should be 6',
                equalsField: 'password and confirm password should match'
              }}
              required
              value={USER_DATA.cpassword}
              element='password'
            />
            <FormsyElement
              name="gender"
              label=''
              required
              element='radio'
              options={['Male', 'Female']}
              selectedOptions={['Female']}
            // value={USER_DATA.gender}
            />
            <FormsyElement
              name="profile"
              label='Choose your profile'
              required
              element='select'
              controlFunc={this.selectChangeHandler}
              value={USER_DATA.profile}
              options={['Frontend', 'Backend', 'System Admin']}
            />
            {subSelect}
            <FormsyElement
              name="message"
              label='Message'
              element='textarea'
              value={USER_DATA.message}
            />
            <FormsyElement
              name="terms"
              element='checkbox'
              required='isFalse' // define your required config, for checkbox define isFalse.
              value={USER_DATA.terms}
            />
            <div className="row">
              <div className="col-md-3 col-lg-3">
                <button className="btn btn-success" disabled={!this.state.canSubmit}>Submit</button>
              </div>
              <div className="col-md-3 col-lg-3">
                <button className="btn btn-danger" onClick={this.resetForm}>Cancel</button>
              </div>
            </div>
          </Formsy>
        </div>
        <div className='col-md-4 col-lg-4'></div>
      </div>
    )
  }
}
