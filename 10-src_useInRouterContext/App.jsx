import React from 'react'
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'

export default function App() {
    // 根据路由表生成对应的路由规则
    const element=useRoutes(routes)
    return (
        <div>
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-xs-2 col-xs-offset-2">
                    <div className="list-group">
                        {/* 路由链接 */}
                            {/* className里传递的函数会在初次渲染的时候就会调用，且每一次点击这个路由链接都会调用一次 */}
                        <NavLink className="list-group-item" to="/about">About</NavLink>
                        <NavLink className="list-group-item" to="/home">Home</NavLink>
                    </div>
                </div>
                <div className="col-xs-6">
                    <div className="panel">
                        <div className="panel-body">
                            {/* 注册路由 */}
                            {element}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
