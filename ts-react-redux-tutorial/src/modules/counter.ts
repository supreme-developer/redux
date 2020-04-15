// 실제 문자열 값을 IDE에 제공해주기 위해서 as const 추가
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
    type: INCREASE_BY,
    payload: diff
});

type CounterState = {
    count : number
};

const initialState : CounterState = {
    count: 0
};

// ReturnType은 함수의 결과물을 가져올 수 있음
type CounterAction = 
    | ReturnType<typeof increase> 
    | ReturnType<typeof decrease>
    | ReturnType<typeof increaseBy>

    // { type : 'counter/INCREASE' }
    // { type : typeof INCREASE }

function counter(state: CounterState = initialState, action: CounterAction) : CounterState {
    switch(action.type) {
        case INCREASE:
            return { count : state.count + 1 };
        case DECREASE:
            return { count : state.count - 1 };
        case INCREASE_BY:
            return { count : state.count + action.payload };
        default:
            return state;
    }
}

export default counter;