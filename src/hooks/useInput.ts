import React, {ChangeEvent, useCallback, useState} from 'react';

const useInput = (init:string) => {
    const [input,setInput] = useState(init);

    const onChangeInputValue = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setInput(value)
    },[]);

    return [input,onChangeInputValue] as const;
};


export default useInput;
