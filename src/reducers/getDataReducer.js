const getDataReducer = (data = { dataList: []}, action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return data['dataList'] = action.payload;
        default: return data;
    }
}

export default getDataReducer;