import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PaperEx from './PaperEx'
import LoginModule from './LoginModule'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: 20,
    padding : 20,
    height: 140,
    width: 400,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GridLayout extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            {[0, 1, 2].map(value => (
              <Grid key={value} item>
                <Paper className={classes.paper} />
              </Grid>
            ))}            
          </Grid>

          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            
              <Grid key="4" item>
                <LoginModule/>
              </Grid>
              <Grid key="5"item>
                <Paper className={classes.paper} />
              </Grid>
                      
          </Grid>

          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>
            
              <Grid key="6" item>
                <PaperEx />
              </Grid>
              <Grid key="7"item>
                <Paper className={classes.paper} />
              </Grid>
                      
          </Grid>
        </Grid>        
      </Grid>
    );
  }
}

GridLayout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridLayout);