
class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.handle_click = this.handle_click.bind(this);
    }

    handle_click() {
        if (this.props.handle_delete) this.props.handle_delete(this.props.user.id);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'UserItem', 'data-id': this.props.user.id },
            React.createElement(
                'span',
                null,
                React.createElement('i', { onClick: this.handle_click, className: 'fa fa-times transparent' })
            ),
            React.createElement(
                'span',
                null,
                this.props.user.name
            )
        );
    }
}
