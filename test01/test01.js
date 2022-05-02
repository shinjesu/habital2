import React from 'react';
import './App.css';

function App() {
return (
     <div className="App">
          <header className="App-header">  
          <HTHeader/>
          </header>
          <nav></nav>
          <section>
             <HTMain/>
             <HTCompany/>
             <HTHoneyStory/>
             <HTSweetNews/>
             <HTLink/>
          </section>
          
          <footer>
             <HTFooter/>
          </footer>
    </div>
);
}
export default App;