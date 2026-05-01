
const startDate = new Date("2024-12-04");

function updateDaysTogether() {

    const today = new Date();

    const difference =
        today.getTime() - startDate.getTime();

    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    document.getElementById("days").innerText = days;
}

updateDaysTogether();




const reasons = [

    "Your smile makes my worst days feel lighter.",

    "You make ordinary moments feel magical.",

    "Your voice feels like home.",

    "You are the prettiest part of my life.",

    "I love how you care about little things.",

    "You make my world softer and happier."

];



function newReason() {

    const randomReason = reasons[
        Math.floor(Math.random() * reasons.length)
    ];

    document.getElementById("reasonText").innerText =
        randomReason;
}



function secretMessage() {

    alert(
        "Thank you for existing. You make my life beautiful ❤️"
    );

}