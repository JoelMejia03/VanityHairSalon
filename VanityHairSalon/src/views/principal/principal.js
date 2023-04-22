import React,{Component} from "react";
import { variables } from '../../../../Variables.js'

export class Principal extends Component{
    
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
           <div>
            <div class="container-fluid bg-light d-none d-lg-block">
            <div class="row py-2 px-lg-5">
                <div class="col-lg-6 text-left mb-2 mb-lg-0">
                    <div class="d-inline-flex align-items-center">
                        <small><i class="fa fa-phone-alt mr-2"></i>809-768-0873</small>
                        <small class="px-3">|</small>
                        <small><i class="fa fa-envelope mr-2"></i>vanityhair@gmail.com</small>
                    </div>
                </div>
                <div class="col-lg-6 text-right">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-info px-2" href="">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="text-info px-2" href="">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a class="text-info px-2" href="">
                            <i class="fab fa-instagram"></i>
                        </a>
                        <a class="text-info pl-2" href="">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
            <div class="container-fluid p-0">
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
                <a href="index.html" class="navbar-brand ml-lg-3">
                    <img class="img-fluid w-100" src="img/logo.jpeg" alt="" />
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
                    <div class="navbar-nav m-auto py-0">
                        <a href="index.html" class="nav-item nav-link active text-info">Home</a>
                        <a href="cita.html" class="nav-item nav-link text-info">Cita</a>
    
                    </div>
                        <a href="" class="btn btn-info d-none d-lg-block">Iniciar Sesion</a>
                </div>
            </nav>
        </div>
        

        </div>
        )
    }
}

export default Principal;