
import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router'
import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () =>{
        const img = "http://localhost:3003/assets/img/" // imagens tem que ser salvas no pubic do backend com o id dos posts que elas pertencem e em jpg. Ai da pra chamar de boa. So nao sei se da pra fazer o upload da mesma forma, tipo salvar no public do backend e tal. Na minha cabeça teria que usar o public do front
        const list = props.list || []
        
        return list.map(post => (
           
            <div className="col-md-4" key={post._id}>
                    
            <div  className="card " >
                    <Link to={`/detail/${post._id}/${post.tipo}`}>
                        <img className=" img-thumbnail img-fluid" src={img+post.imagemOne} 
                        alt="Card image" />
                    </Link>
                    <div className="card-body">
                        <Link to={`/detail/${post._id}/${post.tipo}`}>
                            <h4 className="card-title ">{post.name}</h4>
                        </Link>
                        <p className="card-text">{post.extension}</p>
                        <IconButton style='danger' icon='trash-o' 
                        onClick={() => props.handleRemove(post)}></IconButton>
                        <IconButton style='warning' icon='undo'
                        onClick={() => props.handleMarkAsPending(post)}></IconButton>

                    </div>
                </div>
                </div>
            
           
        ))
    }
   

    return (
       
        <div className="container row">
            <select id="tipo" className='form-control' onChange={props.handleChangeTipo} 
            onClick={props.refresh}>
                    <option value="">Todos</option>
                    <option value="hotel">Hotel</option>
                    <option value="hostel">Hostel</option>
                    <option value="pousada">Pousada</option>
                    <option value="restaurante">Restaurante</option>
                    <option value="bar">Bar</option>
                    <option value="lanchonete">Lanchonete</option>
                    <option value="pontos_turisticos">Pontos Turísticos</option>
                    <option value="passeio">Passeio</option>
                    <option value="noite">Noite</option>
                    <option value="evento_turistico">Eventos Turísticos</option>
                    <option value="servicos">Serviços</option>
                </select>
               
           {renderRows()}
          
        </div>
    )
}

/*no onclick do icon remove ver se da pra passar só o id e nao todo o objeto */