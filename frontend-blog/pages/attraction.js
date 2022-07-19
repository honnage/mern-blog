import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { api } from "../lib/constants";

export default function attraction() {
    // const [attractions, setAttractions] = useState([])
    const [items, SetItems] = useState([])

    useEffect(() => {
        fetch(api.LOCALHOST + '/api/attractions?populate=cover_image')
            .then(res => res.json())
            .then(
                (result) => {
                    SetItems(result.data);
                },
            )
            .catch(function(error) {
                console.log(error);
            });
    }, [])

    return (
        <>
            <div>
                <Container>
                    <Row>
                        {items.map(item => (
                            <Col sm={4} key={item.id}>
                                <Card style={{ width: "100%" }}>
                                    <Card.Img variant="top" src={api.LOCALHOST + item.attributes.cover_image.data.attributes.url} />
                                    <Card.Body>
                                        <Card.Title>{item.attributes.name}</Card.Title>
                                        <Card.Text className="text-truncate">
                                            {itemitem.attributes.detail}
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
