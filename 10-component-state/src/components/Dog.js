import React from 'react';

class Dog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {breed: "Poodle"};
  }
  
  changeAge = () => {
     this.setState({ age: 6 });
  }
  changeBreed = () => {
    this.setState({ breed: "Pug" });
 }
  

  render() {
    return (
      <div>
        <h2 style={{ color: "red" }}>Woof, I am a {this.state.breed} dog called {this.state.name} and I am {this.state.age} years old.!</h2>
        <button
          type="button"
          onClick={this.changeAge}
        >Birthday!</button>
      </div>
    );
  }
};

export default Dog;