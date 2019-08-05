
// PUBLIC //

// example with params
export const testAdd = (value) => {
    return (dispatch) => {
        dispatch(incrementAction(value));
    }
}
// example without params
export const resetTest = () => {
    return (dispatch) => {
        dispatch(resetTestAction());
    }
} 
  

// PRIVATE //

// example with default value
const incrementAction = (value = 1) => ({
    type: 'TEST_ACTION_ADD', // type required
    value,
    // ... add custom values
});

const resetTestAction = () => ({
    type: 'TEST_ACTION_RESET', // type required
});