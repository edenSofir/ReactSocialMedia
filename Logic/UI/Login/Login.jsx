class LoginUser extends React.Component {
    constructor(props) {
        super(props);
    }

    handle_Login() {
        //TODO 1.RECEIVE USERNAME AND PASSWORD
        //TODO 2.POST HTTP REQ /api/user/login
    }

    handle_Register() {
        //TODO:REDIRECT TO REGISTER.HTML
    }

    render() {
        return React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Username:'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Password:'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddButton, {handle_add: this.handle_Login, value: 'Login'}),
                React.createElement(AddButton, {handle_add: this.handle_Register, value: 'Register'})
            )
        )
    }
}

