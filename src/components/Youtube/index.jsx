import "./style.scss";
import { useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const Youtube = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");


  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "10",
        key: "AIzaSyAEOCOilmXFZo1nzWwlg9surNbZQ7-dM8c",
        q: query,
      },
    });

    console.log(">> Check res", res.data);

    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];

      if (raw && raw.length > 0) {
        result = raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          return object;
        });
      }

      setVideos(result);
    }
  };

  return (
    <div className="youtube-container">
      <div className="youtube-search">
        <input
          type="text"
          value={query}
          placeholder="Tìm kiếm ..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item, index) => {
          return (
            <div className="yt-result" key={index}>
              <div className="left">
                <iframe
                  className="ifram-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">Author: {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Youtube;
