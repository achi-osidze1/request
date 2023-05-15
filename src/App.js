import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState({})
  const [value,setValue] = useState()

  const api = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${value}`);
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error?.message);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(value > 3){
     api()
    }
  },[value])


  return (
    <div className="App">
      <p>{loading? 'Loading...': loading}</p>
      <p>Title: {users?.title}</p>
      <p>ID: {users?.id}</p>
      <input placeholder='enter' onChange={(e) => setValue(e.target.value)}/>
      <button onClick={()=> api()}>Get Data</button>
    </div>
  );
}

export default App;