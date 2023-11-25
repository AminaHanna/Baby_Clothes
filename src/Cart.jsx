import { useContext } from "react"
import { Context } from "./App"
import { Card, Col, Container, Row } from "react-bootstrap"


function Cart(){

const{cart}=useContext(Context)

    return(
        <>
        <Container>
        <h1>𝐂𝐀𝐑𝐓</h1>
        <Row>
            {cart.map((items)=>{
                return(
                    <>
                    <Col xl={3} lg={4} md={4} sm={6} xs={12}>
                    <Card style={{width:"15rem",height:"17rem", textAlign:"center" , marginBottom:"25px"}}>
                        <Card.Body>
                    <Card>{items.Image}</Card>
                    <Card.Text className='d-flex justify-content-around'>
                        <div className="">{items.Product}</div>
                        <div className="">{items.Rate}</div>
                        <div className=""><i class="fa-solid fa-trash"></i></div>
                    </Card.Text>
                    </Card.Body>
                    </Card>
                    </Col>
                    </>
                )
            })}
        </Row>
        </Container>
        </>
       
    )
}
export default Cart