Thien Ong

Live link: https://beautiful-daffodil-bb944e.netlify.app 

summary: this app is to build a full computer with the assumption that
every part work with each other. allowing users to pick any part they want. 


instructions:
click start build
select the part to add to your build
each part has items that can be add. adding an item will override the item

each select part will be totaled on the right side.

------------

Files:

buildHandler: 
manage the pc build functionality. 
it contains the build list storing each item type name price and image.
allow user to add/remove parts.
if part exist/already selected with an item, it override the existing item with the new selected one example: ryzen 5 --> ryzen 7

if build is incomplete display build not complete
if it is make purchase and clear list.

sliding Menu:
set each button to its menu style 
allow the menu to be open and close.

menu handler"
map each item in the array to its correct button
cpu to cpu button

submenus:
map each item in its array type to the correct iteractive button

app.css: use to style 

app.jsx / bodypiece / header
structure the app using the jsx files
such as bodypiece and header.

header contains a navigation bar which has 1 button
which is start build which open a menu. 
it also show the total top right.



~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
