import React from 'react';
//import DisplayResults from './components/DisplayResults';
import Header from './components/Header'
// import Search from './components/Search'
import StarWarsFetch from './components/StarWarsFetch'
//import DisplayResults from './components/DisplayResults'

function App() {
  return (
    <main className='App'>
      <Header />
      <StarWarsFetch />
      {/* content goes here */}
    </main>
  );
}

export default App;