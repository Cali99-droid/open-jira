import { createContext } from 'react';


interface ContextProps{
      sidemenuOpen:boolean;  
      isDragging:boolean,
      isAddingEntry:boolean,
      
      openSideMenu:()=>void;
      closeSideMenu:()=>void;
   
      setIsAddEntry: (isAdding: boolean) => void,
      startDagging: () => void,
      endDagging: () => void
}
export const UIContext  = createContext({}as ContextProps);

