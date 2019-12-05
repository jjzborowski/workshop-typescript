import { InputComponentType } from '../interfaces';
import BaseComponent from './BaseComponent.js';

export default class InputComponent extends BaseComponent implements InputComponentType{
    constructor(props: any) {
        super(props);
        this.initTemplate();
    }

    initTemplate = () => {
        this.component = document.createElement('input');
        this.target.appendChild(this.component);
    };
};