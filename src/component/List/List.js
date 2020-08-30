import React from 'react';
import Highlighter from "react-highlight-words";
import { ListGroup, Card } from 'react-bootstrap';


const List = (props) => {
    let x = props.word;
    return (<ListGroup style={{ textAlign: "center" }}>
        {props.array.map(item => {
            return (
                <>
                    <ListGroup.Item variant="dark" key={item.key}
                        onClick={() => { props.changeStatus(item.key) }}>
                        {/* <Card className="cardlist">
                            {item.task}
                        </Card> */}
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
