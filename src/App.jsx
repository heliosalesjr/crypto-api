import { useState, useEffect } from "react"
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect ( ()=> {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok ) throw new Error('failed!!!');
        const data = await res.json();
        console.log(data)
        setCoins(data);
      } catch (err){
        setError(err.message);
      } finally {
        setLoading(false)
      }
    }
    fetchCoins();
    
  },[])

 

  

  return (
    <div>
      <h1>Coins:</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <div className="coin-card" key={coin.id}>
              <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
                <div>
                  <h2>{coin.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </main>
      )}
    </div>
  )
}

export default App
