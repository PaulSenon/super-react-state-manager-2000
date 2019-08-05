import React from 'react';

// import the actions you need
import { testAdd, resetTest } from '../Actions/TestActions'

// import the connector
import { connect } from '../../srsm2000';


class Component1 extends React.Component{
  
    onAdd = () => {
        console.log("onAdd()");
        // ... do dome local stuff, and the dispatch the action
        this.state.add(3);
    }

    onReset = () => {
        console.log("onReset()");
        // ... do dome local stuff, and the dispatch the action
        this.state.reset();
    }

    render(){
        return(
            <div>
                <button onClick={this.onAdd}>Add 3</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}


// function that will map the dispatch ACTION with a component.state property.
const mapDispatchToState = (dispatch) => ({
  add : v => dispatch(testAdd(v)), // e.g, you'll access the add function with this.state.add(...) in the component. and the action testAdd() will be dispatched.
  reset : () => dispatch(resetTest()), 
});

// don't export the default component, but the connected one, it will just add the needed logic to manage and propagate states : 
// the first connect() param is for property of the global state you want to use
// the second connect() param is for the action you want to dispatch
export default connect(undefined, mapDispatchToState)(Component1);