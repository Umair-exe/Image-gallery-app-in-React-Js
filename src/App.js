import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery";
import ImageSearch from "./components/ImageSearch";


function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [category, setCategory] = useState('');

  useEffect(() => {
    console.log(category);
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${category}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsloading(false);
      })
      .catch(err => console.log(err));

  }, [category]);

  return (

    <div className="container centered">
      <ImageSearch search={(text) => setCategory(text) } />

      {!isLoading && images.length===0 && <h1 className="text-center">No images found of {category}</h1> }

      <div className="row">
        {isLoading ? <div className="text-center">
          <h1 className="text-center">Loading</h1>
        </div> :
          images.map((image) => (
            <div key={image.id} className="col-sm-3">
              <ImageGallery  image={image} />
            </div>
          ))
        }
      </div>
    </div>

  );
}

export default App;
