class LoginUser extends React.Component {
    constructor(props) {
        super(props);
    }

    async handle_register_clicked() {

        const email = document.querySelector('#emailField').value;
        const password = document.querySelector('#passwordField').value;
        const full_name = document.querySelector('#fullNameField').value;

        const response = await fetch('/api/admin/user', {
            method: 'POST',
            body: JSON.stringify({
                full_name: full_name,
                email: email,
                password: password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        //TODO: check why fetch throws exception on response 409
        if (response.status === 200) {
            //TODO: redirect to login
        } else {
            const err = await response.text();
            alert(err);
        }

    }

    render() {
        return React.createElement(
            'form',
            null,
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Full Name:', idValue: 'fullNameField'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Email:', idValue: 'emailField'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddInputField, {value: 'Password:',idValue: 'passwordField'})
            ),
            React.createElement(
                'div',
                null,
                React.createElement(AddButton, {handle_clicked: this.handle_register_clicked, value: 'Register'})
            )
        )
    }
}

