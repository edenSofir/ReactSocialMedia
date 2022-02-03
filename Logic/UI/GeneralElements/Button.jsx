
class AddButton extends React.Component {
    constructor(props) {
        super(props);
        this.handle_clicked = this.handle_clicked.bind(this);
    }

    handle_clicked() {
        if (this.props.handle_clicked) this.props.handle_clicked();
    }

    render() {
        return React.createElement(
            'button',
            { className: 'AddButton', onClick: this.handle_clicked },
            this.props.value
        );
    }
}