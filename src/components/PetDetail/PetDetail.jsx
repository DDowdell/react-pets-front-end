const PetDetail = (props) => {
  if (!props.selected) {
    return (
      <div>
        <h2>NO DETAILS</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>{props.selected.name}</h2>
      <h4>Breed: {props.selected.breed}</h4>
      <h4>
        Age: {props.selected.age} year{props.selected.age > 1 ? 's' : ''} old
      </h4>
      <div>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Pet
        </button>
        <button onClick={() => props.handleDeletePet(props.selected._id)}>
          Delete Pet
        </button>
      </div>
    </div>
  );
};

export default PetDetail;
