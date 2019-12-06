import { apiGetImages, apiRemoveImageById, apiRemoveImages, apiSetImage, } from '../api.js';
import { PICSUM_URL, random, } from '../constants.js';
import ButtonComponent from './ButtonComponent.js';
import BaseComponent from './BaseComponent.js';
import GalleryCellComponent from './GalleryCellComponent.js';
import ImageComponent from './ImageComponent.js';
import InputComponent from './InputComponent.js';
export default class GalleryComponent extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTemplate = () => {
            this.component = document.createElement('div');
            this.component.classList.add('gallery');
            // define panel
            this.galleryPanel = document.createElement('div');
            this.galleryPanel.classList.add('gallery__panel');
            // define container
            this.galleryContainer = document.createElement('div');
            this.galleryContainer.classList.add('gallery__container');
            // define input
            this.input = new InputComponent({
                id: 'imageAmountInput',
                target: this.galleryPanel,
            });
            // define buttons
            this.generateButton = new ButtonComponent({
                id: 'generateButton',
                target: this.galleryPanel,
                content: 'Generate images',
                onClickHandler: this.generateImages,
            });
            this.clearButton = new ButtonComponent({
                id: 'clearButton',
                target: this.galleryPanel,
                content: 'Clear gallery',
                onClickHandler: this.removeImages,
            });
            // add elements to gallery
            this.galleryPanel.appendChild(this.generateButton.component);
            this.galleryPanel.appendChild(this.clearButton.component);
            this.component.appendChild(this.galleryPanel);
            this.component.appendChild(this.galleryContainer);
            this.target.appendChild(this.component);
        };
        this.getImages = () => {
            apiGetImages()
                .then(response => {
                if (response) {
                    console.log(response);
                    for (let [id, image] of Object.entries(response)) {
                        if (!this.images[id]) {
                            this.images[id] = new ImageComponent({
                                id: id,
                                target: this.component,
                                content: image,
                            });
                        }
                    }
                    this.fillGallery();
                }
            });
        };
        this.fillGallery = () => {
            Object.values(this.images)
                .forEach(imageComponent => {
                if (!document.getElementById(imageComponent.id)) {
                    new GalleryCellComponent({
                        id: imageComponent.id,
                        target: this.galleryContainer,
                        content: imageComponent,
                        onRemove: this.removeImageById,
                    });
                }
            });
        };
        this.generateImages = () => {
            for (let i = 0; i < (this.input.component.value || 5); i++) {
                let id = random(1, 1000).toString();
                let imageData = {
                    id,
                    src: `${PICSUM_URL}id/${id}/200/200`,
                };
                if (!this.images[id]) {
                    this.images[id] = new ImageComponent({
                        id: id,
                        target: this.component,
                        content: imageData,
                    });
                    apiSetImage(imageData)
                        .then(response => {
                        console.log('setImage', response);
                    });
                }
            }
            this.fillGallery();
        };
        this.removeImageById = (imageId) => {
            const confirmation = confirm('Do you want to remove this image?');
            if (confirmation) {
                apiRemoveImageById(imageId)
                    .then(() => {
                    delete this.images[imageId];
                    this.galleryContainer.removeChild(document.getElementById(imageId));
                });
            }
        };
        this.removeImages = () => {
            const confirmation = confirm('Do you want to remove all images?');
            if (confirmation) {
                apiRemoveImages()
                    .then(() => {
                    while (this.galleryContainer.firstChild) {
                        this.galleryContainer.removeChild(this.galleryContainer.firstChild);
                    }
                    this.images = {};
                });
            }
        };
        this.images = {};
        this.initTemplate();
        this.getImages();
    }
}
;
//# sourceMappingURL=GalleryComponent.js.map