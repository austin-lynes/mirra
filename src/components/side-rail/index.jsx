import React, { useState } from "react";
import IconButton from "../../mirra-ui/icon-button";
import { connect } from "react-redux";
import { openForeground, setIconActive } from "../../store/actions/app"




const SideRail = (props) => {
    const { app, openForeground, setIconActive } = props;

    const { topMenuData, bottomMenuData } = app;

    return (
        <div className="side-rail">

            <div className="top">
                {
                    topMenuData.map(
                        (button, i) =>
                            <IconButton
                                key={`${i}_bd_0_${button.name}_${i}`}
                                name={button.name}
                                Icon={<button.icon active={button.active} />}
                                onClick={(e) => {
                                    e.preventDefault();
                                    openForeground(button.name)
                                    setIconActive("top", button.id);
                                }}
                            />)
                }
            </div>
            <div className="bottom">
                {
                    bottomMenuData.map(
                        (button, i) =>
                            <IconButton
                                key={`${i}_bd_1_${button.name}_${i}`}
                                name={button.name}
                                Icon={<button.icon active={button.active} />}
                                onClick={openForeground}
                                onClick={(e) => {
                                    openForeground(button.name)
                                    setIconActive("bottom", button.id);
                                }}

                            />)
                }
            </div>
        </div>
    );
};



const _props = (store) => {
    return {
        app: store.app
    }
}

const _actions = {
    openForeground,
    setIconActive

}

export default connect(_props, _actions)(SideRail);