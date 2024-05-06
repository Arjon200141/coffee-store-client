import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {

  const allCoffee = useLoaderData();

  return (
    <>
      <div className='m-6'>
        <h1 className='text-4xl text-center my-12'>Our Popular Products</h1>
        <div className='grid md:grid-cols-2 gap-6 mx-12'>
        {
          allCoffee.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
        </div>
      </div>
    </>
  )
}

export default App
