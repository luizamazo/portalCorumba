
import React from 'react'
import Imagem from '../../public/img/img_avatar1.png'
import { Router, Route, Link, hashHistory } from 'react-router'

export default props => {
    const renderRows = () =>{
        const img = "http://localhost:3003/assets/img/" // imagens tem que ser salvas no pubic do backend com o id dos posts que elas pertencem e em jpg. Ai da pra chamar de boa. So nao sei se da pra fazer o upload da mesma forma, tipo salvar no public do backend e tal. Na minha cabeça teria que usar o public do front
        const list = props.list || []
        return list.map(post => (
           
              

                <div key={post._id} className="col-md-4">
                    
                    <div className="card-1" >
                        <Link to={`/detail/${post._id}/${post.tipo}`}>
                        <img className=" img-thumbnail-1 img-fluid" src={img+post._id+'.png'} alt="Card image" />
                        </Link>
                        <div className="card-body-1">
                            <Link to={`/detail/${post._id}/${post.tipo}`}>
                            <h4 className="card-title-1">{post.name}</h4>
                            </Link>
                            <p className="card-text-1 text-justify"></p>
                        
                        </div>
                    </div>

                </div>   
        ))
    }
    //link to tava com props.tipo

    return (
       
        <div className="container row">
       
           {renderRows()}
          
        </div>
    )
}
