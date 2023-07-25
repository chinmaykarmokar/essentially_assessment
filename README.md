# essentially_assessment

This is the repository where the complete assessment assigned to me can be found. 
* As instructed, I have made use of the free APIs from polygon.io to complete the endpoint where the user can check for the details about the **particular stock on a particular date (Open, High, Low, Close and Volume) on the frontend**.
* Edge cases are handled properly both on the frontend as well as backend. Try Catch block is implemented for the backend API call while conditions where **Data is not found** or **Date is not provided** are handled appropriately on the frontend without causing the app to break.
* Used **React Bootstrap** and **React Icons** as the extra packages to enhance the UI.
* **Frontend Project Structure**: **src** folder contains the **pages** and **components** folder. Inside the components folder, each component has its own folder with its own **module.css** file and its **.jsx** file. Have used props to pass data between components. Folder names, file names and variable declarations are in **camelCase** while the component exports are in **PascalCase**. Made use of **React hooks** to create the application.
* Client: For rendering the list of stocks available to the user I have used the <a href = "https://polygon.io/docs/stocks/get_v3_reference_tickers__ticker">Ticker V3</a> API by polygon where I have mapped the response to create the dropdown to select all the stocks that are available.
* Server: For fetching details about a particular stock for a particular date, I have used the <a href = "https://polygon.io/docs/stocks/get_v1_open-close__stocksticker___date">Daily Open/Close</a> endpoint.
* UI is responsive for all device breakpoints.

## Postman collection and response
<a href = "https://github.com/chinmaykarmokar/essentially-ai-postman-collection/blob/main/Essentially.ai.postman_collection.json">Postman Collection</a>
<br>
<a href = "https://github.com/chinmaykarmokar/essentially-ai-postman-collection/blob/main/essentially-ai_response.json">Postman Response</a>
