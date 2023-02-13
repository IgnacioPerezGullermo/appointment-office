import React from 'react';

function StylistsForm() {
  return (
    <div className="grid-span-2">
      <form className="form">
        <fieldset>
          <legend>Stylists Form</legend>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <label for="stylist_firstname">Nombre</label>
            <input
              type="text"
              id="stylist_firstname"
              name="stylist_firstname"
              required=""
            />
            <label for="stylist_lastname">Apellido</label>
            <input
              type="text"
              id="stylist_lastname"
              name="stylist_lastname"
              required=""
            />
            <label for="marital_status">Estado civil</label>
            <select
              name="marital_status"
              id="marital_status"
              required=""
              placeholder="Seleccione una opcion"
            >
              <option value="">Seleccione una opcion</option>
              <option value="marital_status">Soltero</option>
              <option value="marital_status">Casado</option>
            </select>
            <label htmlFor="gender">Genero</label>
            <select
              name="gender"
              id="gender"
              required=""
              placeholder="Seleccione una opcion"
            >
              <option value="">Seleccione una opcion</option>
              <option value="gender">Masculino</option>
              <option value="gender">Femenino</option>
            </select>
            <label htmlFor="branch_id">Sucursal</label>
            <select name="branch_id" id="branch_id" required="">
              <option value="branch_id">Sucursal 1</option>
              <option value="branch_id">Sucursal 2</option>
              <option value="branch_id">Sucursal 3</option>
            </select>
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
}

export default StylistsForm;
