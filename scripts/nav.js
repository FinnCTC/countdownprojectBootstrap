const element = document.getElementById("navbar");

element.scrollIntoView();
element.scrollIntoView(false);
element.scrollIntoView({block: "end"});
element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest" });

const goToCount = document.getElementById("toCount");
const goToWhat = document.getElementById("toWhat");
const goToWhyI = document.getElementById("toWhyI");
const goToWhyU = document.getElementById("toWhyU");

goToCount.addEventListener("click", () => {
   document.getElementById("countdownHolder").scrollIntoView({behavior: "smooth"});
});
goToWhat.addEventListener("click", () => {
    document.getElementById("whatHead").scrollIntoView({behavior: "smooth"});
});
goToWhyI.addEventListener("click", () => {
    document.getElementById("whyIHead").scrollIntoView({behavior: "smooth"});
});
goToWhyU.addEventListener("click", () => {
    document.getElementById("whyUHead").scrollIntoView({behavior: "smooth"});
});