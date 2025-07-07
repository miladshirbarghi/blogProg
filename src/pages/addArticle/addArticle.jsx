import { Container } from "react-bootstrap";
import NavBar from "../../components/navBar/navBar";
import "./addArticle.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router-dom";

function AddArticle() {
  const [titleState, setTitleState] = useState('');
  const [descState, setDescState] = useState('');
  const [imgState, setImgState] = useState('');

  const navigate = useNavigate()


  const resetFormData = () => {
    setTitleState('');
    setDescState('');
    setImgState('');
  };

  const addArticleHandler = async (e) => {
    e.preventDefault();

    if (!titleState || !descState || !imgState) {
    Swal.fire({
      title: 'لطفاً تمام فیلدها را پر کنید',
      icon: 'warning',
      timer: 2000,
      timerProgressBar: true
    });
    return;
    }

    axios.post('http://localhost:5000/articles', {
      title: titleState,
      desc: descState,
      img: imgState,
    })
    .then(response => {
      if (response.status === 201) {
        Swal.fire({
          title: 'مقاله جدید با موفقیت ساخته شد',
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          icon: 'success'
        });
        resetFormData();
      }
      navigate('/')
    })
    .catch(error => {
      if (error.response && error.response.status === 404) {
        Swal.fire({
          title: 'مقاله ساخته نشد',
          timer: 2000,
          icon: 'error',
          timerProgressBar: true,
          showCloseButton: true
        });
      } else {
        Swal.fire({
          title: 'خطای ناشناخته',
          text: error.message,
          icon: 'error'
        });
      }
    });
  };

  return (
    <>
      <NavBar />
      <Container>
        <Form className="m-3" onSubmit={addArticleHandler}>
          <Form.Group>
            <Form.Label>عنوان کوتاه</Form.Label>
            <Form.Control
              onChange={e => setTitleState(e.target.value)}
              value={titleState}
              className="mb-3"
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
            <Form.Label>توضیح مقاله</Form.Label>
            <Form.Control
             as="textarea"
             rows={6}
             onChange={e => setDescState(e.target.value)}
             value={descState}
             className="mb-3"
            placeholder="توضیح مقاله را وارد کنید"
            />
            <Form.Label>عکس مقاله</Form.Label>
            <Form.Control
              onChange={e => setImgState(e.target.value)}
              value={imgState}
              className="mb-2"
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Button className="my-3" style={{ backgroundColor: '#607D8B', border: "none" }} type="submit">
            ساخت مقاله
          </Button>
        </Form>
      </Container>
    </>
  );
}

export default AddArticle;
