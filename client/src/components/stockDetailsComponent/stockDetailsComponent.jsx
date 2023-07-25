// Import React Bootstrap components
import { Container, Row, Col, Card } from "react-bootstrap";

// Import styles
import styles from "./stockDetailsComponent.module.css";

const StockDetailsComponent = ({singleStockDetails}) => {
    return (
        <Container>
            <Row>
                <Col md = {4}>
                    <Card className = {styles.individualCards}>
                        <Card.Title className = {styles.cardTitle}>
                            Open
                        </Card.Title>
                        <Card.Text className = {styles.cardText}>
                            {singleStockDetails.open}
                        </Card.Text>
                    </Card>
                </Col>
                <Col md = {4}>
                    <Card className = {styles.individualCards}>
                        <Card.Title className = {styles.cardTitle}>
                            High
                        </Card.Title>
                        <Card.Text className = {styles.cardText}>
                            {singleStockDetails.high}
                        </Card.Text>
                    </Card>
                </Col>
                <Col md = {4}>
                    <Card className = {styles.individualCards}>
                        <Card.Title className = {styles.cardTitle}>
                            Low
                        </Card.Title>
                        <Card.Text className = {styles.cardText}>
                            {singleStockDetails.low}
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md = {4}>
                    <Card className = {styles.individualCards}>
                        <Card.Title className = {styles.cardTitle}>
                            Close
                        </Card.Title>
                        <Card.Text className = {styles.cardText}>
                            {singleStockDetails.close}
                        </Card.Text>
                    </Card>
                </Col>
                <Col md = {4}>
                    <Card className = {styles.individualCards}>
                        <Card.Title className = {styles.cardTitle}>
                            Volume
                        </Card.Title>
                        <Card.Text className = {styles.cardText}>
                            {singleStockDetails.volume}
                        </Card.Text>
                    </Card>
                </Col>
                <Col md = {4}></Col>
            </Row>
        </Container>
    )
}

export default StockDetailsComponent;