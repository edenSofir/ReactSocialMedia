
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