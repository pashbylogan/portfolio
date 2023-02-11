import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Fictionary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [definition, setDefinition] = useState('');
  const [word, setWord] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  const handleSearch = async (input) => {
    setIsLoaded(true);
    const response = await fetch('http://sauron.loganpashby.com:5123/word', {
      method: 'POST',
      headers: {
        'API-KEY': process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ word: input })
    });

    const data = await response.json();
    setDefinition(data.definition);
    setIsLoaded(false);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      setWord(searchTerm);
      setDefinition('');
      handleSearch(searchTerm);
      setSearchTerm('');
    }
  };

  return (
        <div style={{ background: 'radial-gradient(circle, #011d34 0%, #01223b 36%, #012643 63%, #1a3f5c 100%)', height: '100vh', margin: 0, width: '100%', overflowY: 'hidden'}}>
          <div style={{ width: '30%', marginLeft: 'auto', marginRight: 'auto' }}>
          <Link to="/" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: 'white' }}>
            <h4 style={{ fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}>🏠</h4>
          </Link>
          <img src="/images/fictionary.png" alt="Fictionary icon" style={{ height: '69px', width: '85px', display: 'block', margin: '40px auto 30px' }} />
          <h1 style={{ color: 'white', textAlign: 'center', fontFamily: 'Arial, Helvetica, sans-serif'}}>
            Welcome to Fictionary
          </h1>
          <h4 style={{ color: 'white', textAlign: 'left', margin: '2rem 0 0 0.5rem', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            gib·ber·ish
          </h4>
          <h4 style={{ color: '#a0a0a0', textAlign: 'left', margin: '0.5rem 0 0 1rem', wordWrap: 'break-word', fontFamily: 'Arial, Helvetica, sans-serif' }}>
            unintelligible or meaningless speech or writing; nonsense.
          </h4>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', padding: '40px 0' }}>
            <input
              type="text"
              placeholder="Enter a word"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              style={{
                padding: '10px 100px',
                fontSize: '14px',
                borderRadius: '20px',
                border: 'none',
                textAlign: 'center',
                fontFamily: 'Arial, Helvetica, sans-serif'
              }}
            />
          </div>
          <div style={{ width: '34%', marginLeft: 'auto', marginRight: 'auto'}}>
              <div style={{ padding: '0 1rem', textAlign: 'left' }}>
                <h1 style={{ color: 'white', margin: '1rem 0 0 0.5rem', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                  {word}
                </h1>
            {definition && (
                <h3 style={{ color: '#a0a0a0', margin: '0.5rem 0 0 1rem', wordWrap: 'break-word', fontFamily: 'Arial, Helvetica, sans-serif'}}>
                  {definition}
                </h3>
            )}
              </div>
          </div>
        </div>
  );
}

export default Fictionary;
