import './App.css'
import React, { Suspense } from 'react';
import { Hero } from './components/Hero';
import { Service} from './components/Service';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { UserSearch } from './components/UserSearch';

function App() {
 

  return (
    <>
       <div className="min-h-screen">
      <Hero />
      <Service />
      <Suspense fallback={<div>Loading users...</div>}>
        <UserSearch />
      </Suspense> 
      <Pricing />
       <Contact />
    </div>
    </>
  )
}

export default App
