import React,{ useState , useEffect } from 'react';
import ImageCard from './components/ImageCard';
import ImageSearch from './components/ImageSearch';
import Spinner from './components/Spinner';
import Alert from './components/Alert';
import './App.css';

const App = () => {
  const [images , setImages] = useState([]);
  const [loading , setLoading] = useState(true);
  const [term , setTerm] = useState('');
  const [alerts , setAlerts] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
       const result = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
       const data = await result.json();
        setImages(data.hits);
        setLoading(false);
    }
    fetchImages();
},[term])

if(loading) return <Spinner />
 
const showAlert = (type , msg )=> {
  setAlerts({ type , msg });
 
  setTimeout(() => {
    setAlerts(null);
  },5000)
} 

  return (
    <div className='container mx-auto'>
       <Alert alerts={alerts} />
     <ImageSearch searchText={(text) => setTerm(text)} showAlert={showAlert}/>
      {!loading && images.length === 0 && <h1 className='text-center text-5xl'>No Images Found...</h1>} 
     <div className='grid grid-cols-3 gap-4'>
           { images.map(image => (
             <ImageCard key={image.id} image={image}  />
           )) }
     </div>
  </div>
  );
}

export default App;
