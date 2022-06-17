import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./Menu_sidebar.css"

const MenuSidebar = () => {
  return (
    <>
       <Drawer
        variant="permanent"
        sx={{
          width: 450,
          flexShrink: 0,
        
          [`& .MuiDrawer-paper`]: { width: 450, boxSizing: 'border-box',marginTop:"170px",paddingLeft:"100px",},
        }}
      >
        <Box sx={{ overflow: 'auto',display:"flex", flexDirection:"column"}}>
          <img className='menusidebar_image' src="vector3.svg" alt="" />
          <h1 className='menusidebar_tittle'>KFC MENU</h1>
          <List>
            {[{tittle:"CHICKEN BUCKETS",id:"chicken_buckets"},
            {tittle:"NEW LAUNCHES",id:"new_launches"},
            {tittle:"CHICKEN ROLLS",id:"chicken_rolls"},
            {tittle:"BIRYANI BUCKETS",id:"biryani_buckets"},
            {tittle:"BOX MEALS",id:"box_meals"},
            {tittle:"BURGERS",id:"burgers"},
            {tittle:"STAY HOME SPECIAL",id:"stay_home_special"},
            {tittle:"SNACKS",id:"snack"},
            {tittle:"BEVERAGES",id:"beverage"}].map((text, index) => (
              <ListItem key={text.tittle} disablePadding>
                <ListItemButton>
                  <a href={`#${text.tittle}`}>
                  <ListItemText primary={text.tittle} />
                  </a>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default MenuSidebar
