(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{63:function(e,a,t){e.exports=t(94)},68:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(19),c=t.n(l),s=(t(68),t(31)),m=t(25),o=t(18),i=t(6),u=t(96),d=t(97),p=t(57),E=t(103),f=function(e){var a=e.firstCard,t=e.secondCard,n=e.thirdCard,l=e.finalCard,c=e.splitted,s=function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h4",null,e.expName)),r.a.createElement("div",{className:"flexDisplay blocks"},r.a.createElement("i",{className:"material-icons calendar"},"event"),r.a.createElement("span",null,new Date(e.date).toDateString())))},m=function(){return r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Your Group"),e.members.map(function(e,a){return r.a.createElement("div",{key:a,className:"flexDisplay"},r.a.createElement("i",{className:"material-icons person"},"person"),r.a.createElement("span",null,e.name))}))};return a&&t&&n&&!l?r.a.createElement(E.a,{className:"infoCard"},s(),r.a.createElement("hr",null),m(),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Expenses"),e.expenses.map(function(e,a){var t=e.to_whom.filter(function(e){return!0===e.isChecked});return r.a.createElement("div",{className:"blocks",key:a},r.a.createElement("div",{className:"flexDisplay"},r.a.createElement("i",{className:"material-icons white"},"navigate_next"),r.a.createElement("span",{className:"white"},"Amount"),r.a.createElement("span",null,e.amount)),r.a.createElement("div",null,r.a.createElement("span",{className:"white"},"By -"),r.a.createElement("span",null,e.by_whom)),r.a.createElement("div",{style:{width:"max-content"}},r.a.createElement("span",{className:"white"},"To -"),t.map(function(e,a){return r.a.createElement("span",{key:a},e.name)})))}))):a&&t&&!n&&!l?r.a.createElement(E.a,{className:"infoCard"},s(),r.a.createElement("hr",null),m(),r.a.createElement("hr",null),r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"Almost there! one more to go"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"3"),"Add your expenses"))):!a||t||n||l?a&&t&&n&&l?r.a.createElement(E.a,{className:"infoCard"},s(),r.a.createElement("hr",null),m(),r.a.createElement("hr",null),0===c.length?r.a.createElement("div",{className:"blocks"},r.a.createElement("p",null,"None")):r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Splitted Expenses"),c.map(function(e,a){return r.a.createElement("div",{key:a},e.splittedExp.map(function(a,t){return r.a.createElement("div",{key:t,className:"flexDisplay"},r.a.createElement("span",null,e.member),r.a.createElement("div",{className:"flexDisplay",style:{color:"white",paddingLeft:"5px",paddingRight:"5px"}},r.a.createElement("i",{className:"material-icons"},"trending_flat"),r.a.createElement("span",{style:{margin:"auto"}},a.amount)),r.a.createElement("span",null,a.to))}))}))):r.a.createElement(E.a,{className:"infoCard"},r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"Please proceed with the three steps to split your expenses."),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"1"),"Name your thing"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"2"),"Make your group"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"3"),"Add your expenses"))):r.a.createElement(E.a,{className:"infoCard"},s(),r.a.createElement("hr",null),r.a.createElement("div",{className:"empty"},r.a.createElement("p",null,"C'mon two more steps to go..."),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"2"),"Make your group"),r.a.createElement("p",null,r.a.createElement("span",{className:"round"},"3"),"Add your expenses")))},h=t(100),b=t(98),v=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],s=function(a){e.handleRadio(a),function(e){c(e.target.value)}(a)};return r.a.createElement(u.a,{className:"split"},r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{onSubmit:e.handleFirst,id:"FirstForm"},r.a.createElement("center",null,r.a.createElement("h4",{className:"one"},"1")),r.a.createElement(h.a.Control,{onChange:e.handleExpName,placeholder:"C'mon Name it",required:!0}),r.a.createElement(h.a.Control,{onChange:e.handleDate,type:"date",required:!0}),r.a.createElement("center",null,r.a.createElement(b.a,{title:"Name your thing",type:"submit"},"Name your thing"))))),r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{onSubmit:e.handleSecond,id:"SecondForm"},r.a.createElement("center",null,r.a.createElement("h4",{className:"two"},"2")),e.members.map(function(a,t){return r.a.createElement("div",{className:"addPerson",key:t},r.a.createElement(h.a.Control,{placeholder:"Person Name",onChange:function(a){return e.handleMember(a,t)},required:!0}),r.a.createElement("i",{className:"material-icons minusBtn",title:"delete member",onClick:function(){return e.removeMember(t)}},"delete"))}),r.a.createElement("center",null,r.a.createElement("i",{className:"material-icons addBtn",title:"add member",onClick:function(a){return e.addMember(a)}},"add_circle")),r.a.createElement("center",null,r.a.createElement(b.a,{title:"form group",type:"submit"},"Make your group"))))),r.a.createElement(p.a,null,r.a.createElement(E.a,null,r.a.createElement(h.a,{onSubmit:e.addExpenseToInfoCard,id:"ThirdForm"},r.a.createElement("center",null,r.a.createElement("h4",{className:"three"},"3")),r.a.createElement(h.a.Control,{onChange:e.handleAmount,placeholder:"Amount",required:!0}),r.a.createElement(d.a,{style:{color:"#003B73",fontWeight:600}},"By whom"),r.a.createElement(d.a,null,e.members.map(function(e,a){return r.a.createElement(p.a,{key:a},r.a.createElement(h.a.Check,{type:"radio",checked:l===e.name,value:e.name||"",label:e.name,onChange:function(e){return s(e)}}))})),r.a.createElement(d.a,{style:{color:"#003B73",fontWeight:600}},"To whom"),r.a.createElement(d.a,null,e.to_whom.map(function(a,t){return r.a.createElement(p.a,{key:t},r.a.createElement(h.a.Check,{type:"checkbox",label:a.name,checked:a.isChecked,value:a.name||"",onChange:function(a){return e.handleCheckbox(a,t)}}))})),r.a.createElement("center",null,r.a.createElement("i",{className:"material-icons addBtn",title:"add more expense",onClick:function(a){return e.addExpenseModal(a)}},"add_circle")),r.a.createElement("center",null,r.a.createElement(b.a,{title:"add the expenses",type:"submit"},"Add the expenses")))))),r.a.createElement("center",null,r.a.createElement(b.a,{title:"Split the expenses",className:"split_btn",onClick:function(a){a.preventDefault(),e.splitExpenses(),c(""),document.getElementById("FirstForm").reset(),document.getElementById("SecondForm").reset(),document.getElementById("ThirdForm").reset()}},"Finally, SPLIT")))},g=function(e){return null===e.msg?null:e.msg},x=t(99),y=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],s=function(a){e.handleRadio(a),function(e){c(e.target.value)}(a)};return r.a.createElement(x.a,{className:"newExpModal",show:e.show,onHide:e.Close},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement("h5",null,"Enter the new Expense details")),r.a.createElement(x.a.Body,null,r.a.createElement(h.a,{onSubmit:e.addExpenseModal},r.a.createElement(h.a.Control,{placeholder:"Amount",onChange:e.handleAmount,value:e.amount||"",required:!0}),r.a.createElement(d.a,{className:"by-to"},"By whom"),r.a.createElement(d.a,null,e.members.map(function(e,a){return r.a.createElement(p.a,{key:a},r.a.createElement(h.a.Check,{type:"radio",checked:l===e.name,value:e.name||"",label:e.name,onChange:function(e){return s(e)}}))})),r.a.createElement(d.a,{className:"by-to"},"To whom"),r.a.createElement(d.a,null,e.to_whom.map(function(a,t){return r.a.createElement(p.a,{key:t},r.a.createElement(h.a.Check,{type:"checkbox",value:a.name||"",label:a.name,checked:a.isChecked,onChange:function(a){return e.handleCheckbox(a,t)}}))})),r.a.createElement("center",null,r.a.createElement(b.a,{type:"submit"},"Add Expense")))))},k=t(7),w=t.n(k),N=t(10),C=t(20),O=t.n(C),j="/api/expenses",S=null,_={setToken:function(e){S="bearer ".concat(e)},getData:function(){var e=Object(N.a)(w.a.mark(function e(){var a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(j);case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),addData:function(){var e=Object(N.a)(w.a.mark(function e(a){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:S}},e.next=3,O.a.post(j,a,t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),deleteData:function(){var e=Object(N.a)(w.a.mark(function e(a){var t,n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Authorization:S}},e.next=3,O.a.delete("".concat(j,"/").concat(a),t);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),updateData:function(){var e=Object(N.a)(w.a.mark(function e(a,t){var n,r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={header:{Authorization:S}},e.next=3,O.a.put("".concat(j,"/").concat(a),t,n);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}},e)}));return function(a,t){return e.apply(this,arguments)}}()},T=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),m=s[0],E=s[1],h=Object(n.useState)(""),b=Object(i.a)(h,2),x=b[0],k=b[1],w=Object(n.useState)(""),N=Object(i.a)(w,2),C=N[0],O=N[1],j=Object(n.useState)(""),S=Object(i.a)(j,2),T=S[0],D=S[1],B=Object(n.useState)([{name:null,isChecked:!1},{name:null,isChecked:!1}]),I=Object(i.a)(B,2),M=I[0],A=I[1],G=Object(n.useState)([{name:null},{name:null}]),F=Object(i.a)(G,2),P=F[0],L=F[1],U=Object(n.useState)([]),q=Object(i.a)(U,2),H=q[0],R=q[1],J=Object(n.useState)([]),W=Object(i.a)(J,2),z=W[0],Y=W[1],V=Object(n.useState)(!1),$=Object(i.a)(V,2),K=$[0],Q=$[1],X=Object(n.useState)(!1),Z=Object(i.a)(X,2),ee=Z[0],ae=Z[1],te=Object(n.useState)(!1),ne=Object(i.a)(te,2),re=ne[0],le=ne[1],ce=Object(n.useState)(!1),se=Object(i.a)(ce,2),me=se[0],oe=se[1],ie=Object(n.useState)(!1),ue=Object(i.a)(ie,2),de=ue[0],pe=ue[1],Ee=Object(n.useState)(!1),fe=Object(i.a)(Ee,2),he=fe[0],be=fe[1],ve=function(){return le(!0)},ge=function(){return pe(!1)},xe=function(e){return O(e.target.value)},ye=function(e){return D(e.target.value)},ke=function(e,a){var t=Object(o.a)(M);t[a].name=e.target.value,t[a].isChecked=!t[a].isChecked,A(t)},we=function(e){l(e),setTimeout(function(){l(null)},3e3)},Ne=function(){O(""),D("");var e=Object(o.a)(M);A(e.map(function(e){return{name:e.name,isChecked:!1}}))},Ce=function(){var e={amount:Number(C),by_whom:T,to_whom:M};if(0!==e.amount&&""!==e.by_whom&&0!==e.to_whom.length&&!1===isNaN(e.amount)){var a=Object(o.a)(H);a.push(e),R(a),be(!0),Ne()}else!0===isNaN(e.amount)?we(r.a.createElement("div",{id:"snackbar"},"Please enter a valid Amount")):we(r.a.createElement("div",{id:"snackbar"},"Please enter all the Expense details"))},Oe=function(e){e.preventDefault(),Ce(),de?ge():pe(!0)};return r.a.createElement("div",null,r.a.createElement(u.a,{className:"home"},r.a.createElement(g,{msg:t}),r.a.createElement(y,{show:de,Close:ge,addExpenseModal:Oe,members:P,to_whom:M,amount:C,handleAmount:xe,handleRadio:ye,handleCheckbox:ke}),r.a.createElement(d.a,null,r.a.createElement(p.a,{sm:9},r.a.createElement(v,{handleExpName:function(e){return E(e.target.value)},expName:m,handleDate:function(e){return k(e.target.value)},date:x,to_whom:M,handleMember:function(e,a){var t=Object(o.a)(P);t[a].name=e.target.value,L(t);var n=Object(o.a)(M);n[a].name=e.target.value,A(n)},addMember:function(){var e=Object(o.a)(P);e.push({name:null}),L(e);var a=Object(o.a)(M);a.push({name:null,isChecked:!1}),A(a)},removeMember:function(e){var a=Object(o.a)(P);a.splice(e,1),L(a);var t=Object(o.a)(M);t.splice(e,1),A(t)},members:P,addExpenseModal:Oe,splitExpenses:function(){new Promise(function(e,a){var t=P.map(function(e){return{member:e.name,splittedExp:[]}});H.map(function(e){var a=e.amount,n=e.by_whom,r=e.to_whom.filter(function(e){return!0===e.isChecked}),l=2===r.length?(a/r.length).toFixed(2):Math.floor(a/r.length);r.forEach(function(e){var a=t.findIndex(function(a){return a.member===e.name&&a.member!==n});-1!==a&&t[a].splittedExp.push({to:n,amount:l})})}),t.forEach(function(e,a){var n,r,l={name:e.member,amtToGive:0},c={name:null,amtToGive:0};e.splittedExp.forEach(function(e,s){if(c.name=e.to,l.amtToGive=e.amount,-1!==(n=t.findIndex(function(e){return e.member===c.name}))&&-1!==(r=t[n].splittedExp.findIndex(function(e){return e.to===l.name}))&&(c.amtToGive=t[n].splittedExp[r].amount),0!==c.amtToGive&&l.amtToGive>=c.amtToGive){var m=l.amtToGive-c.amtToGive;0===m?(t[a].splittedExp.splice(s,1),t[n].splittedExp.splice(r,1)):(t[a].splittedExp[s].amount=Math.abs(m),t[n].splittedExp.splice(r,1))}else if(0!==c.amtToGive&&l.amtToGive<c.amtToGive){var o=c.amtToGive-l.amtToGive;t[a].splittedExp.splice(s,1),t[n].splittedExp[r].amount=Math.abs(o)}})}),t=t.filter(function(e){return 0!==e.splittedExp.length}),Y(t),e(t)}).then(function(e){var a={expense_name:m,date:x,members:P,expenses:H,splitted:e};""!==a.expense_name&&""!==a.date&&0!==a.members.length&&0!==a.expenses.length&&0!==a.splitted.length?_.addData(a).then(function(e){oe(!0),setTimeout(function(){E(""),k(""),L([{name:null},{name:null}]),R([]),Ne()},5e3)}).catch(function(e){we(r.a.createElement("div",{id:"snackbar"},"Validation failed, Please verify expense details."))}):we(r.a.createElement("div",{id:"snackbar"},"Please enter all the details"))})},handleAmount:xe,amount:C,handleRadio:ye,handleCheckbox:ke,handleFirst:function(e){e.preventDefault(),Q(!0)},handleSecond:function(e){e.preventDefault(),ae(!0)},handleThird:ve,addExpenseToInfoCard:function(e){e.preventDefault(),he?(ve(),be(!1)):(Ce(),ve(),be(!1))}})),r.a.createElement(p.a,{sm:3},r.a.createElement(f,{expName:m,date:x,members:P,expenses:H,firstCard:K,secondCard:ee,thirdCard:re,finalCard:me,splitted:z})))),r.a.createElement("center",{className:"footer"},r.a.createElement("a",{className:"fab fa-github",href:"https://github.com/Madhubalajb/Expense-Split",rel:"noopener noreferrer",target:"_blank"}),"built by ",r.a.createElement("a",{href:"https://madhubalajb.github.io/",rel:"noopener noreferrer",target:"_blank"},"madhubala jayakumaran")))},D=t(102),B=t(101),I=function(e){return r.a.createElement(x.a,{id:"loginModal",show:e.show,onHide:e.Close},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement("b",null,"Log In")),r.a.createElement(x.a.Body,null,r.a.createElement(h.a,{onSubmit:e.login,className:"loginInputs"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(h.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(b.a,{type:"submit"},"Log In")))))},M=function(e){return r.a.createElement(x.a,{id:"signupModal",show:e.show,onHide:e.Close},r.a.createElement(x.a.Header,{closeButton:!0},r.a.createElement("b",null,"Sign Up")),r.a.createElement(x.a.Body,null,r.a.createElement(h.a,{onSubmit:e.signup,className:"signupInputs"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Name",onChange:e.name,required:!0}),r.a.createElement(h.a.Control,{type:"text",placeholder:"Username",onChange:e.username,required:!0}),r.a.createElement(h.a.Control,{type:"password",placeholder:"Password",onChange:e.pwd,required:!0}),r.a.createElement("center",null,r.a.createElement(b.a,{type:"submit"},"Sign Up")))))},A={login:function(){var e=Object(N.a)(w.a.mark(function e(a){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/login",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},G={signup:function(){var e=Object(N.a)(w.a.mark(function e(a){var t;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.post("/api/users",a);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()},F=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1],c=function(){return l(!1)},m=Object(n.useState)(!1),o=Object(i.a)(m,2),u=o[0],d=o[1],p=function(){return d(!1)},E=Object(n.useState)(""),f=Object(i.a)(E,2),h=f[0],b=f[1],v=Object(n.useState)(""),x=Object(i.a)(v,2),y=x[0],k=x[1],C=Object(n.useState)(""),O=Object(i.a)(C,2),j=O[0],S=O[1],T=Object(n.useState)(""),D=Object(i.a)(T,2),F=D[0],P=D[1],L=Object(n.useState)(""),U=Object(i.a)(L,2),q=U[0],H=U[1],R=function(e){H(e),setTimeout(function(){H("")},3e3)},J=function(){k(""),S(""),P(""),c(),p()};Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");if(e){var a=JSON.parse(e);b(a),_.setToken(a.token)}},[]);var W=function(e){return S(e.target.value)},z=function(e){return P(e.target.value)},Y=function(){var e=Object(N.a)(w.a.mark(function e(a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,A.login({username:j,password:F}).then(function(e){window.localStorage.setItem("logged-Expense-Split-User",JSON.stringify(e)),_.setToken(e.token),b(e),J(),R(r.a.createElement("div",{id:"snackbar"},"Hi ",e.username," ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_satisfied")))}).catch(function(e){R(r.a.createElement("div",{id:"snackbar"},"Invalid Username / Password ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_dissatisfied"))),J()});case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),V=function(){var e=Object(N.a)(w.a.mark(function e(a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,G.signup({name:y,username:j,password:F}).then(function(e){R(r.a.createElement("div",{id:"snackbar"},"User ",e.name," added ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_satisfied"))),J()}).catch(function(e){R(r.a.createElement("div",{id:"snackbar"},"Something went wrong ",r.a.createElement("i",{className:"material-icons face"},"sentiment_very_dissatisfied"))),J()});case 3:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return""===h?r.a.createElement("div",null,r.a.createElement(g,{msg:q}),r.a.createElement(B.a.Link,{onClick:function(){return l(!0)}},r.a.createElement("b",null,"log ",r.a.createElement("span",{className:"foo"},"In"))),r.a.createElement(I,{show:t,Close:c,username:W,pwd:z,login:Y}),r.a.createElement(B.a.Link,{onClick:function(){return d(!0)}},r.a.createElement("b",null,"Sign ",r.a.createElement("span",{className:"foo"},"Up"))),r.a.createElement(M,{show:u,Close:p,name:function(e){return k(e.target.value)},username:W,pwd:z,signup:V}),r.a.createElement(B.a.Link,null,r.a.createElement(s.b,{to:"/about"},r.a.createElement("b",null,"about")))):r.a.createElement("div",null,r.a.createElement(g,{msg:q}),r.a.createElement(B.a.Link,null,r.a.createElement(s.b,{to:"/user"},r.a.createElement("b",null,h.name))),r.a.createElement(B.a.Link,{onClick:function(){R(r.a.createElement("div",{id:"snackbar"},"Bye ",h.username," ",r.a.createElement("i",{className:"material-icons face"},"sentiment_dissatisfied"))),b(""),window.localStorage.removeItem("logged-Expense-Split-User"),_.setToken("")}},r.a.createElement("b",null,"Logout")))},P=function(){return r.a.createElement(D.a,{collapseOnSelect:!0,expand:"sm",className:"fixed-top"},r.a.createElement(D.a.Brand,{href:"/"},r.a.createElement("b",null,"Expense ",r.a.createElement("span",{className:"slash"},"/")," Split")),r.a.createElement(D.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(D.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(B.a,{className:"ml-auto"},r.a.createElement(F,null))))},L=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),s=Object(i.a)(c,2),m=s[0],o=s[1];Object(n.useEffect)(function(){var e=window.localStorage.getItem("logged-Expense-Split-User");e&&_.getData().then(function(a){return l(a.filter(function(a){return a.user.id===JSON.parse(e).id}))})},[]);var f=function(e){o(e),setTimeout(function(){o("")},3e3)},h=function(){var e=Object(N.a)(w.a.mark(function e(a){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Wanna delete?")){e.next=4;break}return e.next=4,_.deleteData(a.id).then(function(e){l(t.filter(function(e){return e.id!==a.id})),f(r.a.createElement("div",{id:"snackbar"},"Deleted!"))}).catch(function(e){f(r.a.createElement("div",{id:"snackbar"},"Couldn't delete ",a.expense_name))});case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}();return 0===t.length?r.a.createElement("center",null,r.a.createElement("p",null,"No records to display!")):r.a.createElement(u.a,{fluid:!0},r.a.createElement(g,{msg:m}),r.a.createElement(d.a,null,t.map(function(e,a){return r.a.createElement(p.a,null,r.a.createElement(E.a,{className:"infoCard",key:a},r.a.createElement("div",null,r.a.createElement("div",{className:"flexDisplay"},r.a.createElement("h4",null,e.expense_name),r.a.createElement("span",{className:"tools"},r.a.createElement("i",{className:"material-icons delete",title:"delete",onClick:function(){return h(e)}},"delete"))),r.a.createElement("div",{className:"flexDisplay blocks"},r.a.createElement("i",{className:"material-icons calendar"},"event"),r.a.createElement("span",null,new Date(e.date).toDateString()))),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Your Group"),e.members.map(function(e,a){return r.a.createElement("div",{key:a,className:"flexDisplay"},r.a.createElement("i",{className:"material-icons person"},"person"),r.a.createElement("span",null,e.name))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Expenses"),e.expenses.map(function(e,a){var t=e.to_whom.filter(function(e){return!0===e.isChecked});return r.a.createElement("div",{key:a,style:{marginBottom:"10px"}},r.a.createElement("div",{className:"flexDisplay"},r.a.createElement("i",{className:"material-icons white"},"navigate_next"),r.a.createElement("span",{className:"white"},"Amount"),r.a.createElement("span",null,e.amount)),r.a.createElement("div",null,r.a.createElement("span",{className:"white"},"By"),r.a.createElement("span",null,e.by_whom)),r.a.createElement("div",{style:{width:"max-content"}},r.a.createElement("span",{className:"white"},"To"),t.map(function(e,a){return r.a.createElement("span",{key:a},e.name)})))})),r.a.createElement("hr",null),r.a.createElement("div",{className:"blocks"},r.a.createElement("h6",null,"Splitted Expenses"),e.splitted.map(function(e,a){return r.a.createElement("div",{key:a},e.splittedExp.map(function(a,t){return r.a.createElement("div",{key:t,className:"flexDisplay"},r.a.createElement("span",null,e.member),r.a.createElement("div",{className:"flexDisplay",style:{color:"white",paddingLeft:"5px",paddingRight:"5px"}},r.a.createElement("i",{className:"material-icons"},"trending_flat"),r.a.createElement("span",{style:{margin:"auto"}},a.amount)),r.a.createElement("span",null,a.to))}))}))))})))},U=function(){return r.a.createElement(s.a,null,r.a.createElement(P,null),r.a.createElement(m.a,{exact:!0,path:"/",component:T}),r.a.createElement(m.a,{exact:!0,path:"/user",render:function(){return r.a.createElement(L,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(93);c.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[63,1,2]]]);
//# sourceMappingURL=main.52e1abc0.chunk.js.map