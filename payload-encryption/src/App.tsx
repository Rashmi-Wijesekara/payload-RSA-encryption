import { useEffect, useState } from 'react';
import './App.css';
import { postRequest } from './client';

type reqBody = { Name: string; Id: number }

function App() {
    const [data, setData] = useState({name: '', id: 0})

    const request = async () => {
        const body = {
            name: "Admin",
            id: 100
        }

        const res = await postRequest(body)
        setData(res)
    }

    useEffect(() => {
        request()
    }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div>{data.id}</div>
        <div>{data.name}</div>
      </header>
    </div>
  );
}

export default App;
