import React from 'react';
import TodoGroup from "./compund/TodoGroup";
import useTodo from "./hooks/useTodo";
import TodoHeader from "./TodoHeader";

const Todo = () => {
    return (
        <TodoGroup>
            <TodoHeader/>
            <TodoGroup.List>
                {(list) => list.map((item) => {
                    return (
                        <TodoGroup.Item id={item.id} key={item.id}>{item.content}</TodoGroup.Item>
                    )
                })}
            </TodoGroup.List>
        </TodoGroup>
    );
};

export default Todo;
