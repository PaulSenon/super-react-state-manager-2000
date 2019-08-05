import React from 'react';

// import the connector
import { connect } from '../../srsm2000';


class Component2 extends React.Component{

    render(){
        return(
            <div>
                The value is {this.state.testCounter}
            </div>
        );
    }
}


// function that will map the dispatch ACTION with a component.state property.
const mapStateToState = (state) => ({
    testCounter: state.test.count, // state.{the name you give to the dispatcher in index.js}.{the value to get, as it's defined in the reducer}
});

// don't export the default component, but the connected one, it will just add the needed logic to manage and propagate states : 
// the first connect() param is for property of the global state you want to use
// the second connect() param is for the action you want to dispatch
export default connect(mapStateToState)(Component2);