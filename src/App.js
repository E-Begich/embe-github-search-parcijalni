import { useState } from 'react';
import UserForm from './components/UserForm';
import UserResult from './components/UserResult';
import './App.css';

const API_URL = "https://api.github.com";

async function fetchResults(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    const json = await response.json();
    return json.items || [];
  } catch (e) {
    throw new Error(e);
  }
}

function App() {
  const [query, setQuery]= useState("");
  const [results, setResults]= useState ([]);


  function onSearchChange (event){
    setQuery(event.target.value);
  }

  async function onSearchSubmit(event){
    event.preventDefault();
    const results= await fetchResults(query);
    setResults(results);
  }



  return (
    <div className="App">
        <h2>Embe -Github Search</h2>

      <UserForm
      onChange={onSearchChange}
      onSubmit={onSearchSubmit}
      value={query}
      />
      <div>
        {results.map((user) => (
          <UserResult 
          key={user.login}
          u_location={user.location}
          avatar={user.avatar_url}
          url={user.html_url}
          username={user.login}
          repos_url={user.repos_url}
          bio={user.bio}
          
          />
        ))}
      </div>
    </div>
  );
}

export default App;
