# Forex Data Visualization Application

The **Forex Data Visualization Application** provides interactive visualizations of Forex exchange rates for various currency pairs. It fetches historical data from Yahoo Finance, processes it on the backend, and displays it in a user-friendly frontend using line charts.

---

## Features
- **Dynamic Forex Data**: Fetches real-time exchange rates for selected currency pairs.
- **Interactive Visualizations**: Line charts showcasing trends over various time periods.
- **Custom Currency Pair Support**: Allows users to define their own `FROM-TO` currency pairs.
- **Backend API**: Built with FastAPI for efficient data processing.
- **Web Scraping**: Scrapes data from Yahoo Finance.
- **Scheduled Updates**: Automatically updates data every hour.

---

## Prerequisites
1. **Python 3.9+**
2. **Node.js 16+** and **npm**
3. **Git** (for cloning the repository)

---

## Installation Guide

### Clone the Repository
```bash
git clone https://github.com/your-repo/forex-view.git
cd forex-view
```

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd Backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend:
   ```bash
   python main.py
   ```

   The API will be available at `http://127.0.0.1:8000`.

---

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

   The frontend will open at `http://localhost:3000`.

---

## Usage

1. **Start the Backend**:
   - Ensure the backend is running by executing `python main.py` in the `Backend` directory.

2. **Start the Frontend**:
   - Start the React application with `npm start` in the `frontend` directory.

3. **Explore**:
   - Access the application at `http://localhost:3000`.
   - Choose from predefined currency pairs or set a custom pair in the format `FROM-TO` (e.g., `EUR-USD`).
   - Select a time period (e.g., 1W, 1M, 3M) to visualize historical trends.

---

## API Endpoints

- **POST** `/api/forex-data`  
  Fetch Forex data for a specified currency pair and time period.  
  **Request Body**:
  ```json
  {
    "from_currency": "GBP",
    "to_currency": "INR",
    "period": "1M"
  }
  ```
  **Response**:
  ```json
  [
    {
      "date": "2024-01-01",
      "open_rate": 1.5,
      "high_rate": 1.6,
      "low_rate": 1.4,
      "close_rate": 1.5,
      "adj_close_rate": 1.5,
      "volume": "12345"
    },
    ...
  ]
  ```

---

## Scheduled Updates

The backend includes a scheduler that scrapes and updates data for predefined pairs (`GBPINR`, `AEDINR`) every hour. You can add more pairs by modifying the `scheduler.py` file.

---

## Directory Structure

```plaintext
forex-view/
├── Backend/
│   ├── api.py            # FastAPI routes
│   ├── main.py           # Entry point for backend
│   ├── database.py       # Database helper functions
│   ├── scraper.py        # Web scraping logic
│   ├── scheduler.py      # Scheduler for periodic updates
│   └── requirements.txt  # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── api.js         # API communication
│   │   ├── App.js         # Main React component
│   │   ├── components/
│   │   │   └── LineChart.js  # Chart component
│   │   └── styles.css     # Styling
│   ├── package.json       # Frontend dependencies
└── README.md              # Project documentation
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

--- 

Enjoy exploring Forex trends! 🌍📊# forex-view
