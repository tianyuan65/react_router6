import React from 'react'
import {NavLink,Routes,Route,Navigate} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'

export default function App() {
    function computedClassName({isActive}) {
        return isActive ? 'list-group-item atguigu' : 'list-group-item'
    }
  return (
    <div>
    <div className="row">
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header"><h2>React Router Demo</h2></div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs-2 col-xs-offset-2">
        <div className="list-group">
            {/* 路由链接 */}
                {/* className里传递的函数会在初次渲染的时候就会调用，且每一次点击这个路由链接都会调用一次 */}
          <NavLink className={computedClassName} to="/about">About</NavLink>
          <NavLink className={computedClassName} to="/home">Home</NavLink>
        </div>
      </div>
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            {/* 注册路由 */}
            <Routes>
                {/* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */}
                <Route path='/about' element={<About/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/' element={<Navigate to="/about"/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
