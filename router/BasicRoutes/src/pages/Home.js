import React from "react";

const Home = () => {
    return (
        <div>
        <h2> Welcome</h2>

        <p>
        Introduction
SPA - Single Page Applications - Sites which loads once from the server. Don't need to go back to query server.
Above is made possible using react router 
React router swaps current page with the new page clicked without need of going back to query server 
Adv of SPAs: Fast sites since no need to query server for every new request

        </p>
        npm install react-router-dom@6.4  - installs react router dom version 6.4 

BrowserRouter - Wraps entire app
Routes - Set routes
Route - Set routes
Link - Create links between pages


        
        <p>
        Routes
Encloses Route
Route
Self closing Route  with two parameters Route p e
Path : is the app/site page path. Syntax path=”/” 
Element: Is the component. Syntax element = {}
Examples:
Home: Route path='/' element={ <Home />} 
path=”/” is equivalent to index 
Route index element={ <Home />} is same
Others: No need for slash (/) just the name
Route path='about' element={}

Link $ NavLink
Both allow us to navigate to pages without the need to querry server for fresh html page (SPA)
Intercepts,looks for Routes and replaces themIn

        </p>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam sagittis lacus vel erat tincidunt hendrerit. Donec suscipit venenatis molestie. 
        Maecenas sollicitudin ac eros vel rutrum.
        </p>
        </div>
    )

}

export default Home 