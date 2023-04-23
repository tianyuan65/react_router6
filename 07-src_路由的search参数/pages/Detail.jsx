import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    // [search参数,用于更新search参数的方法]
    // setSearch主要用于更新我收到的search参数，就像下面按钮的那行代码，需要给setSearch传递字符串形式的search参数
    const [search,setSearch]=useSearchParams()
    // 想要获取search参数中具体的某一个参数，需要调用get方法来获取
    const id=search.get('id')
    const title=search.get('title')
    const content=search.get('content')
    return (
        <ul>
            <li>
                <button onClick={()=>setSearch('id=009&title=6&content=niua')}>点我更新一下search参数</button>
            </li>
            <li>消息编号：{id}</li>
            <li>消息标题：{title}</li>
            <li>消息内容：{content}</li>
        </ul>
    )
}
