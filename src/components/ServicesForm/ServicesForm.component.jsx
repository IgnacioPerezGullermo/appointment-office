import React from 'react';

function ServicesForm() {
  return (
    <div className="grid-span-2">
      <form className="form">
        <fieldset>
          <legend>Services Form</legend>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <label htmlFor="service_name">Nombre del Servicio</label>
            <input name="service_name" type="text" id="service_name" required />
            <label htmlFor="service_price">Valor del Servicio</label>
            <input
              name="service_price"
              type="number"
              id="service_price"
              required
            />
            <label htmlFor="service_duration">Duracion Servicio</label>
            <input
              name="service_duration"
              type="time"
              id="service_duration"
              required
            />
            <button>Enviar</button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ServicesForm;
