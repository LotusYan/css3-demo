import React from 'react'

export default class Transform extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <pre>
                    transform : translate() | rotate() | scale() | skew() | matrix()
                </pre>
                <pre>
                    translate(x,y) : 移动 <br />
                    rotate(angle) : 旋转 <br />
                    scale(x,y) : 缩放 <br />
                    skew(x-angle,y-angle) : 翻转 <br />
                    matrix(n,n,n,n,n,n) : 把所有 2D 转换方法组合在一起 <br />
                </pre>
                <pre>
                    transform-origin : x-axis y-axis z-axis;
                </pre>
            </div>
        );
    }
}