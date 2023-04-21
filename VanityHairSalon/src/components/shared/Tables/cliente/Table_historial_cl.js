import React,{Component} from "react";
import { variables } from '../../../../Variables.js'
import { Backdrop } from "@mui/material";

export class Table_historial_cl extends Component{
    
    constructor (props){
        super(props);

        this.state={
            citas:[],
            modalTitle:"",
            id:0,
            descripcion:"",
            fecha:"",
            identificacion:"",
            servicioId:"",
            fechaCreacion:"",
            idEmpleado:"",
            estatus:""
        }
    }

    //Buscar y mostrar los clientes existentes
    refreshList(){
       fetch(variables.API_URL +'Citas')
        .then(response=>response.json())
        .then(data =>{
            this.setState({citas:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    //Peticiones
    idCitas =(e)=>{
        this.setState({id:e.target.value});
    }

    descripcion =(e)=>{
        this.setState({descripcion:e.target.value});
    }
    fecha =(e)=>{
        this.setState({fecha:e.target.value});
    }

    identificacion =(e)=>{
        this.setState({identificacion:e.target.value});
    }

    servicioId =(e)=>{
        this.setState({servicioId:e.target.value});
    }
    fechaCreacion =(e)=>{
        this.setState({fechaCreacion:e.target.value});
    }
    idEmpleado =(e)=>{
        this.setState({idEmpleado:e.target.value});
    }
    estatus =(e)=>{
        this.setState({estatus:e.target.value});
    }

    //FRONT
    render(){
        const{
            servicios,
            personas,
            empleados,
            citas,
            modalTitle,
            id,
            descripcion,
            fecha,
            identificacion,
            servicioId,
            fechaCreacion,
            idEmpleado,
            estatus

        }=this.state

        return(
            <div className="container">
                <br/>
    
                <table className="table table-striped">
                
                    <thead>
                        <th>ID</th>
                        <th>Descripcion</th>
                        <th>Fecha</th>
                        <th>Identificacion</th>
                        <th>Servicio</th>
                        <th>Fecha de creacion</th>
                        <th>Empleado</th>
                        <th>Estatus</th>
                    </thead>
                    <tbody>
                        {citas.map(citas =>
                       
                            <tr key={citas.id}>
                                <td>{citas.id}</td>
                                <td>{citas.descripcion}</td>
                                <td>{citas.fecha}</td>
                                <td>{citas.identificacion}</td>
                                <td>{citas.servicioId}</td>
                                <td>{citas.fechaCreacion}</td>
                                <td>{citas.idEmpleado}</td>
                                <td>{citas.estatus}</td>
                                
                            </tr>
                            )}
                    </tbody>
                </table>
                
                
            </div>
        )
    }
}

export default Table_historial_cl;