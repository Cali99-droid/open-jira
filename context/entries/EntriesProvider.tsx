import { FC, useReducer } from 'react';
import { Entry } from '../../interfaces';
import { EntriesContext,entriesReducer } from './'
import { v4 as uuidv4 } from 'uuid';



export interface EntriesState{
     entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState={
      entries:[
        {
        _id:uuidv4(),
        descripcion:'Pendiente wegogwe ojsdgpon  dspgnpswkg kogj ojgnkpn dbfdrb',
        status:'pending',
        createdAt:Date.now(),
      },
      {
        _id:uuidv4(),
        descripcion:'In-progess wegogwe ojsdgpon  dspgnpswkg kogj ojgnkpn dbfdrb',
        status:'in-progress',
        createdAt:Date.now()-1000000,
      },
      {
        _id:uuidv4(),
        descripcion:'Terminadas wegogwe ojsdgpon  dspgnpswkg kogj ojgnkpn dbfdrb',
        status:'finished',
        createdAt:Date.now()-100000,
      }
    
    
    ],
}

 interface Props{
   children: JSX.Element | JSX.Element[],

  }

export const EntriesProvider:FC<Props> = ({children}) => {

      const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE)

      const addNewEntry = (descripcion:string)=> {
        const newEntry: Entry ={
          _id: uuidv4(),
          descripcion,
          createdAt: Date.now(),
          status: 'pending'
        }    
        dispatch({type:'[Entry] Add-Entry', payload:newEntry})
      }

      const updateEntry=(entry:Entry)=>{
          dispatch({type:'[Entry] Entry-UPDATED',payload:entry})
      }
      return (
          <EntriesContext.Provider value={{
              ...state,
              //Methods
              addNewEntry,
              updateEntry,
           }}>
                 {children}

          </EntriesContext.Provider>
    )
}