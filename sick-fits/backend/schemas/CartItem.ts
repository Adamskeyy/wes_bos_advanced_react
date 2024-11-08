import { list } from '@keystone-next/keystone/schema';
import { text, password, relationship, integer } from '@keystone-next/fields';

export const CartItem = list({
  ui: {
    listView: {
      initialColumns: ['product', 'quantity', 'user'],
    },
  },
  fields: {
    quantity: integer({ defaultValue: 1, isRequired: true }),
    product: relationship({ ref: 'Product' }),
    user: relationship({ ref: 'User.cart' }),
  },
});
