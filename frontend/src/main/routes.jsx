import React from 'react'
import {Router, Route, Redirect, hashHistory, browserHistory} from 'react-router'
//import { requireAuth } from '../utils/AuthService';


import Home from '../home/home'
import Historia from '../historia/historia'
import Hospedagem from '../hospedagem/hospedagem'
import Alimentacao from '../alimentacao/alimentacao'
import Onde_Ir from '../onde_ir/onde_ir'
import Hotel from '../hotel/hotel'
import Pousada from '../pousada/pousada'
import Hostel from '../hostel/hostel'
import Detail from '../info/info'
import Lazer from '../lazer/lazer'
import Noite from '../noite/noite'
import Bar from '../bar/bar'
import Restaurante from '../restaurante/restaurante'
import Lanchonente from '../lanchonete/lanchonete'
import PontosTuristicos from '../pontosTuristicos/pontosTuristicos'
import Passeio from '../passeio/passeio'
import EventoTuristico from '../eventos_turisticos/eventos_turisticos'
import SobreNos from '../sobre_nos/sobre_nos'
import Erro from '../error/error'
import Admin from '../admin/adicionar'
import Admin_exclude from '../admin/excluir'
import Servicos from '../servicos/servicos'
import Pesca from '../pesca/pesca'
import Inserir from '../inserir_infos/adicionar'
import Admin_aceita from '../admin/aceitar'
//import Login from '../admin/tela_login'
//import Callback from '../admin/Callback'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={Home} />
        <Route path='/home' component={Home}/>
        <Route path='/historia' component={Historia}/>
        <Route path='/hospedagem' component={Hospedagem} />
        <Route path='/alimentacao' component={Alimentacao} />
        <Route path='/onde_ir' component={Onde_Ir} />
        <Route path='/hotel' component={Hotel} />
        <Route path='/pousada' component={Pousada} />
        <Route path='/hostel' component={Hostel} />
        <Route path='/detail' component={Detail} />
        <Route path='/detail/:id/:tipo' component={Detail} />
        <Route path='/lazer' component={Lazer} />
        <Route path='/noite' component={Noite} />
        <Route path='/bar' component={Bar} />
        <Route path='/restaurante' component={Restaurante} />
        <Route path='/lanchonete' component={Lanchonente} />
        <Route path='/pontos_turisticos' component={PontosTuristicos} />
        <Route path='/passeio' component={Passeio} />
        <Route path='/passeio/:id' component={Detail} />
        <Route path='/evento_turistico' component={EventoTuristico} />
        <Route path='/sobre_nos' component={SobreNos} />
        <Route path='/error' component={Erro} />
        <Route path='/admin' component={Admin}   />
        <Route path='/admin_remove' component={Admin_exclude}  />
        <Route path='/servicos' component={Servicos}  />
        <Route path='/pesca' component={Pesca}  />
        <Route path='/adicionar_infos' component={Inserir}  />
        <Route path='/admin_aceita' component={Admin_aceita}  />
        
        

        <Redirect from='*' to='/error'/>
    </Router>
)

//<Route path='/login' component={Login}/>
//     <Route path='/callback' component={Callback} /> colocar la dentro dps
/* anterior
<Router history={hashHistory}>
<Route path='/' component={Home} />
<Route path='/home' component={Home}/>
<Route path='/historia' component={Historia}/>
<Route path='/hospedagem' component={Hospedagem} />
<Route path='/alimentacao' component={Alimentacao} />
<Route path='/onde_ir' component={Onde_Ir} />
<Route path='/hotel' component={Hotel} />
<Route path='/pousada' component={Pousada} />
<Route path='/hostel' component={Hostel} />
<Route path='/detail' component={Detail} />
<Route path='/teste' component={Teste} />
<Route path='/detail/:id/:tipo' component={Detail} />
<Route path='/teste/:id' component={Detail} />
<Route path='/lazer' component={Lazer} />
<Route path='/lazer/:id/:tipo' component={Detail} />
<Route path='/hostel/:id/:tipo' component={Detail} />
<Route path='/pousada/:id/:tipo' component={Detail} />
<Route path='/noite' component={Noite} />
<Route path='/noite/:id/:tipo' component={Detail} />
<Route path='/alimentacao/:id' component={Detail} />
<Route path='/bar' component={Bar} />
<Route path='/bar/:id' component={Detail} />
<Route path='/restaurante' component={Restaurante} />
<Route path='/lanchonete' component={Lanchonente} />
<Route path='/lanchonete/:id' component={Detail} />
<Route path='/restaurante/:id' component={Detail} />
<Route path='/pontos_turisticos' component={PontosTuristicos} />
<Route path='/pontos_turisticos/:id' component={Detail} />
<Route path='/passeio' component={Passeio} />
<Route path='/passeio/:id' component={Detail} />
<Route path='/evento_turistico' component={EventoTuristico} />
<Route path='/evento_turistico/:id' component={Detail} />
<Route path='/sobre_nos' component={SobreNos} />
<Route path='/error' component={Erro} />
<Route path='/admin' component={Admin}   />
<Route path='/admin_remove' component={Admin_exclude}  />


<Redirect from='*' to='/error'/>
</Router> */ 