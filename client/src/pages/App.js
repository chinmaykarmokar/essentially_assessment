// Import React hooks
import { useState, useEffect } from "react";

// Import Axios
import axios from "axios";

// Import components
import SearchComponent from "../components/searchComponent/searchComponent";
import StockDetailsComponent from "../components/stockDetailsComponent/stockDetailsComponent";
import ErrorComponent from "../components/errorComponent/errorComponent";

const App = () => {
	const [renderDetails, setRenderDetails] = useState(false);
	const [stocks, setStocks] = useState([]);
	const [stockName, setStockName] = useState();
	const [singleStockDetails, setSingleStockDetails] = useState([]);
	const [date, setDate] = useState();

	const selectStockHandler = (event) => {
		setStockName(event.target.value);
	}

	const changeDateHandler = (event) => {
		setDate(event.target.value);
	}

	const getStockNames = async () => {
		await axios.get("https://api.polygon.io/v3/reference/tickers?active=true&apiKey=uDjOrjNvE_WQxJWFSe8Txw8cvoK9l7XS")
			.then((response) => {
				setStocks(response.data.results);
			})
	}

	const getStockDetails = async () => {
		const stockDetailsParameters = {
			stock: stockName,
			date: date
		}

		const config = {
			headers: {
				"content-type": "application/json"
			}
		}

		await axios.post("http://localhost:5000/api/fetchStockData", stockDetailsParameters, config)
			.then((response) => {
				if (!renderDetails) {
					setRenderDetails(true);
				}
				setSingleStockDetails(response.data);
			})
	}

	useEffect(() => {
		getStockNames();
	},[])

	return (
		<>
			<SearchComponent 
				stocks = {stocks}
				stockName = {stockName}
				selectStockHandler = {selectStockHandler}
				changeDateHandler = {changeDateHandler}
				getStockDetails = {getStockDetails}	
			/>
			{
				(renderDetails && !singleStockDetails.message && !singleStockDetails.error) ?
					<StockDetailsComponent singleStockDetails = {singleStockDetails}/>
				:
				(renderDetails && singleStockDetails.message) ? 
					<ErrorComponent errorProps = {singleStockDetails.message}/>
				:
				(renderDetails && singleStockDetails.error) ?
					<ErrorComponent errorProps = {singleStockDetails.error}/>
				:
					<div></div>
			}
		</>
	);
}

export default App;