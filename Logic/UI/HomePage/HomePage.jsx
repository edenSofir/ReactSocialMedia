class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    /*async componentDidMount() {
        const posts = await this.fetch_posts();
        this.update_list(posts);
    }*/

    async fetch_posts() {
        //const auth_header = req.headers["authorization"];
        //const current_token = auth_header && auth_header.split(" ")[1];
        //TODO: receive the token from the browser
        const response = await fetch('/api/post/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'authorization':
            }
        });
        //TODO: check why fetch throws exception on response 400
        if (response.status === 200) {
            //TODO: 1. get the posts from the response
            // 2. sort the posts by date (first post should be a post published by the connected user)
            // 3. show X first posts in the page. each post is a post react object.
        } else {
            const err = await response.text();
            alert(err);
        }
    }

    update_list(users) {
        this.setState({ users: users });
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
            Post,
                {
                    //TODO: call a func that creates X AddPost objects and add them here.
                    text: "I did it!!",
                    date: "03.02.2022"
                }),
            React.createElement(
                //TODO: try to change to a button?
                // needs to open a form to insert data for the new post.
                'a',
                {href: "https://www.google.com/"},
                'Add new post'
            )
        )
    }
}

