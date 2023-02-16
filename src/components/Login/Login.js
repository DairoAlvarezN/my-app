import {  useState} from "react";
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import axios from 'axios'
import { Box, Paper, Typography } from "@mui/material"
import { useNavigate } from 'react-router-dom'


function App() {
  const  [miLogin, setLogin]= useState("false")

  const [body, setBody] = useState({ username: '', password: '' })
  const navigate = useNavigate()
  const inputChange = ({ target }) => {
    const { name, value } = target
    setBody({
        ...body,
        [name]: value
        
    })
   
    
}

const onSubmit = () => {
    axios.post('http://localhost:4000/api/login', body)
        .then(({ data }) => {
          
            localStorage.setItem('auth','"yes"')
           
            navigate('/app')
            
        })
        .catch(({ response }) => {
            console.log(response.data)
        })
}

  return (
    
    <>
    
        <Container  maxWidth="xs" >
        <Grid  
        container 
        direction="column"
         alignItems="center" 
         justifyContent="center" 
         sx={{minHeight: "100vh"}}>
          <Grid item>
            <Paper
             sx={{padding:"1.2em",
             borderRadius:"0.5em"
          }}>
            <Typography    sx={{mt:1, mb:1.5}} variant='h4'>Inicio de sesion</Typography>
            <Box component="form">
              <TextField
              required
              name='username'
              value={body.username}
              onChange={inputChange}
              color='primary'
              autoFocus
              margin='normal'
               fullWidth label="username" sx={{mt:2, mb:1.5}} ></TextField>
              <TextField
              
              required
              type='password'
              name='password'
              value={body.password}
              onChange={inputChange}
              
              color='primary'
               fullWidth
               margin='normal'
               label="password" sx={{mt:1, mb:1.5}} ></TextField>
              
              <Button fullWidth  onClick={() => onSubmit()}  variant="contained"  sx={{mt:1, mb:1.5}} disableElevation>Iniciar sesion</Button>
            </Box>
          </Paper>
          </Grid>
        </Grid>
</Container>
  
        </>
    
  );
}

export default App;