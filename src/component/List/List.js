import React from 'react';
import Highlighter from "react-highlight-words";
import { ListGroup, Card } from 'react-bootstrap';
import './List.css';


const List = (props) => {
    let x = props.word;
    return (<ListGroup style={{ textAlign: "center" }}>
        {props.array.map(item => {
            return (
                <>
                    <ListGroup.Item key={item.key} className="cardlist"
                        onClick={() => { props.changeStatus(item.key) }}>
                        <Highlighter
                            searchWords={[x]}
                            autoEscape={true}
                            textToHighlight={item.task}
                        />

                    </ListGroup.Item>
                </>
            )
        })}
    </ListGroup>
    );

}


export default List;
