import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Details.css';
import BouncingDotLoader from '../Loader/BouncingDotLoader.jsx'
const URL = import.meta.env.VITE_DETAILS_URL;

export default function Details(props) {
    const [details, setDetails] = useState({ details: {} });
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      if (props.selected) {
        axios.get(`${URL + props.selected + '.json'}`)
          .then(res => setDetails(res.data))
          .then(res => setLoading(false))
          return () => {
            setDetails(null);
            setLoading(true);
          }
      }
    }, [props.selected]);
  
    return (
      props.selected !== 0 && (
        <div className="details">
            {loading ? <BouncingDotLoader /> : null}
            {details && (
                <img className="details-img" src={details.avatar + `${'?img=' + props.selected}`} alt="user avatar" />
            )}
            {details && (
                <div className="details-text">
                    <div className="details-text-item details-text-title">{details.name}</div>
                    <div className="details-text-item">City: {details.details.city}</div>
                    <div className="details-text-item">Company: {details.details.company}</div>
                    <div className="details-text-item">Position: {details.details.position}</div>
                </div>
            )}
        </div>
      )
    );
  }