import { useContext } from 'react'
import {Container ,Row ,Col ,Card} from 'react-bootstrap'
import { Context } from '../App'
import Header from '../Header'

function Boys(){

  const {updateCart}=useContext(Context)

    let baby_boys=[
        { 
            id:"2",
            Image:<img style={{height:"200px",width:"204px"}} src='https://m.media-amazon.com/images/I/61xANGuVDlL._AC_SX385_.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$8"
          },
          {
            id:"4",
            Image:<img style={{height:"200px",width:"204px"}} src='https://m.media-amazon.com/images/I/71c3jABSBaL._AC_UY1000_.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$7"
          },
          {
            id:"7",
            Image:<img style={{height:"200px",width:"204px"}} src='https://www.pngitem.com/pimgs/m/281-2819574_small-baby-boy-dress-hd-png-download.png' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$6"
          },
          {
            id:"9",
            Image:<img style={{height:"200px",width:"204px"}} src='https://my-live-01.slatic.net/p/ef8d9e5ef837f1d6629a4c2bbb55405f.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$11"
          },
          {
            id:"10",
            Image:<img style={{height:"200px",width:"204px"}} src='https://www.fancydresswale.com/cdn/shop/products/BABYROMP-Blue-2_1024x1024.jpg?v=1647436123' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$5"
          },
          {
            id:"12",
            Image:<img style={{height:"200px",width:"204px"}} src='https://sg-test-11.slatic.net/p/3835cd18aae5400dbb607c1158f1d1c3.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$16"
          },
          {
            id:"13",
            Image:<img style={{height:"200px",width:"204px"}} src='https://cdn.shopify.com/s/files/1/0630/1922/1235/products/1_O1CN01Lp5ZOd2KBIPz8meT7__2200802659518_1445x.jpg?v=1654436204' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$18"
          },
          {
            id:"15",
            Image:<img style={{height:"200px",width:"204px"}} src='https://i5.walmartimages.com/asr/f4d1bc45-7b00-4b5d-9efe-22821ee7efc4.2469df23c24f327b0e9366a0f0ffb230.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$11"
          },
          {
            id:"22",
            Image:<img style={{height:"200px",width:"204px"}} src='https://www.thinkrightme.com/wp-content/uploads/2021/09/Untitled-design-2-14-1024x610.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$14"
          },
    ]


    return(
        <>
        <Header/>
        <Container>
            <h1>𝐁𝐎𝐘𝐒 𝐖𝐄𝐀𝐑</h1>
        <Row>

            {baby_boys.map((item) => {
            return(
                <>
                <Col xl={3} lg={4} md={4} sm={6} xs={12}>
                <Card style={{width:"15rem",height:"20rem", textAlign:"center" , marginBottom:"25px"}}>
                <Card.Body>

                    <Card>{item.Image}</Card>

                    <Card.Text>
                    {item.Product}
                    </Card.Text>

                    <Card.Text className='d-flex justify-content-around'>
                    <div className="">{item.Rate}</div>

                    <div onClick={()=>{updateCart(item)}}>
                      <i class="fa-solid fa-cart-shopping"></i>
                    </div>
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
export default Boys