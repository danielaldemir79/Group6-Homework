const birthInput = document.getElementById("birthdate");
const calcBtn = document.getElementById("calcAgeBtn");
const result = document.getElementById("ageResult");

calcBtn.addEventListener("click", () => {
  const birthDate = new Date(birthInput.value);


  if (isNaN(birthDate)) {
    result.textContent = "Välj ett giltigt datum först!";
    return;
  }
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthday) {
    age--;
  }

  result.textContent = `Du är ${age} år gammal. `;

  // 🎂 Kolla om det är födelsedag
  const isBirthday =
    today.getMonth() === birthDate.getMonth() &&
    today.getDate() === birthDate.getDate();

  if (isBirthday) {
    result.textContent = `🎉 Grattis på födelsedagen! Du fyller ${age} år idag! 🥳`;
  } else {
    result.textContent = `Du är ${age} år gammal.`;
  }
});