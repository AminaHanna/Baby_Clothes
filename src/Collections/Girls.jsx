import { useContext } from 'react'
import {Container ,Row ,Col ,Card} from 'react-bootstrap'
import { Context } from '../App'
import Header from '../Header'

function Girls(){

const {updateCart}=useContext(Context)


    let baby_girls=[
        {
            id:"1",
            Image:<img style={{height:"200px",width:"204px"}} src='https://i.ebayimg.com/thumbs/images/g/H5UAAOSwTEtj6gOJ/s-l300.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$10"
          },
          {
            id:"3",
            Image:<img style={{height:"200px",width:"204px"}} src='https://m.media-amazon.com/images/I/81lqurf9Y8L._AC_UY1000_.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$15"
          },
          {
            id:"5",
            Image:<img style={{height:"200px",width:"204px"}} src='https://www.totsontrend.com.au/cdn/shop/products/file_tmp_160345444559593.jpg?v=1603454479' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$18"
          },
          {
            id:"6",
            Image:<img style={{height:"200px",width:"204px"}} src='https://img.joomcdn.net/96b6a420e5bca9f738948a052b020813f1beb622_original.jpeg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$9"
          },
          {
            id:"8",
            Image:<img style={{height:"200px",width:"204px"}} src='https://img.freepik.com/premium-photo/white-dress-orange-shorts-with-kids-handbag-sunglasses-set-baby-clothes-accessories-spring-summer-fashion-childs-outfit-flat-lay-top-view_479776-3827.jpg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$13"
          },
          {
            id:"11",
            Image:<img style={{height:"200px",width:"204px"}} src='https://i5.walmartimages.com/asr/2768c53f-119c-43ab-9ae7-a935953cbdd2.eb664c946ef9beeab6c83ff0af5ae254.jpeg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$10"
          },
          {
            id:"14",
            Image:<img style={{height:"200px",width:"204px"}} src='https://i5.walmartimages.com/seo/Vivianyo-HD-Clothes-for-Baby-GirlsBaby-Girls-Fall-Winter-Round-Neck-Blouses-and-Skirt-Baby-Fashion-Two-Piece-Set-Flash-Picks-Black_1ca85728-1371-439e-87bc-380cd15206f1.8947ac7e08472955cbc5c4f16c0dfacd.jpeg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$8"
          },
          {
            id:"16",
            Image:<img style={{height:"200px",width:"204px"}} src='https://i5.walmartimages.com/seo/Baby-clothes-for-girls-Toddler-Kids-Baby-Girl-Solid-Linen-Button-Ruffle-Princess-Party-Dress-Clothes-CHMORA_f0ac0db8-12b3-470e-be62-d031958d7312_1.cbf5813f2b87834acaea7ef4f87e2414.jpeg' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$13"
        },
        {
            id:"17",
            Image:<img style={{height:"200px",width:"204px"}} src='https://i5.walmartimages.com/asr/14d0bc0e-55e6-43a7-8336-67ecb5e6f25a.a09f74af6301f0619ed7f6eccf0dd556.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$6"
        },
        {
            id:"18",
            Image:<img style={{height:"200px",width:"204px"}} src='https://media1.popsugar-assets.com/files/thumbor/LdUeSKAaGJ33vdwyFTkWm46G15o/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2023/04/12/721/n/24155406/32e39d306436da0ad2ad90.78373274_/i/cute-baby-clothes-from-old-navy.webp' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$15"
        },
        {
            id:"19",
            Image:<img style={{height:"200px",width:"204px"}} src='https://moonbunbaby.com/cdn/shop/products/product-image-1299447368.jpg?v=1591949719' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$18"
        },
        {
            id:"20",
            Image:<img style={{height:"200px",width:"204px"}} src='https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/20/518993/1.jpg?8583' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$7"
        },
        {
            id:"21",
            Image:<img style={{height:"200px",width:"204px"}} src='https://yesitsorganic.com/wp-content/uploads/2022/02/1-1.png' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$9"
        },
        {
            id:"23",
            Image:<img style={{height:"200px",width:"204px"}} src='https://ryleeandcru.com/cdn/shop/files/NL086RILL-GOLDEN-1.jpg?v=1694461869' alt='loading...'></img>,
            Product:"Trendy",
            Rate:"$11"
          },
    ]

    return(
        <>
        <Header/>
        <Container>
            <h1>𝐆𝐈𝐑𝐋𝐒 𝐖𝐄𝐀𝐑</h1>
        <Row>

            {baby_girls.map((item) => {
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
export default Girls