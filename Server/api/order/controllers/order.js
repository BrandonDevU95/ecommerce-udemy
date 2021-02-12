"use strict";
const stripe = require("stripe")(
  "sk_test_51IJsynJVumg5aiWAfgLo2yqo18bW62m0LMp3taBUL2RxOxBG13avrCB290WvKh1co95kLHvl5AC1JEuAMg8fwgSR00mUrIgcW2"
);
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async create(ctx) {
    const { token, products, idUser, addressShipping } = ctx.request.body;
    let totalPayment = 0;
    products.forEach(products, (product) => {
      totalPayment = totalPayment + product.price;
    });

    const charge = await stripe.charge.create({
      amount: totalPayment * 100,
      currency: "USD",
      source: token.id,
      description: `ID Usuario ${idUser}`,
    });

    const createOrder = [];
    for await (const product of products) {
      const data = {
        game: product.id,
        user: idUser,
        totalPayment,
        idPayment: charge.id,
        addressShipping,
      };
      const validData = await createStrapi.entityValidator.validateEntity(
        strapi.models.order,
        data
      );
      const entry = await strapi.query("order").create(validData);
      createOrder.push(entry);
    }
    return createOrder;
  },
};
