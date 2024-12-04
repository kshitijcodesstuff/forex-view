import React, { useState, useEffect, useCallback } from "react";
import LineChart from "./components/LineChart";
import { fetchForexData } from "./api";
import "./styles.css";

const App = () => {
  const [data, setData] = useState([]);
  const [timeline, setTimeline] = useState("1M");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fromCurrency, setFromCurrency] = useState("GBP");
  const [toCurrency, setToCurrency] = useState("INR");
  const [customPair, setCustomPair] = useState("");

  const fetchDataForTimeline = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const fetchedData = await fetchForexData(fromCurrency, toCurrency, timeline);
      setData(fetchedData);
    } catch (err) {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency, timeline]);

  useEffect(() => {
    fetchDataForTimeline();
  }, [fetchDataForTimeline]);

  const handleCustomPair = () => {
    if (customPair.includes("-")) {
      const [from, to] = customPair.split("-");
      setFromCurrency(from.toUpperCase());
      setToCurrency(to.toUpperCase());
    } else {
      setError("Invalid format. Use 'FROM-TO' (e.g., EUR-USD).");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Forex Data Visualization</h1>
        <p>
          Explore historical exchange rates for various currency pairs. Use the timeline buttons to
          filter data or input a custom pair.
        </p>
      </header>

      <div className="selectors">
        <div className="dropdown-group">
          <label>
            <strong>From Currency:</strong>
            <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
              <option value="GBP">GBP</option>
              <option value="AED">AED</option>
            </select>
          </label>
          <label>
            <strong>To Currency:</strong>
            <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
              <option value="INR">INR</option>
            </select>
          </label>
        </div>
        <div className="custom-pair">
          <input
            type="text"
            placeholder="Custom Pair (e.g., EUR-USD)"
            value={customPair}
            onChange={(e) => setCustomPair(e.target.value)}
          />
          <button onClick={handleCustomPair}>Set Custom Pair</button>
        </div>
      </div>

      <div className="timeline-buttons">
        {["1W", "1M", "3M", "6M", "1Y"].map((period) => (
          <button
            key={period}
            onClick={() => setTimeline(period)}
            className={timeline === period ? "active" : ""}
          >
            {period}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="loading">Loading...</p>
      ) : error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="chart-container">
          <h2>{`Exchange Rate: ${fromCurrency} to ${toCurrency}`}</h2>
          <p>Displaying data for the selected timeline: {timeline}</p>
          <LineChart
            data={data}
            label={`Exchange Rate (${fromCurrency}/${toCurrency}, ${timeline})`}
          />
        </div>
      )}
    </div>
  );
};

export default App;
