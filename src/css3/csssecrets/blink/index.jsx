import styles from './index.scss'

import React from 'react'

export default class Blink extends React.Component {
    constructor(props, context) {
        super(props, context);

    }

    render() {
        console.log(styles['blink-smooth-1'])
        return (
            <div>
                <p className={styles.blinkSmooth1}>Peek-a-boo!</p>
                <p className={styles.blinkSmooth2}>Peek-a-boo!</p>
                <p className={styles.blink}>Peek-a-boo!</p>
            </div>
        );
    }
}