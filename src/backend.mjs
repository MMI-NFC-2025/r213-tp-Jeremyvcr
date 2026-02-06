import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export async function getOffres() {
    return pb.collection('Maison').getFullList({
        sort: '-created',
    });
}

export function getImageUrl(record, imageField) {
    if (!record || !imageField) {
        return "";
    }

    return pb.files.getUrl(record, imageField);
}
