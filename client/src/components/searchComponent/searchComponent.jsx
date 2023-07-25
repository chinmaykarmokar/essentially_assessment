// Import React Bootstrap Components
import { Container, Form, Button } from "react-bootstrap";

// Import styles
import styles from "./searchComponent.module.css";

// Import React Icons
import { FiCheckCircle } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";

const SearchComponent = ({stocks, stockName, selectStockHandler, changeDateHandler, getStockDetails}) => {
    return (
        <Container className = {styles.mainSearchContainer}> 
            <h1 
                className = {styles.mainHeader}
            >
                <AiOutlineStock/> Stock Tracker</h1>
            <Form.Select 
                size = "lg"
                className = {styles.formField}
                value = {stockName} onChange = {selectStockHandler}
            >
				{
					stocks?.map((singleStock) => {
						return (
							<option
								key = {singleStock?.ticker}
								value = {singleStock?.ticker}
							>
								{singleStock.name} ({singleStock.ticker})
							</option>
						)
					})
				}
			</Form.Select>
            <Form
                className = {styles.formField}
            >
                <Form.Control
                    size = "lg"
                    className = {styles.inputField}
                    type = {"date"}
                    onChange = {changeDateHandler}
                /> 
            </Form>
			<Button
                className = {styles.submitButton}
                onClick = {getStockDetails}
            >
				<FiCheckCircle/> Submit
			</Button>
        </Container>
    )
}

export default SearchComponent;