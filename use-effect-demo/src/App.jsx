import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [dogList, setDogList] = useState([]);
  const[error, setError] = useState(null);
  console.log(dogList);

  useEffect(() =>{
async function fetchData() {
  try{
    const response = await fetch("https://dog.ceo/api/breeds/image/random/15");
    const result = await response.json();
    setDogList(result.message);
  } catch (error) {
    setError(error);
  }
}
fetchData();
  }, []);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      {!error && 
      dogList.map((dog,index) =>{
        return <img key={index} src={dog} alt="random dog picture" />;
      })}
    </>
  );
}

export default App
