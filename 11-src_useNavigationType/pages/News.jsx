import React from 'react'
import { useNavigationType } from 'react-router-dom'

export default function News() {
  // useNavigationType()，用来判断我是如何来到当前页面的
    // 刚打开页面-PUSH、在匹配的路径中添加replace-REPLACE、刷新了一次页面+调到其他路径再切回来-POP
  console.log(useNavigationType());
  return (
    <ul>
        <li>news001</li>
        <li>news002</li>
        <li>news003</li>
    </ul>
  )
}
