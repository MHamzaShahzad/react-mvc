import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingPage from "./views/ListingPage";
import DetailsPage from "./views/DetailsPage";
import ApiService from "./services/ApiService";
import "bootstrap/dist/css/bootstrap.min.css";
import Message from "./components/Message";

function App() {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    ApiService.fetchData()
      .then((data) => {
        setItems(data);
        ApiService.cacheData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        const cachedData = ApiService.getCachedData();
        if (cachedData) {
          setItems(cachedData);
        } else {
          setErrorMessage("Failed to fetch data. Please try again later.");
        }
      });
  }, []);

  return (
    <Router>
      {errorMessage && <Message text={errorMessage} type="error" />}
      <Routes>
        <Route exact path="/" element={<ListingPage items={items} />} />
        <Route path="/details/:itemId" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
