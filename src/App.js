import React, { Component } from 'react';
import Todo from './components/Todo'; // my Todo component

class App extends Component { // class

  constructor() { // constructor
      super();

      this.state = {
          ingredients: ['flour', 'eggs', 'milk', 'sugar', 'vanilla'],
          newIngredient: ''
      };
  } // END constructor

  handleIngredientInput = (event) => { // method
      this.setState({ newIngredient: event.target.value });
  }; // END handleIngredientInput

  addIngredient = (event) => { // method
      event.preventDefault(); // just include this so that the webpage does not refresh for some reason
      const ingredientsList = this.state.ingredients; // ingredientList ARRAY is local to addIngredient FUNCTION ONLY
      ingredientsList.push(this.state.newIngredient);
      this.setState({
          newIngredient: '',
          ingredients: ingredientsList // NEW LIST CREATED AND setState SETS THE STATE
      });
  }; // END addIngredient

  render() {
      return (
          <div>
              {this.state.ingredients.map(ingredient => <Todo thing={ingredient} />)}
              <form onSubmit={this.addIngredient}>
                  <input type="text" onChange={this.handleIngredientInput} placeholder="Add a new ingredient" value={this.state.newIngredient} />
              </form>
          </div>
      );
  }
}

export default App;
