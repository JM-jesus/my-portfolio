import { navbar } from "./components/navbar.js";
import {
  handleHeaderScroll,
  handleBackToTop,
  handleDarkMode,
  handleLanguageSwitcher,
} from "./modules/utils.js";
import { initLoader } from "./modules/dom.js";
import { sendEmail, initModal, closeModal } from "./modules/send_form.js";

document.addEventListener("DOMContentLoaded", () => {
  navbar();
  handleHeaderScroll();
  handleBackToTop();
  handleDarkMode();
  handleLanguageSwitcher();
  initLoader();
  sendEmail();
  initModal();
});
