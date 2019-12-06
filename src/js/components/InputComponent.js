import BaseComponent from './BaseComponent.js';
export default class InputComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTemplate = () => {
            this.component = document.createElement('input');
            this.target.appendChild(this.component);
        };
        this.initTemplate();
    }
}
;
//# sourceMappingURL=InputComponent.js.map