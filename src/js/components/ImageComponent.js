var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import BaseComponent from './BaseComponent.js';
var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initTemplate = function (_a) {
            var content = _a.content;
            _this.component = document.createElement('img');
            _this.component.setAttribute('src', content.src);
            _this.target.appendChild(_this.component);
        };
        _this.title = props.content.id;
        _this.initTemplate(props);
        return _this;
    }
    return ImageComponent;
}(BaseComponent));
export default ImageComponent;
;
//# sourceMappingURL=ImageComponent.js.map