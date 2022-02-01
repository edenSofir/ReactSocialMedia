
class AddInputField extends React.Component {
    constructor(props) {
        super(props);
        this.handle_add = this.handle_add.bind(this);
    }

    handle_add() {
        if (this.props.handle_add) this.props.handle_add();
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'label',
                {className: 'label'},
                this.props.value
            ),
            React.createElement(
                'input',
                {className: 'input'}
            )
        );
    }
}