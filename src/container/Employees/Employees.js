import React, { Component } from 'react'
import Table from '../../components/Table/Table';
import './Employees.css';
import Form from '../../components/Form/Form';

const characters = [
  {
    'name': 'Charlie',
    'job': 'Janitor'
  },
  {
    'name': 'Mac',
    'job': 'Bouncer'
  },
  {
    'name': 'Dee',
    'job': 'Aspring actress'
  },
  {
    'name': 'Dennis',
    'job': 'Bartender'
  }
];

export default class Employees extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: characters,
      name: '',
      job: ''
    }
  }
  // Check the input elements input value change
  inputChangeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  formSubmitHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const characters = [...this.state.characters];
    const newObj = {
      name: this.state.name,
      job: this.state.job
    }
    characters.push(newObj);
    this.setState({
      characters: characters
    });
    this.setState({
      name: '',
      job: ''
    });
  }

  deleteCharacterHandler = (ch) => {
    let characters = [...this.state.characters];
    characters = characters.filter((character) => {
      return character.name !== ch.name
    });
    this.setState(prevState => {
      return {
        characters: characters
      }
    });
  }

  registerBtnHandler = () => {
    this.props.history.push('/register');
  }
  authBtnHandler = () => {
    this.props.history.push('auth');
  }
  render() {
    return (
      <div className='Employees'>
        <div className='row screens' >
          <div className='col-md-3'>
            <button className="btn btn-primary" onClick={this.registerBtnHandler}>Register</button>
          </div>
          <div className='col-md-3'>
            <button className="btn btn-success" onClick={this.authBtnHandler}>Auth</button>
          </div>
          <div className='col-md-3'></div>
          <div className='col-md-3'></div>
        </div>
        <Table characters={this.state.characters} delete={this.deleteCharacterHandler}></Table>
        <Form inputChange={this.inputChangeHandler}
          btnSubmit={this.formSubmitHandler}
          name={this.state.name}
          job={this.state.job}></Form>
      </div>
    )
  }
}
