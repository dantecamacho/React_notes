import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import {Link} from "react-router-dom"
import Typography from "@material-ui/core/Typography";



const NotesList=({notes, deleteNote})=>{
        return(
            <List>
            {   notes.length ?(
                notes.map((note, index) => (
                            <ListItem key={index} button component={Link} to={`/view/${note.id}`}>
                                <ListItemText primary={note.title} />
                                    <ListItemSecondaryAction>
                                        <IconButton onClick={()=>deleteNote(note.id)}>
                                        <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                            </ListItem>
              ))):(
                  <Typography align = "center" variant="subtitle1">
                      No notes yet...
                  </Typography>
              )}
          </List>
        )
}

export default NotesList