import React from 'react';
import Header from './header';
import '../main'

function AppLayout ({ children }) {
    return (

    <div className='body'>
       <Header />
        <main>{children}</main>
        <footer></footer>
    </div>
    )
}

export default AppLayout;