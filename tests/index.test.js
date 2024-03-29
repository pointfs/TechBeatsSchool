const jestdom= require("@testing-library/jest-dom");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;



let dom;
let window;
let document;

test("header exists",async ()=> {
    dom= await JSDOM.fromFile("TechBeatsSchool/index.html", {
        resources: "usable",
        runScripts: "dangerously"
    });

    window= dom.window
    document= dom.window.document

    const header = document.querySelector(".header"); 
    expect(header).toBeInTheDocument(); 
})


test("navigation button exists", async () => {
    dom = await JSDOM.fromFile("index.html", {
        resources: "usable",
        runScripts: "dangerously"
    });

    window = dom.window;
    document = dom.window.document;

    const navigationButton = document.querySelector(".navbar_bottom");
    expect(navigationButton).toBeInTheDocument();
});


