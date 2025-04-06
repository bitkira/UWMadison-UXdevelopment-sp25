import { Button, Container, Form, Row ,Col} from "react-bootstrap";
import { useState, useEffect } from "react";
import Pagination from 'react-bootstrap/Pagination';
import Student from "./Student";
const Classroom = () => {
    const [Original, setOriginal] = useState([])
    let SearchStudentData
    const eachPageNum = 24
    const [page, setPage] = useState(1)
    const [Allpage, setAllPage] = useState([])
    const [studentList, setstudentList] = useState([])
    const [nameInputValue, setNameInputValue] = useState('');
    const [majorInputValue, setMajorInputValue] = useState('');
    const [interestInputValue, setInterestInputValue] = useState('');
    function generateArray(n) {
        return Array.from(Array(n).keys());
      }
    useEffect(
        () => {
            fetch("https://cs571.org/rest/s25/hw4/students", {
                headers: {
                    "X-CS571-ID": "bid_fb34c9765178678407919c186f850e03b5be03f9f4383f3cfaac4eb4af6f8e44"
                }
            })
            .then(res => res.json())
            .then(data => {
                setstudentList(data)
                setOriginal(data)
                setAllPage(generateArray(Math.ceil(data.length/eachPageNum)))
            })}
        ,[])
    
    useEffect(
        () => {
            SearchStudentData = Original.filter( data => (data.name.first + data.name.last).toLowerCase().includes(nameInputValue.trim().toLowerCase()) && data.major.toLowerCase().includes(majorInputValue.trim().toLowerCase()) && data.interests.some(interest => interest.toLowerCase().includes(interestInputValue.trim().toLowerCase())))
            setstudentList(SearchStudentData)
            setAllPage(generateArray(Math.ceil(SearchStudentData.length/eachPageNum)))

        }
        ,[nameInputValue, majorInputValue, interestInputValue])
    

    return <div>
        <h1>Badger Book</h1>
        <p>Search for students below!</p>
        <hr />
        <Form >
            <Form.Label htmlFor="searchName">Name</Form.Label>
            <Form.Control id="searchName" type="text" value={nameInputValue} onChange={(event) => setNameInputValue(event.target.value)}/>
            <Form.Label htmlFor="searchMajor">Major</Form.Label>
            <Form.Control id="searchMajor" type="text"  value={majorInputValue} onChange={(event) => setMajorInputValue(event.target.value)}/>
            <Form.Label htmlFor="searchInterest">Interest</Form.Label>
            <Form.Control id="searchInterest" type="text"  value={interestInputValue} onChange={(event) => setInterestInputValue(event.target.value)}/>
            <br />
            <Button variant="neutral" onClick={() => {setNameInputValue("") ;setMajorInputValue("") ;setInterestInputValue("");setPage(1)}}>Reset Search</Button>
            <p>There are {studentList.length} student(s) matching your search.</p>
        </Form>
        <Container fluid>
            <Row>
                {studentList.slice((page-1) * eachPageNum, (page) * eachPageNum).map(student => <Col xs={12} md={6} lg={4} xl={3} key ={student.id}><Student name = {student.name} major = {student.major} numCredits = {student.numCredits} interests = {student.interests} fromWisconsin = {student.fromWisconsin} key ={student.id}></Student></Col>)}
            </Row>
        </Container>
        <Pagination>
            {studentList.length>0?<Pagination.Prev onClick={() => page==1?alert("First page"):setPage(page - 1 )}/>:null}
                {Allpage.map(each => <Pagination.Item active={page === each + 1} onClick={() => setPage(each +1 )} key={each}>{each + 1}</Pagination.Item>)}
            {studentList.length>0?<Pagination.Next onClick={() => page==Allpage.length?alert("Last page"):setPage(page + 1 )}/>:null}
        </Pagination>
    </div>

}

export default Classroom;