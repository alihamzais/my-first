import axios from "axios";
import React, { useState,useEffect } from "react";
import Setcard from "./Setcard";

export default function Apicall() {

  const [post, setpost] = useState([]);
  // const [posts, setposts] = useState(1);
  // const btn1 = function()
  // {
  // useEffect(() => {
  // setpost(post+1)
  // },[post])
  // }
  //  const btn2 = function()
  //  {
  //   // setpost(post+1)
  //  }
  let url =
    "https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=b8ba7c6521d14e74957aed6346bf938f";
  useEffect(() => {
    axios
      .get(url)
      .then((value) => {
        setpost(value.data.articles);
        console.log(value);
      })
      .catch((err) => console.log(err));
  }, [setpost]);

///////////////////////////////////////////////
//  fetch(url).then((res) => res.json()).then(val => {
//   setpost(val.articles);
//   console.log(val.articles)})

// console.log(result);
  
  // console.log(post);

  // const btn2 = function()
  // {
  //   console.log("hello","///////////////////");
  // }
  return (
    <>
      <div className="container my-2">
        <h1>My news app</h1>
        <div className="row">
          {post.map((item) => {
            return (
              
              <div className="col-md-4" key={item.url}>
                <Setcard key={item.url}
                  item={item}
                  title={item.title}
                  url={
                    item.urlToImage
                      ? item.urlToImage
                      : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/R6RSMKSJCF7RZ24L363A6QYAIY.jpg&w=1440"
                  }
                  content={
                    item.content
                      ? item.content
                      : "Please visite my website and search any thing"
                  }
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-dark ">
            Previous
          </button>
          <button type="button" className="btn btn-dark">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
