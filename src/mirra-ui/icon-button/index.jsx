import React from "react";

/*
    ###########################################
    ### THIS IS A DEFAULT COMPONENT ###########
    ###########################################
     
    Author : Austin Lynes, Aril 1st 2020;
    
    ###########################################
    ### ABOUT ME ##############################
    ###########################################

    name => the text generated for the icon button
    icon => the expected svg element
    onClick => the onClick action you want to perform


    ###########################################
    ### DO NOT HANDLE ACTIONS HERE ############
    ###########################################
*/

const IconButton = (props) => {
    const { name, Icon, onClick, ...rest } = props;

    return (
        <div onClick={onClick} className={`icon-button`}>
            {Icon}
            {name && <p className="icon-name">{name}</p>}
        </div>
    )
}

export default IconButton;