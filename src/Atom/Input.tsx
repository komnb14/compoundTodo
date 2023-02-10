import React, {useState} from 'react';

const Input = () => {
    const [state,setState] = useState("");
    return (
        <input value={state}/>
    );
};

export default Input;
