import React, { useContext } from 'react';
import SearchBar from './SearchBar';
import loadingImage from './preloader.gif';
import { GoogleContext } from './context';
import SingleBook from './SingleBook';
import './index.css'
const MainPage = () => {
 const {isLoading,booksList}=useContext(GoogleContext);
  if (isLoading) {
    return (
      <main>
        <img src={loadingImage} className='loading-img' alt='loading' />
      </main>
    );
  }
  return (
    <main>
      <SearchBar />
      {booksList.map((item,index)=>
      {
        return (
          <SingleBook key={index} {...item}/>
        )
      })}
    </main>
  );
};

export default MainPage;