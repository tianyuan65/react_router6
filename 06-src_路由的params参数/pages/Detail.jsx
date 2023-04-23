import React from 'react'
import { useParams,useMatch } from 'react-router-dom'

export default function Detail() {
    // useParams()中可以直接获取params参数
    const {id,title,content}=useParams()
    // useMatch()钩子中需要传入完整的路径，包括占位的id、title及content，但用的不多，一般用useParams
    const match=useMatch('home/message/detail/:id/:title/:content')
    console.log(match);
    return (
        <ul>
            <li>{id}</li>
            <li>{title}</li>
            <li>{content}</li>
        </ul>
    )
}
