
class Post extends React.Component {
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
                'div',
                {className: 'postText', id: 'text'},
                this.props.text
            ),
            React.createElement(
                'div',
                {className: 'postDate', id: 'date'},
                this.props.date
            )
        );
    }
}