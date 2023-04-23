import React,{useState} from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'

export default function Message() {
    // 跳转指定路由、前进、后退等功能，都通过useNavigate这个钩子来实现
    const navigate=useNavigate()
    const [messages]=useState([
        {id:'001',title:'message1',content:'m1'},
        {id:'002',title:'message2',content:'m2'},
        {id:'003',title:'message3',content:'m3'},
        {id:'004',title:'message4',content:'m4'}
    ])
    function showDetail(m) {
        // 此时navigate是一个函数，传入两个参数，第一个为匹配的路径(就是调到哪儿)，第二个为配置对象
        navigate('detail',{
            // 跳转模式，替不替换
            replace:false,
            state:{
                id:m.id,
                title:m.title,
                content:m.content
            }
        })
    }
    return (
        <div>
            <ul>
                {
                    messages.map((m)=>{
                        return (
                            // 路由链接
                            <li key={m.id}>
                                <Link 
                                    to="detail"
                                    state={{
                                        id:m.id,
                                        title:m.title,
                                        content:m.content
                                    }}
                                >{m.title}</Link>
                                <button onClick={()=>showDetail(m)}>查看详情</button>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            {/* 指定路由组件的展示位置 */}
            <Outlet />
        </div>
    )
}
