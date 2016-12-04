import React from 'react'
import styles from './index.scss'

export default class Circular extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <div className={styles.path}>
                    <img src="http://lea.verou.me/book/adamcatlace.jpg" className={styles.avatar} />
                </div>
            </div>
        );
    }
}