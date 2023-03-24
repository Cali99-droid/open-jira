import { FC, useReducer } from 'react';
import { UIContext,uiReducer } from './'


export interface UIState{
     sidemenuOpen: boolean;
     isAddingEntry:boolean,
     isDragging:boolean,
}

const UI_INITIAL_STATE: UIState={
      sidemenuOpen:false,
      isAddingEntry:false,
      isDragging:false,
     
}

 interface Props{
   children: JSX.Element | JSX.Element[]
  }

export const UIProvider:FC<Props> = ({children}) => {

      const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

      const openSideMenu=()=>{
            dispatch({type:'UI - Open Sidebar'})
      }

      //close side menu
      const closeSideMenu=()=>{
            dispatch({type:'UI - Close Sidebar'})
      }
      const setIsAddEntry =(isAdding:boolean)=>{
            dispatch({type:'UI - Set isAddingEntry',payload: isAdding})
      }

      const startDagging = ()=>{
            dispatch({type:'UI - Start Dragging'})
      }
      const endDagging = ()=>{
            dispatch({type:'UI - End Dragging'})
      }


      return (
          <UIContext.Provider value={{
              ...state,
              openSideMenu,
              closeSideMenu,
              setIsAddEntry,

              startDagging,
              endDagging,
           }}>
                 {children}
          </UIContext.Provider>
    )
}


