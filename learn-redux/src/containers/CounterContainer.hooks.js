import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer() {
    //state => store.getState() -> 리덕스의 현재상태
    // 상태를 조회하는 hook
    // useSelector에서 새로운 object를 만들기때문에 rerendering 발생
    // shallowEqual 얕은 비교만 가능
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }));
    // const { number } = useSelector(state => state.counter.number);
    // const { diff } = useSelector(state => state.counter.diff);
    // const { number, diff } = useSelector(state => ({
    //     number: state.counter.number,
    //     diff: state.counter.diff
    // }), 
    // (left, right) => {
    //     return left.diff === right.diff && left.number === right.number
    // });
    const { number, diff } = useSelector(state => ({
        number: state.counter.number,
        diff: state.counter.diff
        }), 
        shallowEqual
    );

    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return(
        <Counter 
            number={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    )
}

export default CounterContainer;