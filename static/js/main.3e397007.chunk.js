(this["webpackJsonpreact-library"]=this["webpackJsonpreact-library"]||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),r=a.n(l),c=(a(15),a(9)),i=a(1),s=a(2),u=a(4),h=a(3),m=(a(16),a(8)),b=a(19),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(m.a)({},a,o))},n.handleSubmit=function(e){var t={id:Object(b.a)(),title:n.state.bookTitle,author:n.state.bookAuthor,pages:n.state.bookPages,status:n.state.bookStatus};""===t.title||""===t.author||""===t.pages?alert("Please fill in all of the fields"):(n.props.onClick(t),n.setState({bookTitle:"",bookAuthor:"",bookPages:"",bookStatus:""}))},n.state={bookTitle:"",bookAuthor:"",bookPages:"",bookStatus:""},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{name:"form",action:""},o.a.createElement("h1",{id:"inputTitle"},"New Book"),o.a.createElement("input",{onChange:this.handleChange,value:this.state.bookTitle,type:"text",name:"bookTitle",id:"title",placeholder:"Title"}),o.a.createElement("input",{onChange:this.handleChange,value:this.state.bookAuthor,type:"text",name:"bookAuthor",id:"author",placeholder:"Author"}),o.a.createElement("input",{onChange:this.handleChange,value:this.state.bookPages,type:"number",name:"bookPages",id:"pages",min:"1",placeholder:"Number of pages"}),o.a.createElement("select",{onChange:this.handleChange,value:this.state.bookStatus,name:"bookStatus",id:"read"},o.a.createElement("option",{disabled:!0},"Read/To Read"),o.a.createElement("option",{value:"read"},"read"),o.a.createElement("option",{value:"not-read"},"to-read")),o.a.createElement("button",{onClick:this.handleSubmit,type:"submit"},"Add")))}}]),a}(n.Component),k=a(5);var p=function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"navbar"},o.a.createElement("h1",null,"Online Library"),o.a.createElement("p",null,"Created by Irem for the Odin Project | ",o.a.createElement(k.a,null)," ",o.a.createElement("a",{href:"https://github.com/ergunirem",target:"blank",rel:"noopener"},"ergunirem"))))},E=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDelete=function(){n.props.onClick(n.props.book.id)},n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement("tr",null,o.a.createElement("td",null,this.props.book.title),o.a.createElement("td",null,this.props.book.author),o.a.createElement("td",null,this.props.book.pages),o.a.createElement("td",null,this.props.book.status),o.a.createElement("td",null,o.a.createElement("button",{onClick:this.handleDelete},o.a.createElement(k.b,null))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleDelete=function(e){n.props.onClick(e)},n.state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props.booksData.map((function(t){return o.a.createElement(E,{key:t.id,book:t,onClick:e.handleDelete})}));return o.a.createElement("div",null,o.a.createElement("table",{border:"1",className:"my-table"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Title"),o.a.createElement("th",null,"Author"),o.a.createElement("th",null,"Pages"),o.a.createElement("th",null,"Status"),o.a.createElement("th",null,"Delete"))),o.a.createElement("tbody",null,t)))}}]),a}(n.Component),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.setState({books:[].concat(Object(c.a)(n.state.books),[e])},(function(){return localStorage.setItem("localBooks",JSON.stringify(n.state.books))}))},n.handleDelete=function(e){var t=n.state.books.filter((function(t){return t.id!==e}));n.setState({books:t},(function(){return localStorage.setItem("localBooks",JSON.stringify(n.state.books))}))},n.state={books:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("localBooks"));this.setState({books:e})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(d,{onClick:this.handleSubmit}),o.a.createElement(f,{booksData:this.state.books,onClick:this.handleDelete}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[10,1,2]]]);
//# sourceMappingURL=main.3e397007.chunk.js.map