import BaseComponent from './components/BaseComponent';

export interface BaseComponentType {
    id: number,
    target: HTMLElement,
    component: HTMLElement | undefined,
}

export interface GalleryComponentType extends BaseComponent {
    galleryPanel: HTMLElement,
    galleryContainer: HTMLElement,
    input: InputComponentType,
    generateButton: ButtonComponentType,
    clearButton: ButtonComponentType,
    images: object,
}

export interface GalleryCellComponentType extends BaseComponent {
    imageElement: HTMLElement,
    imageTitleElement: HTMLElement,
    removeButton: HTMLElement,
}

export interface InputComponentType extends BaseComponent {
}

export interface ImageComponentType extends BaseComponent {
    title: string,
}

export interface ButtonComponentType extends BaseComponent {
}

export interface ImageType {
    id: number,
    src: string,
}