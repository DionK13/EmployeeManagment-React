import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdb-react-ui-kit";

export const Home = () => {
  const baseAPI = `https://localhost:44301/`;
  const [users, setUsers] = useState({});
  useEffect(() => {
    axios.get(`https://localhost:44301/api/Login/`).then((result) => {
      const newUsers = result.data.users;
      setUsers(newUsers);
    });
  }, []);
  return (
    <>
      <div className='col-xxl-12'>
        {Object.keys(users).map((id, index) => (
          <div className='row'>
            <div className='col-xxl-6 mt-1 text-center'>
              <MDBCard key={index}>
                <div className='d-flex justify-content-center'>
                  <div className='col-xxl-2 text-center'>
                    <MDBCardImage
                      src={baseAPI + `${users[id].img}`}
                      position='top'
                      alt='...'
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <MDBCardBody>
                  <MDBCardTitle> {users[id].name}</MDBCardTitle>
                  <MDBCardText>{users[id].email}</MDBCardText>
                  <MDBBtn href='#'>{users[id].role}</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
