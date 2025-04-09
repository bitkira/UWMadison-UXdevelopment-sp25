import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import TicketLane from './TicketLane'

const TicketBoard = (props) => {

    const [ticketLanes, setTicketLanes] = useState({
        todo: [],
        inprogress: [],
        done: [],
    })

    useEffect(() => {
        fetch('https://cs571.org/rest/s25/ice/tickets', {
            headers: {
                "X-CS571-ID": "bid_fb34c9765178678407919c186f850e03b5be03f9f4383f3cfaac4eb4af6f8e44"
            }
        })
        .then(res => res.json())
        .then(ticketData => {
            console.log(ticketData);
            setTicketLanes({
                todo: ticketData,
                inprogress: [],
                done: []
            });
        })
    }, []);

    return <div>
        <h1>Ticket Board</h1>
        <Container fluid>
            {
                Object.keys(ticketLanes).map(laneName => {
                    return <TicketLane
                        key={laneName}
                        status={laneName}
                        tickets={ticketLanes[laneName]}
                    />
                })
            }
        </Container>
    </div>
}

export default TicketBoard;