import React, {useState} from 'react';
import './App.scss';
import Header from '../Header/Header'
import Results from '../Results/Results';
import {getGifs} from '../../data/API'

const App = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [error, setError] = useState('')

  const getResults = async (query) => {
    setQuery(query)
    const returnedResults = await getGifs(query)
    if (returnedResults.meta.msg === 'OK') {
      setResults(returnedResults.data)
    } else  {
      setError("Crap. Something went wrong. Try again, and I'll send this error to my creator in the meantime.")
    }
  }

  return (
    <div className="App">
      <Header getResults={getResults}/>
      <Results results={results} error={error} query={query}/>
    </div>
  );
}

export default App;