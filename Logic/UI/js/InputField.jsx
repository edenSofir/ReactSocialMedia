
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
            'label',
            { className: 'label',name},
            React.createElement(
                'input',
                {className: 'input'}
            )
        );
    }
}