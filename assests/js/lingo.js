const languageSelect = document.getElementById("language-select");
const storedLanguage = localStorage.getItem("language");
if (storedLanguage) {
  if (languageSelect) {
    languageSelect.value = storedLanguage;
  }
  loadTranslations(storedLanguage);
} else {
  loadTranslations("en"); // Load default language (English)
}
if (languageSelect) {
  languageSelect.addEventListener("change", function () {
    const selectedLanguage = this.value;
    localStorage.setItem("language", selectedLanguage);
    loadTranslations(selectedLanguage);
  });
}

function loadTranslations(lang) {
  fetch("/assests/json/translation.json")
    .then((response) => response.json())
    .then((translations) => {
      const langData = translations[lang];
      if (document.getElementById("title")) {
        document.getElementById("title").textContent = langData.title;
      }
      if (document.getElementById("tagline")) {
        document.getElementById("tagline").textContent = langData.tagline;
      }
      if (document.getElementById("description")) {
        document.getElementById("description").textContent =
          langData.description;
      }
      if (document.getElementById("startLearning")) {
        document.getElementById("startLearning").textContent =
          langData.startLearning;
      }
      if (document.getElementById("cleanUI")) {
        document.getElementById("cleanUI").textContent = langData.cleanUI;
      }
      if (document.getElementById("cleanUIdesc")) {
        document.getElementById("cleanUIdesc").textContent =
          langData.cleanUIdesc;
      }
      if (document.getElementById("simpleUnderstand")) {
        document.getElementById("simpleUnderstand").textContent =
          langData.simpleUnderstand;
      }
      if (document.getElementById("interactiveLearning")) {
        document.getElementById("interactiveLearning").textContent =
          langData.interactiveLearning;
      }
      if (document.getElementById("stepByStep")) {
        document.getElementById("stepByStep").textContent = langData.stepByStep;
      }
      if (document.getElementById("learnKanjiEase")) {
        document.getElementById("learnKanjiEase").textContent =
          langData.learnKanjiEase;
      }
      if (document.getElementById("home")) {
        document.getElementById("home").textContent = langData.home;
      }
      if (document.getElementById("hom")) {
        document.getElementById("hom").textContent = langData.hom;
      }
      if (document.getElementById("about")) {
        document.getElementById("about").textContent = langData.about;
      }
      if (document.getElementById("contact")) {
        document.getElementById("contact").textContent = langData.contact;
      }
      if (document.getElementById("footerDesc")) {
        document.getElementById("footerDesc").textContent = langData.footerDesc;
      }
      if (document.getElementById("followMe")) {
        document.getElementById("followMe").textContent = langData.followMe;
      }
      if (document.getElementById("simpleUnderstandDesc")) {
        document.getElementById("simpleUnderstandDesc").textContent =
          langData.simpleUnderstandDesc;
      }
      if (document.getElementById("InteractiveLearningDesc")) {
        document.getElementById("InteractiveLearningDesc").textContent =
          langData.InteractiveLearningDesc;
      }
      if (document.getElementById("stepByStepDesc")) {
        document.getElementById("stepByStepDesc").textContent =
          langData.stepByStepDesc;
      }
      if (document.getElementById("q1points")) {
        document.getElementById("q1points").textContent = langData.q1points;
      }
      if (document.getElementById("q1pointsDesc")) {
        document.getElementById("q1pointsDesc").textContent =
          langData.q1pointsDesc;
      }
      if (document.getElementById("q2points")) {
        document.getElementById("q2points").textContent = langData.q2points;
      }
      if (document.getElementById("q2pointsDes")) {
        document.getElementById("q2pointsDes").textContent =
          langData.q2pointsDes;
      }
      if (document.getElementById("q2list1")) {
        document.getElementById("q2list1").textContent = langData.q2list1;
      }
      if (document.getElementById("q2list2")) {
        document.getElementById("q2list2").textContent = langData.q2list2;
      }
      if (document.getElementById("q2list3")) {
        document.getElementById("q2list3").textContent = langData.q2list3;
      }
      if (document.getElementById("q2list4")) {
        document.getElementById("q2list4").textContent = langData.q2list4;
      }
      if (document.getElementById("q3points")) {
        document.getElementById("q3points").textContent = langData.q3points;
      }
      if (document.getElementById("q3pointsDesc")) {
        document.getElementById("q3pointsDesc").textContent =
          langData.q3pointsDesc;
      }
      if (document.getElementById("expression")) {
        document.getElementById("expression").textContent = langData.expression;
      }
      if (document.getElementById("FSpoint")) {
        document.getElementById("FSpoint").textContent = langData.FSpoint;
      }
      if (document.getElementById("FSfill")) {
        document.getElementById("FSfill").textContent = langData.FSfill;
      }
      if (document.getElementById("sendMSG")) {
        document.getElementById("sendMSG").textContent = langData.sendMSG;
      }
      if (document.getElementById("clearMSG")) {
        document.getElementById("clearMSG").textContent = langData.clearMSG;
      }
    });
}
