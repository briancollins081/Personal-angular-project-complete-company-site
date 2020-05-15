import { NormalPost } from './blog/post';

export const API_URL = `https://afyarekod-blog-api.azurewebsites.net`

export const compareFromLatest = (a: NormalPost, b: NormalPost) => {
    let ad: number = new Date(a.createdAt).getTime();
    let bd: number = new Date(b.createdAt).getTime();
    
    if (ad < bd) {
        return 1;
    }
    if (ad > bd) {
        return -1;
    }
    return 0;
}

export const compareFromOldest = (a: NormalPost, b: NormalPost) => {
    let ad: number = new Date(a.createdAt).getTime();
    let bd: number = new Date(b.createdAt).getTime();
    
    if (ad < bd) {
        return -1;
    }
    if (ad > bd) {
        return 1;
    }
    return 0;
}
