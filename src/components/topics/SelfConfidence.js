import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        marginBottom: 30
    },
}

class SelfConfidence extends Component {
    render() {
        const {
            classes,
            selfConfidence: {
                topicDesc, topicBody, topicNo
            }
        } = this.props;
        return (
            <div >
                <Card className={classes.card}>
                    <CardMedia />
                    <CardContent>
                        <Typography component={Link} to={`/selfConfidence/${topicNo}`}>{topicDesc}</Typography>
                        <p><Typography>{topicBody}</Typography></p>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

export default withStyles(styles)(SelfConfidence);
