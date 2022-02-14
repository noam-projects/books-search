import React from 'react';
import './main.css'
//title , description ,image
const SingleBook = (book) => {
    const {volumeInfo}=book;
    const {title,imageLinks,description}=volumeInfo;
    // to prevent case of undefined imagelinks
    if(!imageLinks)
    return (<></>)
    const {thumbnail}=imageLinks;
  return (
      <main>
      <header>
        <img src={thumbnail} alt=''/>
        <div>
          <h4>book title</h4>
          <p>{title}</p>
        </div>
      </header>
      <h4>book description</h4>
      {description ? <p className='desc'>{description}</p> : <p className='desc'>description is unavailable</p> } 
</main>
    );
  }

export default SingleBook;
