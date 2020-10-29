import React from 'react';

import './Sign.css';

const Sign = () => {
  const handleSubmit = () => {
    console.log("Submitted!");
  };

  return (
    <div id="sign">
      <h2>Bonjour !</h2>
      <p>Quel est votre numéro de marin ?</p>
      <form onSubmit={handleSubmit()}>
        <div id="form-group">
          <label htmlFor="sailor-id">
            Mon numéro est :
            <input
              type="text"
              name="sailor-id"
              placeholder="Exemple : 19780030"
            />
          </label>
          <input type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
};

export default Sign;
