import { DeleteForeverOutlined, EditOutlined } from "@mui/icons-material";
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React from "react"

class Listar extends React.Component{
    constructor(props){
        super(props);
        this.state={datosCargados:false, productos:[] 
        }
    }
    cargarDatos(){
        fetch('http://localhost:4000/productos')
        .then(respuesta=>respuesta.json())
        .then((datosRespuesta)=>{console.log(datosRespuesta);
        this.setState({datosCargados:true, productos:datosRespuesta})
        })
        .catch(console.log)

    }
    componentDidMount(){
        this.cargarDatos();
    }
    render(){
        const{datosCargados,productos}=this.state
        return(
            <>
            <TableContainer component={Paper} elevation={2}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Planeta</TableCell>
                        <TableCell>Acciones</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto) => (
                        <TableRow key={producto.id}>
                            <TableCell>{producto.id}</TableCell>
                            <TableCell>{producto.nombre}</TableCell>
                            <TableCell>{producto.valor}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => alert(`Editar }`)} size='small' color='primary'>
                                    <EditOutlined/>
                                </IconButton>
                                <IconButton onClick={() => alert(`Eliminar `)} size='small' color='secondary'>
                                    <DeleteForeverOutlined />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>

            
            </>
        );
    }
}
export default Listar;