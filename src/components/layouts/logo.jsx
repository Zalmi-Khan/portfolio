import { Link } from "react-router-dom"
import { MainLogo } from "../../assets/images"

export const Logo =()=>{
    return(
        <Link to="/">
          <img src={MainLogo} className="w-40" />
        </Link>
    )
}