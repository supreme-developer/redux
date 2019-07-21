dispatch 
1. reducer(이전 state, 사용자가 전달한 action)
 1) 이전 state값과 사용자가 전달한 action객체를 조합해서 새로운 state를 리턴한다.
 2) 새로운 state 리턴한 이후에 구독(subscribe)중인 render 함수를 호출한다.

2. subscribe 초기에 rendering을 하기 위한 함수를 연결해준다.

3. render
 1) store에서 getState값을 얻어와서 렌더링에 필요한 값을 바인딩해준다.

4. reducer
 1) 초기에 store에서 한번은 호출됨으로 그때의 state는 없으므로 디폴트로 하나를 지정해줘야한다.(react defaultprop이 여기와 연결된다.)
 2) 사용자가 전달해준 action.type을 조건으로 필요한 데이터를 action에서 가져와서 새로운 state를 추가한다.