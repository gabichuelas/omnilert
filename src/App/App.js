import React, {useState} from 'react';
import './App.scss';
import Header from '../Header/Header'
import Results from '../Results/Results';
import {getGifs} from '../API/API'

const App = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const getResults = async (query) => {
    const returnedResults = await getGifs(query)
    setResults(returnedResults)
  }

  return (
    <div className="App">
      <Header getResults={getResults}/>
      <Results results={results}/>
    </div>
  );
}

export default App;
