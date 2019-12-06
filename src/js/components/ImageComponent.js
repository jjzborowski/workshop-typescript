import BaseComponent from './BaseComponent.js';
export default class ImageComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTemplate = ({ content }) => {
            this.component = document.createElement('img');
            this.component.setAttribute('src', content.src);
            this.target.appendChild(this.component);
        };
        this.title = props.content.id;
        this.initTemplate(props);
    }
}
;
//# sourceMappingURL=ImageComponent.js.map