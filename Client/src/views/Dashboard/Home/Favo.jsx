import React from 'react'
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
function Favo() {
  return (
    <div>
      <div className='contF'>
        <h3><i class='bx bx-movie'></i>All time favorite Anime</h3>
        <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim minus, nemo. </span>
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
    </div>
  )
}

export default Favo
