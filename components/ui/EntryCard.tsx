import { FC,DragEvent, useContext } from 'react'
import { Card, CardActionArea, CardContent,CardActions } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Entry } from '../../interfaces';
import { UIContext } from '../../context/ui/UIContext';


interface Props{
    entry:Entry;
}
export const EntryCard :FC<Props>= ({entry}) => {
const {startDagging,endDagging} = useContext(UIContext)

    const onDragStart = (event:DragEvent)=>{
        event.dataTransfer.setData('text', entry._id);
        //
        startDagging();
    }

    const onDragEnd= ()=>{
        endDagging();    
    }
  return (
    <Card
    sx={{marginBotton:1, opacity:1}}
    draggable
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace:'pre-line'}}>{entry.description}</Typography>
            </CardContent>
            <CardActions sx={{display:'flex',justifyContent:'end', paddingRight:'2'}}> 
                <Typography variant='body2'>
                    Haces 30 min
                </Typography>
            </CardActions>
        </CardActionArea>
      
    </Card>
  )
}
