
import style from './style.scss'
import React from 'react'

export default class Demo extends React.Component{
    constructor(props, context) {
        super(props, context);
    }
    render() {
        console.log(111)
        return (
           <div>
               <div className={style.transform}>
                   hello
               </div>
           </div>
       )
   } 
}