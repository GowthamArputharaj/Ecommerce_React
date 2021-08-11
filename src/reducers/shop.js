const initialShopData = {
  categories: [
    {
      id: 1,
      category_title: 'Dairy Products',
      category_quantity: '3',
      category_description: 'Milk, Skim Milk, Cheese, Paneer, Eggs, Yogur...',
      products: [
        {
          id: 1, name: 'Blue tetra-pack', description: 'Sundried tomatoes, Olives, Double cheese, cottage cheese, basil lea...', cart_qty: 0, is_veg: true, available_quantity: [
            { id: 1, actual_price: 68, selling_price: 61, tags: ['12%off', 'Buy 1, Get 1'], qty: '1 Liter', cart_qty: 0, isSelected: true, },
          ]
        },
        {
          id: 2, name: 'Amul tetra-pack', description: 'Sundried tomatoes, Olives, Double cheese, cottage cheese, basil lea...', cart_qty: 0, is_veg: false, available_quantity: [
            { id: 4, actual_price: 24, selling_price: 20, tags: ['12%off'], qty: '250 ml', cart_qty: 0, isSelected: false, },
            { id: 5, actual_price: 46, selling_price: 39, tags: ['12%off'], qty: '500 ml', cart_qty: 0, isSelected: true, },
            { id: 6, actual_price: 68, selling_price: 61, tags: ['Buy 1, Get 1'], qty: '1 Liter', cart_qty: 0, isSelected: false, },
          ]
        },
        {
          id: 3, name: 'Tropicana Orange Juice', description: 'Sundried tomatoes, Olives, Double cheese, cottage cheese, basil lea...', cart_qty: 0, is_veg: true, available_quantity: [
            { id: 7, actual_price: 68, selling_price: 61, tags: ['12%off'], qty: '1 Liter', cart_qty: 0, isSelected: true, },
          ]
        },
      ],
    },
    {
      id: 2,
      category_title: 'Juices & Beverges',
      category_quantity: '3',
      category_description: 'Orange Juice, Apple nectar,  Squash, Rooh haf...',
      products: [
        {
          id: 4, name: 'Amul Taaza Milk', description: 'Sundried tomatoes, Olives, Double cheese, cottage cheese, basil lea...', cart_qty: 0, is_veg: false, available_quantity: [
            { id: 8, actual_price: 68, selling_price: 61, tags: ['12%off'], qty: '1 Liter', cart_qty: 0, isSelected: true, },
          ]
        },
        {
          id: 5, name: 'Amul Gold Milk', description: 'Sundried tomatoes, Olives, Double cheese, cottage cheese, basil lea...', cart_qty: 0, is_veg: false, available_quantity: [
            { id: 9, actual_price: 84, selling_price: 84, tags: ['Buy 1, Get 1'], qty: '1 Liter', cart_qty: 0, isSelected: true, },
          ]
        },
        {
          id: 6, name: 'Amul Lactose free', description: 'Sundried tomatoes, Olives, Double cheese, cottage cheese, basil lea...', cart_qty: 0, is_veg: true, available_quantity: [
            { id: 10, actual_price: 68, selling_price: 61, tags: ['6%off', 'Buy 1, Get 1'], qty: '1 Liter', cart_qty: 0, isSelected: true, },
          ]
        },
      ],
    },
  ],
  addresses: [
    { id: 1, name: 'Saurabh Sharma', isSelected: true, houseNo: 'F-1174', streetLocality: 'Suresh Marg, CScheme', city: 'Jaipur', pincode: '302001', address_value: 'F-1174, Suresh Marg, CScheme, Jaipur, 302001', phone: '9560355887', saveForOtherShop: false, },
    { id: 2, name: 'Saurabh Sharma - II', isSelected: false, houseNo: 'F-2274', streetLocality: 'Suresh Marg - II, CScheme', city: 'Jaipur', pincode: '302001', address_value: 'F-2274, Suresh Marg, CScheme, Jaipur, 302001', phone: '7560355887', saveForOtherShop: false, },
  ],
  // cart_details: {
  //   cart_total_value: 1924,
  //   cart_saving_value: 282,
  //   cart_coupon_code: '',
  //   cart_coupon_saving_value: 100,
  //   cart_shipping_value: 282,
  //   cart_payable_value: 1624,
  //   total_cart_items: 11,
  // },
  cart_details: {
    cart_total_value: 0,
    cart_saving_value: 0,
    cart_coupon_code: '',
    cart_coupon_saving_value: 0,
    cart_shipping_value: 0,
    cart_payable_value: 0,
    total_cart_items: 0,
  },
  coupon_value: '',
  languages: [
    { id: 1, name: 'English', isSelected: false },
    { id: 2, name: 'हिंदी', isSelected: true },
  ],
  outlets: [
    { id: 1, name: 'Pizza Estd , C-scheme', address: 'A-41, near deer park, C-scheme', timing: '10 AM to 10 PM', phone: "+91 987654321", isSelected: true, },
    { id: 2, name: 'Pizza Estd, Malviya Nagar', address: 'B-341, Calgiri road, Malviya Nagar', timing: '10 AM to 10 PM', phone: "+91 123456789", isSelected: false, },
  ],
  selectedLanguage: 'hindi',
  customize_products: [
    { id: 1, product_id: "1", product_name: "Amul Taaza Milk", total: 0, categories: [
      { id: 1, category_title: 'Choice of Base', is_multi_selectable: false, choices: [
          { id: 1, title: "10 inches", price: 0, is_veg: true, isSelected: true },
          { id: 2, title: "12 inches", price: 140, is_veg: true, isSelected: false },
          { id: 3, title: "14 inches", price: 240, is_veg: true, isSelected: false },
        ]
      },
      { id: 2, category_title: "Choice of Breads", is_multi_selectable: false, choices: [
          { id: 4, title: "Plain Bread", price: 0, is_veg: true, isSelected: false },
          { id: 5, title: "Multigrain Base", price: 20, is_veg: true, isSelected: true },
          { id: 6, title: "Cheese treated", price: 40, is_veg: true, isSelected: false },
        ]
      },
      { id: 3, category_title: "Choice of Toppings", is_multi_selectable: true, choices: [
          { id: 7, title: "Extra cheese", price: 0, is_veg: true, isSelected: false },
          { id: 8, title: "Extra sundried tomatoes", price: 20, is_veg: true, isSelected: true },
        ]
      },
    ]},
    { id: 1, product_id: "2", product_name: "Amul Taaza Milk", total: 0, categories: [
      { id: 4, category_title: "Choice of Breads", is_multi_selectable: false, choices: [
          { id: 4, title: "Plain Bread", price: 0, is_veg: true, isSelected: false },
          { id: 5, title: "Multigrain Base", price: 20, is_veg: true, isSelected: true },
          { id: 6, title: "Cheese treated", price: 40, is_veg: true, isSelected: false },
        ]
      },
      { id: 5, category_title: 'Choice of Base', is_multi_selectable: false, choices: [
          { id: 1, title: "10 inches", price: 0, is_veg: true, isSelected: true },
          { id: 2, title: "12 inches", price: 140, is_veg: true, isSelected: false },
          { id: 3, title: "14 inches", price: 240, is_veg: true, isSelected: false },
        ]
      },
      { id: 6, category_title: "Choice of Toppings", is_multi_selectable: true, choices: [
          { id: 7, title: "Extra cheese", price: 0, is_veg: true, isSelected: false },
          { id: 8, title: "Extra sundried tomatoes", price: 20, is_veg: true, isSelected: true },
        ]
      },
    ]}
  ],
  customize_cart_details: {
    total_items: 0,
    total_price: 0,
  }
};




