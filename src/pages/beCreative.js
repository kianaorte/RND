import React, { Component } from 'react';

//create button to make posts
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    container: {
        flexGrow: 1,
        justify: 'center'
    }
};

export class beCreative extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <h1>Be Creative</h1>
                </Grid>
                <Grid item xs={6}>
                    <h2>Dance</h2>
                    <Paper>Show us what you got with your dance skills</Paper>
                </Grid>
                <Grid item xs={6}>
                    <h2>Poetry</h2>
                    <Paper> Express yourself with spoken word! </Paper>
                </Grid>
                <Grid item xs={6}>
                <h2>Music</h2>
                    <Paper>Be creative with your sound</Paper>
                </Grid>
                <Grid item xs={6}>
                    <h2>Other</h2>
                    <Paper>  </Paper>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(beCreative);
