export interface CreateOrderDto {
  data: {
    body: {
      // Informations du client
      customer: {
        name: string;
        email: string;
        address: string;
        city: string;
        state: string;
        zip: string;
        country: string;
      };
      // TODO : Modifier le type en fonction du projet
      // Créatine : creatine-products
      // Poké : poke-products
      // Cookie : cookie-products & topping-products
      products: {
        // IDs des produits
        connect: string[];
      };
    };
  };
}

export interface Order {
  data: {
    // IDs des produits
    // TODO : Modifier le type en fonction du projet
    // Créatine : creatine-products
    // Poké : poke-products
    // Cookie : cookie-products & topping-products
    products: string[];
    // Informations du client
    customer: {
      name: string;
      email: string;
      address: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
  };
}
