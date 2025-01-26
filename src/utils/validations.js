const isValidEmail = (email) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

const isValidName = (name) => /^[a-zA-ZÀ-ÿ\s]{2,50}$/.test(name);

const isGreaterThan = (value, number) => value.length > number;

const isValidCellphoneNumber = (cellphone) =>
  /^(\+54\s?)?(\d{3})?\d{7,10}$/.test(cellphone);

export const validateFieldsContact = (formData) => {
  const errors = {};

  if (!isValidName(formData.name)) {
    errors.name = "Por favor, ingresa un nombre válido.";
  }

  if (!isValidEmail(formData.email)) {
    errors.email = "Por favor, ingresa un email válido.";
  }

  if (!isGreaterThan(formData.message, 10)) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  if (!isValidCellphoneNumber(formData.cellphone)) {
    errors.cellphone = "Por favor, ingresa un teléfono válido.";
  }

  return errors;
};
