import React from 'react'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../Pages/Home'
import Error from '../Pages/Error'
import ShowComponent from '../features/component/ShowComponent'
import AddComponent from '../features/component/AddComponent'
import Navigation from '../layouts/Navigation'
import EditComponent from '../features/component/EditComponent'


const Index = () => {

  return <BrowserRouter>

            <Navigation />
  
            <Routes>
                <Route  path='/' element={<Home />} />
                <Route  path='/showComponent' element={<ShowComponent />} />
                <Route  path='/addComponent' element={<AddComponent />} />
                <Route  path='/editComponent' element={<EditComponent />} />
                <Route  path='*' element={<Error />} />
            </Routes>

  
        </BrowserRouter>
}

export default Index

//CRUD - Create, Read, Update, Delete