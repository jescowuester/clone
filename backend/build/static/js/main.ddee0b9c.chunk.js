(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.206d21fc.png"},21:function(e,t,a){},28:function(e,t){},30:function(e,t,a){e.exports=a(62)},37:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(27),r=a.n(s),i=(a(21),a(2)),o=a(3),l=a(5),m=a(4),u=a(6),_=(a(37),a(67)),d=a(63),h=a(29),f=a(39),p=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggleClass=function(){a.setState({liked:!a.state.liked})},a.state={liked:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"card",key:this.props.id},c.a.createElement(f.a,{to:"/user/".concat(this.props.creatorName)},c.a.createElement("div",{className:"card__profile",onClick:this.goToProfile},c.a.createElement("img",{className:"card__profile__picture",src:this.props.creatorImage,alt:""}),c.a.createElement("div",{className:"card__profile__text"},c.a.createElement("div",{className:"card__profile__text__top"},c.a.createElement("h3",{className:"card__profile__title"},this.props.title)),c.a.createElement("div",{className:"card__profile__text__bottom"},c.a.createElement("p",{className:"card__profile__name"},this.props.creatorName))))),c.a.createElement("div",{className:"card__content"},c.a.createElement("img",{className:"card__content__image",src:this.props.image,alt:""})),c.a.createElement("div",{className:"bottom-bar"},c.a.createElement("div",{className:"bottom-bar__icon bottom-like"},c.a.createElement("i",{className:this.state.liked?"heart--filled fas fa-heart":"far fa-heart",onClick:this.toggleClass})),c.a.createElement("div",{className:"bottom-bar__icon bottom-comment"},c.a.createElement("i",{className:"far fa-comment"})),c.a.createElement("div",{className:"bottom-bar__icon bottom-share"},c.a.createElement("i",{className:"fas fa-retweet"}))))}}]),t}(n.Component),b=a(7),v=a.n(b),E={backend:"http://http://159.65.120.224/",mongodb:"localhost:27017"},g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getfeed=function(){v()({method:"get",withCredentials:!0,url:"".concat(E.backend,"/createFeed")}).then(function(e){a.setState({tweets:Object(h.a)(e.data)}),console.log(e.data[2])})},a.state={tweets:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getfeed()}},{key:"render",value:function(){return c.a.createElement("div",null,0===this.state.tweets.length?c.a.createElement("p",null,"loading..."):this.state.tweets.map(function(e){return c.a.createElement(p,{creatorName:e.creator.name,creatorImage:"none"===e.creator.profile?"https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg":e.creator.profile,image:e.image,id:e.creator._id,title:e.title})}))}}]),t}(n.Component),j=(n.Component,a(64)),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={active:"home"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"home__navbar"},c.a.createElement(j.a,{activeClassName:"active",to:"/home/feed"},c.a.createElement("i",{className:"far fa-square"})),c.a.createElement(j.a,{activeClassName:"active",to:"/home/trending"},c.a.createElement("i",{className:"fas fa-fire"})))}}]),t}(n.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",{className:"home__navbar home__navbar__container"},c.a.createElement(O,null)),c.a.createElement("div",{className:"home__content home__content__container"},c.a.createElement(g,null)))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={active:"home",newPost:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/home"},c.a.createElement("i",{className:"fas fa-home"})),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/search"},c.a.createElement("i",{className:"fas fa-search"})),c.a.createElement("div",null,c.a.createElement("button",{className:"nav__button",onClick:this.props.newPost},c.a.createElement("i",{className:"fas fa-plus"}))),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/notifications"},c.a.createElement("i",{className:"fas fa-heart"})),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/profile"},c.a.createElement("i",{className:"fas fa-user"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){a.props.getMatches(e.currentTarget.value)},a.state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("input",{placeholder:"Search...",onChange:this.handleChange}),c.a.createElement("p",null,this.state.query))}}]),t}(n.Component),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={query:[]},a.getMatches=function(e){console.log(e),v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/search"),data:{name:e}}).then(function(e){a.setState({query:e.data}),console.log(a.state.query)})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"search__bar search__bar__container"},c.a.createElement(C,{getMatches:this.getMatches})),c.a.createElement("div",{className:"search__results__container"},this.state.query.map(function(e){return c.a.createElement(f.a,{key:e._id,to:"/user/".concat(e.name)},e.name)})))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null)}}]),t}(n.Component),P=(n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"notifications__navbar"},c.a.createElement(j.a,{activeClassName:"active",to:"/notifications/feed"},c.a.createElement("i",{className:"far fa-square"})),c.a.createElement(j.a,{activeClassName:"active",to:"/notifications/message"},c.a.createElement("i",{className:"fas fa-fire"})))}}]),t}(n.Component)),x=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"notifications"},c.a.createElement("div",{className:"notifications__navbar notifications__navbar__container"},c.a.createElement(P,null)),c.a.createElement("div",{className:"notifications__content notifications__content__container"},c.a.createElement(y,null)))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null),c.a.createElement(p,null))}}]),t}(n.Component),S=(n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={active:"home"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"profile__navbar"},c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/home/feed"},c.a.createElement("i",{className:"far fa-square"})),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/home/trending"},c.a.createElement("i",{className:"fas fa-fire"})))}}]),t}(n.Component)),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={active:"home"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"profile__info "},c.a.createElement("div",{className:"profile__info__top"},c.a.createElement("div",{className:"profile__info__pic"},c.a.createElement("img",{className:"profile__personal__picture",src:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:""})),c.a.createElement("div",{className:"profile__info__social"},c.a.createElement("div",{className:"profile__info__social__stats"},c.a.createElement("div",{className:"profile__info__stats"},c.a.createElement("div",{className:"profile__info__stats__numbers"},c.a.createElement("h3",null,"777")),c.a.createElement("div",{className:"profile__info__stats__words"},c.a.createElement("h4",null,"Posted"))),c.a.createElement("div",{className:"profile__info__stats"},c.a.createElement("div",{className:"profile__info__stats__numbers"},c.a.createElement("h3",null,"777")),c.a.createElement("div",{className:"profile__info__stats__words"},c.a.createElement("h4",null,"Followers"))),c.a.createElement("div",{className:"profile__info__stats"},c.a.createElement("div",{className:"profile__info__stats__numbers"},c.a.createElement("h3",null,"777")),c.a.createElement("div",{className:"profile__info__stats__words"},c.a.createElement("h4",null,"Followed")))),c.a.createElement("div",{className:"profile__button__blue__container"},c.a.createElement("button",{className:"profile__button__blue"},"Max Musterman")))),c.a.createElement("div",{className:"profile__info__bio"},c.a.createElement("p",{className:"profile__personal__name"})))}}]),t}(n.Component),M=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"settings__navbar"},c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/settings"},c.a.createElement("p",null,"user.name"),c.a.createElement("i",{className:"fas fa-cogs"})))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Profile"},c.a.createElement("div",{className:"settings settings__nav__container"},c.a.createElement(M,null)),c.a.createElement("div",{className:"profile__info profile__info__container"},c.a.createElement(R,null)),c.a.createElement("div",{className:"profile__navbar profile__navbar__container"},c.a.createElement(S,null)),c.a.createElement("div",{className:"profile__content profile__content__container"},c.a.createElement(A,null)))}}]),t}(n.Component),L=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"setting__logout"},c.a.createElement("div",{className:"setting__containers setting__title"},c.a.createElement("img",{src:a(19),alt:"",className:"setting__title__pic"}),c.a.createElement("h3",null,"Clone")),c.a.createElement("div",{className:"setting__containers setting__button"},c.a.createElement("button",{className:"setting__logout__button"},"Log-out")))}}]),t}(n.Component),F=a(28),D=a.n(F),B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).getUserFeed=function(){v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/getUserFeed"),data:{name:a.props.name}}).then(function(e){a.setState({user:e.data,tweets:e.data.tweets.sort()})})},a.state={user:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getUserFeed()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.user?this.state.user.tweets.map(function(t){return c.a.createElement(p,{creatorName:e.state.user.name,creatorImage:"none"===e.state.user.profile?"https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg":e.state.user.profile,image:t.image,id:e.state.user._id,title:t.title})}):c.a.createElement("p",null,"loading..."))}}]),t}(n.Component),T=(n.Component,function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={active:"home"},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"friend__navbar"},c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/home/feed"},c.a.createElement("i",{className:"far fa-square"})),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/home/trending"},c.a.createElement("i",{className:"fas fa-fire"})))}}]),t}(n.Component)),I=a(13),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).follow=function(){console.log("hi:)"),v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/follow"),data:{name:a.state.data.name,id:a.state.data._id}}).then(function(e){a.setState({userLoaded:!0})})},a.state={active:"home",following:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/getUserInfo"),data:{name:this.props.name}}).then(function(t){e.setState(Object(I.a)({userLoaded:!0},t))})}},{key:"render",value:function(){return console.log(this.state),console.log(this.state.data),this.state.userLoaded&&this.state.data.tweets?c.a.createElement("div",{className:"friend__info "},c.a.createElement("div",{className:"friend__info__top"},c.a.createElement("div",{className:"friend__info__pic"},c.a.createElement("img",{className:"friend__personal__picture",src:"none"===this.state.data.profile?"https://www.dts.edu/wp-content/uploads/sites/6/2018/04/Blank-Profile-Picture.jpg":this.state.data.profile,alt:""})),c.a.createElement("div",{className:"friend__info__social"},c.a.createElement("div",{className:"friend__info__social__stats"},c.a.createElement("div",{className:"friend__info__stats"},c.a.createElement("div",{className:"friend__info__stats__numbers"},c.a.createElement("h3",null,this.state.data.tweets.length)),c.a.createElement("div",{className:"friend__info__stats__words"},c.a.createElement("h4",null,"Posted"))),c.a.createElement("div",{className:"friend__info__stats"},c.a.createElement("div",{className:"friend__info__stats__numbers"},c.a.createElement("h3",null,this.state.data.followers.length)),c.a.createElement("div",{className:"friend__info__stats__words"},c.a.createElement("h4",null,"Followers"))),c.a.createElement("div",{className:"friend__info__stats"},c.a.createElement("div",{className:"friend__info__stats__numbers"},c.a.createElement("h3",null,this.state.data.following.length)),c.a.createElement("div",{className:"friend__info__stats__words"},c.a.createElement("h4",null,"Followed")))),c.a.createElement("div",{className:"friend__button__blue__container"},c.a.createElement("button",{className:"friend__button__blue",onClick:this.follow},this.state.following?"following":"follow")))),c.a.createElement("div",{className:"friend__info__bio"},c.a.createElement("p",{className:"friend__personal__name"},this.state.data.name))):c.a.createElement("div",null,"loading...")}}]),t}(n.Component),J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"friendsettings__navbar"},c.a.createElement("div",{className:"top__nav__back"},c.a.createElement("i",{className:"fas fa-angle-left"})),c.a.createElement("div",{className:"friendsettings__navbar__username"},c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/friendsettings"},c.a.createElement("p",null,this.props.name))))}}]),t}(n.Component),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Profile"},c.a.createElement("div",{className:"friendsettings friendsettings__nav__container"},c.a.createElement(J,{name:this.props.match.params.name})),c.a.createElement("div",{className:"friend__info friend__info__container"},c.a.createElement(U,{name:this.props.match.params.name})),c.a.createElement("div",{className:"friend__navbar friend__navbar__container"},c.a.createElement(T,null)),c.a.createElement("div",{className:"friend__content friend__content__container"},c.a.createElement(B,{name:this.props.match.params.name})))}}]),t}(n.Component),H=a(14),Q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("input",{type:["password","email"].includes(this.props.type)?this.props.type:"text",placeholder:this.props.type,onChange:function(t){e.props.submit(t.currentTarget.value,e.props.type,e.props.action)}})}}]),t}(n.Component),$=a(65),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).submit=function(e,t,n){a.setState(Object(H.a)({},n+t,e)),console.log(a.state)},a.login=function(){a.state.Loginname&&a.state.Loginpassword?(console.log("sending login"),v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/login"),data:Object(I.a)({},a.state)}).then(function(e){200===e.status&&(console.log("login successfull, status: ".concat(e.status)),a.props.auth())}).catch(function(e){console.log("error logging in:",e)})):console.log("please specify all the fields")},a.state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.isAuthenticated?c.a.createElement($.a,{to:{pathname:"/home"}}):c.a.createElement("div",{className:"login"},this.state.error&&!this.state.success&&c.a.createElement("div",null,"ERROR: ",this.state.error),c.a.createElement("div",{className:"login__content"},c.a.createElement("div",{className:"login__content__containers login__content__title"},c.a.createElement("img",{src:a(19),alt:"",className:"login__content__title__pic"}),c.a.createElement("h3",null,"Clone")),c.a.createElement("div",{className:"login__content__containers login__content__input__name"},c.a.createElement(Q,{type:"name",action:"Login",submit:this.submit})),c.a.createElement("div",{className:"login__content__containers login__content__input__password"},c.a.createElement(Q,{type:"password",action:"Login",submit:this.submit})),c.a.createElement("div",{className:"login__content__containers login__content__bottom"},c.a.createElement("div",{className:"login__content__button"},c.a.createElement("button",{onClick:this.login,className:"login__button"},"Login")),c.a.createElement("div",{className:"login__content__register"},c.a.createElement("h5",null,"Don't have an account?"),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/register"},c.a.createElement("h5",null,"Register here"))))),c.a.createElement(f.a,{to:"/register"},"register"))}}]),t}(n.Component),G=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).submit=function(e,t,n){a.setState(Object(H.a)({},n+t,e)),console.log(a.state)},a.register=function(){a.state.Registername&&a.state.Registeremail&&a.state.Registerpassword?(console.log("sending register"),v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/register"),data:Object(I.a)({},a.state)}).then(function(e){console.log(e),e.data.error?a.setState({error:e.data.error}):e.data.success&&(console.log("success"),a.setState({success:e.data.success}))})):console.log("please specify all the fields")},a.state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"register"},this.state.error&&!this.state.success&&c.a.createElement("div",null,"ERROR: ",this.state.error),c.a.createElement("div",{className:"register__content"},c.a.createElement("div",{className:"register__content__containers register__content__title"},c.a.createElement("img",{src:a(19),alt:"",className:"register__content__title__pic"}),c.a.createElement("h3",null,"Clone")),c.a.createElement("div",{className:"register__content__containers register__content__input__name"},c.a.createElement(Q,{type:"name",action:"Register",submit:this.submit})),c.a.createElement("div",{className:"register__content__containers register__content__input__email"},c.a.createElement(Q,{type:"email",action:"Register",submit:this.submit})),c.a.createElement("div",{className:"register__content__containers register__content__input__password"},c.a.createElement(Q,{type:"password",action:"Register",submit:this.submit})),c.a.createElement("div",{className:"register__content__containers register__content__bottom"},c.a.createElement("div",{className:"register__content__button"},c.a.createElement("button",{onClick:this.register,className:"register__button"},"register")),c.a.createElement("div",{className:"register__content__register"},c.a.createElement("h5",null,"Already have an account?"),c.a.createElement(j.a,{exact:!0,activeClassName:"active",to:"/login"},c.a.createElement("h5",null,"Login here"))))))}}]),t}(n.Component),K=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={auth:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.auth()}},{key:"render",value:function(){return void 0===this.props.isAuthenticated?c.a.createElement("div",null,"one second please :)"):!0===this.props.isAuthenticated?c.a.createElement(d.a,{path:this.props.path,component:this.props.component}):c.a.createElement($.a,{to:{pathname:"/login"}})}}]),t}(n.Component),V=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){"popup__background"===e.target.className&&a.props.newPost()},a.state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.props.active?c.a.createElement("div",{className:"popup__background",onClick:this.handleClick},c.a.createElement(X,{newPost:this.props.newPost})):null}}]),t}(n.Component),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).submit=function(e,t,n){a.setState(Object(H.a)({},n+t,e)),console.log(a.state)},a.submitPost=function(){v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/newPost"),data:Object(I.a)({},a.state)}).then(function(e){a.props.newPost()}).catch(function(e){return console.log("error submitting the post:",e)})},a.state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"popup__content"},c.a.createElement(Q,{type:"title",action:"newPost",submit:this.submit}),c.a.createElement(Q,{type:"content",action:"newPost",submit:this.submit}),c.a.createElement("button",{onClick:this.submitPost},"submit"))}}]),t}(n.Component),Y=V,Z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).auth=function(){v()({method:"post",withCredentials:!0,url:"".concat(E.backend,"/auth")}).then(function(e){"authenticated"===e.data?(a.setState({isAuthenticated:!0}),console.log("authenticated:",a.state.isAuthenticated)):"unauthenticated"===e.data&&(a.setState({isAuthenticated:!1}),console.log("authenticated:",a.state.isAuthenticated))})},a.newPostToggle=function(){console.log("newpost popup is activated:",!a.state.newPost),a.state.isAuthenticated&&a.setState({newPost:!a.state.newPost})},a.state={active:"home",newPost:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.auth()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement(_.a,null,c.a.createElement(d.a,{path:"/user/:name",component:W}),c.a.createElement(d.a,{path:"/register",component:G}),c.a.createElement(d.a,{exact:!0,path:"/login",render:function(t){return c.a.createElement(z,Object.assign({},t,{auth:e.auth,isAuthenticated:e.state.isAuthenticated}))}}),c.a.createElement(K,{exact:!0,auth:this.auth,isAuthenticated:this.state.isAuthenticated,path:"/home",component:N}),c.a.createElement(K,{exact:!0,auth:this.auth,isAuthenticated:this.state.isAuthenticated,path:"/search",component:k}),c.a.createElement(K,{exact:!0,auth:this.auth,isAuthenticated:this.state.isAuthenticated,path:"/notifications",component:x}),c.a.createElement(K,{exact:!0,auth:this.auth,isAuthenticated:this.state.isAuthenticated,path:"/profile",component:q}),c.a.createElement(d.a,{exact:!0,path:"/settings",component:L}),c.a.createElement(d.a,{exact:!0,path:"/post",component:D.a}),c.a.createElement(d.a,{exact:!0,path:"/friend",component:W}),c.a.createElement(d.a,{exact:!0,path:"/notifications",component:x})),c.a.createElement(Y,{newPost:this.newPostToggle,active:this.state.newPost}),c.a.createElement(w,{newPost:this.newPostToggle}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(66);r.a.render(c.a.createElement(ee.a,null,c.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.ddee0b9c.chunk.js.map