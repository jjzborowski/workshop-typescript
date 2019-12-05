export var FIREBASE_URL = 'https://frontend-workshop.firebaseio.com/zborowski/';
export var PICSUM_URL = "https://picsum.photos/";
export var random = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
//# sourceMappingURL=constants.js.map