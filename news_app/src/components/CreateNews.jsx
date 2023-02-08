import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";

export const CreateNews = () => {
  const [newsDecription, setNewsDecription] = useState("");
  const [newsTitle, setNewsTitle] = useState("");
  const [newsImg, setNewsImg] = useState("");
  function handleChange(event) {
    // console.log(event.target.files[0]);
    setNewsImg(event.target.files[0]);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const dataForm = new FormData();
      dataForm.append("Description", newsDecription);
      dataForm.append("Title", newsTitle);
      dataForm.append("Image", newsImg);
      const response = await axios.post(
        "https://localhost:44301/api/News",
        dataForm,
        {
          headers: {
            "Content-Type": "multipart/data-form",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='container'>
        <div className='card'>
          <div className='card-header'>
            <h3 className='fs-5'>Create News</h3>
          </div>
          <div className='card-body'>
            <div className='row'>
              <div className='col-xxl-12'>
                <input
                  type='text'
                  value={newsTitle}
                  onChange={(event) => setNewsTitle(event.target.value)}
                />
              </div>
              <div className='col-xxl-12 mt-1'>
                <input
                  type='text'
                  aria-rowspan='5'
                  value={newsDecription}
                  onChange={(event) => setNewsDecription(event.target.value)}
                />
              </div>
              <div className='col-xxl-12 mt-1'>
                <input type='file' onInput={(event) => handleChange(event)} />
              </div>
            </div>
            <Button className='btn btn-primary mt-2' type='submit'>
              Ruaj
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
