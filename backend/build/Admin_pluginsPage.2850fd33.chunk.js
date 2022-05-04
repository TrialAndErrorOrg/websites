"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[3677],{26122:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(23724),n=a(68547),u=a(50613),r=function(e){var t=(0,n.useNotification)();return(0,l.useQuery)("list-installed-plugins",(function(){return(0,u.fetchInstalledPlugins)()}),{onSuccess:function(){e&&e()},onError:function(){t({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}})};t.default=r},50613:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.fetchInstalledPlugins=void 0;var n=l(a(87757)),u=l(a(48926)),r=a(53777),s=function(){var e=(0,u.default)(n.default.mark((function e(){var t,a;return n.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.axiosInstance.get("/admin/plugins");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();t.fetchInstalledPlugins=s},44226:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),u=a(97132),r=a(68547),s=a(84686),i=a(78862),d=a(62031),o=a(49425),c=a(41798),f=l(a(26122)),p=function(){var e=(0,u.useIntl)().formatMessage,t=(0,s.useNotifyAT)().notifyStatus;(0,r.useFocusWhenNavigate)();var a=e({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"}),l=(0,f.default)((function(){t(e({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:a}))})),p=l.status,g=l.data;return"success"!==p&&"error"!==p?n.default.createElement(i.Layout,null,n.default.createElement(d.Main,{"aria-busy":!0},n.default.createElement(r.LoadingIndicatorPage,null))):n.default.createElement(i.Layout,null,n.default.createElement(d.Main,null,n.default.createElement(i.HeaderLayout,{title:a,subtitle:e({id:"app.components.ListPluginsPage.description",defaultMessage:"List of the installed plugins in the project."})}),n.default.createElement(i.ContentLayout,null,n.default.createElement(c.Table,{colCount:2,rowCount:(null===g||void 0===g?void 0:g.plugins.length)+1},n.default.createElement(c.Thead,null,n.default.createElement(c.Tr,null,n.default.createElement(c.Th,null,n.default.createElement(o.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.name",defaultMessage:"Name"}))),n.default.createElement(c.Th,null,n.default.createElement(o.Typography,{variant:"sigma",textColor:"neutral600"},e({id:"Settings.roles.list.header.description",defaultMessage:"description"}))))),n.default.createElement(c.Tbody,null,g.plugins.map((function(e){var t=e.name,a=e.displayName,l=e.description;return n.default.createElement(c.Tr,{key:t},n.default.createElement(c.Td,null,n.default.createElement(o.Typography,{textColor:"neutral800",variant:"omega",fontWeight:"bold"},a)),n.default.createElement(c.Td,null,n.default.createElement(o.Typography,{textColor:"neutral800"},l)))})))))))};t.default=p},3505:(e,t,a)=>{var l=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),u=a(68547),r=a(15482),s=a(97132),i=l(a(46114)),d=l(a(44226)),o=function(){var e=(0,(0,s.useIntl)().formatMessage)({id:"app.components.ListPluginsPage.title",defaultMessage:"Plugins"});return n.default.createElement(u.CheckPagePermissions,{permissions:i.default.marketplace.main},n.default.createElement(r.Helmet,{title:e}),n.default.createElement(d.default,null))};t.default=o}}]);