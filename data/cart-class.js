class Cart {
    cartItem;
    localStorageKey;

    constructor(localStorageKey) {
        this.localStorageKey =localStorageKey;
        this.loadFromStorage()
    }

    loadFromStorage() {
        this.cartItem = JSON.parse(localStorage.getItem(this.localStorageKey))

        if (!this.cartItem) {
            this.cartItem = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionID: '1'
            },
            {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionID: '2'
            }]
        }
    }


    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItem))
    }

    addToCart(productId) {
        let matchingItem
        this.cartItem.forEach(cartItem => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        }
        else {
            this.cartItem.push({
                productId: productId,
                quantity: 1,
                deliveryOptionID: '1'
            })
        }

        this.saveToStorage()
    }

    removeFromCarrt(productId) {
        const newCart = [];

        this.cartItem.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItem = newCart

        this.saveToStorage()
    }
    updateDeliveryOption(productId, deliveryOptionID) {
        let matchingItem
        this.cartItem.forEach(cartItem => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem
            }
        });
        matchingItem.deliveryOptionID = deliveryOptionID

        this.saveToStorage()
    }
}

const cart = new Cart("cart-oop")
const bussinessCart = new Cart("cart-bussiness")

console.log(cart);
console.log(bussinessCart);

