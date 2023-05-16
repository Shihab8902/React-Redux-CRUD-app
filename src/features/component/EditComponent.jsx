import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { updateComponent } from '../ComponentSlice';

const EditComponent = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [id, setId] = useState(location.state.id);
    const [sl, setSl] = useState(location.state.sl);
    const [name, setName] = useState(location.state.name);
    const [type, setType] = useState(location.state.type);

    const updateHandler = (e)=>{
        e.preventDefault();
        dispatch(updateComponent({id, sl, name, type}));
        navigate("/showComponent", {replace: true});
    }

  return (
    <div className='add-component-page'>
    <h3 className='add-component-heading'>Update component</h3>
    <div className="component-add-field">
        <form onSubmit={updateHandler}>
            <label className='add-component-label' htmlFor="name">Name:</label>
            <input className='add-component-input-field' type="text" name="componentName" id="componentName" placeholder='Component name' required onChange={(e)=> setName(e.target.value)} value={name}/> <br />

            <label className='add-component-label' htmlFor="type">Type:</label>
            <input className='add-component-input-field ml-5px' type="text" name="componentType" id="componentType" placeholder='Component type' required onChange={(e)=> setType(e.target.value)} value={type}/> <br />

            <button type="submit" className='add-button'>update component</button>
        </form>
    </div>
  </div>
  )
}

export default EditComponent