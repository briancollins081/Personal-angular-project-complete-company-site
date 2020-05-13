export interface NormalPost{
    _id: string;
    author_title: string;
    author_fname: string;
    author_lname: string;
    author_email: string;
    post_title: string;
    post_category: string;
    post_content: string;
    post_image_url: string;
    creator: string;
    createdAt: string;
    updatedAt: string;

    introduction?:string;
}