import React from 'react'
import { Link } from 'react-router-dom'
function Profile() {
  const animes = [
    "https://www.alucare.fr/wp-content/uploads/2023/08/Naruto-scaled.jpg",
    "https://a.storyblok.com/f/178900/1458x809/44fda38ad6/one-piece-toei-luffy-straw-hat-over-eyes.jpg/m/1200x0/filters:quality(95)format(webp)",
    "https://m.media-amazon.com/images/M/MV5BOTk3NGQ4ZmYtNjhlMS00Y2ZiLTk0MzQtOTIxMjdhNDQ0NzlmXkEyXkFqcGdeQXNvbG5vbXM@._V1_.jpg",
    "https://apprentiotaku.files.wordpress.com/2021/02/gon-pleure-e1617434538328.jpg",
    "https://www.hitradio.ma/sites/default/files/styles/large/public/articles/death%20noe.jpg?itok=xMFj-_Zl",
    "https://images6.alphacoders.com/133/1330846.png",
    "https://m.media-amazon.com/images/S/pv-target-images/35f2366b27dfe36aa10d212b7b2258d05284545135891bcde46403627151506a.jpg",
    "https://miro.medium.com/v2/resize:fit:1200/1*EGQfgZlE9pdRjiw_ZRrotw.jpeg",
  ]
  const games = [
    "https://cdn.cloudflare.steamstatic.com/steam/apps/730/capsule_616x353.jpg?t=1698860631",
    "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/6/5/ctsejxmdtw9inp8zqqqd/valorant-agents",
    "https://images.frandroid.com/wp-content/uploads/2023/07/gta-5-game-pass.jpg",
    "https://cdn.cloudflare.steamstatic.com/steam/apps/1404210/capsule_616x353.jpg?t=1656615218",
    
  ]
  const resources = [
    "https://cdn.analyticsvidhya.com/wp-content/uploads/2020/12/1dZR-6mVLWHoQr7vBIU2-kw.png",
    "https://internet-salmagundi.com/wp-content/uploads/2019/03/W3-MatFrame-895x493px-Qual100.jpg",
    "https://media.graphiline.com/src/images/news/articles/ima-image-26441.jpg",
    // "https://cdn.cloudflare.steamstatic.com/steam/apps/1404210/capsule_616x353.jpg?t=1656615218", 
    
  ]
  return (
    <div className='Profile'>
      <div className='partPr1'>
        <div className='intr'>
          <h2>Welcome to My Portfolio</h2>
          <span className='spanRRR'>My portfolio provides you with an overview of my skills and myself, Thank you very much for continuing to explore my skills.</span>
          <div className='btnsP'>
            <Link to="/contact"><button id='who'>Contact Me?</button></Link>
           <Link  to="/skills"> <button id='skillsP'>My skills ?</button></Link>
          </div>
          <div className='compu'> 
          <div className='com'>
            <img src={`${import.meta.env.VITE_API_BASE_URL}/images/DSC_0011 copie.jpg`} alt="" />
          </div>
          <div className='stand'>
            <img src={`${import.meta.env.VITE_API_BASE_URL}/images/ss.png`} alt="" />
          </div>
          </div>
          </div>
      </div>
      <div className='myFavorite'>
        <div className='FA'>
        
        <div className='steps'>
          {/* <div className='about'>
            <h3>About Me</h3>
            <div className='spanRRR'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae distinctio .</div>
          </div> */}
          <div className='informationP'>
            <div className='part'>
              <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/sr.png`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/DSC_0011 copie.jpg`} alt="" />
                </div>
                
              </div>
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/qui.png`} alt="" />
                </div>
                <h4>Who i am ?</h4>
                <span id='spanPPP'>Hello, I'm Hamza Rougani, a passionate and aspiring Full Stack Developer from Morocco. I'm 23 years old and have recently graduated from OFPPT (Office de la Formation Professionnelle et de la Promotion du Travail) as a Full Stack Developer in 2023. I'm excited to embark on a journey that combines my technical skills, creativity, and determination to create innovative solutions.</span>
              </div>
            </div>
            <div className='part PartPri'>
              
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/4366867.png`} alt="" />
                </div>
                <h4>What is OFPPT ?</h4>
                <span id='spanPPP'>The Office of Vocational Training and Employment Promotion, or OFPPT (L'Office de la formation professionnelle et de la promotion du travail), is a prominent institution in Morocco dedicated to providing high-quality vocational education and training. OFPPT plays a pivotal role in empowering individuals with practical skills and knowledge, preparing them for successful careers in a wide range of industries. With a strong commitment to bridging the gap between education and industry needs, OFPPT offers a diverse array of vocational programs tailored to meet the demands of the job market. </span>
              </div>
              <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/2819450.png`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/photo-ofppt.png`} alt="" /> 
                </div>
                
              </div>
            </div>
            <div className='part'>
              <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/5431052.png`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/74-Full-stack_Developer__2x-75cfeeded2b49fcdc9665e672c055768.png`} alt="" />
                </div>
                
              </div>
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/3645866.png`} alt="" />
                </div>
                <h4>What did I benefit from OFPPT?</h4>
                <span id='spanPPP'>My experience at OFPPT has been instrumental in shaping my career as a full-stack developer. The institution's well-rounded curriculum allowed me to gain proficiency in both front-end and back-end technologies, making me capable of handling all aspects of web development. I acquired skills in programming languages, database management, and various web development frameworks, which have been essential in my day-to-day work.</span>
              </div>
            </div>
            <div className='part PartPri'>
              
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/4696757.png`} alt="" />
                </div>
                <h4>What did I study in school ?</h4>
                <span id='spanPPP'>I studied a diverse array of technologies and methodologies during my time at school, equipping me with a well-rounded skill set as a full-stack developer. My educational journey covered a wide range of programming languages, including React.js, JavaScript, HTML, CSS, Node.js, Laravel, PHP, and Python. I also gained expertise in web development tools such as AJAX and jQuery, as well as proficiency in Python Object-Oriented Programming (OOP) and libraries like Tkinter for GUI development. </span>
              </div>
              <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/6214248.png`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/why-combine-react-and-node-js-for-full-stack-web-development.jpg`} alt="" />
                </div>
                
              </div>
            </div>
            <div className='part'>
              <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/mysql-database.svg`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/kuzt9r42or1fxvlq2-Meta_Generic.png`} alt="" />
                </div>
                
              </div>
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/9722699.png`} alt="" />
                </div>
                <h4>More ...</h4>
                <span id='spanPPP'>In addition, my studies included database management with PyMongo for MongoDB and MySQL, as well as an understanding of software modeling with UML. I also delved into agile methodologies, which have provided a strong foundation for project management and collaboration in my development work.</span>
              </div>
            </div>
            <div className='part PartPri'>
              
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/5257117.png`} alt="" />
                </div>
                <h4>What are the self-learning resources ?</h4>
                <span id='spanPPP'>
