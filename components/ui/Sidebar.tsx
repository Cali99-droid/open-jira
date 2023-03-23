import Drawer from "@mui/material/Drawer";
import { Box , Divider, List,ListItemButton,ListItemText,ListItemIcon} from '@mui/material';
import Typography from '@mui/material/Typography';
import InboxIcon from '@mui/icons-material/Inbox';
import EmailIcon from '@mui/icons-material/Email';
const menuItems:string[]=['inbox', 'Start', 'Send email ', 'ese p']

export  const Sidebar = ()=> {
  return (
   <Drawer
   anchor="left"
   open={true}
   onClose={()=>console.log('cerrando')}

   >
    <Box sx={{width:250}}>
    <Box sx={{padding:'5px 10px'}}>
        <Typography variant="h4">Menú</Typography>

    </Box>

    <List>
      {
        menuItems.map((text,index)=>(
          <ListItemButton  key={index}>
      <ListItemIcon>
        {index%2 ? <InboxIcon/>:<EmailIcon/>}
      </ListItemIcon>
            
            <ListItemText primary={text}/>


          </ListItemButton>
        ))
      }


    </List>

    <Divider>
    <List>
      {
        menuItems.map((text,index)=>(
          <ListItemButton  key={index}>
      <ListItemIcon>
        {index%2 ? <InboxIcon/>:<EmailIcon/>}
      </ListItemIcon>
            
            <ListItemText primary={text}/>


          </ListItemButton>
        ))
      }


    </List>
    </Divider>

    </Box>
    


   </Drawer>
  )
}
