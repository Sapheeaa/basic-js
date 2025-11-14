const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // Remove line below and write your code here
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (date.getFullYear !== year || date.getMonth !== month || date.getDate !== date) {
    throw new Error("Invalid date!");
  }
  //если js вынужден преобразовать дату(то есть кол-во дней не совпадает с месяцев), то возвращаем ошибку
  //js преобразовывает объекты типа дата автоматически.
  const month = date.getMonth() + 1;
  if (month === 12 || month < 3 ) {
    return 'winter';
  }
  if (month > 2 && month < 6) {
    return 'spring';
  }
  if (month > 5 && month < 9) {
    return 'summer';
  }
  return 'autumn'
}

module.exports = {
  getSeason
};
