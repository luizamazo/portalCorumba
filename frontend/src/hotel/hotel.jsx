import React, { Component } from 'react'
import axios from 'axios'



import Botoes from '../hospedagem/botoes_hospedagem'
import Card from '../template/card'
const URL = 'http://localhost:3003/api/posts'

export default class Hotel extends Component {
    constructor(props){
        super(props)
        this.state = {description: '', tipo: '', name: '', list: [] }


        this.refresh()
       
    }

  
   
    refresh(){
        const search = `&tipo=hotel` 
        axios.get(`${URL}?aceito=true&sort=-createdAt${search}`)
            .then(resp => this.setState({...this.state, description: '', tipo: '', name: '', list: resp.data}))
    }

    render() {
        return (
            <div className='hospedagem'>
                <br/> 
                <Botoes /> 
                <br/>
                <Card tipo="hotel" list={this.state.list} />
               

              
            </div>
        )
    }
}