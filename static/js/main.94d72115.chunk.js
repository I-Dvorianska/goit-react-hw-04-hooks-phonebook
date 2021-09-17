(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{17:function(e,n,t){},22:function(e,n,t){"use strict";t.r(n);var a,r,c,o,i=t(0),b=t.n(i),u=t(10),d=t.n(u),s=(t(17),t(8)),l=t(4),j=t(2),p=t(3),f=p.a.form(a||(a=Object(j.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 40px;\n  padding: 30px;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n"]))),x=p.a.label(r||(r=Object(j.a)(["\n  font-size: 14px;\n"]))),O=p.a.input(c||(c=Object(j.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),m=p.a.button(o||(o=Object(j.a)(["\n  width: fit-content;\n  padding: 4px;\n  margin-top: 8px;\n\n  font-size: 14px;\n\n  background-color: #f7ce9d;\n  border: 1px solid #f8cd98;\n  border-radius: 4px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #ebba7f;\n    border-color: #ebba7f;\n  }\n"]))),g=t(1);var h,v,y,k,S,C,w,z,A=function(e){var n=e.onSubmit,t=Object(i.useState)(""),a=Object(l.a)(t,2),r=a[0],c=a[1],o=Object(i.useState)(""),b=Object(l.a)(o,2),u=b[0],d=b[1],s=function(e){switch(e.target.name){case"name":c(e.target.value);break;case"number":d(e.target.value);break;default:return}};return Object(g.jsxs)(f,{action:"",onSubmit:function(e){e.preventDefault(),n(r,u),c(""),d("")},children:[Object(g.jsx)(x,{htmlFor:"name",children:"Name"}),Object(g.jsx)(O,{onChange:s,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0}),Object(g.jsx)(x,{htmlFor:"number",children:"Number"}),Object(g.jsx)(O,{onChange:s,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0}),Object(g.jsx)(m,{type:"submit",children:"Add contact"})]})},F=p.a.ul(h||(h=Object(j.a)(["\n  list-style-type: circle;\n  margin-left: 20px;\n"]))),I=p.a.li(v||(v=Object(j.a)(["\n  margin-top: 8px;\n  font-size: 18px;\n"]))),J=p.a.button(y||(y=Object(j.a)(["\n  padding: 4px;\n  margin-left: 8px;\n\n  font-size: 14px;\n\n  background-color: #ebba7f;\n  border: 1px solid #ebba7f;\n  border-radius: 4px;\n\n  &:hover {\n    cursor: pointer;\n    background-color: #f7ce9d;\n    border-color: #f8cd98;\n  }\n"]))),N=function(e){var n=e.contacts,t=e.deleteId;return Object(g.jsx)("div",{children:Object(g.jsx)(F,{children:n.map((function(e){var n=e.id,a=e.name,r=e.number;return Object(g.jsxs)(I,{children:[a," - ",r," ",Object(g.jsx)(J,{type:"button",onClick:function(){return t(n)},children:"Delete"})]},n)}))})})},E=p.a.div(k||(k=Object(j.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  margin-left: 60px;\n"]))),Z=p.a.input(S||(S=Object(j.a)(["\n  padding: 4px;\n  margin-top: 4px;\n"]))),q=p.a.label(C||(C=Object(j.a)(["\n  font-weight: 500;\n"]))),B=function(e){var n=e.onChange,t=e.value;return Object(g.jsxs)(E,{children:[Object(g.jsx)(q,{htmlFor:"filter",children:"Find contacts by name"}),Object(g.jsx)(Z,{type:"text",name:"filter",value:t,onChange:function(e){return n(e.currentTarget.value)}})]})},D=p.a.h1(w||(w=Object(j.a)(["\n  margin-left: 75px;\n"]))),L=p.a.h2(z||(z=Object(j.a)(["\n  margin-left: 75px;\n"]))),M=t(24),P=t(9);var T=function(){var e=Object(i.useState)([]),n=Object(l.a)(e,2),t=n[0],a=n[1],r=Object(i.useState)(""),c=Object(l.a)(r,2),o=c[0],b=c[1];return Object(i.useEffect)((function(){var e=localStorage.getItem("contacts"),n=JSON.parse(e);n&&a(Object(s.a)(n))}),[]),Object(i.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(t))}),[t]),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(P.a,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#f8cd98",color:"#000"}}}),Object(g.jsx)(D,{children:"Phonebook"}),Object(g.jsx)(A,{onSubmit:function(e,n){var r={id:Object(M.a)(),name:e,number:n};t.some((function(e){return e.name===r.name}))?function(e){Object(P.b)("".concat(e," is already in contacts"))}(r.name):a([].concat(Object(s.a)(t),[r]))}}),Object(g.jsx)(L,{children:"Contacts"}),Object(g.jsx)(B,{onChange:function(e){b(e)},value:o}),Object(g.jsx)(N,{contacts:function(){var e=o.toLowerCase();if(t!==[])return t.filter((function(n){return n.name.toLowerCase().includes(e)}))}(),deleteId:function(e){return a(t.filter((function(n){return n.id!==e})))}}),")"]})};d.a.render(Object(g.jsx)(b.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.94d72115.chunk.js.map