const removeAllProductQuantityFromCart = (initialShopData, product_id) => {

  var new_cart_details = Object.assign({}, initialShopData).cart_details;

  var new_categories = Object.assign({}, initialShopData).categories.map((cat, ind) => {
    return Object.assign({}, cat, {
      products: Object.assign({}, cat).products.map((product, p_ind) => {
        product.available_quantity.map((prod_avail_qty, v_ind) => {
          if (product.id === product_id) {
            product.cart_qty = product.cart_qty - prod_avail_qty.cart_qty;
            prod_avail_qty.isSelected = false;

            var actual_price = prod_avail_qty.cart_qty * prod_avail_qty.actual_price;
            var selling_price = prod_avail_qty.cart_qty * prod_avail_qty.selling_price;
            var saving_price = actual_price - selling_price;

            new_cart_details.cart_total_value = new_cart_details.cart_total_value - actual_price;
            new_cart_details.cart_payable_value = new_cart_details.cart_payable_value - selling_price;
            new_cart_details.cart_saving_value = new_cart_details.cart_saving_value - saving_price;
            new_cart_details.total_cart_items = new_cart_details.total_cart_items - prod_avail_qty.cart_qty;

            prod_avail_qty.cart_qty = 0;
          }

          return prod_avail_qty;
        })

        return product;
      })

    });
  });

  return { new_cart_details, new_categories };

}


