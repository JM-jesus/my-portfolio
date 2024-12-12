export function sendEmail() {
  const formDom = document.querySelector("#form");

  formDom.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const params = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs.send("service_j3sz48p", "template_ozyxa2x", params).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        showModal();
        formDom.reset();
      },
      (error) => {
        console.log("FAILED...", error);
        alert(
          "Ocurrió un error al enviar el mensaje. Por favor, intenta nuevamente."
        );
      }
    );
  });
}

export function initModal() {
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("close-btn");
  const modalContent = document.querySelector(".modal-content");

  closeBtn.addEventListener("click", () => {
    closeModal(modal);
  });

  window.addEventListener("scroll", () => {
    if (modal.style.display === "block") {
      closeModal(modal);
    }
  });

  window.addEventListener("click", (e) => {
    if (!modalContent.contains(e.target)) {
      closeModal(modal);
    }
  });
}

export function showModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

export function closeModal(modal) {
  modal.style.display = "none";
}
