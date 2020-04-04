import React from "react";
// UI 
import IconButton from "../../mirra-ui/icon-button";
// ICONS
import { Back, Close } from "../../icons";
//REDUX
import { connect } from "react-redux";
//ACTIONS
import { toggleForeground, closeForeground } from "../../store/actions/app"


const Foreground = (props) => {
    const { foreground_open, toggleForeground, closeForeground, app } = props
    const { context } = app
    console.log(context);
    return (
        <div className={`foreground ${foreground_open ? "open" : !foreground_open && context.length > 0 ? "half-open" : ""}`}>
            <IconButton Icon={<Back open={!foreground_open} />} onClick={toggleForeground} />
            {context.length > 0 && <IconButton onClick={closeForeground} Icon={<Close />} />}
        </div>
    );
};

const _props = (store) => {
    return {
        foreground_open: store.app.foreground_open,
        app: store.app
    }
}
const _actions = {
    toggleForeground,
    closeForeground
}

export default connect(_props, _actions)(Foreground);