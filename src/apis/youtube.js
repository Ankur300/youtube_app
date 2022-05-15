import axios from "axios";

const KEY = "AIzaSyCM-lDVcygg4XFqgp9FB7o4k-jIHiPdZa4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
