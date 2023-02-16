
import { AppBar, Button, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom'

const Layout = () => {
    
    const navigate = useNavigate()
  return (
    <>
    <CssBaseline/>
    <AppBar>
        <Toolbar>
            <IconButton edge='start' color='inherit' >
                <MenuIcon></MenuIcon>
                </IconButton>
                <Typography style={{flexGrow:1}}>App new</Typography>
                <Button variant='text'color='inherit' onClick={()=>navigate('/')} >CERRAR SESION</Button>
           
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Layout