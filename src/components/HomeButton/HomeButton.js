
import "./HomeButton.css"
import { Link } from 'react-router-dom'
import HomeImg from "./../../assets/home-sweet-home.png"

function HomeButton() {
  return (
    <div>
        <Link to="/">
      <img src={HomeImg} className='home-img'/>
      </Link>

    </div>
  )
}

export default HomeButton