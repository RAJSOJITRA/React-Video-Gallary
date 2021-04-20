import Axios from 'axios';

const KEY = 'AIzaSyBIj-ok2aVmO2ubZTMF1tPgp8a5VEuUhdQ';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key : KEY
    }
});

