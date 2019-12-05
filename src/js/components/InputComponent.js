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
var InputComponent = /** @class */ (function (_super) {
    __extends(InputComponent, _super);
    function InputComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initTemplate = function () {
            _this.component = document.createElement('input');
            _this.target.appendChild(_this.component);
        };
        _this.initTemplate();
        return _this;
    }
    return InputComponent;
}(BaseComponent));
export default InputComponent;
;
//# sourceMappingURL=InputComponent.js.map