
class AddInputField extends React.Component {
    constructor(props) {
        super(props);
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
                {className: 'input', id: this.props.idValue}
            )
        );
    }
}