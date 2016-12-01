import React from 'react'
import styles from './index.scss'
import classNames from 'classnames/bind'

let cx = classNames.bind(styles);

export default class Example extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        let className = cx({
            layout: true,
            example: this.props.type === 'example' ? true : false,
            note: this.props.type === 'note' ? true : false,
            issue: this.props.type === 'issue' ? true : false
        });

        return (
            <div className={className}>
                <p>{this.props.name}</p>
                {this.props.children}
            </div>
        );
    }
}