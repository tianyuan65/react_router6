import React,{useState} from 'react'
import {Link,Outlet} from 'react-router-dom'

export default function Message() {
    const [messages]=useState([
        {id:'001',title:'message1',content:'m1'},
        {id:'002',title:'message2',content:'m2'},
        {id:'003',title:'message3',content:'m3'},
        {id:'004',title:'message4',content:'m4'}
    ])
    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return (
                            // 路由链接
                            <li key={m.id}>
                                <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/* 指定路由组件的展示位置，就是展示<Detail/>内容的位置 */}
            <Outlet />
        </div>
    )
}
