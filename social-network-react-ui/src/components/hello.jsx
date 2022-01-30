import React from 'react'

export const Hello = async () => {

    //return <div>Hello</div>

    const response = await fetch('/api/admin/user')
    if (response.status !== 200) {
        console.log("ERROR!!")
        throw new Error('Error while fetching users')
    }
    const data = await response.json()
    return <div> {data.toString()} </div>;
}

//const domContainer = document.querySelector('#sample-container');
//ReactDOM.render( React.createElement(Hello , null ), domContainer);
