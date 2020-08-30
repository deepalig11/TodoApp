import React from 'react';

const Header = (props) => {
    return (
        <>
            <h1>TO-DO Application</h1>
            <button onClick={props.resetList}>Reset</button>
            <form>
                <p>Task</p>
                <input id="todo" type="text" value={props.text} onChange={props.textHandler} />
                <button onClick={props.pusharray}>Save</button>
                <br />
                <input id="createHashtags" type="text" value={props.tag} onChange={props.myTagHandler} />
                <button onClick={props.hashTag}>Create Hashtag</button>
            </form>
        </>

    );


};

export default Header;
