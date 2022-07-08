import './App.css';
import TodoMain from './TodoComponent/TodoMain';
import { useState } from 'react';
import { Box, Button } from '@mui/material'; 
import {UseUserContext} from './Context/Context'
import { useEffect } from 'react';


function App() {
  const [components, setComponents] = useState([]);
  const {updateButton, setUpdateButton} = UseUserContext();

  function addComponent() { 
    setComponents([...components, {title: "", id: components.length}]) 
  } 

  useEffect(() => {
      console.log(updateButton, 'updateButton')
  },[updateButton])

  return (
    <div className="App">
        {updateButton}
        <Button variant="contained" onClick={addComponent}>Add </Button>
        <Box className="multiple-component">
        {components.map((item, i) =><div key={i} className='new-form'> <TodoMain /></div> )}
        <div className='last-form'><TodoMain /></div>
      
        </Box>
        <Button onClick={() => setUpdateButton(components)} className='next-button' variant="contained">NEXT</Button>
    </div>
  );
}

export default App;
