import { FIREBASE_URL } from './constants.js';
import { ImageType } from './interfaces';

export const apiGetImages = async (): Promise<string | null> => {
    try {
        const response = await fetch(FIREBASE_URL + 'images.json');
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const apiSetImage = async (imageData: ImageType): Promise<string | null> => {
    try {
        const response = await fetch(FIREBASE_URL + 'images.json', {
            method: 'POST',
            body: JSON.stringify(imageData),
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const apiRemoveImageById = async (imageId: string): Promise<string | null> => {
    try {
        const response = await fetch(`${ FIREBASE_URL }images/${ imageId }.json`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const apiRemoveImages = async (): Promise<string | null> => {
    try {
        const response = await fetch(`${ FIREBASE_URL }images.json`, {
            method: 'DELETE',
        });
        return await response.json();
    } catch (error) {
        console.log(error);
        return null;
    }
};