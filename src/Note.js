import React from "react";
import { Typography } from "@material-ui/core";


const Note =({notes})=>{
    
    return(
        <React.Fragment>
            <Typography align="center" variant="h4" gutterBottom>
                Title
            </Typography>
            <Typography variant="subtitle1">Desctiption</Typography>
        </React.Fragment>
    )
}

export default Note