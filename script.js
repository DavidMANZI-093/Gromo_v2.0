// Switch: Sign in - to - Register //

const goTo_Switches = document.querySelectorAll(".log-switch");
const logPages = document.querySelectorAll(".form-holder");

function changeAspect(event) {
    if (event.target.id == "goToRegister") {
        logPages[0].style.left = "-100%";
        logPages[1].style.left = "-100%";
        logPages[0].style.scale = "0.5";
        logPages[1].style.scale = "1";
    }
    else if (event.target.id == "goToLogin") {
        logPages[0].style.left = "0%";
        logPages[1].style.left = "0%";
        logPages[0].style.scale = "1";
        logPages[1].style.scale = "0.5";
    }
}

goTo_Switches.forEach(switchee => {
    switchee.onclick = changeAspect;
});

// Switch: Register - to - Login //

// Overlay Handler //

const loadingOverlay = document.getElementById("loading-overlay");

function hideOverlay() {
    loadingOverlay.style.opacity = "0%";
    setTimeout(() => {
        loadingOverlay.style.display = "none";
    }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(hideOverlay, 2000)});

// Overlay Handler //

// Undefined Display //

const icon_actions = document.querySelectorAll(".mvs");

function showOverlay(event) {
    loadingOverlay.style.display = "flex";
    setTimeout(() => {
        loadingOverlay.style.opacity = "100%";
    }, 500);
    setTimeout(() => {
        hideOverlay();
    }, 3000);
}

icon_actions.forEach(action => {
    action.addEventListener('click', (event) => {
        actionHandler(event);
    })
});

logPages.forEach(logPage => {
    logPage.addEventListener("submit", (event) => {
        formHandler(event);
    });
})

function formHandler(event) {
    event.preventDefault();
    showOverlay();
    clearFields(event);
    formAuthenticater();
}

function actionHandler(event) {
  showOverlay();
  clearFields(event);
  formAuthenticater();
}

function clearFields(event) {
    setTimeout(() => {
        event.target.closest('.forms').reset();
    }, 500);
}

// Undefined Display //

// Sign in Hider //

const formBox = document.getElementById("form_f");
const mainBody = document.getElementById("main_body");

function formAuthenticater() {
    logPages.forEach(logPage => {
        logPage.style.opacity = "0%";
        setTimeout(() => {
            logPage.style.display = "none";
            formBox.style.display = "none";
            mainBody.style.display = "flex";
            pushNotifier();
        }, 2000)
    });
}

// Sign in Hider //

// Notifier //

const notifiers = document.querySelectorAll(".notify");
function pushNotifier() {
    setTimeout(() => {
        notifiers.forEach(notifier => {
            notifier.style.display = "flex";
        });
    }, 2000);
}

// Notifier //

// Navigator and Pagination //

const pages = document.querySelectorAll(".pages");
const navKeys = Array.from(document.querySelectorAll(".navs"));
const pageMapping = {
    "0" : pages[0],
    "1" : pages[1],
    "2" : pages[2],
    "3" : pages[3] 
};

navKeys.forEach(navKey => {
    navKey.addEventListener("click", (event) => {
        navigate(event);
    });
});

function navigate(event) {
    navKeys.forEach(navKey => {
        navKey.classList.remove("active");
    });
    pages.forEach(page => {
        page.classList.remove("active");
    })
    event.target.closest('.navs').classList.add("active");
    pageMapping[navKeys.indexOf(event.target.closest('.navs'))].classList.add("active");
}

// Navigator and Pagination //
