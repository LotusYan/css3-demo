import React from 'react'
import Style from './index.scss'

export default class Example extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        console.log(Style)
        console.log(this.props.children)
        return (
            <div className={Style.example}>
                {this.props.children}
            </div>
        );
    }
}