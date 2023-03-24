import { EntriesState } from './';
import { Entry } from '../../interfaces/entry';


   type EntriesType = 
   |{type:'[Entry] Add-Entry', payload:Entry}
   |{type:'[Entry] Entry-UPDATED', payload:Entry}
   
    export const entriesReducer =(state:EntriesState,action:EntriesType):EntriesState=>{

       switch (action.type) {
           case '[Entry] Add-Entry':
                   return{
                         ...state,
                         entries:[...state.entries, action.payload]
                         }
            case '[Entry] Entry-UPDATED':
            return{
                    ...state,
                    entries:[...state.entries.map(entry=>{
                        if(entry._id === action.payload._id){
                            entry.status = action.payload.status;
                            entry.descripcion = action.payload.descripcion
                            
                        }
                        return entry;

                    })]
                    }             
           default:
                   return state;
       }    
   }    