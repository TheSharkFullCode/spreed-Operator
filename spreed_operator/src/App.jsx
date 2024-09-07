import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect} from "react";
import { data } from 'autoprefixer';
function App() {
  const [count, setCount] = useState(0);

  const [nombre,setNombre ]= useState('');
  const [imagen,setImagen ]= useState('');

  // useEffect( ()=>{

     
  //   const Url =  'https://randomuser.me/api/';
  //   const peticion = fetch(Url);
  //   peticion.then(data => data.json())
    
  //   peticion.then(lectura => console.log(lectura.results[0].name.first))
  //   peticion.catch(err => console.log(err))

  // },[])

  useEffect(() => {
    const Url = 'https://randomuser.me/api/';
    
    // Realiza la petición
    fetch(Url)
        .then(response => {           
            return response.json();
        })
        .then(lectura => {
            // Aquí puedes acceder a los datos
            console.log(lectura);

            setNombre(`${lectura.results[0].name.first} ${lectura.results[0].name.last}` );

            setImagen(`${lectura.results[0].picture.large}` );
        })
        .catch(err => console.log(err));
}, []);

  
  return (
    <> 

      <h1 className='text-[2xl]  text-sky-500  font-[Georgia]'>hello tailwindcss welcome!</h1>

      <div className="flex gap-10">
        <button onClick={()=>setCount(count+1)}> Increment </button>
      <div>
        <h1>      {count}       </h1>
      </div>
        <button onClick={()=>setCount(count-1)}> Decrement </button>
      </div>

      <div className='flex-row mt-8  '>
   
        <h1 className='underline'> El Enpleado del Mes</h1>  <br />

      <div className='text-[blue]'>
                  {nombre} <br /><br />
        
      </div>  

      <div className='w-[20%] h-[50%] rounded-full border-[5px] overflow-hidden'> 
        <img src={imagen} alt="" />
      </div>

      </div>
   
    </>
  )
}

export default App
