import React from 'react';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    return (
        <>
            <Button variant="danger" onClick={props.resetList}>Reset</Button>
            <h1 style={{ textAlign: "center" }} >TO-DO Application</h1>
            <form style={{ textAlign: "center" }}>
                <input id="todo" type="text" value={props.text} onChange={props.textHandler} />
                <button onClick={props.pusharray}>Save</button>
                <br />
                <input id="createHashtags" type="text" value={props.tag} onChange={props.myTagHandler} style={{ float: 'left' }} />
                <button onClick={props.hashTag} style={{ float: 'left' }}>Create Hashtag</button>
            </form>
        </>

    );


};

export default Header;
