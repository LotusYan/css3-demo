import styles from './index.scss';
import React from 'react';
import Layout from './layout/index'

import Transform from './css3/transform/index'
import Transition from './css3/transition/index'
import TransformAndTransitionExample from './css3/transform/demo/css3-transform'

import Animation from './css3/animation/index'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Layout
                    name='transform：对元素进行移动、缩放、转动、拉长或拉伸'
                    type='note'
                    >
                    <Transform />
                </Layout>

                <Layout
                    name='transition'
                    type='note'>
                    <Transition />
                </Layout>

                <Layout
                    name='example'
                    type='example'>
                    <TransformAndTransitionExample />
                </Layout>

                <Layout
                    name='note'
                    type='issue'>
                </Layout>

                <Layout
                    name='animation'
                    type='note'>
                    <Animation />
                </Layout>

                <Layout
                    name='example'
                    type='example'>
                </Layout>

                <Layout
                    name='note'
                    type='issue'>
                </Layout>
            </div>
        )
    }
}
