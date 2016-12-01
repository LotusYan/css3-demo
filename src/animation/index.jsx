import React from 'react'

export default class Transform extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <pre>
                    @keyframes animationname&#123; <br />
                    &nbsp;&nbsp;keyframes-selector &#123;css-styles;&#125; <br />
                    &#125;
                </pre>
                <pre>
                    animation: name duration timing-function delay iteration-count direction;
                </pre>
            </div>
        );
    }
}