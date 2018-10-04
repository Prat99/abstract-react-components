import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label className="label">Name</label>
                    <input className="form-control"
                        name='name'
                        type="text"
                        placeholder="Name"
                        onChange={props.inputChange}
                        value={props.name} />
                </div>
                <div className="form-group">
                    <label className="label">Job</label>
                    <input className="form-control"
                        type="text"
                        name='job'
                        placeholder="Job"
                        onChange={props.inputChange}
                        value={props.job} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <button className='btn btn-success' type='submit' onClick={props.btnSubmit}>Add</button>
                </div>
            </form>
        </div>
    );
};

export default Form;