const addRemoveCartItem = (initialShopData, product_id, product_variety_id, item_count) => {

  var new_cart_details = Object.assign({}, initialShopData).cart_details;

  var new_categories = Object.assign({}, initialShopData).categories.map((cat, ind) => {
    return Object.assign({}, cat, {
      products: Object.assign({}, cat).products.map((product, p_ind) => {
        product.available_quantity.map((prod_avail_qty, v_ind) => {
          if (product.id === product_id) {
            if (prod_avail_qty.id === product_variety_id) {
              prod_avail_qty.cart_qty = prod_avail_qty.cart_qty + item_count;
              prod_avail_qty.isSelected = true;

              product.cart_qty = product.cart_qty + item_count;

              var actual_price = item_count * (prod_avail_qty.actual_price);
              var selling_price = item_count * (prod_avail_qty.selling_price);

              new_cart_details.cart_total_value = new_cart_details.cart_total_value + actual_price;
              new_cart_details.cart_payable_value = new_cart_details.cart_payable_value + selling_price;
              new_cart_details.cart_saving_value = new_cart_details.cart_total_value - new_cart_details.cart_payable_value;
              new_cart_details.total_cart_items = new_cart_details.total_cart_items + item_count;
            }
          }

          return prod_avail_qty;
        })

        return product;
      })
    });
  });

  return { new_cart_details, new_categories };
}

const unSelectAllAddressPreference = (initialShopData) => {
  var new_addresses = Object.assign({}, initialShopData).addresses.map((address, ind) => {
    address.isSelected = false;
    return address;
  });
  // console.log(new_addresses);
  // console.log(initialShopData.addresses);

  return new_addresses;
}

const changePreferredAddress = (initialShopData, address_id) => {
  var new_addresses = Object.assign({}, initialShopData).addresses.map((address, ind) => {
    if (address.id === address_id) {
      address.isSelected = !address.isSelected;
    }
    return address;
  });

  return new_addresses;
}

const selectFirstAddressIfNoAddressIsSelected = (new_addresses_arg) => {
  var hasOneSelectedAddress = false;
  var new_addresses = new_addresses_arg.map((address, index) => {
      if(address.isSelected === true) {
        hasOneSelectedAddress = true;
      }
      return address;
    });

  if(hasOneSelectedAddress === false) {
    if(new_addresses.length > 0) {
      new_addresses[0].isSelected = true;
    }
  }

  return new_addresses;
}

const deleteAddress = (initialShopData, address_id) => {
  var new_addresses = [...initialShopData.addresses];

  new_addresses = new_addresses.filter((address, ind) => {
    if (address.id === address_id) {
      return false;
    } else {
      return true;
    }
  });

  // if (new_addresses.length > 0) {
  //   new_addresses[0].isSelected = true;
  // }

  new_addresses = selectFirstAddressIfNoAddressIsSelected(new_addresses);

  return new_addresses;
}

const addNewAddress = (initialShopData, new_address) => {

  var addresses = Object.assign({}, initialShopData).addresses;

  var new_address_id = 1;

  if (addresses.length > 0) {
    new_address_id = addresses[addresses.length - 1].id + 1;
  }

  new_address.id = new_address_id;
  new_address.phone = '123456789';

  // var new_addresses = [
  //   ...Object.assign({}, initialShopData).addresses,
  //   new_address,
  // ];
  var new_addresses = [
    ...Object.assign({}, initialShopData).addresses,
    new_address,
  ];

  new_addresses = selectFirstAddressIfNoAddressIsSelected(new_addresses);

  // console.log('new_addresses');
  // console.log(new_addresses);

  return new_addresses;
}

const editAddress = (initialShopData, edit_address) => {

  var addresses = Object.assign({}, initialShopData).addresses;

  var edit_address_id = edit_address.id;

  var new_addresses = [
    ...Object.assign({}, initialShopData).addresses.map((address, index) => {
      if(address.id === edit_address_id) {
        return edit_address;
      } else {
        return address;
      }
    })
  ];

  new_addresses = selectFirstAddressIfNoAddressIsSelected(new_addresses);
  
  // console.log('new_addresses');
  // console.log(new_addresses);

  return new_addresses;
}

const unSelectAllOutlet = (initialShopData) => {
  var new_outlets = Object.assign({}, initialShopData).outlets.map((outlet, ind) => {
    outlet.isSelected = false;
    return outlet;
  });
  return new_outlets;
}

const selectOutlet = (initialShopData, outlet_id) => {
  var new_outlets = Object.assign({}, initialShopData).outlets.map((outlet, ind) => {
    if (outlet.id === outlet_id) {
      outlet.isSelected = !outlet.isSelected;
    }
    return outlet;
  });

  return new_outlets;
}

const selectCustomizeProduct = (initialShopData, changed_product, product_id) => {

  var total = 0;

  var new_customize_products = Object.assign({}, initialShopData).customize_products.map((product, ind) => {
    if (product.product_id == product_id) {
      var total = 0;

      product.categories = changed_product;

      changed_product.map((category, c_i) => {
        category.choices.map((choice, ch_i) => {
          // console.log(choice);
          if(choice.isSelected == true) {
            total = total + parseInt(choice.price);
            // console.log('total YES')
          }
        })
      })

      product.total = total;

    }
    return product;
  });

  return new_customize_products;
}


