/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {
  const categoryMap = {};

  transactions.forEach(transaction => {
    const { category, price } = transaction;

    if (!categoryMap[category]) {
      categoryMap[category] = price;
    } else {
      categoryMap[category] += price;
    }
  });

  const result = Object.keys(categoryMap).map(category => ({
    category,
    totalSpent: categoryMap[category],
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
