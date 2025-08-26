import { useState, useEffect } from "react"
import CoinCard from "./components/CoinCard";
const API_URL = import.meta.env.VITE_API_URL

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
      <h1>Here are the Coins:</h1>
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}

      {!loading && !error && (
        <main className="grid">
          {coins.map((coin) => (
            <CoinCard coin={coin} key={coin.id}/>
          ))}
        </main>
      )}
    </div>
  )
}

export default App
