import * as React from 'react';
import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';

function App() {
  const [val, setVal] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: "#403F3F",
        userSelect: 'none'
      }}
    >
      <div style={{
        display : 'flex',
      }}>
        <div style={{
          padding : 10,
        }}>
          <Button variant="contained" size = "small" onClick={() => setVal(val - 1)}>
            -
          </Button>
        </div>
        <div style={{
          padding : 10,
        }}>
          <h1 style={{
            color: "white"
          }}>Counter - {val}</h1>
        </div>

        <div style={{
          padding : 10,
        }}> 
          <Button variant="contained" size = "small" onClick={() => setVal(val + 1)}>
            +
          </Button>
        </div>
      </div>
     
      <div style={{
        paddingTop : 20
      }}>
        <Button variant="contained" size = "large" onClick={() => {setVal(0)}}>
          Reset
        </Button>
      </div>
      
    </div>
  );
}

export default App;
