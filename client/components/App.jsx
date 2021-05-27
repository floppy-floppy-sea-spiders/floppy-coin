// Main Container is input and App wraps Main Container in a div and renders it to the screen. App is output
import React from 'react';
import MainContainer from '../Containers/MainContainer.jsx';

function App(props){
  return (
    <div>
      <MainContainer />
    </div>
  )
}


export default App;