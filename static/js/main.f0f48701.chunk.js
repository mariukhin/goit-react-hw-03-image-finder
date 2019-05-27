(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__2VbCk",searchInput:"SearchForm_searchInput__Fmj7n"}},14:function(e,t,a){e.exports={overlay:"Modal_overlay__3Ykms",modal:"Modal_modal__IZH-v"}},2:function(e,t,a){e.exports={galleryItem:"GalleryItem_galleryItem__PTRQD",galleryItemImg:"GalleryItem_galleryItemImg__1eYht",stats:"GalleryItem_stats__1TXaB",statsItem:"GalleryItem_statsItem__IMZb3",fullscreenButton:"GalleryItem_fullscreenButton__jp1pC"}},22:function(e,t,a){},25:function(e,t,a){e.exports={gallery:"Gallery_gallery__8qttN"}},27:function(e,t,a){e.exports={loader:"Loader_loader__2KDp9"}},28:function(e,t,a){e.exports={button:"LoadMoreBtn_button__3EPDN"}},30:function(e,t,a){e.exports=a(79)},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),l=a.n(o),s=a(15),c=a(3),i=a(4),m=a(6),u=a(5),p=a(7);function d(e){return e.map(function(e){return{id:e.id,webformatURL:e.webformatURL,largeImageURL:e.largeImageURL,likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads}})}var h=a(22),f=a.n(h),g=a(23),b=a(8),v=a(13),y=a.n(v),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={inputVal:""},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(b.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.onSubmit)(Object(g.a)({},a.state))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.inputVal;return r.a.createElement("form",{className:y.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{className:y.a.searchInput,type:"text",autoComplete:"off",placeholder:"Search images...",name:"inputVal",value:e,onChange:this.handleInputChange}))}}]),t}(n.Component),E=function(e){var t=e.text;return r.a.createElement("h1",null,"Whoops, something went wrong: ",t)},I=a(24),w=a.n(I),O=a(14),k=a.n(O),j=function(e){function t(){var e,a;Object(c.a)(this,t);for(var r=arguments.length,o=new Array(r),l=0;l<r;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).backdropRef=Object(n.createRef)(),a.handleKeyPress=function(e){var t=a.props.onClose;"Escape"===e.code&&t()},a.handleBackdropClick=function(e){var t=a.backdropRef.current,n=a.props.onClose;t&&e.target!==t||n()},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.imgUrl;return r.a.createElement("div",{className:k.a.overlay,ref:this.backdropRef,role:"presentation",onClick:this.handleBackdropClick,onKeyDown:this.handleKeyPress},r.a.createElement("div",{className:k.a.modal},r.a.createElement(w.a,null,r.a.createElement("img",{src:e,alt:"img"}))))}}]),t}(n.Component),L=a(2),N=a.n(L),M=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isModalOpen:!1},a.onModalHandle=function(){a.setState(function(e){return{isModalOpen:!e.isModalOpen}})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.largeImageURL,n=e.webformatURL,o=e.likes,l=e.views,s=e.comments,c=e.downloads,i=this.state.isModalOpen;return r.a.createElement("li",{className:N.a.galleryItem,key:t},r.a.createElement("img",{className:N.a.galleryItemImg,src:n,alt:"img"}),r.a.createElement("div",{className:N.a.stats},r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"thumb_up"),o),r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"visibility"),l),r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"comment"),s),r.a.createElement("p",{className:N.a.statsItem},r.a.createElement("i",{className:"material-icons"},"cloud_download"),c)),r.a.createElement("button",{type:"button",className:N.a.fullscreenButton,onClick:this.onModalHandle},r.a.createElement("i",{className:"material-icons"},"zoom_out_map")),i&&r.a.createElement(j,{imgUrl:a,onClose:this.onModalHandle}))}}]),t}(n.Component),C=a(25),S=a.n(C),x=function(e){var t=e.cards;return r.a.createElement("ul",{className:S.a.gallery},t.map(function(e){return r.a.createElement(M,Object.assign({key:e.id},e))}))},R=a(26),U=a.n(R),V=a(27),B=a.n(V),D=function(){return r.a.createElement(U.a,{name:"ball-spin-fade-loader",color:"blue",className:B.a.loader})},F=a(28),G=a.n(F),K=function(e){var t=e.onLoadMore;return r.a.createElement("button",{type:"button",className:G.a.button,onClick:t},"Load more")},P=a(29),A=a.n(P),H="https://pixabay.com/api/?image_type=photo&orientation=horizontal&",T="12526060-823e0f4842d06a1c968a99ad8";var q=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={pics:[],page:1,inputVal:"",isLoading:!1,isLoadMore:!1,error:null},a.reset=function(){a.setState({pics:[],page:1,inputVal:"",isLoading:!1,isLoadMore:!1,error:null})},a.fetchItems=function(e){var t=a.state,n=t.pics;(function(e,t){var a="".concat(H,"q=").concat(e.toLowerCase(),"&page=").concat(t,"&per_page=12&key=").concat(T);return A.a.get(a).then(function(e){return e.data.hits})})(e,t.page).then(function(e){a.setState({pics:[].concat(Object(s.a)(n),Object(s.a)(d(e)))})}).catch(function(e){a.reset(),a.setState({error:e})}).finally(function(){return a.setState({isLoading:!1,isLoadMore:!0})})},a.loadMore=function(){a.setState(function(e){return{isLoadMore:!1,page:e.page+1}})},a.formSubmit=function(e){var t=e.inputVal;a.reset(),a.setState({isLoading:!0}),a.fetchItems(t),a.setState({isLoadMore:!0,inputVal:t})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=t.page,n=t.pics,r=this.state,o=r.page,l=r.inputVal;a!==o&&n.length>=12&&this.fetchItems(l),window.scrollTo({left:0,top:1300*o,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.pics,a=e.isLoading,n=e.error,o=e.isLoadMore,l=t.length>0;return r.a.createElement("div",{className:f.a.app},r.a.createElement(_,{onSubmit:this.formSubmit}),n&&r.a.createElement(E,{text:n.message}),a&&r.a.createElement(D,null),l&&r.a.createElement(x,{cards:t}),o&&l&&r.a.createElement(K,{onLoadMore:this.loadMore}))}}]),t}(n.Component);l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.f0f48701.chunk.js.map