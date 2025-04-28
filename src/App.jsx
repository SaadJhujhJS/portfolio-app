import React from 'react'
import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/herosection/HeroMain';
const App=()=>{
  return(
    <div className='w-full'>
      <NavbarMain />
      <HeroMain />
    </div>
  )
};

export default App;