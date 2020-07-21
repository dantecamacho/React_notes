import React from "react";
import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import Grid from "@material-ui/core/Grid";


const NotesForm=({title,description,updateField, saveNote})=>{
    return(
<React.Fragment>
<Grid item xs={12}>
          <TextField
            type="text"
            placeholder="Title for this note..."
            margin="normal"
            fullWidth
            onChange={updateField("title")}
            value={title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Note content..."
            margin="normal"
            multiline
            rows="4"
            fullWidth
            onChange={updateField("description")}
            value={description}
          />
        </Grid>
        <Fab className="editIcon" color="secondary" onClick={saveNote}>
          <Icon>edit_icon</Icon>
        </Fab>
</React.Fragment>
)
}
export default NotesForm