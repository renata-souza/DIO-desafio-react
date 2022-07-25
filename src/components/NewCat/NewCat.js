import { useEffect, useState } from 'react'
import Header from "../Header/Header"
import Button from '../Button/Button';
import './NewCat.css'

const NewCat = () => {
  const [cat, setCat] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);

  async function newCat() {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    setCat(data[0].url);
    setImageLoaded(false)
  }

  useEffect(() => {
    newCat();
  }, []);

  return (
    <>
      <Header />
      <div className="cat">
        <img
          src={cat}
          className={imageLoaded ? "visible" : "hidden"}
          alt="cat"
          onLoad={() => setImageLoaded(true)}
        />
        {imageLoaded ? (
          <div className="new-cat">
            <Button handleClick={newCat} text="Generate new Cat"></Button>
          </div>
        ) : (
          <span>Loading cat...</span>
        )}
      </div>
    </>
  );
};

export default NewCat;
