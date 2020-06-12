import React, { Component } from 'react'
import '../App.css'

export class Article extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log("[Article.js] getDerivedStateFromProps")
        return state
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[Article.js] shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[Article.js] getSnapshotBeforeUpdate")
        return {x: 0, y: 0}
    }

    componentDidUpdate(prevProps, prevState, snapShot) {
        console.log("[Article.js] componentDidUpdate",snapShot)

    }
    
    render() {
        console.log("[App.js]Article JS Render")
        return (
            <p>
                {this.props.article}
            </p>
        )
    }
}

export default Article
