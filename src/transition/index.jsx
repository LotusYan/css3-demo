import React from 'react'

export default class Transform extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <pre>
                    transitons : property | duration | delay | timing-function
                </pre>
                <pre>
                    property : 指定过渡的属性 <br />
                    duration : 指定这个过渡的持续时间 <br />
                    delay : 延迟过渡时间 <br />
                    timing-function : 过渡类型 ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier<br />
                </pre>

            </div>
        );
    }
}