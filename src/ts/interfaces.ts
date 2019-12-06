import BaseComponent from './components/BaseComponent';

export interface BaseComponentType {
    id: string,
    target: HTMLElement,
    component: HTMLElement,
}

export interface GalleryImagesTypes {
    [key: string]: ImageComponentType,
}

export interface GalleryComponentType extends BaseComponent {
    galleryPanel: HTMLElement,
    galleryContainer: HTMLElement,
    input: InputComponentType,
    generateButton: ButtonComponentType,
    clearButton: ButtonComponentType,
    images: GalleryImagesTypes,
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
    id: string,
    src: string,
}