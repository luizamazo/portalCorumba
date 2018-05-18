import React from 'react'
import Card from '../template/card'

export default props => (
    <section className="bg-primary" id="about">
    <div className="container">
      <Card list={props.list}/>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h2 className="section-heading text-white">Conheça a cidade de Corumbá!</h2>
          <hr className="light my-4" />
          <p className="text-white mb-4">Venha conhecer a capital do Pantanal, aqui você encontra comidas típicas, descanso e lazer...</p>
          <a className="btn btn-light btn-xl js-scroll-trigger" href="#/historia">Saiba mais!</a>
        </div>
      </div>
    </div>
  </section>

)