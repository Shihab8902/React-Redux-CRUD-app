import {createSlice} from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';



const initalComponents = {
    components: [
        {
            id:uuidv4(),
            sl: 1,
            name: "Motherboard",
            type: "Basic Unit"
        }
    ]
}

export const componentSlice = createSlice({
    name: "components",
    initialState: initalComponents,
    reducers: {
        showComponents: (state) => state,

        addComponents: (state, action)=>{
             state.components.push(action.payload)
        },

        updateComponent : (state, action)=>{
            const {id, sl, name, type} = action.payload;
            const isComponentExist = state.components.filter((component)=> component.id === id)
            if(isComponentExist){
                isComponentExist[0].sl = sl
                isComponentExist[0].name = name;
                isComponentExist[0].type = type;
            }
        },

        deleteComponent: (state, action)=>{
            state.components = action.payload
        }

    }
})

export const {showComponents, addComponents, updateComponent, deleteComponent} = componentSlice.actions;

export default componentSlice.reducer;