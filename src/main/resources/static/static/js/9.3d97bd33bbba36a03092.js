webpackJsonp([9],{p82y:function(t,a){},scnS:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=e("BO1k"),l=e.n(r),s=e("//Fk"),o=e.n(s),n=e("P9l9"),i=e("1fBy"),c=(e("NdhP"),{name:"scl90history",data:function(){return this.radarChartSettings={metrics:["F1","F2","F3","F4","F5","F6","F7","F8","F9"]},this.pieChartSettings={level:[["男","女"],["已婚","未婚"]]},this.heatMapChartSettings={position:"china",type:"map",geo:{label:{emphasis:{show:!1}},itemStyle:{normal:{areaColor:"#323c48",borderColor:"#111"},emphasis:{areaColor:"#2a333d"}}}},{sex_relevance:"",marriage_relevance:"",age_relevance:"",salary_relevance:"",username:"",userId:"",ExamineDialogVisible:!1,userscl90history:[],userInfo:[],listLoading:!0,scl90history:[],ringChartData:{columns:["收入情况","人数"],rows:[]},histogramData:{columns:["年龄","F1","F2","F3","F4","F5","F6","F7","F8","F9"],rows:[{"年龄":"20-30",F1:662,F2:574,F3:795,F4:677,F5:821,F6:736,F7:310,F8:659,F9:845},{"年龄":"30-40",F1:459,F2:514,F3:411,F4:501,F5:936,F6:527,F7:749,F8:260,F9:858},{"年龄":"40-50",F1:180,F2:944,F3:325,F4:934,F5:177,F6:502,F7:844,F8:477,F9:944},{"年龄":"50-70",F1:135,F2:807,F3:707,F4:264,F5:600,F6:183,F7:605,F8:308,F9:646},{"年龄":"70+",F1:39,F2:11,F3:20,F4:15,F5:19,F6:7,F7:8,F8:2,F9:13}]},radarchartData:{columns:["类别","F1","F2","F3","F4","F5","F6","F7","F8","F9"],rows:[]},pieChartData:{columns:["人群","负面情绪倾向人数"],rows:[]},heatMapChartData:{columns:["lat","lng","人数"],rows:[{lat:115.892151,lng:40.676493,"人数":800},{lat:115.892151,lng:28.676493,"人数":1e3},{lat:117.000923,lng:36.675807,"人数":400},{lat:113.665412,lng:34.757975,"人数":800},{lat:114.298572,lng:30.584355,"人数":200},{lat:112.982279,lng:28.19409,"人数":100},{lat:113.280637,lng:23.125178,"人数":300},{lat:110.33119,lng:20.031971,"人数":800},{lat:104.065735,lng:30.659462,"人数":700},{lat:108.948024,lng:34.263161,"人数":300},{lat:103.823557,lng:36.058039,"人数":500}]}}},methods:{getData:function(){var t=this;new o.a(function(t,a){t(Object(n.l)().then(function(t){return t.data}))}).then(function(a){t.scl90history=a,t.listLoading=!1;var e=0,r=0,s=0,o=0,n=0,i=0,c=0,p=0,b=0,d=0,u=0,m=0,h=0,v=0,F=0,g=0,w=0,_=0,f=0,y=0,x=!0,I=!1,C=void 0;try{for(var D,S=l()(a);!(x=(D=S.next()).done);x=!0){var k=D.value;if(e+=parseInt(k.somatization),r+=parseInt(k.obsessive),s+=parseInt(k.interpersonal),o+=parseInt(k.depression),n+=parseInt(k.anxiety),i+=parseInt(k.hostility),c+=parseInt(k.phobic),p+=parseInt(k.paranoid),b+=parseInt(k.psychoticism),parseInt(k.sumscore)>=160)switch(1===parseInt(k.user.sex)?d+=1:u+=1,1===parseInt(k.user.marriage)?m+=1:h+=1,parseInt(k.user.salary)){case 1:v+=1;break;case 2:F+=1;break;case 3:g+=1;break;case 4:w+=1;break;case 5:_+=1;break;case 6:f+=1;break;case 7:y+=1}}}catch(t){I=!0,C=t}finally{try{!x&&S.return&&S.return()}finally{if(I)throw C}}var N=[{"类别":"测试用户平均值",F1:e=(e/(12*a.length)).toFixed(2),F2:r=(r/(10*a.length)).toFixed(2),F3:s=(s/(9*a.length)).toFixed(2),F4:o=(o/(13*a.length)).toFixed(2),F5:n=(n/(10*a.length)).toFixed(2),F6:i=(i/(6*a.length)).toFixed(2),F7:c=(c/(7*a.length)).toFixed(2),F8:p=(p/(6*a.length)).toFixed(2),F9:b=(b/(10*a.length)).toFixed(2)},{"类别":"常模",F1:1.37,F2:1.62,F3:1.65,F4:1.5,F5:1.39,F6:1.48,F7:1.23,F8:1.43,F9:1.29},{"类别":"正常值",F1:1,F2:1,F3:1,F4:1,F5:1,F6:1,F7:1,F8:1,F9:1}],E=!0,O=!1,j=void 0;try{for(var L,M=l()(N);!(E=(L=M.next()).done);E=!0){var z=L.value;t.radarchartData.rows.push(z)}}catch(t){O=!0,j=t}finally{try{!E&&M.return&&M.return()}finally{if(O)throw j}}var V=[{"人群":"男","负面情绪倾向人数":d},{"人群":"女","负面情绪倾向人数":u},{"人群":"已婚","负面情绪倾向人数":m},{"人群":"未婚","负面情绪倾向人数":h}],A=!0,R=!1,P=void 0;try{for(var B,W=l()(V);!(A=(B=W.next()).done);A=!0){var $=B.value;t.pieChartData.rows.push($)}}catch(t){R=!0,P=t}finally{try{!A&&W.return&&W.return()}finally{if(R)throw P}}var q=[{"收入情况":"1000元以下","人数":v},{"收入情况":"1000-1999元","人数":F},{"收入情况":"2000-3999元","人数":g},{"收入情况":"4000-5999元","人数":w},{"收入情况":"6000-9999元","人数":_},{"收入情况":"10000-19999元","人数":f},{"收入情况":"200000元以上","人数":y}],J=!0,T=!1,U=void 0;try{for(var G,H=l()(q);!(J=(G=H.next()).done);J=!0){var K=G.value;t.ringChartData.rows.push(K)}}catch(t){T=!0,U=t}finally{try{!J&&H.return&&H.return()}finally{if(T)throw U}}t.sex_relevance="0.732(60%-75%概率相关)",t.marriage_relevance="0.703(60%-75%概率相关)",t.age_relevance="0.547(50%-60%概率相关)",t.salary_relevance="0.421(低于50%概率相关)"})},tableRowName:function(t){var a=t.row,e=(t.rowIndex,"");return parseInt(a.sumscore)>160&&(e+="warning-sum-row "),(parseInt(a.somatization)/10).toFixed(2)>1.37&&(e+="warning-somatization-row "),(parseInt(a.obsessive)/10).toFixed(2)>1.62&&(e+="warning-obsessive-row "),(parseInt(a.interpersonal)/9).toFixed(2)>1.65&&(e+="warning-interpersonal-row "),(parseInt(a.depression)/13).toFixed(2)>1.5&&(e+="warning-depression-row "),(parseInt(a.anxiety)/10).toFixed(2)>1.39&&(e+="warning-anxiety-row "),(parseInt(a.hostility)/6).toFixed(2)>1.48&&(e+="warning-hostility-row "),(parseInt(a.phobic)/7).toFixed(2)>1.23&&(e+="warning-phobic-row "),(parseInt(a.paranoid)/6).toFixed(2)>1.43&&(e+="warning-paranoid-row "),(parseInt(a.psychoticism)/10).toFixed(2)>1.29&&(e+="warning-psychoticism-row "),e},calculateAverage:function(t){var a=t.columns,e=t.data,r=[];return a.forEach(function(t,a){if(0!==a){var l=e.map(function(a){return Number(a[t.property])});l.every(function(t){return isNaN(t)})?r[a]="--":(r[a]=l.reduce(function(t,a){var e=Number(a);return isNaN(e)?t:t+a},0),r[a]=(r[a]/e.length).toFixed(3))}else r[a]="平均值"}),r},handleExamine:function(t,a){var e=this;this.ExamineDialogVisible=!0,this.username=a.user.username,this.userId=a.user.id;var r=[];r.push(a.user),this.userInfo=r;var l={userid:parseInt(a.user.id)};Object(n.q)(l).then(function(t){e.userscl90history=t.data})},dateformatter:function(t,a){return Object(i.a)(t,a)},formatSex:function(t,a){return Object(i.d)(t,a)},formatSalary:function(t,a){return Object(i.c)(t,a)},formatMarriage:function(t,a){return Object(i.b)(t,a)},formatWork:function(t,a){return Object(i.e)(t,a)}},mounted:function(){this.getData()}}),p={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"scl90history"},[e("div",{staticClass:"crumbs"},[e("el-breadcrumb",{attrs:{separator:"/"}},[e("el-breadcrumb-item",[e("i",{staticClass:"el-icon-time"}),t._v(" 历史记录")]),t._v(" "),e("el-breadcrumb-item",[t._v("SCL90历史记录")])],1)],1),t._v(" "),e("section",{staticClass:"sextion-1"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:11}},[e("el-card",{staticClass:"box-card",staticStyle:{overflow:"auto"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.scl90history,height:"460",width:"95%","summary-method":t.calculateAverage,"show-summary":"","highlight-current-row":"",border:"","row-class-name":t.tableRowName}},[e("el-table-column",{attrs:{prop:"id",label:"序号",width:"80",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"user.id",label:"测试者ID",width:"80",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:"测试时间",width:"160",formatter:t.dateformatter,sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"sumscore",label:"总评分",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"posSymptomCount",label:"阳性回答数",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"posSymptomAvgscore",label:"阳性回答均分",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"somatization",label:"躯体化F1",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"obsessive",label:"强迫症状F2",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"interpersonal",label:"人际关系敏感F3",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"depression",label:"抑郁F4",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"anxiety",label:"焦虑F5",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"hostility",label:"敌对F6",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"phobic",label:"恐怖F7",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"paranoid",label:"偏执F8",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"psychoticism",label:"精神病性F9",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{label:"操作",width:"70",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{size:"small",type:"text"},on:{click:function(e){return t.handleExamine(a.$index,a.row)}}},[t._v("历史记录")])]}}])})],1)],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-card",{staticClass:"box-card"},[e("ve-radar",{attrs:{data:t.radarchartData,settings:t.radarChartSettings,height:"400px"}}),t._v(" "),e("span",[t._v("9种症状评分雷达图")])],1)],1)],1)],1),t._v(" "),e("section",{staticClass:"section-2"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:11}},[e("el-card",{staticClass:"box-card"},[e("ve-pie",{attrs:{data:t.pieChartData,settings:t.pieChartSettings}}),t._v(" "),e("span",[t._v("有明显负面情绪倾向人群的性别、婚姻情况分布")]),t._v(" "),e("p",[t._v("性别关联度:"+t._s(t.sex_relevance))]),t._v(" "),e("p",[t._v("是否已婚关联度:"+t._s(t.marriage_relevance))])],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-card",{staticClass:"box-card"},[e("ve-histogram",{attrs:{data:t.histogramData}}),t._v(" "),e("span",[t._v("有负面情绪倾向人群的年龄统计")]),t._v(" "),e("p",[t._v("年龄关联度:"+t._s(t.age_relevance))])],1)],1)],1)],1),t._v(" "),e("section",{staticClass:"section-3"},[e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{span:11}},[e("el-card",{staticClass:"box-card"},[e("ve-ring",{attrs:{data:t.ringChartData}}),t._v(" "),e("span",[t._v("有明显负面情绪倾向人群的收入分布")]),t._v(" "),e("p",[t._v("收入关联度:"+t._s(t.salary_relevance))])],1)],1),t._v(" "),e("el-col",{attrs:{span:11}},[e("el-card",{staticClass:"box-card"},[e("ve-heatmap",{attrs:{data:t.heatMapChartData,settings:t.heatMapChartSettings}}),t._v(" "),e("span",[t._v("有明显负面情绪倾向人群的地区分布")])],1)],1)],1)],1),t._v(" "),e("el-dialog",{attrs:{title:"历史记录",visible:t.ExamineDialogVisible,width:"50%"},on:{"update:visible":function(a){t.ExamineDialogVisible=a}}},[e("p",{staticStyle:{margin:"20px 0"}},[t._v("用户名: "+t._s(t.username)+" (ID:"+t._s(t.userId)+") 的历史记录")]),t._v(" "),e("div",{staticClass:"userInfoTable",staticStyle:{"margin-bottom":"20px"}},[e("el-table",{attrs:{data:t.userInfo,border:"",width:"100%"}},[e("el-table-column",{attrs:{prop:"age",label:"年龄",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"sex",label:"性别",formatter:t.formatSex,width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"location",label:"地区"}}),t._v(" "),e("el-table-column",{attrs:{prop:"salary",label:"薪资",formatter:t.formatSalary,width:"120"}}),t._v(" "),e("el-table-column",{attrs:{prop:"work",label:"从事行业",formatter:t.formatWork}}),t._v(" "),e("el-table-column",{attrs:{prop:"marriage",label:"是否已婚",formatter:t.formatMarriage,width:"80"}})],1)],1),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.userscl90history,"max-height":"300",border:"",width:"100%","row-class-name":t.tableRowName}},[e("el-table-column",{attrs:{prop:"id",label:"序号",width:"80",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"userid",label:"测试者ID",width:"80"}}),t._v(" "),e("el-table-column",{attrs:{prop:"time",label:"测试时间",formatter:t.dateformatter,sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"sumscore",label:"总评分",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"posSymptomCount",label:"阳性回答数",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"posSymptomAvgscore",label:"阳性回答均分",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"somatization",label:"躯体化",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"obsessive",label:"强迫症状",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"interpersonal",label:"人际关系敏感",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"depression",label:"抑郁",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"anxiety",label:"焦虑",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"hostility",label:"敌对",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"phobic",label:"恐怖",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"paranoid",label:"偏执",width:"90",sortable:""}}),t._v(" "),e("el-table-column",{attrs:{prop:"psychoticism",label:"精神病性",width:"90",sortable:""}})],1)],1),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:function(a){t.ExamineDialogVisible=!1}}},[t._v("关闭")])],1)])],1)},staticRenderFns:[]};var b=e("VU/8")(c,p,!1,function(t){e("p82y"),e("w8ks")},"data-v-320f56c2",null);a.default=b.exports},w8ks:function(t,a){}});
//# sourceMappingURL=9.3d97bd33bbba36a03092.js.map