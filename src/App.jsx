// import './App.css'
import * as petServices from './services/petService.js'
import { useState, useEffect } from 'react';
import PetList from './components/PetList/PetList';



const App = () => {
  const [pets, setPets] = useState([]);

    useEffect(() => {
    const fetchPets = async () => {
      try {
        const fetchedPets = await petServices.index();

        if (fetchPets.err) {
          throw new Error(fetchPets.err);
        }
        setPets(fetchedPets);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPets();
  }, []);

  return (
    <>
      <PetList pets={pets} />
    </>
  );
};

export default App;
