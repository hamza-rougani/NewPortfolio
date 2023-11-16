import React from 'react'
import Partation from './Partation'
const frontend = [
  {resource:"https://react.dev/learn",title:"React js",desc:"Building dynamic, efficient user interfaces.",image:"react.js-img.png"},
  {resource:"https://www.w3schools.com/html/",title:"HTML",desc:"Structuring web content for seamless user experiences.",image:"html.jpg"},
  {resource:"https://www.w3schools.com/css/",title:"CSS",desc:"Styling to elevate the visual appeal of web pages.",image:"css-3.webp"},
  {resource:"https://www.w3schools.com/js/",title:"JAVASCRIPT",desc:"Adding interactivity for dynamic user engagement.",image:"Java_script.jpg"},
  {resource:"https://www.w3schools.com/js/js_ajax_intro.asp",title:"AJAX",desc:"Efficiently updating content without full page reloads.",image:"AJAX3.gif"},
  {resource:"https://www.w3schools.com/jquery/default.asp",title:"JQUERY",desc:"Simplifying JavaScript tasks for rapid development.",image:"1_tsqlgfBBb32ZLx1Y6bwzKA.jpg"},
]
const backend = [
  {resource:"https://laravel.com/docs/10.x",title:"LARAVEL",desc:"Crafting powerful web applications with PHP elegance.",image:"download.png"},
  {resource:"https://www.php.net/docs.php",title:"PHP",desc:"Server-side scripting for dynamic web development.",image:"Sans-titre.webp"},
  {resource:"https://docs.python.org/3/",title:"PYTHON",desc:"Versatile programming for web, data, and more.",image:"logopython.png"},
  {resource:"https://nodejs.org/en/learn",title:"NODE JS",desc:"JavaScript runtime for scalable server-side applications.",image:"node1200x628.png"},
]
const database = [
  {resource:"https://www.mongodb.com/docs/",title:"Mongodb",desc:"Flexible NoSQL database for dynamic, scalable storage.",image:"kuzt9r42or1fxvlq2-Meta_Generic.png"},
  {resource:"https://dev.mysql.com/doc/",title:"Mysql",desc:"Relational database prowess for structured data.",image:"mysql-1.jpg"},
]
const descF = "Front-end development refers to the creation and implementation of the visual elements that users interact with on a website or application. It involves utilizing technologies such as HTML, CSS, and JavaScript to design and build the user interface (UI). Front-end developers are responsible for ensuring a seamless and visually appealing user experience across different devices and browsers.";
const descB = "Back-end development involves the server-side of web development, focusing on the logic, databases, and server operations that power the front-end. Back-end developers work with server-side languages such as Python, Ruby, PHP, or Node.js, and interact with databases to manage and retrieve data. They are responsible for the functionality and performance of a website or application.";
const descD = "Organizing and storing data systematically for efficient retrieval and management in applications.";
function Skills() {
  return (
    <div className='Skills gen'>
     <div className='skillsPr'>
      <Partation title="Front-End" desc={descF} data={frontend}/>
      <Partation title="Back-End" desc={descB} data={backend}/>
      <Partation title="Databse" desc={descD} data={database}/>
     </div>
    </div>
  )
}

export default Skills
