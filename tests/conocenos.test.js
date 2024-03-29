// // /TechBechSchool/src/js/__tests__/conocenos.test.js

// const { cambiarTexto, obtenerTexto } = require('../conocenos');

// // Supongamos que tienes un HTML de prueba con un elemento div con id "miElemento"
// document.body.innerHTML = '<div class="imagen-con-texto">Texto Original</div>';

// test('cambiarTexto cambia el texto del elemento correctamente', () => {
//   cambiarTexto('imagen-con-texto', 'Nuevo Texto');
//   expect(obtenerTexto('miElemento')).toBe('Nuevo Texto');
// });

// test('obtenerTexto devuelve null para un elemento inexistente', () => {
//   expect(obtenerTexto('elementoInexistente')).toBeNull();
// });

const fs = require('fs');

test("header exists", async () => {
    const { JSDOM } = require("jsdom");
    const html = fs.readFileSync('TechBeatsSchool/pages/conocenos.html', 'utf8');
    const dom = new JSDOM(html);
    const window = dom.window;
    const document = dom.window.document;

    const header = document.querySelector(".header");
    expect(header).toBeInTheDocument();
});

test("footer contains social media links", async () => {
    const { JSDOM } = require("jsdom");
    const html = fs.readFileSync('TechBeatsSchool/pages/conocenos.html', 'utf8');  
    const dom = new JSDOM(html);
    const window = dom.window;
    const document = dom.window.document;

    const socialMediaLinks = document.querySelector(".rrss");
    expect(socialMediaLinks).toBeInTheDocument();
});

