import React from 'react'

export default props => {
    if (props.test){
        //retorna os filhos 
        return props.children
    } else {
        return false
    }
}