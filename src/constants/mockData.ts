
export const images = [
    {
        id: 655,
        answer: 2,
        options: [
            {
                value: 1,
                text: 'Mavi Uçak',
                is_correct: false,
            },
            {
                value: 2,
                text: 'Mavi Araba',
                is_correct: true,
            },
        ],
    },
    {
        id: 0,
        answer: 1,
        options: [
            {
                value: 1,
                text: 'Laptop',
                is_correct: false,
            },
            {
                value: 2,
                text: 'Spiderman',
                is_correct: true,
            },
        ],
    },
    {
        id: 53,
        answer: 2,
        options: [
            {
                value: 1,
                text: 'Deniz',
                is_correct: false,
            },
            {
                value: 2,
                text: 'Gökyüzü',
                is_correct: true,
            },
        ],
    },
    {
        id: 58,
        answer: 2,
        options: [
            {
                value: 1,
                text: 'Gemi',
                is_correct: false,
            },
            {
                value: 2,
                text: 'Deniz Feneri',
                is_correct: true,
            },
        ],
    },
    {
        id: 63,
        answer: 1,
        options: [
            {
                value: 1,
                text: 'Bir Fincan Kahve',
                is_correct: true,
            },
            {
                value: 2,
                text: 'Elma',
                is_correct: false,
            },
        ],
    },
].map(image => ({
    ...image,
    download_url: `https://picsum.photos/id/${image.id}/300/200`,
}));

