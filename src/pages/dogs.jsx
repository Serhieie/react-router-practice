import { Link } from 'react-router-dom';

const Dogs = ({ dogBreedData }) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <input type="text" />
      <ul>
        {dogBreedData.map(dog => (
          <Link key={dog.breed} to={`${dog.breed}`}>
            <h2 id={dog.id}>{dog.breed}</h2>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Dogs;
