import styles from './index.scss';
import React from 'react';
import Layout from './layout/index'

import Transform from './css3/transform/index'
import Transition from './css3/transition/index'
import Animation from './css3/animation/index'
// import TransformAndTransitionExample from './css3/transform/demo/simple/index'


import Bounce from './css3/csssecrets/bounce/index'
import Elastic from './css3/csssecrets/elastic/index'
import FrameByFrame from './css3/csssecrets/frame-by-frame/index'
import Blink from './css3/csssecrets/blink/index'
import Typing from './css3/csssecrets/typing/index'
import StateAnimations from './css3/csssecrets/state-animations/index'
import Circular2Elements from './css3/csssecrets/circular-2elements/index'
import Circular from './css3/csssecrets/circular/index'

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            layouts: [
                {
                    name: 'transform：对元素进行移动、缩放、转动、拉长或拉伸',
                    type: 'note',
                    content: <Transform />
                },
                {
                    name: 'transition：过渡',
                    type: 'note',
                    content: <Transition />
                },
                // {
                //     name: 'transform 与 transition 简单示例',
                //     type: 'example',
                //     content: <TransformAndTransitionExample />
                // },
                {
                    name: 'animation: 动画',
                    type: 'note',
                    content: <Animation />
                },
                {
                    name: 'css揭秘-缓动效果-弹跳动画',
                    type: 'info',
                    content: <Bounce />
                },
                {
                    name: 'css揭秘-缓动效果-弹性过渡',
                    type: 'info',
                    content: <Elastic />
                },
                {
                    name: 'css揭秘-逐帧动画',
                    type: 'info',
                    content: <FrameByFrame />
                },
                {
                    name: 'css揭秘-闪烁效果',
                    type: 'info',
                    content: <Blink />
                },
                {
                    name: 'css揭秘-打字动画',
                    type: 'info',
                    content: <Typing />
                },
                {
                    name: 'css揭秘-状态平滑的动画',
                    type: 'info',
                    content: <StateAnimations />
                },
                // {
                //     name: 'css揭秘-沿环形路径平移的动画',
                //     type: 'info',
                //     content: <Circular2Elements />
                // },
                {
                    name: 'css揭秘-沿环形路径平移的动画',
                    type: 'info',
                    content: <Circular />
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.layouts.map((v, i) => {
                        return <Layout key={i} name={v.name} type={v.type} >{v.content}</Layout>
                    })
                }
            </div>
        )
    }
}