// const addCustomizeProductToCart = (initialShopData, total_price) => {
//   var customize_cart_details = Object.assign({}, initialShopData).customize_cart_details;//.map((det, ind) => {
//   // var new_outlets = Object.assign({}, initialShopData).customize_cart_details.map((det, ind) => {
    
//   //   det.total_items = det.total_items + 1;
//   //   det.total_price = det.total_price + total_price;

//   //   return det;
//   // });

//   var new_customize_cart_details = {
//     total_items: customize_cart_details.total_items + 1,
//     total_price: customize_cart_details.total_price + total_price,
//   };

//   return new_customize_cart_details;
// }

const addCustomizeProductToCart = (initialShopData, total_price) => {
  var cart_details = Object.assign({}, initialShopData).cart_details;//.map((det, ind) => {
  // var new_outlets = Object.assign({}, initialShopData).cart_details.map((det, ind) => {
    
  //   det.total_items = det.total_items + 1;
  //   det.total_price = det.total_price + total_price;

  //   return det;
  // });

  var new_cart_details = {
    cart_payable_value: cart_details.cart_payable_value + total_price,
    cart_total_value: cart_details.cart_total_value + total_price,
    total_cart_items: cart_details.total_cart_items + 1,
  };

  return new_cart_details;
}



const shop = (state = initialShopData, action) => {
  switch (action.type) {
    case 'GET_ALL_CATEGORIES':
      // 
      break;

    case 'REMOVE_ALL_PRODUCT_QUANTITY_FROM_CART':
      var { new_cart_details, new_categories } = removeAllProductQuantityFromCart(Object.assign({}, state), action.payload.product_id);
      return {
        ...state,
        categories: new_categories,
        cart_details: new_cart_details,
      };

    case 'ADD_TO_CART':
      var { new_cart_details, new_categories } = addRemoveCartItem(Object.assign({}, state), action.payload.product_id, action.payload.product_variety_id, 1);
      return {
        ...state,
        categories: new_categories,
        cart_details: new_cart_details,
      };

    case 'REMOVE_FROM_CART':
      var { new_cart_details, new_categories } = addRemoveCartItem(Object.assign({}, state), action.payload.product_id, action.payload.product_variety_id, -1);
      return {
        ...state,
        categories: new_categories,
        cart_details: new_cart_details,
      };

    case 'UNSELECT_ALL_ADDRESS_PREFERENCE':
      var addresses = unSelectAllAddressPreference(Object.assign({}, state));
      return {
        ...state,
        addresses: addresses,
      };

    case 'CHANGE_PREFERERRED_ADDRESS':
      var addresses = changePreferredAddress(Object.assign({}, state), action.payload.address_id);
      return {
        ...state,
        addresses,
      };

    case 'DELETE_ADDRESS':
      var addresses = deleteAddress(Object.assign({}, state), action.payload.address_id);
      return {
        ...state,
        addresses: addresses,
      };

    case 'ADD_NEW_ADDRESS':
      var addresses = addNewAddress(Object.assign({}, state), action.payload.new_address);
      return {
        ...state,
        addresses: addresses,
      };

    case 'EDIT_ADDRESS':
      var addresses = editAddress(Object.assign({}, state), action.payload.edit_address);
      return {
        ...state,
        addresses: addresses,
      };

    case 'UPDATE_LANGUAGE':
      return Object.assign({}, state, {
        selectedLanguage: action.payload.language
      });

    case 'UNSELECT_ALL_OUTLET':
      var outlets = unSelectAllOutlet(Object.assign({}, state));
      // console.log(outlets);
      return {
        ...state,
        outlets: outlets,
      };

    case 'SELECT_OUTLET':
      var outlets = selectOutlet(Object.assign({}, state), action.payload.outlet_id);
      return {
        ...state,
        outlets,
      };

    case 'CUSTOMIZE_PRODUCT':
      var product = selectCustomizeProduct(Object.assign({}, state), action.payload.categories, action.payload.product_id);
      return {
        ...state,
        customize_products: product,
      };

    case 'ADD_CUSTOMIZE_PRODUCT_TO_CART':
      var calc = addCustomizeProductToCart(Object.assign({}, state), action.payload.total_price);
      return {
        ...state,
        cart_details: calc,
        // customize_cart_details: calc,
      };

    case 'CREATE_NEW_ADDRESS':
      //
      break;

    default:
      return initialShopData;
  }

  return initialShopData;
}

export default shop;


