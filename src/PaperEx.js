import React, { Component, Fragment } from 'react';
import './App.css';
import NavBar from './NavBar';
import GridLayout from './GridLayout';
import { Typography, TextField, Paper, Button } from '@material-ui/core';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles'


const styles = {
  root : { 
    margin: 20,
    padding : 20,
    maxWidth : 400
  },
  form : {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-evenly'
  }
}

export default withStyles(styles) (
class PaperEx extends Component {
  state = {
    exercises: [
      {id:1 , title: '벤치프레스'},
      {id:2 , title: '데드리프트'},
      {id:3 , title: '스쿼드'}
    ],
    title: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleCreate = (e) => {
    e.preventDefaut()
    
    if(this.state.title) {
      this.setState(({ exercises, title}) => ({
        exercises: [
          ...exercises,
          {
            title,
            id: Date.now()
          }
        ],
        title: ''
      }))
    }
  }

  handleDelete = (id) => {
    this.setState(({ exercises}) => ({
      exercises : exercises.filter(ex => ex.id !== id )
    })
    )
  }

 

  render() {
    
    const title = this.state.title
    const exercises = this.state.exercises
    const classes = this.props.classes
    return (
      <Fragment>
      <Paper elevation="1" className={classes.root}>
        <NavBar/>        
        
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>

        <form onSubmit={this.handleCreate}>
          <TextField name="title" label="연습" margin="normal"
            value={title}
            onChange={this.handleChange}
            />
          <Button type="submit" color="primary" variant="raised" >
            Create
          </Button>
        </form>
        <List>
          {exercises.map(({id, title}) =>
            <ListItem key={id} >
              <ListItemText primary={title} />
              <ListItemSecondaryAction>
                <IconButton color="primary" 
                  onClick={() => this.handleDelete(id)} >
                  <Delete/>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )}
        </List>
      </Paper> 
      
      </Fragment>
    );
  }
}
)

