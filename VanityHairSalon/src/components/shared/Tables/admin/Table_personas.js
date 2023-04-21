import React,{Component} from "react";
import { variables } from '../../../../Variables.js'
import { Backdrop } from "@mui/material";

export class Table_personas extends Component{
    
    constructor (props){
        super(props);

        this.state={
            tipoidentificaciones:[],
            usuarios:[],
            personas:[],
            modalTitle:"",
            nombre:"",
            apellido:"",
            telefono:"",
            identificacion:"",
            correo:"",
            idTipoIde:"",
            idUsuario:""
        }
    }

    //Buscar y mostrar las personas existentes
    refreshList(){
       fetch(variables.API_URL +'Personas')
        .then(response=>response.json())
        .then(data =>{
            this.setState({personas:data});
        });
    }

     refreshList2(){
        fetch(variables.API_URL +'Usuarios')
         .then(response=>response.json())
         .then(data =>{
             this.setState({usuarios:data});
         });
     }
 
     refreshList3(){
        fetch(variables.API_URL +'TipoIdentificaciones')
         .then(response=>response.json())
         .then(data =>{
             this.setState({tipoidentificaciones:data});
         });
     }

    componentDidMount(){
        this.refreshList();
        this.refreshList2();
        this.refreshList3();
    }

    //Peticiones

    nombre =(e)=>{
        this.setState({nombre:e.target.value});
    }
    apellido =(e)=>{
        this.setState({apellido:e.target.value});
    }
    telefono =(e)=>{
        this.setState({telefono:e.target.value});
    }

    identificacion =(e)=>{
        this.setState({identificacion:e.target.value});
    }

    correo =(e)=>{
        this.setState({correo:e.target.value});
    }
    idTipoIde =(e)=>{
        this.setState({idTipoIde:e.target.value});
    }
    idUsuario =(e)=>{
        this.setState({idUsuario:e.target.value});
    }

    //Como se mostraran los campos al agregar una nueva persona
    addClick(){
        this.setState({
            modalTitle:"Registrar Citas",
            id:0,
            nombre:"",
            apellido:"",
            telefono:"",
            identificacion:"",
            correo:"",
            idTipoIde:"",
            idEmpleado:""
        });
    }

    //Buscar datos de personas existentes
    editClick(personas){
        this.setState({
            modalTitle:"Actualizar Registro",
            nombre:personas.nombre,
            apellido:personas.apellido,
            telefono:personas.telefono,
            identificacion:personas.identificacion,
            correo:personas.correo,
            idTipoIde:personas.idTipoIde,
            idUsuario:personas.idUsuario,
        });
    }

    //Create
    createClick(){
        fetch(variables.API_URL+'Personas', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                nombre:this.state.nombre,
                apellido:this.state.apellido,
                telefono:this.state.telefono,
                identificacion:this.state.identificacion,
                correo:this.state.correo,
                idTipoIde:this.state.idTipoIde,
                idUsuario:this.state.idUsuario
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            alert('Persona registrada');
            window.location.replace('/personas');
        }, (error)=>{
            alert('No se pudo registrar');
        })
    }
    //Update
    updateClick(identificacion){
        fetch(variables.API_URL+'Personas/'+identificacion,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                nombre:this.state.nombre,
                apellido:this.state.apellido,
                telefono:this.state.telefono,
                identificacion:this.state.identificacion,
                correo:this.state.correo,
                idTipoIde:this.state.idTipoIde,
                idUsuario:this.state.idUsuario
            })
        })
        .then(res=>res.json())
        .then((result)=>{ 
            console.log(result);
            alert('Error ;(!');
            
        }, (error)=>{
            window.location.replace('/personas');
            alert('Registro actualizado');
        })
    }
    
    //Delete
    deleteClick(id){
        if(window.confirm('Seguro que desea eliminar este registro?')){ 
            fetch(variables.API_URL+'Personas/'+id.identificacion, {
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
            personas,
            tipoidentificaciones,
            usuarios,
            modalTitle,
            nombre,
            apellido,
            telefono,
            identificacion,
            correo,
            id,
            idTipoIde,
            idUsuario

        }=this.state

        return(
            <div className="container">
                <br/>
                <button type="button" className="btn btn-outline-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={()=>this.addClick()}>Registrar Persona</button>
               
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true" style={{backdropFilter: "blur(10px)"}}>
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{modalTitle}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    <div className="modal-body">


                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Nombre</span>
                            <input type="text" className="form-control" value={nombre} onChange={this.nombre}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Apellido</span>
                            <input type="text" className="form-control" value={apellido} onChange={this.apellido}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Telefono</span>
                            <input type="text" className="form-control" value={telefono} onChange={this.telefono}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Identificacion</span>
                            <input type="text" className="form-control" value={identificacion} onChange={this.identificacion}/>
                        </div>

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Correo Electronico</span>
                            <input type="text" className="form-control" value={correo} onChange={this.correo}/>
                        </div>

                        <div className="input-group mb-3">
                        <span className="btn btn-outline-secondary">Tipo de Identificacion</span>
                        <select formControlName="servicio" class="form-control" onChange={this.idTipoIde
                        }>
                        <option value=""></option>
                        {tipoidentificaciones.map(tipide =>
                        <option value={tipide.idTipoIde}>{tipide.tipoIdentificacion1}</option>
                        )}
                        </select>
                        </div>

                        <div className="input-group mb-3">
                        <span className="btn btn-outline-secondary">Usuario</span>
                        <select formControlName="empleado" class="form-control" onChange={this.idUsuario}> 
                            <option value=""></option>
                            {usuarios.map(usu =>
                            <option value={usu.idUsuario}>{usu.idUsuario}</option>
                            )}
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
                        onClick={()=>this.updateClick(identificacion)}>Guardar cambios</button>
                        :null}
                        </div>                        
                    </div>

                </div>
                </div>
                </div>
                
                <table className="table table-striped">
                
                    <thead>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Telefono</th>
                        <th>Identificacion</th>
                        <th>Correo</th>
                        <th>Tipo de Identificacion</th>
                        <th>Usuario</th>
                    </thead>
                    <tbody>
                        {personas.map(pers =>
                            <tr key={pers.identificacion}>
                                <td>{pers.nombre}</td>
                                <td>{pers.apellido}</td>
                                <td>{pers.telefono}</td>
                                <td>{pers.identificacion}</td>
                                <td>{pers.correo}</td>
                                <td>{pers.idTipoIdeNavigation.tipoIdentificacion1}</td>
                                <td>{pers.idUsuarioNavigation.idUsuario}</td>
                                <td>
                                <button type="button" className="btn btn-outline-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal" 
                                onClick={()=>this.editClick(pers)}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                    </svg>

                                </button>
                                <span> </span>
                                <button type="button" 
                                className="btn btn-outline-primary"
                                onClick={()=>this.deleteClick(pers)}>

                                
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

export default Table_personas;