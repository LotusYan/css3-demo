import React from 'react'
import styles from './index.scss'

export default class Circular2Elements extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <div className={styles.path}>
                    <div className={styles.avatar}>
                        <img src="./../../../images/loader.png" />
                    </div>
                </div>
            </div>
        );
    }
}