import React from "react";

class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.handle_click = this.handle_click.bind(this);
    }

    handle_click() {
        if (this.props.handle_delete) this.props.handle_delete(this.props.user.id);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'UserItem', 'data-id': this.props.user.id },
            React.createElement(
                'span',
                null,
                React.createElement('i', { onClick: this.handle_click, className: 'fa fa-times transparent' })
            ),
            React.createElement(
                'span',
                null,
                this.props.user.name
            )
        );
    }
}

class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.handle_add = this.handle_add.bind(this);
    }

    handle_add() {
        if (this.props.handle_add) this.props.handle_add();
    }

    render() {
        return React.createElement(
            'button',
            { className: 'AddButton', onClick: this.handle_add },
            'Add User'
        );
    }
}

const re_react_user_name = /^React/;

export class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.handle_delete = this.handle_delete.bind(this);
        this.handle_add = this.handle_add.bind(this);
        this.state = { users: [] };
    }

    async componentDidMount() {
        const users = await this.fetch_users();
        this.update_list(users);
    }

    async fetch_users() {
        const response = await fetch('/api/admin/user');
        if (response.status !== 200) throw new Error('Error while fetching users');
        return await response.json();
    }

    create_new_user_name(users) {
        const react_users = users.filter(item => re_react_user_name.test(item.name));
        for (let idx = 1;; idx++) {
            const candidate = "React User " + idx;
            const index = react_users.findIndex(item => item.name === candidate);
            if (index < 0) return candidate;
        }
    }

    async handle_add() {
        const name = this.create_new_user_name(this.state.users);
        const response = await fetch('/api/users/', { method: 'POST',
            body: JSON.stringify({ name: name }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.status === 200) {
            const users = await this.fetch_users();
            this.update_list(users);
        } else {
            const err = await response.text();
            alert(err);
        }
    }

    async handle_delete(id) {
        const response = await fetch('/api/user/' + id, { method: 'DELETE' });
        if (response.status === 200) {
            const users = await this.fetch_users();
            this.update_list(users);
        } else {
            const err = await response.text();
            alert(err);
        }
    }

    update_list(users) {
        this.setState({ users: users });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'div',
                null,
                this.state.users.map((item, index) => {
                    return React.createElement(UserItem, {
                        handle_delete: this.handle_delete, user: item, key: index });
                })
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddButton, { handle_add: this.handle_add })
            )
        );
    }
}