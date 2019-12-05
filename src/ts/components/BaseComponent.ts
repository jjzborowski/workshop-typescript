import { BaseComponentType } from '../interfaces';

export default class BaseComponent implements BaseComponentType {
    id: number;
    target: HTMLElement;
    component: HTMLElement | undefined;

    constructor(props: any) {
        this.id = props.id;
        this.target = props.target;
        this.component = undefined;
    }
}