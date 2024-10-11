import React from 'react';

const Home = ({ mensaje }) => {
  return (
    <div>
      <h2>Home Page</h2>
      <p>{mensaje ? mensaje : 'Cargando mensaje...'}</p>
    </div>
  );
};

export default Home;
