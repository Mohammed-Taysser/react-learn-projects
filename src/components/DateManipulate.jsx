
/**
 * add zero to make two pair of number
 * @param {Number} num number to be formate
 * @returns {String}
 */
const add_zero = (num) => {
  return num.toString().length > 1 ? num : `0${num}`;
};

/**
 * turn date to human readable date
 * @param {Date} date date object to formate
 * @returns {String}
 */
const human_date = (date) => {
  const temp = typeof date === 'string' ? new Date(date) : date;
  let year = temp.getFullYear(),
    month = add_zero(temp.getMonth() + 1),
    day = add_zero(temp.getDay() + 1);

  return `${year}-${month}-${day}`;
};

export { add_zero, human_date };
