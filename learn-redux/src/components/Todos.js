import React, { useState } from 'react';

const TodoItem = React.memo(function TodoItem ({ todo, onToggle }) {
    return (
        <li
            style={{ 
                textDecoration: todo.done ? 'line-through' : 'none'
            }}
            onClick={() => onToggle(todo.id)}
        >
            {todo.text}
        </li>
    )
})

const TodoList = React.memo(function TodoList ({ todos, onToggle }) {
    return (
        <ul>
            {
                todos.map(todo => <TodoItem 
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                />)
            }
        </ul>
    )
})

// onChange 호출시에도 자식컴포넌트 되는걸 방지하기 위해서 React.memo 확인(devtools profiles로 확인가능)
function Todos({ todos, onCreate, onToggle }) {
    const [text, setText] = useState('');
    const onChange = e => setText(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        onCreate(text);
        setText('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    value={text}
                    onChange={onChange} 
                    placeholder="할 일을 입력하세요..."
                />
                <button type="submit">등록</button>
            </form>
            <TodoList 
                todos={todos}
                onToggle={onToggle}
            />
        </div>
    )
}

export default React.memo(Todos);