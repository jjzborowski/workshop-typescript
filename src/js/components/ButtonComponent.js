import BaseComponent from './BaseComponent.js';
export default class ButtonComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTemplate = ({ content, onClickHandler }) => {
            this.component = document.createElement('button');
            this.component.innerText = content;
            this.component.addEventListener('click', onClickHandler);
            this.target.appendChild(this.component);
        };
        this.initTemplate(props);
    }
}
;
//# sourceMappingURL=ButtonComponent.js.map