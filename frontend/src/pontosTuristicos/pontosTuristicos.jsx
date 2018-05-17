import React, { Component } from 'react'
import axios from 'axios'



import Botoes from '../onde_ir/botoes_onde_ir'
import Card from '../template/card'
const URL = 'http://localhost:3003/api/posts'

export default class Lazer extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&tipo=pontos_turisticos` 
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div className='pontos_turisticos'>
                <br/> 
                <Botoes /> 
                <br/>
                <Card list={this.state.list} />
               

              
            </div>
        )
    }
}