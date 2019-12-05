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
var ButtonComponent = /** @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.initTemplate = function (_a) {
            var content = _a.content, onClickHandler = _a.onClickHandler;
            _this.component = document.createElement('button');
            _this.component.innerText = content;
            _this.component.addEventListener('click', onClickHandler);
            _this.target.appendChild(_this.component);
        };
        _this.initTemplate(props);
        return _this;
    }
    return ButtonComponent;
}(BaseComponent));
export default ButtonComponent;
;
//# sourceMappingURL=ButtonComponent.js.map