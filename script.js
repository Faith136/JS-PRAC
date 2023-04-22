/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from "./Backpack.js";

const Book = new Backpack(
    "When God winks at you",
    "Faith",
    30,
    2000,
    "Grace",
    3
);


const content = `
<main>
<h>Hello God!</h>
 <ul>
    <li>Name:${Book.name}</li>
    <li>Author:${Book.author}</li>
    <li> Pages:${Book.pages}</li>
    <li>Established in:${Book.established}</li>
    <li>About:${Book.about}</li>
    <li>New Current Page:${Book.newCurrentPage}</li>
    </ul>
    </main>
`;

document.body.innerHTML = content;