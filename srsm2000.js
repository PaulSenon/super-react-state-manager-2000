static class StateManager {

    static components = [];
    static __globalStates = {};
    static __globalReducers = {};
  
    constructor(reducers){
        StateManager.__globalReducers = reducers;
        Object.keys(reducers).forEach(key => {
            StateManager.__globalStates[key] = reducers[key](undefined, {type : "__init"});
        });
        console.log("State", StateManager.__globalStates);
        console.log("Reducer", StateManager.__globalReducers);
    }
  
    static registerComponentState(component, stateToStateMapper){
        const additionaleState = stateToStateMapper(StateManager.__globalStates);
        if(StateManager.isUseless(additionaleState)) return;
        // console.log('StateManager: new Component :', additionaleState);
        component.state = ({...component.state, ...additionaleState});
        StateManager.components.push({
            component,
            stateToStateMapper, 
        });
    }
  
    static registerComponentDispatch(component, dispatchToStateMapper){
        const dispatchers = dispatchToStateMapper(StateManager.dispatcher);
        component.state = ({...component.state, ...dispatchers});
    }
  
    static setState(){
        // console.log("new global state", __globalStates);
        StateManager.components.forEach(e => {
            if(!e.stateToStateMapper)return;
            const mappedState = e.stateToStateMapper(StateManager.__globalStates);
            StateManager.hasChanged(e.component.state, mappedState) && !StateManager.isUseless(mappedState) && e.component.setState(mappedState);
        });
    }
  
    static isUseless(additionalState){
        let res = true;
        Object.keys(additionalState).forEach(key => {
            if(additionalState[key] !== undefined){return res = false}
        });
        // res ? console.log('useless') : console.log("usefull");
        return res;
    }
  
    static hasChanged(oldState, newMappedState){
        let res = false;
        Object.keys(newMappedState).forEach(key => {
            if(newMappedState[key] != oldState[key]) return res = true;
        });
        return res;
    }
  
    static dispatcher = (input) => {
        input(action => {
            Object.keys(StateManager.__globalStates).forEach(key => {
                StateManager.__globalStates[key] = StateManager.__globalReducers[key](StateManager.__globalStates[key], action);
            });
            StateManager.setState();
        });
    };
}
  
const connect = (mapStateToProps, mapDispatchToProps)=> {
    // create a new component
    return (Component) => {
        return class extends Component{
            constructor(props){
                super(props);
                !!mapStateToProps && StateManager.registerComponentState(this, mapStateToProps);
                !!mapDispatchToProps && StateManager.registerComponentDispatch(this, mapDispatchToProps);
            }
        }
    };
}

export {
    connect,
    StateManager,
}