import React from 'react'

export default class Transform extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <pre>
                    transition-property	规定应用过渡的 CSS 属性的名称 <br />
                    transition-duration	定义过渡效果花费的时间，默认是 0 <br />
                    transition-timing-function	规定过渡效果的时间曲线，默认是 "ease"，可选值：ease | linear | ease-in | ease-out | ease-in-out | cubic-bezier<br />
                    transition-delay	规定过渡效果何时开始，默认是 0 <br />
                </pre>
                <pre>
                    简写属性，用于在一个属性中设置四个过渡属性 <br />
                    transitons : property  duration  delay  timing-function
                </pre>
                <pre>
              
                </pre>

            </div>
        );
    }
}