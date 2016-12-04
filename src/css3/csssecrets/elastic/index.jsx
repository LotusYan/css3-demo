import React from 'react'
import styles from './index.scss'

export default class Elastic extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <label >
                    Your username:
                	<input className={styles.elasticInput} defaultValue="leaverou" />
                    <span className={styles.callout}>
                        Only letters, numbers, underscores (_) and hyphens (-) allowed!
                	</span>
                </label>
                <label>
                    Your username:
                	<input className={styles.elasticInput} defaultValue="leaverou" />
                    <span className={styles.callout}>
                        Only letters, numbers, underscores (_) and hyphens (-) allowed!
                	</span>
                </label>
            </div>
        );
    }
}