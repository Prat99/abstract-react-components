import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" 
                           name = 'name' 
                           type="text" 
                           placeholder="Name" 
                           onChange={props.inputChange}
                           value={props.name} />
                </div>
            </div>
            <div className="field">
                <label className="label">Job</label>
                <div className="control">
                    <input className="input"
                           type="text"
                           name = 'job' 
                           placeholder="Job" 
                           onChange={props.inputChange}
                           value={props.job}/>
                </div>
            </div>
            <a className="button is-success" onClick={props.btnSubmit}>Add</a>
            </form>
        </div>
    );
};

export default Form;