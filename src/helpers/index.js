const getPayloadWithValidFieldsOnly = (validFields, payload) =>
    Object.entries(payload).reduce(
        (acc, [key, value]) =>
        validFields.includes(key) ? {...acc, [key]: value } : acc, {}
    );

const mergeArrayObjects = (arr1, arr2) => {
    return arr1.map((item, i) => {
        if (item.id === arr2[i].userId) {
            //merging two objects
            return Object.assign({}, item, arr2[i]);
        }
    });
};

module.exports = {
    getPayloadWithValidFieldsOnly,
    mergeArrayObjects,
};