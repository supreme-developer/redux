import React from 'react';

// presentation component
// ui rendering에만 치중하고 데이터나 호출함수는 props로 받아서 처리한다.
function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value, 10));
    };
    return(
        <div>
            <h1>{number}</h1>
            <div>
                <input type="input" value={diff} onChange={onChange} />
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;