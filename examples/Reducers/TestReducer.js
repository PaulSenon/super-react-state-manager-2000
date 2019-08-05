// the default state, used to init and reset
const initState = {
    count: 0,
};

export default (state = initState, action) => {
    // handle all types in the Actions file
    switch (action.type) {
        case 'TEST_ACTION_ADD': 
            // the new "count" value = the previous one + the value passed in the action payload
            return {
                count: state.count + action.value,
            }
        case 'TEST_ACTION_RESET':
            // replace curent state by initState
            return initState;
        /* // You can handle the "__init" event if you need to, but if you just want the default behavior, just ignore it.
        case '__init':
            return //...
        */
        default:
            return state;
    }
}