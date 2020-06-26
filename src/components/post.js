import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import Link from 'react-router-dom/Link'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const styles = {
    card: {
        marginBottom: 20
    },
}

class post extends Component {
    render() {
        const {
            classes, 
            post: {
                body, username, createdAt, userImage, postId, noLikes, noComments
            }
        } = this.props;
        return (
            <Card className={classes.card}>
                <CardContent className={classes.content}>
                    <Typography component={Link} to={`/users/${username}`}>{username}</Typography>
                    <Typography variant='body1'>{body}</Typography>
                </CardContent>
            </Card>
        )
    }
}

export default withStyles(styles)(post);
