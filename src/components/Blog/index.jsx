import axios from "axios";
import { useEffect, useState } from "react";
import { Link, } from "react-router-dom"; //useHistory
/* The following line can be included in a src/App.scss */

import {Button, Modal} from 'react-bootstrap';
// import Modal from 'react-bootstrap/Modal';

import "./style.scss";

import AddNewBlog from "../AddNewBlog";
// import { data } from "autoprefixer";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (res && res.data && res.data.length > 0) {
          let newDataSimple = res.data.slice(0, 10);
          setData(newDataSimple);
          setLoading(false);
        } else {
          return [];
        }

        // let data = res && res.data ? res.data : [];
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // let history = useHistory();

  const handleAddBlog = (blog) => {
    let newData = data;
    newData.unshift(blog)

    setShow(false);
    setData(newData)
  };

  const deleteBlog = (id) => {
    let dataCure = data;
    dataCure = dataCure.filter(item => item.id !== id)
    setData(dataCure)
  }

  return (
    <>
      <Button variant="primary" className="my-3" onClick={handleShow}>
      + Add new Blog
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddNewBlog handleAddBlog={handleAddBlog}/>
        </Modal.Body>
      </Modal>

      <div className="blog-container">
        {loading === false &&
          data &&
          data.length > 0 &&
          data.map((item) => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">{item.title}</div>
                <div className="content">{item.body}</div>
                <Link to={`/blog/${item.id}`}>View Detail</Link>

                <span className="close" onClick={() => deleteBlog(item.id)}>x</span>
              </div>
            );
          })}

        {loading === true && (
          <h2 style={{ textAlign: "center" }}>Loading... data port</h2>
        )}
      </div>
    </>
  );
};

export default Blog;
