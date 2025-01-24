import emailjs from "emailjs-com";

export const sendEmail = async (formData) => {
  const serviceId = "service_bkjiamj";
  const templateId = "template_kjqj65s";
  const userId = "Y4D4ACFH1CgBbzx5i";

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
