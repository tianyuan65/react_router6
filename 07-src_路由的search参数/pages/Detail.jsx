import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [search,setSearch]=useSearchParams()
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
