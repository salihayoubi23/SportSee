import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import { fetchUserData } from '../Service/Service';

function User() {
  const userId = useParams();
  const [userData, setUserData] = useState(null);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchUserData(userId.id);
        setUserData(data);
      } catch (error) {
        console.error(error);
        setRedirect(true);
      }
    }

    if (userId.id !== '12' && userId.id !== '18') {
      setRedirect(true);
    } else {
      fetchData();
    }
  }, [userId.id]);

  let navId = userId.id === '18' ? 12 : 18;

  return (
    <>
      {redirect && <Navigate to="/page-d-erreur" />}
      <Header props={navId} />
      {userData ? (
        <Main userData={userData} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default User;
