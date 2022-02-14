import React, { useState } from 'react';
const rootUrl = 'https://www.googleapis.com';
const GoogleContext = React.createContext();
const GoogleProvider = ({ children }) => {
  const[booksList,SetBooksList]=useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const searchBooks = async (search_term) => {
    setIsLoading(true);
    await fetch(`${rootUrl}/books/v1/volumes?q=${search_term}&key=${process.env.REACT_APP_API_KEY}&maxResults=10`).then((response) => {
      response.json().then((data) => {
        if(response.status===200)
        SetBooksList(data.items);
    setIsLoading(false);
      });
  });
  };
  return (
    <GoogleContext.Provider
      value={{
        booksList,
        searchBooks,
        isLoading,
      }}
    >
      {children}
    </GoogleContext.Provider>
  );
};

export { GoogleContext, GoogleProvider };
