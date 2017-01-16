import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';



class Share extends React.Component {
  constructor() {
  super();

  this.state = {
    location: [],

  };

}
componentDidMount() {
  this.getFirebase();
}

getFirebase() {
  axios({
    url: '/location.json',
    baseURL: 'https://coffee-cake-194f3.firebaseio.com/',
    method: "GET"
  }).then((response) => {
    this.setState({ location: response.data });
  }).catch((error) => {
    console.log(error);
  });
}

createTodo = (todoText) => {
  let newTodo = { Location: todoText, createdAt: new Date,  };

  axios({
    url: '/location.json',
    baseURL: 'https://coffee-cake-194f3.firebaseio.com/',
    method: "POST",
    data: newTodo
  }).then((response) => {
    let todos = this.state.location;
    let newTodoId = response.data.name;
    todos[newTodoId] = newTodo;
    this.setState({ location: todos });
  }).catch((error) => {
    console.log(error);
  });
}

  handleNewTodoInput = (event) => {
    if (event.charCode === 13) {
      this.createTodo(event.target.value);
      event.target.value = "";
    }
  }

  renderNewTodoBox = () => {
    return (
      <div className="new-todo-box pb-2">
        <input className="w-100" placeholder="What do you have to do?" onKeyPress={ this.handleNewTodoInput } />
        <div className="">Select a location</div>
      <select>
        <option value="manhattan">Manhattan</option>
        <option value="brooklyn">Brooklyn</option>
        <option value="bronx">Bronx</option>
        <option value="queens">Queens</option>
      </select>
      </div>
    );
  }

  renderTodoList = () => {
    let todoElements = [];

    for(let todoId in this.state.location) {
      let todo = this.state.location[todoId]

      todoElements.push(
        <div className="col-md-6" key={todoId}>
          <div className="mt-2">
            <h4>{todo.title}</h4>
            <div>{(todo.createdAt).calendar()}</div>
          </div>
        </div>
      );
    }

    return (
      <div className="col-md-12">
        {todoElements}
      </div>
    );
  }

  render (){
    return (
      <div className="container text-center">
        <div className="col-md-12">
          {this.renderNewTodoBox()}
          {this.renderTodoList()}
          {this.renderTodoList()}
        </div>
    </div>
    )
  }


}
export default Share;
