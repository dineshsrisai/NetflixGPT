export const checkValidData = (name, email, password) => {
  if (name != null) {
    const isNameValid = /^[A-Za-z]+$/.test(name);
    if (!isNameValid) return "Enter a valid name";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );

  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\S+$).{8,20}$/.test(
      password,
    );

  if (!isEmailValid) return " Please enter a valid email address";

  if (!isPasswordValid) return "Invalid password";

  return null;
};
