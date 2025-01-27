import emailjs from "emailjs-com";

export const sendEmail = async (formData) => {
  const serviceId = process.env.GATSBY_EMAILJS_SERVICE_ID;
  const templateId = process.env.GATSBY_EMAILJS_TEMPLATE_ID;
  const userId = process.env.GATSBY_EMAILJS_USER_ID;

  try {
    await emailjs.send(serviceId, templateId, formData, userId);
    return { success: true };
  } catch (error) {
    console.error(error.message);
    return {
      success: false,
      message:
        "Hubo un error al enviar el mensaje. Por favor, inténtalo más tarde nuevamente.",
    };
  }
};
