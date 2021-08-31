(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={itemOflistOfContacts:"ContactsLitItem_itemOflistOfContacts__r35W0",icon:"ContactsLitItem_icon__2JDOB",info:"ContactsLitItem_info__32NVa",button:"ContactsLitItem_button__3-bwE"}},,function(t,e,n){t.exports={form:"ContactForm_form__R1mUe",container:"ContactForm_container__1jzvd",AddBtn:"ContactForm_AddBtn__3braU",inputFrom:"ContactForm_inputFrom__zujGp",inputName:"ContactForm_inputName__3odXs"}},,,function(t,e,n){t.exports={inputFilter:"Filter_inputFilter__2owR_",contactTitle:"Filter_contactTitle__14lLZ",filterLabel:"Filter_filterLabel__2fXgf"}},,,function(t,e,n){},,function(t,e,n){t.exports={title:"Panel_title__AaMMW"}},function(t,e,n){t.exports={listContacts:"ContactList_listContacts__1q2dD"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(11),r=n.n(c),s=n(14),o=n(3),i=n(12),l=n.n(i),u=n(0),j=function(t){var e=t.title,n=t.children;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{className:l.a.title,children:e}),n]})};j.defaultProps={title:"",children:[]};var b=j,m=n(4),d=n.n(m);var f=function(t){var e=t.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),j=l[0],b=l[1];function m(t){var e=t.currentTarget.name,n=t.currentTarget.value;switch(e){case"name":s(n);break;case"number":b(n);break;default:return}}return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(r,j),b(""),s("")},className:d.a.form,children:[Object(u.jsxs)("label",{className:d.a.label,children:["Name",Object(u.jsx)("input",{className:d.a.inputName,onChange:m,type:"text",value:r,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Ivan Ivanov"})]}),Object(u.jsxs)("label",{children:["Number",Object(u.jsx)("input",{className:d.a.inputFrom,onChange:m,type:"tel",value:j,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"098 111 22 33"}),Object(u.jsx)("button",{type:"submit",className:d.a.AddBtn,children:"Add contact"})]})]})};n(20);var O=function(t){var e=t.children;return Object(u.jsxs)("div",{className:"containers",children:[" ",e]})},h=n(23),p=n(13),x=n.n(p),_=n(2),C=n.n(_),v=n(8);function N(t){var e=t.id,n=t.name,a=t.number,c=t.deleteContact;return Object(u.jsxs)("li",{className:C.a.itemOflistOfContacts,children:[Object(u.jsxs)("p",{className:C.a.info,children:[Object(u.jsx)("span",{className:C.a.icon,children:Object(u.jsx)(v.c,{})}),n]}),Object(u.jsxs)("p",{className:C.a.info,children:[Object(u.jsx)("span",{className:C.a.icon,children:Object(u.jsx)(v.b,{})}),a]}),Object(u.jsxs)("button",{type:"button",onClick:function(){return c(e)},className:C.a.button,children:[Object(u.jsx)("span",{className:C.a.icon,children:Object(u.jsx)(v.a,{})}),"Delete"]})]},e)}var g=function(t){var e=t.contacts,n=t.deleteContact;return Object(u.jsx)("ul",{className:x.a.listContacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(u.jsx)(N,{name:a,id:e,number:c,deleteContact:n},e)}))})},F=n(7),S=n.n(F),k=function(t){var e=t.onFilterChange;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:S.a.contactTitle,children:"Contacts"}),Object(u.jsxs)("label",{className:S.a.filterLabel,children:["Find contacts by name",Object(u.jsx)("input",{type:"text",onChange:e,className:S.a.inputFilter,placeholder:"Who are you looking for ?"})]})]})};n(10);var w=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),l=i[0],j=i[1];return Object(a.useEffect)((function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&c(e)}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("header",{children:Object(u.jsx)(O,{children:Object(u.jsx)(b,{title:"Phonebook",children:Object(u.jsx)(f,{onSubmit:function(t,e){var a={id:Object(h.a)(),name:t,number:e};n.some((function(t){return t.name===a.name}))?alert("".concat(a.name," is already in contacts!")):c((function(t){return[a].concat(Object(s.a)(t))}))}})})})}),Object(u.jsx)("section",{children:Object(u.jsxs)(O,{children:[Object(u.jsx)(k,{onFilterChange:function(t){j(t.currentTarget.value)}}),0===n.length?Object(u.jsx)("p",{className:"notifications",children:"There are not any contacts..."}):Object(u.jsx)(g,{contacts:""===l?n:n.filter((function(t){return t.name.toLowerCase().includes(l.toLowerCase())})),deleteContact:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}})]})})]})};r.a.render(Object(u.jsx)(a.StrictMode,{children:Object(u.jsx)(w,{})}),document.querySelector("#root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.c4572d81.chunk.js.map