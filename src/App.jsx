import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';

function App() {

  const allCoffee = useLoaderData();
  const [coffees, setCoffees] = useState(allCoffee);

  return (
    <>
      <div className='m-6 font-playfair'>
        <h1 className='text-4xl text-center my-12'>Our Popular Products</h1>
        <div className='grid md:grid-cols-2 gap-6 mx-12'>
          {
            allCoffee.map(coffee => <CoffeeCard key={coffee._id}
              coffees={coffees}
              coffee={coffee}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
