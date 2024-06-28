import React from "react";
import { connect } from "react-redux";

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div>
      <p className="counter_title">Counter: {counter}</p>
      <button className="button" onClick={increment}>
        Increment
      </button>
      <button className="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};

//Ask store to keep you updated with changes to the declared data
const mapStateToProps = (state) => ({
  counter: state.counter 
 });

 //map your change event to the dispatcher of the store
 //define action for the desired update
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);