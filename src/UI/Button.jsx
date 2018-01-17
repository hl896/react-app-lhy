import React from 'react';

//<Button primary type="submit" onClick={this.handleSubmit}>Submit</Button>

export default function Button(props){

    const styleModifier=props.classess==='primary'? 'btn-primary':'btn-default';
    const { classess, ...otherProps } = props;

    
    return(
        <button  {...otherProps}  className={`btn ${styleModifier}` }>{props.children}</button>
        
    );

}