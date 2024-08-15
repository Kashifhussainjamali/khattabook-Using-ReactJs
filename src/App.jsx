import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBer from './componants/navbar'
import Part1 from './componants/part1'
import Part2 from './componants/part2'
import Part3 from './componants/part3'
import Part4 from './componants/part4'
import Part5 from './componants/part5'
import Part6 from './componants/part6'
import Part7 from './componants/part7'
import Part8 from './componants/part8'
import Part9 from './componants/part9'

function App() {

  return (
    <>
    <NavBer></NavBer>
    <h3 className='daily'>DAILY KA KHANA</h3>
    <ul className='mainul'>
    <li><Part1></Part1></li>
    <li><Part2></Part2></li>
    <li><Part3></Part3></li>
    </ul>
    <h3 className='daily'>SHOPPING</h3>
    <ul className='mainul'>
    <li><Part4></Part4></li>
    <li><Part5></Part5></li>
    <li><Part6></Part6></li>
    </ul>
    <h3 className='daily'>OTHERS</h3>
    <ul className='mainul'>
    <li><Part7></Part7></li>
    <li><Part8></Part8></li>
    <li><Part9></Part9></li>
    </ul>
    
    </>
  )
}

export default App
