export function saveToStorage(key, data) {
    localStorage.setItem(`${key}`, JSON.stringify(data));
}

export function loadFromStorage(key, arrayName) {
    const savedData = JSON.parse(localStorage.getItem(`${key}`));

    if (savedData && Array.isArray(savedData)) {
        arrayName.push(...savedData);
    } else {
        console.error('No valid data found in localStorage.');
    }
}

export const products = [
    {
        id: '1',
        generationId: '1',
        image: 'images/products/new-arrivals/1.svg',
        name: 'T-Shirt With Tape Details',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 12000
    },
    {
        id: '2',
        generationId: '1',
        image: 'images/products/new-arrivals/2.svg',
        name: 'Skinny Fit Jeans',
        rating: {
            starsImage: 'images/icons/stars/3.5.svg',
            starsQuantity: '3.5'
        },
        price: 24000,
        previousPrice: 26000,
        discount: 20
    },
    {
        id: '3',
        generationId: '1',
        image: 'images/products/new-arrivals/3.svg',
        name: 'Checkered Shirt',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 12000
    },
    {
        id: '4',
        generationId: '1',
        image: 'images/products/new-arrivals/4.svg',
        name: 'Sleeve Striped T-Shirt',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 13000,
        previousPrice: 26000,
        discount: 20
    },
    {
        id: '5',
        generationId: '2',
        image: 'images/products/top-selling/1.svg',
        name: 'Vertical Striped Shirt',
        rating: {
            starsImage: 'images/icons/stars/5.svg',
            starsQuantity: '5.0'
        },
        price: 21200,
        previousPrice: 23200,
        discount: 20
    },
    {
        id: '6',
        generationId: '2',
        image: 'images/products/top-selling/2.svg',
        name: 'Courage Graphic T-Shirt',
        rating: {
            starsImage: 'images/icons/stars/4.svg',
            starsQuantity: '4.0'
        },
        price: 14500
    },
    {
        id: '7',
        generationId: '2',
        image: 'images/products/top-selling/3.svg',
        name: 'Loose Fit Bermuda Shorts',
        rating: {
            starsImage: 'images/icons/stars/3.svg',
            starsQuantity: '3.0'
        },
        price: 8000
    },
    {
        id: '8',
        generationId: '2',
        image: 'images/products/top-selling/4.svg',
        name: 'Faded Skinny Jeans',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 21000
    },
    {
        id: '9',
        generationId: '3',
        image: 'images/products/details/also-like/1.svg',
        name: 'Polo with Contrast Trims',
        rating: {
            starsImage: 'images/icons/stars/4.svg',
            starsQuantity: '4.0'
        },
        price: 21200,
        previousPrice: 26000,
        discount: 20
    },
    {
        id: '10',
        generationId: '3',
        image: 'images/products/details/also-like/2.svg',
        name: 'Gradient Graphic T-shirt',
        rating: {
            starsImage: 'images/icons/stars/3.5.svg',
            starsQuantity: '3.5'
        },
        price: 14500
    },
    {
        id: '11',
        generationId: '3',
        image: 'images/products/new-arrivals/3.svg',
        name: 'Polo with Tipping Details',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '4.5'
        },
        price: 18000
    },
    {
        id: '12',
        generationId: '3',
        image: 'images/products/new-arrivals/4.svg',
        name: 'Black Striped T-shirt',
        rating: {
            starsImage: 'images/icons/stars/4.5.svg',
            starsQuantity: '5.0'
        },
        price: 12000,
        previousPrice: 15000,
        discount: 30
    }
]