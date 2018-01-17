import React from 'react';



export default function MyNav(props){
    const mynav_class= props.classess;
    
    return (
        

        
        <nav className={mynav_class}>
            <div className='container-fluid'>
                <div className='navbar-header my_header'>
                    <button className="navbar-toggle" id="mynav_btn" type="button" data-toggle="collapse" data-target="#mynav_bar" >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>            
                    </button>
                    <a className="navbar-brand" id="mytitle" href="#">Haoyang Li</a>
                
                </div>   
                <div className='collapse navbar-collapse navbar-right mymenu' id='mynav_bar'>
                    <ul className='nav navbar-nav my-nav-list ' id='collapse-open'>
                        <li><a className='navbar-btn navbar-left' href='#homesection' >Profile</a> </li>
                        
                        <li><a className='navbar-btn navbar-left' href='#ValueForm' >Stocks Purchase</a> </li>
                        <li><a className='navbar-btn navbar-left' href='#funds' >Funds</a> </li>
                    </ul>
                </div> 
                
                

            </div>
            
        </nav>
       
    );

}