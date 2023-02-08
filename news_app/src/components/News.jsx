import React, { useEffect, useState } from "react";
import axios from "axios";  
import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";



export const News = () => {
  const [news, setNews] = useState({});
  const baseAPI =`https://localhost:44301/`
  useEffect(() => {
    axios.get(baseAPI+`api/News/`).then((res) => {
      const news = res.data;
      setNews(news);
    });
  }, []);


  return (
    <MDBContainer className="py-5">
      <MDBRow className="gx-5">
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
                    <img
                      src={baseAPI+`${e.image}`}
                      className="w-100"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </a>
                  </MDBRipple>
                </MDBCol>
                <MDBCol md="6" className="mb-4">
                  <span className="badge bg-danger px-2 py-1 shadow-1-strong mb-3">
                    {e.newsId}
                  </span>
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
