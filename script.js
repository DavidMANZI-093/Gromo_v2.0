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
    action.onclick = showOverlay; 
});

logPages.forEach(logPage => {
    logPage.addEventListener("submit", formHandler);
})

function formHandler(event) {
    event.preventDefault();
    showOverlay();
    clearFields(event);
}

function clearFields(event) {
    setTimeout(() => {
        event.target.reset();
    }, 500);
}

// Undefined Display //
