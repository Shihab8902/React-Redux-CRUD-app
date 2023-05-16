import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { deleteComponent } from '../ComponentSlice';
import { Link } from 'react-router-dom';

const ShowComponent = () => {

  const components = useSelector((state)=> state.components.components);
  const dispatch = useDispatch();

  const deleteHandler = (id)=>{
    const filteredComponent = components.filter((component)=> component.id !== id);
    dispatch(deleteComponent(filteredComponent));
  }


  return (
    <div className='components-page-body'>
          <h3 className='components-heading'>Selected Components</h3>
          <div className='component-table'>
      <table>
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Name</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
                {components && components.map((component)=>{
                  const {id, sl, name, type} = component;
                  return <tr key={id}>
                      <td>{sl}</td>
                      <td>{name}</td>
                      <td>{type}</td>
                      <td>
                        <Link to={"/editComponent"} state={{id, sl, name, type}}><button className='action-button btn-neutral'>Edit</button></Link>
                        <button className='action-button btn-danger' onClick={()=>deleteHandler(component.id)}>Delete</button>
                      </td>
                  </tr>
                })}

            </tbody>
      </table>

      </div>

    </div>
  )
}

export default ShowComponent