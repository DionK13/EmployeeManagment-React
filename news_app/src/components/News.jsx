import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { EditNews } from "./EditNews";

export const News = () => {
  const [news, setNews] = useState({});
  const baseAPI = `https://localhost:44301/`;

  useEffect(() => {
    axios.get(baseAPI + `api/News/`).then((res) => {
      const news = res.data;
      setNews(news);
    });
  }, []);

  const navigateCreate = () => {
    <Navigate to="/createNews" />;
  };
  const handleDelete = async (e) => {
    let result = await axios.delete(
      "https://localhost:44301/api/News/" + `${e}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };
  const handleEdit = async (e) => {
    const result = await axios.get(
      "https://localhost:44301/api/News/" + `${e}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const news = {
      id: result.data.newsId,
      image: result.data.image,
      title: result.data.title,
      description: result.data.description,
    };
    console.log(news)
    return <EditNews news={news} />;
  };
  
  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5">
        <div className="col-xxl-12">
          <div className="col-md-2 py-2">
            <Button>
              <Link
                className="nav-link"
                onClick={navigateCreate}
                to="/createNews"
              >
                Create News
              </Link>
            </Button>
          </div>
        </div>
        {news?.status === "Accepted" ? (
          news.newsList.map((e, index) => (
            <MDBCol md="10" key={index}>
              <MDBRow className="gx-5">
                <MDBCol md="6" className="mb-4">
                  <MDBRipple
                    className="bg-image hover-overlay ripple shadow-2-strong rounded-5"
                    rippleTag="div"
                    rippleColor="light"
                  >
                    <img src={baseAPI + `${e.image}`} className="w-100" />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6" className="mb-4">
                  <Link
                    className="badge bg-primary px-2 py-1 shadow-1-strong mb-3"
                    onClick={() => handleEdit(e.newsId)}
                    to="/editNews"
                  >
                    Edit
                  </Link>
                  <Button
                    className="badge bg-danger px-2 py-1 shadow-1-strong mb-3"
                    value={e.newsId}
                    onClick={(event) => handleDelete(event.target.value)}
                  >
                    Delete
                  </Button>
                  <h4>
                    <strong>{e.title}</strong>
                  </h4>
                  <p className="text-muted">{e.description}</p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          ))
        ) : (
          <p>Loading</p>
        )}
      </MDBRow>
    </MDBContainer>
  );
};
