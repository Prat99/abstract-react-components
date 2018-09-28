import React, { Component } from 'react';
import { withFormsy } from 'formsy-react';
import bulmaCalendar from 'bulma-calendar';

class FormsyElement extends Component {
    constructor(props) {
        super(props);
        // Initialize all input of date type.
        const calendars = bulmaCalendar.attach('[type="date"]', {});
        // Loop on each calendar initialized
        calendars.forEach(calendar => {
            // Add listener to date:selected event
            calendar.on('date:selected', date => {
                console.log(date);
            });
        });
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
                    className='input'
                    onChange={this.changeValue}
                    type="text"
                    value={this.props.getValue() || ''}
                />
                break;
            case 'password':
                domElement = <input
                    className='input'
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
                domElement = <input onChange={this.changeValue} value={this.props.getValue() || ''} type="date" data-display-mode="inline" data-is-range="true" data-close-on-select="false" />
                break;
            case 'select':
                domElement = <div className='select'>
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
                domElement = <textarea className="textarea"
                    placeholder="Textarea"
                    onChange={this.changeValue}
                    value={this.props.getValue() || ''}></textarea>
                break;
            case 'checkbox':
                domElement = <div>
                    <input type="checkbox"
                        onChange={this.changeValue}
                        value={this.props.getValue()}
                        checked={this.props.getValue() || ''}
                    />&nbsp;
                    I agree to the < a href="#" > terms and conditions</a >
                </div>
                break;
            case 'radio':
                domElement = this.props.options.map((opt) => {
                    return (
                        <label className="radio" key={opt + 1}>
                            <input type="radio" name={this.props.name}
                                value={this.props.getValue() || ''}
                                onChange={this.changeValue}
                                checked={this.props.selectedOptions.indexOf(opt) > -1 }
                            />
                            {opt}
                        </label>
                    )
                })
                break;
            default:
                break;
        }
        const errorMessage = this.props.getErrorMessage();
        const req = this.props.isRequired && this.props.label ? '*' : null;
        const label = this.props.label ? <label className='label'>
            {this.props.label}
            <span style={{ color: 'red' }}>{req}</span>
        </label> : null
        return (
            <div className='field'>
                {label}
                <div className='control'>
                    {domElement}
                </div>
                <span style={{ color: 'red' }}>{errorMessage}</span>
            </div>
        )
    }
}

export default withFormsy(FormsyElement);

// all formsy elements should be wrapped with withFormsy HOC 
// properties and methods provided by the withFormsy
