"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9497],{74748:(e,t,r)=>{var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(87757)),l=a(r(59713)),u=a(r(48926)),i=a(r(63038)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=W(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(67294)),c=a(r(78384)),d=r(68547),f=r(97132),p=r(80831),m=a(r(11700)),g=r(23724),h=a(r(78718)),y=r(15482),b=r(62031),w=r(49425),v=r(5493),O=r(78862),P=r(19408),j=r(34626),E=r(9008),M=r(84686),S=r(43808),k=r(91767),x=r(55967),I=a(r(28649)),_=a(r(48765)),D=a(r(84734)),L=a(r(92651)),A=r(63376),C=r(91871),T=a(r(32860)),G=r(26595);function W(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(W=function(e){return e?r:t})(e)}function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var B=c.default.a.withConfig({displayName:"ProfilePage__DocumentationLink",componentId:"sc-1fhx3cm-0"})(["color:",";"],(function(e){return e.theme.colors.primary600})),N=(0,c.default)(x.TextInput).withConfig({displayName:"ProfilePage__PasswordInput",componentId:"sc-1fhx3cm-1"})(["::-ms-reveal{display:none;}"]),F=(0,c.default)(k.FieldAction).withConfig({displayName:"ProfilePage__FieldActionWrapper",componentId:"sc-1fhx3cm-2"})(["svg{height:1rem;width:1rem;path{fill:",";}}"],(function(e){return e.theme.colors.neutral600})),H=function(){var e=(0,s.useState)(!1),t=(0,i.default)(e,2),r=t[0],a=t[1],n=(0,s.useState)(!1),l=(0,i.default)(n,2),c=l[0],k=l[1],x=(0,s.useState)(!1),W=(0,i.default)(x,2),U=W[0],H=W[1],R=(0,L.default)(),V=R.changeLocale,z=R.localeNames,Q=(0,d.useAppInfos)().setUserDisplayName,Y=(0,g.useQueryClient)(),Z=(0,f.useIntl)().formatMessage,J=(0,d.useTracking)().trackUsage,K=(0,d.useNotification)(),X=(0,d.useOverlayBlocker)(),$=X.lockApp,ee=X.unlockApp,te=(0,M.useNotifyAT)().notifyStatus,re=(0,A.useThemeToggle)(),ae=re.currentTheme,ne=re.themes,oe=re.onChangeTheme;(0,d.useFocusWhenNavigate)();var le=(0,g.useQuery)("user",(function(){return(0,C.fetchUser)()}),{onSuccess:function(){te(Z({id:"Settings.profile.form.notify.data.loaded",defaultMessage:"Your profile data has been loaded"}))},onError:function(){K({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ue=le.status,ie=le.data,se="success"!==ue,ce=(0,g.useMutation)((function(e){return(0,C.putUser)(e)}),{onSuccess:function(){var e=(0,u.default)(o.default.mark((function e(t){var r;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.invalidateQueries("user");case 2:d.auth.setUserInfo((0,h.default)(t,["email","firstname","lastname","username","preferedLanguage"])),r=t.username||(0,G.getFullName)(t.firstname,t.lastname),Q(r),V(t.preferedLanguage),oe(t.currentTheme),J("didChangeMode",{newMode:t.currentTheme}),K({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onSettled:function(){ee()},refetchActive:!0}),de=ce.isLoading,fe=function(){var e=(0,u.default)(o.default.mark((function e(t,r){var a,n;return o.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=r.setErrors,$(),n=t.username||null,ce.mutate(q(q({},t),{},{username:n}),{onError:function(e){var t,r=null===e||void 0===e||null===(t=e.response)||void 0===t?void 0:t.data;return null!==r&&void 0!==r&&r.data?a(r.data):K({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}});case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),pe=(0,h.default)(q(q({},ie),{},{currentTheme:ae}),["currentTheme","email","firstname","lastname","username","preferedLanguage"]);if(se)return s.default.createElement(b.Main,{"aria-busy":"true"},s.default.createElement(y.Helmet,{title:Z({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),s.default.createElement(O.HeaderLayout,{title:Z({id:"Settings.profile.form.section.profile.page.title",defaultMessage:"Profile page"})}),s.default.createElement(O.ContentLayout,null,s.default.createElement(d.LoadingIndicatorPage,null)));var me=Object.keys(ne).filter((function(e){return ne[e]}));return s.default.createElement(b.Main,{"aria-busy":de},s.default.createElement(y.Helmet,{title:Z({id:"Settings.profile.form.section.helmet.title",defaultMessage:"User profile"})}),s.default.createElement(p.Formik,{onSubmit:fe,initialValues:pe,validateOnChange:!1,validationSchema:T.default,enableReinitialize:!0},(function(e){var t=e.errors,n=e.values,o=e.handleChange,l=e.isSubmitting;return s.default.createElement(d.Form,null,s.default.createElement(O.HeaderLayout,{title:ie.username||(0,G.getFullName)(ie.firstname,ie.lastname),primaryAction:s.default.createElement(P.Button,{startIcon:s.default.createElement(D.default,null),loading:l,type:"submit"},Z({id:"form.button.save",defaultMessage:"Save"}))}),s.default.createElement(v.Box,{paddingBottom:10},s.default.createElement(O.ContentLayout,null,s.default.createElement(E.Stack,{spacing:6},s.default.createElement(v.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.default.createElement(E.Stack,{spacing:4},s.default.createElement(w.Typography,{variant:"delta",as:"h2"},Z({id:"Settings.profile.form.section.profile.title",defaultMessage:"Profile"})),s.default.createElement(j.Grid,{gap:5},s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(d.GenericInput,{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},error:t.firstname,onChange:o,value:n.firstname||"",type:"text",name:"firstname",required:!0})),s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(d.GenericInput,{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},error:t.lastname,onChange:o,value:n.lastname||"",type:"text",name:"lastname"})),s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(d.GenericInput,{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},error:t.email,onChange:o,value:n.email||"",type:"email",name:"email",required:!0})),s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(d.GenericInput,{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},error:t.username,onChange:o,value:n.username||"",type:"text",name:"username"}))))),s.default.createElement(v.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.default.createElement(E.Stack,{spacing:4},s.default.createElement(w.Typography,{variant:"delta",as:"h2"},Z({id:"Settings.profile.form.section.password.title",defaultMessage:"Change password"})),s.default.createElement(j.Grid,{gap:5},s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(N,{error:t.currentPassword?Z({id:t.currentPassword,defaultMessage:t.currentPassword}):"",onChange:o,value:n.currentPassword||"",label:Z({id:"Auth.form.currentPassword.label",defaultMessage:"Current Password"}),name:"currentPassword",type:U?"text":"password",endAction:s.default.createElement(F,{onClick:function(e){e.stopPropagation(),H((function(e){return!e}))},label:Z(U?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},U?s.default.createElement(I.default,null):s.default.createElement(_.default,null))}))),s.default.createElement(j.Grid,{gap:5},s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(N,{error:t.password?Z({id:t.password,defaultMessage:t.password}):"",onChange:o,value:n.password||"",label:Z({id:"Auth.form.password.label",defaultMessage:"Password"}),name:"password",type:r?"text":"password",endAction:s.default.createElement(F,{onClick:function(e){e.stopPropagation(),a((function(e){return!e}))},label:Z(r?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},r?s.default.createElement(I.default,null):s.default.createElement(_.default,null))})),s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(N,{error:t.confirmPassword?Z({id:t.confirmPassword,defaultMessage:t.confirmPassword}):"",onChange:o,value:n.confirmPassword||"",label:Z({id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"}),name:"confirmPassword",type:c?"text":"password",endAction:s.default.createElement(F,{onClick:function(e){e.stopPropagation(),k((function(e){return!e}))},label:Z(c?{id:"Auth.form.password.show-password",defaultMessage:"Show password"}:{id:"Auth.form.password.hide-password",defaultMessage:"Hide password"})},c?s.default.createElement(I.default,null):s.default.createElement(_.default,null))}))))),s.default.createElement(v.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},s.default.createElement(E.Stack,{spacing:4},s.default.createElement(E.Stack,{spacing:1},s.default.createElement(w.Typography,{variant:"delta",as:"h2"},Z({id:"Settings.profile.form.section.experience.title",defaultMessage:"Experience"})),s.default.createElement(w.Typography,null,Z({id:"Settings.profile.form.section.experience.interfaceLanguageHelp",defaultMessage:"Preference changes will apply only to you. More information is available {here}."},{here:s.default.createElement(B,{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/development/admin-customization.html#locales"},Z({id:"Settings.profile.form.section.experience.documentation",defaultMessage:"here"}))}))),s.default.createElement(j.Grid,{gap:5},s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(S.Select,{label:Z({id:"Settings.profile.form.section.experience.interfaceLanguage",defaultMessage:"Interface language"}),placeholder:Z({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:Z({id:"Settings.profile.form.section.experience.interfaceLanguage.hint",defaultMessage:"This will only display your own interface in the chosen language."}),onClear:function(){o({target:{name:"preferedLanguage",value:null}})},clearLabel:Z({id:"Settings.profile.form.section.experience.clear.select",defaultMessage:"Clear the interface language selected"}),value:n.preferedLanguage,onChange:function(e){o({target:{name:"preferedLanguage",value:e}})}},Object.keys(z).map((function(e){var t=z[e];return s.default.createElement(S.Option,{value:e,key:e},t)})))),s.default.createElement(j.GridItem,{s:12,col:6},s.default.createElement(S.Select,{label:Z({id:"Settings.profile.form.section.experience.mode.label",defaultMessage:"Interface mode"}),placeholder:Z({id:"components.Select.placeholder",defaultMessage:"Select"}),hint:Z({id:"Settings.profile.form.section.experience.mode.hint",defaultMessage:"Displays your interface in the chosen mode."}),value:n.currentTheme,onChange:function(e){o({target:{name:"currentTheme",value:e}})}},me.map((function(e){var t=Z({id:"Settings.profile.form.section.experience.mode.option-label",defaultMessage:"{name} mode"},{name:(0,m.default)(e)});return s.default.createElement(S.Option,{value:e,key:e},t)})))))))))))})))};t.default=H},91871:(e,t,r)=>{var a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.putUser=t.fetchUser=void 0;var n=a(r(87757)),o=a(r(59713)),l=a(r(48926)),u=a(r(57557)),i=r(53777);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d=function(){var e=(0,l.default)(n.default.mark((function e(){var t,r;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.axiosInstance.get("/admin/users/me");case 2:return t=e.sent,r=t.data,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchUser=d;var f=function(){var e=(0,l.default)(n.default.mark((function e(t){var r,a,o;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(0,u.default)(t,["confirmPassword","currentTheme"]),e.next=3,i.axiosInstance.put("/admin/users/me",r);case 3:return a=e.sent,o=a.data,e.abrupt("return",c(c({},o.data),{},{currentTheme:t.currentTheme}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.putUser=f},32860:(e,t,r)=>{var a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(53209)),o=r(37108);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var u=n.object().shape(o.profileValidation);t.default=u},33694:(e,t,r)=>{var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(r(59713)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(53209)),u=r(21600),i=a(r(20703));function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=l.object().shape(d(d({},u.commonUserSchema),{},{isActive:l.bool()},i.default));t.default=f},37108:(e,t,r)=>{var a=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"editValidation",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"profileValidation",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"rolesValidation",{enumerable:!0,get:function(){return l.default}});var n=a(r(33694)),o=a(r(21600)),l=a(r(20703))},21600:(e,t,r)=>{var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.commonUserSchema=void 0;var o=a(r(59713)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(53209)),u=r(68547);function i(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={firstname:l.mixed().required(u.translatedErrors.required),lastname:l.mixed(),email:l.string().email(u.translatedErrors.email).lowercase().required(u.translatedErrors.required),username:l.string().nullable(),password:l.string().min(8,u.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:l.string().min(8,u.translatedErrors.minLength).oneOf([l.ref("password"),null],"components.Input.error.password.noMatch").when("password",(function(e,t){return e?t.required(u.translatedErrors.required):t}))};t.commonUserSchema=d;var f=c(c({},d),{},{currentPassword:l.string().when(["password","confirmPassword"],(function(e,t,r){return e||t?r.required(u.translatedErrors.required):r})),preferedLanguage:l.string().nullable()});t.default=f},20703:(e,t,r)=>{var a=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=o?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,r&&r.set(e,n);return n}(r(53209)),o=r(68547);function l(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var u={roles:n.array().min(1,o.translatedErrors.required).required(o.translatedErrors.required)};t.default=u}}]);