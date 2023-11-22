import React from 'react'

import classes from "./view1.module.css";

class View1 extends React.Component {
    render() {
        return (
            <div className={classes.root}>
                <p className={classes.p}>I am view1</p>
                <p>route: {this.props.match.path}</p>
            </div>
        )
    }
}

export default View1
