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
import {Link,Route} from "react-router-dom"


class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: [
          {
              title:"some title",
              description:"some description"
          }
      ]
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
  render() {      
      console.log(this.state)
    return ( 
        <React.Fragment>
            <Typography align="center" variant= "h2" gutterBottom>
                My Notes
            </Typography>
        <Grid container justify="center" spacing={2}>
            <Grid item xs={4}>
                <NotesList notes={this.state.notes} />
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
            render={props=><Note{...props} notes={this.state.notes}/>}
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