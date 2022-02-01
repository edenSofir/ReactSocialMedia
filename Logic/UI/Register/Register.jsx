class LoginUser extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_register_clicked() {
        //TODO 1.RECEIVE USERNAME AND PASSWORD
        //TODO 2.POST HTTP REQ /api/admin/user (invokes the create_new_user method in admin_controller).
    }

    render() {
        return React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Full Name:'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Email:'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Password:'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddButton, {handle_add: this.handle_register_clicked, value: 'Register'})
            )
        )
    }
}

