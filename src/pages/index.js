import * as React from "react"
import Navbar from "../Components/Navbar/Navbar"
import MainBody from "../Components/MainBody/MainBody"

 
const IndexPage = () => {
  return (
    <main>
      <Navbar/>
      <MainBody/>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
