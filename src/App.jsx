// import './App.css'
import * as petServices from './services/petService.js'
import { useState, useEffect } from 'react';
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail';



const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);

    const handleSelect = (pet) => {
    setSelected(pet)
  }

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
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selected={selected} />
    </>
  );
};

export default App;
