import React from 'react'
import styles from './index.scss'

export default class Bounce extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }
    render() {
        return (
            <div className={styles.background}> 
                <div className={styles.ball1}></div>
                 <div className={styles.ball2}></div>
            </div>
        );
    }
}