import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Beranda from './beranda'
import Halamanprotokol from './halamanprotokol'
import Halamandata from './halamandata'

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/halamanprotokol" component={Halamanprotokol} />
        <Route path="/halamandata" component={Halamandata} />
    </Switch>
)
export default Utama;