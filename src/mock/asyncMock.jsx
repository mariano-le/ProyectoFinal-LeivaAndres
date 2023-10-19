const products = [
    {
        id: '1',
        name: 'Muzzarella',
        price: 3000,
        category: 'pizzas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/08/pizza-muzarella.png',
        stock: 10,
        description: 'Salsa de tomate, muzzarella, orégano y aceitunas.'
    },
    {
        id: '2',
        name: 'Napolitana',
        price: 3200,
        category: 'pizzas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/08/pizza-napo.png',
        stock: 8,
        description: 'Salsa de tomate, muzzarella, jamón, rodajas de tomate, orégano y aceitunas.'
    },    
    {
        id: '3',
        name: 'Roquefort',
        price: 3400,
        category: 'pizzas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/08/Pizza-Roquefort.png',
        stock: 6,
        description: 'Salsa de tomate, roquefort, muzzarella, orégano y aceitunas.'
    },    
    {
        id: '4',
        name: 'Jamón Crudo',
        price: 3600,
        category: 'pizzas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/08/Pizza-Jamon-Crudo.png',
        stock: 6,
        description: 'Salsa de tomate, muzzarella, jamón crudo, orégano y aceitunas.'
    },    
    {
        id: '5',
        name: 'Calabresa',
        price: 3600,
        category: 'pizzas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/08/pizza-calabresa.png',
        stock: 5,
        description: 'Salsa de tomate, muzzarella y longaniza.'
    },    
    {
        id: '6',
        name: 'Fugazzeta',
        price: 3400,
        category: 'pizzas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/08/Fugazzeta.png',
        stock: 5,
        description: 'Muzzarella, cebolla, orégano y aceitunas.'
    },    
    {
        id: '7',
        name: 'Clásica',
        price: 2000,
        category: 'hamburgesas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/12/hambur-simple.png',
        stock: 15,
        description: 'Burger, tomate, lechuga, queso y mayonesa.'
    },   
    {
        id: '8',
        name: 'Americana',
        price: 2400,
        category: 'hamburgesas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/12/hambur-americana.png',
        stock: 10,
        description: 'Burger, tomate, lechuga, cebolla morada, morrón, queso, chimi y mayonesa.'
    },    
    {
        id: '9',
        name: 'Criolla',
        price: 2500,
        category: 'hamburgesas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/12/hambur-criolla.png',
        stock: 10,
        description: 'Burger, tomate, lechuga, cebolla caramelizada, panceta, queso, salsa bbq y mayonesa.'
    },    
    {
        id: '10',
        name: 'Fritas clásicas',
        price: 1000,
        category: 'papas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/09/papas-fritas.png',
        stock: 20,
        description: 'Papas fritas clásicas sin agregados.'
    },    
    {
        id: '11',
        name: 'Fritas con cheddar y bacon',
        price: 1400,
        category: 'papas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/09/papas-con-cheddar-y-bacon.png',
        stock: 15,
        description: 'Papas fritas clásicas con agregado de queso cheddar y bacon.'
    },    
    {
        id: '12',
        name: 'Fritas con huevo',
        price: 1200,
        category: 'papas',
        img: 'https://betos.com.ar/wp-content/uploads/2019/09/papas-con-huevo.png',
        stock: 18,
        description: 'Papas fritas clásicas con agregado de huevo picado.'
    },    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}