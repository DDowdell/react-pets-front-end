// import './App.css'
import * as petServices from './services/petService.js'
import { useState, useEffect } from 'react';
import PetList from './components/PetList/PetList';
import PetDetail from './components/PetDetail/PetDetail';
import PetForm from './components/PetForm/PetForm';



const App = () => {
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSelect = (pet) => {
    setSelected(pet);
    setIsFormOpen(false);
  };

  const handleFormView = () => {
    setIsFormOpen(!isFormOpen);
  };

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
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />
      {isFormOpen ? (
        <PetForm />
      ) : (
        <PetDetail selected={selected} />
      )}
      </>
  )};

export default App;
