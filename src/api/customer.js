import axios from 'axios';


// baseURL: 'http://192.168.1.6/selfcheckout' => Local API Server 
// baseURL: 'http://3.26.48.152/selfcheckout' => AWS API server
export default axios.create({
    baseURL: 'http://3.26.48.152/selfcheckout'
});
