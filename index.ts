// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

console.log('null == undefined', null == undefined);
console.log('null === undefined', null === undefined);
console.log('null == null', null == null);
console.log('null === null', null === null);
console.log('undefined == undefined', undefined == undefined);
console.log('undefined === undefined', undefined === undefined);
console.log('0 == undefined', 0 == undefined);
console.log('0 == null', 0 == null);
console.log('0 === 0', 0 === 0);
console.log("'' == null", '' == null);
console.log("'' == undefined", '' == undefined);
console.log('0 && null', 0 && null);
console.log('0 || null', 0 || null);
console.log('0 && undefined', 0 && undefined);
console.log('0 || undefined', 0 || undefined);
console.log('null || undefined', null || undefined);
console.log('null && undefined', null && undefined);
console.log('undefined || null', undefined || null);
console.log('undefined && null', undefined && null);
console.log('0 && 1', 0 && 1);
console.log('0 || 1', 0 || 1);
