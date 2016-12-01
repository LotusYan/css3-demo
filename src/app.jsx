import styles from './index.scss';
import React from 'react';
import Layout from './layout/index'

import Transform from './transform/index'
import Transition from './transition/index'
import TransformAndTransitionExample from './transform/demo/css3-transform'

import Animation from './animation/index'

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Layout
                    name='transform'
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
                    name='transform 演示'
                    type='example'>
                    <TransformAndTransitionExample />
                </Layout>

                <Layout
                    name='transform 注意'
                    type='issue'>

                </Layout>

                <Layout
                    name='animation'
                    type='note'>
                    <Animation />
                </Layout>

                <Layout
                    name='transform 演示'
                    type='example'>
                </Layout>
            </div>
        )
    }
}
