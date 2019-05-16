import React, { Component } from "react";
import Table from "../../components/Table/Table";
import "./Employees.css";
import Form from "../../components/Form/Form";

const CHARACTERS = [
  {
    name: "Charlie",
    job: "Janitor"
  },
  {
    name: "Mac",
    job: "Bouncer"
  },
  {
    name: "Dee",
    job: "Aspring actress"
  },
  {
    name: "Dennis",
    job: "Bartender"
  }
];

const MENU = [
  {
    name: "Register",
    path: "/register"
  },
  {
    name: "Auth",
    path: "/auth"
  }
];

export default class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: CHARACTERS,
      name: "",
      job: "",
      openNav: false,
      menu: MENU
    };
  }
  // Check the input elements input value change
  inputChangeHandler = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  formSubmitHandler = e => {
    e.preventDefault();
    const characters = [...this.state.characters];
    const newObj = {
      name: this.state.name,
      job: this.state.job
    };
    characters.push(newObj);
    this.setState({
      characters: characters
    });
    this.setState({
      name: "",
      job: ""
    });
  };

  deleteCharacterHandler = ch => {
    let characters = [...this.state.characters];
    characters = characters.filter(character => {
      return character.name !== ch.name;
    });
    this.setState(prevState => {
      return {
        characters: characters
      };
    });
  };

  registerBtnHandler = () => {
    this.props.history.push("/register");
  };

  authBtnHandler = () => {
    this.props.history.push("auth");
  };

  openNavHandler = () => {
    this.setState(prevState => {
      return {
        openNav: true
      };
    });
  };

  closeNavHandler = () => {
    this.setState(prevState => {
      return {
        openNav: false
      };
    });
  };

  render() {
    return (
      <div>
        {/* <Sidebar
          navState={this.state.openNav}
          closeNav={this.closeNavHandler}
          menu = {this.state.menu}
        />
        <span className="nav-btn" onClick={this.openNavHandler}>
          &#9776;
        </span> */}
        <div className="Employees">
          <Table
            characters={this.state.characters}
            delete={this.deleteCharacterHandler}
          />
          <Form
            inputChange={this.inputChangeHandler}
            btnSubmit={this.formSubmitHandler}
            name={this.state.name}
            job={this.state.job}
          />
          <hr />
        </div>
      </div>
    );
  }
}
