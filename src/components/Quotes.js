import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quotes() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://api.api-ninjas.com/v1/quotes?category=intelligence', {
      headers: {
        'X-Api-Key': 'VbJyG2AVoyP/jcAXQ2lvMA==rXycyQZaoKGMz0AG',
      },
    })
      .then((response) => {
        setQuote(response.data[0].quote);
        setAuthor(response.data[0].author);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div data-itemid="load" className="loaders">
        Loading
        <i className="fa fa-spinner" aria-hidden="true" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  }

  return (
    <div>
      <h2 className="Quote-head">Quote:</h2>
      <p data-testid="quote" className="Quote-body">{quote}</p>
      <p data-testid="author" className="Quote-author">
        -
        {author}
      </p>
    </div>
  );
}

export default Quotes;
