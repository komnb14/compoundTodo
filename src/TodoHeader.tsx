import React from 'react';
import TodoGroup from "./compund/TodoGroup";

const TodoHeader = () => {

    return (

        <div>
            <header>Todo Testing</header>
            <TodoGroup.Input/>
            <TodoGroup.Trigger>
                <button>추가</button>
            </TodoGroup.Trigger>
        </div>
    );
};

export default TodoHeader;
