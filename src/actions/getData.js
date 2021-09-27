import axios from 'axios';

export const getAllData = (json) => {
    return {
        type: "GET_DATA",
        payload: json.data
    }
}

export const getAllDataFail = (err) => {
    return {
        type: "ERROR",
        payload: err
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(getAllData());
        return axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then(response => {
                        dispatch(getAllData(response.data))
                    })
                    .catch (err => {
                        dispatch(getAllDataFail)
                    })
    }
}