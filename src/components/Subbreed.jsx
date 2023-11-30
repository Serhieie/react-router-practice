import { useParams } from 'react-router-dom';

const Subbreed = ({ temperament }) => {
  const { dogId } = useParams();

  //функція спрацює 1 раз
  //     useEffect(() => {
  //       //HTTP запит до API dogId це
  //   },[]);
  return (
    <div>
      <h1>Subbreed: {dogId}</h1>
      <p>{temperament}</p>
    </div>
  );
};

export default Subbreed;
