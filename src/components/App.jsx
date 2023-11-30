import { Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import Subbreed from './Subbreed';
import Layout from './Layout';
import Home from 'pages/home';
import Dogs from 'pages/dogs';
import { DogCard } from './DogsCard';

const dogBreedData = [
  {
    id: 'dog-1',
    breed: 'Labrador Retriever',
    origin: 'United Kingdom',
    temperament: 'Outgoing, Even Tempered, Gentle, Agile, Gentlemanly',
    lifespan: '10-12 years',
    weight: 'Male: 29–36 kg, Female: 25–32 kg',
    height: 'Male: 57–62 cm, Female: 55–60 cm',
    description:
      'The Labrador Retriever is a strongly built, medium-sized, short-coupled, dog possessing a sound, athletic, well-balanced conformation that enables it to function as a retrieving gun dog; the substance and soundness to hunt waterfowl or upland game for long hours under difficult conditions; the character and quality to win in the show ring; and the temperament to be a family companion. Physical features and mental characteristics should denote a dog bred to perform as an efficient Retriever of game with a stable temperament suitable for a variety of pursuits beyond the hunting environment.',
  },
  {
    id: 'dog-2',
    breed: 'German Shepherd',
    origin: 'Germany',
    temperament: 'Alert, Loyal, Obedient, Curious, Confident, Intelligent',
    lifespan: '9-13 years',
    weight: 'Male: 30–40 kg, Female: 22–32 kg',
    height: 'Male: 60–65 cm, Female: 55–60 cm',
    description:
      'The German Shepherd is a breed of medium to large-sized working dog that originated in Germany. They are highly intelligent and make excellent working dogs. German Shepherds are popular as police dogs, search and rescue dogs, and guide dogs for the blind. They are known for their loyalty and courage.',
  },
  {
    id: 'dog-3',
    breed: 'Golden Retriever',
    origin: 'Scotland',
    temperament: 'Intelligent, Friendly, Devoted, Confident, Kind, Trustworthy',
    lifespan: '10-12 years',
    weight: 'Male: 29–34 kg, Female: 27–32 kg',
    height: 'Male: 56–61 cm, Female: 51–56 cm',
    description:
      'The Golden Retriever is a friendly, intelligent, and devoted dog breed. They are well-known for their gentle temperament and are great with families, making them popular as both family pets and service dogs. Golden Retrievers are highly trainable and excel in various canine sports and activities.',
  },
  {
    id: 'dog-4',
    breed: 'Bulldog',
    origin: 'England',
    temperament: 'Docile, Willful, Friendly',
    lifespan: '8-10 years',
    weight: 'Male: 23–25 kg, Female: 18–23 kg',
    height: 'Male: 31–40 cm, Female: 31–40 cm',
    description:
      'The Bulldog is a medium-sized breed with a muscular build and distinctive wrinkled face. They have a gentle disposition despite their intimidating appearance. Bulldogs are known for their courage and are excellent companions. They are a symbol of tenacity and determination.',
  },
  {
    id: 'dog-5',
    breed: 'Siberian Husky',
    origin: 'Russia',
    temperament: 'Outgoing, Intelligent, Gentle, Friendly, Alert',
    lifespan: '12-14 years',
    weight: 'Male: 20–27 kg, Female: 16–23 kg',
    height: 'Male: 54–60 cm, Female: 50–56 cm',
    description:
      'The Siberian Husky is a medium-sized working dog breed. They are known for their striking appearance, with a thick double coat and unique markings. Siberian Huskies are energetic, playful, and have a strong desire to roam. They are friendly and good-natured, making them excellent family pets.',
  },
];

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dogs" element={<Dogs dogBreedData={dogBreedData} />} />
        <Route path="/dogs/:dogId" element={<DogCard />}>
          <Route path="breed" element={<Subbreed />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
