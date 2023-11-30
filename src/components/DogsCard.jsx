import { Link, Outlet, useParams } from 'react-router-dom';

export const DogCard = ({ dog }) => {
  // const { breed, origin, temperament, lifespan, weight, height, description } =
  //   dog;

  const { dogId } = useParams();
  //функція спрацює 1 раз
  //     useEffect(() => {
  //       //HTTP запит до API dogId це
  //   },[]);

  return (
    <div>
      <Link to="/dogs">Back</Link>
      <h1>DogDetails:{dogId}</h1>
      <ul>
        <li>
          <Link to="breed">Breeds</Link>
        </li>
        <li>
          <Link to="gallery">Galery</Link>
        </li>
      </ul>
      <Outlet />
      {/* <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{breed}</h2>
        <p>
          <strong>Origin:</strong> {origin}
        </p>
        <p>
          <strong>Temperament:</strong> {temperament}
        </p>
        <p>
          <strong>Lifespan:</strong> {lifespan}
        </p>
        <p>
          <strong>Weight:</strong> {weight}
        </p>
        <p>
          <strong>Height:</strong> {height}
        </p>
        <p>{description}</p>
      </div> */}
    </div>
  );
};
