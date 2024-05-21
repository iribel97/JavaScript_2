import { printIcons, printNavBar, hideSearch } from "./functions/printLayout.js";
import { handleRegister } from "./functions/registerUsers.js"

hideSearch();
printIcons();
printNavBar("navbar");

document.getElementById("registerForm").addEventListener("submit", handleRegister);