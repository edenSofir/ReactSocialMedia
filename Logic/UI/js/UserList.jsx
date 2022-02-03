const re_react_user_name = /^React/;

class UserList extends React.Component {

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
        if (response.status !== 202) throw new Error('Error while fetching users');
        const data = await response.json();
        return data;
    }

    create_new_user_name(users) {
        const react_users = users.filter(item => re_react_user_name.test(item.name));
        for (let idx = 1;; idx++) {
            const candidate = "React User " + idx;
            const index = react_users.findIndex(item => item.name === candidate);
            if (index < 0) return candidate;
        }
    }

    async handle_clicked() {
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
                React.createElement(AddButton, { handle_clicked: this.handle_clicked })
            )
        );
    }
}