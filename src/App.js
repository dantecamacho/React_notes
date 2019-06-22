import React from "react";
import './App.css';
// Material-UI
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
// import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Icon from "@material-ui/core/Icon";




class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      notes: []
    };
  } 
  
  updateField = name => e => {
    this.setState({ [name]: e.target.value });
  };

  render() {      
      console.log(this.state)
    return ( 
        <React.Fragment>
            <Typography align="center" variant= "h2" gutterBottom>
                My Notes
            </Typography>
<Grid container justify="center" spacing={2}>
    <Grid item xs={8}>
        <Grid item xs={12}>
          <TextField
            type="text"
            placeholder="Title for this note..."
            margin="normal"
            fullWidth
            onChange={this.updateField("title")}
            value={this.title}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            placeholder="Start taking notes..."
            margin="normal"
            multiline
            rows="4"
            fullWidth
            onChange={this.updateField("description")}
            value={this.description}
          />
        </Grid>
        <Fab className="editIcon" color="secondary" >
          <Icon>edit_icon</Icon>
        </Fab>
    </Grid>
</Grid>
      </React.Fragment>
    );
  };

  }


export default App;