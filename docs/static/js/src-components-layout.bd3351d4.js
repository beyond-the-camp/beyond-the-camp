(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./src/components/Layout.mdx":function(A,e,o){"use strict";o.r(e);var t=o("./node_modules/react/index.js"),n=o.n(t),a=o("./node_modules/@mdx-js/tag/dist/index.js"),r=o("./node_modules/docz/dist/index.m.js"),s=o("./src/components/index.ts");function p(A,e){if(null==A)return{};var o,t,n=function(A,e){if(null==A)return{};var o,t,n={},a=Object.keys(A);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||(n[o]=A[o]);return n}(A,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(A);for(t=0;t<a.length;t++)o=a[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(A,o)&&(n[o]=A[o])}return n}e.default=function(A){var e=A.components,o=p(A,["components"]);return n.a.createElement(a.MDXTag,{name:"wrapper",components:e},n.a.createElement(a.MDXTag,{name:"h1",components:e,props:{id:"layout"}},"Layout"),n.a.createElement(a.MDXTag,{name:"p",components:e},"A base component that provides basic layout and styling for a page."),n.a.createElement(r.Playground,{__position:0,__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAdgABlXFacJ2HkN0TXaT04AEchASdah9DgSRVGwQMBXtTVzVQuUFXNQMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsZm7Fh5yEgAWCT2AANgkqT1jAUCADEfWgRIhP4ZxDkRR1MHYAAFIR-CWIhqEoOBZMRTS620mhnAgJjLnYABGRTpPkVUg1QeipgAQTmTj2GjGDyBsKB0EjZDOU4sQYrjGR2FRdiYG4YBjxYtjsXkXd62AeLoCS4IADIavGRJ5koZpKsS5LuA6-UwFCUK-1Qdp2AAfg2KrI2jVKrla6rUHkON91kMxPzMWENWOGAwDCKApnGtKMrrRhIrXOtkybXVwnyCz4MQqZPi3GhVzK5Mrv2R760bMQTNPcZsAIB71xOj7Im6eyum-rBfskI76wbSRnvCV73rOggLu6OGbtw7MIahmHDtrTlfxATDsNuvCaAIojcGRsgdFA_QGBWh0YPsVwBByFDjSoz1mdZwMGeguCEP2ZDKI9WHBfCXmsDI7irKgVw0Fg2wpnZ910MkSy5YVpXAwJomcKzfDJG59AcGRrBqd0MCDAg0jVqMEI7BDKUReopVgrtVa4rgOwVbQs0pQtGB7L62jUDQWgBA2szrMoEceLrYx7csF5YFHQc5wOcwJm6OJWfYXl1hiAhYCuVE5xSYLZpCsLVlZ1jcuis44GKdZqgtOA_BOEYrlE5SfAADhU0T-I8Vxo2EpYJ_YKfhJwAAmb9W-FWcLUyFg8iuABWCTgosWSewKHucE3ro5V80_guKd2XSl1aa-N6LYvGFPunkK4Y7uVLuHS2N9qy8g5bewAHI-jyhVFm6B66wFKuud6wAi7QL-vteaeNgq6ywvrO6yMxbXVNnAc22hLZ0xtlBfODt2BO2lKrf275r620Zj0b2wsOami1IHYOAx-rXxrjlVOXEm4tzrHxASVxz5BxCOESgu92BRCwBaXE6AJhXFTMJC-6x97yRSKItRqAr7gjDnoSOkpugfzsPHCwU1IxXEoTgShQDSyV30XzEsqAGJo0fnFBK01kLv2HHAL-P9MpsB6IAuAIDTz5V4TAUqFUvGRnkFIGQqCzDoOJhjQ2Gt5aoEVqiPBBCQJ6HApBaW9t_AUK1C7Ghod6FTCiTkFhrtLRBxEJw0Ozia6ZK1gxLidScChCgIIiwUAlbt2Kj5H4LppHCLQBaWAYACA90vmgpQIBnLbFcGkIC1ALa0yKeY9g_BUCgP4FcfgQJiRVG8BkQOWAfTkiZCAaSFh-CsAyPkagJyDkgFnj82y6x-DlHIP0GYfVPn8HCtlUiqd_z3LWuSSgiQCx5AKNONh5yQRXIEH8us_AohoDBSoKMGg4DYueSATA8woyhQgPAT5-yyU0IJQAPV8qpY-89SX1n4M00FSAvlMoAJzzxwL5YSnKGVsJ5Zw5lQq54irFY89c_AaFWkiMy1l7K578HWFXeQusMW4F0JAFIWzUA7MKdbEAPEQC0F9FkE5ZyzS0FXmw2YMx-B6vkF6oAA",__code:"<p>Outside Layout component</p>\n<Layout>\n  <p>Some text</p>\n  <p>Some more text</p>\n</Layout>\n<p>Outside Layout component</p>",__scope:{props:o,Layout:s.b}},n.a.createElement("p",null,"Outside Layout component"),n.a.createElement(s.b,null,n.a.createElement("p",null,"Some text"),n.a.createElement("p",null,"Some more text")),n.a.createElement("p",null,"Outside Layout component")))}}}]);