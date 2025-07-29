export const formatResponse = ({
  odd_numbers,
  even_numbers,
  alphabets,
  special_characters,
  sum,
  concat_string
}, userInfo) => {
  return {
    is_success: true,
    user_id: userInfo.user_id,
    email: userInfo.email,
    roll_number: userInfo.roll_number,
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: sum.toString(),
    concat_string
  };
};
