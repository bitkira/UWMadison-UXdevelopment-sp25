import { Button, Card } from "react-bootstrap";

const Ticket = (props) => {
    function moveTODO(){
        alert("should move to TODO")
    }

    function moveInprogress(){
        alert("should move to Inprogress")
        
    }

    function movetoDone(){
        alert("should move to Done")
        
    }



    return <Card style={{margin: "0.25rem"}}>
        <h2 style={{fontSize: "1.25rem"}}>{props.name}</h2>
        <sub>{props.author}</sub>
        <br/>
        <p>{props.description}</p>
        <Button onClick={moveTODO}>Move to TODO</Button>
        <Button variant="outline-secondary"onClick={moveInprogress}>Move to InProgress</Button>
        <Button variant="outline-success" onClick={movetoDone}>Move to Done</Button>

    </Card>
}

export default Ticket;