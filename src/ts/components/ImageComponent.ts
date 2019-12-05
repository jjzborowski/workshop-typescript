import { ImageComponentType } from '../interfaces';
import BaseComponent from './BaseComponent.js';

export default class ImageComponent extends BaseComponent implements ImageComponentType {
    title: string;

    constructor(props: any) {
        super(props);
        this.title = props.content.id;
        this.initTemplate(props);
    }

    initTemplate = ({ content }: any) => {
        this.component = document.createElement('img');
        this.component.setAttribute('src', content.src);
        this.target.appendChild(this.component);
    };
};