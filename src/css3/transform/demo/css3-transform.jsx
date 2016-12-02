import React from 'react'
import classNames from 'classnames/bind'
import styles from './style.scss'

let cx = classNames.bind(styles);

export default class Demo extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        let className = [
            cx({
                box: true,
                translate: true
            }),
            cx({
                box: true,
                rotate: true
            }),
            cx({
                box: true,
                scale: true
            }),
            cx({
                box: true,
                skew: true
            })
        ];

        return (
            <div>
                <div className={className[0]}></div>
                <div className={className[1]}></div>
                <div className={className[2]}></div>
                <div className={className[3]}></div>
            </div>
        )
    }
}