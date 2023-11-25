import { Link } from "react-router-dom"
function Header(){
    return(
        <>
        <div className="d-flex justify-content-between align-items-center ">

            <div className="logo">
                <img style={{width:"100px"}} src="https://t4.ftcdn.net/jpg/04/71/81/49/360_F_471814927_NWdPGa8wE5GsszPJ0fWdLvdlsK8saFIM.jpg" alt="" />
            </div>

            <div className="d-flex gap-5">
                <Link to='/girls' className="header"><h3>𝙶𝙸𝚁𝙻𝚂</h3></Link>
                <Link to='/boys' className="header"><h3>𝙱𝙾𝚈𝚂</h3></Link>
                <Link to='/all' className="header"><h3>𝙰𝙻𝙻</h3></Link>
            </div>

            <div>
                <Link to='/cart' className="header"><i style={{fontSize:"40px"}} className="fa-solid fa-cart-shopping"></i></Link>
            </div>
            
        </div>
        </>
    )
}
export default Header