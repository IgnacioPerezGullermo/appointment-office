import { useState, useEffect } from 'react';
import regionData from '../../utils/listOfCountries_States_Cities.json';

const BranchForm = () => {
  const [countries, setCountries] = useState(null);
  const [states, setStates] = useState(null);

  useEffect(() => {
    setCountries(regionData[0].countries);
    setStates(regionData[0].states);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid-span-2">
      <form>
        <fieldset>
          <legend>Branch Form</legend>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <label htmlFor="organization_id">ID</label>
            <input
              name="organization_id"
              id="organization_id"
              type="text"
              disabled
            />
            <label htmlFor="short_name">Nombre Corto</label>
            <input name="short_name" type="text" id="short_name" required />
            <label htmlFor="business_name">Nombre</label>
            <input
              name="business_name"
              type="text"
              id="business_name"
              required
            />
            <label htmlFor="country">Pais</label>
            <select name="country" id="country">
              <option value="" disabled selected hidden></option>
              {countries &&
                countries.map((country, index) => (
                  <option value={country.name} key={`${index}-${country.code}`}>
                    {country.name}
                  </option>
                ))}
            </select>
            <label htmlFor="state">Provincia</label>
            <select name="state" id="state">
              <option value="" disabled selected hidden></option>
              {states &&
                states.map((state, index) => (
                  <option value={state.name} key={`${index}-${state.code}`}>
                    {state.name}
                  </option>
                ))}
            </select>
            <label htmlFor="city">Ciudad</label>
            <input name="city" type="text" id="city" required />
            <label htmlFor="street">Calle</label>
            <input name="street" type="text" id="street" required />
            <label htmlFor="addres">Direccion</label>
            <input name="addres" type="text" id="addres" required />
            <label htmlFor="postal_code">CP</label>
            <input name="postal_code" type="text" id="postal_code" required />
            <label htmlFor="address_references">Otras Referencia</label>
            <input
              name="address_references"
              type="text"
              id="address_references"
              required
            />
            <label htmlFor="business _phone">Telefono</label>
            <input
              name="business_phone"
              type="tel"
              id="business_phone"
              required
            />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <br />
            <button onClick={handleSubmit}>Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default BranchForm;
