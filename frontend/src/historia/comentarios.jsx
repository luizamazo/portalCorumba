import React, { Component } from 'react'
import axios from 'axios'


import Comentario from './comentariosStruct'
import Form from './comentarioForm'
import ComentarioForm from './comentarioForm';
const URL = 'http://localhost:3003/api/posts'


export default class Historia extends Component {
    
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.handleChange = this.handleChange.bind(this)
        this.handleChange2 = this.handleChange2.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.refresh()
       
    }

  
   
    handleChange(e){
        this.setState({...this.state, description: e.target.value })
    }
    handleChange2(e){
        this.setState({...this.state, name: e.target.value })
    }
    handleAdd(){
        const description = this.state.description//arrumar forma de passar mais parametros, no caso nome e tipo. Tipo é fixo entao é mais de boa. Quando deixei default na collection deu
        const name = this.state.name
        const tipo = 'histoComentario'
        axios.post(URL, {description, name, tipo})
            .then(resp => this.refresh())
    }
    refresh(){
        const search = `&tipo__regex=histoComentario` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

   

    render() {
        return (
            <div className='comentarios'> 
             <ComentarioForm description={this.state.description} 
                    name={this.state.name}
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange}
                    handleChange2={this.handleChange2} />
             <Comentario list={this.state.list} />
           
            </div>
        )
    }
}