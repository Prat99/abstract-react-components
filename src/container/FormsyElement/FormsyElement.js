import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';

class FormsyElement extends Component {
    constructor(props) {
        super(props);
      }

    changeValue = (event) =>{
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        this.props.setValue(event.currentTarget.value);
    }
    render() {
        const errorMessage = this.props.getErrorMessage();
        return (
            <div>
                <input
                onChange={this.changeValue}
                type="text"
                value={this.props.getValue() || ''}
                />
                <span>{errorMessage}</span>
            </div>
        )
    }
}

export default withFormsy(FormsyElement)
