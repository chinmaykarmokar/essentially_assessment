// Import React Bootstrap components
import { Container } from "react-bootstrap";

// Import styles
import styles from "./errorComponent.module.css";

// Import React Icons
import { BiSolidError } from "react-icons/bi";

const ErrorComponent = ({errorProps}) => {
    return (
        <Container>
            <h4 
                className = {styles.warnMessage}
            >
                <BiSolidError/> {errorProps}
            </h4>
        </Container>
    )
}

export default ErrorComponent;