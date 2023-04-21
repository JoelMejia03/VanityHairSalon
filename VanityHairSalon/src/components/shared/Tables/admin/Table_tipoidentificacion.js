import React,{Component} from "react";
import { variables } from '../../../../Variables.js'
import { Backdrop } from "@mui/material";

export class Table_tipoidentificacion extends Component{
    
    constructor (props){
        super(props);

        this.state={
            tipoidentificaciones:[],
            modalTitle:"",
            id:0,
            tipoidentificacion:""
        }
    }

    //Buscar y mostrar los tipo de identificaciones existentes
    refreshList(){
       fetch(variables.API_URL +'TipoIdentificaciones')
        .then(response=>response.json())
        .then(data =>{
            this.setState({tipoidentificaciones:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    //Peticiones
    idTipo =(e)=>{
        this.setState({id:e.target.value});
    }

    tipoidentificacion =(e)=>{
        this.setState({tipoidentificacion:e.target.value});
    }

    //Como se mostraran los campos al agregar una nueva tipo de identificacion
    addClick(){
        this.setState({
            modalTitle:"Registrar TIpo de Identificacion",
            id:0,
            tipoidentificacion:""
        });
    }

    //Buscar datos de tipo de identificacion existentes
    editClick(tipo){
        this.setState({
            modalTitle:"Actualizar Registro",
            id:tipo.idTipoIde,
            tipoidentificacion:tipo.tipoIdentificacion1
        });
    }

    //Create
    createClick(){
        fetch(variables.API_URL+'TipoIdentificaciones', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                tipoIdentificacion1:this.state.tipoidentificacion,
            })
        })
        .then(response=>response.json())
        .then((result)=>{
            alert('Tipo de Identificacion registrado');
            window.location.replace('/tipoidentificaciones');
        }, (error)=>{
            alert('No se pudo registrar');
        })
    }
    //Update
    updateClick(id){
        fetch(variables.API_URL+'TipoIdentificaciones/'+id,{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({
                idTipoIde:this.state.id,
                tipoIdentificacion1:this.state.tipoidentificacion
            })
        })
        .then(res=>res.json())
        .then((result)=>{ 
            alert('Error ;(!');
            
        }, (error)=>{
            window.location.replace('/tipoidentificaciones');
            alert('Registro actualizado');
        })
    }
    
    //Delete
    deleteClick(id){
        if(window.confirm('Seguro que desea eliminar este registro?')){ 
            fetch(variables.API_URL+'TipoIdentificaciones/'+id.idTipoIde, {
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
            tipoidentificaciones,
            modalTitle,
            id,
            tipoidentificacion,

        }=this.state

        return(
            <div className="container">
                <br/>
                <button type="button" className="btn btn-outline-primary m-2 float-end" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal" 
                onClick={()=>this.addClick()}>Registrar Tipo de Identificacion</button>
               
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
                            <input type="text" className="form-control" value={id} onChange={this.idTipo}/>
                        </div>
                       

                        <div className="input-group mb-3">
                            <span className="btn btn-outline-secondary">Tipo de Identificacion</span>
                            <input type="text" className="form-control" value={tipoidentificacion} onChange={this.tipoidentificacion}/>
                        </div>
                   
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
          
                
                <table className="table table-striped">
                
                    <thead>
                        <th>ID</th>
                        <th>Tipo de Identificacion</th>
                    </thead>
                    <tbody>
                        {tipoidentificaciones.map(tipo =>
                            <tr key={tipo.idTipoIde}>
                                <td>{tipo.idTipoIde}</td>
                                <td>{tipo.tipoIdentificacion1}</td>
                                <td>
                                <button type="button" className="btn btn-outline-primary"
                                data-bs-toggle="modal" 
                                data-bs-target="#exampleModal" 
                                onClick={()=>this.editClick(tipo)}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                                    </svg>

                                </button>
                                <span> </span>
                                <button type="button" 
                                className="btn btn-outline-primary"
                                onClick={()=>this.deleteClick(tipo)}>

                                
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

export default Table_tipoidentificacion;