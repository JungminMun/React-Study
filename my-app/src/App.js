import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const comment = [
  {name: 'Jungmin Mun', content: '문천재'},
  {name: 'Lil-la Go', content:'I am not go-lil-la'},
  {name: 'Tona Om', content:'위장 깨끗'}
]

function App() {
  return (
    <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        {comment.map((comment, index) => {
          return (
            <Comment
              name = {comment.name}
              content = {comment.content} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
