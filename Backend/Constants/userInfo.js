export const USER_INFO = {
  full_name: "Abhishek Duggal",
  dob: "06082004",
  email: "abhishek1163.be22@chitkara.edu.in",
  roll_number: "221099163",
  get user_id() {
    return `${this.full_name.toLowerCase()}_${this.dob}`;
  }
};
