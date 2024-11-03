import { lazy, Suspense, useState } from 'react';
import Form from './component/Form';

const Photos = lazy(() => import('./component/Photos'))

const App =() => {
  const [showPhotos, setShowPhotos] = useState(false);

  const handleLoadPhotos = () => {
    setShowPhotos(true);
  };
  
  return (
    <div>
      <Form/>
      <Form/>
      <button onClick={handleLoadPhotos}>Load Photos</button>
      <Suspense fallback={<h1>Loading...</h1>}>
        {showPhotos && (
          <Photos />
        )}
      </Suspense>
      
    </div>
  );
}

export default App;
