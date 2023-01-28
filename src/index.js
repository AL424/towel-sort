module.exports = function towelSort (matrix) {
  let result = [];

  if (Array.isArray(matrix)) {
    matrix.forEach((item, index) => {
      if (index % 2 === 0) result.push(...item);
      else {
        item.reverse();
        result.push(...item)
      }
    });
  }
  
  return result;
}