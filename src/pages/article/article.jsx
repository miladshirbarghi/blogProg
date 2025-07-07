import { Button, Col, Container, Row } from "react-bootstrap";
import NavBar from "../../components/navBar/navBar";
import "./Article.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Footer from "../../components/footer/footer";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";

function Article() {
  const navigate = useNavigate();
  const itemId = useParams().articleId;
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${itemId}`)
      .then((response) => setArticleData(response.data));
  }, [itemId]);

  const deleteArticleHandler = async (itemId) => {
    if (itemId > 4) {
      try {
        await Swal.fire({
          title: "مطمئنی که میخوای مقاله رو حذف کنی؟",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "آره حذفش کن",
          cancelButtonText: "نه",
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/articles/${itemId}`);
            Swal.fire({
              title: "مقاله با موفقیت حذف شد !",
              icon: "success",
            });
          }
        });
        navigate("/");
      } catch (error) {
        Swal.fire({
          title: "خطا در حذف مقاله",
          icon: "error",
        });
      }
    }
  };

  // const editArticleHandler = (itemId) => {
      // navigate(`/edit-article/${itemId}`)
  // };

  return (
    <>
      <NavBar />
      <Container>
        <Row className="mt-5">
          <Col lg={4}>
            <div className="articleCardContainer">
              <div className="cardHeader">
                <img src={articleData.img} />
                <h4>{articleData.title}</h4>
              </div>
              <div className="cardFooter">
                {Number(itemId) > 4 && (
                  <Button
                    onClick={() => deleteArticleHandler(itemId)}
                    variant="outline-danger"
                  >
                    <MdDelete size="1rem" />
                    حذف
                  </Button>
                )}
                <Link to={`/edit-article/${itemId}`}>
                  {Number(itemId) > 4 && (
                  <Button
                    variant="outline-primary"
                  >
                  <FaEdit className="me-2" size="1rem" />
                    ویرایش
                  </Button>
                )}
                </Link>
              </div>
            </div>
          </Col>
          <Col className="mt-2" lg={8}>
            <p className="nazanin fs-5">{articleData.desc}</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Article;