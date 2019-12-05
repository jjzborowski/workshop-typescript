import { FIREBASE_URL } from './constants.js';
import { ImageType } from './interfaces';

export const apiGetImages = async () => {
    try {
        const response = await fetch(FIREBASE_URL + 'images.json');
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const apiSetImage = async (imageData: ImageType) => {
    try {
        const response = await fetch(FIREBASE_URL + 'images.json', {
            method: 'POST',
            body: JSON.stringify(imageData),
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const apiRemoveImageById = async (imageId: number) => {
    try {
        const response = await fetch(`${ FIREBASE_URL }images/${ imageId }.json`, {
            method: 'DELETE',
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const apiRemoveImages = async () => {
    try {
        const response = await fetch(`${ FIREBASE_URL }images.json`, {
            method: 'DELETE',
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
};