My journey towards becoming a Full Stack Developer is driven by a passion for continuous learning and hands-on exploration. I engage with a variety of resources, including platforms like W3Schools, YouTube tutorials, and active participation on Stack Overflow.

Through this self-formation process, I immerse myself in the dynamic realm of web development, exploring both front-end and back-end concepts. This journey isn't just about acquiring skills; it's a commitment to understanding the intricate dance between user interfaces and server logic, and the art of crafting seamless digital experiences. </span>
              </div>
              <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/6952330.png`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/What-is-Self-Learning.jpg`} alt="" />
                </div>
                
              </div>
            </div>
            <div className='contF'>
        <h3><div className='logoGene'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/2912857.png`} alt="" /></div>All time favorite resources</h3>
        <span className='spanRRR'>Some of the resources I use to develop my programming skills as a developer full stack. </span>
        <div className='animes'>
          {resources.map((anime,index)=>{
            return(
              <div className='anime' key={index}>
              <img src={anime} alt="" />
            </div>
            )
          })}
           
        </div>
        </div>
            <div className='part'>
            <div className='pa'>
                <div className='logo'>
                  <img id="pic" src={`${import.meta.env.VITE_API_BASE_URL}/images/3408506.png`} alt="" />
                </div>
                <div className='imagePr'>
                <img src={`${import.meta.env.VITE_API_BASE_URL}/images/anime.png`} alt="" />
                </div>
                
              </div>
              <div className='pa2'>
                <div className='logo'>
                  <img src={`${import.meta.env.VITE_API_BASE_URL}/images/5930147.png`} alt="" />
                </div>
                <h4>Do I do other things ?</h4>
                <span id='spanPPP'>Beyond my professional pursuits, I am an avid enthusiast of anime and video games. Exploring the imaginative worlds crafted by talented creators has been a significant source of inspiration for me. Whether it's the intricate storytelling of my favorite anime series or the immersive experiences offered by video games, these interests not only reflect my passion for creativity but also contribute to my continuous growth as a professional. In my spare time, you'll often find me engrossed in a captivating story or navigating virtual landscapes. These pursuits not only serve as sources of joy but also fuel my creativity and drive for innovation in my work. </span>
              </div>
              
            </div>
          </div>
        </div>
        <div className='contF'>
        <h3><i class='bx bx-movie'></i>All time favorite Anime</h3>
        <span className='spanRRR'>Watching anime makes you a calm person, provides you with a comfortable environment, and saves you from work stress. </span>
        <div className='animes'>
          {animes.map((anime,index)=>{
            return(
              <div className='anime' key={index}>
              <img src={anime} alt="" />
            </div>
            )
          })}
           
        </div>
        </div>
        <div className='contF'>
        <h3><div className='logoGene'><img src={`${import.meta.env.VITE_API_BASE_URL}/images/3408506.png`} alt="" /></div>All time favorite Games</h3>
        <span className='spanRRR'>When you play electronic games, it gives you a good feeling and curiosity in searching for the tools and programming languages with which these games were made. </span>
        <div className='animes'>
          {games.map((anime,index)=>{
            return(
              <div className='anime' key={index}>
              <img src={anime} alt="" />
            </div>
            )
          })}
           
        </div>
        </div>
        </div>
      </div>
    
    </div>
  )
}

export default Profile
