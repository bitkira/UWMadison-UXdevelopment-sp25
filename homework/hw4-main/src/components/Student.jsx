const Student = (props) => {
    return <div>
        <h2>{props.name.first} {props.name.last}</h2>
        <p><strong>{props.major}</strong></p>
        <p>{props.name.first} is taking {props.numCredits} and is {props.fromWisconsin?"":"NOT"} from Wisconsin</p>
        <p>They have {props.interests.length} interests including....</p>
        <ul>
            {props.interests.map(ele => <li key = {ele}>{ele}</li>)}
        </ul>
    </div>
}

export default Student;