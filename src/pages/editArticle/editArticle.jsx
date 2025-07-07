import { useParams, useNavigate } from "react-router-dom";
import "./EditArticle.css";
import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/navBar/navBar";
import { Form, Container, Button } from "react-bootstrap";
import Swal from "sweetalert2";

function EditArticle() {
  const itemId = useParams().articleId;
  const navigate = useNavigate();

  const [articleData, setArticleData] = useState({
    title: "",
    desc: "",
    img: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles/${itemId}`)
      .then((response) => {
        setArticleData(response.data);
      })
      .catch((error) => console.error("خطا در دریافت مقاله:", error));
  }, [itemId]);

  const formHandler = (e) => {
    setArticleData({...articleData , [e.target.name] : [e.target.value]})
  };

  const editArticleHandler = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/articles/${itemId}`, articleData)
      .then(() => {
        Swal.fire({
          title: "مقاله با موفقیت ویرایش شد",
          icon: "success",
          confirmButtonText: "باشه",
        }).then(() => {
          navigate("/");
        });
      })
      .catch((error) => console.error("خطا در ویرایش مقاله:", error));
  };

  return (
    <>
      <NavBar />
      <Container>
        <Form className="m-3" onSubmit={editArticleHandler}>
          <Form.Group>
            <Form.Label>عنوان کوتاه</Form.Label>
            <Form.Control
              name="title"
              onChange={formHandler}
              value={articleData.title}
              className="mb-3"
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />

            <Form.Label>توضیح مقاله</Form.Label>
            <Form.Control
              name="desc"
              as="textarea"
              rows={6}
              onChange={formHandler}
              value={articleData.desc}
              className="mb-3"
              placeholder="توضیح مقاله را وارد کنید"
            />

            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              name="img"
              onChange={formHandler}
              value={articleData.img}
              className="mb-2"
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Button
            className="my-3"
            style={{ backgroundColor: "#607D8B", border: "none" }}
            type="submit"
          >
            ویرایش مقاله
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default EditArticle;
