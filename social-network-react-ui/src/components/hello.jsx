import React from 'react'
import ReactDOM from "react-dom";

export const Hello = async () => {

    return <div>Hello</div>
    /*const response = await fetch('/admin');
    if(response.status !== 200)
        throw new Error('Error while fetching users')
    return await response.json();*/
}

const domContainer = document.querySelector('#sample-container');
ReactDOM.render( React.createElement(Hello , null ), domContainer);
