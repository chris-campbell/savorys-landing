const SelectInfuser = ({ infusers, setInfuser }) => {
  const handleChange = (e) => {
    setInfuser(e.target.value);
  };

  return (
    <select onChange={handleChange}>
      <option disabled selected value>
        Select an Infuser
      </option>

      {infusers.map(({ name, price, id }) => (
        <option
          key={id}
          value={id}
        >{`${name}  (${price.formatted_with_symbol})`}</option>
      ))}
    </select>
  );
};

export default SelectInfuser;
