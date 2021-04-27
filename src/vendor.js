import dayjs from "dayjs";

const currentDate = dayjs().format("MMMM DD YYYY, h:mm:ss a");
const dateElement = document.querySelector("time");
dateElement.setAttribute("datetime", dayjs().format());
dateElement.textContent = currentDate;
