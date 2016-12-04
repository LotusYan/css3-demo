import styles from './index.scss'

import React from 'react'

export default class StateAnimations extends React.Component{
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div>
                <div className={styles.panoramic}></div>
            </div>
        );
    }
    
}