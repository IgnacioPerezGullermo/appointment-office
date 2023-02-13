const OrganizationForm = () => {
  return (
    <div className="grid-span-2">
      <form className="form">
        <fieldset>
          <legend>Organizations Form</legend>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <label for="organization_id">ID</label>
            <input
              type="text"
              id="organization_id"
              name="organization_id"
              required=""
              disabled
            />
            <label for="short_name">Nombre corto</label>
            <input type="text" id="short_name" name="short_name" required="" />
            <label for="business_name">Nombre completo</label>
            <input
              type="text"
              id="business_name"
              name="business_name"
              required=""
            />
            <label for="country">País</label>
            <select name="country" id="country" required="">
              <option value="country">Argentina</option>
            </select>
            <label for="state">Provincia</label>
            <select name="state" id="state" required="">
              <option value="state">Buenos Aires</option>
              <option value="state">Catamarca</option>
              <option value="state">Chaco</option>
              <option value="state">Chubut</option>
              <option value="state">Córdoba</option>
              <option value="state">Corrientes</option>
              <option value="state">Entre Ríos</option>
              <option value="state">Formosa</option>
              <option value="state">Jujuy</option>
              <option value="state">La Pampa</option>
              <option value="state">La Rioja</option>
              <option value="state">Mendoza</option>
              <option value="state">Misiones</option>
              <option value="state">Neuquén</option>
              <option value="state">Río Negro</option>
              <option value="state">Salta</option>
              <option value="state">San Juan</option>
              <option value="state">San Luís</option>
              <option value="state">Santa Cruz</option>
              <option value="state">Santa Fe</option>
              <option value="state">Santiago del Estero</option>
              <option value="state">Tierra del Fuego</option>
              <option value="state">Tucumán</option>
            </select>
            <label for="city">Ciudad</label>
            <input type="text" id="city" name="city" required="" />
            <label for="street">Calle</label>
            <input type="text" id="street" name="street" required="" />
            <label for="address">Dirección</label>
            <input type="text" id="address" name="address" required="" />
            <label for="postal_code">CP</label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              required=""
            />
            <label for="address_references">Otras Referencias</label>
            <input
              type="text"
              id="address_references"
              name="address_references"
              required=""
            />
            <label for="business_phone">Teléfono</label>
            <input
              type="tel"
              id="business_phone"
              name="business_phone"
              required=""
            />{' '}
            <br />
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required="" />
            <button>Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default OrganizationForm;
