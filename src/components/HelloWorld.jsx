import React from 'react';

const HelloWorld = ({ name, logo, img, menu }) => {
  return (
    <>
      <h1>¡Hola Mundo, Webpack con {name}</h1>
      <img className='icon' src={logo} alt={name} />
      <nav className='menu'>
        {menu.map((el) => (
          <a key={el[0]} href={el[1]}>
            {el[0]}
          </a>
        ))}
      </nav>
      <img src={img} alt='Yuna' />
      {console.log(this)}
    </>
  );
};

export default HelloWorld;
