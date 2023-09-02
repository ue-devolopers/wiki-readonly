"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u0422\u0443\u0442\u043e\u0440\u0438\u0430\u043b","href":"/docs/intro","docId":"intro"},{"type":"category","label":"Unreal Engine 5","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f","href":"/docs/unreal-engine-5/example","docId":"unreal-engine-5/example"},{"type":"link","label":"Swarm Agent","href":"/docs/unreal-engine-5/swarmagent","docId":"unreal-engine-5/swarmagent"}],"href":"/docs/category/unreal-engine-5"},{"type":"category","label":"Blender","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438","href":"/docs/blender/collision","docId":"blender/collision"},{"type":"link","label":"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 UE","href":"/docs/blender/export","docId":"blender/export"}],"href":"/docs/category/blender"}]},"docs":{"blender/collision":{"id":"blender/collision","title":"\u041a\u043e\u043b\u043b\u0438\u0437\u0438\u044f \u0434\u043b\u044f \u043c\u043e\u0434\u0435\u043b\u0438","description":"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u043d\u0430\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u0438\u0433\u0440\u0435. Unreal Engine 5 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0435 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u0438 \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0435 Static Mesh Editor. \u041e\u0434\u043d\u0430\u043a\u043e \u0432 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0443\u044e \u0433\u0435\u043e\u043c\u0435\u0442\u0440\u0438\u044e \u0441\u0442\u043e\u043b\u043a\u043d\u043e\u0432\u0435\u043d\u0438\u0439 \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 3D-\u043c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u0441\u0435\u0442\u043a\u043e\u0439 \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430. \u041a\u0430\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u044d\u0442\u043e \u0441\u043f\u0440\u0430\u0432\u0435\u0434\u043b\u0438\u0432\u043e \u0434\u043b\u044f \u043b\u044e\u0431\u043e\u0439 \u0441\u0435\u0442\u043a\u0438 \u0441 \u043e\u0442\u0432\u0435\u0440\u0441\u0442\u0438\u0435\u043c \u0438\u043b\u0438 \u0432\u043e\u0433\u043d\u0443\u0442\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e, \u0441 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u043e\u0431\u044a\u0435\u043a\u0442\u044b \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0442\u044c\u0441\u044f.","sidebar":"tutorialSidebar"},"blender/export":{"id":"blender/export","title":"\u042d\u043a\u0441\u043f\u043e\u0440\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u0432 UE","description":"*","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\u0422\u0443\u0442\u043e\u0440\u0438\u0430\u043b","description":"\u0412\u0440\u0435\u043c\u044f \u0447\u0442\u0435\u043d\u0438\u044f 5 \u043c\u0438\u043d\u0443\u0442.","sidebar":"tutorialSidebar"},"unreal-engine-5/example":{"id":"unreal-engine-5/example","title":"\u041a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f","description":"","sidebar":"tutorialSidebar"},"unreal-engine-5/swarmagent":{"id":"unreal-engine-5/swarmagent","title":"\u0427\u0442\u043e \u043d\u0438\u0431\u0443\u0434\u044c","description":"","sidebar":"tutorialSidebar"}}}')}}]);