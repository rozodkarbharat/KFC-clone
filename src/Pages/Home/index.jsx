import React from 'react'
import Categories from '../../components/Categories'
import Footer from '../../components/Footer'
import Navbar from '../../components/navbar'
import OrderDetail from '../../components/OrderDetails'
import Welcome from '../../components/Welcome'


const Home = () => {
  return (
    <>
      <Navbar/>
      <div style={{marginTop:"104px"}}>

        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint itaque quod consequuntur commodi a animi fugiat quis, ut iusto veniam esse delectus quia omnis voluptatum? Odio ratione iure veritatis, dolores quis laboriosam amet quidem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum inventore architecto saepe libero nam iste molestiae consequatur voluptate consectetur. Quidem nam delectus repellat similique. Maiores amet possimus totam praesentium eum.
        </p> */}
        <OrderDetail/>
       <Welcome/>
       <Categories/>
       <Footer/>
      </div>
    </>
  )
}

export default Home
