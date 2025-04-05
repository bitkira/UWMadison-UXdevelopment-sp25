import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';

export default function FeaturedItem(props) {
    const [showNutrition, setShowNutrition] = useState(false);
    const [name, setName] = useState("Show Nutrition Facts");

    const handleClick = () => {
        setShowNutrition(!showNutrition);
        setName(showNutrition ? "Show Nutrition Facts" : "Hide Nutrition Facts");
    };

    return (
        <Card className="shadow-sm mb-4">
            <Image src={props.src} alt={"loading " + props.name}  />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    <strong>${props.price} per unit</strong>
                </Card.Text>
                <Card.Text>{props.description}</Card.Text>
                <Button variant="primary" onClick={handleClick}>
                    {name}
                </Button>
                {showNutrition && (
                    <Table striped bordered hover className="mt-3">
                        <thead>
                            <tr>
                                <th>Calories</th>
                                <th>Fat</th>
                                <th>Carbohydrates</th>
                                <th>Protein</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{props.nutrition.calories}</td>
                                <td>{props.nutrition.fat}</td>
                                <td>{props.nutrition.carbohydrates}</td>
                                <td>{props.nutrition.protein}</td>
                            </tr>
                        </tbody>
                    </Table>
                )}
            </Card.Body>
        </Card>
    );
}