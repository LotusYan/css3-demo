import React from 'react'

export default class Transform extends React.Component {
    constructor(props, context) {
        super(props, context);

    }
    render() {
        return (
            <div>
                <pre>
                    规定动画 <br />
                    @keyframes animationname&#123; <br />
                    &nbsp;&nbsp;keyframes-selector &#123;css-styles;&#125; <br />
                    &#125;
                </pre>
                <pre>
                    animation-name	规定 @keyframes 动画的名称 <br />
                    animation-duration	规定动画完成一个周期所花费的秒或毫秒，默认是 0 <br />
                    animation-timing-function	规定动画的速度曲线，默认是 "ease" <br />
                    animation-delay	规定动画何时开始，默认是 0 <br />
                    animation-iteration-count	规定动画被播放的次数，默认是 1 <br />
                    animation-direction	规定动画是否在下一周期逆向地播放，默认是 "normal" <br />
                    animation-play-state	规定动画是否正在运行或暂停，默认是 "running" <br />
                    animation-fill-mode	规定对象动画时间之外的状态 <br />
                </pre>
                <pre>
                    简写属性，除了 animation-play-state 属性 <br />
                    animation: name duration timing-function delay iteration-count direction; <br />
                </pre>
            </div>
        );
    }
}