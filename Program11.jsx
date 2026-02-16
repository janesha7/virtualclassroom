//Main.jsx

import React from 'react'
import{Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
        <Link to="/Post">Hi click this content it go's to post.jsx page</Link>                    
      
    </div>
  )
}

export default Home

//Post.jsx

import React from 'react'

const Post = () => {
  return (
    <div>
       <p>ReactJs- Innovation Lab Blog Program</p> 
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, aliquam quibusdam. Eius neque, voluptatem iure a explicabo voluptate fugit optio, fugiat rem eveniet aspernatur cum quis, blanditiis perferendis numquam aliquid.</p>                      
      
    </div>
  )
}

export default Post


//Home.jsx

import React from 'react'
import{Link} from "react-router-dom"
const Home = () => {
  return (
    <div>
        <Link to="/Post">Hi click this content it go's to post.jsx page</Link>                    
      
    </div>
  )
}

export default Home
