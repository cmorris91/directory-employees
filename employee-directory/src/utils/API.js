import axios from "axios";

//const BASEURL = "https://randomuser.me/api/?results=50";

// Export an object with a "search" method that searches the Giphy API for the passed query

export default {
    getData: () =>
    axios({
        'method':'GET',
        'url':'https://randomuser.me/api/?results=50',
        'headers': {
            'content-type':'application/JSON'
        },
    })
  };