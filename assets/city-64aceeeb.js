var tv=Object.defineProperty;var iv=(Hi,St,zt)=>St in Hi?tv(Hi,St,{enumerable:!0,configurable:!0,writable:!0,value:zt}):Hi[St]=zt;var vt=(Hi,St,zt)=>(iv(Hi,typeof St!="symbol"?St+"":St,zt),zt);var nv=(Hi,St)=>()=>(St||Hi((St={exports:{}}).exports,St),St.exports),rv=nv(Hc=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2023 Three.js Authors
* SPDX-License-Identifier: MIT
*/const St="157",zt={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gh=0,io=1,_h=2,no=1,vh=2,hi=3,ui=0,Ct=1,ti=2,bi=0,hn=1,ro=2,ao=3,so=4,xh=5,un=100,yh=101,Mh=102,oo=103,lo=104,Sh=200,Eh=201,bh=202,Th=203,co=204,ho=205,Ah=206,wh=207,Rh=208,Lh=209,Ch=210,Ph=0,Ih=1,Nh=2,xa=3,Dh=4,Uh=5,Oh=6,Fh=7,xr=0,Bh=1,zh=2,Ti=0,kh=1,Hh=2,Vh=3,Gh=4,Wh=5,uo=300,dn=301,pn=302,yr=303,ya=304,Mr=306,Ai=1e3,Pt=1001,Sr=1002,pt=1003,Ma=1004,Er=1005,It=1006,po=1007,Vi=1008,wi=1009,Xh=1010,jh=1011,Sa=1012,fo=1013,Ri=1014,di=1015,Jn=1016,mo=1017,go=1018,Gi=1020,qh=1021,kt=1023,Yh=1024,Kh=1025,Wi=1026,fn=1027,Zh=1028,_o=1029,Jh=1030,vo=1031,xo=1033,Ea=33776,ba=33777,Ta=33778,Aa=33779,yo=35840,Mo=35841,So=35842,Eo=35843,$h=36196,bo=37492,To=37496,Ao=37808,wo=37809,Ro=37810,Lo=37811,Co=37812,Po=37813,Io=37814,No=37815,Do=37816,Uo=37817,Oo=37818,Fo=37819,Bo=37820,zo=37821,wa=36492,ko=36494,Ho=36495,Qh=36283,Vo=36284,Go=36285,Wo=36286,$n=2300,mn=2301,Ra=2302,Xo=2400,jo=2401,qo=2402,eu=2500,tu=0,Yo=1,La=2,Ko=3e3,Xi=3001,iu=3200,nu=3201,br=0,ru=1,Ht="",Je="srgb",xt="srgb-linear",Ca="display-p3",Tr="display-p3-linear",Ar="linear",$e="srgb",wr="rec709",Rr="p3",Pa=7680,au=519,su=512,ou=513,lu=514,cu=515,hu=516,uu=517,du=518,pu=519,Ia=35044,Zo="300 es",Na=1035,pi=2e3,Lr=2001;class ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jo=1234567;const gn=Math.PI/180,_n=180/Math.PI;function Zt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Et[r&255]+Et[r>>8&255]+Et[r>>16&255]+Et[r>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]).toLowerCase()}function lt(r,e,t){return Math.max(e,Math.min(t,r))}function Da(r,e){return(r%e+e)%e}function fu(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function mu(r,e,t){return r!==e?(t-r)/(e-r):0}function Qn(r,e,t){return(1-t)*r+t*e}function gu(r,e,t,i){return Qn(r,e,1-Math.exp(-t*i))}function _u(r,e=1){return e-Math.abs(Da(r,e*2)-e)}function vu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function xu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function yu(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Mu(r,e){return r+Math.random()*(e-r)}function Su(r){return r*(.5-Math.random())}function Eu(r){r!==void 0&&(Jo=r);let e=Jo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function bu(r){return r*gn}function Tu(r){return r*_n}function Ua(r){return(r&r-1)===0&&r!==0}function $o(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Cr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Au(r,e,t,i,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),u=a((e-i)/2),d=s((e-i)/2),p=a((i-e)/2),g=s((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*p,o*c);break;case"YXY":r.set(l*p,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function ii(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ke(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Vt={DEG2RAD:gn,RAD2DEG:_n,generateUUID:Zt,clamp:lt,euclideanModulo:Da,mapLinear:fu,inverseLerp:mu,lerp:Qn,damp:gu,pingpong:_u,smoothstep:vu,smootherstep:xu,randInt:yu,randFloat:Mu,randFloatSpread:Su,seededRandom:Eu,degToRad:bu,radToDeg:Tu,isPowerOfTwo:Ua,ceilPowerOfTwo:$o,floorPowerOfTwo:Cr,setQuaternionFromProperEuler:Au,normalize:Ke,denormalize:ii};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,n,a,s,o,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],_=n[0],m=n[3],f=n[6],y=n[1],v=n[4],S=n[7],T=n[2],C=n[5],w=n[8];return a[0]=s*_+o*y+l*T,a[3]=s*m+o*v+l*C,a[6]=s*f+o*S+l*w,a[1]=c*_+h*y+u*T,a[4]=c*m+h*v+u*C,a[7]=c*f+h*S+u*w,a[2]=d*_+p*y+g*T,a[5]=d*m+p*v+g*C,a[8]=d*f+p*S+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*s-o*c,d=o*l-h*a,p=c*a-s*l,g=t*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=d*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=p*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Oa.makeScale(e,t)),this}rotate(e){return this.premultiply(Oa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oa=new Be;function Qo(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function er(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function wu(){const r=er("canvas");return r.style.display="block",r}const el={};function tr(r){r in el||(el[r]=!0,console.warn(r))}const tl=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),il=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pr={[xt]:{transfer:Ar,primaries:wr,toReference:r=>r,fromReference:r=>r},[Je]:{transfer:$e,primaries:wr,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Tr]:{transfer:Ar,primaries:Rr,toReference:r=>r.applyMatrix3(il),fromReference:r=>r.applyMatrix3(tl)},[Ca]:{transfer:$e,primaries:Rr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(il),fromReference:r=>r.applyMatrix3(tl).convertLinearToSRGB()}},Ru=new Set([xt,Tr]),Ye={enabled:!0,_workingColorSpace:xt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Ru.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Pr[e].toReference,n=Pr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Pr[r].primaries},getTransfer:function(r){return r===Ht?Ar:Pr[r].transfer}};function vn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Fa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let xn;class nl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xn===void 0&&(xn=er("canvas")),xn.width=e.width,xn.height=e.height;const i=xn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=er("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=vn(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(vn(t[i]/255)*255):t[i]=vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Lu=0;class rl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Zt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let a;if(Array.isArray(n)){a=[];for(let s=0,o=n.length;s<o;s++)n[s].isDataTexture?a.push(Ba(n[s].image)):a.push(Ba(n[s]))}else a=Ba(n);i.url=a}return t||(e.images[this.uuid]=i),i}}function Ba(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?nl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Cu=0;class rt extends ji{constructor(e=rt.DEFAULT_IMAGE,t=rt.DEFAULT_MAPPING,i=Pt,n=Pt,a=It,s=Vi,o=kt,l=wi,c=rt.DEFAULT_ANISOTROPY,h=Ht){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Zt(),this.name="",this.source=new rl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Xi?Je:Ht),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ai:e.x=e.x-Math.floor(e.x);break;case Pt:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ai:e.y=e.y-Math.floor(e.y);break;case Pt:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Je?Xi:Ko}set encoding(e){tr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xi?Je:Ht}}rt.DEFAULT_IMAGE=null,rt.DEFAULT_MAPPING=uo,rt.DEFAULT_ANISOTROPY=1;class qe{constructor(e=0,t=0,i=0,n=1){qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],u=s[5],d=s[9],p=s[2],g=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(d-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(d+g)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const f=(o+1)/2,y=(u+1)/2,v=(_+1)/2,S=(l+h)/4,T=(c+p)/4,C=(d+g)/4;return f>y&&f>v?f<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(f),n=S/i,a=T/i):y>v?y<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(y),i=S/n,a=C/n):v<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(v),i=T/a,n=C/a),this.set(i,n,a,t),this}let m=Math.sqrt((g-d)*(g-d)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-d)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+u+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pu extends ji{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qe(0,0,e,t),this.scissorTest=!1,this.viewport=new qe(0,0,e,t);const n={width:e,height:t,depth:1};i.encoding!==void 0&&(tr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xi?Je:Ht),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new rt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new rl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends Pu{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class al extends rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=pt,this.minFilter=pt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Iu extends rt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=pt,this.minFilter=pt,this.wrapR=Pt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=a[s+0],p=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*_,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const T=Math.sqrt(v),C=Math.atan2(T,f*y);m=Math.sin(m*C)/T,o=Math.sin(o*C)/T}const S=o*y;if(l=l*m+d*S,c=c*m+p*S,h=h*m+g*S,u=u*m+_*S,m===1-o){const T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=a[s],d=a[s+1],p=a[s+2],g=a[s+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(a/2),d=l(i/2),p=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(s-n)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+s)/p,this._z=(a+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(a-c)/p,this._x=(n+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(s-n)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*i+t*this._x,this._y=p*n+t*this._y,this._z=p*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=s*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(a),i*Math.cos(a),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=l*t+s*n-o*i,h=l*i+o*t-a*n,u=l*n+a*i-s*t,d=-a*t-s*i-o*n;return this.x=c*l+d*-a+h*-o-u*-s,this.y=h*l+d*-s+u*-a-c*-o,this.z=u*l+d*-o+c*-s-h*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(lt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new L,sl=new Nt;class ni{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),yn.copy(e.boundingBox),yn.applyMatrix4(e.matrixWorld),this.union(yn);else{const n=e.geometry;if(n!==void 0)if(t&&n.attributes!==void 0&&n.attributes.position!==void 0){const a=n.attributes.position;for(let s=0,o=a.count;s<o;s++)mi.fromBufferAttribute(a,s).applyMatrix4(e.matrixWorld),this.expandByPoint(mi)}else n.boundingBox===null&&n.computeBoundingBox(),yn.copy(n.boundingBox),yn.applyMatrix4(e.matrixWorld),this.union(yn)}const i=e.children;for(let n=0,a=i.length;n<a;n++)this.expandByObject(i[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Ir.subVectors(this.max,ir),Mn.subVectors(e.a,ir),Sn.subVectors(e.b,ir),En.subVectors(e.c,ir),Li.subVectors(Sn,Mn),Ci.subVectors(En,Sn),Yi.subVectors(Mn,En);let t=[0,-Li.z,Li.y,0,-Ci.z,Ci.y,0,-Yi.z,Yi.y,Li.z,0,-Li.x,Ci.z,0,-Ci.x,Yi.z,0,-Yi.x,-Li.y,Li.x,0,-Ci.y,Ci.x,0,-Yi.y,Yi.x,0];return!ka(t,Mn,Sn,En,Ir)||(t=[1,0,0,0,1,0,0,0,1],!ka(t,Mn,Sn,En,Ir))?!1:(Nr.crossVectors(Li,Ci),t=[Nr.x,Nr.y,Nr.z],ka(t,Mn,Sn,En,Ir))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],mi=new L,yn=new ni,Mn=new L,Sn=new L,En=new L,Li=new L,Ci=new L,Yi=new L,ir=new L,Ir=new L,Nr=new L,Ki=new L;function ka(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){Ki.fromArray(r,a);const o=n.x*Math.abs(Ki.x)+n.y*Math.abs(Ki.y)+n.z*Math.abs(Ki.z),l=e.dot(Ki),c=t.dot(Ki),h=i.dot(Ki);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Nu=new ni,nr=new L,Ha=new L;class ri{constructor(e=new L,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Nu.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);const t=nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(nr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(Ha)),this.expandByPoint(nr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gi=new L,Va=new L,Dr=new L,Pi=new L,Ga=new L,Ur=new L,Wa=new L;class bn{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gi.copy(this.origin).addScaledVector(this.direction,t),gi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Va.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Va);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Dr),o=Pi.dot(this.direction),l=-Pi.dot(Dr),c=Pi.lengthSq(),h=Math.abs(1-s*s);let u,d,p,g;if(h>0)if(u=s*l-o,d=s*o-l,g=a*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+s*d+2*o)+d*(s*u+d+2*l)+c}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-a,-l),a),p=d*(d+2*l)+c):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-l),a),p=-u*u+d*(d+2*l)+c);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Va).addScaledVector(Dr,d),p}intersectSphere(e,t){gi.subVectors(e.center,this.origin);const i=gi.dot(this.direction),n=gi.dot(gi)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,gi)!==null}intersectTriangle(e,t,i,n,a){Ga.subVectors(t,e),Ur.subVectors(i,e),Wa.crossVectors(Ga,Ur);let s=this.direction.dot(Wa),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pi.subVectors(this.origin,e);const l=o*this.direction.dot(Ur.crossVectors(Pi,Ur));if(l<0)return null;const c=o*this.direction.dot(Ga.cross(Pi));if(c<0||l+c>s)return null;const h=-o*Pi.dot(Wa);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(e,t,i,n,a,s,o,l,c,h,u,d,p,g,_,m){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,h,u,d,p,g,_,m)}set(e,t,i,n,a,s,o,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=n,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Tn.setFromMatrixColumn(e,0).length(),a=1/Tn.setFromMatrixColumn(e,1).length(),s=1/Tn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,p=s*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=s*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-p,t[8]=s*c,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-g,t[6]=_+d*o,t[10]=s*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-s*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=s*h,t[9]=_-d*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const d=s*h,p=s*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=s*l,p=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=s*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Du,e,Uu)}lookAt(e,t,i){const n=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Ii.crossVectors(i,Ut),Ii.lengthSq()===0&&(Math.abs(i.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Ii.crossVectors(i,Ut)),Ii.normalize(),Or.crossVectors(Ut,Ii),n[0]=Ii.x,n[4]=Or.x,n[8]=Ut.x,n[1]=Ii.y,n[5]=Or.y,n[9]=Ut.y,n[2]=Ii.z,n[6]=Or.z,n[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],_=i[6],m=i[10],f=i[14],y=i[3],v=i[7],S=i[11],T=i[15],C=n[0],w=n[4],z=n[8],M=n[12],b=n[1],k=n[5],J=n[9],Z=n[13],I=n[2],G=n[6],j=n[10],W=n[14],ne=n[3],K=n[7],X=n[11],N=n[15];return a[0]=s*C+o*b+l*I+c*ne,a[4]=s*w+o*k+l*G+c*K,a[8]=s*z+o*J+l*j+c*X,a[12]=s*M+o*Z+l*W+c*N,a[1]=h*C+u*b+d*I+p*ne,a[5]=h*w+u*k+d*G+p*K,a[9]=h*z+u*J+d*j+p*X,a[13]=h*M+u*Z+d*W+p*N,a[2]=g*C+_*b+m*I+f*ne,a[6]=g*w+_*k+m*G+f*K,a[10]=g*z+_*J+m*j+f*X,a[14]=g*M+_*Z+m*W+f*N,a[3]=y*C+v*b+S*I+T*ne,a[7]=y*w+v*k+S*G+T*K,a[11]=y*z+v*J+S*j+T*X,a[15]=y*M+v*Z+S*W+T*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+a*l*u-n*c*u-a*o*d+i*c*d+n*o*p-i*l*p)+_*(+t*l*p-t*c*d+a*s*d-n*s*p+n*c*h-a*l*h)+m*(+t*c*u-t*o*p-a*s*u+i*s*p+a*o*h-i*c*h)+f*(-n*o*h-t*l*u+t*o*d+n*s*u-i*s*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],y=u*m*c-_*d*c+_*l*p-o*m*p-u*l*f+o*d*f,v=g*d*c-h*m*c-g*l*p+s*m*p+h*l*f-s*d*f,S=h*_*c-g*u*c+g*o*p-s*_*p-h*o*f+s*u*f,T=g*u*l-h*_*l-g*o*d+s*_*d+h*o*m-s*u*m,C=t*y+i*v+n*S+a*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=y*w,e[1]=(_*d*a-u*m*a-_*n*p+i*m*p+u*n*f-i*d*f)*w,e[2]=(o*m*a-_*l*a+_*n*c-i*m*c-o*n*f+i*l*f)*w,e[3]=(u*l*a-o*d*a-u*n*c+i*d*c+o*n*p-i*l*p)*w,e[4]=v*w,e[5]=(h*m*a-g*d*a+g*n*p-t*m*p-h*n*f+t*d*f)*w,e[6]=(g*l*a-s*m*a-g*n*c+t*m*c+s*n*f-t*l*f)*w,e[7]=(s*d*a-h*l*a+h*n*c-t*d*c-s*n*p+t*l*p)*w,e[8]=S*w,e[9]=(g*u*a-h*_*a-g*i*p+t*_*p+h*i*f-t*u*f)*w,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*f+t*o*f)*w,e[11]=(h*o*a-s*u*a-h*i*c+t*u*c+s*i*p-t*o*p)*w,e[12]=T*w,e[13]=(h*_*n-g*u*n+g*i*d-t*_*d-h*i*m+t*u*m)*w,e[14]=(g*o*n-s*_*n-g*i*l+t*_*l+s*i*m-t*o*m)*w,e[15]=(s*u*n-h*o*n+h*i*l-t*u*l-s*i*d+t*o*d)*w,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,u=o+o,d=a*c,p=a*h,g=a*u,_=s*h,m=s*u,f=o*u,y=l*c,v=l*h,S=l*u,T=i.x,C=i.y,w=i.z;return n[0]=(1-(_+f))*T,n[1]=(p+S)*T,n[2]=(g-v)*T,n[3]=0,n[4]=(p-S)*C,n[5]=(1-(d+f))*C,n[6]=(m+y)*C,n[7]=0,n[8]=(g+v)*w,n[9]=(m-y)*w,n[10]=(1-(d+_))*w,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=Tn.set(n[0],n[1],n[2]).length();const s=Tn.set(n[4],n[5],n[6]).length(),o=Tn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const l=1/a,c=1/s,h=1/o;return Jt.elements[0]*=l,Jt.elements[1]*=l,Jt.elements[2]*=l,Jt.elements[4]*=c,Jt.elements[5]*=c,Jt.elements[6]*=c,Jt.elements[8]*=h,Jt.elements[9]*=h,Jt.elements[10]*=h,t.setFromRotationMatrix(Jt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=pi){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let p,g;if(o===pi)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===Lr)p=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=pi){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(s-a),d=(t+e)*c,p=(i+n)*h;let g,_;if(o===pi)g=(s+a)*u,_=-2*u;else if(o===Lr)g=a*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Tn=new L,Jt=new pe,Du=new L(0,0,0),Uu=new L(1,1,1),Ii=new L,Or=new L,Ut=new L,ol=new pe,ll=new Nt;class Gt{constructor(e=0,t=0,i=0,n=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-lt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ol.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ol,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ll.setFromEuler(this),this.setFromQuaternion(ll,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ou=0;const cl=new L,An=new Nt,_i=new pe,Fr=new L,rr=new L,Fu=new L,Bu=new Nt,hl=new L(1,0,0),ul=new L(0,1,0),dl=new L(0,0,1),zu={type:"added"},ku={type:"removed"};class Ze extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=Zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ze.DEFAULT_UP.clone();const e=new L,t=new Gt,i=new Nt,n=new L(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new pe},normalMatrix:{value:new Be}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Ze.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,t){return An.setFromAxisAngle(e,t),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(hl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(dl,e)}translateOnAxis(e,t){return cl.copy(e).applyQuaternion(this.quaternion),this.position.add(cl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(dl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(rr,Fr,this.up):_i.lookAt(Fr,rr,this.up),this.quaternion.setFromRotationMatrix(_i),n&&(_i.extractRotation(n.matrixWorld),An.setFromRotationMatrix(_i),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ku)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectsByProperty(e,t);s.length>0&&(i=i.concat(s))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,e,Fu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,Bu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++){const o=n[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];a(e.shapes,u)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ze.DEFAULT_UP=new L(0,1,0),Ze.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ze.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $t=new L,vi=new L,ja=new L,xi=new L,wn=new L,Rn=new L,pl=new L,qa=new L,Ya=new L,Ka=new L;let Br=!1;class Wt{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),$t.subVectors(e,t),n.cross($t);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){$t.subVectors(n,t),vi.subVectors(i,t),ja.subVectors(e,t);const s=$t.dot($t),o=$t.dot(vi),l=$t.dot(ja),c=vi.dot(vi),h=vi.dot(ja),u=s*c-o*o;if(u===0)return a.set(-2,-1,-1);const d=1/u,p=(c*l-o*h)*d,g=(s*h-o*l)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,xi),xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getUV(e,t,i,n,a,s,o,l){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),this.getInterpolation(e,t,i,n,a,s,o,l)}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,xi),l.setScalar(0),l.addScaledVector(a,xi.x),l.addScaledVector(s,xi.y),l.addScaledVector(o,xi.z),l}static isFrontFacing(e,t,i,n){return $t.subVectors(i,t),vi.subVectors(e,t),$t.cross(vi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),$t.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(.3333333333333333)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,a){return Br===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Br=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}getInterpolation(e,t,i,n,a){return Wt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;wn.subVectors(n,i),Rn.subVectors(a,i),qa.subVectors(e,i);const l=wn.dot(qa),c=Rn.dot(qa);if(l<=0&&c<=0)return t.copy(i);Ya.subVectors(e,n);const h=wn.dot(Ya),u=Rn.dot(Ya);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(wn,s);Ka.subVectors(e,a);const p=wn.dot(Ka),g=Rn.dot(Ka);if(g>=0&&p<=g)return t.copy(a);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Rn,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return pl.subVectors(a,n),o=(u-h)/(u-h+(p-g)),t.copy(n).addScaledVector(pl,o);const f=1/(m+_+d);return s=_*f,o=d*f,t.copy(i).addScaledVector(wn,s).addScaledVector(Rn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Hu=0;class Xt extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Zt(),this.name="",this.type="Material",this.blending=hn,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=co,this.blendDst=ho,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=xa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pa,this.stencilZFail=Pa,this.stencilZPass=Pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hn&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const fl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},zr={h:0,s:0,l:0};function Za(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?r+(e-r)*6*t:t<.5?e:t<.6666666666666666?r+(e-r)*6*(.6666666666666666-t):r}class fe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Je){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ye.workingColorSpace){if(e=Da(e,1),t=lt(t,0,1),i=lt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Za(s,a,e+.3333333333333333),this.g=Za(s,a,e),this.b=Za(s,a,e-.3333333333333333)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,t=Je){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Je){const i=fl[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Je){return Ye.fromWorkingColorSpace(bt.copy(this),e),Math.round(lt(bt.r*255,0,255))*65536+Math.round(lt(bt.g*255,0,255))*256+Math.round(lt(bt.b*255,0,255))}getHexString(e=Je){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(bt.copy(this),t);const i=bt.r,n=bt.g,a=bt.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const u=s-o;switch(c=h<=.5?u/(s+o):u/(2-s-o),s){case i:l=(n-a)/u+(n<a?6:0);break;case n:l=(a-i)/u+2;break;case a:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=Je){Ye.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,i=bt.g,n=bt.b;return e!==Je?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(zr);const i=Qn(Ni.h,zr.h,t),n=Qn(Ni.s,zr.s,t),a=Qn(Ni.l,zr.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new fe;fe.NAMES=fl;class Zi extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new L,kr=new ye;class yt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ia,this.updateRange={offset:0,count:-1},this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ii(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ke(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array),a=Ke(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ia&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Ja extends yt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ml extends yt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends yt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Vu=0;const jt=new pe,$a=new Ze,Ln=new L,Ot=new ni,ar=new ni,ft=new L;class mt extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=Zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qo(e)?ml:Ja)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Be().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,i){return jt.makeTranslation(e,t,i),this.applyMatrix4(jt),this}scale(e,t,i){return jt.makeScale(e,t,i),this.applyMatrix4(jt),this}lookAt(e){return $a.lookAt(e),$a.updateMatrix(),this.applyMatrix4($a.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ln).negate(),this.translate(Ln.x,Ln.y,Ln.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new st(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Ot.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Ot.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Ot.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Ot.min),this.boundingBox.expandByPoint(Ot.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Ot.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Ot.min,ar.min),Ot.expandByPoint(ft),ft.addVectors(Ot.max,ar.max),Ot.expandByPoint(ft)):(Ot.expandByPoint(ar.min),Ot.expandByPoint(ar.max))}Ot.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)ft.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(ft));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ft.fromBufferAttribute(o,c),l&&(Ln.fromBufferAttribute(e,c),ft.add(Ln)),n=Math.max(n,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,a=t.normal.array,s=t.uv.array,o=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let b=0;b<o;b++)c[b]=new L,h[b]=new L;const u=new L,d=new L,p=new L,g=new ye,_=new ye,m=new ye,f=new L,y=new L;function v(b,k,J){u.fromArray(n,b*3),d.fromArray(n,k*3),p.fromArray(n,J*3),g.fromArray(s,b*2),_.fromArray(s,k*2),m.fromArray(s,J*2),d.sub(u),p.sub(u),_.sub(g),m.sub(g);const Z=1/(_.x*m.y-m.x*_.y);isFinite(Z)&&(f.copy(d).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(Z),y.copy(p).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(Z),c[b].add(f),c[k].add(f),c[J].add(f),h[b].add(y),h[k].add(y),h[J].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,k=S.length;b<k;++b){const J=S[b],Z=J.start,I=J.count;for(let G=Z,j=Z+I;G<j;G+=3)v(i[G+0],i[G+1],i[G+2])}const T=new L,C=new L,w=new L,z=new L;function M(b){w.fromArray(a,b*3),z.copy(w);const k=c[b];T.copy(k),T.sub(w.multiplyScalar(w.dot(k))).normalize(),C.crossVectors(z,k);const J=C.dot(h[b])<0?-1:1;l[b*4]=T.x,l[b*4+1]=T.y,l[b*4+2]=T.z,l[b*4+3]=J}for(let b=0,k=S.length;b<k;++b){const J=S[b],Z=J.start,I=J.count;for(let G=Z,j=Z+I;G<j;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new L,a=new L,s=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)n.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(n,a),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new yt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mt,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new pe,Ji=new bn,Hr=new ri,_l=new L,Cn=new L,Pn=new L,In=new L,Qa=new L,Vr=new L,Gr=new ye,Wr=new ye,Xr=new ye,vl=new L,xl=new L,yl=new L,jr=new L,qr=new L;class Ft extends Ze{constructor(e=new mt,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Vr.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],u=a[l];h!==0&&(Qa.fromBufferAttribute(u,e),s?Vr.addScaledVector(Qa,h):Vr.addScaledVector(Qa.sub(t),h))}t.add(Vr)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(a),Ji.copy(e.ray).recast(e.near),!(Hr.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Hr,_l)===null||Ji.origin.distanceToSquared(_l)>(e.far-e.near)**2))&&(gl.copy(a).invert(),Ji.copy(e.ray).applyMatrix4(gl),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,T=v;S<T;S+=3){const C=o.getX(S),w=o.getX(S+1),z=o.getX(S+2);n=Yr(this,f,e,i,c,h,u,C,w,z),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),S=o.getX(m+2);n=Yr(this,s,e,i,c,h,u,y,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=s[m.materialIndex],y=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,T=v;S<T;S+=3){const C=S,w=S+1,z=S+2;n=Yr(this,f,e,i,c,h,u,C,w,z),n&&(n.faceIndex=Math.floor(S/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const y=m,v=m+1,S=m+2;n=Yr(this,s,e,i,c,h,u,y,v,S),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Gu(r,e,t,i,n,a,s,o){let l;if(e.side===Ct?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===ui,o),l===null)return null;qr.copy(o),qr.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:r}}function Yr(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,Cn),r.getVertexPosition(l,Pn),r.getVertexPosition(c,In);const h=Gu(r,e,t,i,Cn,Pn,In,jr);if(h){n&&(Gr.fromBufferAttribute(n,o),Wr.fromBufferAttribute(n,l),Xr.fromBufferAttribute(n,c),h.uv=Wt.getInterpolation(jr,Cn,Pn,In,Gr,Wr,Xr,new ye)),a&&(Gr.fromBufferAttribute(a,o),Wr.fromBufferAttribute(a,l),Xr.fromBufferAttribute(a,c),h.uv1=Wt.getInterpolation(jr,Cn,Pn,In,Gr,Wr,Xr,new ye),h.uv2=h.uv1),s&&(vl.fromBufferAttribute(s,o),xl.fromBufferAttribute(s,l),yl.fromBufferAttribute(s,c),h.normal=Wt.getInterpolation(jr,Cn,Pn,In,vl,xl,yl,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new L,materialIndex:0};Wt.getNormal(Cn,Pn,In,u.normal),h.face=u}return h}class sr extends mt{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(_,m,f,y,v,S,T,C,w,z,M){const b=S/w,k=T/z,J=S/2,Z=T/2,I=C/2,G=w+1,j=z+1;let W=0,ne=0;const K=new L;for(let X=0;X<j;X++){const N=X*k-Z;for(let B=0;B<G;B++){const te=B*b-J;K[_]=te*y,K[m]=N*v,K[f]=I,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=C>0?1:-1,h.push(K.x,K.y,K.z),u.push(B/w),u.push(1-X/z),W+=1}}for(let X=0;X<z;X++)for(let N=0;N<w;N++){const B=d+N+G*X,te=d+N+G*(X+1),he=d+(N+1)+G*(X+1),_e=d+(N+1)+G*X;l.push(B,te,_e),l.push(te,he,_e),ne+=6}o.addGroup(p,ne,M),p+=ne,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nn(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function At(r){const e={};for(let t=0;t<r.length;t++){const i=Nn(r[t]);for(const n in i)e[n]=i[n]}return e}function Wu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ml(r){return r.getRenderTarget()===null?r.outputColorSpace:Ye.workingColorSpace}const Xu={clone:Nn,merge:At};var ju=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ju,this.fragmentShader=qu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nn(e.uniforms),this.uniformsGroups=Wu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sl extends Ze{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Tt extends Sl{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_n*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _n*2*Math.atan(Math.tan(gn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gn*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Dn=-90,Un=1;class Yu extends Ze{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Tt(Dn,Un,e,t);n.layers=this.layers,this.add(n);const a=new Tt(Dn,Un,e,t);a.layers=this.layers,this.add(a);const s=new Tt(Dn,Un,e,t);s.layers=this.layers,this.add(s);const o=new Tt(Dn,Un,e,t);o.layers=this.layers,this.add(o);const l=new Tt(Dn,Un,e,t);l.layers=this.layers,this.add(l);const c=new Tt(Dn,Un,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lr)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class El extends rt{constructor(e,t,i,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:dn,super(e,t,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ku extends qi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];t.encoding!==void 0&&(tr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xi?Je:Ht),this.texture=new El(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:It}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new sr(5,5,5),a=new $i({name:"CubemapFromEquirect",uniforms:Nn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ct,blending:bi});a.uniforms.tEquirect.value=t;const s=new Ft(n,a),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=It),new Yu(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}const es=new L,Zu=new L,Ju=new Be;class Di{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=es.subVectors(i,t).cross(Zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(es),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ju.getNormalMatrix(e),n=this.coplanarPoint(es).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new ri,Kr=new L;class ts{constructor(e=new Di,t=new Di,i=new Di,n=new Di,a=new Di,s=new Di){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],_=n[10],m=n[11],f=n[12],y=n[13],v=n[14],S=n[15];if(i[0].setComponents(l-a,d-c,m-p,S-f).normalize(),i[1].setComponents(l+a,d+c,m+p,S+f).normalize(),i[2].setComponents(l+s,d+h,m+g,S+y).normalize(),i[3].setComponents(l-s,d-h,m-g,S-y).normalize(),i[4].setComponents(l-o,d-u,m-_,S-v).normalize(),t===pi)i[5].setComponents(l+o,d+u,m+_,S+v).normalize();else if(t===Lr)i[5].setComponents(o,u,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(e){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Kr.x=n.normal.x>0?e.max.x:e.min.x,Kr.y=n.normal.y>0?e.max.y:e.min.y,Kr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function bl(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function $u(r,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=r.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=r.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=r.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=r.SHORT;else if(u instanceof Uint32Array)g=r.UNSIGNED_INT;else if(u instanceof Int32Array)g=r.INT;else if(u instanceof Int8Array)g=r.BYTE;else if(u instanceof Uint8Array)g=r.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function a(c,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(r.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(a(u.buffer,c,h),u.version=c.version)}return{get:s,remove:o,update:l}}class is extends mt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const y=f*d-s;for(let v=0;v<c;v++){const S=v*u-a;g.push(S,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,S=y+c*(f+1),T=y+1+c*(f+1),C=y+1+c*f;p.push(v,S,C),p.push(S,T,C)}this.setIndex(p),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ed=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,id=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ad=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ld=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,hd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ud=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Sd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ld=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal;
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ep=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ap=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,op=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,dp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Tp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Rp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Np=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Up=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Wp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Kp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ef=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,af=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,sf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,of=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,uf=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,df=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ff=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_f=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Sf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ef=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wf=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:Qu,alphahash_pars_fragment:ed,alphamap_fragment:td,alphamap_pars_fragment:id,alphatest_fragment:nd,alphatest_pars_fragment:rd,aomap_fragment:ad,aomap_pars_fragment:sd,begin_vertex:od,beginnormal_vertex:ld,bsdfs:cd,iridescence_fragment:hd,bumpmap_pars_fragment:ud,clipping_planes_fragment:dd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:fd,clipping_planes_vertex:md,color_fragment:gd,color_pars_fragment:_d,color_pars_vertex:vd,color_vertex:xd,common:yd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Sd,displacementmap_pars_vertex:Ed,displacementmap_vertex:bd,emissivemap_fragment:Td,emissivemap_pars_fragment:Ad,colorspace_fragment:wd,colorspace_pars_fragment:Rd,envmap_fragment:Ld,envmap_common_pars_fragment:Cd,envmap_pars_fragment:Pd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Wd,envmap_vertex:Nd,fog_vertex:Dd,fog_pars_vertex:Ud,fog_fragment:Od,fog_pars_fragment:Fd,gradientmap_pars_fragment:Bd,lightmap_fragment:zd,lightmap_pars_fragment:kd,lights_lambert_fragment:Hd,lights_lambert_pars_fragment:Vd,lights_pars_begin:Gd,lights_toon_fragment:Xd,lights_toon_pars_fragment:jd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Kd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Qd,logdepthbuf_fragment:ep,logdepthbuf_pars_fragment:tp,logdepthbuf_pars_vertex:ip,logdepthbuf_vertex:np,map_fragment:rp,map_pars_fragment:ap,map_particle_fragment:sp,map_particle_pars_fragment:op,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphcolor_vertex:hp,morphnormal_vertex:up,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:fp,normal_fragment_maps:mp,normal_pars_fragment:gp,normal_pars_vertex:_p,normal_vertex:vp,normalmap_pars_fragment:xp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Sp,iridescence_pars_fragment:Ep,opaque_fragment:bp,packing:Tp,premultiplied_alpha_fragment:Ap,project_vertex:wp,dithering_fragment:Rp,dithering_pars_fragment:Lp,roughnessmap_fragment:Cp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Np,shadowmap_vertex:Dp,shadowmask_pars_fragment:Up,skinbase_vertex:Op,skinning_pars_vertex:Fp,skinning_vertex:Bp,skinnormal_vertex:zp,specularmap_fragment:kp,specularmap_pars_fragment:Hp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Gp,transmission_fragment:Wp,transmission_pars_fragment:Xp,uv_pars_fragment:jp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:Kp,background_vert:Zp,background_frag:Jp,backgroundCube_vert:$p,backgroundCube_frag:Qp,cube_vert:ef,cube_frag:tf,depth_vert:nf,depth_frag:rf,distanceRGBA_vert:af,distanceRGBA_frag:sf,equirect_vert:of,equirect_frag:lf,linedashed_vert:cf,linedashed_frag:hf,meshbasic_vert:uf,meshbasic_frag:df,meshlambert_vert:pf,meshlambert_frag:ff,meshmatcap_vert:mf,meshmatcap_frag:gf,meshnormal_vert:_f,meshnormal_frag:vf,meshphong_vert:xf,meshphong_frag:yf,meshphysical_vert:Mf,meshphysical_frag:Sf,meshtoon_vert:Ef,meshtoon_frag:bf,points_vert:Tf,points_frag:Af,shadow_vert:wf,shadow_frag:Rf,sprite_vert:Lf,sprite_frag:Cf},le={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},ai={basic:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new fe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:At([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:At([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:At([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new fe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:At([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:At([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:At([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:At([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:At([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:At([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:At([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:At([le.lights,le.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};ai.physical={uniforms:At([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Zr={r:0,b:0,g:0};function Pf(r,e,t,i,n,a,s){const o=new fe(0);let l=a===!0?0:1,c,h,u=null,d=0,p=null;function g(m,f){let y=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0);const S=r.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,s):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||y)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Mr)?(h===void 0&&(h=new Ft(new sr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Nn(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==$e,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ft(new is(2,2),new $i({name:"BackgroundMaterial",uniforms:Nn(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==$e,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,f){m.getRGB(Zr,Ml(r)),i.buffers.color.setClear(Zr.r,Zr.g,Zr.b,f,s)}return{getClearColor:function(){return o},setClearColor:function(m,f=1){o.set(m),l=f,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function If(r,e,t,i){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),s=i.isWebGL2||a!==null,o={},l=m(null);let c=l,h=!1;function u(I,G,j,W,ne){let K=!1;if(s){const X=_(W,j,G);c!==X&&(c=X,p(c.object)),K=f(I,W,j,ne),K&&y(I,W,j,ne)}else{const X=G.wireframe===!0;(c.geometry!==W.id||c.program!==j.id||c.wireframe!==X)&&(c.geometry=W.id,c.program=j.id,c.wireframe=X,K=!0)}ne!==null&&t.update(ne,r.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,z(I,G,j,W),ne!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function d(){return i.isWebGL2?r.createVertexArray():a.createVertexArrayOES()}function p(I){return i.isWebGL2?r.bindVertexArray(I):a.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?r.deleteVertexArray(I):a.deleteVertexArrayOES(I)}function _(I,G,j){const W=j.wireframe===!0;let ne=o[I.id];ne===void 0&&(ne={},o[I.id]=ne);let K=ne[G.id];K===void 0&&(K={},ne[G.id]=K);let X=K[W];return X===void 0&&(X=m(d()),K[W]=X),X}function m(I){const G=[],j=[],W=[];for(let ne=0;ne<n;ne++)G[ne]=0,j[ne]=0,W[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:j,attributeDivisors:W,object:I,attributes:{},index:null}}function f(I,G,j,W){const ne=c.attributes,K=G.attributes;let X=0;const N=j.getAttributes();for(const B in N)if(N[B].location>=0){const te=ne[B];let he=K[B];if(he===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(he=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(he=I.instanceColor)),te===void 0||te.attribute!==he||he&&te.data!==he.data)return!0;X++}return c.attributesNum!==X||c.index!==W}function y(I,G,j,W){const ne={},K=G.attributes;let X=0;const N=j.getAttributes();for(const B in N)if(N[B].location>=0){let te=K[B];te===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(te=I.instanceColor));const he={};he.attribute=te,te&&te.data&&(he.data=te.data),ne[B]=he,X++}c.attributes=ne,c.attributesNum=X,c.index=W}function v(){const I=c.newAttributes;for(let G=0,j=I.length;G<j;G++)I[G]=0}function S(I){T(I,0)}function T(I,G){const j=c.newAttributes,W=c.enabledAttributes,ne=c.attributeDivisors;j[I]=1,W[I]===0&&(r.enableVertexAttribArray(I),W[I]=1),ne[I]!==G&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),ne[I]=G)}function C(){const I=c.newAttributes,G=c.enabledAttributes;for(let j=0,W=G.length;j<W;j++)G[j]!==I[j]&&(r.disableVertexAttribArray(j),G[j]=0)}function w(I,G,j,W,ne,K,X){X===!0?r.vertexAttribIPointer(I,G,j,ne,K):r.vertexAttribPointer(I,G,j,W,ne,K)}function z(I,G,j,W){if(i.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const ne=W.attributes,K=j.getAttributes(),X=G.defaultAttributeValues;for(const N in K){const B=K[N];if(B.location>=0){let te=ne[N];if(te===void 0&&(N==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),N==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),te!==void 0){const he=te.normalized,_e=te.itemSize,Ee=t.get(te);if(Ee===void 0)continue;const Ae=Ee.buffer,Me=Ee.type,Xe=Ee.bytesPerElement,Mt=i.isWebGL2===!0&&(Me===r.INT||Me===r.UNSIGNED_INT||te.gpuType===fo);if(te.isInterleavedBufferAttribute){const Ue=te.data,U=Ue.stride,ut=te.offset;if(Ue.isInstancedInterleavedBuffer){for(let Te=0;Te<B.locationSize;Te++)T(B.location+Te,Ue.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Te=0;Te<B.locationSize;Te++)S(B.location+Te);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Te=0;Te<B.locationSize;Te++)w(B.location+Te,_e/B.locationSize,Me,he,U*Xe,(ut+_e/B.locationSize*Te)*Xe,Mt)}else{if(te.isInstancedBufferAttribute){for(let Ue=0;Ue<B.locationSize;Ue++)T(B.location+Ue,te.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ue=0;Ue<B.locationSize;Ue++)S(B.location+Ue);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ue=0;Ue<B.locationSize;Ue++)w(B.location+Ue,_e/B.locationSize,Me,he,_e*Xe,_e/B.locationSize*Ue*Xe,Mt)}}else if(X!==void 0){const he=X[N];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(B.location,he);break;case 3:r.vertexAttrib3fv(B.location,he);break;case 4:r.vertexAttrib4fv(B.location,he);break;default:r.vertexAttrib1fv(B.location,he)}}}}C()}function M(){J();for(const I in o){const G=o[I];for(const j in G){const W=G[j];for(const ne in W)g(W[ne].object),delete W[ne];delete G[j]}delete o[I]}}function b(I){if(o[I.id]===void 0)return;const G=o[I.id];for(const j in G){const W=G[j];for(const ne in W)g(W[ne].object),delete W[ne];delete G[j]}delete o[I.id]}function k(I){for(const G in o){const j=o[G];if(j[I.id]===void 0)continue;const W=j[I.id];for(const ne in W)g(W[ne].object),delete W[ne];delete j[I.id]}}function J(){Z(),h=!0,c!==l&&(c=l,p(c.object))}function Z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:J,resetDefaultState:Z,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfProgram:k,initAttributes:v,enableAttribute:S,disableUnusedAttributes:C}}function Nf(r,e,t,i){const n=i.isWebGL2;let a;function s(c){a=c}function o(c,h){r.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,u){if(u===0)return;let d,p;if(n)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](a,c,h,u),t.update(h,a,u)}this.setMode=s,this.render=o,this.renderInstances=l}function Df(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=s||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),f=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,S=s||e.has("OES_texture_float"),T=v&&S,C=s?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:C}}function Uf(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new Di,o=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=r.get(u);if(!n||g===null||g.length===0||a&&!m)a?h(null):c();else{const y=a?0:i,v=y*4;let S=f.clippingState||null;l.value=S,S=h(g,d,v,p);for(let T=0;T!==v;++T)S[T]=t[T];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,S=p;v!==_;++v,S+=4)s.copy(u[v]).applyMatrix4(y,o),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Of(r){let e=new WeakMap;function t(s,o){return o===yr?s.mapping=dn:o===ya&&(s.mapping=pn),s}function i(s){if(s&&s.isTexture&&s.isRenderTargetTexture===!1){const o=s.mapping;if(o===yr||o===ya)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ku(l.height/2);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class Jr extends Sl{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const On=4,Tl=[.125,.215,.35,.446,.526,.582],en=20,ns=new Jr,Al=new fe;let rs=null;const tn=(1+Math.sqrt(5))/2,Fn=1/tn,wl=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,tn,Fn),new L(0,tn,-Fn),new L(Fn,0,tn),new L(-Fn,0,tn),new L(tn,Fn,0),new L(-tn,Fn,0)];class Rl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){rs=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(rs),e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===dn||e.mapping===pn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rs=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:Jn,format:kt,colorSpace:xt,depthBuffer:!1},n=Ll(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ll(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ff(a)),this._blurMaterial=Bf(a,e,t)}return n}_compileMaterial(e){const t=new Ft(this._lodPlanes[0],e);this._renderer.compile(t,ns)}_sceneToCubeUV(e,t,i,n){const a=new Tt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Al),l.toneMapping=Ti,l.autoClear=!1;const u=new Zi({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),d=new Ft(new sr,u);let p=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Al),p=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):m===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const f=this._cubeSize;$r(n,m*f,_>2?f:0,f,f),l.setRenderTarget(n),p&&l.render(d,a),l.render(e,a)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===dn||e.mapping===pn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Ft(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,ns)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const a=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),s=wl[(n-1)%wl.length];this._blur(e,n-1,n,a,s)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ft(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*en-1),_=a/g,m=isFinite(a)?1+Math.floor(h*_):en;m>en&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${en}`);const f=[];let y=0;for(let w=0;w<en;++w){const z=w/_,M=Math.exp(-z*z/2);f.push(M),w===0?y+=M:w<m&&(y+=2*M)}for(let w=0;w<f.length;w++)f[w]=f[w]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const S=this._sizeLods[n],T=3*S*(n>v-On?n-v+On:0),C=4*(this._cubeSize-S);$r(t,T,C,3*S,2*S),l.setRenderTarget(t),l.render(u,ns)}}function Ff(r){const e=[],t=[],i=[];let n=r;const a=r-On+1+Tl.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-On?l=Tl[s-r+On-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,y=new Float32Array(_*g*p),v=new Float32Array(m*g*p),S=new Float32Array(f*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,z=C>2?0:-1,M=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];y.set(M,_*g*C),v.set(d,m*g*C);const b=[C,C,C,C,C,C];S.set(b,f*g*C)}const T=new mt;T.setAttribute("position",new yt(y,_)),T.setAttribute("uv",new yt(v,m)),T.setAttribute("faceIndex",new yt(S,f)),e.push(T),n>On&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ll(r,e,t){const i=new qi(r,e,t);return i.texture.mapping=Mr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Bf(r,e,t){const i=new Float32Array(en),n=new L(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:en,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Cl(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Pl(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:as(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function as(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zf(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===yr||l===ya,h=l===dn||l===pn;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Rl(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new Rl(r));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",a),d.texture}else return null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function kf(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Hf(r,e,t,i){const n={},a=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",s),delete n[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",s),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],r.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let v=0,S=y.length;v<S;v+=3){const T=y[v+0],C=y[v+1],w=y[v+2];d.push(T,C,C,w,w,T)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const T=v+0,C=v+1,w=v+2;d.push(T,C,C,w,w,T)}}else return;const m=new(Qo(d)?ml:Ja)(d,1);m.version=_;const f=a.get(u);f&&e.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return a.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function Vf(r,e,t,i){const n=i.isWebGL2;let a;function s(d){a=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(a,p,o,d*l),t.update(p,a,1)}function u(d,p,g){if(g===0)return;let _,m;if(n)_=r,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](a,p,o,d*l,g),t.update(p,a,g)}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=u}function Gf(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Wf(r,e){return r[0]-e[0]}function Xf(r,e){return Math.abs(e[1])-Math.abs(r[1])}function jf(r,e,t){const i={},n=new Float32Array(8),a=new WeakMap,s=new qe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let m=a.get(h);if(m===void 0||m.count!==_){let v=function(){I.dispose(),a.delete(h),h.removeEventListener("dispose",v)};var p=v;m!==void 0&&m.texture.dispose();const S=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,w=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],M=h.morphAttributes.color||[];let b=0;S===!0&&(b=1),T===!0&&(b=2),C===!0&&(b=3);let k=h.attributes.position.count*b,J=1;k>e.maxTextureSize&&(J=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const Z=new Float32Array(k*J*4*_),I=new al(Z,k,J,_);I.type=di,I.needsUpdate=!0;const G=b*4;for(let j=0;j<_;j++){const W=w[j],ne=z[j],K=M[j],X=k*J*4*j;for(let N=0;N<W.count;N++){const B=N*G;S===!0&&(s.fromBufferAttribute(W,N),Z[X+B+0]=s.x,Z[X+B+1]=s.y,Z[X+B+2]=s.z,Z[X+B+3]=0),T===!0&&(s.fromBufferAttribute(ne,N),Z[X+B+4]=s.x,Z[X+B+5]=s.y,Z[X+B+6]=s.z,Z[X+B+7]=0),C===!0&&(s.fromBufferAttribute(K,N),Z[X+B+8]=s.x,Z[X+B+9]=s.y,Z[X+B+10]=s.z,Z[X+B+11]=K.itemSize===4?s.w:1)}}m={count:_,texture:I,size:new ye(k,J)},a.set(h,m),h.addEventListener("dispose",v)}let f=0;for(let v=0;v<d.length;v++)f+=d[v];const y=h.morphTargetsRelative?1:1-f;u.getUniforms().setValue(r,"morphTargetBaseInfluence",y),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let _=i[h.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];i[h.id]=_}for(let S=0;S<g;S++){const T=_[S];T[0]=S,T[1]=d[S]}_.sort(Xf);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Wf);const m=h.morphAttributes.position,f=h.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const T=o[S],C=T[0],w=T[1];C!==Number.MAX_SAFE_INTEGER&&w?(m&&h.getAttribute("morphTarget"+S)!==m[C]&&h.setAttribute("morphTarget"+S,m[C]),f&&h.getAttribute("morphNormal"+S)!==f[C]&&h.setAttribute("morphNormal"+S,f[C]),n[S]=w,y+=w):(m&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),f&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),n[S]=0)}const v=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(r,"morphTargetBaseInfluence",v),u.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:l}}function qf(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const Il=new rt,Nl=new al,Dl=new Iu,Ul=new El,Ol=[],Fl=[],Bl=new Float32Array(16),zl=new Float32Array(9),kl=new Float32Array(4);function Bn(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Ol[n];if(a===void 0&&(a=new Float32Array(n),Ol[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function ct(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ht(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Qr(r,e){let t=Fl[e];t===void 0&&(t=new Int32Array(e),Fl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Yf(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Kf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2fv(this.addr,e),ht(t,e)}}function Zf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;r.uniform3fv(this.addr,e),ht(t,e)}}function Jf(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4fv(this.addr,e),ht(t,e)}}function $f(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;kl.set(i),r.uniformMatrix2fv(this.addr,!1,kl),ht(t,i)}}function Qf(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;zl.set(i),r.uniformMatrix3fv(this.addr,!1,zl),ht(t,i)}}function em(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(ct(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,i))return;Bl.set(i),r.uniformMatrix4fv(this.addr,!1,Bl),ht(t,i)}}function tm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2iv(this.addr,e),ht(t,e)}}function nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3iv(this.addr,e),ht(t,e)}}function rm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4iv(this.addr,e),ht(t,e)}}function am(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;r.uniform2uiv(this.addr,e),ht(t,e)}}function om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;r.uniform3uiv(this.addr,e),ht(t,e)}}function lm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;r.uniform4uiv(this.addr,e),ht(t,e)}}function cm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||Il,n)}function hm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Dl,n)}function um(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ul,n)}function dm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Nl,n)}function pm(r){switch(r){case 5126:return Yf;case 35664:return Kf;case 35665:return Zf;case 35666:return Jf;case 35674:return $f;case 35675:return Qf;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return im;case 35668:case 35672:return nm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return sm;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}function fm(r,e){r.uniform1fv(this.addr,e)}function mm(r,e){const t=Bn(e,this.size,2);r.uniform2fv(this.addr,t)}function gm(r,e){const t=Bn(e,this.size,3);r.uniform3fv(this.addr,t)}function _m(r,e){const t=Bn(e,this.size,4);r.uniform4fv(this.addr,t)}function vm(r,e){const t=Bn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xm(r,e){const t=Bn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ym(r,e){const t=Bn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Mm(r,e){r.uniform1iv(this.addr,e)}function Sm(r,e){r.uniform2iv(this.addr,e)}function Em(r,e){r.uniform3iv(this.addr,e)}function bm(r,e){r.uniform4iv(this.addr,e)}function Tm(r,e){r.uniform1uiv(this.addr,e)}function Am(r,e){r.uniform2uiv(this.addr,e)}function wm(r,e){r.uniform3uiv(this.addr,e)}function Rm(r,e){r.uniform4uiv(this.addr,e)}function Lm(r,e,t){const i=this.cache,n=e.length,a=Qr(t,n);ct(i,a)||(r.uniform1iv(this.addr,a),ht(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||Il,a[s])}function Cm(r,e,t){const i=this.cache,n=e.length,a=Qr(t,n);ct(i,a)||(r.uniform1iv(this.addr,a),ht(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||Dl,a[s])}function Pm(r,e,t){const i=this.cache,n=e.length,a=Qr(t,n);ct(i,a)||(r.uniform1iv(this.addr,a),ht(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||Ul,a[s])}function Im(r,e,t){const i=this.cache,n=e.length,a=Qr(t,n);ct(i,a)||(r.uniform1iv(this.addr,a),ht(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||Nl,a[s])}function Nm(r){switch(r){case 5126:return fm;case 35664:return mm;case 35665:return gm;case 35666:return _m;case 35674:return vm;case 35675:return xm;case 35676:return ym;case 5124:case 35670:return Mm;case 35667:case 35671:return Sm;case 35668:case 35672:return Em;case 35669:case 35673:return bm;case 5125:return Tm;case 36294:return Am;case 36295:return wm;case 36296:return Rm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Im}}class Dm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=pm(t.type)}}class Um{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Nm(t.type)}}class Om{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const ss=/(\w+)(\])?(\[|\.)?/g;function Hl(r,e){r.seq.push(e),r.map[e.id]=e}function Fm(r,e,t){const i=r.name,n=i.length;for(ss.lastIndex=0;;){const a=ss.exec(i),s=ss.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Hl(t,c===void 0?new Dm(o,r,e):new Um(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Om(o),Hl(t,h)),t=h}}}class ea{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);Fm(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Vl(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let Bm=0;function zm(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function km(r){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(r);let i;switch(e===t?i="":e===Rr&&t===wr?i="LinearDisplayP3ToLinearSRGB":e===wr&&t===Rr&&(i="LinearSRGBToLinearDisplayP3"),r){case xt:case Tr:return[i,"LinearTransferOETF"];case Je:case Ca:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function Gl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+zm(r.getShaderSource(e),s)}else return n}function Hm(r,e){const t=km(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Vm(r,e){let t;switch(e){case kh:t="Linear";break;case Hh:t="Reinhard";break;case Vh:t="OptimizedCineon";break;case Gh:t="ACESFilmic";break;case Wh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Gm(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.normalMapTangentSpace||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(or).join(`
`)}function Wm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Xm(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function or(r){return r!==""}function Wl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jm=/^[ \t]*#include +<([\w\d./]+)>/gm;function os(r){return r.replace(jm,Ym)}const qm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ym(r,e){let t=De[e];if(t===void 0){const i=qm.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return os(t)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jl(r){return r.replace(Km,Zm)}function Zm(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function ql(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===no?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===vh?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function $m(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case dn:case pn:e="ENVMAP_TYPE_CUBE";break;case Mr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case pn:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case xr:e="ENVMAP_BLENDING_MULTIPLY";break;case Bh:e="ENVMAP_BLENDING_MIX";break;case zh:e="ENVMAP_BLENDING_ADD";break}return e}function tg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ig(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Jm(t),c=$m(t),h=Qm(t),u=eg(t),d=tg(t),p=t.isWebGL2?"":Gm(t),g=Wm(a),_=n.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(or).join(`
`),f.length>0&&(f+=`
`)):(m=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),f=[p,ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?De.tonemapping_pars_fragment:"",t.toneMapping!==Ti?Vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,Hm("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(or).join(`
`)),s=os(s),s=Wl(s,t),s=Xl(s,t),o=os(o),o=Wl(o,t),o=Xl(o,t),s=jl(s),o=jl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+s,S=y+f+o,T=Vl(n,n.VERTEX_SHADER,v),C=Vl(n,n.FRAGMENT_SHADER,S);if(n.attachShader(_,T),n.attachShader(_,C),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_),r.debug.checkShaderErrors){const M=n.getProgramInfoLog(_).trim(),b=n.getShaderInfoLog(T).trim(),k=n.getShaderInfoLog(C).trim();let J=!0,Z=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,T,C);else{const I=Gl(n,T,"vertex"),G=Gl(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+I+`
`+G)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(b===""||k==="")&&(Z=!1);Z&&(this.diagnostics={runnable:J,programLog:M,vertexShader:{log:b,prefix:m},fragmentShader:{log:k,prefix:f}})}n.deleteShader(T),n.deleteShader(C);let w;this.getUniforms=function(){return w===void 0&&(w=new ea(n,_)),w};let z;return this.getAttributes=function(){return z===void 0&&(z=Xm(n,_)),z},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=C,this}let ng=0;class rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ag(e),t.set(e,i)),i}}class ag{constructor(e){this.id=ng++,this.code=e,this.usedTimes=0}}function sg(r,e,t,i,n,a,s){const o=new Xa,l=new rg,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,b,k,J,Z){const I=J.fog,G=Z.geometry,j=M.isMeshStandardMaterial?J.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||j),ne=W&&W.mapping===Mr?W.image.height:null,K=g[M.type];M.precision!==null&&(p=n.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const X=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,N=X!==void 0?X.length:0;let B=0;G.morphAttributes.position!==void 0&&(B=1),G.morphAttributes.normal!==void 0&&(B=2),G.morphAttributes.color!==void 0&&(B=3);let te,he,_e,Ee;if(K){const li=ai[K];te=li.vertexShader,he=li.fragmentShader}else te=M.vertexShader,he=M.fragmentShader,l.update(M),_e=l.getVertexShaderID(M),Ee=l.getFragmentShaderID(M);const Ae=r.getRenderTarget(),Me=Z.isInstancedMesh===!0,Xe=!!M.map,Mt=!!M.matcap,Ue=!!W,U=!!M.aoMap,ut=!!M.lightMap,Te=!!M.bumpMap,Ie=!!M.normalMap,Re=!!M.displacementMap,et=!!M.emissiveMap,ze=!!M.metalnessMap,Ne=!!M.roughnessMap,je=M.anisotropy>0,dt=M.clearcoat>0,gt=M.iridescence>0,A=M.sheen>0,x=M.transmission>0,F=je&&!!M.anisotropyMap,re=dt&&!!M.clearcoatMap,Q=dt&&!!M.clearcoatNormalMap,ie=dt&&!!M.clearcoatRoughnessMap,ge=gt&&!!M.iridescenceMap,se=gt&&!!M.iridescenceThicknessMap,ue=A&&!!M.sheenColorMap,P=A&&!!M.sheenRoughnessMap,ee=!!M.specularMap,q=!!M.specularColorMap,Le=!!M.specularIntensityMap,Se=x&&!!M.transmissionMap,ve=x&&!!M.thicknessMap,xe=!!M.gradientMap,R=!!M.alphaMap,ae=M.alphaTest>0,$=!!M.alphaHash,de=!!M.extensions,oe=!!G.attributes.uv1,Y=!!G.attributes.uv2,me=!!G.attributes.uv3;let be=Ti;return M.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(be=r.toneMapping),{isWebGL2:h,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:te,fragmentShader:he,defines:M.defines,customVertexShaderID:_e,customFragmentShaderID:Ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Me,instancingColor:Me&&Z.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:xt,map:Xe,matcap:Mt,envMap:Ue,envMapMode:Ue&&W.mapping,envMapCubeUVHeight:ne,aoMap:U,lightMap:ut,bumpMap:Te,normalMap:Ie,displacementMap:d&&Re,emissiveMap:et,normalMapObjectSpace:Ie&&M.normalMapType===ru,normalMapTangentSpace:Ie&&M.normalMapType===br,metalnessMap:ze,roughnessMap:Ne,anisotropy:je,anisotropyMap:F,clearcoat:dt,clearcoatMap:re,clearcoatNormalMap:Q,clearcoatRoughnessMap:ie,iridescence:gt,iridescenceMap:ge,iridescenceThicknessMap:se,sheen:A,sheenColorMap:ue,sheenRoughnessMap:P,specularMap:ee,specularColorMap:q,specularIntensityMap:Le,transmission:x,transmissionMap:Se,thicknessMap:ve,gradientMap:xe,opaque:M.transparent===!1&&M.blending===hn,alphaMap:R,alphaTest:ae,alphaHash:$,combine:M.combine,mapUv:Xe&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:ut&&_(M.lightMap.channel),bumpMapUv:Te&&_(M.bumpMap.channel),normalMapUv:Ie&&_(M.normalMap.channel),displacementMapUv:Re&&_(M.displacementMap.channel),emissiveMapUv:et&&_(M.emissiveMap.channel),metalnessMapUv:ze&&_(M.metalnessMap.channel),roughnessMapUv:Ne&&_(M.roughnessMap.channel),anisotropyMapUv:F&&_(M.anisotropyMap.channel),clearcoatMapUv:re&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:P&&_(M.sheenRoughnessMap.channel),specularMapUv:ee&&_(M.specularMap.channel),specularColorMapUv:q&&_(M.specularColorMap.channel),specularIntensityMapUv:Le&&_(M.specularIntensityMap.channel),transmissionMapUv:Se&&_(M.transmissionMap.channel),thicknessMapUv:ve&&_(M.thicknessMap.channel),alphaMapUv:R&&_(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ie||je),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:Y,vertexUv3s:me,pointsUvs:Z.isPoints===!0&&!!G.attributes.uv&&(Xe||R),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:Z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:B,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:be,useLegacyLights:r._useLegacyLights,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Ye.getTransfer(M.map.colorSpace)===$e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:de&&M.extensions.derivatives===!0,extensionFragDepth:de&&M.extensions.fragDepth===!0,extensionDrawBuffers:de&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:de&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(const k in M.defines)b.push(k),b.push(M.defines[k]);return M.isRawShaderMaterial===!1&&(y(b,M),v(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function v(M,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),M.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function S(M){const b=g[M.type];let k;if(b){const J=ai[b];k=Xu.clone(J.uniforms)}else k=M.uniforms;return k}function T(M,b){let k;for(let J=0,Z=c.length;J<Z;J++){const I=c[J];if(I.cacheKey===b){k=I,++k.usedTimes;break}}return k===void 0&&(k=new ig(r,b,M,a),c.push(k)),k}function C(M){if(--M.usedTimes===0){const b=c.indexOf(M);c[b]=c[c.length-1],c.pop(),M.destroy()}}function w(M){l.remove(M)}function z(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:S,acquireProgram:T,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:z}}function og(){let r=new WeakMap;function e(a){let s=r.get(a);return s===void 0&&(s={},r.set(a,s)),s}function t(a){r.delete(a)}function i(a,s,o){r.get(a)[s]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function lg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Yl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Kl(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(u,d,p,g,_,m){let f=r[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},r[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function o(u,d,p,g,_,m){const f=s(u,d,p,g,_,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=s(u,d,p,g,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||lg),i.length>1&&i.sort(d||Yl),n.length>1&&n.sort(d||Yl)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function cg(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new Kl,r.set(i,[s])):n>=a.length?(s=new Kl,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function hg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new fe};break;case"SpotLight":t={position:new L,direction:new L,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":t={color:new fe,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function ug(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let dg=0;function pg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function fg(r,e){const t=new hg,i=ug(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const a=new L,s=new pe,o=new pe;function l(h,u){let d=0,p=0,g=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let _=0,m=0,f=0,y=0,v=0,S=0,T=0,C=0,w=0,z=0,M=0;h.sort(pg);const b=u===!0?Math.PI:1;for(let J=0,Z=h.length;J<Z;J++){const I=h[J],G=I.color,j=I.intensity,W=I.distance,ne=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*j*b,p+=G.g*j*b,g+=G.b*j*b;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],j);M++}else if(I.isDirectionalLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*b),I.castShadow){const X=I.shadow,N=i.get(I);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,n.directionalShadow[_]=N,n.directionalShadowMap[_]=ne,n.directionalShadowMatrix[_]=I.shadow.matrix,S++}n.directional[_]=K,_++}else if(I.isSpotLight){const K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(G).multiplyScalar(j*b),K.distance=W,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[f]=K;const X=I.shadow;if(I.map&&(n.spotLightMap[w]=I.map,w++,X.updateMatrices(I),I.castShadow&&z++),n.spotLightMatrix[f]=X.matrix,I.castShadow){const N=i.get(I);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,n.spotShadow[f]=N,n.spotShadowMap[f]=ne,C++}f++}else if(I.isRectAreaLight){const K=t.get(I);K.color.copy(G).multiplyScalar(j),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[y]=K,y++}else if(I.isPointLight){const K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*b),K.distance=I.distance,K.decay=I.decay,I.castShadow){const X=I.shadow,N=i.get(I);N.shadowBias=X.bias,N.shadowNormalBias=X.normalBias,N.shadowRadius=X.radius,N.shadowMapSize=X.mapSize,N.shadowCameraNear=X.camera.near,N.shadowCameraFar=X.camera.far,n.pointShadow[m]=N,n.pointShadowMap[m]=ne,n.pointShadowMatrix[m]=I.shadow.matrix,T++}n.point[m]=K,m++}else if(I.isHemisphereLight){const K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(j*b),K.groundColor.copy(I.groundColor).multiplyScalar(j*b),n.hemi[v]=K,v++}}y>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=p,n.ambient[2]=g;const k=n.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==f||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==S||k.numPointShadows!==T||k.numSpotShadows!==C||k.numSpotMaps!==w||k.numLightProbes!==M)&&(n.directional.length=_,n.spot.length=f,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=C+w-z,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=z,n.numLightProbes=M,k.directionalLength=_,k.pointLength=m,k.spotLength=f,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=S,k.numPointShadows=T,k.numSpotShadows=C,k.numSpotMaps=w,k.numLightProbes=M,n.version=dg++)}function c(h,u){let d=0,p=0,g=0,_=0,m=0;const f=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const S=h[y];if(S.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),d++}else if(S.isSpotLight){const T=n.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(S.matrixWorld),a.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(f),g++}else if(S.isRectAreaLight){const T=n.rectArea[_];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),o.identity(),s.copy(S.matrixWorld),s.premultiply(f),o.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const T=n.point[p];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(f),p++}else if(S.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:n}}function Zl(r,e){const t=new fg(r,e),i=[],n=[];function a(){i.length=0,n.length=0}function s(h){i.push(h)}function o(h){n.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:a,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:s,pushShadow:o}}function mg(r,e){let t=new WeakMap;function i(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Zl(r,e),t.set(a,[l])):s>=o.length?(l=new Zl(r,e),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class gg extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _g extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yg(r,e,t){let i=new ts;const n=new ye,a=new ye,s=new qe,o=new gg({depthPacking:nu}),l=new _g,c={},h=t.maxTextureSize,u={[ui]:Ct,[Ct]:ui,[ti]:ti},d=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:vg,fragmentShader:xg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new mt;g.setAttribute("position",new yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ft(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=no;let f=this.type;this.render=function(T,C,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const z=r.getRenderTarget(),M=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),k=r.state;k.setBlending(bi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const J=f!==hi&&this.type===hi,Z=f===hi&&this.type!==hi;for(let I=0,G=T.length;I<G;I++){const j=T[I],W=j.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const ne=W.getFrameExtents();if(n.multiply(ne),a.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/ne.x),n.x=a.x*ne.x,W.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/ne.y),n.y=a.y*ne.y,W.mapSize.y=a.y)),W.map===null||J===!0||Z===!0){const X=this.type!==hi?{minFilter:pt,magFilter:pt}:{};W.map!==null&&W.map.dispose(),W.map=new qi(n.x,n.y,X),W.map.texture.name=j.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();const K=W.getViewportCount();for(let X=0;X<K;X++){const N=W.getViewport(X);s.set(a.x*N.x,a.y*N.y,a.x*N.z,a.y*N.w),k.viewport(s),W.updateMatrices(j,X),i=W.getFrustum(),S(C,w,W.camera,j,this.type)}W.isPointLightShadow!==!0&&this.type===hi&&y(W,w),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,r.setRenderTarget(z,M,b)};function y(T,C){const w=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new qi(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,w,d,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,w,p,_,null)}function v(T,C,w,z){let M=null;const b=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(b!==void 0)M=b;else if(M=w.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=M.uuid,J=C.uuid;let Z=c[k];Z===void 0&&(Z={},c[k]=Z);let I=Z[J];I===void 0&&(I=M.clone(),Z[J]=I),M=I}if(M.visible=C.visible,M.wireframe=C.wireframe,z===hi?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:u[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const k=r.properties.get(M);k.light=w}return M}function S(T,C,w,z,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===hi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const k=e.update(T),J=T.material;if(Array.isArray(J)){const Z=k.groups;for(let I=0,G=Z.length;I<G;I++){const j=Z[I],W=J[j.materialIndex];if(W&&W.visible){const ne=v(T,W,z,M);r.renderBufferDirect(w,null,k,ne,T,j)}}}else if(J.visible){const Z=v(T,J,z,M);r.renderBufferDirect(w,null,k,Z,T,null)}}const b=T.children;for(let k=0,J=b.length;k<J;k++)S(b[k],C,w,z,M)}}function Mg(r,e,t){const i=t.isWebGL2;function n(){let R=!1;const ae=new qe;let $=null;const de=new qe(0,0,0,0);return{setMask:function(oe){$!==oe&&!R&&(r.colorMask(oe,oe,oe,oe),$=oe)},setLocked:function(oe){R=oe},setClear:function(oe,Y,me,be,li){li===!0&&(oe*=be,Y*=be,me*=be),ae.set(oe,Y,me,be),de.equals(ae)===!1&&(r.clearColor(oe,Y,me,be),de.copy(ae))},reset:function(){R=!1,$=null,de.set(-1,0,0,0)}}}function a(){let R=!1,ae=null,$=null,de=null;return{setTest:function(oe){oe?Ae(r.DEPTH_TEST):Me(r.DEPTH_TEST)},setMask:function(oe){ae!==oe&&!R&&(r.depthMask(oe),ae=oe)},setFunc:function(oe){if($!==oe){switch(oe){case Ph:r.depthFunc(r.NEVER);break;case Ih:r.depthFunc(r.ALWAYS);break;case Nh:r.depthFunc(r.LESS);break;case xa:r.depthFunc(r.LEQUAL);break;case Dh:r.depthFunc(r.EQUAL);break;case Uh:r.depthFunc(r.GEQUAL);break;case Oh:r.depthFunc(r.GREATER);break;case Fh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$=oe}},setLocked:function(oe){R=oe},setClear:function(oe){de!==oe&&(r.clearDepth(oe),de=oe)},reset:function(){R=!1,ae=null,$=null,de=null}}}function s(){let R=!1,ae=null,$=null,de=null,oe=null,Y=null,me=null,be=null,li=null;return{setTest:function(tt){R||(tt?Ae(r.STENCIL_TEST):Me(r.STENCIL_TEST))},setMask:function(tt){ae!==tt&&!R&&(r.stencilMask(tt),ae=tt)},setFunc:function(tt,ci,Rt){($!==tt||de!==ci||oe!==Rt)&&(r.stencilFunc(tt,ci,Rt),$=tt,de=ci,oe=Rt)},setOp:function(tt,ci,Rt){(Y!==tt||me!==ci||be!==Rt)&&(r.stencilOp(tt,ci,Rt),Y=tt,me=ci,be=Rt)},setLocked:function(tt){R=tt},setClear:function(tt){li!==tt&&(r.clearStencil(tt),li=tt)},reset:function(){R=!1,ae=null,$=null,de=null,oe=null,Y=null,me=null,be=null,li=null}}}const o=new n,l=new a,c=new s,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,T=null,C=null,w=null,z=null,M=!1,b=null,k=null,J=null,Z=null,I=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const ne=r.getParameter(r.VERSION);ne.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ne)[1]),j=W>=1):ne.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),j=W>=2);let K=null,X={};const N=r.getParameter(r.SCISSOR_BOX),B=r.getParameter(r.VIEWPORT),te=new qe().fromArray(N),he=new qe().fromArray(B);function _e(R,ae,$,de){const oe=new Uint8Array(4),Y=r.createTexture();r.bindTexture(R,Y),r.texParameteri(R,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(R,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let me=0;me<$;me++)i&&(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)?r.texImage3D(ae,0,r.RGBA,1,1,de,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(ae+me,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return Y}const Ee={};Ee[r.TEXTURE_2D]=_e(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=_e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ee[r.TEXTURE_2D_ARRAY]=_e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=_e(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ae(r.DEPTH_TEST),l.setFunc(xa),Re(!1),et(io),Ae(r.CULL_FACE),Te(bi);function Ae(R){d[R]!==!0&&(r.enable(R),d[R]=!0)}function Me(R){d[R]!==!1&&(r.disable(R),d[R]=!1)}function Xe(R,ae){return p[R]!==ae?(r.bindFramebuffer(R,ae),p[R]=ae,i&&(R===r.DRAW_FRAMEBUFFER&&(p[r.FRAMEBUFFER]=ae),R===r.FRAMEBUFFER&&(p[r.DRAW_FRAMEBUFFER]=ae)),!0):!1}function Mt(R,ae){let $=_,de=!1;if(R)if($=g.get(ae),$===void 0&&($=[],g.set(ae,$)),R.isWebGLMultipleRenderTargets){const oe=R.texture;if($.length!==oe.length||$[0]!==r.COLOR_ATTACHMENT0){for(let Y=0,me=oe.length;Y<me;Y++)$[Y]=r.COLOR_ATTACHMENT0+Y;$.length=oe.length,de=!0}}else $[0]!==r.COLOR_ATTACHMENT0&&($[0]=r.COLOR_ATTACHMENT0,de=!0);else $[0]!==r.BACK&&($[0]=r.BACK,de=!0);de&&(t.isWebGL2?r.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ue(R){return m!==R?(r.useProgram(R),m=R,!0):!1}const U={[un]:r.FUNC_ADD,[yh]:r.FUNC_SUBTRACT,[Mh]:r.FUNC_REVERSE_SUBTRACT};if(i)U[oo]=r.MIN,U[lo]=r.MAX;else{const R=e.get("EXT_blend_minmax");R!==null&&(U[oo]=R.MIN_EXT,U[lo]=R.MAX_EXT)}const ut={[Sh]:r.ZERO,[Eh]:r.ONE,[bh]:r.SRC_COLOR,[co]:r.SRC_ALPHA,[Ch]:r.SRC_ALPHA_SATURATE,[Rh]:r.DST_COLOR,[Ah]:r.DST_ALPHA,[Th]:r.ONE_MINUS_SRC_COLOR,[ho]:r.ONE_MINUS_SRC_ALPHA,[Lh]:r.ONE_MINUS_DST_COLOR,[wh]:r.ONE_MINUS_DST_ALPHA};function Te(R,ae,$,de,oe,Y,me,be){if(R===bi){f===!0&&(Me(r.BLEND),f=!1);return}if(f===!1&&(Ae(r.BLEND),f=!0),R!==xh){if(R!==y||be!==M){if((v!==un||C!==un)&&(r.blendEquation(r.FUNC_ADD),v=un,C=un),be)switch(R){case hn:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ro:r.blendFunc(r.ONE,r.ONE);break;case ao:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case so:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case hn:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ro:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ao:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case so:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}S=null,T=null,w=null,z=null,y=R,M=be}return}oe=oe||ae,Y=Y||$,me=me||de,(ae!==v||oe!==C)&&(r.blendEquationSeparate(U[ae],U[oe]),v=ae,C=oe),($!==S||de!==T||Y!==w||me!==z)&&(r.blendFuncSeparate(ut[$],ut[de],ut[Y],ut[me]),S=$,T=de,w=Y,z=me),y=R,M=!1}function Ie(R,ae){R.side===ti?Me(r.CULL_FACE):Ae(r.CULL_FACE);let $=R.side===Ct;ae&&($=!$),Re($),R.blending===hn&&R.transparent===!1?Te(bi):Te(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),o.setMask(R.colorWrite);const de=R.stencilWrite;c.setTest(de),de&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ne(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):Me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Re(R){b!==R&&(R?r.frontFace(r.CW):r.frontFace(r.CCW),b=R)}function et(R){R!==gh?(Ae(r.CULL_FACE),R!==k&&(R===io?r.cullFace(r.BACK):R===_h?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Me(r.CULL_FACE),k=R}function ze(R){R!==J&&(j&&r.lineWidth(R),J=R)}function Ne(R,ae,$){R?(Ae(r.POLYGON_OFFSET_FILL),(Z!==ae||I!==$)&&(r.polygonOffset(ae,$),Z=ae,I=$)):Me(r.POLYGON_OFFSET_FILL)}function je(R){R?Ae(r.SCISSOR_TEST):Me(r.SCISSOR_TEST)}function dt(R){R===void 0&&(R=r.TEXTURE0+G-1),K!==R&&(r.activeTexture(R),K=R)}function gt(R,ae,$){$===void 0&&(K===null?$=r.TEXTURE0+G-1:$=K);let de=X[$];de===void 0&&(de={type:void 0,texture:void 0},X[$]=de),(de.type!==R||de.texture!==ae)&&(K!==$&&(r.activeTexture($),K=$),r.bindTexture(R,ae||Ee[R]),de.type=R,de.texture=ae)}function A(){const R=X[K];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function x(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Q(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ie(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ue(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function P(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ee(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(R){te.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),te.copy(R))}function Le(R){he.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),he.copy(R))}function Se(R,ae){let $=u.get(ae);$===void 0&&($=new WeakMap,u.set(ae,$));let de=$.get(R);de===void 0&&(de=r.getUniformBlockIndex(ae,R.name),$.set(R,de))}function ve(R,ae){const $=u.get(ae).get(R);h.get(ae)!==$&&(r.uniformBlockBinding(ae,$,R.__bindingPointIndex),h.set(ae,$))}function xe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),i===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},K=null,X={},p={},g=new WeakMap,_=[],m=null,f=!1,y=null,v=null,S=null,T=null,C=null,w=null,z=null,M=!1,b=null,k=null,J=null,Z=null,I=null,te.set(0,0,r.canvas.width,r.canvas.height),he.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ae,disable:Me,bindFramebuffer:Xe,drawBuffers:Mt,useProgram:Ue,setBlending:Te,setMaterial:Ie,setFlipSided:Re,setCullFace:et,setLineWidth:ze,setPolygonOffset:Ne,setScissorTest:je,activeTexture:dt,bindTexture:gt,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:P,texImage3D:ee,updateUBOMapping:Se,uniformBlockBinding:ve,texStorage2D:se,texStorage3D:ue,texSubImage2D:re,texSubImage3D:Q,compressedTexSubImage2D:ie,compressedTexSubImage3D:ge,scissor:q,viewport:Le,reset:xe}}function Sg(r,e,t,i,n,a,s){const o=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return f?new OffscreenCanvas(A,x):er("canvas")}function v(A,x,F,re){let Q=1;if((A.width>re||A.height>re)&&(Q=re/Math.max(A.width,A.height)),Q<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ie=x?Cr:Math.floor,ge=ie(Q*A.width),se=ie(Q*A.height);_===void 0&&(_=y(ge,se));const ue=F?y(ge,se):_;return ue.width=ge,ue.height=se,ue.getContext("2d").drawImage(A,0,0,ge,se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ge+"x"+se+")."),ue}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Ua(A.width)&&Ua(A.height)}function T(A){return o?!1:A.wrapS!==Pt||A.wrapT!==Pt||A.minFilter!==pt&&A.minFilter!==It}function C(A,x){return A.generateMipmaps&&x&&A.minFilter!==pt&&A.minFilter!==It}function w(A){r.generateMipmap(A)}function z(A,x,F,re,Q=!1){if(o===!1)return x;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ie=x;if(x===r.RED&&(F===r.FLOAT&&(ie=r.R32F),F===r.HALF_FLOAT&&(ie=r.R16F),F===r.UNSIGNED_BYTE&&(ie=r.R8)),x===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(ie=r.R8UI),F===r.UNSIGNED_SHORT&&(ie=r.R16UI),F===r.UNSIGNED_INT&&(ie=r.R32UI),F===r.BYTE&&(ie=r.R8I),F===r.SHORT&&(ie=r.R16I),F===r.INT&&(ie=r.R32I)),x===r.RG&&(F===r.FLOAT&&(ie=r.RG32F),F===r.HALF_FLOAT&&(ie=r.RG16F),F===r.UNSIGNED_BYTE&&(ie=r.RG8)),x===r.RGBA){const ge=Q?Ar:Ye.getTransfer(re);F===r.FLOAT&&(ie=r.RGBA32F),F===r.HALF_FLOAT&&(ie=r.RGBA16F),F===r.UNSIGNED_BYTE&&(ie=ge===$e?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(ie=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(ie=r.RGB5_A1)}return(ie===r.R16F||ie===r.R32F||ie===r.RG16F||ie===r.RG32F||ie===r.RGBA16F||ie===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function M(A,x,F){return C(A,F)===!0||A.isFramebufferTexture&&A.minFilter!==pt&&A.minFilter!==It?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function b(A){return A===pt||A===Ma||A===Er?r.NEAREST:r.LINEAR}function k(A){const x=A.target;x.removeEventListener("dispose",k),Z(x),x.isVideoTexture&&g.delete(x)}function J(A){const x=A.target;x.removeEventListener("dispose",J),G(x)}function Z(A){const x=i.get(A);if(x.__webglInit===void 0)return;const F=A.source,re=m.get(F);if(re){const Q=re[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(A),Object.keys(re).length===0&&m.delete(F)}i.remove(A)}function I(A){const x=i.get(A);r.deleteTexture(x.__webglTexture);const F=A.source,re=m.get(F);delete re[x.__cacheKey],s.memory.textures--}function G(A){const x=A.texture,F=i.get(A),re=i.get(x);if(re.__webglTexture!==void 0&&(r.deleteTexture(re.__webglTexture),s.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let ie=0;ie<F.__webglFramebuffer[Q].length;ie++)r.deleteFramebuffer(F.__webglFramebuffer[Q][ie]);else r.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)r.deleteFramebuffer(F.__webglFramebuffer[Q]);else r.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&r.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&r.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&r.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&r.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let Q=0,ie=x.length;Q<ie;Q++){const ge=i.get(x[Q]);ge.__webglTexture&&(r.deleteTexture(ge.__webglTexture),s.memory.textures--),i.remove(x[Q])}i.remove(x),i.remove(A)}let j=0;function W(){j=0}function ne(){const A=j;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),j+=1,A}function K(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function X(A,x){const F=i.get(A);if(A.isVideoTexture&&dt(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(F,A,x);return}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+x)}function N(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Xe(F,A,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+x)}function B(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Xe(F,A,x);return}t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+x)}function te(A,x){const F=i.get(A);if(A.version>0&&F.__version!==A.version){Mt(F,A,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+x)}const he={[Ai]:r.REPEAT,[Pt]:r.CLAMP_TO_EDGE,[Sr]:r.MIRRORED_REPEAT},_e={[pt]:r.NEAREST,[Ma]:r.NEAREST_MIPMAP_NEAREST,[Er]:r.NEAREST_MIPMAP_LINEAR,[It]:r.LINEAR,[po]:r.LINEAR_MIPMAP_NEAREST,[Vi]:r.LINEAR_MIPMAP_LINEAR},Ee={[su]:r.NEVER,[pu]:r.ALWAYS,[ou]:r.LESS,[cu]:r.LEQUAL,[lu]:r.EQUAL,[du]:r.GEQUAL,[hu]:r.GREATER,[uu]:r.NOTEQUAL};function Ae(A,x,F){if(F?(r.texParameteri(A,r.TEXTURE_WRAP_S,he[x.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,he[x.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,he[x.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,_e[x.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,_e[x.minFilter])):(r.texParameteri(A,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(A,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),(x.wrapS!==Pt||x.wrapT!==Pt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,r.TEXTURE_MAG_FILTER,b(x.magFilter)),r.texParameteri(A,r.TEXTURE_MIN_FILTER,b(x.minFilter)),x.minFilter!==pt&&x.minFilter!==It&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===pt||x.minFilter!==Er&&x.minFilter!==Vi||x.type===di&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Jn&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(r.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function Me(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",k));const re=x.source;let Q=m.get(re);Q===void 0&&(Q={},m.set(re,Q));const ie=K(x);if(ie!==A.__cacheKey){Q[ie]===void 0&&(Q[ie]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,F=!0),Q[ie].usedTimes++;const ge=Q[A.__cacheKey];ge!==void 0&&(Q[A.__cacheKey].usedTimes--,ge.usedTimes===0&&I(x)),A.__cacheKey=ie,A.__webglTexture=Q[ie].texture}return F}function Xe(A,x,F){let re=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(re=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(re=r.TEXTURE_3D);const Q=Me(A,x),ie=x.source;t.bindTexture(re,A.__webglTexture,r.TEXTURE0+F);const ge=i.get(ie);if(ie.version!==ge.__version||Q===!0){t.activeTexture(r.TEXTURE0+F);const se=Ye.getPrimaries(Ye.workingColorSpace),ue=x.colorSpace===Ht?null:Ye.getPrimaries(x.colorSpace),P=x.colorSpace===Ht||se===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const ee=T(x)&&S(x.image)===!1;let q=v(x.image,ee,!1,h);q=gt(x,q);const Le=S(q)||o,Se=a.convert(x.format,x.colorSpace);let ve=a.convert(x.type),xe=z(x.internalFormat,Se,ve,x.colorSpace,x.isVideoTexture);Ae(re,x,Le);let R;const ae=x.mipmaps,$=o&&x.isVideoTexture!==!0,de=ge.__version===void 0||Q===!0,oe=M(x,q,Le);if(x.isDepthTexture)xe=r.DEPTH_COMPONENT,o?x.type===di?xe=r.DEPTH_COMPONENT32F:x.type===Ri?xe=r.DEPTH_COMPONENT24:x.type===Gi?xe=r.DEPTH24_STENCIL8:xe=r.DEPTH_COMPONENT16:x.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===Wi&&xe===r.DEPTH_COMPONENT&&x.type!==Sa&&x.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ri,ve=a.convert(x.type)),x.format===fn&&xe===r.DEPTH_COMPONENT&&(xe=r.DEPTH_STENCIL,x.type!==Gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Gi,ve=a.convert(x.type))),de&&($?t.texStorage2D(r.TEXTURE_2D,1,xe,q.width,q.height):t.texImage2D(r.TEXTURE_2D,0,xe,q.width,q.height,0,Se,ve,null));else if(x.isDataTexture)if(ae.length>0&&Le){$&&de&&t.texStorage2D(r.TEXTURE_2D,oe,xe,ae[0].width,ae[0].height);for(let Y=0,me=ae.length;Y<me;Y++)R=ae[Y],$?t.texSubImage2D(r.TEXTURE_2D,Y,0,0,R.width,R.height,Se,ve,R.data):t.texImage2D(r.TEXTURE_2D,Y,xe,R.width,R.height,0,Se,ve,R.data);x.generateMipmaps=!1}else $?(de&&t.texStorage2D(r.TEXTURE_2D,oe,xe,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,q.width,q.height,Se,ve,q.data)):t.texImage2D(r.TEXTURE_2D,0,xe,q.width,q.height,0,Se,ve,q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$&&de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,xe,ae[0].width,ae[0].height,q.depth);for(let Y=0,me=ae.length;Y<me;Y++)R=ae[Y],x.format!==kt?Se!==null?$?t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,R.width,R.height,q.depth,Se,R.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,xe,R.width,R.height,q.depth,0,R.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,R.width,R.height,q.depth,Se,ve,R.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,xe,R.width,R.height,q.depth,0,Se,ve,R.data)}else{$&&de&&t.texStorage2D(r.TEXTURE_2D,oe,xe,ae[0].width,ae[0].height);for(let Y=0,me=ae.length;Y<me;Y++)R=ae[Y],x.format!==kt?Se!==null?$?t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,R.width,R.height,Se,R.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,xe,R.width,R.height,0,R.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?t.texSubImage2D(r.TEXTURE_2D,Y,0,0,R.width,R.height,Se,ve,R.data):t.texImage2D(r.TEXTURE_2D,Y,xe,R.width,R.height,0,Se,ve,R.data)}else if(x.isDataArrayTexture)$?(de&&t.texStorage3D(r.TEXTURE_2D_ARRAY,oe,xe,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Se,ve,q.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,xe,q.width,q.height,q.depth,0,Se,ve,q.data);else if(x.isData3DTexture)$?(de&&t.texStorage3D(r.TEXTURE_3D,oe,xe,q.width,q.height,q.depth),t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Se,ve,q.data)):t.texImage3D(r.TEXTURE_3D,0,xe,q.width,q.height,q.depth,0,Se,ve,q.data);else if(x.isFramebufferTexture){if(de)if($)t.texStorage2D(r.TEXTURE_2D,oe,xe,q.width,q.height);else{let Y=q.width,me=q.height;for(let be=0;be<oe;be++)t.texImage2D(r.TEXTURE_2D,be,xe,Y,me,0,Se,ve,null),Y>>=1,me>>=1}}else if(ae.length>0&&Le){$&&de&&t.texStorage2D(r.TEXTURE_2D,oe,xe,ae[0].width,ae[0].height);for(let Y=0,me=ae.length;Y<me;Y++)R=ae[Y],$?t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Se,ve,R):t.texImage2D(r.TEXTURE_2D,Y,xe,Se,ve,R);x.generateMipmaps=!1}else $?(de&&t.texStorage2D(r.TEXTURE_2D,oe,xe,q.width,q.height),t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se,ve,q)):t.texImage2D(r.TEXTURE_2D,0,xe,Se,ve,q);C(x,Le)&&w(re),ge.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Mt(A,x,F){if(x.image.length!==6)return;const re=Me(A,x),Q=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+F);const ie=i.get(Q);if(Q.version!==ie.__version||re===!0){t.activeTexture(r.TEXTURE0+F);const ge=Ye.getPrimaries(Ye.workingColorSpace),se=x.colorSpace===Ht?null:Ye.getPrimaries(x.colorSpace),ue=x.colorSpace===Ht||ge===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const P=x.isCompressedTexture||x.image[0].isCompressedTexture,ee=x.image[0]&&x.image[0].isDataTexture,q=[];for(let Y=0;Y<6;Y++)!P&&!ee?q[Y]=v(x.image[Y],!1,!0,c):q[Y]=ee?x.image[Y].image:x.image[Y],q[Y]=gt(x,q[Y]);const Le=q[0],Se=S(Le)||o,ve=a.convert(x.format,x.colorSpace),xe=a.convert(x.type),R=z(x.internalFormat,ve,xe,x.colorSpace),ae=o&&x.isVideoTexture!==!0,$=ie.__version===void 0||re===!0;let de=M(x,Le,Se);Ae(r.TEXTURE_CUBE_MAP,x,Se);let oe;if(P){ae&&$&&t.texStorage2D(r.TEXTURE_CUBE_MAP,de,R,Le.width,Le.height);for(let Y=0;Y<6;Y++){oe=q[Y].mipmaps;for(let me=0;me<oe.length;me++){const be=oe[me];x.format!==kt?ve!==null?ae?t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,R,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,0,0,be.width,be.height,ve,xe,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me,R,be.width,be.height,0,ve,xe,be.data)}}}else{oe=x.mipmaps,ae&&$&&(oe.length>0&&de++,t.texStorage2D(r.TEXTURE_CUBE_MAP,de,R,q[0].width,q[0].height));for(let Y=0;Y<6;Y++)if(ee){ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,q[Y].width,q[Y].height,ve,xe,q[Y].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,R,q[Y].width,q[Y].height,0,ve,xe,q[Y].data);for(let me=0;me<oe.length;me++){const be=oe[me].image[Y].image;ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,be.width,be.height,ve,xe,be.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,R,be.width,be.height,0,ve,xe,be.data)}}else{ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ve,xe,q[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,R,ve,xe,q[Y]);for(let me=0;me<oe.length;me++){const be=oe[me];ae?t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,0,0,ve,xe,be.image[Y]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Y,me+1,R,ve,xe,be.image[Y])}}}C(x,Se)&&w(r.TEXTURE_CUBE_MAP),ie.__version=Q.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ue(A,x,F,re,Q,ie){const ge=a.convert(F.format,F.colorSpace),se=a.convert(F.type),ue=z(F.internalFormat,ge,se,F.colorSpace);if(!i.get(x).__hasExternalTextures){const P=Math.max(1,x.width>>ie),ee=Math.max(1,x.height>>ie);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?t.texImage3D(Q,ie,ue,P,ee,x.depth,0,ge,se,null):t.texImage2D(Q,ie,ue,P,ee,0,ge,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,A),je(x)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,Q,i.get(F).__webglTexture,0,Ne(x)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,re,Q,i.get(F).__webglTexture,ie),t.bindFramebuffer(r.FRAMEBUFFER,null)}function U(A,x,F){if(r.bindRenderbuffer(r.RENDERBUFFER,A),x.depthBuffer&&!x.stencilBuffer){let re=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||je(x)){const Q=x.depthTexture;Q&&Q.isDepthTexture&&(Q.type===di?re=r.DEPTH_COMPONENT32F:Q.type===Ri&&(re=r.DEPTH_COMPONENT24));const ie=Ne(x);je(x)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,re,x.width,x.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,re,x.width,x.height)}else r.renderbufferStorage(r.RENDERBUFFER,re,x.width,x.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,A)}else if(x.depthBuffer&&x.stencilBuffer){const re=Ne(x);F&&je(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,x.width,x.height):je(x)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,re,r.DEPTH24_STENCIL8,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,A)}else{const re=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Q=0;Q<re.length;Q++){const ie=re[Q],ge=a.convert(ie.format,ie.colorSpace),se=a.convert(ie.type),ue=z(ie.internalFormat,ge,se,ie.colorSpace),P=Ne(x);F&&je(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,P,ue,x.width,x.height):je(x)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,P,ue,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ue,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),X(x.depthTexture,0);const F=i.get(x.depthTexture).__webglTexture,re=Ne(x);if(x.depthTexture.format===Wi)je(x)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,F,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,F,0);else if(x.depthTexture.format===fn)je(x)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,F,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,F,0);else throw new Error("Unknown depthTexture format")}function Te(A){const x=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ut(x.__webglFramebuffer,A)}else if(F){x.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[re]),x.__webglDepthbuffer[re]=r.createRenderbuffer(),U(x.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=r.createRenderbuffer(),U(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(A,x,F){const re=i.get(A);x!==void 0&&Ue(re.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&Te(A)}function Re(A){const x=A.texture,F=i.get(A),re=i.get(x);A.addEventListener("dispose",J),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=r.createTexture()),re.__version=x.version,s.memory.textures++);const Q=A.isWebGLCubeRenderTarget===!0,ie=A.isWebGLMultipleRenderTargets===!0,ge=S(A)||o;if(Q){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let ue=0;ue<x.mipmaps.length;ue++)F.__webglFramebuffer[se][ue]=r.createFramebuffer()}else F.__webglFramebuffer[se]=r.createFramebuffer()}else{if(o&&x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)F.__webglFramebuffer[se]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ie)if(n.drawBuffers){const se=A.texture;for(let ue=0,P=se.length;ue<P;ue++){const ee=i.get(se[ue]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&je(A)===!1){const se=ie?x:[x];F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ue=0;ue<se.length;ue++){const P=se[ue];F.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[ue]);const ee=a.convert(P.format,P.colorSpace),q=a.convert(P.type),Le=z(P.internalFormat,ee,q,P.colorSpace,A.isXRRenderTarget===!0),Se=Ne(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,Le,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,F.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),U(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){t.bindTexture(r.TEXTURE_CUBE_MAP,re.__webglTexture),Ae(r.TEXTURE_CUBE_MAP,x,ge);for(let se=0;se<6;se++)if(o&&x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Ue(F.__webglFramebuffer[se][ue],A,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,ue);else Ue(F.__webglFramebuffer[se],A,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);C(x,ge)&&w(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const se=A.texture;for(let ue=0,P=se.length;ue<P;ue++){const ee=se[ue],q=i.get(ee);t.bindTexture(r.TEXTURE_2D,q.__webglTexture),Ae(r.TEXTURE_2D,ee,ge),Ue(F.__webglFramebuffer,A,ee,r.COLOR_ATTACHMENT0+ue,r.TEXTURE_2D,0),C(ee,ge)&&w(r.TEXTURE_2D)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?se=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(se,re.__webglTexture),Ae(se,x,ge),o&&x.mipmaps&&x.mipmaps.length>0)for(let ue=0;ue<x.mipmaps.length;ue++)Ue(F.__webglFramebuffer[ue],A,x,r.COLOR_ATTACHMENT0,se,ue);else Ue(F.__webglFramebuffer,A,x,r.COLOR_ATTACHMENT0,se,0);C(x,ge)&&w(se),t.unbindTexture()}A.depthBuffer&&Te(A)}function et(A){const x=S(A)||o,F=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,Q=F.length;re<Q;re++){const ie=F[re];if(C(ie,x)){const ge=A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,se=i.get(ie).__webglTexture;t.bindTexture(ge,se),w(ge),t.unbindTexture()}}}function ze(A){if(o&&A.samples>0&&je(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],F=A.width,re=A.height;let Q=r.COLOR_BUFFER_BIT;const ie=[],ge=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=i.get(A),ue=A.isWebGLMultipleRenderTargets===!0;if(ue)for(let P=0;P<x.length;P++)t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,se.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglFramebuffer);for(let P=0;P<x.length;P++){ie.push(r.COLOR_ATTACHMENT0+P),A.depthBuffer&&ie.push(ge);const ee=se.__ignoreDepthValues!==void 0?se.__ignoreDepthValues:!1;if(ee===!1&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),ue&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,se.__webglColorRenderbuffer[P]),ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ge]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ge])),ue){const q=i.get(x[P]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,q,0)}r.blitFramebuffer(0,0,F,re,0,0,F,re,Q,r.NEAREST),p&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let P=0;P<x.length;P++){t.bindFramebuffer(r.FRAMEBUFFER,se.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.RENDERBUFFER,se.__webglColorRenderbuffer[P]);const ee=i.get(x[P]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,se.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+P,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,se.__webglMultisampledFramebuffer)}}function Ne(A){return Math.min(u,A.samples)}function je(A){const x=i.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function dt(A){const x=s.render.frame;g.get(A)!==x&&(g.set(A,x),A.update())}function gt(A,x){const F=A.colorSpace,re=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Na||F!==xt&&F!==Ht&&(Ye.getTransfer(F)===$e?o===!1?e.has("EXT_sRGB")===!0&&re===kt?(A.format=Na,A.minFilter=It,A.generateMipmaps=!1):x=nl.sRGBToLinear(x):(re!==kt||Q!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),x}this.allocateTextureUnit=ne,this.resetTextureUnits=W,this.setTexture2D=X,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=te,this.rebindTextures=Ie,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=je}function Eg(r,e,t){const i=t.isWebGL2;function n(a,s=Ht){let o;const l=Ye.getTransfer(s);if(a===wi)return r.UNSIGNED_BYTE;if(a===mo)return r.UNSIGNED_SHORT_4_4_4_4;if(a===go)return r.UNSIGNED_SHORT_5_5_5_1;if(a===Xh)return r.BYTE;if(a===jh)return r.SHORT;if(a===Sa)return r.UNSIGNED_SHORT;if(a===fo)return r.INT;if(a===Ri)return r.UNSIGNED_INT;if(a===di)return r.FLOAT;if(a===Jn)return i?r.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===qh)return r.ALPHA;if(a===kt)return r.RGBA;if(a===Yh)return r.LUMINANCE;if(a===Kh)return r.LUMINANCE_ALPHA;if(a===Wi)return r.DEPTH_COMPONENT;if(a===fn)return r.DEPTH_STENCIL;if(a===Na)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Zh)return r.RED;if(a===_o)return r.RED_INTEGER;if(a===Jh)return r.RG;if(a===vo)return r.RG_INTEGER;if(a===xo)return r.RGBA_INTEGER;if(a===Ea||a===ba||a===Ta||a===Aa)if(l===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===Ea)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===ba)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ta)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Aa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===Ea)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===ba)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ta)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Aa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===yo||a===Mo||a===So||a===Eo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===yo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Mo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===So)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Eo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===$h)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===bo||a===To)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===bo)return l===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===To)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ao||a===wo||a===Ro||a===Lo||a===Co||a===Po||a===Io||a===No||a===Do||a===Uo||a===Oo||a===Fo||a===Bo||a===zo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Ao)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===wo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ro)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Lo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Co)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Po)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Io)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===No)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Do)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Uo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Oo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Fo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Bo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===zo)return l===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===wa||a===ko||a===Ho)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===wa)return l===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===ko)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Ho)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qh||a===Vo||a===Go||a===Wo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===wa)return o.COMPRESSED_RED_RGTC1_EXT;if(a===Vo)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Go)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Wo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Gi?i?r.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[a]!==void 0?r[a]:null}return{convert:n}}class bg extends Tt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let Qt=class extends Ze{constructor(){super(),this.isGroup=!0,this.type="Group"}};const Tg={type:"move"};class ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Ag extends rt{constructor(e,t,i,n,a,s,o,l,c,h){if(h=h!==void 0?h:Wi,h!==Wi&&h!==fn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Wi&&(i=Ri),i===void 0&&h===fn&&(i=Gi),super(null,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pt,this.minFilter=l!==void 0?l:pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wg extends ji{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=t.getContextAttributes();let m=null,f=null;const y=[],v=[],S=new Tt;S.layers.enable(1),S.viewport=new qe;const T=new Tt;T.layers.enable(2),T.viewport=new qe;const C=[S,T],w=new bg;w.layers.enable(1),w.layers.enable(2);let z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let B=y[N];return B===void 0&&(B=new ls,y[N]=B),B.getTargetRaySpace()},this.getControllerGrip=function(N){let B=y[N];return B===void 0&&(B=new ls,y[N]=B),B.getGripSpace()},this.getHand=function(N){let B=y[N];return B===void 0&&(B=new ls,y[N]=B),B.getHandSpace()};function b(N){const B=v.indexOf(N.inputSource);if(B===-1)return;const te=y[B];te!==void 0&&(te.update(N.inputSource,N.frame,c||s),te.dispatchEvent({type:N.type,data:N.inputSource}))}function k(){n.removeEventListener("select",b),n.removeEventListener("selectstart",b),n.removeEventListener("selectend",b),n.removeEventListener("squeeze",b),n.removeEventListener("squeezestart",b),n.removeEventListener("squeezeend",b),n.removeEventListener("end",k),n.removeEventListener("inputsourceschange",J);for(let N=0;N<y.length;N++){const B=v[N];B!==null&&(v[N]=null,y[N].disconnect(B))}z=null,M=null,e.setRenderTarget(m),p=null,d=null,u=null,n=null,f=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){a=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(N){if(n=N,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",b),n.addEventListener("selectstart",b),n.addEventListener("selectend",b),n.addEventListener("squeeze",b),n.addEventListener("squeezestart",b),n.addEventListener("squeezeend",b),n.addEventListener("end",k),n.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:n.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(n,t,B),n.updateRenderState({baseLayer:p}),f=new qi(p.framebufferWidth,p.framebufferHeight,{format:kt,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let B=null,te=null,he=null;_.depth&&(he=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=_.stencil?fn:Wi,te=_.stencil?Gi:Ri);const _e={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:a};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(_e),n.updateRenderState({layers:[d]}),f=new qi(d.textureWidth,d.textureHeight,{format:kt,type:wi,depthTexture:new Ag(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ee=e.properties.get(f);Ee.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),X.setContext(n),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function J(N){for(let B=0;B<N.removed.length;B++){const te=N.removed[B],he=v.indexOf(te);he>=0&&(v[he]=null,y[he].disconnect(te))}for(let B=0;B<N.added.length;B++){const te=N.added[B];let he=v.indexOf(te);if(he===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=v.length){v.push(te),he=Ee;break}else if(v[Ee]===null){v[Ee]=te,he=Ee;break}if(he===-1)break}const _e=y[he];_e&&_e.connect(te)}}const Z=new L,I=new L;function G(N,B,te){Z.setFromMatrixPosition(B.matrixWorld),I.setFromMatrixPosition(te.matrixWorld);const he=Z.distanceTo(I),_e=B.projectionMatrix.elements,Ee=te.projectionMatrix.elements,Ae=_e[14]/(_e[10]-1),Me=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],Mt=(_e[9]-1)/_e[5],Ue=(_e[8]-1)/_e[0],U=(Ee[8]+1)/Ee[0],ut=Ae*Ue,Te=Ae*U,Ie=he/(-Ue+U),Re=Ie*-Ue;B.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(Re),N.translateZ(Ie),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();const et=Ae+Ie,ze=Me+Ie,Ne=ut-Re,je=Te+(he-Re),dt=Xe*Me/ze*et,gt=Mt*Me/ze*et;N.projectionMatrix.makePerspective(Ne,je,dt,gt,et,ze),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}function j(N,B){B===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(B.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(n===null)return;w.near=T.near=S.near=N.near,w.far=T.far=S.far=N.far,(z!==w.near||M!==w.far)&&(n.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,M=w.far);const B=N.parent,te=w.cameras;j(w,B);for(let he=0;he<te.length;he++)j(te[he],B);te.length===2?G(w,S,T):w.projectionMatrix.copy(S.projectionMatrix),W(N,w,B)};function W(N,B,te){te===null?N.matrix.copy(B.matrixWorld):(N.matrix.copy(te.matrixWorld),N.matrix.invert(),N.matrix.multiply(B.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(B.projectionMatrix),N.projectionMatrixInverse.copy(B.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=_n*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(N){l=N,d!==null&&(d.fixedFoveation=N),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=N)};let ne=null;function K(N,B){if(h=B.getViewerPose(c||s),g=B,h!==null){const te=h.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let he=!1;te.length!==w.cameras.length&&(w.cameras.length=0,he=!0);for(let _e=0;_e<te.length;_e++){const Ee=te[_e];let Ae=null;if(p!==null)Ae=p.getViewport(Ee);else{const Xe=u.getViewSubImage(d,Ee);Ae=Xe.viewport,_e===0&&(e.setRenderTargetTextures(f,Xe.colorTexture,d.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(f))}let Me=C[_e];Me===void 0&&(Me=new Tt,Me.layers.enable(_e),Me.viewport=new qe,C[_e]=Me),Me.matrix.fromArray(Ee.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Ee.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),_e===0&&(w.matrix.copy(Me.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),he===!0&&w.cameras.push(Me)}}for(let te=0;te<y.length;te++){const he=v[te],_e=y[te];he!==null&&_e!==void 0&&_e.update(he,B,c||s)}ne&&ne(N,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),g=null}const X=new bl;X.setAnimationLoop(K),this.setAnimationLoop=function(N){ne=N},this.dispose=function(){}}}function Rg(r,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ml(r)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,y,v,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,S)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),_(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ct&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ct&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=r._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Lg(r,e,t,i){let n={},a={},s=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;i.uniformBlockBinding(y,S)}function c(y,v){let S=n[y.id];S===void 0&&(g(y),S=h(y),n[y.id]=S,y.addEventListener("dispose",m));const T=v.program;i.updateUBOMapping(y,T);const C=e.render.frame;a[y.id]!==C&&(d(y),a[y.id]=C)}function h(y){const v=u();y.__bindingPointIndex=v;const S=r.createBuffer(),T=y.__size,C=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,T,C),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function u(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=n[y.id],S=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let C=0,w=S.length;C<w;C++){const z=S[C];if(p(z,C,T)===!0){const M=z.__offset,b=Array.isArray(z.value)?z.value:[z.value];let k=0;for(let J=0;J<b.length;J++){const Z=b[J],I=_(Z);typeof Z=="number"?(z.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,M+k,z.__data)):Z.isMatrix3?(z.__data[0]=Z.elements[0],z.__data[1]=Z.elements[1],z.__data[2]=Z.elements[2],z.__data[3]=Z.elements[0],z.__data[4]=Z.elements[3],z.__data[5]=Z.elements[4],z.__data[6]=Z.elements[5],z.__data[7]=Z.elements[0],z.__data[8]=Z.elements[6],z.__data[9]=Z.elements[7],z.__data[10]=Z.elements[8],z.__data[11]=Z.elements[0]):(Z.toArray(z.__data,k),k+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,M,z.__data)}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,v,S){const T=y.value;if(S[v]===void 0){if(typeof T=="number")S[v]=T;else{const C=Array.isArray(T)?T:[T],w=[];for(let z=0;z<C.length;z++)w.push(C[z].clone());S[v]=w}return!0}else if(typeof T=="number"){if(S[v]!==T)return S[v]=T,!0}else{const C=Array.isArray(S[v])?S[v]:[S[v]],w=Array.isArray(T)?T:[T];for(let z=0;z<C.length;z++){const M=C[z];if(M.equals(w[z])===!1)return M.copy(w[z]),!0}}return!1}function g(y){const v=y.uniforms;let S=0;const T=16;let C=0;for(let w=0,z=v.length;w<z;w++){const M=v[w],b={boundary:0,storage:0},k=Array.isArray(M.value)?M.value:[M.value];for(let J=0,Z=k.length;J<Z;J++){const I=k[J],G=_(I);b.boundary+=G.boundary,b.storage+=G.storage}if(M.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,w>0){C=S%T;const J=T-C;C!==0&&J-b.boundary<0&&(S+=T-C,M.__offset=S)}S+=b.storage}return C=S%T,C>0&&(S+=T-C),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const S=s.indexOf(v.__bindingPointIndex);s.splice(S,1),r.deleteBuffer(n[v.id]),delete n[v.id],delete a[v.id]}function f(){for(const y in n)r.deleteBuffer(n[y]);s=[],n={},a={}}return{bind:l,update:c,dispose:f}}class Jl{constructor(e={}){const{canvas:t=wu(),context:i=null,depth:n=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=s;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Je,this._useLegacyLights=!1,this.toneMapping=Ti,this.toneMappingExposure=1;const v=this;let S=!1,T=0,C=0,w=null,z=-1,M=null;const b=new qe,k=new qe;let J=null;const Z=new fe(0);let I=0,G=t.width,j=t.height,W=1,ne=null,K=null;const X=new qe(0,0,G,j),N=new qe(0,0,G,j);let B=!1;const te=new ts;let he=!1,_e=!1,Ee=null;const Ae=new pe,Me=new ye,Xe=new L,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return w===null?W:1}let U=i;function ut(E,D){for(let V=0;V<E.length;V++){const O=E[V],H=t.getContext(O,D);if(H!==null)return H}return null}try{const E={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${St}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",$,!1),t.addEventListener("webglcontextcreationerror",de,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&D.shift(),U=ut(D,E),U===null)throw ut(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Te,Ie,Re,et,ze,Ne,je,dt,gt,A,x,F,re,Q,ie,ge,se,ue,P,ee,q,Le,Se,ve;function xe(){Te=new kf(U),Ie=new Df(U,Te,e),Te.init(Ie),Le=new Eg(U,Te,Ie),Re=new Mg(U,Te,Ie),et=new Gf(U),ze=new og,Ne=new Sg(U,Te,Re,ze,Ie,Le,et),je=new Of(v),dt=new zf(v),gt=new $u(U,Ie),Se=new If(U,Te,gt,Ie),A=new Hf(U,gt,et,Se),x=new qf(U,A,gt,et),P=new jf(U,Ie,Ne),ge=new Uf(ze),F=new sg(v,je,dt,Te,Ie,Se,ge),re=new Rg(v,ze),Q=new cg,ie=new mg(Te,Ie),ue=new Pf(v,je,dt,Re,x,d,l),se=new yg(v,x,Ie),ve=new Lg(U,et,Ie,Re),ee=new Nf(U,Te,et,Ie),q=new Vf(U,Te,et,Ie),et.programs=F.programs,v.capabilities=Ie,v.extensions=Te,v.properties=ze,v.renderLists=Q,v.shadowMap=se,v.state=Re,v.info=et}xe();const R=new wg(v,U);this.xr=R,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Te.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Te.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(G,j,!1))},this.getSize=function(E){return E.set(G,j)},this.setSize=function(E,D,V=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,j=D,t.width=Math.floor(E*W),t.height=Math.floor(D*W),V===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(G*W,j*W).floor()},this.setDrawingBufferSize=function(E,D,V){G=E,j=D,W=V,t.width=Math.floor(E*V),t.height=Math.floor(D*V),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(b)},this.getViewport=function(E){return E.copy(X)},this.setViewport=function(E,D,V,O){E.isVector4?X.set(E.x,E.y,E.z,E.w):X.set(E,D,V,O),Re.viewport(b.copy(X).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(N)},this.setScissor=function(E,D,V,O){E.isVector4?N.set(E.x,E.y,E.z,E.w):N.set(E,D,V,O),Re.scissor(k.copy(N).multiplyScalar(W).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(E){Re.setScissorTest(B=E)},this.setOpaqueSort=function(E){ne=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(ue.getClearColor())},this.setClearColor=function(){ue.setClearColor.apply(ue,arguments)},this.getClearAlpha=function(){return ue.getClearAlpha()},this.setClearAlpha=function(){ue.setClearAlpha.apply(ue,arguments)},this.clear=function(E=!0,D=!0,V=!0){let O=0;if(E){let H=!1;if(w!==null){const ce=w.texture.format;H=ce===xo||ce===vo||ce===_o}if(H){const ce=w.texture.type,we=ce===wi||ce===Ri||ce===Sa||ce===Gi||ce===mo||ce===go,Ce=ue.getClearColor(),Pe=ue.getClearAlpha(),He=Ce.r,Oe=Ce.g,Fe=Ce.b;we?(p[0]=He,p[1]=Oe,p[2]=Fe,p[3]=Pe,U.clearBufferuiv(U.COLOR,0,p)):(g[0]=He,g[1]=Oe,g[2]=Fe,g[3]=Pe,U.clearBufferiv(U.COLOR,0,g))}else O|=U.COLOR_BUFFER_BIT}D&&(O|=U.DEPTH_BUFFER_BIT),V&&(O|=U.STENCIL_BUFFER_BIT),U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",$,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Q.dispose(),ie.dispose(),ze.dispose(),je.dispose(),dt.dispose(),x.dispose(),Se.dispose(),ve.dispose(),F.dispose(),R.dispose(),R.removeEventListener("sessionstart",tt),R.removeEventListener("sessionend",ci),Ee&&(Ee.dispose(),Ee=null),Rt.stop()};function ae(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function $(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=et.autoReset,D=se.enabled,V=se.autoUpdate,O=se.needsUpdate,H=se.type;xe(),et.autoReset=E,se.enabled=D,se.autoUpdate=V,se.needsUpdate=O,se.type=H}function de(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const D=E.target;D.removeEventListener("dispose",oe),Y(D)}function Y(E){me(E),ze.remove(E)}function me(E){const D=ze.get(E).programs;D!==void 0&&(D.forEach(function(V){F.releaseProgram(V)}),E.isShaderMaterial&&F.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,V,O,H,ce){D===null&&(D=Mt);const we=H.isMesh&&H.matrixWorld.determinant()<0,Ce=J_(E,D,V,O,H);Re.setMaterial(O,we);let Pe=V.index,He=1;if(O.wireframe===!0){if(Pe=A.getWireframeAttribute(V),Pe===void 0)return;He=2}const Oe=V.drawRange,Fe=V.attributes.position;let _t=Oe.start*He,nt=(Oe.start+Oe.count)*He;ce!==null&&(_t=Math.max(_t,ce.start*He),nt=Math.min(nt,(ce.start+ce.count)*He)),Pe!==null?(_t=Math.max(_t,0),nt=Math.min(nt,Pe.count)):Fe!=null&&(_t=Math.max(_t,0),nt=Math.min(nt,Fe.count));const Kt=nt-_t;if(Kt<0||Kt===1/0)return;Se.setup(H,O,Ce,V,Pe);let Ei,ot=ee;if(Pe!==null&&(Ei=gt.get(Pe),ot=q,ot.setIndex(Ei)),H.isMesh)O.wireframe===!0?(Re.setLineWidth(O.wireframeLinewidth*Ue()),ot.setMode(U.LINES)):ot.setMode(U.TRIANGLES);else if(H.isLine){let Ve=O.linewidth;Ve===void 0&&(Ve=1),Re.setLineWidth(Ve*Ue()),H.isLineSegments?ot.setMode(U.LINES):H.isLineLoop?ot.setMode(U.LINE_LOOP):ot.setMode(U.LINE_STRIP)}else H.isPoints?ot.setMode(U.POINTS):H.isSprite&&ot.setMode(U.TRIANGLES);if(H.isInstancedMesh)ot.renderInstances(_t,Kt,H.count);else if(V.isInstancedBufferGeometry){const Ve=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Js=Math.min(V.instanceCount,Ve);ot.renderInstances(_t,Kt,Js)}else ot.render(_t,Kt)},this.compile=function(E,D){function V(O,H,ce){O.transparent===!0&&O.side===ti&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,va(O,H,ce),O.side=ui,O.needsUpdate=!0,va(O,H,ce),O.side=ti):va(O,H,ce)}m=ie.get(E),m.init(),y.push(m),E.traverseVisible(function(O){O.isLight&&O.layers.test(D.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights(v._useLegacyLights),E.traverse(function(O){const H=O.material;if(H)if(Array.isArray(H))for(let ce=0;ce<H.length;ce++){const we=H[ce];V(we,E,O)}else V(H,E,O)}),y.pop(),m=null};let be=null;function li(E){be&&be(E)}function tt(){Rt.stop()}function ci(){Rt.start()}const Rt=new bl;Rt.setAnimationLoop(li),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(E){be=E,R.setAnimationLoop(E),E===null?Rt.stop():Rt.start()},R.addEventListener("sessionstart",tt),R.addEventListener("sessionend",ci),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(D),D=R.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,D,w),m=ie.get(E,y.length),m.init(),y.push(m),Ae.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),te.setFromProjectionMatrix(Ae),_e=this.localClippingEnabled,he=ge.init(this.clippingPlanes,_e),_=Q.get(E,f.length),_.init(),f.push(_),hh(E,D,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(ne,K),this.info.render.frame++,he===!0&&ge.beginShadows();const V=m.state.shadowsArray;if(se.render(V,E,D),he===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),ue.render(_,E),m.setupLights(v._useLegacyLights),D.isArrayCamera){const O=D.cameras;for(let H=0,ce=O.length;H<ce;H++){const we=O[H];uh(_,E,we,we.viewport)}}else uh(_,E,D);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(v,E,D),Se.resetDefaultState(),z=-1,M=null,y.pop(),y.length>0?m=y[y.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function hh(E,D,V,O){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)V=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){O&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const ce=x.update(E),we=E.material;we.visible&&_.push(E,ce,we,V,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const ce=x.update(E),we=E.material;if(O&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Xe.copy(ce.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(we)){const Ce=ce.groups;for(let Pe=0,He=Ce.length;Pe<He;Pe++){const Oe=Ce[Pe],Fe=we[Oe.materialIndex];Fe&&Fe.visible&&_.push(E,ce,Fe,V,Xe.z,Oe)}}else we.visible&&_.push(E,ce,we,V,Xe.z,null)}}const H=E.children;for(let ce=0,we=H.length;ce<we;ce++)hh(H[ce],D,V,O)}function uh(E,D,V,O){const H=E.opaque,ce=E.transmissive,we=E.transparent;m.setupLightsView(V),he===!0&&ge.setGlobalState(v.clippingPlanes,V),ce.length>0&&Z_(H,ce,D,V),O&&Re.viewport(b.copy(O)),H.length>0&&_a(H,D,V),ce.length>0&&_a(ce,D,V),we.length>0&&_a(we,D,V),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Z_(E,D,V,O){const H=Ie.isWebGL2;Ee===null&&(Ee=new qi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Jn:wi,minFilter:Vi,samples:H?4:0})),v.getDrawingBufferSize(Me),H?Ee.setSize(Me.x,Me.y):Ee.setSize(Cr(Me.x),Cr(Me.y));const ce=v.getRenderTarget();v.setRenderTarget(Ee),v.getClearColor(Z),I=v.getClearAlpha(),I<1&&v.setClearColor(16777215,.5),v.clear();const we=v.toneMapping;v.toneMapping=Ti,_a(E,V,O),Ne.updateMultisampleRenderTarget(Ee),Ne.updateRenderTargetMipmap(Ee);let Ce=!1;for(let Pe=0,He=D.length;Pe<He;Pe++){const Oe=D[Pe],Fe=Oe.object,_t=Oe.geometry,nt=Oe.material,Kt=Oe.group;if(nt.side===ti&&Fe.layers.test(O.layers)){const Ei=nt.side;nt.side=Ct,nt.needsUpdate=!0,dh(Fe,V,O,_t,nt,Kt),nt.side=Ei,nt.needsUpdate=!0,Ce=!0}}Ce===!0&&(Ne.updateMultisampleRenderTarget(Ee),Ne.updateRenderTargetMipmap(Ee)),v.setRenderTarget(ce),v.setClearColor(Z,I),v.toneMapping=we}function _a(E,D,V){const O=D.isScene===!0?D.overrideMaterial:null;for(let H=0,ce=E.length;H<ce;H++){const we=E[H],Ce=we.object,Pe=we.geometry,He=O===null?we.material:O,Oe=we.group;Ce.layers.test(V.layers)&&dh(Ce,D,V,Pe,He,Oe)}}function dh(E,D,V,O,H,ce){E.onBeforeRender(v,D,V,O,H,ce),E.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,D,V,O,E,ce),H.transparent===!0&&H.side===ti&&H.forceSinglePass===!1?(H.side=Ct,H.needsUpdate=!0,v.renderBufferDirect(V,D,O,H,E,ce),H.side=ui,H.needsUpdate=!0,v.renderBufferDirect(V,D,O,H,E,ce),H.side=ti):v.renderBufferDirect(V,D,O,H,E,ce),E.onAfterRender(v,D,V,O,H,ce)}function va(E,D,V){D.isScene!==!0&&(D=Mt);const O=ze.get(E),H=m.state.lights,ce=m.state.shadowsArray,we=H.state.version,Ce=F.getParameters(E,H.state,ce,D,V),Pe=F.getProgramCacheKey(Ce);let He=O.programs;O.environment=E.isMeshStandardMaterial?D.environment:null,O.fog=D.fog,O.envMap=(E.isMeshStandardMaterial?dt:je).get(E.envMap||O.environment),He===void 0&&(E.addEventListener("dispose",oe),He=new Map,O.programs=He);let Oe=He.get(Pe);if(Oe!==void 0){if(O.currentProgram===Oe&&O.lightsStateVersion===we)return ph(E,Ce),Oe}else Ce.uniforms=F.getUniforms(E),E.onBuild(V,Ce,v),E.onBeforeCompile(Ce,v),Oe=F.acquireProgram(Ce,Pe),He.set(Pe,Oe),O.uniforms=Ce.uniforms;const Fe=O.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Fe.clippingPlanes=ge.uniform),ph(E,Ce),O.needsLights=Q_(E),O.lightsStateVersion=we,O.needsLights&&(Fe.ambientLightColor.value=H.state.ambient,Fe.lightProbe.value=H.state.probe,Fe.directionalLights.value=H.state.directional,Fe.directionalLightShadows.value=H.state.directionalShadow,Fe.spotLights.value=H.state.spot,Fe.spotLightShadows.value=H.state.spotShadow,Fe.rectAreaLights.value=H.state.rectArea,Fe.ltc_1.value=H.state.rectAreaLTC1,Fe.ltc_2.value=H.state.rectAreaLTC2,Fe.pointLights.value=H.state.point,Fe.pointLightShadows.value=H.state.pointShadow,Fe.hemisphereLights.value=H.state.hemi,Fe.directionalShadowMap.value=H.state.directionalShadowMap,Fe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Fe.spotShadowMap.value=H.state.spotShadowMap,Fe.spotLightMatrix.value=H.state.spotLightMatrix,Fe.spotLightMap.value=H.state.spotLightMap,Fe.pointShadowMap.value=H.state.pointShadowMap,Fe.pointShadowMatrix.value=H.state.pointShadowMatrix);const _t=Oe.getUniforms(),nt=ea.seqWithValue(_t.seq,Fe);return O.currentProgram=Oe,O.uniformsList=nt,Oe}function ph(E,D){const V=ze.get(E);V.outputColorSpace=D.outputColorSpace,V.instancing=D.instancing,V.instancingColor=D.instancingColor,V.skinning=D.skinning,V.morphTargets=D.morphTargets,V.morphNormals=D.morphNormals,V.morphColors=D.morphColors,V.morphTargetsCount=D.morphTargetsCount,V.numClippingPlanes=D.numClippingPlanes,V.numIntersection=D.numClipIntersection,V.vertexAlphas=D.vertexAlphas,V.vertexTangents=D.vertexTangents,V.toneMapping=D.toneMapping}function J_(E,D,V,O,H){D.isScene!==!0&&(D=Mt),Ne.resetTextureUnits();const ce=D.fog,we=O.isMeshStandardMaterial?D.environment:null,Ce=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:xt,Pe=(O.isMeshStandardMaterial?dt:je).get(O.envMap||we),He=O.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Fe=!!V.morphAttributes.position,_t=!!V.morphAttributes.normal,nt=!!V.morphAttributes.color;let Kt=Ti;O.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Kt=v.toneMapping);const Ei=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ot=Ei!==void 0?Ei.length:0,Ve=ze.get(O),Js=m.state.lights;if(he===!0&&(_e===!0||E!==M)){const Bt=E===M&&O.id===z;ge.setState(O,E,Bt)}let $s=!1;O.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Js.state.version||Ve.outputColorSpace!==Ce||H.isInstancedMesh&&Ve.instancing===!1||!H.isInstancedMesh&&Ve.instancing===!0||H.isSkinnedMesh&&Ve.skinning===!1||!H.isSkinnedMesh&&Ve.skinning===!0||H.isInstancedMesh&&Ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ve.instancingColor===!1&&H.instanceColor!==null||Ve.envMap!==Pe||O.fog===!0&&Ve.fog!==ce||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==ge.numPlanes||Ve.numIntersection!==ge.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Oe||Ve.morphTargets!==Fe||Ve.morphNormals!==_t||Ve.morphColors!==nt||Ve.toneMapping!==Kt||Ie.isWebGL2===!0&&Ve.morphTargetsCount!==ot)&&($s=!0):($s=!0,Ve.__version=O.version);let on=Ve.currentProgram;$s===!0&&(on=va(O,D,H));let fh=!1,vr=!1,Qs=!1;const Lt=on.getUniforms(),ln=Ve.uniforms;if(Re.useProgram(on.program)&&(fh=!0,vr=!0,Qs=!0),O.id!==z&&(z=O.id,vr=!0),fh||M!==E){Lt.setValue(U,"projectionMatrix",E.projectionMatrix),Lt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Bt=Lt.map.cameraPosition;Bt!==void 0&&Bt.setValue(U,Xe.setFromMatrixPosition(E.matrixWorld)),Ie.logarithmicDepthBuffer&&Lt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Lt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,vr=!0,Qs=!0)}if(H.isSkinnedMesh){Lt.setOptional(U,H,"bindMatrix"),Lt.setOptional(U,H,"bindMatrixInverse");const Bt=H.skeleton;Bt&&(Ie.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),Lt.setValue(U,"boneTexture",Bt.boneTexture,Ne),Lt.setValue(U,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const eo=V.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0&&Ie.isWebGL2===!0)&&P.update(H,V,on),(vr||Ve.receiveShadow!==H.receiveShadow)&&(Ve.receiveShadow=H.receiveShadow,Lt.setValue(U,"receiveShadow",H.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ln.envMap.value=Pe,ln.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),vr&&(Lt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ve.needsLights&&$_(ln,Qs),ce&&O.fog===!0&&re.refreshFogUniforms(ln,ce),re.refreshMaterialUniforms(ln,O,W,j,Ee),ea.upload(U,Ve.uniformsList,ln,Ne)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(ea.upload(U,Ve.uniformsList,ln,Ne),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Lt.setValue(U,"center",H.center),Lt.setValue(U,"modelViewMatrix",H.modelViewMatrix),Lt.setValue(U,"normalMatrix",H.normalMatrix),Lt.setValue(U,"modelMatrix",H.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Bt=O.uniformsGroups;for(let to=0,ev=Bt.length;to<ev;to++)if(Ie.isWebGL2){const mh=Bt[to];ve.update(mh,on),ve.bind(mh,on)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return on}function $_(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Q_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,D,V){ze.get(E.texture).__webglTexture=D,ze.get(E.depthTexture).__webglTexture=V;const O=ze.get(E);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=V===void 0,O.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const V=ze.get(E);V.__webglFramebuffer=D,V.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,V=0){w=E,T=D,C=V;let O=!0,H=null,ce=!1,we=!1;if(E){const Ce=ze.get(E);Ce.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(U.FRAMEBUFFER,null),O=!1):Ce.__webglFramebuffer===void 0?Ne.setupRenderTarget(E):Ce.__hasExternalTextures&&Ne.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(we=!0);const He=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(He[D])?H=He[D][V]:H=He[D],ce=!0):Ie.isWebGL2&&E.samples>0&&Ne.useMultisampledRTT(E)===!1?H=ze.get(E).__webglMultisampledFramebuffer:Array.isArray(He)?H=He[V]:H=He,b.copy(E.viewport),k.copy(E.scissor),J=E.scissorTest}else b.copy(X).multiplyScalar(W).floor(),k.copy(N).multiplyScalar(W).floor(),J=B;if(Re.bindFramebuffer(U.FRAMEBUFFER,H)&&Ie.drawBuffers&&O&&Re.drawBuffers(E,H),Re.viewport(b),Re.scissor(k),Re.setScissorTest(J),ce){const Ce=ze.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,V)}else if(we){const Ce=ze.get(E.texture),Pe=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ce.__webglTexture,V||0,Pe)}z=-1},this.readRenderTargetPixels=function(E,D,V,O,H,ce,we){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){Re.bindFramebuffer(U.FRAMEBUFFER,Ce);try{const Pe=E.texture,He=Pe.format,Oe=Pe.type;if(He!==kt&&Le.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Oe===Jn&&(Te.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Oe!==wi&&Le.convert(Oe)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===di&&(Ie.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-O&&V>=0&&V<=E.height-H&&U.readPixels(D,V,O,H,Le.convert(He),Le.convert(Oe),ce)}finally{const Pe=w!==null?ze.get(w).__webglFramebuffer:null;Re.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(E,D,V=0){const O=Math.pow(2,-V),H=Math.floor(D.image.width*O),ce=Math.floor(D.image.height*O);Ne.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,V,0,0,E.x,E.y,H,ce),Re.unbindTexture()},this.copyTextureToTexture=function(E,D,V,O=0){const H=D.image.width,ce=D.image.height,we=Le.convert(V.format),Ce=Le.convert(V.type);Ne.setTexture2D(V,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,O,E.x,E.y,H,ce,we,Ce,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,O,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,we,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,O,E.x,E.y,we,Ce,D.image),O===0&&V.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(E,D,V,O,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=E.max.x-E.min.x+1,we=E.max.y-E.min.y+1,Ce=E.max.z-E.min.z+1,Pe=Le.convert(O.format),He=Le.convert(O.type);let Oe;if(O.isData3DTexture)Ne.setTexture3D(O,0),Oe=U.TEXTURE_3D;else if(O.isDataArrayTexture)Ne.setTexture2DArray(O,0),Oe=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Fe=U.getParameter(U.UNPACK_ROW_LENGTH),_t=U.getParameter(U.UNPACK_IMAGE_HEIGHT),nt=U.getParameter(U.UNPACK_SKIP_PIXELS),Kt=U.getParameter(U.UNPACK_SKIP_ROWS),Ei=U.getParameter(U.UNPACK_SKIP_IMAGES),ot=V.isCompressedTexture?V.mipmaps[0]:V.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ot.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ot.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,E.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,E.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,E.min.z),V.isDataTexture||V.isData3DTexture?U.texSubImage3D(Oe,H,D.x,D.y,D.z,ce,we,Ce,Pe,He,ot.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Oe,H,D.x,D.y,D.z,ce,we,Ce,Pe,ot.data)):U.texSubImage3D(Oe,H,D.x,D.y,D.z,ce,we,Ce,Pe,He,ot),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t),U.pixelStorei(U.UNPACK_SKIP_PIXELS,nt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Kt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ei),H===0&&O.generateMipmaps&&U.generateMipmap(Oe),Re.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ne.setTextureCube(E,0):E.isData3DTexture?Ne.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ne.setTexture2DArray(E,0):Ne.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){T=0,C=0,w=null,Re.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ca?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===Tr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Je?Xi:Ko}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xi?Je:xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Cg extends Jl{}Cg.prototype.isWebGL1Renderer=!0;class cs{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new fe(e),this.near=t,this.far=i}clone(){return new cs(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $l extends Ze{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Pg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ia,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,a=this.stride;n<a;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new L;class hs{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ii(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),i=Ke(i,this.array),n=Ke(n,this.array),a=Ke(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return new yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new hs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[n+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ql=new L,ec=new qe,tc=new qe,Ig=new L,ic=new pe,zn=new L,us=new ri,nc=new pe,ds=new bn;class rc extends Ft{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new pe,this.bindMatrixInverse=new pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)zn.fromBufferAttribute(t,i),this.applyBoneTransform(i,zn),this.boundingBox.expandByPoint(zn)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ri),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)zn.fromBufferAttribute(t,i),this.applyBoneTransform(i,zn),this.boundingSphere.expandByPoint(zn)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),us.copy(this.boundingSphere),us.applyMatrix4(n),e.ray.intersectsSphere(us)!==!1&&(nc.copy(n).invert(),ds.copy(e.ray).applyMatrix4(nc),!(this.boundingBox!==null&&ds.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new qe,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;ec.fromBufferAttribute(n.attributes.skinIndex,e),tc.fromBufferAttribute(n.attributes.skinWeight,e),Ql.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const s=tc.getComponent(a);if(s!==0){const o=ec.getComponent(a);ic.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Ig.copy(Ql).applyMatrix4(ic),s)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class ta extends Ze{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ng extends rt{constructor(e=null,t=1,i=1,n,a,s,o,l,c=pt,h=pt,u,d){super(null,s,o,l,c,h,n,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ac=new pe,Dg=new pe;class ia{constructor(e=[],t=[]){this.uuid=Zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:Dg;ac.multiplyMatrices(o,t[a]),ac.toArray(i,a*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new ia(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=$o(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ng(t,e,e,kt,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const a=e.bones[i];let s=t[a];s===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",a),s=new ta),this.bones.push(s),this.boneInverses.push(new pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,a=t.length;n<a;n++){const s=t[n];e.bones.push(s.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class sc extends yt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const kn=new pe,oc=new pe,na=[],lc=new ni,Ug=new pe,lr=new Ft,cr=new ri;class Og extends Ft{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new sc(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ug)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kn),lc.copy(e.boundingBox).applyMatrix4(kn),this.boundingBox.union(lc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ri),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,kn),cr.copy(e.boundingSphere).applyMatrix4(kn),this.boundingSphere.union(cr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(lr.geometry=this.geometry,lr.material=this.material,lr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cr.copy(this.boundingSphere),cr.applyMatrix4(i),e.ray.intersectsSphere(cr)!==!1))for(let a=0;a<n;a++){this.getMatrixAt(a,kn),oc.multiplyMatrices(i,kn),lr.matrixWorld=oc,lr.raycast(e,na);for(let s=0,o=na.length;s<o;s++){const l=na[s];l.instanceId=a,l.object=this,t.push(l)}na.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new sc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Hn extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const cc=new L,hc=new L,uc=new pe,ps=new bn,ra=new ri;class Vn extends Ze{constructor(e=new mt,t=new Hn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)cc.fromBufferAttribute(t,n-1),hc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=cc.distanceTo(hc);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(n),ra.radius+=a,e.ray.intersectsSphere(ra)===!1)return;uc.copy(n).invert(),ps.copy(e.ray).applyMatrix4(uc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new L,h=new L,u=new L,d=new L,p=this.isLineSegments?2:1,g=i.index,_=i.attributes.position;if(g!==null){const m=Math.max(0,s.start),f=Math.min(g.count,s.start+s.count);for(let y=m,v=f-1;y<v;y+=p){const S=g.getX(y),T=g.getX(y+1);if(c.fromBufferAttribute(_,S),h.fromBufferAttribute(_,T),ps.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(d);C<e.near||C>e.far||t.push({distance:C,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,s.start),f=Math.min(_.count,s.start+s.count);for(let y=m,v=f-1;y<v;y+=p){if(c.fromBufferAttribute(_,y),h.fromBufferAttribute(_,y+1),ps.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}const dc=new L,pc=new L;class fs extends Vn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)dc.fromBufferAttribute(t,n),pc.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+dc.distanceTo(pc);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fg extends Vn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ms extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fc=new pe,gs=new bn,aa=new ri,sa=new L;class mc extends Ze{constructor(e=new mt,t=new ms){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(n),aa.radius+=a,e.ray.intersectsSphere(aa)===!1)return;fc.copy(n).invert(),gs.copy(e.ray).applyMatrix4(fc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let p=u,g=d;p<g;p++){const _=c.getX(p);sa.fromBufferAttribute(h,_),gc(sa,_,l,n,e,t,this)}}else{const u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let p=u,g=d;p<g;p++)sa.fromBufferAttribute(h,p),gc(sa,p,l,n,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function gc(r,e,t,i,n,a,s){const o=gs.distanceSqToPoint(r);if(o<t){const l=new L;gs.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:s})}}class Bg extends rt{constructor(e,t,i,n,a,s,o,l,c){super(e,t,i,n,a,s,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _s{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(n),t.push(a),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-s,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===s)return n/(a-1);const h=i[n],u=i[n+1]-h,d=(s-h)/u;return(n+d)/(a-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const a=this.getPoint(i),s=this.getPoint(n),o=t||(a.isVector2?new ye:new L);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new L,n=[],a=[],s=[],o=new L,l=new pe;for(let p=0;p<=e;p++){const g=p/e;n[p]=this.getTangentAt(g,new L)}a[0]=new L,s[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(n[p-1],n[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(lt(n[p-1].dot(n[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,g))}s[p].crossVectors(n[p],a[p])}if(t===!0){let p=Math.acos(lt(a[0].dot(a[e]),-1,1));p/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],p*g)),s[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function vs(){let r=0,e=0,t=0,i=0;function n(a,s,o,l){r=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){n(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,u){let d=(s-a)/c-(o-a)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+u)+(l-o)/u;d*=h,p*=h,n(s,o,d,p)},calc:function(a){const s=a*a,o=s*a;return r+e*a+t*s+i*o}}}const oa=new L,xs=new vs,ys=new vs,Ms=new vs;class _c extends _s{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new L){const i=t,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%a]:(oa.subVectors(n[0],n[1]).add(n[0]),c=oa);const u=n[o%a],d=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(oa.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=oa),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),xs.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),ys.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Ms.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(xs.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ys.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ms.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(xs.calc(l),ys.calc(l),Ms.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new L().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function vc(r,e,t,i,n){const a=(i-e)*.5,s=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*r+t}class zg extends _s{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,l=n[s===0?s:s-1],c=n[s],h=n[s>n.length-2?n.length-1:s+1],u=n[s>n.length-3?n.length-1:s+2];return i.set(vc(o,l.x,c.x,h.x,u.x),vc(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ye().fromArray(n))}return this}}const la=new L,ca=new L,Ss=new L,ha=new Wt;class kg extends mt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),n=Math.cos(gn*t),a=e.getIndex(),s=e.getAttribute("position"),o=a?a.count:s.count,l=[0,0,0],c=["a","b","c"],h=new Array(3),u={},d=[];for(let p=0;p<o;p+=3){a?(l[0]=a.getX(p),l[1]=a.getX(p+1),l[2]=a.getX(p+2)):(l[0]=p,l[1]=p+1,l[2]=p+2);const{a:g,b:_,c:m}=ha;if(g.fromBufferAttribute(s,l[0]),_.fromBufferAttribute(s,l[1]),m.fromBufferAttribute(s,l[2]),ha.getNormal(Ss),h[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[1]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,h[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let f=0;f<3;f++){const y=(f+1)%3,v=h[f],S=h[y],T=ha[c[f]],C=ha[c[y]],w=`${v}_${S}`,z=`${S}_${v}`;z in u&&u[z]?(Ss.dot(u[z].normal)<=n&&(d.push(T.x,T.y,T.z),d.push(C.x,C.y,C.z)),u[z]=null):w in u||(u[w]={index0:l[f],index1:l[y],normal:Ss.clone()})}}for(const p in u)if(u[p]){const{index0:g,index1:_}=u[p];la.fromBufferAttribute(s,g),ca.fromBufferAttribute(s,_),d.push(la.x,la.y,la.z),d.push(ca.x,ca.y,ca.z)}this.setAttribute("position",new st(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Es extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ui extends Es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class bs extends Xt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ts extends Xt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=br,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=xr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ua(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Hg(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Vg(r){function e(n,a){return r[n]-r[a]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function xc(r,e,t){const i=r.length,n=new r.constructor(i);for(let a=0,s=0;s!==i;++a){const o=t[a]*e;for(let l=0;l!==e;++l)n[s++]=r[o+l]}return n}function yc(r,e,t,i){let n=1,a=r[0];for(;a!==void 0&&a[i]===void 0;)a=r[n++];if(a===void 0)return;let s=a[i];if(s!==void 0)if(Array.isArray(s))do s=a[i],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=r[n++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[i],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=r[n++];while(a!==void 0);else do s=a[i],s!==void 0&&(e.push(a.time),t.push(s)),a=r[n++];while(a!==void 0)}class hr{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],a=t[i-1];i:{e:{let s;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<a)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(a=n,n=t[++i],e<n)break e}s=t.length;break t}if(!(e>=a)){const o=t[1];e<o&&(i=2,a=o);for(let l=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=a,a=t[--i-1],e>=a)break e}s=i,i=0;break t}break i}for(;i<s;){const o=i+s>>>1;e<t[o]?s=o:i=o+1}if(n=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,n)}return this.interpolate_(i,a,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n;for(let s=0;s!==n;++s)t[s]=i[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Gg extends hr{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xo,endingEnd:Xo}}intervalChanged_(e,t,i){const n=this.parameterPositions;let a=e-2,s=e+1,o=n[a],l=n[s];if(o===void 0)switch(this.getSettings_().endingStart){case jo:a=e,o=2*t-i;break;case qo:a=n.length-2,o=t+n[a]-n[a+1];break;default:a=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case jo:s=e,l=2*i-t;break;case qo:s=1,l=i+n[1]-n[0];break;default:s=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(i-t)/(n-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,v=(-1-p)*m+(1.5+p)*_+.5*g,S=p*m-p*_;for(let T=0;T!==o;++T)a[T]=f*s[h+T]+y*s[c+T]+v*s[l+T]+S*s[u+T];return a}}class Wg extends hr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[c+d]*u+s[l+d]*h;return a}}class Xg extends hr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class si{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ua(t,this.TimeBufferType),this.values=ua(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ua(e.times,Array),values:ua(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Xg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $n:t=this.InterpolantFactoryMethodDiscrete;break;case mn:t=this.InterpolantFactoryMethodLinear;break;case Ra:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $n;case this.InterpolantFactoryMethodLinear:return mn;case this.InterpolantFactoryMethodSmooth:return Ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let a=0,s=n-1;for(;a!==n&&i[a]<e;)++a;for(;s!==-1&&i[s]>t;)--s;if(++s,a!==0||s!==n){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=i.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,a=i.length;a===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let s=null;for(let o=0;o!==a;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(s!==null&&s>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,s),e=!1;break}s=l}if(n!==void 0&&Hg(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Ra,a=e.length-1;let s=1;for(let o=1;o<a;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,p=u+i;for(let g=0;g!==i;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(o!==s){e[s]=e[o];const u=o*i,d=s*i;for(let p=0;p!==i;++p)t[d+p]=t[u+p]}++s}}if(a>0){e[s]=e[a];for(let o=a*i,l=s*i,c=0;c!==i;++c)t[l+c]=t[o+c];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}si.prototype.TimeBufferType=Float32Array,si.prototype.ValueBufferType=Float32Array,si.prototype.DefaultInterpolation=mn;class Gn extends si{}Gn.prototype.ValueTypeName="bool",Gn.prototype.ValueBufferType=Array,Gn.prototype.DefaultInterpolation=$n,Gn.prototype.InterpolantFactoryMethodLinear=void 0,Gn.prototype.InterpolantFactoryMethodSmooth=void 0;class Mc extends si{}Mc.prototype.ValueTypeName="color";class nn extends si{}nn.prototype.ValueTypeName="number";class jg extends hr{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Nt.slerpFlat(a,0,s,c-o,s,c,l);return a}}class Oi extends si{InterpolantFactoryMethodLinear(e){return new jg(this.times,this.values,this.getValueSize(),e)}}Oi.prototype.ValueTypeName="quaternion",Oi.prototype.DefaultInterpolation=mn,Oi.prototype.InterpolantFactoryMethodSmooth=void 0;class Wn extends si{}Wn.prototype.ValueTypeName="string",Wn.prototype.ValueBufferType=Array,Wn.prototype.DefaultInterpolation=$n,Wn.prototype.InterpolantFactoryMethodLinear=void 0,Wn.prototype.InterpolantFactoryMethodSmooth=void 0;class rn extends si{}rn.prototype.ValueTypeName="vector";class Sc{constructor(e,t=-1,i,n=eu){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let s=0,o=i.length;s!==o;++s)t.push(Yg(i[s]).scale(n));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=i.length;a!==s;++a)t.push(si.toJSON(i[a]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const a=t.length,s=[];for(let o=0;o<a;o++){let l=[],c=[];l.push((o+a-1)%a,o,(o+1)%a),c.push(0,1,0);const h=Vg(l);l=xc(l,1,h),c=xc(c,1,h),!n&&l[0]===0&&(l.push(a),c.push(c[0])),s.push(new nn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,s)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(a);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const s=[];for(const o in n)s.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return s}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,p,g){if(d.length!==0){const _=[],m=[];yc(d,_,m,p),_.length!==0&&g.push(new h(u,_,m))}},n=[],a=e.name||"default",s=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let g=0;g<u[p].morphTargets.length;g++)d[u[p].morphTargets[g]]=-1;for(const g in d){const _=[],m=[];for(let f=0;f!==u[p].morphTargets.length;++f){const y=u[p];_.push(y.time),m.push(y.morphTarget===g?1:0)}n.push(new nn(".morphTargetInfluence["+g+"]",_,m))}l=d.length*s}else{const d=".bones["+t[h].name+"]";i(rn,d+".position",u,"pos",n),i(Oi,d+".quaternion",u,"rot",n),i(rn,d+".scale",u,"scl",n)}}return n.length===0?null:new this(a,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function qg(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return nn;case"vector":case"vector2":case"vector3":case"vector4":return rn;case"color":return Mc;case"quaternion":return Oi;case"bool":case"boolean":return Gn;case"string":return Wn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Yg(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=qg(r.type);if(r.times===void 0){const t=[],i=[];yc(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Xn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Kg{constructor(e,t,i){const n=this;let a=!1,s=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,a===!1&&n.onStart!==void 0&&n.onStart(h,s,o),a=!0},this.itemEnd=function(h){s++,n.onProgress!==void 0&&n.onProgress(h,s,o),s===o&&(a=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Zg=new Kg;class yi{constructor(e){this.manager=e!==void 0?e:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,a){i.load(e,n,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}yi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class Jg extends Error{constructor(e,t){super(e),this.response=t}}class As extends yi{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=Xn.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:i,onError:n});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:i,onError:n});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(s).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Mi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){y();function y(){u.read().then(({done:v,value:S})=>{if(v)f.close();else{_+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let C=0,w=h.length;C<w;C++){const z=h[C];z.onProgress&&z.onProgress(T)}f.enqueue(S),y()}})}}});return new Response(m)}else throw new Jg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Xn.add(e,c);const h=Mi[e];delete Mi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $g extends yi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Xn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=er("img");function l(){h(),Xn.add(e,this),t&&t(this),a.manager.itemEnd(e)}function c(u){h(),n&&n(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class ws extends yi{constructor(e){super(e)}load(e,t,i,n){const a=new rt,s=new $g(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,n),a}}class da extends Ze{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rs=new pe,Ec=new L,bc=new L;class Ls{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ec),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),Rs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qg extends Ls{constructor(){super(new Tt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=_n*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;(i!==t.fov||n!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=n,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Tc extends da{constructor(e,t,i=0,n=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.distance=i,this.angle=n,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Qg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Ac=new pe,ur=new L,Cs=new L;class e0 extends Ls{constructor(){super(new Tt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new qe(2,1,1,1),new qe(0,1,1,1),new qe(3,1,1,1),new qe(1,1,1,1),new qe(3,0,1,1),new qe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,a=e.distance||i.far;a!==i.far&&(i.far=a,i.updateProjectionMatrix()),ur.setFromMatrixPosition(e.matrixWorld),i.position.copy(ur),Cs.copy(i.position),Cs.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Cs),i.updateMatrixWorld(),n.makeTranslation(-ur.x,-ur.y,-ur.z),Ac.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ac)}}class Ps extends da{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new e0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class t0 extends Ls{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Is extends da{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ze.DEFAULT_UP),this.updateMatrix(),this.target=new Ze,this.shadow=new t0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wc extends da{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class pa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class i0 extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=Xn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){Xn.add(e,l),t&&t(l),a.manager.itemEnd(e)}).catch(function(l){n&&n(l),a.manager.itemError(e),a.manager.itemEnd(e)}),a.manager.itemStart(e)}}const Ns="\\[\\]\\.:\\/",n0=new RegExp("["+Ns+"]","g"),Ds="[^"+Ns+"]",r0="[^"+Ns.replace("\\.","")+"]",a0=/((?:WC+[\/:])*)/.source.replace("WC",Ds),s0=/(WCOD+)?/.source.replace("WCOD",r0),o0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ds),l0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ds),c0=new RegExp("^"+a0+s0+o0+l0+"$"),h0=["material","materials","bones","map"];class u0{constructor(e,t,i){const n=i||We.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,a=i.length;n!==a;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class We{constructor(e,t,i){this.path=t,this.parsedPath=i||We.parseTrackName(t),this.node=We.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new We.Composite(e,t,i):new We(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(n0,"")}static parseTrackName(e){const t=c0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const a=i.nodeName.substring(n+1);h0.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,a=i.length;n!==a;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let a=t.propertyIndex;if(e||(e=We.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const s=e[n];if(s===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}We.Composite=u0,We.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},We.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},We.prototype.GetterByBindingType=[We.prototype._getValue_direct,We.prototype._getValue_array,We.prototype._getValue_arrayElement,We.prototype._getValue_toArray],We.prototype.SetterByBindingTypeAndVersioning=[[We.prototype._setValue_direct,We.prototype._setValue_direct_setNeedsUpdate,We.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[We.prototype._setValue_array,We.prototype._setValue_array_setNeedsUpdate,We.prototype._setValue_array_setMatrixWorldNeedsUpdate],[We.prototype._setValue_arrayElement,We.prototype._setValue_arrayElement_setNeedsUpdate,We.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[We.prototype._setValue_fromArray,We.prototype._setValue_fromArray_setNeedsUpdate,We.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class d0{constructor(e,t,i=0,n=1/0){this.ray=new bn(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Us(e,this,i,t),i.sort(Rc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)Us(e[n],this,i,t);return i.sort(Rc),i}}function Rc(r,e){return r.distance-e.distance}function Us(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let a=0,s=n.length;a<s;a++)Us(n[a],e,t,!0)}}class Lc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cc=new L,fa=new L,Pc=new L;class p0 extends Ze{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new mt;n.setAttribute("position",new st([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new Hn({fog:!1,toneMapped:!1});this.lightPlane=new Vn(n,a),this.add(this.lightPlane),n=new mt,n.setAttribute("position",new st([0,0,0,0,0,1],3)),this.targetLine=new Vn(n,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Cc.setFromMatrixPosition(this.light.matrixWorld),fa.setFromMatrixPosition(this.light.target.matrixWorld),Pc.subVectors(fa,Cc),this.lightPlane.lookAt(fa),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(fa),this.targetLine.scale.z=Pc.length()}}class f0 extends fs{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new mt;n.setAttribute("position",new st(t,3)),n.setAttribute("color",new st(i,3));const a=new Hn({vertexColors:!0,toneMapped:!1});super(n,a),this.type="AxesHelper"}setColors(e,t,i){const n=new fe,a=this.geometry.attributes.color.array;return n.set(e),n.toArray(a,0),n.toArray(a,3),n.set(t),n.toArray(a,6),n.toArray(a,9),n.set(i),n.toArray(a,12),n.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:St}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=St);const Ic={type:"change"},Os={type:"start"},Nc={type:"end"},ma=new bn,Dc=new Di,m0=Math.cos(70*Vt.DEG2RAD);class g0 extends ji{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zt.ROTATE,MIDDLE:zt.DOLLY,RIGHT:zt.PAN},this.touches={ONE:cn.ROTATE,TWO:cn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",x),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",x),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Ic),i.update(),a=n.NONE},this.update=function(){const P=new L,ee=new Nt().setFromUnitVectors(e.up,new L(0,1,0)),q=ee.clone().invert(),Le=new L,Se=new Nt,ve=new L,xe=2*Math.PI;return function(R=null){const ae=i.object.position;P.copy(ae).sub(i.target),P.applyQuaternion(ee),o.setFromVector3(P),i.autoRotate&&a===n.NONE&&k(M(R)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let $=i.minAzimuthAngle,de=i.maxAzimuthAngle;isFinite($)&&isFinite(de)&&($<-Math.PI?$+=xe:$>Math.PI&&($-=xe),de<-Math.PI?de+=xe:de>Math.PI&&(de-=xe),$<=de?o.theta=Math.max($,Math.min(de,o.theta)):o.theta=o.theta>($+de)/2?Math.max($,o.theta):Math.min(de,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.zoomToCursor&&C||i.object.isOrthographicCamera?o.radius=K(o.radius):o.radius=K(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(q),ae.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let oe=!1;if(i.zoomToCursor&&C){let Y=null;if(i.object.isPerspectiveCamera){const me=P.length();Y=K(me*c);const be=me-Y;i.object.position.addScaledVector(S,be),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const me=new L(T.x,T.y,0);me.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),oe=!0;const be=new L(T.x,T.y,0);be.unproject(i.object),i.object.position.sub(be).add(me),i.object.updateMatrixWorld(),Y=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Y!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Y).add(i.object.position):(ma.origin.copy(i.object.position),ma.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ma.direction))<m0?e.lookAt(i.target):(Dc.setFromNormalAndCoplanarPoint(i.object.up,i.target),ma.intersectPlane(Dc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),oe=!0);return c=1,C=!1,oe||Le.distanceToSquared(i.object.position)>s||8*(1-Se.dot(i.object.quaternion))>s||ve.distanceToSquared(i.target)>0?(i.dispatchEvent(Ic),Le.copy(i.object.position),Se.copy(i.object.quaternion),ve.copy(i.target),oe=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",ze),i.domElement.removeEventListener("pointercancel",je),i.domElement.removeEventListener("wheel",A),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",je),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",x),i._domElementKeyEvents=null)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=n.NONE;const s=1e-6,o=new Lc,l=new Lc;let c=1;const h=new L,u=new ye,d=new ye,p=new ye,g=new ye,_=new ye,m=new ye,f=new ye,y=new ye,v=new ye,S=new L,T=new ye;let C=!1;const w=[],z={};function M(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function k(P){l.theta-=P}function J(P){l.phi-=P}const Z=function(){const P=new L;return function(ee,q){P.setFromMatrixColumn(q,0),P.multiplyScalar(-ee),h.add(P)}}(),I=function(){const P=new L;return function(ee,q){i.screenSpacePanning===!0?P.setFromMatrixColumn(q,1):(P.setFromMatrixColumn(q,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ee),h.add(P)}}(),G=function(){const P=new L;return function(ee,q){const Le=i.domElement;if(i.object.isPerspectiveCamera){const Se=i.object.position;P.copy(Se).sub(i.target);let ve=P.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),Z(2*ee*ve/Le.clientHeight,i.object.matrix),I(2*q*ve/Le.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Z(ee*(i.object.right-i.object.left)/i.object.zoom/Le.clientWidth,i.object.matrix),I(q*(i.object.top-i.object.bottom)/i.object.zoom/Le.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function j(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function W(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ne(P){if(!i.zoomToCursor)return;C=!0;const ee=i.domElement.getBoundingClientRect(),q=P.clientX-ee.left,Le=P.clientY-ee.top,Se=ee.width,ve=ee.height;T.x=q/Se*2-1,T.y=-(Le/ve)*2+1,S.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function X(P){u.set(P.clientX,P.clientY)}function N(P){ne(P),f.set(P.clientX,P.clientY)}function B(P){g.set(P.clientX,P.clientY)}function te(P){d.set(P.clientX,P.clientY),p.subVectors(d,u).multiplyScalar(i.rotateSpeed);const ee=i.domElement;k(2*Math.PI*p.x/ee.clientHeight),J(2*Math.PI*p.y/ee.clientHeight),u.copy(d),i.update()}function he(P){y.set(P.clientX,P.clientY),v.subVectors(y,f),v.y>0?j(b()):v.y<0&&W(b()),f.copy(y),i.update()}function _e(P){_.set(P.clientX,P.clientY),m.subVectors(_,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(_),i.update()}function Ee(P){ne(P),P.deltaY<0?W(b()):P.deltaY>0&&j(b()),i.update()}function Ae(P){let ee=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?J(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?J(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),ee=!0;break}ee&&(P.preventDefault(),i.update())}function Me(){if(w.length===1)u.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),ee=.5*(w[0].pageY+w[1].pageY);u.set(P,ee)}}function Xe(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const P=.5*(w[0].pageX+w[1].pageX),ee=.5*(w[0].pageY+w[1].pageY);g.set(P,ee)}}function Mt(){const P=w[0].pageX-w[1].pageX,ee=w[0].pageY-w[1].pageY,q=Math.sqrt(P*P+ee*ee);f.set(0,q)}function Ue(){i.enableZoom&&Mt(),i.enablePan&&Xe()}function U(){i.enableZoom&&Mt(),i.enableRotate&&Me()}function ut(P){if(w.length==1)d.set(P.pageX,P.pageY);else{const q=ue(P),Le=.5*(P.pageX+q.x),Se=.5*(P.pageY+q.y);d.set(Le,Se)}p.subVectors(d,u).multiplyScalar(i.rotateSpeed);const ee=i.domElement;k(2*Math.PI*p.x/ee.clientHeight),J(2*Math.PI*p.y/ee.clientHeight),u.copy(d)}function Te(P){if(w.length===1)_.set(P.pageX,P.pageY);else{const ee=ue(P),q=.5*(P.pageX+ee.x),Le=.5*(P.pageY+ee.y);_.set(q,Le)}m.subVectors(_,g).multiplyScalar(i.panSpeed),G(m.x,m.y),g.copy(_)}function Ie(P){const ee=ue(P),q=P.pageX-ee.x,Le=P.pageY-ee.y,Se=Math.sqrt(q*q+Le*Le);y.set(0,Se),v.set(0,Math.pow(y.y/f.y,i.zoomSpeed)),j(v.y),f.copy(y)}function Re(P){i.enableZoom&&Ie(P),i.enablePan&&Te(P)}function et(P){i.enableZoom&&Ie(P),i.enableRotate&&ut(P)}function ze(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",Ne),i.domElement.addEventListener("pointerup",je)),ie(P),P.pointerType==="touch"?F(P):dt(P))}function Ne(P){i.enabled!==!1&&(P.pointerType==="touch"?re(P):gt(P))}function je(P){ge(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",Ne),i.domElement.removeEventListener("pointerup",je)),i.dispatchEvent(Nc),a=n.NONE}function dt(P){let ee;switch(P.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case zt.DOLLY:if(i.enableZoom===!1)return;N(P),a=n.DOLLY;break;case zt.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;B(P),a=n.PAN}else{if(i.enableRotate===!1)return;X(P),a=n.ROTATE}break;case zt.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;X(P),a=n.ROTATE}else{if(i.enablePan===!1)return;B(P),a=n.PAN}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Os)}function gt(P){switch(a){case n.ROTATE:if(i.enableRotate===!1)return;te(P);break;case n.DOLLY:if(i.enableZoom===!1)return;he(P);break;case n.PAN:if(i.enablePan===!1)return;_e(P);break}}function A(P){i.enabled===!1||i.enableZoom===!1||a!==n.NONE||(P.preventDefault(),i.dispatchEvent(Os),Ee(P),i.dispatchEvent(Nc))}function x(P){i.enabled===!1||i.enablePan===!1||Ae(P)}function F(P){switch(se(P),w.length){case 1:switch(i.touches.ONE){case cn.ROTATE:if(i.enableRotate===!1)return;Me(),a=n.TOUCH_ROTATE;break;case cn.PAN:if(i.enablePan===!1)return;Xe(),a=n.TOUCH_PAN;break;default:a=n.NONE}break;case 2:switch(i.touches.TWO){case cn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),a=n.TOUCH_DOLLY_PAN;break;case cn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),a=n.TOUCH_DOLLY_ROTATE;break;default:a=n.NONE}break;default:a=n.NONE}a!==n.NONE&&i.dispatchEvent(Os)}function re(P){switch(se(P),a){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;ut(P),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Te(P),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Re(P),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;et(P),i.update();break;default:a=n.NONE}}function Q(P){i.enabled!==!1&&P.preventDefault()}function ie(P){w.push(P)}function ge(P){delete z[P.pointerId];for(let ee=0;ee<w.length;ee++)if(w[ee].pointerId==P.pointerId){w.splice(ee,1);return}}function se(P){let ee=z[P.pointerId];ee===void 0&&(ee=new ye,z[P.pointerId]=ee),ee.set(P.pageX,P.pageY)}function ue(P){const ee=P.pointerId===w[0].pointerId?w[1]:w[0];return z[ee.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",ze),i.domElement.addEventListener("pointercancel",je),i.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}class _0 extends Ze{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new ye(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const jn=new L,Uc=new pe,Oc=new pe,Fc=new L,Bc=new L;class v0{constructor(e={}){const t=this;let i,n,a,s;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:n}},this.render=function(p,g){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),Uc.copy(g.matrixWorldInverse),Oc.multiplyMatrices(g.projectionMatrix,Uc),c(p,p,g),d(p)},this.setSize=function(p,g){i=p,n=g,a=i/2,s=n/2,l.style.width=p+"px",l.style.height=g+"px"};function c(p,g,_){if(p.isCSS2DObject){jn.setFromMatrixPosition(p.matrixWorld),jn.applyMatrix4(Oc);const m=p.visible===!0&&jn.z>=-1&&jn.z<=1&&p.layers.test(_.layers)===!0;if(p.element.style.display=m===!0?"":"none",m===!0){p.onBeforeRender(t,g,_);const y=p.element;y.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(jn.x*a+a)+"px,"+(-jn.y*s+s)+"px)",y.parentNode!==l&&l.appendChild(y),p.onAfterRender(t,g,_)}const f={distanceToCameraSquared:h(_,p)};o.objects.set(p,f)}for(let m=0,f=p.children.length;m<f;m++)c(p.children[m],g,_)}function h(p,g){return Fc.setFromMatrixPosition(p.matrixWorld),Bc.setFromMatrixPosition(g.matrixWorld),Fc.distanceToSquared(Bc)}function u(p){const g=[];return p.traverse(function(_){_.isCSS2DObject&&g.push(_)}),g}function d(p){const g=u(p).sort(function(m,f){if(m.renderOrder!==f.renderOrder)return f.renderOrder-m.renderOrder;const y=o.objects.get(m).distanceToCameraSquared,v=o.objects.get(f).distanceToCameraSquared;return y-v}),_=g.length;for(let m=0,f=g.length;m<f;m++)g[m].element.style.zIndex=_-m}}}const zc=[{pos:[-6.5265020662486615,5.561887116814152,-24.35093093607053],target:[-1.671918218384913,.7989822448136578,-1.1162519645506717],tagPos:[-1.7064614730614829,1.9491881773912834,-1.0056745697981204],name:"dfmzt"},{name:"jmds",target:[1.1345268638004558,1.0588530157226956,2.6820952273947887],pos:[-12.921674163610467,3.955564762191462,.6727245581931556],tagPos:[1.2567487116394047,2.1110068923343612,2.5783457693950766]},{name:"shzx",target:[.8250982361552479,1.7058434189853742,4.069158942448743],pos:[-2.9972872750858506,7.121913025914003,25.74014441826561],tagPos:[.6832944783307784,3.0191369052804555,3.723607468324361]},{name:"hqjrzx",target:[2.161756709998042,1.4816762375534889,3.436942887674435],pos:[13.812576837294761,5.914658486760319,22.771931159126034],tagPos:[2.2862471610734154,2.783287751022014,3.175225728282536]},{name:"aerial",target:[0,2,0],pos:[-11.962042086753852,3.626339455056636,-29.039350500377655]}],x0=[[11.048172747952513,-.017889036157052438,6.675860755674547,6.8041699608876005,-.017889036157044902,4.75185777478234,3.1554850195794666,-.017889036157037408,2.991885287148039,1.8115828431425358,-.017889036157044347,2.249318030676659,.581339929535787,-.017889036157044194,1.569481812382641],[4.815577579916115,-.01788903615704611,10.183965431439983,4.507477686953558,-.017889036157046033,9.857612564198941,3.0202190126774915,-.017889036157045617,7.973965284009267,2.645375817220392,-.0178890361570455,7.451120143905071,1.9853137932956206,-.017889036157031142,6.776802299328587,1.825323496938143,-.01788903615703087,5.574593705765212,1.676837850715965,-.01788903615703063,4.470796090552511,1.6637136341770622,-.017889036157044756,4.08808036350831,1.5619773400721562,-.017889036157044624,3.509018789326436,1.740945612971372,-.017889036157030143,2.2940576766230603],[11.120232314775574,-.017889036157044978,5.085904490782937,9.488436015838015,-.017889036157045,5.1952486725066525,9.200300979676104,-.017889036157045124,5.762511495192548,6.627962382140777,-.01788903615704541,7.041735178344978,6.370972707958848,-.01788903615704538,6.9195955164877185,5.660653109347686,-.017889036157059147,4.904881692376673,5.570374431309609,-.017889036157044784,4.227263837605279,4.98897008674528,-.017889036157044687,3.7934198681018905,5.150251653744043,-.01788903615704461,3.434577105734075,4.342792855167759,-.017889036157044166,1.4292911048377164,3.8951025973156645,-.017889036157043868,.09998163904628218,3.4740540850244623,-.017889036157043577,-1.207399904742855,3.234278477086318,-.017889036157043535,-1.4047509004998737,2.784946903417708,-.01788903615704318,-3.003550127789781],[10.521825475882702,-.017889036157042924,-4.145514474995351,7.940729266884967,-.017889036157042987,-3.8891974297111913,5.5727372886941975,-.017889036157028818,-3.689051418151063,4.44575969174323,-.017889036157043056,-3.5562409463146536,3.7920809124457793,-.017889036157043056,-3.5749055846253732,.7521409066644437,-.01788903615702893,-3.1986075604115918,-1.5129224078102619,-.01788903615704327,-2.584580685771185,-2.8753281892536706,-.01788903615705758,-2.157520758546701,-3.378447440156044,-.017889036157043424,-1.9215391807371378,-3.856331462093338,-.017889036157057704,-1.6066902177406337,-4.050187051538656,-.017889036157043535,-1.4067322554219917,-4.5534423791304794,-.0178890361570579,-.7119952746496124],[2.2193946540618,-.01788903615704726,-.6369541581427849,1.0174920793077795,-.01788903615704742,.09958475333275665,.23750098277450266,-.017889036157047115,-1.265792585901564,1.6245158691823567,-.017889036157043403,-2.0098784343803158,2.1688676782942875,-.01788903615704368,-.7411028102594822],[-4.47936903972154,-.017889036157044118,1.2193456752083702,-4.213198139659824,-.017889036157040537,1.0888520563281638,-4.225462314457646,-.01788903615704402,.795251507457226,-4.303805096339177,-.017889036157040364,.32794347482109304,-4.27939734068001,-.017889036157043826,-.09832863566224355,-4.184964913049262,-.017889036157047296,-.4635129986918352,-4.03505443263367,-.017889036157043653,-.8673463568483297,-3.9158927541831603,-.01788903615704006,-1.0629782597355766,-3.681410982274545,-.017889036157043556,-1.305987138575993,-3.208837261865302,-.017889036157043507,-1.5436483677427586],[-3.302191404691984,-.017889036157036325,-1.861401124399609,-3.2146643331422635,-.017889036157043514,-1.507948541366654,-2.189885328406365,-.01788903615705087,-.36394463539090866],[-4.145596036589234,-.017889036157043743,-.4557157263293043,-2.6962073746369497,-.017889036157040093,-.9087939227085013],[-2.187916487652587,-.017889036157043764,-.3698924550637277,-4.298838987946748,-.017889036157043917,.32579639584370207],[11.048172747952513,-.017889036157052438,6.675860755674547,6.8041699608876005,-.017889036157044902,4.75185777478234,3.1554850195794666,-.017889036157037408,2.991885287148039,1.8115828431425358,-.017889036157044347,2.249318030676659,.581339929535787,-.017889036157044194,1.569481812382641],[4.815577579916115,-.01788903615704611,10.183965431439983,4.507477686953558,-.017889036157046033,9.857612564198941,3.0202190126774915,-.017889036157045617,7.973965284009267,2.645375817220392,-.0178890361570455,7.451120143905071,1.9853137932956206,-.017889036157031142,6.776802299328587,1.825323496938143,-.01788903615703087,5.574593705765212,1.676837850715965,-.01788903615703063,4.470796090552511,1.6637136341770622,-.017889036157044756,4.08808036350831,1.5619773400721562,-.017889036157044624,3.509018789326436,1.740945612971372,-.017889036157030143,2.2940576766230603],[11.120232314775574,-.017889036157044978,5.085904490782937,9.488436015838015,-.017889036157045,5.1952486725066525,9.200300979676104,-.017889036157045124,5.762511495192548,6.627962382140777,-.01788903615704541,7.041735178344978,6.370972707958848,-.01788903615704538,6.9195955164877185,5.660653109347686,-.017889036157059147,4.904881692376673,5.570374431309609,-.017889036157044784,4.227263837605279,4.98897008674528,-.017889036157044687,3.7934198681018905,5.150251653744043,-.01788903615704461,3.434577105734075,4.342792855167759,-.017889036157044166,1.4292911048377164,3.8951025973156645,-.017889036157043868,.09998163904628218,3.4740540850244623,-.017889036157043577,-1.207399904742855,3.234278477086318,-.017889036157043535,-1.4047509004998737,2.784946903417708,-.01788903615704318,-3.003550127789781],[10.521825475882702,-.017889036157042924,-4.145514474995351,7.940729266884967,-.017889036157042987,-3.8891974297111913,5.5727372886941975,-.017889036157028818,-3.689051418151063,4.44575969174323,-.017889036157043056,-3.5562409463146536,3.7920809124457793,-.017889036157043056,-3.5749055846253732,.7521409066644437,-.01788903615702893,-3.1986075604115918,-1.5129224078102619,-.01788903615704327,-2.584580685771185,-2.8753281892536706,-.01788903615705758,-2.157520758546701,-3.378447440156044,-.017889036157043424,-1.9215391807371378,-3.856331462093338,-.017889036157057704,-1.6066902177406337,-4.050187051538656,-.017889036157043535,-1.4067322554219917,-4.5534423791304794,-.0178890361570579,-.7119952746496124],[2.2193946540618,-.01788903615704726,-.6369541581427849,1.0174920793077795,-.01788903615704742,.09958475333275665,.23750098277450266,-.017889036157047115,-1.265792585901564,1.6245158691823567,-.017889036157043403,-2.0098784343803158,2.1688676782942875,-.01788903615704368,-.7411028102594822],[-4.47936903972154,-.017889036157044118,1.2193456752083702,-4.213198139659824,-.017889036157040537,1.0888520563281638,-4.225462314457646,-.01788903615704402,.795251507457226,-4.303805096339177,-.017889036157040364,.32794347482109304,-4.27939734068001,-.017889036157043826,-.09832863566224355,-4.184964913049262,-.017889036157047296,-.4635129986918352,-4.03505443263367,-.017889036157043653,-.8673463568483297,-3.9158927541831603,-.01788903615704006,-1.0629782597355766,-3.681410982274545,-.017889036157043556,-1.305987138575993,-3.208837261865302,-.017889036157043507,-1.5436483677427586],[-3.302191404691984,-.017889036157036325,-1.861401124399609,-3.2146643331422635,-.017889036157043514,-1.507948541366654,-2.189885328406365,-.01788903615705087,-.36394463539090866],[-4.145596036589234,-.017889036157043743,-.4557157263293043,-2.6962073746369497,-.017889036157040093,-.9087939227085013],[-2.187916487652587,-.017889036157043764,-.3698924550637277,-4.298838987946748,-.017889036157043917,.32579639584370207]];class y0{constructor(){vt(this,"animations",[])}setFly(e){var t=e.points.slice(e.index,e.index+e.num),i=new _c(t),n=i.getSpacedPoints(e.spaced),a=new mt;a.setFromPoints(n);for(var s=[],o=0;o<n.length;o++)s.push(o/n.length);var l=new yt(new Float32Array(s),1);a.attributes.percent=l;for(var c=[],o=0;o<n.length;o++){var h=e.starColor,u=e.endColor,d=h.lerp(u,o/n.length);c.push(d.r,d.g,d.b)}a.attributes.color=new yt(new Float32Array(c),3);var p=new ms({size:e.size,vertexColors:!0,transparent:!0,depthTest:!0,opacity:.6}),g=new mc(a,p);p.onBeforeCompile=function(f){f.vertexShader=f.vertexShader.replace("void main() {",["attribute float percent;","void main() {"].join(`
`)),f.vertexShader=f.vertexShader.replace("gl_PointSize = size;",["gl_PointSize = percent * size;"].join(`
`)),f.fragmentShader=f.fragmentShader.replace("#include <output_fragment>",`
            diffuseColor.a = 1.0;
            #endif
            // https://github.com/mrdoob/three.js/pull/22425
            #ifdef USE_TRANSMISSION
            diffuseColor.a *= transmissionAlpha + 0.1;
            #endif
            // \u8BBE\u7F6E\u900F\u660E\u5EA6\u53D8\u5316
            float r = distance(gl_PointCoord, vec2(0.5, 0.5));
            // diffuseColor.a = diffuseColor.a*(1.0 - r/0.5);//\u900F\u660E\u5EA6\u7EBF\u6027\u53D8\u5316
            diffuseColor.a = diffuseColor.a*pow( 1.0 - r/0.5, 6.0 );//\u900F\u660E\u5EA6\u975E\u7EBF\u6027\u53D8\u5316  \u53C2\u65702\u8D8A\u5927\uFF0Cgl_PointSize\u8981\u66F4\u5927\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8BBE\u7F6E\u7740\u8272\u5668\u4EE3\u7801\uFF0C\u53EF\u4EE5\u8BBE\u7F6E\u6750\u8D28size\u5C5E\u6027
            gl_FragColor = vec4( outgoingLight, diffuseColor.a );
    
            `)};var _=e.points.length-e.num;function m(){e.index>_&&(e.index=0),e.index+=1,t=e.points.slice(e.index,e.index+e.num);var f=new _c(t),y=f.getSpacedPoints(e.spaced);a.setFromPoints(y)}return this.animations.push(m),g}upDate(){this.animations.forEach(e=>{try{e()}catch(t){console.log(t)}})}}var qn=Object.freeze({Linear:Object.freeze({None:function(r){return r},In:function(r){return r},Out:function(r){return r},InOut:function(r){return r}}),Quadratic:Object.freeze({In:function(r){return r*r},Out:function(r){return r*(2-r)},InOut:function(r){return(r*=2)<1?.5*r*r:-.5*(--r*(r-2)-1)}}),Cubic:Object.freeze({In:function(r){return r*r*r},Out:function(r){return--r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r:.5*((r-=2)*r*r+2)}}),Quartic:Object.freeze({In:function(r){return r*r*r*r},Out:function(r){return 1- --r*r*r*r},InOut:function(r){return(r*=2)<1?.5*r*r*r*r:-.5*((r-=2)*r*r*r-2)}}),Quintic:Object.freeze({In:function(r){return r*r*r*r*r},Out:function(r){return--r*r*r*r*r+1},InOut:function(r){return(r*=2)<1?.5*r*r*r*r*r:.5*((r-=2)*r*r*r*r+2)}}),Sinusoidal:Object.freeze({In:function(r){return 1-Math.sin((1-r)*Math.PI/2)},Out:function(r){return Math.sin(r*Math.PI/2)},InOut:function(r){return .5*(1-Math.sin(Math.PI*(.5-r)))}}),Exponential:Object.freeze({In:function(r){return r===0?0:Math.pow(1024,r-1)},Out:function(r){return r===1?1:1-Math.pow(2,-10*r)},InOut:function(r){return r===0?0:r===1?1:(r*=2)<1?.5*Math.pow(1024,r-1):.5*(-Math.pow(2,-10*(r-1))+2)}}),Circular:Object.freeze({In:function(r){return 1-Math.sqrt(1-r*r)},Out:function(r){return Math.sqrt(1- --r*r)},InOut:function(r){return(r*=2)<1?-.5*(Math.sqrt(1-r*r)-1):.5*(Math.sqrt(1-(r-=2)*r)+1)}}),Elastic:Object.freeze({In:function(r){return r===0?0:r===1?1:-Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI)},Out:function(r){return r===0?0:r===1?1:Math.pow(2,-10*r)*Math.sin((r-.1)*5*Math.PI)+1},InOut:function(r){return r===0?0:r===1?1:(r*=2,r<1?-.5*Math.pow(2,10*(r-1))*Math.sin((r-1.1)*5*Math.PI):.5*Math.pow(2,-10*(r-1))*Math.sin((r-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(r){var e=1.70158;return r===1?1:r*r*((e+1)*r-e)},Out:function(r){var e=1.70158;return r===0?0:--r*r*((e+1)*r+e)+1},InOut:function(r){var e=2.5949095;return(r*=2)<1?.5*(r*r*((e+1)*r-e)):.5*((r-=2)*r*((e+1)*r+e)+2)}}),Bounce:Object.freeze({In:function(r){return 1-qn.Bounce.Out(1-r)},Out:function(r){return r<1/2.75?7.5625*r*r:r<2/2.75?7.5625*(r-=1.5/2.75)*r+.75:r<2.5/2.75?7.5625*(r-=2.25/2.75)*r+.9375:7.5625*(r-=2.625/2.75)*r+.984375},InOut:function(r){return r<.5?qn.Bounce.In(r*2)*.5:qn.Bounce.Out(r*2-1)*.5+.5}}),generatePow:function(r){return r===void 0&&(r=4),r=r<Number.EPSILON?Number.EPSILON:r,r=r>1e4?1e4:r,{In:function(e){return Math.pow(e,r)},Out:function(e){return 1-Math.pow(1-e,r)},InOut:function(e){return e<.5?Math.pow(e*2,r)/2:(1-Math.pow(2-e*2,r))/2+.5}}}}),Yn=function(){return performance.now()},kc=function(){function r(){this._tweens={},this._tweensAddedDuringUpdate={}}return r.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},r.prototype.removeAll=function(){this._tweens={}},r.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},r.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},r.prototype.update=function(e,t){e===void 0&&(e=Yn()),t===void 0&&(t=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var n=0;n<i.length;n++){var a=this._tweens[i[n]],s=!t;a&&a.update(e,s)===!1&&!t&&delete this._tweens[i[n]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},r}(),an={Linear:function(r,e){var t=r.length-1,i=t*e,n=Math.floor(i),a=an.Utils.Linear;return e<0?a(r[0],r[1],i):e>1?a(r[t],r[t-1],t-i):a(r[n],r[n+1>t?t:n+1],i-n)},Bezier:function(r,e){for(var t=0,i=r.length-1,n=Math.pow,a=an.Utils.Bernstein,s=0;s<=i;s++)t+=n(1-e,i-s)*n(e,s)*r[s]*a(i,s);return t},CatmullRom:function(r,e){var t=r.length-1,i=t*e,n=Math.floor(i),a=an.Utils.CatmullRom;return r[0]===r[t]?(e<0&&(n=Math.floor(i=t*(1+e))),a(r[(n-1+t)%t],r[n],r[(n+1)%t],r[(n+2)%t],i-n)):e<0?r[0]-(a(r[0],r[0],r[1],r[1],-i)-r[0]):e>1?r[t]-(a(r[t],r[t],r[t-1],r[t-1],i-t)-r[t]):a(r[n?n-1:0],r[n],r[t<n+1?t:n+1],r[t<n+2?t:n+2],i-n)},Utils:{Linear:function(r,e,t){return(e-r)*t+r},Bernstein:function(r,e){var t=an.Utils.Factorial;return t(r)/t(e)/t(r-e)},Factorial:function(){var r=[1];return function(e){var t=1;if(r[e])return r[e];for(var i=e;i>1;i--)t*=i;return r[e]=t,t}}(),CatmullRom:function(r,e,t,i,n){var a=(t-r)*.5,s=(i-e)*.5,o=n*n,l=n*o;return(2*e-2*t+a+s)*l+(-3*e+3*t-2*a-s)*o+a*n+e}}},Fs=function(){function r(){}return r.nextId=function(){return r._nextId++},r._nextId=0,r}(),Bs=new kc,M0=function(){function r(e,t){t===void 0&&(t=Bs),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=qn.Linear.None,this._interpolationFunction=an.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=Fs.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return r.prototype.getId=function(){return this._id},r.prototype.isPlaying=function(){return this._isPlaying},r.prototype.isPaused=function(){return this._isPaused},r.prototype.getDuration=function(){return this._duration},r.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t<0?0:t,this},r.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},r.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},r.prototype.start=function(e,t){if(e===void 0&&(e=Yn()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var n={};for(var a in this._valuesEnd)n[a]=this._valuesEnd[a];this._valuesEnd=n}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},r.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},r.prototype._setupProperties=function(e,t,i,n,a){for(var s in i){var o=e[s],l=Array.isArray(o),c=l?"array":typeof o,h=!l&&Array.isArray(i[s]);if(!(c==="undefined"||c==="function")){if(h){var u=i[s];if(u.length===0)continue;for(var d=[o],p=0,g=u.length;p<g;p+=1){var _=this._handleRelativeValue(o,u[p]);if(isNaN(_)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}d.push(_)}h&&(i[s]=d)}if((c==="object"||l)&&o&&!h){t[s]=l?[]:{};var m=o;for(var f in m)t[s][f]=m[f];n[s]=l?[]:{};var u=i[s];if(!this._isDynamic){var y={};for(var f in u)y[f]=u[f];i[s]=u=y}this._setupProperties(m,t[s],u,n[s],a)}else(typeof t[s]>"u"||a)&&(t[s]=o),l||(t[s]*=1),h?n[s]=i[s].slice().reverse():n[s]=t[s]||0}}},r.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},r.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},r.prototype.pause=function(e){return e===void 0&&(e=Yn()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},r.prototype.resume=function(e){return e===void 0&&(e=Yn()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},r.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},r.prototype.group=function(e){return e===void 0&&(e=Bs),this._group=e,this},r.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},r.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},r.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},r.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},r.prototype.easing=function(e){return e===void 0&&(e=qn.Linear.None),this._easingFunction=e,this},r.prototype.interpolation=function(e){return e===void 0&&(e=an.Linear),this._interpolationFunction=e,this},r.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},r.prototype.onStart=function(e){return this._onStartCallback=e,this},r.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},r.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},r.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},r.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},r.prototype.onStop=function(e){return this._onStopCallback=e,this},r.prototype.update=function(e,t){var i=this,n;if(e===void 0&&(e=Yn()),t===void 0&&(t=!0),this._isPaused)return!0;var a,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var o=e-this._startTime,l=this._duration+((n=this._repeatDelayTime)!==null&&n!==void 0?n:this._delayTime),c=this._duration+this._repeat*l,h=function(){if(i._duration===0||o>c)return 1;var m=Math.trunc(o/l),f=o-m*l,y=Math.min(f/i._duration,1);return y===0&&o===i._duration?1:y},u=h(),d=this._easingFunction(u);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,d),this._onUpdateCallback&&this._onUpdateCallback(this._object,u),this._duration===0||o>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((o-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(a in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[a]=="string"&&(this._valuesStartRepeat[a]=this._valuesStartRepeat[a]+parseFloat(this._valuesEnd[a])),this._yoyo&&this._swapEndStartRepeatValues(a),this._valuesStart[a]=this._valuesStartRepeat[a];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,_=this._chainedTweens.length;g<_;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},r.prototype._updateProperties=function(e,t,i,n){for(var a in i)if(t[a]!==void 0){var s=t[a]||0,o=i[a],l=Array.isArray(e[a]),c=Array.isArray(o),h=!l&&c;h?e[a]=this._interpolationFunction(o,n):typeof o=="object"&&o?this._updateProperties(e[a],s,o,n):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(e[a]=s+(o-s)*n))}},r.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},r.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},r}(),S0="23.1.3",E0=Fs.nextId,oi=Bs,b0=oi.getAll.bind(oi),T0=oi.removeAll.bind(oi),A0=oi.add.bind(oi),w0=oi.remove.bind(oi),R0=oi.update.bind(oi),Hc={Easing:qn,Group:kc,Interpolation:an,now:Yn,Sequence:Fs,nextId:E0,Tween:M0,VERSION:S0,getAll:b0,removeAll:T0,add:A0,remove:w0,update:R0};const L0=class{constructor(r,e){vt(this,"scene",new $l);vt(this,"scene3D",new $l);vt(this,"camera");vt(this,"renderer");vt(this,"controls");vt(this,"width");vt(this,"height");vt(this,"dom");vt(this,"defaultInfo");vt(this,"light");vt(this,"_Fly",new y0);vt(this,"controlsStartPos",new L);vt(this,"controlsMoveFlag",!1);vt(this,"renderCss2D");vt(this,"css2dDom");vt(this,"_TWEEN",Hc);if(this.dom=r,this.css2dDom=e,this.defaultInfo=zc.find(t=>t.name==="aerial"),this.dom){this.width=this.dom.offsetWidth,this.height=this.dom.offsetHeight,this.createScene(),this.createCamera(),this.createRenderer(),this.createControls(),this.createLight();const t=new f0(100);this.scene.add(t)}}createScene(){const r=document.createElement("canvas"),e=r.getContext("2d");if(e){r.width=this.width,r.height=this.height;const t=e.createRadialGradient(this.width/2,this.height,0,this.width/2,this.height/2,Math.max(this.width,this.height));t.addColorStop(0,"#0b171f"),t.addColorStop(.6,"#000000"),e.fillStyle=t,e.fillRect(0,0,r.width,r.height),this.scene.background=new Bg(r),this.scene.fog=new cs(0,0,200)}}createCamera(){const r=new L().fromArray(this.defaultInfo.pos);this.camera=new Tt(12,this.width/this.height,1,2e4),this.camera.position.copy(r),this.scene.add(this.camera)}createRenderer(){this.renderer=new Jl({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.needsUpdate=!0,this.renderCss2D=new v0({element:this.css2dDom}),this.renderCss2D.setSize(this.width,this.height),this.dom.appendChild(this.renderer.domElement)}createControls(){this.controls=new g0(this.camera,this.renderer.domElement),this.controls.target.set(...this.defaultInfo.target),this.controls.addEventListener("start",()=>{this.controlsStartPos.copy(this.camera.position)}),this.controls.addEventListener("end",()=>{this.controlsMoveFlag=this.controlsStartPos.distanceToSquared(this.camera.position)===0}),this.controls.addEventListener("change",()=>{console.log(this.camera.position),this.light.position.copy(this.camera.position)})}createLight(){const r=new wc(16777215,1);this.scene.add(r);const e=new Is(16777215,3),t=new L().fromArray(this.defaultInfo.pos);e.position.copy(t),e.castShadow=!0,e.shadow.needsUpdate=!0;const i=1e3;e.shadow.camera.left=-i,e.shadow.camera.right=i,e.shadow.camera.top=i,e.shadow.camera.bottom=-i,e.shadow.mapSize.x=1024*1e3,e.shadow.mapSize.y=1024*1e3;const n=new p0(e);this.scene.add(n),this.light=e,this.scene.add(e)}ray(r,e){let t=new ye;var i=new d0;window.addEventListener("click",n=>{t.x=n.clientX/document.body.offsetWidth*2-1,t.y=-(n.clientY/document.body.offsetHeight)*2+1,i.setFromCamera(t,this.camera);const a=i.intersectObjects(r);this.controlsMoveFlag&&e&&e(a)})}render(){this.controls&&this.controls.update(),this.renderer.render(this.scene,this.camera),this.renderCss2D.render(this.scene,this.camera),this._Fly&&this._Fly.upDate(),this._TWEEN&&this._TWEEN.update()}animate(){this.render(),requestAnimationFrame(this.animate.bind(this))}getBoxInfo(r){const e=new ni;e.expandByObject(r);const t=new L,i=new L;return e.getCenter(i),e.getSize(t),{size:t,center:i}}toSceneCenter(r){const{center:e,size:t}=this.getBoxInfo(r);r.position.copy(e.negate().setY(0))}handleCameraPos(r){const e=new L().fromArray(r),t=this.camera.position.distanceTo(e);t!==0&&new this._TWEEN.Tween(this.camera.position).to(e,Math.sqrt(t)*400).start().onComplete(()=>{})}};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Vc=function(r){return URL.createObjectURL(new Blob([r],{type:"text/javascript"}))};try{URL.revokeObjectURL(Vc(""))}catch{Vc=function(r){return"data:application/javascript;charset=UTF-8,"+encodeURI(r)}}var qt=Uint8Array,Fi=Uint16Array,zs=Uint32Array,Gc=new qt([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wc=new qt([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),C0=new qt([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xc=function(r,e){for(var t=new Fi(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new zs(t[30]),i=1;i<30;++i)for(var a=t[i];a<t[i+1];++a)n[a]=a-t[i]<<5|i;return[t,n]},jc=Xc(Gc,2),qc=jc[0],P0=jc[1];qc[28]=258,P0[258]=28;for(var I0=Xc(Wc,0),N0=I0[0],ks=new Fi(32768),Qe=0;Qe<32768;++Qe){var Bi=(Qe&43690)>>>1|(Qe&21845)<<1;Bi=(Bi&52428)>>>2|(Bi&13107)<<2,Bi=(Bi&61680)>>>4|(Bi&3855)<<4,ks[Qe]=((Bi&65280)>>>8|(Bi&255)<<8)>>>1}for(var dr=function(r,e,t){for(var i=r.length,n=0,a=new Fi(e);n<i;++n)++a[r[n]-1];var s=new Fi(e);for(n=0;n<e;++n)s[n]=s[n-1]+a[n-1]<<1;var o;if(t){o=new Fi(1<<e);var l=15-e;for(n=0;n<i;++n)if(r[n])for(var c=n<<4|r[n],h=e-r[n],u=s[r[n]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[ks[u]>>>l]=c}else for(o=new Fi(i),n=0;n<i;++n)r[n]&&(o[n]=ks[s[r[n]-1]++]>>>15-r[n]);return o},pr=new qt(288),Qe=0;Qe<144;++Qe)pr[Qe]=8;for(var Qe=144;Qe<256;++Qe)pr[Qe]=9;for(var Qe=256;Qe<280;++Qe)pr[Qe]=7;for(var Qe=280;Qe<288;++Qe)pr[Qe]=8;for(var Yc=new qt(32),Qe=0;Qe<32;++Qe)Yc[Qe]=5;var D0=dr(pr,9,1),U0=dr(Yc,5,1),Hs=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},ei=function(r,e,t){var i=e/8|0;return(r[i]|r[i+1]<<8)>>(e&7)&t},Vs=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},O0=function(r){return(r/8|0)+(r&7&&1)},F0=function(r,e,t){(e==null||e<0)&&(e=0),(t==null||t>r.length)&&(t=r.length);var i=new(r instanceof Fi?Fi:r instanceof zs?zs:qt)(t-e);return i.set(r.subarray(e,t)),i},B0=function(r,e,t){var i=r.length;if(!i||t&&!t.l&&i<5)return e||new qt(0);var n=!e||t,a=!t||t.i;t||(t={}),e||(e=new qt(i*3));var s=function(Ee){var Ae=e.length;if(Ee>Ae){var Me=new qt(Math.max(Ae*2,Ee));Me.set(e),e=Me}},o=t.f||0,l=t.p||0,c=t.b||0,h=t.l,u=t.d,d=t.m,p=t.n,g=i*8;do{if(!h){t.f=o=ei(r,l,1);var _=ei(r,l+1,3);if(l+=3,_)if(_==1)h=D0,u=U0,d=9,p=5;else if(_==2){var m=ei(r,l,31)+257,f=ei(r,l+10,15)+4,y=m+ei(r,l+5,31)+1;l+=14;for(var v=new qt(y),S=new qt(19),T=0;T<f;++T)S[C0[T]]=ei(r,l+T*3,7);l+=f*3;for(var C=Hs(S),w=(1<<C)-1,z=dr(S,C,1),T=0;T<y;){var M=z[ei(r,l,w)];l+=M&15;var b=M>>>4;if(b<16)v[T++]=b;else{var k=0,J=0;for(b==16?(J=3+ei(r,l,3),l+=2,k=v[T-1]):b==17?(J=3+ei(r,l,7),l+=3):b==18&&(J=11+ei(r,l,127),l+=7);J--;)v[T++]=k}}var Z=v.subarray(0,m),I=v.subarray(m);d=Hs(Z),p=Hs(I),h=dr(Z,d,1),u=dr(I,p,1)}else throw"invalid block type";else{var b=O0(l)+4,G=r[b-4]|r[b-3]<<8,j=b+G;if(j>i){if(a)throw"unexpected EOF";break}n&&s(c+G),e.set(r.subarray(b,j),c),t.b=c+=G,t.p=l=j*8;continue}if(l>g){if(a)throw"unexpected EOF";break}}n&&s(c+131072);for(var W=(1<<d)-1,ne=(1<<p)-1,K=l;;K=l){var k=h[Vs(r,l)&W],X=k>>>4;if(l+=k&15,l>g){if(a)throw"unexpected EOF";break}if(!k)throw"invalid length/literal";if(X<256)e[c++]=X;else if(X==256){K=l,h=null;break}else{var N=X-254;if(X>264){var T=X-257,B=Gc[T];N=ei(r,l,(1<<B)-1)+qc[T],l+=B}var te=u[Vs(r,l)&ne],he=te>>>4;if(!te)throw"invalid distance";l+=te&15;var I=N0[he];if(he>3){var B=Wc[he];I+=Vs(r,l)&(1<<B)-1,l+=B}if(l>g){if(a)throw"unexpected EOF";break}n&&s(c+131072);for(var _e=c+N;c<_e;c+=4)e[c]=e[c-I],e[c+1]=e[c+1-I],e[c+2]=e[c+2-I],e[c+3]=e[c+3-I];c=_e}}t.l=h,t.p=K,t.b=c,h&&(o=1,t.m=d,t.d=u,t.n=p)}while(!o);return c==e.length?e:F0(e,0,c)},z0=new qt(0),k0=function(r){if((r[0]&15)!=8||r[0]>>>4>7||(r[0]<<8|r[1])%31)throw"invalid zlib data";if(r[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function H0(r,e){return B0((k0(r),r.subarray(2,-4)),e)}var V0=typeof TextDecoder<"u"&&new TextDecoder,G0=0;try{V0.decode(z0,{stream:!0}),G0=1}catch{}function Kc(r,e,t){const i=t.length-r-1;if(e>=t[i])return i-1;if(e<=t[r])return r;let n=r,a=i,s=Math.floor((n+a)/2);for(;e<t[s]||e>=t[s+1];)e<t[s]?a=s:n=s,s=Math.floor((n+a)/2);return s}function W0(r,e,t,i){const n=[],a=[],s=[];n[0]=1;for(let o=1;o<=t;++o){a[o]=e-i[r+1-o],s[o]=i[r+o]-e;let l=0;for(let c=0;c<o;++c){const h=s[c+1],u=a[o-c],d=n[c]/(h+u);n[c]=l+h*d,l=u*d}n[o]=l}return n}function X0(r,e,t,i){const n=Kc(r,i,e),a=W0(n,i,r,e),s=new qe(0,0,0,0);for(let o=0;o<=r;++o){const l=t[n-r+o],c=a[o],h=l.w*c;s.x+=l.x*h,s.y+=l.y*h,s.z+=l.z*h,s.w+=l.w*c}return s}function j0(r,e,t,i,n){const a=[];for(let u=0;u<=t;++u)a[u]=0;const s=[];for(let u=0;u<=i;++u)s[u]=a.slice(0);const o=[];for(let u=0;u<=t;++u)o[u]=a.slice(0);o[0][0]=1;const l=a.slice(0),c=a.slice(0);for(let u=1;u<=t;++u){l[u]=e-n[r+1-u],c[u]=n[r+u]-e;let d=0;for(let p=0;p<u;++p){const g=c[p+1],_=l[u-p];o[u][p]=g+_;const m=o[p][u-1]/o[u][p];o[p][u]=d+g*m,d=_*m}o[u][u]=d}for(let u=0;u<=t;++u)s[0][u]=o[u][t];for(let u=0;u<=t;++u){let d=0,p=1;const g=[];for(let _=0;_<=t;++_)g[_]=a.slice(0);g[0][0]=1;for(let _=1;_<=i;++_){let m=0;const f=u-_,y=t-_;u>=_&&(g[p][0]=g[d][0]/o[y+1][f],m=g[p][0]*o[f][y]);const v=f>=-1?1:-f,S=u-1<=y?_-1:t-u;for(let C=v;C<=S;++C)g[p][C]=(g[d][C]-g[d][C-1])/o[y+1][f+C],m+=g[p][C]*o[f+C][y];u<=y&&(g[p][_]=-g[d][_-1]/o[y+1][u],m+=g[p][_]*o[u][y]),s[_][u]=m;const T=d;d=p,p=T}}let h=t;for(let u=1;u<=i;++u){for(let d=0;d<=t;++d)s[u][d]*=h;h*=t-u}return s}function q0(r,e,t,i,n){const a=n<r?n:r,s=[],o=Kc(r,i,e),l=j0(o,i,r,a,e),c=[];for(let h=0;h<t.length;++h){const u=t[h].clone(),d=u.w;u.x*=d,u.y*=d,u.z*=d,c[h]=u}for(let h=0;h<=a;++h){const u=c[o-r].clone().multiplyScalar(l[h][0]);for(let d=1;d<=r;++d)u.add(c[o-r+d].clone().multiplyScalar(l[h][d]));s[h]=u}for(let h=a+1;h<=n+1;++h)s[h]=new qe(0,0,0);return s}function Y0(r,e){let t=1;for(let n=2;n<=r;++n)t*=n;let i=1;for(let n=2;n<=e;++n)i*=n;for(let n=2;n<=r-e;++n)i*=n;return t/i}function K0(r){const e=r.length,t=[],i=[];for(let a=0;a<e;++a){const s=r[a];t[a]=new L(s.x,s.y,s.z),i[a]=s.w}const n=[];for(let a=0;a<e;++a){const s=t[a].clone();for(let o=1;o<=a;++o)s.sub(n[a-o].clone().multiplyScalar(Y0(a,o)*i[o]));n[a]=s.divideScalar(i[0])}return n}function Z0(r,e,t,i,n){const a=q0(r,e,t,i,n);return K0(a)}class J0 extends _s{constructor(e,t,i,n,a){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=n||0,this.endKnot=a||this.knots.length-1;for(let s=0;s<i.length;++s){const o=i[s];this.controlPoints[s]=new qe(o.x,o.y,o.z,o.w)}}getPoint(e,t=new L){const i=t,n=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),a=X0(this.degree,this.knots,this.controlPoints,n);return a.w!==1&&a.divideScalar(a.w),i.set(a.x,a.y,a.z)}getTangent(e,t=new L){const i=t,n=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),a=Z0(this.degree,this.knots,this.controlPoints,n,1);return i.copy(a[1]).normalize(),i}}let ke,it,Dt;class $0 extends yi{constructor(e){super(e)}load(e,t,i,n){const a=this,s=a.path===""?pa.extractUrlBase(e):a.path,o=new As(this.manager);o.setPath(a.path),o.setResponseType("arraybuffer"),o.setRequestHeader(a.requestHeader),o.setWithCredentials(a.withCredentials),o.load(e,function(l){try{t(a.parse(l,s))}catch(c){n?n(c):console.error(c),a.manager.itemError(e)}},i,n)}parse(e,t){if(r_(e))ke=new n_().parse(e);else{const n=th(e);if(!a_(n))throw new Error("THREE.FBXLoader: Unknown format.");if($c(n)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+$c(n));ke=new i_().parse(n)}const i=new ws(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Q0(i,this.manager).parse(ke)}}class Q0{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){it=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),i=this.parseMaterials(t),n=this.parseDeformers(),a=new e_().parse(n);return this.parseScene(n,a,i),Dt}parseConnections(){const e=new Map;return"Connections"in ke&&ke.Connections.connections.forEach(function(t){const i=t[0],n=t[1],a=t[2];e.has(i)||e.set(i,{parents:[],children:[]});const s={ID:n,relationship:a};e.get(i).parents.push(s),e.has(n)||e.set(n,{parents:[],children:[]});const o={ID:i,relationship:a};e.get(n).children.push(o)}),e}parseImages(){const e={},t={};if("Video"in ke.Objects){const i=ke.Objects.Video;for(const n in i){const a=i[n],s=parseInt(n);if(e[s]=a.RelativeFilename||a.Filename,"Content"in a){const o=a.Content instanceof ArrayBuffer&&a.Content.byteLength>0,l=typeof a.Content=="string"&&a.Content!=="";if(o||l){const c=this.parseImage(i[n]);t[a.RelativeFilename||a.Filename]=c}}}}for(const i in e){const n=e[i];t[n]!==void 0?e[i]=t[n]:e[i]=e[i].split("\\").pop()}return e}parseImage(e){const t=e.Content,i=e.RelativeFilename||e.Filename,n=i.slice(i.lastIndexOf(".")+1).toLowerCase();let a;switch(n){case"bmp":a="image/bmp";break;case"jpg":case"jpeg":a="image/jpeg";break;case"png":a="image/png";break;case"tif":a="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",i),a="image/tga";break;default:console.warn('FBXLoader: Image type "'+n+'" is not supported.');return}if(typeof t=="string")return"data:"+a+";base64,"+t;{const s=new Uint8Array(t);return window.URL.createObjectURL(new Blob([s],{type:a}))}}parseTextures(e){const t=new Map;if("Texture"in ke.Objects){const i=ke.Objects.Texture;for(const n in i){const a=this.parseTexture(i[n],e);t.set(parseInt(n),a)}}return t}parseTexture(e,t){const i=this.loadTexture(e,t);i.ID=e.id,i.name=e.attrName;const n=e.WrapModeU,a=e.WrapModeV,s=n!==void 0?n.value:0,o=a!==void 0?a.value:0;if(i.wrapS=s===0?Ai:Pt,i.wrapT=o===0?Ai:Pt,"Scaling"in e){const l=e.Scaling.value;i.repeat.x=l[0],i.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;i.offset.x=l[0],i.offset.y=l[1]}return i}loadTexture(e,t){let i;const n=this.textureLoader.path,a=it.get(e.id).children;a!==void 0&&a.length>0&&t[a[0].ID]!==void 0&&(i=t[a[0].ID],(i.indexOf("blob:")===0||i.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let s;const o=e.FileName.slice(-3).toLowerCase();if(o==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),s=new rt):(l.setPath(this.textureLoader.path),s=l.load(i))}else o==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),s=new rt):s=this.textureLoader.load(i);return this.textureLoader.setPath(n),s}parseMaterials(e){const t=new Map;if("Material"in ke.Objects){const i=ke.Objects.Material;for(const n in i){const a=this.parseMaterial(i[n],e);a!==null&&t.set(parseInt(n),a)}}return t}parseMaterial(e,t){const i=e.id,n=e.attrName;let a=e.ShadingModel;if(typeof a=="object"&&(a=a.value),!it.has(i))return null;const s=this.parseParameters(e,t,i);let o;switch(a.toLowerCase()){case"phong":o=new bs;break;case"lambert":o=new Ts;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',a),o=new bs;break}return o.setValues(s),o.name=n,o}parseParameters(e,t,i){const n={};e.BumpFactor&&(n.bumpScale=e.BumpFactor.value),e.Diffuse?n.color=new fe().fromArray(e.Diffuse.value).convertSRGBToLinear():e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(n.color=new fe().fromArray(e.DiffuseColor.value).convertSRGBToLinear()),e.DisplacementFactor&&(n.displacementScale=e.DisplacementFactor.value),e.Emissive?n.emissive=new fe().fromArray(e.Emissive.value).convertSRGBToLinear():e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(n.emissive=new fe().fromArray(e.EmissiveColor.value).convertSRGBToLinear()),e.EmissiveFactor&&(n.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(n.opacity=parseFloat(e.Opacity.value)),n.opacity<1&&(n.transparent=!0),e.ReflectionFactor&&(n.reflectivity=e.ReflectionFactor.value),e.Shininess&&(n.shininess=e.Shininess.value),e.Specular?n.specular=new fe().fromArray(e.Specular.value).convertSRGBToLinear():e.SpecularColor&&e.SpecularColor.type==="Color"&&(n.specular=new fe().fromArray(e.SpecularColor.value).convertSRGBToLinear());const a=this;return it.get(i).children.forEach(function(s){const o=s.relationship;switch(o){case"Bump":n.bumpMap=a.getTexture(t,s.ID);break;case"Maya|TEX_ao_map":n.aoMap=a.getTexture(t,s.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":n.map=a.getTexture(t,s.ID),n.map!==void 0&&(n.map.colorSpace=Je);break;case"DisplacementColor":n.displacementMap=a.getTexture(t,s.ID);break;case"EmissiveColor":n.emissiveMap=a.getTexture(t,s.ID),n.emissiveMap!==void 0&&(n.emissiveMap.colorSpace=Je);break;case"NormalMap":case"Maya|TEX_normal_map":n.normalMap=a.getTexture(t,s.ID);break;case"ReflectionColor":n.envMap=a.getTexture(t,s.ID),n.envMap!==void 0&&(n.envMap.mapping=yr,n.envMap.colorSpace=Je);break;case"SpecularColor":n.specularMap=a.getTexture(t,s.ID),n.specularMap!==void 0&&(n.specularMap.colorSpace=Je);break;case"TransparentColor":case"TransparencyFactor":n.alphaMap=a.getTexture(t,s.ID),n.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",o);break}}),n}getTexture(e,t){return"LayeredTexture"in ke.Objects&&t in ke.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=it.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ke.Objects){const i=ke.Objects.Deformer;for(const n in i){const a=i[n],s=it.get(parseInt(n));if(a.attrType==="Skin"){const o=this.parseSkeleton(s,i);o.ID=n,s.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),o.geometryID=s.parents[0].ID,e[n]=o}else if(a.attrType==="BlendShape"){const o={id:n};o.rawTargets=this.parseMorphTargets(s,i),o.id=n,s.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[n]=o}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const i=[];return e.children.forEach(function(n){const a=t[n.ID];if(a.attrType!=="Cluster")return;const s={ID:n.ID,indices:[],weights:[],transformLink:new pe().fromArray(a.TransformLink.a)};"Indexes"in a&&(s.indices=a.Indexes.a,s.weights=a.Weights.a),i.push(s)}),{rawBones:i,bones:[]}}parseMorphTargets(e,t){const i=[];for(let n=0;n<e.children.length;n++){const a=e.children[n],s=t[a.ID],o={name:s.attrName,initialWeight:s.DeformPercent,id:s.id,fullWeights:s.FullWeights.a};if(s.attrType!=="BlendShapeChannel")return;o.geoID=it.get(parseInt(a.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,i.push(o)}return i}parseScene(e,t,i){Dt=new Qt;const n=this.parseModels(e.skeletons,t,i),a=ke.Objects.Model,s=this;n.forEach(function(l){const c=a[l.ID];s.setLookAtProperties(l,c),it.get(l.ID).parents.forEach(function(h){const u=n.get(h.ID);u!==void 0&&u.add(l)}),l.parent===null&&Dt.add(l)}),this.bindSkeleton(e.skeletons,t,n),this.createAmbientLight(),Dt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=Qc(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const o=new t_().parse();Dt.children.length===1&&Dt.children[0].isGroup&&(Dt.children[0].animations=o,Dt=Dt.children[0]),Dt.animations=o}parseModels(e,t,i){const n=new Map,a=ke.Objects.Model;for(const s in a){const o=parseInt(s),l=a[s],c=it.get(o);let h=this.buildSkeleton(c,e,o,l.attrName);if(!h){switch(l.attrType){case"Camera":h=this.createCamera(c);break;case"Light":h=this.createLight(c);break;case"Mesh":h=this.createMesh(c,t,i);break;case"NurbsCurve":h=this.createCurve(c,t);break;case"LimbNode":case"Root":h=new ta;break;case"Null":default:h=new Qt;break}h.name=l.attrName?We.sanitizeNodeName(l.attrName):"",h.userData.originalName=l.attrName,h.ID=o}this.getTransformData(h,l),n.set(o,h)}return n}buildSkeleton(e,t,i,n){let a=null;return e.parents.forEach(function(s){for(const o in t){const l=t[o];l.rawBones.forEach(function(c,h){if(c.ID===s.ID){const u=a;a=new ta,a.matrixWorld.copy(c.transformLink),a.name=n?We.sanitizeNodeName(n):"",a.userData.originalName=n,a.ID=i,l.bones[h]=a,u!==null&&a.add(u)}})}}),a}createCamera(e){let t,i;if(e.children.forEach(function(n){const a=ke.Objects.NodeAttribute[n.ID];a!==void 0&&(i=a)}),i===void 0)t=new Ze;else{let n=0;i.CameraProjectionType!==void 0&&i.CameraProjectionType.value===1&&(n=1);let a=1;i.NearPlane!==void 0&&(a=i.NearPlane.value/1e3);let s=1e3;i.FarPlane!==void 0&&(s=i.FarPlane.value/1e3);let o=window.innerWidth,l=window.innerHeight;i.AspectWidth!==void 0&&i.AspectHeight!==void 0&&(o=i.AspectWidth.value,l=i.AspectHeight.value);const c=o/l;let h=45;i.FieldOfView!==void 0&&(h=i.FieldOfView.value);const u=i.FocalLength?i.FocalLength.value:null;switch(n){case 0:t=new Tt(h,c,a,s),u!==null&&t.setFocalLength(u);break;case 1:t=new Jr(-o/2,o/2,l/2,-l/2,a,s);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+n+"."),t=new Ze;break}}return t}createLight(e){let t,i;if(e.children.forEach(function(n){const a=ke.Objects.NodeAttribute[n.ID];a!==void 0&&(i=a)}),i===void 0)t=new Ze;else{let n;i.LightType===void 0?n=0:n=i.LightType.value;let a=16777215;i.Color!==void 0&&(a=new fe().fromArray(i.Color.value).convertSRGBToLinear());let s=i.Intensity===void 0?1:i.Intensity.value/100;i.CastLightOnObject!==void 0&&i.CastLightOnObject.value===0&&(s=0);let o=0;i.FarAttenuationEnd!==void 0&&(i.EnableFarAttenuation!==void 0&&i.EnableFarAttenuation.value===0?o=0:o=i.FarAttenuationEnd.value);const l=1;switch(n){case 0:t=new Ps(a,s,o,l);break;case 1:t=new Is(a,s);break;case 2:let c=Math.PI/3;i.InnerAngle!==void 0&&(c=Vt.degToRad(i.InnerAngle.value));let h=0;i.OuterAngle!==void 0&&(h=Vt.degToRad(i.OuterAngle.value),h=Math.max(h,1)),t=new Tc(a,s,o,c,h,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+i.LightType.value+", defaulting to a PointLight."),t=new Ps(a,s);break}i.CastShadows!==void 0&&i.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,i){let n,a=null,s=null;const o=[];return e.children.forEach(function(l){t.has(l.ID)&&(a=t.get(l.ID)),i.has(l.ID)&&o.push(i.get(l.ID))}),o.length>1?s=o:o.length>0?s=o[0]:(s=new bs({name:yi.DEFAULT_MATERIAL_NAME,color:13421772}),o.push(s)),"color"in a.attributes&&o.forEach(function(l){l.vertexColors=!0}),a.FBX_Deformer?(n=new rc(a,s),n.normalizeSkinWeights()):n=new Ft(a,s),n}createCurve(e,t){const i=e.children.reduce(function(a,s){return t.has(s.ID)&&(a=t.get(s.ID)),a},null),n=new Hn({name:yi.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Vn(i,n)}getTransformData(e,t){const i={};"InheritType"in t&&(i.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?i.eulerOrder=eh(t.RotationOrder.value):i.eulerOrder="ZYX","Lcl_Translation"in t&&(i.translation=t.Lcl_Translation.value),"PreRotation"in t&&(i.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(i.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(i.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(i.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(i.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(i.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(i.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(i.rotationPivot=t.RotationPivot.value),e.userData.transformData=i}setLookAtProperties(e,t){"LookAtProperty"in t&&it.get(e.ID).children.forEach(function(i){if(i.relationship==="LookAtProperty"){const n=ke.Objects.Model[i.ID];if("Lcl_Translation"in n){const a=n.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(a),Dt.add(e.target)):e.lookAt(new L().fromArray(a))}}})}bindSkeleton(e,t,i){const n=this.parsePoseNodes();for(const a in e){const s=e[a];it.get(parseInt(s.ID)).parents.forEach(function(o){if(t.has(o.ID)){const l=o.ID;it.get(l).parents.forEach(function(c){i.has(c.ID)&&i.get(c.ID).bind(new ia(s.bones),n[c.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ke.Objects){const t=ke.Objects.Pose;for(const i in t)if(t[i].attrType==="BindPose"&&t[i].NbPoseNodes>0){const n=t[i].PoseNode;Array.isArray(n)?n.forEach(function(a){e[a.Node]=new pe().fromArray(a.Matrix.a)}):e[n.Node]=new pe().fromArray(n.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in ke&&"AmbientColor"in ke.GlobalSettings){const e=ke.GlobalSettings.AmbientColor.value,t=e[0],i=e[1],n=e[2];if(t!==0||i!==0||n!==0){const a=new fe(t,i,n).convertSRGBToLinear();Dt.add(new wc(a,1))}}}}class e_{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ke.Objects){const i=ke.Objects.Geometry;for(const n in i){const a=it.get(parseInt(n)),s=this.parseGeometry(a,i[n],e);t.set(parseInt(n),s)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,i){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,i);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,i){const n=i.skeletons,a=[],s=e.parents.map(function(u){return ke.Objects.Model[u.ID]});if(s.length===0)return;const o=e.children.reduce(function(u,d){return n[d.ID]!==void 0&&(u=n[d.ID]),u},null);e.children.forEach(function(u){i.morphTargets[u.ID]!==void 0&&a.push(i.morphTargets[u.ID])});const l=s[0],c={};"RotationOrder"in l&&(c.eulerOrder=eh(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const h=Qc(c);return this.genGeometry(t,o,a,h)}genGeometry(e,t,i,n){const a=new mt;e.attrName&&(a.name=e.attrName);const s=this.parseGeoNode(e,t),o=this.genBuffers(s),l=new st(o.vertex,3);if(l.applyMatrix4(n),a.setAttribute("position",l),o.colors.length>0&&a.setAttribute("color",new st(o.colors,3)),t&&(a.setAttribute("skinIndex",new Ja(o.weightsIndices,4)),a.setAttribute("skinWeight",new st(o.vertexWeights,4)),a.FBX_Deformer=t),o.normal.length>0){const c=new Be().getNormalMatrix(n),h=new st(o.normal,3);h.applyNormalMatrix(c),a.setAttribute("normal",h)}if(o.uvs.forEach(function(c,h){const u=h===0?"uv":`uv${h}`;a.setAttribute(u,new st(o.uvs[h],2))}),s.material&&s.material.mappingType!=="AllSame"){let c=o.materialIndex[0],h=0;if(o.materialIndex.forEach(function(u,d){u!==c&&(a.addGroup(h,d-h,c),c=u,h=d)}),a.groups.length>0){const u=a.groups[a.groups.length-1],d=u.start+u.count;d!==o.materialIndex.length&&a.addGroup(d,o.materialIndex.length-d,c)}a.groups.length===0&&a.addGroup(0,o.materialIndex.length,o.materialIndex[0])}return this.addMorphTargets(a,e,i,n),a}parseGeoNode(e,t){const i={};if(i.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],i.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(i.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(i.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(i.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){i.uv=[];let n=0;for(;e.LayerElementUV[n];)e.LayerElementUV[n].UV&&i.uv.push(this.parseUVs(e.LayerElementUV[n])),n++}return i.weightTable={},t!==null&&(i.skeleton=t,t.rawBones.forEach(function(n,a){n.indices.forEach(function(s,o){i.weightTable[s]===void 0&&(i.weightTable[s]=[]),i.weightTable[s].push({id:a,weight:n.weights[o]})})})),i}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let i=0,n=0,a=!1,s=[],o=[],l=[],c=[],h=[],u=[];const d=this;return e.vertexIndices.forEach(function(p,g){let _,m=!1;p<0&&(p=p^-1,m=!0);let f=[],y=[];if(s.push(p*3,p*3+1,p*3+2),e.color){const v=ga(g,i,p,e.color);l.push(v[0],v[1],v[2])}if(e.skeleton){if(e.weightTable[p]!==void 0&&e.weightTable[p].forEach(function(v){y.push(v.weight),f.push(v.id)}),y.length>4){a||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),a=!0);const v=[0,0,0,0],S=[0,0,0,0];y.forEach(function(T,C){let w=T,z=f[C];S.forEach(function(M,b,k){if(w>M){k[b]=w,w=M;const J=v[b];v[b]=z,z=J}})}),f=v,y=S}for(;y.length<4;)y.push(0),f.push(0);for(let v=0;v<4;++v)h.push(y[v]),u.push(f[v])}if(e.normal){const v=ga(g,i,p,e.normal);o.push(v[0],v[1],v[2])}e.material&&e.material.mappingType!=="AllSame"&&(_=ga(g,i,p,e.material)[0],_<0&&(d.negativeMaterialIndices=!0,_=0)),e.uv&&e.uv.forEach(function(v,S){const T=ga(g,i,p,v);c[S]===void 0&&(c[S]=[]),c[S].push(T[0]),c[S].push(T[1])}),n++,m&&(n>4&&console.warn("THREE.FBXLoader: Polygons with more than four sides are not supported. Make sure to triangulate the geometry during export."),d.genFace(t,e,s,_,o,l,c,h,u,n),i++,n=0,s=[],o=[],l=[],c=[],h=[],u=[])}),t}genFace(e,t,i,n,a,s,o,l,c,h){for(let u=2;u<h;u++)e.vertex.push(t.vertexPositions[i[0]]),e.vertex.push(t.vertexPositions[i[1]]),e.vertex.push(t.vertexPositions[i[2]]),e.vertex.push(t.vertexPositions[i[(u-1)*3]]),e.vertex.push(t.vertexPositions[i[(u-1)*3+1]]),e.vertex.push(t.vertexPositions[i[(u-1)*3+2]]),e.vertex.push(t.vertexPositions[i[u*3]]),e.vertex.push(t.vertexPositions[i[u*3+1]]),e.vertex.push(t.vertexPositions[i[u*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(u-1)*4]),e.vertexWeights.push(l[(u-1)*4+1]),e.vertexWeights.push(l[(u-1)*4+2]),e.vertexWeights.push(l[(u-1)*4+3]),e.vertexWeights.push(l[u*4]),e.vertexWeights.push(l[u*4+1]),e.vertexWeights.push(l[u*4+2]),e.vertexWeights.push(l[u*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(u-1)*4]),e.weightsIndices.push(c[(u-1)*4+1]),e.weightsIndices.push(c[(u-1)*4+2]),e.weightsIndices.push(c[(u-1)*4+3]),e.weightsIndices.push(c[u*4]),e.weightsIndices.push(c[u*4+1]),e.weightsIndices.push(c[u*4+2]),e.weightsIndices.push(c[u*4+3])),t.color&&(e.colors.push(s[0]),e.colors.push(s[1]),e.colors.push(s[2]),e.colors.push(s[(u-1)*3]),e.colors.push(s[(u-1)*3+1]),e.colors.push(s[(u-1)*3+2]),e.colors.push(s[u*3]),e.colors.push(s[u*3+1]),e.colors.push(s[u*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(n),e.materialIndex.push(n),e.materialIndex.push(n)),t.normal&&(e.normal.push(a[0]),e.normal.push(a[1]),e.normal.push(a[2]),e.normal.push(a[(u-1)*3]),e.normal.push(a[(u-1)*3+1]),e.normal.push(a[(u-1)*3+2]),e.normal.push(a[u*3]),e.normal.push(a[u*3+1]),e.normal.push(a[u*3+2])),t.uv&&t.uv.forEach(function(d,p){e.uvs[p]===void 0&&(e.uvs[p]=[]),e.uvs[p].push(o[p][0]),e.uvs[p].push(o[p][1]),e.uvs[p].push(o[p][(u-1)*2]),e.uvs[p].push(o[p][(u-1)*2+1]),e.uvs[p].push(o[p][u*2]),e.uvs[p].push(o[p][u*2+1])})}addMorphTargets(e,t,i,n){if(i.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const a=this;i.forEach(function(s){s.rawTargets.forEach(function(o){const l=ke.Objects.Geometry[o.geoID];l!==void 0&&a.genMorphGeometry(e,t,l,n,o.name)})})}genMorphGeometry(e,t,i,n,a){const s=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],o=i.Vertices!==void 0?i.Vertices.a:[],l=i.Indexes!==void 0?i.Indexes.a:[],c=e.attributes.position.count*3,h=new Float32Array(c);for(let g=0;g<l.length;g++){const _=l[g]*3;h[_]=o[g*3],h[_+1]=o[g*3+1],h[_+2]=o[g*3+2]}const u={vertexIndices:s,vertexPositions:h},d=this.genBuffers(u),p=new st(d.vertex,3);p.name=a||i.attrName,p.applyMatrix4(n),e.morphAttributes.position.push(p)}parseNormals(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Normals.a;let a=[];return i==="IndexToDirect"&&("NormalIndex"in e?a=e.NormalIndex.a:"NormalsIndex"in e&&(a=e.NormalsIndex.a)),{dataSize:3,buffer:n,indices:a,mappingType:t,referenceType:i}}parseUVs(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.UV.a;let a=[];return i==="IndexToDirect"&&(a=e.UVIndex.a),{dataSize:2,buffer:n,indices:a,mappingType:t,referenceType:i}}parseVertexColors(e){const t=e.MappingInformationType,i=e.ReferenceInformationType,n=e.Colors.a;let a=[];i==="IndexToDirect"&&(a=e.ColorIndex.a);for(let s=0,o=new fe;s<n.length;s+=4)o.fromArray(n,s).convertSRGBToLinear().toArray(n,s);return{dataSize:4,buffer:n,indices:a,mappingType:t,referenceType:i}}parseMaterialIndices(e){const t=e.MappingInformationType,i=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:i};const n=e.Materials.a,a=[];for(let s=0;s<n.length;++s)a.push(s);return{dataSize:1,buffer:n,indices:a,mappingType:t,referenceType:i}}parseNurbsGeometry(e){const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new mt;const i=t-1,n=e.KnotVector.a,a=[],s=e.Points.a;for(let h=0,u=s.length;h<u;h+=4)a.push(new qe().fromArray(s,h));let o,l;if(e.Form==="Closed")a.push(a[0]);else if(e.Form==="Periodic"){o=i,l=n.length-1-o;for(let h=0;h<i;++h)a.push(a[h])}const c=new J0(i,n,a,o,l).getPoints(a.length*12);return new mt().setFromPoints(c)}}class t_{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const i in t){const n=t[i],a=this.addClip(n);e.push(a)}return e}parseClips(){if(ke.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ke.Objects.AnimationCurveNode,t=new Map;for(const i in e){const n=e[i];if(n.attrName.match(/S|R|T|DeformPercent/)!==null){const a={id:n.id,attr:n.attrName,curves:{}};t.set(a.id,a)}}return t}parseAnimationCurves(e){const t=ke.Objects.AnimationCurve;for(const i in t){const n={id:t[i].id,times:t[i].KeyTime.a.map(s_),values:t[i].KeyValueFloat.a},a=it.get(n.id);if(a!==void 0){const s=a.parents[0].ID,o=a.parents[0].relationship;o.match(/X/)?e.get(s).curves.x=n:o.match(/Y/)?e.get(s).curves.y=n:o.match(/Z/)?e.get(s).curves.z=n:o.match(/DeformPercent/)&&e.has(s)&&(e.get(s).curves.morph=n)}}}parseAnimationLayers(e){const t=ke.Objects.AnimationLayer,i=new Map;for(const n in t){const a=[],s=it.get(parseInt(n));s!==void 0&&(s.children.forEach(function(o,l){if(e.has(o.ID)){const c=e.get(o.ID);if(c.curves.x!==void 0||c.curves.y!==void 0||c.curves.z!==void 0){if(a[l]===void 0){const h=it.get(o.ID).parents.filter(function(u){return u.relationship!==void 0})[0].ID;if(h!==void 0){const u=ke.Objects.Model[h.toString()];if(u===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",o);return}const d={modelName:u.attrName?We.sanitizeNodeName(u.attrName):"",ID:u.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Dt.traverse(function(p){p.ID===u.id&&(d.transform=p.matrix,p.userData.transformData&&(d.eulerOrder=p.userData.transformData.eulerOrder))}),d.transform||(d.transform=new pe),"PreRotation"in u&&(d.preRotation=u.PreRotation.value),"PostRotation"in u&&(d.postRotation=u.PostRotation.value),a[l]=d}}a[l]&&(a[l][c.attr]=c)}else if(c.curves.morph!==void 0){if(a[l]===void 0){const h=it.get(o.ID).parents.filter(function(m){return m.relationship!==void 0})[0].ID,u=it.get(h).parents[0].ID,d=it.get(u).parents[0].ID,p=it.get(d).parents[0].ID,g=ke.Objects.Model[p],_={modelName:g.attrName?We.sanitizeNodeName(g.attrName):"",morphName:ke.Objects.Deformer[h].attrName};a[l]=_}a[l][c.attr]=c}}}),i.set(parseInt(n),a))}return i}parseAnimStacks(e){const t=ke.Objects.AnimationStack,i={};for(const n in t){const a=it.get(parseInt(n)).children;a.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const s=e.get(a[0].ID);i[n]={name:t[n].attrName,layer:s}}return i}addClip(e){let t=[];const i=this;return e.layer.forEach(function(n){t=t.concat(i.generateTracks(n))}),new Sc(e.name,-1,t)}generateTracks(e){const t=[];let i=new L,n=new Nt,a=new L;if(e.transform&&e.transform.decompose(i,n,a),i=i.toArray(),n=new Gt().setFromQuaternion(n,e.eulerOrder).toArray(),a=a.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.T.curves,i,"position");s!==void 0&&t.push(s)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const s=this.generateRotationTrack(e.modelName,e.R.curves,n,e.preRotation,e.postRotation,e.eulerOrder);s!==void 0&&t.push(s)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const s=this.generateVectorTrack(e.modelName,e.S.curves,a,"scale");s!==void 0&&t.push(s)}if(e.DeformPercent!==void 0){const s=this.generateMorphTrack(e);s!==void 0&&t.push(s)}return t}generateVectorTrack(e,t,i,n){const a=this.getTimesForAllAxes(t),s=this.getKeyframeTrackValues(a,t,i);return new rn(e+"."+n,a,s)}generateRotationTrack(e,t,i,n,a,s){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Vt.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Vt.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Vt.degToRad));const o=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(o,t,i);n!==void 0&&(n=n.map(Vt.degToRad),n.push(s),n=new Gt().fromArray(n),n=new Nt().setFromEuler(n)),a!==void 0&&(a=a.map(Vt.degToRad),a.push(s),a=new Gt().fromArray(a),a=new Nt().setFromEuler(a).invert());const c=new Nt,h=new Gt,u=[];for(let d=0;d<l.length;d+=3)h.set(l[d],l[d+1],l[d+2],s),c.setFromEuler(h),n!==void 0&&c.premultiply(n),a!==void 0&&c.multiply(a),c.toArray(u,d/3*4);return new Oi(e+".quaternion",o,u)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,i=t.values.map(function(a){return a/100}),n=Dt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new nn(e.modelName+".morphTargetInfluences["+n+"]",t.times,i)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(i,n){return i-n}),t.length>1){let i=1,n=t[0];for(let a=1;a<t.length;a++){const s=t[a];s!==n&&(t[i]=s,n=s,i++)}t=t.slice(0,i)}return t}getKeyframeTrackValues(e,t,i){const n=i,a=[];let s=-1,o=-1,l=-1;return e.forEach(function(c){if(t.x&&(s=t.x.times.indexOf(c)),t.y&&(o=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),s!==-1){const h=t.x.values[s];a.push(h),n[0]=h}else a.push(n[0]);if(o!==-1){const h=t.y.values[o];a.push(h),n[1]=h}else a.push(n[1]);if(l!==-1){const h=t.z.values[l];a.push(h),n[2]=h}else a.push(n[2])}),a}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const i=e.values[t-1],n=e.values[t]-i,a=Math.abs(n);if(a>=180){const s=a/180,o=n/s;let l=i+o;const c=e.times[t-1],h=(e.times[t]-c)/s;let u=c+h;const d=[],p=[];for(;u<e.times[t];)d.push(u),u+=h,p.push(l),l+=o;e.times=ih(e.times,t,d),e.values=ih(e.values,t,p)}}}}class i_{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new Jc,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,i=e.split(/[\r\n]+/);return i.forEach(function(n,a){const s=n.match(/^[\s\t]*;/),o=n.match(/^[\s\t]*$/);if(s||o)return;const l=n.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=n.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),h=n.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(n,l):c?t.parseNodeProperty(n,c,i[++a]):h?t.popStack():n.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(n)}),this.allNodes}parseNodeBegin(e,t){const i=t[1].trim().replace(/^"/,"").replace(/"$/,""),n=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),a={name:i},s=this.parseNodeAttr(n),o=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(i,a):i in o?(i==="PoseNode"?o.PoseNode.push(a):o[i].id!==void 0&&(o[i]={},o[i][o[i].id]=o[i]),s.id!==""&&(o[i][s.id]=a)):typeof s.id=="number"?(o[i]={},o[i][s.id]=a):i!=="Properties70"&&(i==="PoseNode"?o[i]=[a]:o[i]=a),typeof s.id=="number"&&(a.id=s.id),s.name!==""&&(a.attrName=s.name),s.type!==""&&(a.attrType=s.type),this.pushStack(a)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let i="",n="";return e.length>1&&(i=e[1].replace(/^(\w+)::/,""),n=e[2]),{id:t,name:i,type:n}}parseNodeProperty(e,t,i){let n=t[1].replace(/^"/,"").replace(/"$/,"").trim(),a=t[2].replace(/^"/,"").replace(/"$/,"").trim();n==="Content"&&a===","&&(a=i.replace(/"/g,"").replace(/,$/,"").trim());const s=this.getCurrentNode();if(s.name==="Properties70"){this.parseNodeSpecialProperty(e,n,a);return}if(n==="C"){const o=a.split(",").slice(1),l=parseInt(o[0]),c=parseInt(o[1]);let h=a.split(",").slice(3);h=h.map(function(u){return u.trim().replace(/^"/,"")}),n="connections",a=[l,c],l_(a,h),s[n]===void 0&&(s[n]=[])}n==="Node"&&(s.id=a),n in s&&Array.isArray(s[n])?s[n].push(a):n!=="a"?s[n]=a:s.a=a,this.setCurrentProp(s,n),n==="a"&&a.slice(-1)!==","&&(s.a=Ws(a))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=Ws(t.a))}parseNodeSpecialProperty(e,t,i){const n=i.split('",').map(function(h){return h.trim().replace(/^\"/,"").replace(/\s/,"_")}),a=n[0],s=n[1],o=n[2],l=n[3];let c=n[4];switch(s){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=Ws(c);break}this.getPrevNode()[a]={type:s,type2:o,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),a)}}class n_{parse(e){const t=new Zc(e);t.skip(23);const i=t.getUint32();if(i<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+i);const n=new Jc;for(;!this.endOfContent(t);){const a=this.parseNode(t,i);a!==null&&n.add(a.name,a)}return n}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const i={},n=t>=7500?e.getUint64():e.getUint32(),a=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const s=e.getUint8(),o=e.getString(s);if(n===0)return null;const l=[];for(let d=0;d<a;d++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",h=l.length>1?l[1]:"",u=l.length>2?l[2]:"";for(i.singleProperty=a===1&&e.getOffset()===n;n>e.getOffset();){const d=this.parseNode(e,t);d!==null&&this.parseSubNode(o,i,d)}return i.propertyList=l,typeof c=="number"&&(i.id=c),h!==""&&(i.attrName=h),u!==""&&(i.attrType=u),o!==""&&(i.name=o),i}parseSubNode(e,t,i){if(i.singleProperty===!0){const n=i.propertyList[0];Array.isArray(n)?(t[i.name]=i,i.a=n):t[i.name]=n}else if(e==="Connections"&&i.name==="C"){const n=[];i.propertyList.forEach(function(a,s){s!==0&&n.push(a)}),t.connections===void 0&&(t.connections=[]),t.connections.push(n)}else if(i.name==="Properties70")Object.keys(i).forEach(function(n){t[n]=i[n]});else if(e==="Properties70"&&i.name==="P"){let n=i.propertyList[0],a=i.propertyList[1];const s=i.propertyList[2],o=i.propertyList[3];let l;n.indexOf("Lcl ")===0&&(n=n.replace("Lcl ","Lcl_")),a.indexOf("Lcl ")===0&&(a=a.replace("Lcl ","Lcl_")),a==="Color"||a==="ColorRGB"||a==="Vector"||a==="Vector3D"||a.indexOf("Lcl_")===0?l=[i.propertyList[4],i.propertyList[5],i.propertyList[6]]:l=i.propertyList[4],t[n]={type:a,type2:s,flag:o,value:l}}else t[i.name]===void 0?typeof i.id=="number"?(t[i.name]={},t[i.name][i.id]=i):t[i.name]=i:i.name==="PoseNode"?(Array.isArray(t[i.name])||(t[i.name]=[t[i.name]]),t[i.name].push(i)):t[i.name][i.id]===void 0&&(t[i.name][i.id]=i)}parseProperty(e){const t=e.getString(1);let i;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return i=e.getUint32(),e.getArrayBuffer(i);case"S":return i=e.getUint32(),e.getString(i);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const n=e.getUint32(),a=e.getUint32(),s=e.getUint32();if(a===0)switch(t){case"b":case"c":return e.getBooleanArray(n);case"d":return e.getFloat64Array(n);case"f":return e.getFloat32Array(n);case"i":return e.getInt32Array(n);case"l":return e.getInt64Array(n)}const o=H0(new Uint8Array(e.getArrayBuffer(s))),l=new Zc(o.buffer);switch(t){case"b":case"c":return l.getBooleanArray(n);case"d":return l.getFloat64Array(n);case"f":return l.getFloat32Array(n);case"i":return l.getInt32Array(n);case"l":return l.getInt64Array(n)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Zc{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let i=0;i<e;i++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let i=0;i<e;i++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){const t=this.offset;let i=new Uint8Array(this.dv.buffer,t,e);this.skip(e);const n=i.indexOf(0);return n>=0&&(i=new Uint8Array(this.dv.buffer,t,n)),this._textDecoder.decode(i)}}class Jc{add(e,t){this[e]=t}}function r_(r){const e="Kaydara FBX Binary  \0";return r.byteLength>=e.length&&e===th(r,0,e.length)}function a_(r){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function i(n){const a=r[n-1];return r=r.slice(t+n),t++,a}for(let n=0;n<e.length;++n)if(i(1)===e[n])return!1;return!0}function $c(r){const e=/FBXVersion: (\d+)/,t=r.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function s_(r){return r/46186158e3}const o_=[];function ga(r,e,t,i){let n;switch(i.mappingType){case"ByPolygonVertex":n=r;break;case"ByPolygon":n=e;break;case"ByVertice":n=t;break;case"AllSame":n=i.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+i.mappingType)}i.referenceType==="IndexToDirect"&&(n=i.indices[n]);const a=n*i.dataSize,s=a+i.dataSize;return c_(o_,i.buffer,a,s)}const Gs=new Gt,Kn=new L;function Qc(r){const e=new pe,t=new pe,i=new pe,n=new pe,a=new pe,s=new pe,o=new pe,l=new pe,c=new pe,h=new pe,u=new pe,d=new pe,p=r.inheritType?r.inheritType:0;if(r.translation&&e.setPosition(Kn.fromArray(r.translation)),r.preRotation){const b=r.preRotation.map(Vt.degToRad);b.push(r.eulerOrder||Gt.DEFAULT_ORDER),t.makeRotationFromEuler(Gs.fromArray(b))}if(r.rotation){const b=r.rotation.map(Vt.degToRad);b.push(r.eulerOrder||Gt.DEFAULT_ORDER),i.makeRotationFromEuler(Gs.fromArray(b))}if(r.postRotation){const b=r.postRotation.map(Vt.degToRad);b.push(r.eulerOrder||Gt.DEFAULT_ORDER),n.makeRotationFromEuler(Gs.fromArray(b)),n.invert()}r.scale&&a.scale(Kn.fromArray(r.scale)),r.scalingOffset&&o.setPosition(Kn.fromArray(r.scalingOffset)),r.scalingPivot&&s.setPosition(Kn.fromArray(r.scalingPivot)),r.rotationOffset&&l.setPosition(Kn.fromArray(r.rotationOffset)),r.rotationPivot&&c.setPosition(Kn.fromArray(r.rotationPivot)),r.parentMatrixWorld&&(u.copy(r.parentMatrix),h.copy(r.parentMatrixWorld));const g=t.clone().multiply(i).multiply(n),_=new pe;_.extractRotation(h);const m=new pe;m.copyPosition(h);const f=m.clone().invert().multiply(h),y=_.clone().invert().multiply(f),v=a,S=new pe;if(p===0)S.copy(_).multiply(g).multiply(y).multiply(v);else if(p===1)S.copy(_).multiply(y).multiply(g).multiply(v);else{const b=new pe().scale(new L().setFromMatrixScale(u)).clone().invert(),k=y.clone().multiply(b);S.copy(_).multiply(g).multiply(k).multiply(v)}const T=c.clone().invert(),C=s.clone().invert();let w=e.clone().multiply(l).multiply(c).multiply(t).multiply(i).multiply(n).multiply(T).multiply(o).multiply(s).multiply(a).multiply(C);const z=new pe().copyPosition(w),M=h.clone().multiply(z);return d.copyPosition(M),w=d.clone().multiply(S),w.premultiply(h.invert()),w}function eh(r){r=r||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return r===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[r]}function Ws(r){return r.split(",").map(function(e){return parseFloat(e)})}function th(r,e,t){return e===void 0&&(e=0),t===void 0&&(t=r.byteLength),new TextDecoder().decode(new Uint8Array(r,e,t))}function l_(r,e){for(let t=0,i=r.length,n=e.length;t<n;t++,i++)r[i]=e[t]}function c_(r,e,t,i){for(let n=t,a=0;n<i;n++,a++)r[a]=e[n];return r}function ih(r,e,t){return r.slice(0,e).concat(t).concat(r.slice(e))}function nh(r,e){if(e===tu)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===La||e===Yo){let t=r.getIndex();if(t===null){const s=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)s.push(l);r.setIndex(s),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===La)for(let s=1;s<=i;s++)n.push(t.getX(0)),n.push(t.getX(s)),n.push(t.getX(s+1));else for(let s=0;s<i;s++)s%2===0?(n.push(t.getX(s)),n.push(t.getX(s+1)),n.push(t.getX(s+2))):(n.push(t.getX(s+2)),n.push(t.getX(s+1)),n.push(t.getX(s)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const a=r.clone();return a.setIndex(n),a.clearGroups(),a}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class h_ extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new m_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new b_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new __(t)}),this.register(function(t){return new v_(t)}),this.register(function(t){return new x_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new g_(t)}),this.register(function(t){return new S_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new w_(t)})}load(e,t,i,n){const a=this;let s;this.resourcePath!==""?s=this.resourcePath:this.path!==""?s=this.path:s=pa.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),a.manager.itemError(e),a.manager.itemEnd(e)},l=new As(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{a.parse(c,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let a;const s={},o={},l=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===rh){try{s[Ge.KHR_BINARY_GLTF]=new R_(e)}catch(h){n&&n(h);return}a=JSON.parse(s[Ge.KHR_BINARY_GLTF].content)}else a=JSON.parse(l.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new H_(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:s[u]=new p_;break;case Ge.KHR_DRACO_MESH_COMPRESSION:s[u]=new L_(a,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:s[u]=new C_;break;case Ge.KHR_MESH_QUANTIZATION:s[u]=new P_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,a){i.parse(e,t,n,a)})}}function u_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class d_{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const a=t[i];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const l=new fe(16777215);s.color!==void 0&&l.setRGB(s.color[0],s.color[1],s.color[2],xt);const c=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new Is(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Ps(l),o.distance=c;break;case"spot":o=new Tc(l),o.distance=c,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,ki(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),n=Promise.resolve(o),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,n=i.json.nodes[e],a=(n.extensions&&n.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return i._getNodeRef(t.cache,a,s)})}}class p_{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return Zi}extendParams(e,t,i){const n=[];e.color=new fe(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],xt),e.opacity=s[3]}a.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",a.baseColorTexture,Je))}return Promise.all(n)}}class f_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name].emissiveStrength;return n!==void 0&&(t.emissiveIntensity=n),Promise.resolve()}}class m_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(i.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ye(o,o)}return Promise.all(a)}}class g_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(i.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class __{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new fe(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=n.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],xt)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(i.assignTexture(t,"sheenColorMap",s.sheenColorTexture,Je)),s.sheenRoughnessTexture!==void 0&&a.push(i.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class v_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(i.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class x_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(i.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new fe().setRGB(o[0],o[1],o[2],xt),Promise.all(a)}}class y_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const n=i.extensions[this.name];return t.ior=n.ior!==void 0?n.ior:1.5,Promise.resolve()}}class M_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(i.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new fe().setRGB(o[0],o[1],o[2],xt),s.specularColorTexture!==void 0&&a.push(i.assignTexture(t,"specularColorMap",s.specularColorTexture,Je)),Promise.all(a)}}class S_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:Ui}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const a=[],s=n.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(i.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class E_{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const a=n.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class b_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class T_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,a=n.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=n.images[s.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,s.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class A_{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],a=this.parser.getDependency("buffer",n.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,n.mode,n.filter),p})})}else return null}}class w_{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const l of n.primitives)if(l.mode!==Yt.TRIANGLES&&l.mode!==Yt.TRIANGLE_STRIP&&l.mode!==Yt.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=i.extensions[this.name].attributes,s=[],o={};for(const l in a)s.push(this.parser.getDependency("accessor",a[l]).then(c=>(o[l]=c,o[l])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const p of h){const g=new pe,_=new L,m=new Nt,f=new L(1,1,1),y=new Og(p.geometry,p.material,u);for(let v=0;v<u;v++)o.TRANSLATION&&_.fromBufferAttribute(o.TRANSLATION,v),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,v),o.SCALE&&f.fromBufferAttribute(o.SCALE,v),y.setMatrixAt(v,g.compose(_,m,f));for(const v in o)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,o[v]);Ze.prototype.copy.call(y,p),this.parser.assignFinalMaterial(y),d.push(y)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const rh="glTF",fr=12,ah={JSON:1313821514,BIN:5130562};class R_{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,fr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==rh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-fr,a=new DataView(e,fr);let s=0;for(;s<n;){const o=a.getUint32(s,!0);s+=4;const l=a.getUint32(s,!0);if(s+=4,l===ah.JSON){const c=new Uint8Array(e,fr+s,o);this.content=i.decode(c)}else if(l===ah.BIN){const c=fr+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class L_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},l={},c={};for(const h in s){const u=js[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=js[h]||h.toLowerCase();if(s[h]!==void 0){const d=i.accessors[e.attributes[h]],p=Zn[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const p in d.attributes){const g=d.attributes[p],_=l[p];_!==void 0&&(g.normalized=_)}u(d)},o,c)})})}}class C_{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class P_{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class sh extends hr{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,a=e*n*3+n;for(let s=0;s!==n;s++)t[s]=i[a+s];return t}interpolate_(e,t,i,n){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,y=1-m,v=f-d+u;for(let S=0;S!==o;S++){const T=s[_+S+o],C=s[_+S+l]*h,w=s[g+S+o],z=s[g+S]*h;a[S]=y*T+v*C+m*w+f*z}return a}}const I_=new Nt;class N_ extends sh{interpolate_(e,t,i,n){const a=super.interpolate_(e,t,i,n);return I_.fromArray(a).normalize().toArray(a),a}}const Yt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Zn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},oh={9728:pt,9729:It,9984:Ma,9985:po,9986:Er,9987:Vi},lh={33071:Pt,33648:Sr,10497:Ai},Xs={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},js={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},zi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},D_={CUBICSPLINE:void 0,LINEAR:mn,STEP:$n},qs={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function U_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Es({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),r.DefaultMaterial}function sn(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function ki(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function O_(r,e,t){let i=!1,n=!1,a=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(a=!0),i&&n&&a)break}if(!i&&!n&&!a)return Promise.resolve(r);const s=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;s.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(a){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),a&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function F_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function B_(r){let e;const t=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ys(t.attributes):e=r.indices+":"+Ys(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+Ys(r.targets[i]);return e}function Ys(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function Ks(r){switch(r){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function z_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const k_=new pe;class H_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new u_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,a=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,a=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&a<98?this.textureLoader=new ws(this.options.manager):this.textureLoader=new i0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new As(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(s){const o={scene:s[0][n.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:n.asset,parser:i,userData:{}};return sn(a,o,n),ki(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,a=t.length;n<a;n++){const s=t[n].joints;for(let o=0,l=s.length;o<l;o++)e[s[o]].isBone=!0}for(let n=0,a=e.length;n<a;n++){const s=e[n];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(i[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),a=(s,o)=>{const l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(const[c,h]of s.children.entries())a(h,o.children[c])};return a(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const a=e(t[n]);a&&i.push(a)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":n=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(a,s){return i.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(a,s){i.load(pa.resolveURL(t.uri,n.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,a=t.byteOffset||0;return i.slice(a,a+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const s=Xs[n.type],o=Zn[n.componentType],l=n.normalized===!0,c=new o(n.count*s);return Promise.resolve(new yt(c,s,l))}const a=[];return n.bufferView!==void 0?a.push(this.getDependency("bufferView",n.bufferView)):a.push(null),n.sparse!==void 0&&(a.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],l=Xs[n.type],c=Zn[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,p=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),y="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+f+":"+n.count;let v=t.cache.get(y);v||(_=new c(o,f*p,n.count*p/h),v=new Pg(_,p/h),t.cache.add(y,v)),m=new hs(v,l,d%p/h,g)}else o===null?_=new c(n.count*l):_=new c(o,d,n.count*l),m=new yt(_,l,g);if(n.sparse!==void 0){const f=Xs.SCALAR,y=Zn[n.sparse.indices.componentType],v=n.sparse.indices.byteOffset||0,S=n.sparse.values.byteOffset||0,T=new y(s[1],v,n.sparse.count*f),C=new c(s[2],S,n.sparse.count*l);o!==null&&(m=new yt(m.array.slice(),m.itemSize,m.normalized));for(let w=0,z=T.length;w<z;w++){const M=T[w];if(m.setX(M,C[w*l]),l>=2&&m.setY(M,C[w*l+1]),l>=3&&m.setZ(M,C[w*l+2]),l>=4&&m.setW(M,C[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,n=t.textures[e].source,a=t.images[n];let s=this.textureLoader;if(a.uri){const o=i.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,n,s)}loadTextureImage(e,t,i){const n=this,a=this.json,s=a.textures[e],o=a.images[t],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(a.samplers||{})[s.sampler]||{};return h.magFilter=oh[u.magFilter]||It,h.minFilter=oh[u.minFilter]||Vi,h.wrapS=lh[u.wrapS]||Ai,h.wrapT=lh[u.wrapT]||Ai,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=n.images[e],o=self.URL||self.webkitURL;let l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=i.getDependency("bufferView",s.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:s.mimeType});return l=o.createObjectURL(d),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new rt(_);m.needsUpdate=!0,d(m)}),t.load(pa.resolveURL(u,a.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=s.mimeType||z_(s.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const a=this;return this.getDependency("texture",i.index).then(function(s){if(!s)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(s=s.clone(),s.channel=i.texCoord),a.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=a.associations.get(s);s=a.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,l)}}return n!==void 0&&(s.colorSpace=n),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ms,Xt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Hn,Xt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||a||s){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),a&&(l.vertexColors=!0),s&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Es}loadMaterial(e){const t=this,i=this.json,n=this.extensions,a=i.materials[e];let s;const o={},l=a.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const u=n[Ge.KHR_MATERIALS_UNLIT];s=u.getMaterialType(),c.push(u.extendParams(o,a,t))}else{const u=a.pbrMetallicRoughness||{};if(o.color=new fe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],xt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Je)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),s=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=ti);const h=a.alphaMode||qs.OPAQUE;if(h===qs.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===qs.MASK&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==Zi&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ye(1,1),a.normalTexture.scale!==void 0)){const u=a.normalTexture.scale;o.normalScale.set(u,u)}if(a.occlusionTexture!==void 0&&s!==Zi&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==Zi){const u=a.emissiveFactor;o.emissive=new fe().setRGB(u[0],u[1],u[2],xt)}return a.emissiveTexture!==void 0&&s!==Zi&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,Je)),Promise.all(c).then(function(){const u=new s(o);return a.name&&(u.name=a.name),ki(u,a),t.associations.set(u,{materials:e}),a.extensions&&sn(n,u,a),u})}createUniqueName(e){const t=We.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function a(o){return i[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return ch(l,o,t)})}const s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=B_(c),u=n[h];if(u)s.push(u.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=a(c):d=ch(new mt,c,t),n[h]={primitive:c,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,i=this.json,n=this.extensions,a=i.meshes[e],s=a.primitives,o=[];for(let l=0,c=s.length;l<c;l++){const h=s[l].material===void 0?U_(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=s[p];let f;const y=c[p];if(m.mode===Yt.TRIANGLES||m.mode===Yt.TRIANGLE_STRIP||m.mode===Yt.TRIANGLE_FAN||m.mode===void 0)f=a.isSkinnedMesh===!0?new rc(_,y):new Ft(_,y),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Yt.TRIANGLE_STRIP?f.geometry=nh(f.geometry,Yo):m.mode===Yt.TRIANGLE_FAN&&(f.geometry=nh(f.geometry,La));else if(m.mode===Yt.LINES)f=new fs(_,y);else if(m.mode===Yt.LINE_STRIP)f=new Vn(_,y);else if(m.mode===Yt.LINE_LOOP)f=new Fg(_,y);else if(m.mode===Yt.POINTS)f=new mc(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&F_(f,a),f.name=t.createUniqueName(a.name||"mesh_"+e),ki(f,a),m.extensions&&sn(n,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return a.extensions&&sn(n,u[0],a),u[0];const d=new Qt;a.extensions&&sn(n,d,a),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Tt(Vt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new Jr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),ki(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,a=t.joints.length;n<a;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const a=n.pop(),s=n,o=[],l=[];for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u){o.push(u);const d=new pe;a!==null&&d.fromArray(a.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ia(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],a=n.name?n.name:"animation_"+e,s=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const p=n.channels[u],g=n.samplers[p.sampler],_=p.target,m=_.node,f=n.parameters!==void 0?n.parameters[g.input]:g.input,y=n.parameters!==void 0?n.parameters[g.output]:g.output;_.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",y)),c.push(g),h.push(_))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let y=0,v=d.length;y<v;y++){const S=d[y],T=p[y],C=g[y],w=_[y],z=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();const M=i._createAnimationTracks(S,T,C,w,z);if(M)for(let b=0;b<M.length;b++)f.push(M[b])}return new Sc(a,void 0,f)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(a){const s=i._getNodeRef(i.meshCache,n.mesh,a);return n.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),s})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],a=i._loadNodeShallow(e),s=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)s.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([a,Promise.all(s),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,k_)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?n.createUniqueName(a.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),a.camera!==void 0&&o.push(n.getDependency("camera",a.camera).then(function(c){return n._getNodeRef(n.cameraCache,a.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(a.isBone===!0?h=new ta:c.length>1?h=new Qt:c.length===1?h=c[0]:h=new Ze,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(a.name&&(h.userData.name=a.name,h.name=s),ki(h,a),a.extensions&&sn(i,h,a),a.matrix!==void 0){const u=new pe;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,a=new Qt;i.name&&(a.name=n.createUniqueName(i.name)),ki(a,i),i.extensions&&sn(t,a,i);const s=i.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(n.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)a.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of n.associations)(d instanceof Xt||d instanceof rt)&&u.set(d,p);return h.traverse(d=>{const p=n.associations.get(d);p!=null&&u.set(d,p)}),u};return n.associations=c(a),a})}_createAnimationTracks(e,t,i,n,a){const s=[],o=e.name?e.name:e.uuid,l=[];zi[a.path]===zi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(zi[a.path]){case zi.weights:c=nn;break;case zi.rotation:c=Oi;break;case zi.position:case zi.scale:c=rn;break;default:switch(i.itemSize){case 1:c=nn;break;case 2:case 3:default:c=rn;break}break}const h=n.interpolation!==void 0?D_[n.interpolation]:mn,u=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+zi[a.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),s.push(g)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ks(t.constructor),n=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)n[a]=t[a]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){const i=this instanceof Oi?N_:sh;return new i(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function V_(r,e,t){const i=e.attributes,n=new ni;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),o.normalized){const h=Ks(Zn[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const a=e.targets;if(a!==void 0){const o=new L,l=new L;for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=Ks(Zn[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const s=new ri;n.getCenter(s.center),s.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=s}function ch(r,e,t){const i=e.attributes,n=[];function a(s,o){return t.getDependency("accessor",s).then(function(l){r.setAttribute(o,l)})}for(const s in i){const o=js[s]||s.toLowerCase();o in r.attributes||n.push(a(i[s],o))}if(e.indices!==void 0&&!r.index){const s=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(s)}return Ye.workingColorSpace!==xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ye.workingColorSpace}" not supported.`),ki(r,e),V_(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?O_(r,e.targets,t):r})}new $0,new ws;const G_=new h_;function W_(r){return new Promise((e,t)=>{G_.load(r,function(i){console.log("gltf",i),e(i)})})}const mr=(r,e=1)=>new Ts({color:r,transparent:!0,opacity:e}),gr=(r,e=1)=>new Hn({color:r,depthTest:!0,transparent:!0,opacity:e}),X_=new Ts({color:988184,wireframe:!0}),_r=(r,e,t,i=1)=>{if(r.isMesh){e&&(r.material=e);const n=j_(r,i,t),a=r.name+"_line";n.name=a,r.add(n)}},j_=(r,e=1,t)=>{var i=new kg(r.geometry,e),n=new fs(i);return t&&(n.material=t),n},q_=document.querySelector("#city_map"),Zs=document.querySelector("#css2dRender"),Si=new L0(q_,Zs);W_("./models/scene.gltf").then(r=>{if(!Si)return;const e=r.scene.clone(),t=10;e.scale.set(t,t,t);const i=e.getObjectByName("Text_test-base_0");i&&i.parent&&i.parent.remove(i);const n=e.getObjectByName("Text_text_0");n&&n.parent&&n.parent.remove(n);const a=new fe(2275314),s=new fe(2326986),o=new fe(8158333),l=new fe(6645094),c=.001,h=1,u=.85,d=e.getObjectByName("02-huanqiujinrongzhongxin_huanqiujinrongzhongxin_0");d&&(d.name="hqjrzx",_r(d,mr(a,u),gr(s,h),c));const p=e.getObjectByName("01-shanghaizhongxindasha_shanghaizhongxindasha_0");p&&(p.name="shzx",_r(p,mr(a,u),gr(s,h),c));const g=e.getObjectByName("03-jinmaodasha_jjinmaodasha_0");g&&(g.name="jmds",_r(g,mr(a,u),gr(s,h),c));const _=e.getObjectByName("04-dongfangmingzhu_dongfangmingzhu_0");_&&(_.name="dfmzt",_r(_,mr(a,u),gr(s,h),c)),Si.scene.add(e),Si.toSceneCenter(e),e.traverse(m=>{m.isMesh&&(m.name.indexOf("Shanghai")!==-1||m.name.indexOf("Object")!==-1)&&(m.name.indexOf("Floor")!==-1?m.material=X_:m.name.indexOf("River")!==-1||_r(m,mr(o,.8),gr(l,.4),c))}),K_(),Y_(),Si.animate()});function Y_(){const r=new Qt;Si.scene.add(r),zc.forEach((e,t)=>{if(e.tagPos){const i=document.createElement("li");i.setAttribute("data-cameraPosInfo",JSON.stringify(e)),i.classList.add("build_tag"),i.innerText=`${t+1}`;const n=new _0(i),a=new L().fromArray(e.tagPos);n.position.copy(a),r.add(n)}}),Zs&&Zs.addEventListener("click",function(e){if(e.target&&e.target.nodeName==="LI"){console.dir(e);const t=e.target.getAttribute("data-cameraPosInfo");if(t){const{pos:i,target:n}=JSON.parse(t);Si.controls.target.set(...n),Si.handleCameraPos(i)}}})}function K_(){let r=new Qt;x0.forEach(e=>{const t=[];for(let a=0;a<e.length/3;a++){const s=e[a*3],o=e[a*3+2],l=new ye(s,o);t.push(l)}const i=new zg(t).getPoints(100).map(a=>new L(a.x,0,a.y)),n=Si._Fly.setFly({index:Math.random()>.5?50:20,num:20,points:i,spaced:50,starColor:new fe(Math.random()*16777215),endColor:new fe(Math.random()*16777215),size:.5});r.add(n)}),Si.scene.add(r)}}),sv=rv();export{sv as default};
