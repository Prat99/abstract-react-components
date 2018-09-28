import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
var DatePicker = require("react-16-bootstrap-date-picker");
class FormsyElement extends Component {
    constructor(props) {
        super(props);
        // console.log('props in formsyElements', props);
    }

    changeValue = (event) => {
        // setValue() will set the value of the component, which in
        // turn will validate it and the rest of the form
        // Important: Don't skip this step. This pattern is required
        // for Formsy to work.
        console.log('change Value', event);
        if (this.props.controlFunc) {
            this.props.controlFunc(event);
        }
        this.props.setValue(event.currentTarget[this.props.element === 'checkbox' ? 'checked' : 'value']);
    }

    render() {
        var face = this.props.isValid() ? ':-)' : ':-(';
        const elementType = this.props.element;
        let domElement = null;
        switch (elementType) {
            case 'input':
                domElement = <input
                    className='form-control'
                    onChange={this.changeValue}
                    type="text"
                    value={this.props.getValue() || ''}
                />
                break;
            case 'password':
                domElement = <input
                    className='form-control'
                    onChange={this.changeValue}
                    type="password"
                    value={this.props.getValue() || ''}
                />
                break;
            case 'calendar':
                // domElement = <input
                //     onChange={this.changeValue}
                //     type="date"
                //     value={this.props.getValue() || ''}
                // />
                domElement = <DatePicker id="example-datepicker" value={this.props.getValue() || new Date().toISOString()}
                    onChange={this.changeValue} />
                break;
            case 'select':
                domElement = <div className='form-control'>
                    <select onChange={this.changeValue} value={this.props.getValue() || ''}>
                        <option>Select dropdown</option>
                        {this.props.options ? this.props.options.map((opt) => {
                            return (
                                <option key={opt} value={opt}>{opt}</option>
                            )
                        }) : null}
                    </select>
                </div>
                break;
            case 'textarea':
                domElement = <textarea className='form-control'
                    placeholder="Textarea"
                    onChange={this.changeValue}
                    value={this.props.getValue() || ''}></textarea>
                break;
            case 'checkbox':
                domElement = <div className='form-check'>
                    <input type="checkbox"
                        className='form-check-input'
                        onChange={this.changeValue}
                        value={this.props.getValue()}
                        checked={this.props.getValue() || ''}
                    />
                    I agree to the < a href="#" > terms and conditions</a >
                </div>
                break;
            case 'radio':
                domElement = this.props.options.map((opt) => {
                    return (
                        <div className='form-check-inline'>
                            <label className="form-check-label" key={opt + 1}>
                                <input type="radio" name={this.props.name}
                                    value={this.props.getValue() || ''}
                                    onChange={this.changeValue}
                                    className='form-check-input'
                                    checked={this.props.selectedOptions.indexOf(opt) > -1}
                                />
                                {opt}
                            </label>
                        </div>
                    )
                })
                break;
            default:
                break;
        }
        const errorMessage = this.props.getErrorMessage();
        const req = this.props.isRequired && this.props.label ? '*' : null;
        const label = this.props.label ? <label>
            {this.props.label}
            <span style={{ color: 'red' }}>{req}</span>
        </label> : null
        return (
            <div className='form-group'>
                {label}
                {domElement}
                <span style={{ color: 'red' }}>{errorMessage}</span>
            </div>
        )
    }
}

export default withFormsy(FormsyElement);

// all formsy elements should be wrapped with withFormsy HOC 
// properties and methods provided by the withFormsy
