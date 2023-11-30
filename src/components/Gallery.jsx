import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { dogId } = useParams();
  return (
    <div>
      <h1>Gallery: {dogId}</h1>
    </div>
  );
};

export default Gallery;
