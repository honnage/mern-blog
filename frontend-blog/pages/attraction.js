import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function attraction() {
    const [attractions, setAttractions] = useState([])

    useEffect(() => {
        fetch("http://localhost:1337/api/attractions?populate=cover_image")
            .then(res => res.json())
            .then(
                (result) => {
                    setAttractions(result.data);
                },
                (error) => {
                    setError(error);
                }
            )
    }, [])

    return (
        <>
            <div>
                <Container>
                    <Row>
                        {attractions.map(attraction => (
                            <Col sm={4} key={attraction.id}>
                                <Card style={{ width: "100%" }}>
                                    <Card.Img variant="top" src={'http://localhost:1337'+attraction.attributes.cover_image.data.attributes.url} />
                                    <Card.Body>
                                        <Card.Title>{attraction.attributes.name}</Card.Title>
                                        <Card.Text className="text-truncate">
                                            {attraction.attributes.detail}
                                        </Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}
