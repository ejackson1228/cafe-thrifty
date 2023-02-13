import React from "react";
import Card from 'react-bootstrap/Card';
import testJacket from '../Assets/Images/testBomberJacket.jpg';

function Vintage() {
    return (
        <div>
            <div className="card-container">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testJacket} alt="test jacket" className="item-image"/>
                    <Card.Body>
                        <Card.Title>Vintage AE 80's Bomber</Card.Title>
                        <Card.Text>$46.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testJacket} alt="test jacket" className="item-image"/>
                    <Card.Body>
                        <Card.Title>Vintage AE 80's Bomber</Card.Title>
                        <Card.Text>$46.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testJacket} alt="test jacket" className="item-image"/>
                    <Card.Body>
                        <Card.Title>Vintage AE 80's Bomber</Card.Title>
                        <Card.Text>$46.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testJacket} alt="test jacket" className="item-image"/>
                    <Card.Body>
                        <Card.Title>Vintage AE 80's Bomber</Card.Title>
                        <Card.Text>$46.99</Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={testJacket} alt="test jacket" className="item-image"/>
                    <Card.Body>
                        <Card.Title>Vintage AE 80's Bomber</Card.Title>
                        <Card.Text>$46.99</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
};

export default Vintage;