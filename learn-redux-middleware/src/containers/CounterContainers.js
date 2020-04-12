import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAsync, decreaseAsync } from '../modules/counter';
// import { increase, decrease } from '../modules/counter';

function CounterContainers() {
    const number = useSelector(state => state.counter);
    const dispatch = useDispatch();

    // const onIncrease = () => dispatch(increase());
    // const onDecrease = () => dispatch(decrease());

    const onIncrease = () => dispatch(increaseAsync());
    const onDecrease = () => dispatch(decreaseAsync());


    return(
        <div>
            <h1>{number}</h1> 
            <Counter 
                onIncrease={onIncrease}
                onDecrease={onDecrease}
            />
        </div>
    )
}

export default CounterContainers;