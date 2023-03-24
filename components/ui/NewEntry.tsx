import { Button, TextField } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import { Box } from '@mui/system';
import { ChangeEvent, useState, useContext } from 'react';
import { EntriesContext } from '../../context/entries/EntriesContext';
import { UIContext } from '../../context/ui/UIContext';
const NewEntry = () => {

    const {addNewEntry}= useContext(EntriesContext);
    const {isAddingEntry, setIsAddEntry}=useContext(UIContext);
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const ontextChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setInputValue(event.target.value);

    }
    const onSave = ()=>{
       if(inputValue.length ===0) return;
       addNewEntry(inputValue);
       setInputValue('')
       setIsAddEntry(false); 
       setTouched(false);    
    }

  return (
    <Box sx={{marginBottom:2, paddingX:1}}>
        {
            isAddingEntry?(
                <>
                    <TextField 
                    fullWidth
                    sx={{marginTop:2, marginBottom:1
                    }}

                    placeholder='Nueva entrada'
                    autoFocus
                    multiline
                    label='Nueva  Entrada'
                    helperText={inputValue.length <= 0 && touched && 'ingrese un valor'}
                    error={inputValue.length <= 0 && touched}
                    value={inputValue}
                    onChange={ontextChange}
                    onBlur={()=>setTouched(true)}
                    />
                    <Box display='flex' justifyContent='space-between'>
                        <Button 
                            variant='text'    
                            onClick={()=>setIsAddEntry(false)}
                            >
                                Cancelar
                        </Button>

                         <Button 
                            variant='outlined' 
                            color='secondary'
                            endIcon={<SaveIcon/>}
                            onClick={onSave}
                            >
                                Guardar
                        </Button>
                    </Box>
                </>
            )
            :(
                <Button
                startIcon={<AddCircleIcon/>}
                fullWidth
                variant='outlined'
                onClick={()=>setIsAddEntry(true)}
                >
                Agregar Tarea

                  </Button>

            )
        }
               
            
        
      
    </Box>
  )
}

export default NewEntry
