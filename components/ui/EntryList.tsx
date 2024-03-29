import { List, Paper } from "@mui/material"
import { FC, useContext, useMemo ,DragEvent} from 'react';
import { EntryStatus } from "../../interfaces";
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';


import styles from './EntryList.module.css'

interface Props{
  status:EntryStatus;
}

export const EntryList:FC<Props> = ({status}) => {

      const {entries,updateEntry} = useContext(EntriesContext)
      const {isDragging,endDagging} = useContext(UIContext)


      const entriesByStatus = useMemo(()=>  entries.filter(entry=>entry.status === status), [entries, status])

      const onDropEntry = (event: DragEvent<HTMLDivElement>)=>{
        const id = event.dataTransfer.getData('text')  
        const entry = entries.find(e=>e._id ===id)!;
        entry.status = status;
        updateEntry(entry);
        endDagging();

      }
      const allowDrop = (event:DragEvent<HTMLDivElement>)=> {
        event.preventDefault();


      } 
  return (
    <div
    onDrop={ onDropEntry }
    onDragOver={allowDrop}
    className={isDragging ? styles.dragging :''}

    >
        <Paper sx={{
          height:'calc(100vh - 180px)',
          overflow:'scroll', 
          backgroundColor:'transparent',
          padding:'1px 5px',
         
          "&::-webkit-scrollbar": {
            width: "3px",
            bgcolor: "#454545",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#4a148c",
            border: "7px none #fffff",
            borderRadius: "10px",
          },
          }}>

            <List sx={{ opacity: isDragging ? 0.2 : 1, transition:'all .3s'}}> 
            {
              entriesByStatus.map(entry=>(
                <EntryCard  key={entry._id} entry={entry}/>

              ))
            } 
            </List>

        </Paper>
      
    </div>
  )
};

