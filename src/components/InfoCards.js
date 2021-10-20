import React, { useState } from "react";
import styled from "styled-components";

export default function({ items }) {
	return (
	  <InfoCards className="cards">
	    {items.map((data, index) => (
	      <div key={index} className="card">
	        {data.imgUrl && (
	          <div className="img">
	            <img src={data.imgUrl} alt={data.title} />
	          </div>
	        )}

	        <div className="content">
	          <div className="title">{data.title}</div>
	          <div dangerouslySetInnerHTML={{ __html: data.text }} />
	        </div>
	      </div>
	    ))}
	  </InfoCards>
	)
}

const InfoCards = styled.div`
  border-top: 1px solid #eee;
  padding: 1em;

  .card + .card {
    margin-top: 1.8em;
  }
  .card {
    padding: 1em;
    box-shadow: 0px 0px 42px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    .img {
    	text-align: center;

	    img {
	      max-width: 100%;
	    }
    }

    .content {
      padding: 10px;

      .title {
        font-size: 23px;
        line-height: 36px;
        color: #265a32;
        font-weight: bold;
      }

      p {
        margin: 6px 0;
      }

      .links {
        margin-top: 1.2em;
        text-align: right;
        a {
          font-size: 41px;
          color: #265a32;
          margin: 10px;
        }
      }
    }
  }
`
