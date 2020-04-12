const myLogger = store => next => action => {
    console.log(action);
    console.log('\tPrev', store.getState());
    const result = next(action); // ex () => dispatch(increase())
    console.log('\tNext', store.getState());
    
    return result;
};

export default myLogger;

// function middleware(store) {
//     return function(next) {
//         return function (action) {
//             // 하고 싶은 작업
//         }
//     }
// }