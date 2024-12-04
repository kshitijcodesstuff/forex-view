import axios from "axios";

const BASE_URL = "https://backend-vance.onrender.com/api";

export const fetchForexData = async (fromCurrency, toCurrency, period) => {
  try {
    const response = await axios.post(`${BASE_URL}/forex-data`, {
      from_currency: fromCurrency,
      to_currency: toCurrency,
      period: period,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching forex data:", error);
    throw error;
  }
};
