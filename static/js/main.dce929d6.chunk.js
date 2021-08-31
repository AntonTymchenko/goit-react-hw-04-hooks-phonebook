(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={itemOflistOfContacts:"ContactsLitItem_itemOflistOfContacts__r35W0",icon:"ContactsLitItem_icon__2JDOB",info:"ContactsLitItem_info__32NVa",button:"ContactsLitItem_button__3-bwE"}},function(t,e,n){t.exports={form:"ContactForm_form__R1mUe",container:"ContactForm_container__1jzvd",AddBtn:"ContactForm_AddBtn__3braU",inputFrom:"ContactForm_inputFrom__zujGp",inputName:"ContactForm_inputName__3odXs"}},,,,,function(t,e,n){t.exports={inputFilter:"Filter_inputFilter__2owR_",contactTitle:"Filter_contactTitle__14lLZ",filterLabel:"Filter_filterLabel__2fXgf"}},,,function(t,e,n){},,function(t,e,n){t.exports={title:"Panel_title__AaMMW"}},,function(t,e,n){t.exports={listContacts:"ContactList_listContacts__1q2dD"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(12),s=n.n(r),o=n(16),i=n(4),l=n(5),u=n(7),m=n(6),b=n(13),j=n.n(b),d=n(0),h=function(t){var e=t.title,n=t.children;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:j.a.title,children:e}),n]})};h.defaultProps={title:"",children:[]};var f=h,p=n(14),O=n(3),x=n.n(O),_=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.inputGetValue=function(e){var n=e.currentTarget.name;t.setState(Object(p.a)({},n,e.currentTarget.value))},t.formHandleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;t.props.onSubmit(a,c),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("form",{onSubmit:this.formHandleSubmit,className:x.a.form,children:[Object(d.jsxs)("label",{className:x.a.label,children:["Name",Object(d.jsx)("input",{className:x.a.inputName,onChange:this.inputGetValue,type:"text",value:this.state.name,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,placeholder:"Ivan Ivanov"})]}),Object(d.jsxs)("label",{children:["Number",Object(d.jsx)("input",{className:x.a.inputFrom,onChange:this.inputGetValue,type:"tel",value:this.state.number,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,placeholder:"098-111-22-33"}),Object(d.jsx)("button",{type:"submit",className:x.a.AddBtn,children:"Add contact"})]})]})}}]),n}(c.a.Component);n(22);var C=function(t){var e=t.children;return Object(d.jsxs)("div",{className:"containers",children:[" ",e]})},v=n(25),N=n(15),g=n.n(N),F=n(2),y=n.n(F),S=n(9);function k(t){var e=t.id,n=t.name,a=t.number,c=t.deleteContact;return Object(d.jsxs)("li",{className:y.a.itemOflistOfContacts,children:[Object(d.jsxs)("p",{className:y.a.info,children:[Object(d.jsx)("span",{className:y.a.icon,children:Object(d.jsx)(S.c,{})}),n]}),Object(d.jsxs)("p",{className:y.a.info,children:[Object(d.jsx)("span",{className:y.a.icon,children:Object(d.jsx)(S.b,{})}),a]}),Object(d.jsxs)("button",{type:"button",onClick:function(){return c(e)},className:y.a.button,children:[Object(d.jsx)("span",{className:y.a.icon,children:Object(d.jsx)(S.a,{})}),"Delete"]})]},e)}var w=function(t){var e=t.contacts,n=t.deleteContact;return Object(d.jsx)("ul",{class:g.a.listContacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(d.jsx)(k,{name:a,id:e,number:c,deleteContact:n},e)}))})},A=n(8),L=n.n(A),I=function(t){var e=t.onFilterChange;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:L.a.contactTitle,children:"Contacts"}),Object(d.jsxs)("label",{className:L.a.filterLabel,children:["Find contacts by name",Object(d.jsx)("input",{type:"text",onChange:e,className:L.a.inputFilter,placeholder:"Who are you looking for ?"})]})]})},T=(n(11),function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addNewContact=function(e,n){var a=t.state.contacts,c={id:Object(v.a)(),name:e,number:n};a.some((function(t){return t.name===c.name}))?alert("".concat(c.name," is already in contacts!")):t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.onFilterChange=function(e){t.setState({filter:e.currentTarget.value})},t.getResultOfContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return""===a?n:n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)(C,{children:Object(d.jsx)(f,{title:"Phonebook",children:Object(d.jsx)(_,{onSubmit:this.addNewContact})})})}),Object(d.jsx)("section",{children:Object(d.jsxs)(C,{children:[Object(d.jsx)(I,{onFilterChange:this.onFilterChange}),0===this.state.contacts.length?Object(d.jsx)("p",{className:"notifications",children:"There are not any contacts..."}):Object(d.jsx)(w,{contacts:this.getResultOfContacts(),deleteContact:this.deleteContact})]})})]})}}]),n}(c.a.Component));s.a.render(Object(d.jsx)(a.StrictMode,{children:Object(d.jsx)(T,{})}),document.querySelector("#root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.dce929d6.chunk.js.map