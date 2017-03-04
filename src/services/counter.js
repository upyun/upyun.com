import numeral from 'numeral'

function getSubproductPrice (subproduct, perMonth = false) {
  var value = 0
  subproduct.items.forEach(function (item) {
    var qty = item.qty - item.balance
    if (qty < 0) qty = 0
    try {
      value = numeral(qty).multiply(item.unitPrice).multiply(perMonth ? 30 : 1).add(value).value()
    } catch (err) {}
  })
  return value
}

function getProductPrice (product, perMonth = false) {
  var val = numeral(0)
  product.subproducts.forEach(function (subproduct) {
    val = val.add(getSubproductPrice(subproduct, perMonth))
  })
  return val.value()
}

function getTotalPrice (products, perMonth = false) {
  var val = numeral(0)
  products.forEach(function (product) {
    val = val.add(getProductPrice(product, perMonth))
  })
  return val.value()
}

export default { getProductPrice, getTotalPrice, getSubproductPrice }
