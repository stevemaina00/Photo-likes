import React from "react";

function Timer(){
    const d = new Date();
let text = d.toLocaleString();
    return(
        <p className="Time">{text}<bold>:</bold> Hover to get a clear view.</p>

    )
}
export default Timer;