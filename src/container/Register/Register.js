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

    disableButton = () => {
      this.setState({ canSubmit: false });
    }
  
    enableButton = () =>  {
      this.setState({ canSubmit: true });
    }
  
    submit(model) {
      // fetch('http://example.com/', {
      //   method: 'post',
      //   body: JSON.stringify(model)
      // });
      console.log('final submit', model);
    }


  render() {
    return (
      <div className='columns'>
       <div className='column'></div>
        <div className='column'>
        <Formsy onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
        <FormsyElement
          name="email"
          validations="isEmail"
          validationError="This is not a valid email"
          required
        />
        <FormsyElement
          name="Name"
          validations="isText"
          validationError="Name is required"
          required
        />
        <button type="submit" disabled={!this.state.canSubmit}>Submit</button>
      </Formsy>
        </div>
        <div className='column'></div>
      </div>
    )
  }
}
