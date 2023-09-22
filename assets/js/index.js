let submit = document.getElementById("submit");
// let nam = document.getElementById("name").value;
// let email = document.getElementById("email").value;
// let subject = document.getElementById("subject").value;
// let message = document.getElementById("message").value;

let nam = document.querySelector(".name");
let email = document.querySelector(".email-inp");
let subject = document.querySelector(".subject");
let msg = document.querySelector(".message");

const sendMail = () => {
  let params = {
    name: nam.value,
    email: email.value,
    message: msg.value,
  };

  const serviceId = "service_wva89ci";
  const templateId = "template_ztc35km";
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      // document.getElementById("sent-message").style.display = "block";
      console.log(res);
      swal({
        title: "Good job!",
        text: "Successfully sent message!",
        icon: "success",
        button: "Ok !",
      });
    })
    .catch((err) => {
      swal({
        title: "Opps...!",
        text: "Something went wrong. Couldn't sent message!",
        icon: "error",
        button: "Ok !",
      });
      console.log(err);
    });
};
