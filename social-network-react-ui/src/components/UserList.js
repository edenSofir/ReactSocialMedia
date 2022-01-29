import React from "react";


class UserList extends React.Component
{
    constructor(props)
    {
        super(props);
        this.handle_delete = this.handle_delete.bind( this );
        this.state = {users: []}
    }

    async componentDidMount()
    {
        const users = await this.fetch_users();
        this.update_list(users);
    }

    async fetch_users()
    {
        const response = await fetch('/api/users');
        if ( response.status !== 200 )
            throw new Error( 'Error while fetching users');
        const data = await response.json();
        return data;
    }

    async handle_delete( id )
    {
        const response = await fetch('/api/user/' + id , {method:'DELETE'});
        if ( response.status === 200 )
        {
            const users = await this.fetch_users();
            this.update_list(users);
        }
        else
        {
            const err = await response.text();
            alert( err );
        }
    }


    update_list( users )
    {
        this.setState( {users : users} );
    }

    render() {
        return <div>
            {this.state.users.map( (item,index) => { return  <UserItem
                handle_delete={this.handle_delete} user={item}  key={index}/>  }  ) }
        </div>
    }
}
