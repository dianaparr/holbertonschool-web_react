const { fromJS } = require('immutable');

function getImmutableObject(object) {
    fromJS(object);
}

export default getImmutableObject;
