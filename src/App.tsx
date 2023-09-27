import React from 'react';
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <div className="App text-gray-500 flex">
    <Sidebar />
    {/* An app router should be here but since it's one view it's not necessary */}
   
  </div>
  ); 
}

export default App;
