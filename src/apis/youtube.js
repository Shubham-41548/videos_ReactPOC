import axios from 'axios';

const KEY = 'AIzaSyCWDdG2oyEFUDtRTTeG75iFs4mGBmjBlqA';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});