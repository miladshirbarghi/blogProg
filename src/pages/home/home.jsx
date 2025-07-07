import NavBar from "../../components/navBar/navBar";
import ArticleItem from "../../components/article/articleItem";
import "./home.css"
import { Col, Container ,Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/footer";

function Home(){

    const[articles , setArticles] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:5000/articles')
        .then((response) => setArticles(response.data));
    },[])

    return(
     <>
        <NavBar />
        <Container>
            <h1 style={{marginTop : '18px'}}> لیست مقالات </h1>
            <Row className="gy-4 my-1 row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 d-flex justify-content-center">  
                {articles.map((item )=>(
                <Col key={item.id} className="d-flex justify-content-center">
                    <ArticleItem 
                     id={item.id}
                     title={item.title}
                     img={item.img}
                     desc={item.desc}
                    />
                </Col>
                ))}
            </Row>
        </Container>
        <Footer />
     </>
    )
}
export default Home;