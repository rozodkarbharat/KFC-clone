import React from 'react'
import Box from '@mui/material/Box';
import CategoryCard from '../Categorycard';
import "./categories.css"
import {Link} from "react-router-dom"

const Categories = () => {
  return (
<div className='category_main'>
    <div className='categories_heading'>
      <h1>BROWSE CATEGORIES</h1>
      <div className='categories_line'></div>
    </div>
    {/* First row of Categories */}
 <Box
      sx={{
        height: 300,
        backgroundColor: 'white',
        display:"flex",
        gap:"20px",
        width:"100%",
        marginTop:"50px",
      
     
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {/* first box */}
        <Link to="/menu">
    <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >

        <img className='categorycard_image' src="chicken_bucket.jpg" alt=""/>
        <h4 className='categorycard_name'>CHICKEN BUCKETS</h4>
    </Box>
    </Link>
          {/* second box */}
          <Link to="/menu">
     <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image' src="new_launch.jpg" alt=""/>
        <h4  className='categorycard_name'>NEW LAUNCHES</h4>
    </Box>
    </Link>
      {/* third box */}
       <Link to="/menu">
    <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image' src="chicken_rolls.jpg" alt=""/>
        <h4 className='categorycard_name'>CHICKEN ROLLS</h4>
    </Box>
    </Link>
      {/* fourth box */}
      <Link to="/menu">
    <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image' src="biryani_bucket.jpg" alt=""/>
        <h4 className='categorycard_name'>BIRYANI BUCKETS</h4>
    </Box>
    </Link>
  </Box>

{/* Second row of Categories */}
   
    <Box
      sx={{
        height: 300,
        backgroundColor: 'white',
        display:"flex",
        gap:"20px",
        width:"100%",
        marginTop:"20px",
       
     
        '&:hover': {
          backgroundColor: 'white',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      {/* fifth box */}  
      <Link to="/menu">
           <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image' src="box_meals.jpg" alt=""/>
        <h4 className='categorycard_name'>BOX MEALS</h4>
    </Box>
    </Link>
        {/* sixth box */}  
        <Link to="/menu">
           <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image' src="burgers.jpg" alt=""/>
        <h4 className='categorycard_name'>BURGERS</h4>
    </Box>
    </Link>
        {/* seventh box */}  
        <Link to="/menu">
    <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image' src="stay_home_special.jpg" alt=""/>
        <h4 className='categorycard_name'>STAY HOME SPAECIAL</h4>
    </Box>
    </Link>
      {/* eighth box */}
       <Link to="/menu">
    <Box
      sx={{
        width: 275,
        height: 290,
        backgroundColor: 'rgb(248,247,245)',
          cursor:"pointer",

        '&:hover': {
          backgroundColor: 'rgb(248,247,245)',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
        <img className='categorycard_image_last' src="all_menu.svg" alt=""/>
        <h4 className='categorycard_name'>CHICKEN BUCKETS</h4>
    </Box>
    </Link>
  </Box>
</div>
  )
}

export default Categories
