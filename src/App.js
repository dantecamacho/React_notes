import React from "react";
import './App.css';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import NotesForm from "./NotesForm"
import Home from "./Home"
import Note from "./Note"
import NotesList from "./NotesList"
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import {Link,Route, Redirect} from "react-router-dom"


class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: []
    };
  } 
  
  updateField = name => e => { //CLOUSURES 
    this.setState({ [name]: e.target.value });
  };

 saveNote=()=>{
     if(this.state.title&&this.state.description){
   this.setState({
       title:"",
       description:"",       
       notes: [
        ...this.state.notes,
        {
            id: Date.now(),
            title:this.state.title,
            description:this.state.description
        }
       ]
     });
    }
   };

   deleteNote = id => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };

  FilterNote=id=>{
    return this.state.notes.filter(note=>note.id)(note => note.id === parseInt(id))[0]
  }




  render() {      
      console.log(this.state)
    return ( 
        <React.Fragment>
            <Typography align="center" variant= "h2" gutterBottom>
                My Notes
            </Typography>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={4}>
                <NotesList notes={this.state.notes} deleteNote={this.deleteNote} />
            </Grid>
            <Grid item xs={8}>
                <Route exact path="/" component={Home} />
                <Route
              path="/new"
              render={() => (
                <NotesForm
                  updateField={this.updateField}
                  title={this.state.title}
                  description={this.state.description}
                  saveNote={this.saveNote}
                />
              )}
            />
            <Route path='view/:id'
            render={props=>{
              const note=this.FilterNote(props.match.params.id)
              return note ? <Note note={note}/>:<Redirect to="/"/>
            }}
              />
              
            </Grid>
        </Grid>
        <Fab color="primary" component={Link} to="/new">
            <AddIcon/>
        </Fab>
      </React.Fragment>
    );
  };

  }


export default App;