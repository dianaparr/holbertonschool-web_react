const { fromJS } = require('immutable');

let getImmutableObject = (object) =>
    fromJS(object);

export default getImmutableObject;
