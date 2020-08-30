import React from 'react';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        <div>
            <Button variant="secondary" onClick={props.resetList} style={{ float: 'right' }}>Reset</Button>
            <input id="createHashtags" type="text" value={props.tag} placeholder="Add Hashtag" onChange={props.myTagHandler} style={{ float: 'left' }} />
            <button onClick={props.hashTag} style={{ float: 'left' }}>Create Hashtag</button>
            <br />
            <h1 style={{ textAlign: "center" }}>TO-DO Application</h1>
            <form style={{ textAlign: "center" }}>
                <input id="todo" type="text" value={props.text} placeholder="Add Task" onChange={props.textHandler} />
                <button onClick={props.pusharray}>Save Task</button>
            </form>

        </div >

    );


};

export default Header;
