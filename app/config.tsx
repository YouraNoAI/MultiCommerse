const Configurations = {
    APIs_URL: "http://localhost:3001/",


    handleSubmit: async (e: any) => {
        e.preventDefault();
    },

    insertProduct: async (data: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/insertProduct`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    },

    getProduct: async () => {
        const response = await fetch(`${Configurations.APIs_URL}/getProduct`);
        const data = await response.json();
        return data;
    },

    updateProduct: async (data: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/updateProduct`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    },

    deleteProduct: async (data: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/deleteProduct`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    },

    searchProduct: async (data: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/searchProduct`, {
            method: "POST",
            body: JSON.stringify(data)
        });
    },

    getProductByID: async (id: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/getProductByID/${id}`);
        const data = await response.json();
        return data;
    },

    getProductByCategory: async (category: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/getProductByCategory/${category}`);
        const data = await response.json();
        return data;
    },

    getProductByPrice: async (price: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/getProductByPrice/${price}`);
        const data = await response.json();
        return data;
    },

    getProductByStock: async (stock: any) => {
        const response = await fetch(`${Configurations.APIs_URL}/getProductByStock/${stock}`);
        const data = await response.json();
        return data;
    }

};

export default Configurations;