import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import dishes from '../data/menu.json';
import DishComments from './DishComments';
import ReservationForm from './ReservationsForm';
import Reservations from './Reservations';

const Home = () => {

    const [selectedDish, setSelectedDish] = useState(null)
    const [title, setTitle] = useState("Welcome to Strivestaurant!")

    return (
        <Container>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <Reservations />
                </Col>
            </Row>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <ReservationForm />
                </Col>
            </Row>
            <Row className="justify-content-center" style={{ marginTop: '1em' }}>
                <Col xs={12} md={6} className="text-center">
                    <h1>{title}</h1>
                    <h3 onClick={() => {
                        // formerly would use this.setState but can now do;-
                        setTitle('Best restaurant on the web!')
                    }}>We can only serve pasta</h3>
                    <Carousel className="mt-4">
                        {
                            dishes.map(dish => (
                                <Carousel.Item key={dish.id}>
                                    <img
                                        className="d-block w-100"
                                        src={dish.image}
                                        alt="First slide"
                                        onClick={() =>
                                            // this.setState({
                                            //     selectedDish: dish
                                            // })
                                            setSelectedDish(dish)
                                        }
                                    />
                                    <Carousel.Caption>
                                        <h3>{dish.name}</h3>
                                        <p>{dish.description}</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            ))
                        }
                    </Carousel>
                </Col>
            </Row>
            <Row className="my-4 justify-content-center">
                <Col xs={12} md={6} className="text-center">
                    <DishComments selectedDish={selectedDish} />
                </Col>
            </Row>
        </Container>
    )
};

export default Home;