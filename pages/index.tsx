import {Grid,Card,CardHeader, CardContent} from '@mui/material'
import type { NextPage } from 'next'
import { Layout } from '../components/layouts'
import { NavBar } from '../components/ui';
import { EntryList } from '../components/ui/EntryList';
import NewEntry from '../components/ui/NewEntry';


const HomePage: NextPage = () => {
  return (
    <Layout title ='Home open jira'>  
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <Card sx={{height:'calc(100vh - 100px)'}}>
          <CardHeader title='Pendientes'/>
            <CardContent>
              <NewEntry/>
              <EntryList status='pending'/>
            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{height:'calc(100vh - 100px)'}}>
          <CardHeader title='En progreso'/>
          <CardContent>
              <EntryList status='in-progress'/>
            </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Card sx={{height:'calc(100vh - 100px)'}}>
          <CardHeader title='Completadas'/>
          <CardContent>
              <EntryList status='finished'/>  
            </CardContent>
        </Card>
      </Grid>
    </Grid>
    
    
    </Layout>
   
  ) 
}  

export default HomePage
