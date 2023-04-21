import React,{Component} from "react";
import { variables } from '../../../../Variables.js'
import { Backdrop } from "@mui/material";

export class Table_citas extends Component{
    
    constructor (props){
        super(props);

        this.state={
            servicios:[],
            personas:[],
            empleados:[],
            citas:[],
            citas_in:[],
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

    refreshList4(){
        fetch(variables.API_URL +'Empleados')
         .then(response=>response.json())
         .then(data =>{
             this.setState({empleados:data});
         });
     }

     refreshList2(){
        fetch(variables.API_URL +'Personas')
         .then(response=>response.json())
         .then(data =>{
             this.setState({personas:data});
         });
     }
 
     refreshList3(){
        fetch(variables.API_URL +'Servicios')
         .then(response=>response.json())
         .then(data =>{
             this.setState({servicios:data});
         });
     }

    componentDidMount(){
        this.refreshList();
        this.refreshList2();
        this.refreshList3();
        this.refreshList4();
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

    //Como se mostraran los campos al agregar una nueva cita
    addClick(){
        this.setState({
            modalTitle:"Registrar Citas",
            id:0,
            descripcion:"",
            fecha:"",
            identificacion:"",
            servicioId:"",
            fechaCreacion:"",
            idEmpleado:"",
            estatus:""
        });
    }

    //Buscar datos de citas existentes
    editClick(citas){
        this.setState({
            modalTitle:"Actualizar Registro",
            id:citas.id,
            descripcion:citas.descripcion,
            fecha:citas.fecha,
            identificacion:citas.identificacion,
            servicioId:citas.servicioId,
            fechaCreacion:citas.fechaCreacion,
            idEmpleado:citas.idEmpleado,
            estatus:citas.estatus
        });
    }


    //Create
    createClick(){
        fetch(variables.API_URL+'Citas', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                descripcion:this.state.descripcion,
                fecha:this.state.fecha,
                identificacion:this.state.identificacion,
                servicioId:this.state.servicioId,
                fechaCreacion:this.state.fechaCreacion,
                idEmpleado:this.state.idEmpleado,
                estatus:this.state.estatus
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            alert('Citas registrado');
            window.location.replace('/citas');
        }, (error)=>{
            alert('No se pudo registrar');
        })
    }
    //Update
    updateClick(id){
        fetch(variables.API_URL+'Citas/'+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                id:this.state.id,
                descripcion:this.state.descripcion,
                fecha:this.state.fecha,
                identificacion:this.state.identificacion,
                servicioId:this.state.servicioId,
                fechaCreacion:this.state.fechaCreacion,
                idEmpleado:this.state.idEmpleado,
                estatus:this.state.estatus
            })
        })
        .then(res=>res.json())
        .then((result)=>{ 
            alert('Error ;(!');
            
        }, (error)=>{
            window.location.replace('/citas');
            alert('Registro actualizado');
        })
    }
    
    //Delete
    deleteClick(id){
        if(window.confirm('Seguro que desea eliminar este registro?')){ 
            fetch(variables.API_URL+'Citas/'+id.id, {
                method:'DELETE',
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })
            .then(response=>response.json())
            .then((result)=>{
                this.refreshList();
                alert('Registro Eliminado');
                
            }, (error)=>{
                this.refreshList();
                alert('Registro Eliminado');
            })
        }
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
                <button type="button" className="btn btn-outline-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={()=>this.addClick()}>Registrar Cita</button>
               
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true" style={{backdropFilter: "blur(10px)"}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">ID</span>
                            <input type="text" className="form-control" value={id} onChange={this.idCitas}/>
                        </div>
                       

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Descripcion</span>
                            <input type="text" className="form-control" value={descripcion} onChange={this.descripcion}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Fecha</span>
                            <input type="datetime-local" className="form-control" value={fecha} onChange={this.fecha}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Identificacion</span>
                            <select formControlName="empleado" class="form-control" onChange={this.identificacion}> 
                            <option value=""></option>
                            {personas.map(person =>
                            <option value={person.identificacion}>{person.identificacion}</option>
                            )}
                            </select>
                        </div>
                        <div className="input-group mb-3">
                        <span className="btn btn-outline-secondary">Servicio</span>
                        <select formControlName="servicio" class="form-control" onChange={this.servicioId}>
                        <option value=""></option>
                        {servicios.map(servi =>
                        <option value={servi.id}>{servi.nombre}</option>
                        )}
                        </select>
                        </div>
                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Fecha de Creacion</span>
                            <input type="datetime-local" className="form-control" value={fechaCreacion} onChange={this.fechaCreacion}/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="btn btn-outline-secondary">Empleado</span>
                        <select formControlName="empleado" class="form-control" onChange={this.idEmpleado}> 
                            <option value=""></option>
                            {empleados.map(emple =>
                            <option value={emple.idEmpleado}>{emple.identificacion}</option>
                            )}
                        </select>
                        </div>
                        
                        <div className="input-group mb-3">
                        <span className="btn btn-outline-secondary">Estatus</span>
                        <select formControlName="empleado" class="form-control" onChange={this.estatus}> 
                            <option value=""></option>
                            <option value="1">Activa</option>
                            <option value="2">Completada</option>
                            <option value="0">Cancelada</option>
                        </select>
                        </div>

                        <div>  

                        {id==0?
                        <button type="button" 
                        className="btn btn-outline-primary float-start"
                        onClick={()=>this.createClick()}>Registrar</button>
                        :null}

                        {id!==0?
                        <button type="button" 
                        className="btn btn-outline-primary float-start"
                        onClick={()=>this.updateClick(id)}>Guardar cambios</button>
                        :null}
                        </div>                        
                    </div>

                </div>
                </div>
                </div>
                
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
                                <td>{citas.servicio.nombre}</td>
                                <td>{citas.fechaCreacion}</td>
                                <td>{citas.identificacionNavigation.nombre} {citas.identificacionNavigation.apellido}</td>
                                <td>{citas.estatus}</td>
                                <td>
                                <button type="button" className="btn btn-outline-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal" 
                                onClick={()=>this.editClick(citas)}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                    </svg>

                                </button>
                                <span> </span>
                                <button type="button" 
                                className="btn btn-outline-primary"
                                onClick={()=>this.deleteClick(citas)}>

                                
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
                                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                    
                                </button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
                
                
            </div>
        )
    }
}

export default Table_citas;