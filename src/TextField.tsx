import React from 'react';

interface Person{
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?:boolean;//prop is optional
    fn?: (bob: string)=> number;
    person:Person;
}

export const TextField: React.FC<Props> = ()=>{
    return(
        <div>
            <input/>
        </div>
    );
};