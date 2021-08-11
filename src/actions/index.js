export const getAllCategories = () => ({
  type: 'GET_ALL_CATEGORIES',
});

export const getSelectedAddress = () => ({
    type: 'GET_SELECTED_ADDRESS',
    text: 'get selected address',
});


export const updateLanguage = (lang) => ({
    type: 'UPDATE_LANGUAGE',
    text: 'change language',
    payload: {
      language: lang,
    }
});

export const removeAllProductQuantityFromCart = (product_id) => ({
  type: 'REMOVE_ALL_PRODUCT_QUANTITY_FROM_CART',
  text: 'remove from cart',
  payload: {
    product_id: product_id,
  }
});


export const addToCart = (product_id, product_variety_id) => ({
    type: 'ADD_TO_CART',
    text: 'add to cart',
    payload: {
      product_id: product_id,
      product_variety_id: product_variety_id,
    }
});

export const removeFromCart = (product_id, product_variety_id) => ({
    type: 'REMOVE_FROM_CART',
    payload: {
      product_id: product_id,
      product_variety_id: product_variety_id,
    }
});

export const unSelectAllAddressPreference = () => ({
    type: 'UNSELECT_ALL_ADDRESS_PREFERENCE',
    payload: {}
});

export const changePreferredAddress = (address_id) => ({
    type: 'CHANGE_PREFERERRED_ADDRESS',
    payload: {
      address_id: address_id,
    }
});

export const deleteAddress = (address_id) => ({
    type: 'DELETE_ADDRESS',
    payload: {
      address_id: address_id,
    }
});

export const addNewAddress = (new_address) => ({
    type: 'ADD_NEW_ADDRESS',
    payload: {
      new_address,
    }
});

export const editAddress = (edit_address) => ({
    type: 'EDIT_ADDRESS',
    payload: {
      edit_address,
    }
});

export const unSelectAllOutlet = () => ({
  type: 'UNSELECT_ALL_OUTLET',
  payload: {}
});

export const selectOutlet = (outlet_id) => ({
  type: 'SELECT_OUTLET',
  payload: {
    outlet_id: outlet_id,
  }
});


export const customizeProduct = (categories, product_id) => ({
  type: 'CUSTOMIZE_PRODUCT',
  payload: {
    categories: categories,
    product_id: product_id,
  }
});

export const addCustomizeProductToCart = (total_price) => ({
  type: 'ADD_CUSTOMIZE_PRODUCT_TO_CART',
  payload: {
    total_price: total_price,
  }
});





