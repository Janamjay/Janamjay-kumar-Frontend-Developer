import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import SearchForm from "./components/SearchForm";
import DataGrid from "./components/DataGrid";
import ItemDetail from "./components/ItemDetail";
import spacexService from "./services/spacexService";

const App = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await spacexService.getItems();
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };

  const handleSearch = async (searchParams) => {
    try {
      setLoading(true);
      const response = await spacexService.getItems();
      const allItems = response.data;

      const filteredItems = allItems.filter((item) => {
        if (searchParams.status && item.status !== searchParams.status) {
          return false;
        }
        if (
          searchParams.originalLaunch &&
          item.original_launch !== searchParams.originalLaunch
        ) {
          return false;
        }
        if (
          searchParams.type &&
          item.rocket.rocket_name !== searchParams.type
        ) {
          return false;
        }
        return true;
      });

      setItems(filteredItems);
      setLoading(false);
    } catch (error) {
      console.error("Error searching items:", error);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseItemDetail = () => {
    setSelectedItem(null);
  };

  return (
    <Router>
      <Banner />
      <div className="container mx-auto px-4">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <SearchForm onSearch={handleSearch} />
                {loading ? (
                  <p>Loading...</p>
                ) : (
                  <DataGrid data={items} onItemClick={handleItemClick} />
                )}
              </>
            }
          />
        </Routes>
      </div>
      {selectedItem && (
        <ItemDetail item={selectedItem} onClose={handleCloseItemDetail} />
      )}
    </Router>
  );
};

export default App;
