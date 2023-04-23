## React Router 6

* **一、概述**
* 1. React Router 以三个不同的包发布到npm上，它们分别为：
    * (1) react-router：路由的核心库，提供了很多的组件、钩子
    * (2) react-router-dom：包含react-router所有内容，并添加一些专门用于DOM的组件，如：<BrowserRouter>等
    * (3)react-router-native：包括react-router所有内容。并添加一些专门用于ReactNative的API，如：<NativeRouter>等
* 2. 与React Router5.x版本相比，改变了什么？
    * (1) 内置组件的变化：移除<Switch/>，新增<Routes/>等
    * (2) 语法的变化：component={About}变为element={<About/>}等
    * (3) 新增多个hook：userParams、useNavigate、useMatch等
    * **(4) 官方明确推荐函数式组建了。。。。。**

* **二、Component**
* 1. <BrowserRouter>
    * 说明：<BrowserRouter> 用于包裹整个应用。
    * ```
        import {BrowserRouter} from 'react-router-dom'
        ReactDOM.render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>,
            document.getElementById('root')
        )
      ```
* 2. <HashRouter>
    * 说明：作用与<BrowserRouter>一样，但<HashRouter>修改的是地址栏的hash值。
    * 注：6.x版本中<HashRouter>、<BrowserRouter>  的用法与 5.x 相同。
* 3. <Routes/>与<Route/>
    * v6版本中移出了先前的<Switch>，引入了新的替代者：<Routes>。
    * <Routes> 和 <Route>要配合使用，且必须要用<Routes>包裹<Route>。
    * <Route> 相当于一个 if 语句，如果其路径与当前 URL 匹配，则呈现其对应的组件。
    * <Route caseSensitive> 属性用于指定：匹配时是否区分大小写（默认为 false）。
    * 当URL发生变化时，<Routes> 都会查看其所有子 <Route> 元素以找到最佳匹配并呈现组件 。
    * <Route> 也可以嵌套使用，且可配合useRoutes()配置 “路由表” ，但需要通过 <Outlet> 组件来渲染其子路由。
    * ```
        <Routes>
            {/* path属性用于定义路径，element属性用于定义当前路径所对应的组件 */}
            <Route path='/about' element={<About/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/' element={<Navigate to="/about"/>}/>
        </Routes>
      ```
* 4. <Link>与<NavLink>
    * 作用：修改URL，且不发送网络请求（路由链接）
    * 注意：外侧都需要使用<BrowserRouter>或<HashRouter>包裹，另外值得注意的点是，<NavLink>有高亮效果
* 5. <Navigate>
    * 作用：只要<Navigate>组件被渲染，就会修改路径，切换视图。
    * replace属性用于控制跳转模式（push 或 replace，默认是push）。
    * ```
        import React,{useState} from 'react'
        import {Navigate} from 'react-router-dom'
        export default function Home() {
            const [sum,setSum]=useState(1)
            return (
                <div>
                    <h3>我是Home的内容</h3>
                    {/* 根据sum的值决定是否切换视图 */}
                    {sum===2 ? <Navigate to="/about" replace/> : <h4>当前sum的值为:{sum}</h4>}
                    <button onClick={()=>setSum(2)}>点我让sum变为2</button>
                </div>
            )
        }
      ```
* 6. <Outlet>
    * 