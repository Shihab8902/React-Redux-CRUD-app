import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';
import { addComponents } from '../ComponentSlice';
import { useNavigate } from 'react-router-dom';

const AddComponent = () => {

  const components = useSelector((state)=> state.components.components);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [type, setType] = useState('');

  const submitHandler = (e)=>{
    e.preventDefault();
    const newComponent = {
      id: uuidv4(),
      sl: components.length +1,
      name: name,
      type: type
    }

    dispatch(addComponents(newComponent));

    navigate("/showComponent", {replace: true});

  }


  return (
    <div className='add-component-page'>
      <h3 className='add-component-heading'>Add a new component</h3>
      <div className="component-add-field">
          <form onSubmit={submitHandler}>
              <label className='add-component-label' htmlFor="name">Name:</label>
              <input className='add-component-input-field' type="text" name="componentName" id="componentName" placeholder='Component name' required onChange={(e)=> setName(e.target.value)} value={name}/> <br />

              <label className='add-component-label' htmlFor="type">Type:</label>
              <input className='add-component-input-field ml-5px' type="text" name="componentType" id="componentType" placeholder='Component type' required onChange={(e)=> setType(e.target.value)} value={type}/> <br />

              <button type="submit" className='add-button'>Add component</button>
          </form>
      </div>
    </div>
  )
}

export default AddComponent