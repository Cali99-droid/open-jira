import { createContext } from 'react';
import { Entry } from '../../interfaces';


interface ContextProps{
      entries:Entry[];//tD
      //mthosds
      addNewEntry: (descripcion: string) => void
      updateEntry: (entry: Entry) => void
}
export const EntriesContext  = createContext({}as ContextProps);