import React, { Component } from 'react'
import Form from '../../components/Form/Form';
import Formsy from 'formsy-react';
import FormsyElement from '../FormsyElement/FormsyElement';


export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { canSubmit: false };
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

  resetForm = () => {
    console.log('reset form');
    this.refs.form.reset();
  }


  render() {
    return (
      <div className='columns'>
        <div className='column'></div>
        <div className='column'>
          <Formsy
            onValidSubmit={this.submit} // when form is submitted with the valid state, submit handler
            // will be called submit(formData, reset, invalidateTheForm) 
            ref='form'
            onValid={this.enableButton} // 
            onInvalid={this.disableButton}
            onInvalidSubmit={this.notifyFormError}>
            <FormsyElement
              name="name"
              label='Name'
              validations="isWords"
              validationError="only words Name allowed"
              required
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
              element='input'
            />
            <FormsyElement
              name="email"
              label='Email'
              validations={{ isEmail: true, maxLength: 20 }}
              validationErrors={{
                isEmail: 'not a valid email',
                maxLength: 'max length is 20 words'
              }}
              required
              element='input'
            />
            <FormsyElement
              name="technology"
              label='Technology'
              required
              element='select'
            />
            <FormsyElement
              name="message"
              label='Message'
              required
              element='textarea'
            />
            <FormsyElement
              name="terms"
              element='checkbox'
              required
            />
            <FormsyElement
              name="gender"
              label=''
              required
              element='radio'
              gender={{ key1: 'Male', key2: 'Female' }}
            />
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-link" disabled={!this.state.canSubmit}>Submit</button>
              </div>
              <div className="control">
                <button className="button is-text" onClick={this.resetForm}>Cancel</button>
              </div>
            </div>
          </Formsy>
        </div>
        <div className='column'></div>
      </div>
    )
  }
}
