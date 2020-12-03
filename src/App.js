import React from 'react';
import requests from './requests'
import Row from './Row'
import './App.css';
import Banner from './Banner';
import Nav from './Nav'
function App() {
  // axios for every request will has the special beginng url
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title = "NETLIX ORIGNALS" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow ={true}
      />
      <Row title = "TOP RATED" fetchUrl={requests.fetchTrending}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = " Horrer Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>    
    </div>
  );
}

export default App;
