export interface Post {
    id: number;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
}

export const POSTS: Post[] = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum.',
        image: '../assets/product1.jpg',
    },
    {
        id: 2,
        title: 'abc',
        shortDescription: 'abc consectetur adipisicing elit abc',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum.',
        image: '../assets/product2.jpg',
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet',
        shortDescription: 'Lorem ipsum dolor sit amet abc',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum.',
        image: '../assets/product3.jpg',
    },
    {
        id: 4,
        title: 'abc',
        shortDescription: 'Lorem ipsum dolor sit amet consectetur',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, cupiditate voluptatem quisquam maxime eligendi nobis, temporibus modi eum eveniet sapiente repudiandae? In, blanditiis! Sequi nisi alias ab ex enim eum.',
        image: '../assets/product4.jpg',
    }
]