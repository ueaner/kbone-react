import React from 'react'

import classes from "./view2.module.css";

class View2 extends React.Component {
    render() {
        return (
            <div className={classes.root}>
                <p className={classes.p}>I am view2</p>
                <p>route: {this.props.match.path}</p>
            </div>
        )
    }
}

export default View2
