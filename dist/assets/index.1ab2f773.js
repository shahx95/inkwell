var y=Object.defineProperty,w=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var g=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&g(e,n,t[n]);if(N)for(var n of N(t))k.call(t,n)&&g(e,n,t[n]);return e},b=(e,t)=>w(e,v(t));import{j as i,a as f,r as h,S as C,R as x,b as I,n as O,c as E}from"./vendor.ccaa1c81.js";const L=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};L();function P(e){const t=e.notes.map((n,s)=>i("div",{children:f("div",{className:`title ${n.id===e.currentNote.id?"selected-note":""}`,onClick:()=>e.setCurrentNoteId(n.id),children:[i("h4",{className:"text-snippet",children:n.body.split(`
`)[0]}),i("button",{className:"delete-btn",onClick:r=>e.deleteNote(r,n.id),children:i("i",{className:"gg-trash trash-icon"})})]})},n.id));return f("section",{className:"pane sidebar",children:[f("div",{className:"sidebar--header",children:[i("h3",{children:"Your Notes"}),i("button",{className:"new-note",onClick:e.newNote,children:"+"})]}),t]})}function A({currentNote:e,updateNote:t}){const[n,s]=h.exports.useState("write"),r=new C.Converter({tables:!0,simplifiedAutoLink:!0,strikethrough:!0,tasklists:!0});return i("section",{className:"pane editor",children:i(x,{value:e.body,onChange:t,selectedTab:n,onTabChange:s,generateMarkdownPreview:o=>Promise.resolve(r.makeHtml(o)),minEditorHeight:80,heightUnits:"vh"})})}function M(){const[e,t]=h.exports.useState(()=>JSON.parse(localStorage.getItem("notes"))||[]),[n,s]=h.exports.useState(e[0]&&e[0].id||"");h.exports.useEffect(()=>{localStorage.setItem("notes",JSON.stringify(e))},[e]);function r(){const a={id:O(),body:"# Type your markdown note's title here"};t(c=>[a,...c]),s(a.id)}function o(a){t(c=>{let u=[];for(let l=0;l<c.length;l++)c[l].id===n?u.unshift(b(p({},c[l]),{body:a})):u.push(c[l]);return u})}function d(a,c){a.stopPropagation(),t(u=>u.filter(l=>l.id!==c))}function m(){return e.find(a=>a.id===n)||e[0]}return i("main",{children:e.length>0?f(I,{sizes:[30,70],direction:"horizontal",className:"split",children:[i(P,{notes:e,currentNote:m(),setCurrentNoteId:s,newNote:r,deleteNote:d}),n&&e.length>0&&i(A,{currentNote:m(),updateNote:o})]}):f("div",{className:"no-notes",children:[i("img",{className:"no-notes-logo",src:"src\\logo.png",alt:"inkwell logo"}),i("h1",{children:"You have no notes"}),i("button",{className:"first-note",onClick:r,children:"Create one now"})]})})}E.render(i(M,{}),document.getElementById("root"));