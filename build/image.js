"use strict";var _extends=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},_=require("lodash"),React=require("react"),qs=require("query-string"),DEFAULT_PROPS={usePlaceholder:!1,placeholder:{theme:"vine",auto:!0}},Img=React.createClass({displayName:"Img",propTypes:{src:React.PropTypes.string.isRequired,usePlaceholder:React.PropTypes.bool,placeholder:React.PropTypes.object},getDefaultProps:function(){return DEFAULT_PROPS},render:function(){var e=this.props,r=_.omit(e,"src","usePlaceholder","placeholder");if(e.usePlaceholder){var t=qs.stringify(e.placeholder),a="holder.js/"+r.width+"x"+r.height+"?"+t;return r=_.omit(r,"width","height"),React.createElement("img",_extends({},r,{ref:"placeholder","data-src":a}))}return React.createElement("img",_extends({},r,{src:e.src}))},componentDidMount:function(){this._initPlaceholderImage()},componentDidUpdate:function(){this._initPlaceholderImage()},_initPlaceholderImage:function(){if(!this._placeholderInitialised&&this.props.usePlaceholder){this._placeholderInitialised=!0;var e=React.findDOMNode(this.refs.placeholder),r=require("holderjs");r.run({domain:"holder.js",images:e,object:null,bgnodes:null,stylenodes:null})}}});Img.DEFAULT_PROPS=DEFAULT_PROPS,module.exports=Img;