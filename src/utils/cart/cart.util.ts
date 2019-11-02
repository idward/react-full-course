export const addItemToCart = (items: any, addedItem: any) => {
  const existedItem = items.find((item: any) => item.name === addedItem.name);

  if (existedItem) {
    return items.map((item: any) => {
      if (item.name === addedItem.name) {
        item.quantity += 1;
      }
      return item;
    });
  }

  return [...items, addedItem];
};
