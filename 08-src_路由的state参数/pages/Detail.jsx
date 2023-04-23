import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    // 使用useLocation()，获取state参数，并使用连续解构赋值来获取state参数中具体的属性
    const {state:{id,title,content}}=useLocation()
    return (
        <ul>
            <li>消息编号:{id}</li>
            <li>消息标题:{title}</li>
            <li>消息内容:{content}</li>
        </ul>
    )
}
