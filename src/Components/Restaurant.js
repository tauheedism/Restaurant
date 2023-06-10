import React, { useState } from 'react'
import MenuCard from './MenuCard'
import Menu from './MenuApi'
import Navbar from "./Navbar";

import './style.css'
const Restaurent = () => {
  const uniqueList=[
    ...new Set(
      Menu.map((curElem)=>{
        return curElem.category
      })
    ),
    "All",
  ];

  console.log(uniqueList);


  const [menuData,setMenuData]=useState(Menu);
  const [menuList,serMenuList]=useState(uniqueList)
  // console.log(menuData)
  
  const filterItem=(category)=>{
    if (category==="All") {
      setMenuData(Menu)
      return;
    }
    const updatedList=Menu.filter((curElem)=>{
      return curElem.category===category;
    });
    setMenuData(updatedList)
  }
  

  return (
    <>
    <div>
    <Navbar filter={filterItem} item={menuList} />
    <MenuCard menuItem={menuData} />
    </div>
    </>
  )
}

export default Restaurent
