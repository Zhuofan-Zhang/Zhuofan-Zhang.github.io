import emailjs, { init } from "emailjs-com";

// Replace with your EmailJS User ID
const EMAILJS_USER_ID = "9YY3Z3pYCONzBw6UO";

init(EMAILJS_USER_ID);

export function sendEmail() :void {

  // Replace with your EmailJS Service ID and Template ID
  const SERVICE_ID = "service_p7o3x15";
  const TEMPLATE_ID = "template_5rabxrt";

  emailjs
    .sendForm(SERVICE_ID, TEMPLATE_ID, '#contact-form')
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
    });
};
