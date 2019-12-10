import axios from 'axios';
import { BASE_URL } from '../Constant/constant'

const callApi_get = async function go(url, token) {
    return (await axios.get(url, { headers: { 'authorization': 'Bearer' + " " + token } }))
};

const callApiDelete = async function go(url, token) {
    return (await axios.delete(
        URL,
        {
            headers: {
                Authorization: { 'authorization': 'Bearer' + " " + token }
            }
        }
    ))
}

const callApi_post = async function go(url, pram, token) {
    return (await axios.post(url, JSON.stringify(pram), {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Authorization': 'Bearer' + " " + token
        },
        crossDomain: true
    }))
};


const callApi_postImage = async function go(urlname, pram, token) {
    let url = BASE_URL + urlname;
    return (await axios.post(url, pram, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + token
        },
        crossDomain: true
    }))

};

const call_Post_by_URI = (uri, collection, token, callback) => {
    var url = BASE_URL + uri;
    callApi_post(url, collection, token).then(res => {
        var respdata = res.data;
        if (callback) {
            callback(respdata);
        }
    })
        .catch(function (error) {
            if (callback) {
                callback(error.response);
            }
        })
}


const call_get_with_uri_param = (uri_with_param, token, callback) => {

    let url = BASE_URL + uri_with_param;
    callApi_get(url, token).then(res => {
        var respdata = res.data;
        if (callback) {
            callback(respdata);
        }
    })
        .catch(function (error) {
            if (callback) {
                callback(error.response);
            }
        })
}

const call_delete_with_uri_param = (uri_with_param, token, callback) => {

    let url = BASE_URL + uri_with_param;
    callApiDelete(url, token).then(res => {
        var respdata = res.data;
        if (callback) {
            callback(respdata);
        }
    })
        .catch(function (error) {
            if (callback) {
                callback(error.response);
            }
        })
}

export { callApi_get, callApi_post, callApi_postImage, call_Post_by_URI, call_get_with_uri_param, call_delete_with_uri_param };