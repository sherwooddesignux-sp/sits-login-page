document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const emailParam = urlParams.get("email");

  function setSelectedEmail(email) {
    document.querySelector(`#${email}`).checked = true;
  }

  if (emailParam) {
    const emails = ["swansea", "tne", "applicant"];
    const agentMessage = document.querySelector("#applicant-agent-message");
    emails.forEach((email) => {
      const emailContent = document.querySelector(`#${email}-content`);
      if (emailParam.toLowerCase().includes(email)) {
        emailContent.removeAttribute("hidden");
        setSelectedEmail(email);
        if (emailParam.toLowerCase().includes("applicant-agent")) {
          agentMessage.style.display = "block";
          $(".warning").text(
            "Agents please use AGC code supplied for username",
          );
        }
      } else {
        emailContent.setAttribute("hidden", true);
      }
    });
  } else {
    document
      .querySelectorAll(".hidden-content")
      .forEach((el) => el.setAttribute("hidden", true));
  }

  document.querySelector("#email").addEventListener("focusout", function () {
    const email = this.value;
    const warning = document.querySelector("#email-warning");
    const submitButton = document.querySelector("#submit-button");
    if (email.includes("@swansea.ac.uk")) {
      warning.style.display = "block";
      submitButton.disabled = true;
    } else {
      warning.style.display = "none";
      submitButton.disabled = false;
    }
  });

  document.querySelectorAll('input[type="radio"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const selectedValue = this.value;
      document
        .querySelectorAll(".hidden-content")
        .forEach((el) => el.setAttribute("hidden", true));
      document
        .querySelector(`#${selectedValue}-content`)
        .removeAttribute("hidden");
    });
  });
});
