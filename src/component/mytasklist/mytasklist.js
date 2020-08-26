import react, { Component } from 'react';
import './mytasklist.css';

class mytasklist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task: "",
            tasklist: []
        };

    }
    componentDidMount = () => {
        this.gettasks();
    }
    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });

    };
    onSubmit = () => {

    }
    render() {

    }
};

