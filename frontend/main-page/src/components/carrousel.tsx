import '../styles/carrousel.css';
import image1 from '../assets/caballo.jpg';
import image2 from '../assets/gta.webp';
import image3 from '../assets/minecraft.webp';
import image4 from '../assets/mp.png';

function Carrousel(){
  return(
    <div className="slider">
      <div className="slides">
        <input type="radio" name="radio-button" id="radio1"/>
        <input type="radio" name="radio-button" id="radio2"/>
        <input type="radio" name="radio-button" id="radio3"/>
        <input type="radio" name="radio-button" id="radio4"/>

        <div className="slide first">
          <img src={image1}/>
        </div>
        <div className="slide">
          <img src={image2}/>
        </div>
        <div className="slide">
          <img src={image3}/>
        </div>
        <div className="slide">
          <img src={image4}/>
        </div>
      </div>
      <div className='navigation-auto'>
        <div className="auto-btn1"></div>
        <div className="auto-btn2"></div>
        <div className="auto-btn3"></div>
        <div className="auto-btn4"></div>
      </div>
      <div className='navigation-manual'>
        <label htmlFor="radio1" className='manual-btn'></label>
        <label htmlFor="radio2" className='manual-btn'></label>
        <label htmlFor="radio3" className='manual-btn'></label>
        <label htmlFor="radio4" className='manual-btn'></label>
      </div>
    </div>

  )
}

export default Carrousel;
