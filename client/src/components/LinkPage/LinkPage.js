import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DisplayLinks from './DisplayLinks';


const LinkPage = ({ details, setDetails }) => {

  const [linkData, setLinkData] = useState([]);
  const navigate = useNavigate();

  const getLinks = useCallback(async () => {

    try {
      const res = await fetch(`/link-page/${details.id}`, {
        method: "GET",
        headers: {
          'Accept': "application/json",
          // 'Content-Type': 'application/json'  
        }
      })
      const data = await res.json();
      setLinkData(data.data);

    } catch (err) {
      // console.log(err);
    }
  }, [details.id])

  useEffect(() => {

    const session = JSON.parse(sessionStorage.getItem('details'));

    if (details.isLoggedIn === false && session === null) {
      navigate("/please-log-in");
      return 0;
    }

    if (!details.id) {
      const newDetails = {
        email: session.email,
        id: session.id,
        isLoggedIn: true
      }
      setDetails(newDetails);
    }

    getLinks();
  }, [details.id, details.isLoggedIn, setDetails, getLinks, navigate])

  return (
    <>
      <DisplayLinks linkData={linkData} />
    </>
  )
}

export default LinkPage