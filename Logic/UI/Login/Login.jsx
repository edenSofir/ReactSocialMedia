class LoginUser extends React.Component {
    constructor(props) {
        super(props);
    }

    async handle_Login() {

        const email_container = document.querySelector('#emailField');
        const email = email_container.value;
        const password_container = document.getElementById('passwordField');
        const password = password_container.value;

        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        //TODO: check why fetch throws exception on response 400
        if (response.status === 200) {
            //TODO: redirect to home page (all posts)
        } else {
            const err = await response.text();
            alert(err);
        }
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
                React.createElement(AddInputField, {value: 'Email:', idValue: 'emailField'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Password:', idValue: 'passwordField'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddButton, {handle_clicked: this.handle_Login, value: 'Login'}),
                //React.createElement(AddButton, {handle_clicked: this.handle_Register, value: 'Register'})
                React.createElement(
                    'a',
                    {
                        href: "http://localhost:2718/Register/Register.html",
                        class: "button"
                    },
                    'Register'
                )
            )
        )
    }
}

