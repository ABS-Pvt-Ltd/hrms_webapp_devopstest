import{S as P}from"./Service-a2d19084.js";import{d as i,e as c,f as e,m as a,F as j,l as W,t as l,g as t,r as h,y as J,D as k,o as E,b as f,k as n,h as L,n as T,J as q,i as V,w as Q,L as z,_ as K,E as G,G as X,j as Z}from"./app-e1ab7da0.js";import"./moment-fbc5633a.js";import{u as B}from"./LeaveModuleService-22be0d8f.js";import{_ as ee}from"./LeaveApply-00f6c167.js";import{d as w}from"./dayjs.min-ac6c82aa.js";import"./LeaveApply.vue_vue_type_style_index_0_lang-f8d3a9c8.js";import{L as te}from"./LoadingSpinner-1df67a25.js";import"./index.esm-8509f6bf.js";/* empty css                                                                       */const ae={class:"mb-3 card"},se={class:"card-body"},le={class:"mb-2 row"},oe=e("div",{class:"col-sm-6 col-xl-6 col-md-6 col-lg-6"},[e("span",{class:"font-semibold text-[14px] text-[#000] font-['Poppins]"},"Leave balance")],-1),ne={class:"col-6 justify-content-end d-flex"},de={class:"grid gap-4 md:grid-cols-4 sm:grid-cols-1 xxl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5",style:{display:"grid"}},ie={class:"my-1 lg:text-[12px] font-semibold text-center md:text-[10px] xl:text-[13px]"},re={class:"my-1 text-xl font-semibold text-center"},ce={key:0,class:"text-lg font-semibold"},_e={key:1,class:"text-lg font-semibold"},pe={class:"card"},me={class:"card-body"},ue=e("span",{class:"font-semibold text-[14px] text-[#000] font-['Poppins]"},"Leave Availed",-1),ve={class:"grid gap-4 md:grid-cols-4 sm:grid-cols-1 xxl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-5",style:{display:"grid"}},he={class:"text-center"},fe={class:"my-1 lg:text-[12px] font-semibold text-center md:text-[10px] xl:text-[13px]"},ye={class:"my-1 text-xl font-semibold text-center"},ge={key:0,class:"text-lg font-semibold"},xe={key:1,class:"text-lg font-semibold"},be={__name:"EmployeeLeaveBalance",setup(M){const s=B();return(v,S)=>(i(),c(j,null,[e("div",ae,[e("div",se,[e("div",le,[oe,e("div",ne,[a(ee)])]),e("div",de,[(i(!0),c(j,null,W(t(s).array_employeeLeaveBalance,x=>(i(),c("div",{key:x,class:"p-1 my-2 rounded-lg border bg-gray-100 hover:bg-slate-100 cursor-pointer"},[e("p",ie,l(x.leave_type),1),e("p",re,[x.leave_balance==""?(i(),c("span",ce,"0")):(i(),c("span",_e,l(x.leave_balance),1))])]))),128))])])]),e("div",pe,[e("div",me,[ue,e("div",ve,[(i(!0),c(j,null,W(t(s).array_employeeLeaveBalance,x=>(i(),c("div",{class:"bg-gray-100 border-l-4 border-indigo-300 p-1 rounded-lg border my-2 cursor-pointer hover:bg-slate-100",key:x},[e("div",he,[e("p",fe,l(x.leave_type),1),e("p",ye,[x.availed_leaves==""?(i(),c("span",ge,"0")):(i(),c("span",xe,l(x.availed_leaves),1))])])]))),128))])])])],64))}},we={class:"mt-3 row"},Le={class:"col-sm-12 col-xl-12 col-md-12 col-lg-12"},$e={class:"mb-0 card leave-history"},De={class:"card-body"},Se={class:"flex justify-between"},ke=e("div",null,[e("span",{class:"font-semibold text-[14px] text-[#000] font-['Poppins] mb-4"}," Leave history ")],-1),Ce={class:"mb-2 flex justify-end items-end gap-0"},Te=e("p",{class:"font-medium text-end font-['poppins'] text-[16px]"},"Select Month",-1),Ae={class:"table-responsive"},Re={key:0},Me={key:1},Oe={key:0},Ve={key:1},je={class:"flex justify-start"},Ue={key:1},Ye={class:"flex justify-center"},Ne=["onClick"],Be=e("i",{class:"pi pi-eye"},null,-1),Ee=[Be],Fe={class:"w-full"},Pe={class:"w-full"},Ie={class:"w-full border rounded-lg"},We={class:"p-3 pl-5 border d-flex align-items-center"},He={class:"bg-yellow-100 shadow-sm rounded-circle d-flex justify-content-center align-items-center",style:{width:"80px",height:"80px"}},Je={class:"text-3xl font-semibold"},qe={class:"ml-5"},Qe={class:"text-lg font-semibold"},ze={class:"fs-6 text-neutral-400"},Ke={class:"w-full px-4 py-4 border d-flex"},Ge={class:"p-1 mx-2 rounded-lg"},Xe={class:"px-2 py-1 text-center text-light rounded-top fw-bold",style:{"background-color":"navy"}},Ze={class:"px-2 py-1 text-center fs-5 fw-bold"},et={class:"px-2 py-1 text-center fs-6 fw-bold"},tt={class:"py-3"},at={class:"text-lg font-semibold text-primary-800"},st={class:"text-xs font-semibold"},lt={class:"w-full px-4 py-4 border"},ot=e("h1",{class:"text-lg font-semibold"},"Notified To:",-1),nt={class:"px-3 py-2 mt-3 card d-flex",style:{"min-width":"250px","max-width":"300px",display:"flex"}},dt={class:"p-2 d-flex align-items-center"},it={class:"bg-blue-100 rounded-circle d-flex justify-content-center align-items-center",style:{width:"40px",height:"40px"}},rt={class:"px-3 flex-column"},ct={class:"fs-6 fw-bold"},_t={class:"py-2 text-neutral-400"},pt={class:"w-full px-4 py-4 border"},mt=e("h1",{class:"text-lg font-semibold"},"Approved by",-1),ut={class:"px-3 py-2 mt-3 card d-flex",style:{"min-width":"180px","max-width":"300px",display:"flex"}},vt={class:"p-2 d-flex align-items-center"},ht=e("div",{class:"bg-green-400 rounded-circle d-flex justify-content-center align-items-center",style:{width:"40px",height:"40px"}},[e("i",{class:"pi pi-check text-light"})],-1),ft={class:"px-3 flex-column"},yt={class:"fs-6 fw-bold"},gt={class:"py-2 text-neutral-400"},xt={class:"mx-3 my-4"},bt={class:"mx-4 my-4 text-end"},wt=e("div",{class:"bg-[#000] w-[100%] h-[60px] absolute top-0 left-0"},[e("h1",{class:"m-4 text-[#ffff] font-['poppins] font-semibold"},"Leave Request Details")],-1),Lt={class:"flex items-center mt-6"},$t=e("img",{src:"",alt:"",class:"rounded-full"},null,-1),Dt={class:"bg-blue-200 w-[40px] h-[40px] rounded-full mr-4 ml-2 flex items-center justify-center"},St={class:"flex flex-col items-center justify-center"},kt={class:"font-semibold"},Ct={class:"grid grid-cols-3 gap-2 p-2 my-2 mx-2 bg-gray-200 rounded-md"},Tt={class:"flex flex-col"},At=e("b",null,"Leave Type",-1),Rt={class:"flex flex-col"},Mt=e("b",null,"Start Date",-1),Ot={class:"flex flex-col"},Vt=e("b",null,"End Date",-1),jt={class:"flex flex-col"},Ut=e("b",null,"Total Leave Days",-1),Yt={class:"flex flex-col"},Nt=e("b",null,"Status",-1),Bt={class:"my-2 p-2 h-[60px]"},Et=e("b",null,"Leave Reason",-1),Ft={class:"p-2 my-2"},Pt=e("b",null,"Notified to",-1),It={class:"flex items-center mt-2"},Wt=e("img",{src:"",alt:"",class:"rounded-full"},null,-1),Ht={class:"bg-orange-200 w-[40px] h-[40px] rounded-full mr-4 flex items-center justify-center"},Jt={class:"flex flex-col items-center justify-center"},qt={class:"font-semibold"},Qt=e("p",null,"-",-1),zt={key:0,class:"flex flex-col p-2"},Kt=e("b",null,"Comments",-1),Gt={class:"flex justify-center items-center mt-[50px]"},Xt={__name:"EmployeeLeaveDetails",setup(M){const s=B(),v=h(!0),S=J(),x=h(),y=h(),O=m=>{x.value.toggle(m)};h(!0);const A=m=>{switch(m){case"Rejected":return"danger";case"Approved":return"success";case"Pending":return"warning";case"Withdrawn":return"info"}},R=h({global:{value:null,matchMode:k.CONTAINS},employee_name:{value:null,matchMode:k.STARTS_WITH,matchMode:k.EQUALS,matchMode:k.CONTAINS},status:{value:null,matchMode:k.EQUALS}}),b=h(["Pending","Approved","Rejected","Withdrawn"]);E(async()=>{await s.getEmployeeLeaveHistory(w().month()+1,w().year(),["Approved","Pending","Rejected","Withdrawn"]),v.value=!1,y.value=new Date});function _(m,r){S.add({severity:m,summary:r,life:3e3})}return(m,r)=>{const g=f("Calendar"),D=f("Column"),U=f("OverlayPanel"),Y=f("Tag"),N=f("Dropdown"),d=f("DataTable"),o=f("Textarea"),u=f("Dialog"),$=f("Toast"),H=f("Sidebar");return i(),c(j,null,[a(be),e("div",we,[e("div",Le,[e("div",$e,[e("div",De,[e("div",Se,[ke,e("div",Ce,[Te,a(g,{view:"month",dateFormat:"MM-yy",class:"mx-4 border-[#535353] border-[1px] w-[200px]",modelValue:y.value,"onUpdate:modelValue":r[0]||(r[0]=p=>y.value=p),style:{"border-radius":"7px",height:"30px"},onDateSelect:r[1]||(r[1]=p=>(t(s).getEmployeeLeaveHistory(y.value.getMonth()+1,y.value.getFullYear(),b.value),t(s).canShowLoading=!0))},null,8,["modelValue"])])]),e("div",Ae,[a(d,{value:t(s).array_employeeLeaveHistory,paginator:!0,rows:5,dataKey:"id",rowsPerPageOptions:[5,10,25],paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",responsiveLayout:"scroll",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}",filters:R.value,"onUpdate:filters":r[2]||(r[2]=p=>R.value=p),filterDisplay:"menu",globalFilterFields:["name","status"]},{empty:n(()=>[L(" No Employee data..... ")]),default:n(()=>[a(D,{field:"leave_type",header:"Leave Type",style:{"min-width":"14rem"}}),a(D,{field:"start_date",header:"Start Date",style:{"min-width":"8rem"}},{body:n(p=>[L(l(t(w)(p.data.start_date).format("DD-MMM-YYYY")),1)]),_:1}),a(D,{field:"end_date",header:"End Date",dataType:"date",style:{"min-width":"8rem"}},{body:n(p=>[L(l(t(w)(p.data.end_date).format("DD-MMM-YYYY")),1)]),_:1}),a(D,{field:"leave_reason",header:"Leave Reason",style:{"min-width":"12rem"}},{body:n(p=>[p.data.leave_reason&&p.data.leave_reason.length>70?(i(),c("div",Re,[e("p",{onClick:O,class:"font-medium text-orange-400 underline cursor-pointer"}," explore more... "),a(U,{ref_key:"overlayPanel",ref:x,style:{height:"80px"}},{default:n(()=>[L(l(p.data.leave_reason),1)]),_:2},1536)])):(i(),c("div",Me,l(p.data.leave_reason??""),1))]),_:1}),a(D,{field:"reviewer_name",header:"Approver Name"}),a(D,{field:"reviewer_comments",header:"Comments",style:{"min-width":"10em"}},{body:n(p=>[p.data.reviewer_comments.length>70?(i(),c("div",Oe,[e("p",{onClick:O,class:"font-medium text-orange-400 underline cursor-pointer"},"explore more... "),a(U,{ref_key:"overlayPanel",ref:x,style:{height:"80px"}},{default:n(()=>[L(l(p.data.reviewer_comments),1)]),_:2},1536)])):(i(),c("div",Ve,l(p.data.reviewer_comments.length>0?p.data.reviewer_comments:"----"),1))]),_:1}),a(D,{field:"status",header:"Status",class:"",icon:"pi pi-check"},{body:n(({data:p})=>[e("div",je,[a(Y,{value:p.status,severity:A(p.status)},null,8,["value","severity"])])]),filter:n(({filterModel:p,filterCallback:I})=>[a(N,{modelValue:p.value,"onUpdate:modelValue":C=>p.value=C,onChange:C=>I(),options:b.value,placeholder:"Select",class:"p-column-filter",showClear:!0},{value:n(C=>[C.value?(i(),c("span",{key:0,class:T("customer-badge status-"+C.value)},l(C.value),3)):(i(),c("span",Ue,l(C.placeholder),1))]),option:n(C=>[e("span",{class:T("customer-badge status-"+C.option)},l(C.option),3)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),a(D,{field:"",header:"Action",style:{"min-width":"15rem"}},{body:n(p=>[e("div",Ye,[e("button",{class:"text-[#000] px-4 py-2 rounded-xl",onClick:I=>t(s).getLeaveDetails(p.data),style:{}},Ee,8,Ne)])]),_:1})]),_:1},8,["value","filters"])])])])])]),a(u,{header:"Header",breakpoints:{"960px":"75vw","640px":"90vw"},style:{width:"50vw",borderTop:"5px solid #002f56"},modal:!0,closable:!0,closeOnEscape:!0},{header:n(()=>[e("div",Fe,[e("h5",{style:q({color:"var(--color-blue)",borderLeft:"3px solid var(--light-orange-color",paddingLeft:"6px"}),class:"text-xl font-semibold"}," Leave Details Request",4)])]),default:n(()=>[e("div",Pe,[e("div",Ie,[e("div",We,[e("div",He,[e("h1",Je,l(t(s).setLeaveDetails.user_short_name),1)]),e("div",qe,[e("h1",Qe,l(t(s).setLeaveDetails.name),1),e("div",null,[e("p",ze,"Requested on "+l(t(s).setLeaveDetails.leaverequest_date),1)])])]),e("div",Ke,[e("div",Ge,[e("h1",Xe,l(t(w)(t(s).setLeaveDetails.end_date).format("MMM")),1),e("h1",Ze,l(t(w)(t(s).setLeaveDetails.end_date).format("DD")),1),e("h1",et,l(t(w)(t(s).setLeaveDetails.end_date).format("dddd")),1)]),e("div",tt,[e("h1",at,[L(l(t(s).setLeaveDetails.total_leave_datetime)+" Day of "+l(t(s).setLeaveDetails.leave_type)+" ",1),e("span",st," ("+l(t(s).setLeaveDetails.leave_reason)+") ",1)])])]),e("div",lt,[ot,e("div",nt,[e("div",dt,[e("div",it,l(t(s).setLeaveDetails.reviewer_short_name),1),e("div",rt,[e("h1",ct,l(t(s).setLeaveDetails.reviewer_name),1),e("h1",_t,l(t(s).setLeaveDetails.reviewer_designation),1)])])])]),e("div",pt,[mt,e("div",ut,[e("div",vt,[ht,e("div",ft,[e("h1",yt,l(t(s).setLeaveDetails.reviewer_name),1),e("h1",gt," on "+l(t(w)(t(s).setLeaveDetails.leaverequest_date).format("DD-MMM-YYYY hh: mm: ss A")),1)])])])]),e("div",xt,[a(o,{name:"",id:"",cols:"70",rows:"3",autoResize:"",placeholder:"Add Comment"})])])]),e("div",bt,[t(s).setLeaveDetails.can_withdraw_leave!==null&&t(s).setLeaveDetails.can_withdraw_leave?(i(),c("button",{key:0,class:"px-5 mx-2 btn btn-orange",onClick:r[3]||(r[3]=p=>t(s).performLeaveWithdraw(t(s).setLeaveDetails.id))},"Withdraw")):V("",!0),t(s).setLeaveDetails.can_revoke_leave!==null&&t(s).setLeaveDetails.can_revoke_leave?(i(),c("button",{key:1,class:"px-5 mx-2 btn btn-orange",onClick:r[4]||(r[4]=(...p)=>m.Leavehistory_Addcomment_btn&&m.Leavehistory_Addcomment_btn(...p))},"Revoke")):V("",!0),e("button",{class:"px-5 btn btn-orange",onClick:r[5]||(r[5]=(...p)=>m.Leavehistory_Addcomment_btn&&m.Leavehistory_Addcomment_btn(...p))},"Post")])]),_:1}),a(H,{visible:t(s).canShowLeaveDetails,"onUpdate:visible":r[8]||(r[8]=p=>t(s).canShowLeaveDetails=p),position:"right",style:{width:"40vw !important"}},{header:n(()=>[wt]),default:n(()=>[a($),e("div",Lt,[$t,e("div",Dt,l(t(s).setLeaveDetails.user_short_name),1),e("div",St,[e("h1",kt,l(t(s).setLeaveDetails.name),1),e("p",null,l(t(s).setLeaveDetails.user_code),1)])]),e("div",Ct,[e("div",Tt,[At,e("span",null,l(t(s).setLeaveDetails.leave_type),1)]),e("div",Rt,[Mt,e("span",null,l(t(w)(t(s).setLeaveDetails.start_date).format("DD-MMM-YYYY")),1)]),e("div",Ot,[Vt,e("span",null,l(t(w)(t(s).setLeaveDetails.end_date).format("DD-MMM-YYYY")),1)]),e("div",jt,[Ut,e("span",null,l(t(s).setLeaveDetails.total_leave_datetime),1)]),e("div",Yt,[Nt,e("span",null,l(t(s).setLeaveDetails.status),1)])]),e("div",Bt,[Et,e("p",null,l(t(s).setLeaveDetails.leave_reason),1)]),e("div",Ft,[Pt,e("div",It,[Wt,e("div",Ht,l(t(s).setLeaveDetails.reviewer_short_name),1),e("div",Jt,[e("h1",qt,l(t(s).setLeaveDetails.reviewer_name),1),Qt])])]),t(s).setLeaveDetails.status.includes("Pending")?(i(),c("div",zt,[Kt,Q(e("textarea",{"onUpdate:modelValue":r[6]||(r[6]=p=>t(s).withdraw_comment=p),name:"",id:"",cols:"10",rows:"5",class:"mx-2 border-[1px] border-[#000] rounded-lg mt-2 p-2"},null,512),[[z,t(s).withdraw_comment]])])):V("",!0),e("div",Gt,[t(s).setLeaveDetails.can_withdraw_leave!==null&&t(s).setLeaveDetails.can_withdraw_leave?(i(),c("button",{key:0,class:"bg-[#000] text-[#fff] rounded-md font-semibold p-2 mx-2 text-[12px]",onClick:r[7]||(r[7]=p=>t(s).withdraw_comment.length>0?t(s).performLeaveWithdraw(t(s).setLeaveDetails.id):_("info","Comments is required"))},"Withdraw")):V("",!0)])]),_:1},8,["visible"])],64)}}};const F=M=>(G("data-v-2db55f6e"),M=M(),X(),M),Zt={class:"mb-0 card leave-history"},ea={class:"card-body"},ta={class:"my-2 d-flex justify-content-between align-items-center"},aa=F(()=>e("h6",{class:"h-7 mt-3 text-lg font-semibold text-gray-900"},"Org Leave Balance",-1)),sa={class:"mb-2 flex justify-end items-end gap-0"},la=F(()=>e("p",{class:"font-medium text-end font-['poppins'] text-[16px]"},"Select Month",-1)),oa={class:"flex items-center justify-center"},na=["src"],da={class:"pl-2 text-[#000] text-[14px] flex flex-col font-semibold text-left fs-6"},ia={class:"text-[#535353] font-['poppins'] text-[12px] font-normal"},ra={class:"text-[#000] font-normal text-left"},ca={class:"text-[#000] font-normal text-left"},_a={class:"text-[#000] font-normal text-left"},pa={class:"text-[#000] font-normal text-left"},ma={class:"text-[#000] font-normal text-left"},ua={class:"text-left"},va={class:"text-left"},ha={class:"text-left"},fa={class:"text-left"},ya={class:"mt-3 row card"},ga={class:"col-sm-12 col-xl-12 col-md-12 col-lg-12 card-body"},xa={class:"flex justify-between"},ba=F(()=>e("div",null,[e("h6",{class:"mb-4 text-lg font-semibold text-gray-900"},"Org Leave history")],-1)),wa={class:"mb-2 flex justify-end items-end gap-0"},La=F(()=>e("p",{class:"font-medium text-end font-['poppins'] text-[16px]"},"Select Month",-1)),$a={class:"table-responsive"},Da={class:"flex items-center justify-center"},Sa=["src"],ka={class:"pl-2 text-[#000] text-[14px] flex flex-col font-semibold text-left fs-6"},Ca={class:"text-[#535353] font-['poppins'] text-[12px] font-normal"},Ta={key:0},Aa={key:1},Ra={class:"flex justify-start"},Ma={key:1},Oa=["onClick"],Va={__name:"OrgLeaveDetails",setup(M){const s=B(),v=P();h(),h(),h(!0);const S=h(new Date),x=h([]),y=h(),O=h(),A=h({employee_name:{value:null,matchMode:k.STARTS_WITH,matchMode:k.EQUALS,matchMode:k.CONTAINS},status:{value:null,matchMode:k.EQUALS}}),R=_=>{switch(_){case"Rejected":return"danger";case"Approved":return"success";case"Pending":return"warning";case"Withdrawn":return"info"}},b=h(["Pending","Approved","Rejected","Withdrawn"]);return E(async()=>{await s.getOrgLeaveBalance(),await s.getAllEmployeesLeaveHistory(w().month()+1,w().year(),["Approved","Pending","Rejected","Withdrawn"]),console.log("Org Leave details : "+s.array_orgLeaveHistory),O.value=new Date}),(_,m)=>{const r=f("Calendar"),g=f("Column"),D=f("DataTable"),U=f("InputText"),Y=f("OverlayPanel"),N=f("Tag"),d=f("Dropdown");return i(),c(j,null,[e("div",Zt,[e("div",ea,[e("div",ta,[aa,e("div",sa,[la,a(r,{view:"month",dateFormat:"MM-yy",class:"mx-4 border-[#535353] border-[1px] w-[200px]",modelValue:t(s).selectedOrgDate,"onUpdate:modelValue":m[0]||(m[0]=o=>t(s).selectedOrgDate=o),onDateSelect:m[1]||(m[1]=o=>t(s).getOrgLeaveBalFilter()),style:{"border-radius":"7px",height:"30px"}},null,8,["modelValue"])])]),a(D,{value:t(s).array_orgLeaveBalance,paginator:!0,rows:10,dataKey:"user_code",onRowExpand:_.onRowExpand,onRowCollapse:_.onRowCollapse,expandedRows:x.value,"onUpdate:expandedRows":m[3]||(m[3]=o=>x.value=o),selection:y.value,"onUpdate:selection":m[4]||(m[4]=o=>y.value=o),selectAll:_.selectAll,onSelectAllChange:_.onSelectAllChange,onRowSelect:_.onRowSelect,onRowUnselect:_.onRowUnselect,rowsPerPageOptions:[5,10,25],paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",responsiveLayout:"scroll",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{expansion:n(o=>[e("div",null,[a(D,{value:o.data.leave_balance_details,scrollable:"",selection:y.value,"onUpdate:selection":m[2]||(m[2]=u=>y.value=u),selectAll:_.selectAll,onSelectAllChange:_.onSelectAllChange},{default:n(()=>[a(g,{field:"leave_type",class:"",header:"Leave Type"},{body:n(u=>[e("div",null,[e("p",ua,l(u.data.leave_type),1)])]),_:2},1024),a(g,{field:"opening_balance",header:"Opening Balance"},{body:n(u=>[e("div",null,[e("p",va,l(u.data.opening_balance),1)])]),_:2},1024),a(g,{field:"availed",header:"Availed"},{body:n(u=>[e("div",null,[e("p",ha,l(u.data.availed),1)])]),_:2},1024),a(g,{field:"closing_balance",header:"Closing Balance"},{body:n(u=>[e("div",null,[e("p",fa,l(u.data.closing_balance),1)])]),_:2},1024)]),_:2},1032,["value","selection","selectAll","onSelectAllChange"])])]),default:n(()=>[a(g,{style:{width:"1rem !important"},expander:!0}),a(g,{field:"name",header:"Employee Name",class:"",sortable:""},{body:n(o=>[e("div",oa,[JSON.parse(o.data.employee_avatar).type=="shortname"?(i(),c("p",{key:0,class:T(["p-2 font-semibold text-white rounded-full w-11 fs-6",t(v).getBackgroundColor(o.index)])},l(JSON.parse(o.data.employee_avatar).data),3)):(i(),c("img",{key:1,class:"w-10 rounded-circle img-md userActive-status profile-img",style:{height:"30px !important"},src:`data:image/png;base64,${JSON.parse(o.data.employee_avatar).data}`,srcset:"",alt:""},null,8,na)),e("p",da,[L(l(o.data.name)+" ",1),e("span",ia,l(o.data.user_code),1)])])]),_:1}),a(g,{field:"location",header:"Location",sortable:!1},{body:n(o=>[e("p",ra,l(o.data.location),1)]),_:1}),a(g,{field:"department",header:"Department"},{body:n(o=>[e("p",ca,l(o.data.department),1)]),_:1}),a(g,{header:"Total Opening Balance"},{body:n(o=>[e("p",_a,l(o.data.total_opening_balance),1)]),_:1}),a(g,{header:"Total Availed"},{body:n(o=>[e("p",pa,l(o.data.total_avalied_balance),1)]),_:1}),a(g,{field:"total_leave_balance",header:"Total Leave Balance"},{body:n(o=>[e("p",ma,l(o.data.total_leave_balance),1)]),_:1})]),_:1},8,["value","onRowExpand","onRowCollapse","expandedRows","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])]),e("div",ya,[e("div",ga,[e("div",xa,[ba,e("div",wa,[La,a(r,{view:"month",dateFormat:"MM-yy",class:"mx-4 border-[#535353] border-[1px] w-[200px]",modelValue:S.value,"onUpdate:modelValue":m[5]||(m[5]=o=>S.value=o),style:{"border-radius":"7px",height:"30px"},onDateSelect:m[6]||(m[6]=o=>t(s).getAllEmployeesLeaveHistory(S.value.getMonth()+1,S.value.getFullYear(),b.value))},null,8,["modelValue"])])]),e("div",$a,[a(D,{value:t(s).array_orgLeaveHistory,responsiveLayout:"scroll",paginator:!0,rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}",rows:5,filters:A.value,"onUpdate:filters":m[8]||(m[8]=o=>A.value=o),filterDisplay:"menu",globalFilterFields:["name"],style:{"white-space":"nowrap"}},{empty:n(()=>[L(" No Employee data..... ")]),default:n(()=>[a(g,{class:"font-bold",field:"employee_name",header:"Employee Name"},{body:n(o=>[e("div",Da,[JSON.parse(o.data.employee_avatar).type=="shortname"?(i(),c("p",{key:0,class:T(["p-2 font-semibold text-white rounded-full w-11 fs-6",t(v).getBackgroundColor(o.index)])},l(JSON.parse(o.data.employee_avatar).data),3)):(i(),c("img",{key:1,class:"w-10 rounded-circle img-md userActive-status profile-img",style:{height:"30px !important"},src:`data:image/png;base64,${JSON.parse(o.data.employee_avatar).data}`,srcset:"",alt:""},null,8,Sa)),e("p",ka,[L(l(o.data.employee_name)+" ",1),e("span",Ca,l(o.data.user_code),1)])])]),filter:n(({filterModel:o,filterCallback:u})=>[a(U,{modelValue:o.value,"onUpdate:modelValue":$=>o.value=$,onInput:$=>u(),placeholder:"Search",class:"p-column-filter",showClear:!0},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),a(g,{field:"leave_type",header:"Leave Type"}),a(g,{field:"start_date",header:"Start Date"},{body:n(o=>[L(l(t(w)(o.data.start_date).format("DD-MMM-YYYY , h:MM A"))+" ",1)]),_:1}),a(g,{field:"end_date",header:"End Date"},{body:n(o=>[L(l(t(w)(o.data.end_date).format("DD-MMM-YYYY")),1)]),_:1}),a(g,{field:"total_leave_datetime",header:"Total Leave Days"}),a(g,{field:"leave_reason",header:"Leave Reason"},{body:n(o=>[o.data.leave_reason&&o.data.leave_reason.length>70?(i(),c("div",Ta,[e("p",{onClick:m[7]||(m[7]=(...u)=>_.toggle&&_.toggle(...u)),class:"font-medium text-orange-400 underline cursor-pointer"}," More... "),a(Y,{ref:"overlayPanel",style:{height:"80px"}},{default:n(()=>[L(l(o.data.leave_reason),1)]),_:2},1536)])):(i(),c("div",Aa,l(o.data.leave_reason??""),1))]),_:1}),a(g,{field:"status",header:"Status"},{body:n(({data:o})=>[e("div",Ra,[a(N,{value:o.status,severity:R(o.status)},null,8,["value","severity"])])]),filter:n(({filterModel:o,filterCallback:u})=>[a(d,{modelValue:o.value,"onUpdate:modelValue":$=>o.value=$,onChange:$=>u(),options:b.value,placeholder:"Select",class:"p-column-filter",showClear:!0},{value:n($=>[$.value?(i(),c("span",{key:0,class:T("customer-badge status-"+$.value)},l($.value),3)):(i(),c("span",Ma,l($.placeholder),1))]),option:n($=>[e("span",{class:T("customer-badge status-"+$.option)},l($.option),3)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),a(g,{field:"",header:"Action",style:{"min-width":"15rem"}},{body:n(o=>[e("i",{class:"pi pi-eye",onClick:u=>t(s).getLeaveDetails(o.data)},null,8,Oa)]),_:1})]),_:1},8,["value","filters"])])])])],64)}}},ja=K(Va,[["__scopeId","data-v-2db55f6e"]]),Ua={class:"card"},Ya={class:"card-body"},Na={class:"row"},Ba={class:"col-sm-12 col-xl-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center"},Ea=e("h6",{class:"mb-4 text-lg font-semibold text-gray-900"},"Team Leave Balance",-1),Fa={class:"my-2 d-flex justify-content-between align-items-center"},Pa=e("div",null,null,-1),Ia={class:"mb-2 flex justify-end items-end gap-0"},Wa=e("p",{class:"font-medium text-end font-['poppins'] text-[16px]"},"Select Month",-1),Ha={class:"flex items-center justify-center"},Ja=["src"],qa={class:"pl-2 text-[#000] text-[14px] flex flex-col font-semibold text-left fs-6"},Qa={class:"text-[#535353] font-['poppins'] text-[12px] font-normal"},za={class:"text-[#000] font-normal"},Ka={class:"text-[#000] font-normal"},Ga={class:"text-start"},Xa={class:"mt-3 row"},Za={class:"col-sm-12 col-xl-12 col-md-12 col-lg-12"},es={class:"mb-0 card leave-history"},ts={class:"card-body"},as={class:"flex justify-between"},ss=e("div",null,[e("h6",{class:"mb-4 text-lg font-semibold text-gray-900"},"Team Leave history")],-1),ls={class:"mb-2 flex justify-end items-end gap-0"},os=e("p",{class:"font-medium text-end font-['poppins'] text-[16px]"},"Select Month",-1),ns={class:"table-responsive"},ds={class:"flex items-center justify-center"},is=["src"],rs={class:"pl-2 text-[#000] text-[14px] flex flex-col font-semibold text-left fs-6"},cs={class:"text-[#535353] font-['poppins'] text-[12px] font-normal"},_s={key:0},ps={key:1},ms={class:"flex justify-start"},us={key:1},vs=["onClick"],hs={__name:"TeamLeaveDetails",setup(M){const s=P(),v=B();h(),h(),h(),h(),h(),h(!0),h();const S=h([]),x=h(),y=h(),O=b=>{switch(b){case"Rejected":return"danger";case"Approved":return"success";case"Pending":return"warning";case"Withdrawn":return"info"}},A=h({employee_name:{value:null,matchMode:k.STARTS_WITH,matchMode:k.EQUALS,matchMode:k.CONTAINS},status:{value:null,matchMode:k.EQUALS}}),R=h(["Pending","Approved","Rejected","Withdrawn"]);return E(async()=>{await v.getTermLeaveBalance(),await v.getTeamLeaveHistory(w().month()+1,w().year(),["Approved","Pending","Rejected","Withdrawn"]),v.selectedTeamDate=new Date,y.value=new Date}),(b,_)=>{const m=f("Calendar"),r=f("Column"),g=f("DataTable"),D=f("InputText"),U=f("OverlayPanel"),Y=f("Tag"),N=f("Dropdown");return i(),c(j,null,[e("div",Ua,[e("div",Ya,[e("div",Na,[e("div",Ba,[Ea,e("div",Fa,[Pa,e("div",Ia,[Wa,a(m,{view:"month",dateFormat:"MM-yy",class:"mx-4 border-[#535353] border-[1px] w-[200px]",modelValue:t(v).selectedTeamDate,"onUpdate:modelValue":_[0]||(_[0]=d=>t(v).selectedTeamDate=d),style:{"border-radius":"7px",height:"30px"},onDateSelect:_[1]||(_[1]=d=>t(v).getTeamLeaveBalFilter())},null,8,["modelValue"])])])]),e("div",null,[a(g,{value:t(v).arrayTermLeaveBalance,paginator:!0,rows:10,class:"",dataKey:"user_code",onRowExpand:b.onRowExpand,onRowCollapse:b.onRowCollapse,expandedRows:S.value,"onUpdate:expandedRows":_[3]||(_[3]=d=>S.value=d),selection:x.value,"onUpdate:selection":_[4]||(_[4]=d=>x.value=d),selectAll:b.selectAll,onSelectAllChange:b.onSelectAllChange,onRowSelect:b.onRowSelect,onRowUnselect:b.onRowUnselect,rowsPerPageOptions:[5,10,25],paginatorTemplate:"CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown",responsiveLayout:"scroll",currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}"},{expansion:n(d=>[e("div",null,[a(g,{value:d.data.leave_balance_details,responsiveLayout:"scroll",selection:x.value,"onUpdate:selection":_[2]||(_[2]=o=>x.value=o),selectAll:b.selectAll,onSelectAllChange:b.onSelectAllChange},{default:n(()=>[a(r,{field:"leave_type",header:"Leave Type"},{default:n(()=>[e("p",Ga,l(d.data.leave_type),1)]),_:2},1024),a(r,{field:"opening_balance",header:"Opening Balance"}),a(r,{field:"availed",header:"Availed"}),a(r,{field:"closing_balance",header:"Closing Balance"})]),_:2},1032,["value","selection","selectAll","onSelectAllChange"])])]),default:n(()=>[a(r,{style:{width:"1rem !important"},expander:!0}),a(r,{field:"name",header:"Employee Name",sortable:""},{body:n(d=>[e("div",Ha,[JSON.parse(d.data.employee_avatar).type=="shortname"?(i(),c("p",{key:0,class:T(["p-2 font-semibold text-white rounded-full w-11 fs-6",t(s).getBackgroundColor(d.index)])},l(JSON.parse(d.data.employee_avatar).data),3)):(i(),c("img",{key:1,class:"w-10 rounded-circle img-md userActive-status profile-img",style:{height:"30px !important"},src:`data:image/png;base64,${JSON.parse(d.data.employee_avatar).data}`,srcset:"",alt:""},null,8,Ja)),e("p",qa,[L(l(d.data.name)+" ",1),e("span",Qa,l(d.data.user_code),1)])])]),_:1}),a(r,{field:"location",header:"Location",sortable:!1}),a(r,{field:"department",header:"Department"}),a(r,{header:"Total Opening Balance"},{body:n(d=>[e("p",za,l(d.data.total_opening_balance),1)]),_:1}),a(r,{header:"Total Availed"},{body:n(d=>[e("p",Ka,l(d.data.total_avalied_balance),1)]),_:1}),a(r,{field:"total_leave_balance",header:"Total Leave Balance",style:{"min-width":"18em"}})]),_:1},8,["value","onRowExpand","onRowCollapse","expandedRows","selection","selectAll","onSelectAllChange","onRowSelect","onRowUnselect"])])])])]),e("div",Xa,[e("div",Za,[e("div",es,[e("div",ts,[e("div",as,[ss,e("div",ls,[os,a(m,{view:"month",dateFormat:"MM-yy",class:"mx-4 border-[#535353] border-[1px] w-[200px]",modelValue:y.value,"onUpdate:modelValue":_[5]||(_[5]=d=>y.value=d),style:{"border-radius":"7px",height:"30px"},onDateSelect:_[6]||(_[6]=d=>(t(v).getTeamLeaveHistory(y.value.getMonth()+1,y.value.getFullYear(),R.value),t(v).canShowLoading=!0))},null,8,["modelValue"])])]),e("div",ns,[a(g,{value:t(v).array_teamLeaveHistory,responsiveLayout:"scroll",paginator:!0,rowsPerPageOptions:[5,10,25],currentPageReportTemplate:"Showing {first} to {last} of {totalRecords}",rows:5,filters:A.value,"onUpdate:filters":_[8]||(_[8]=d=>A.value=d),filterDisplay:"menu",globalFilterFields:["name"],style:{"white-space":"nowrap"}},{empty:n(()=>[L(" No Employee data..... ")]),default:n(()=>[a(r,{class:"font-bold",field:"employee_name",header:"Employee Name"},{body:n(d=>[e("div",ds,[JSON.parse(d.data.employee_avatar).type=="shortname"?(i(),c("p",{key:0,class:T(["p-2 font-semibold text-white rounded-full w-11 fs-6",t(s).getBackgroundColor(d.index)])},l(JSON.parse(d.data.employee_avatar).data),3)):(i(),c("img",{key:1,class:"w-10 rounded-circle img-md userActive-status profile-img",style:{height:"30px !important"},src:`data:image/png;base64,${JSON.parse(d.data.employee_avatar).data}`,srcset:"",alt:""},null,8,is)),e("p",rs,[L(l(d.data.employee_name)+" ",1),e("span",cs,l(d.data.user_code),1)])])]),filter:n(({filterModel:d,filterCallback:o})=>[a(D,{modelValue:d.value,"onUpdate:modelValue":u=>d.value=u,onInput:u=>o(),placeholder:"Search",class:"p-column-filter",showClear:!0},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),a(r,{field:"leave_type",header:"Leave Type"}),a(r,{field:"start_date",header:"Start Date"},{body:n(d=>[L(l(t(w)(d.data.start_date).format("DD-MMM-YYYY")),1)]),_:1}),a(r,{field:"end_date",header:"End Date"},{body:n(d=>[L(l(t(w)(d.data.end_date).format("DD-MMM-YYYY")),1)]),_:1}),a(r,{field:"total_leave_datetime",header:"Total Leave Days"}),a(r,{field:"leave_reason",header:"Leave Reason"},{body:n(d=>[d.data.leave_reason&&d.data.leave_reason.length>70?(i(),c("div",_s,[e("p",{onClick:_[7]||(_[7]=(...o)=>b.toggle&&b.toggle(...o)),class:"font-medium text-orange-400 underline cursor-pointer"}," explore more... "),a(U,{ref:"overlayPanel",style:{height:"80px"}},{default:n(()=>[L(l(d.data.leave_reason),1)]),_:2},1536)])):(i(),c("div",ps,l(d.data.leave_reason??""),1))]),_:1}),a(r,{field:"status",header:"Status"},{body:n(({data:d})=>[e("div",ms,[a(Y,{value:d.status,severity:O(d.status)},null,8,["value","severity"])])]),filter:n(({filterModel:d,filterCallback:o})=>[a(N,{modelValue:d.value,"onUpdate:modelValue":u=>d.value=u,onChange:u=>o(),options:R.value,placeholder:"Select",class:"p-column-filter",showClear:!0},{value:n(u=>[u.value?(i(),c("span",{key:0,class:T("customer-badge status-"+u.value)},l(u.value),3)):(i(),c("span",us,l(u.placeholder),1))]),option:n(u=>[e("span",{class:T("customer-badge status-"+u.option)},l(u.option),3)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),a(r,{field:"",header:"Action",style:{"min-width":"15rem"}},{body:n(d=>[e("i",{class:"pi pi-eye",onClick:o=>t(v).getLeaveDetails(d.data)},null,8,vs)]),_:1})]),_:1},8,["value","filters"])])])])])])],64)}}},fs={class:"w-full"},ys={key:0},gs=e("p",{class:"font-semibold text-2xl text-[#000] font-['Poppins]"},"Leave",-1),xs=[gs],bs={key:1,class:"flex justify-between"},ws={class:"divide-x py-auto nav nav-pills divide-solid nav-tabs-dashed",id:"pills-tab",role:"tablist"},Ls=e("li",{class:"nav-item text-muted",role:"presentation"},[e("a",{class:"pb-2 nav-link active","data-bs-toggle":"tab",href:"#leave_balance","aria-selected":"true",role:"tab"}," Leave Balance")],-1),$s=e("a",{class:"pb-2 mx-4 nav-link","data-bs-toggle":"tab",href:"#team_leaveBalance","aria-selected":"false",tabindex:"-1",role:"tab"}," Team Leave Balance",-1),Ds=[$s],Ss=e("a",{class:"pb-2 nav-link","data-bs-toggle":"tab",href:"#org_leave","aria-selected":"false",tabindex:"-1",role:"tab "}," Org Leave Balance",-1),ks=[Ss],Cs={class:"flex justify-end"},Ts=e("div",null,null,-1),As={class:"tab-content py-2",id:"pills-tabContent"},Rs={class:"tab-pane show fade active",id:"leave_balance",role:"tabpanel","aria-labelledby":"pills-profile-tab"},Ms={class:"tab-pane fade show",id:"team_leaveBalance",role:"tabpanel","aria-labelledby":"pills-profile-tab"},Os={class:"tab-pane show",id:"org_leave",role:"tabpanel","aria-labelledby":"pills-profile-tab"},Vs=e("h6",{class:"mb-4 modal-title fs-21"}," Leave Request",-1),Hs={__name:"LeaveModule",setup(M){const s=B(),v=P(),S=h(!1);return h(),E(async()=>{await s.getEmployeeLeaveBalance(),await s.getFinancialYearDropdown(),await s.getLeaveNotifyDropdown()}),(x,y)=>{const O=f("Toast"),A=f("Dropdown"),R=f("leaveapply2"),b=f("Dialog");return i(),c(j,null,[a(O),t(s).canShowLoading?(i(),Z(te,{key:0,class:"absolute z-50 bg-white"})):V("",!0),e("div",fs,[e("div",null,[t(v).current_user_role==5?(i(),c("div",ys,xs)):(i(),c("div",bs,[e("ul",ws,[Ls,t(v).current_user_role==1||t(v).current_user_role==2||t(v).current_user_role==3||t(v).current_user_role==4?(i(),c("li",{key:0,class:"nav-item text-muted",role:"presentation",onClick:y[0]||(y[0]=(..._)=>t(v).clearfunction&&t(v).clearfunction(..._))},Ds)):V("",!0),t(v).current_user_role==1||t(v).current_user_role==2||t(v).current_user_role==3?(i(),c("li",{key:1,class:"nav-item text-muted",role:"presentation",onClick:y[1]||(y[1]=(..._)=>t(v).clearfunction&&t(v).clearfunction(..._))},ks)):V("",!0)]),e("div",Cs,[a(A,{modelValue:t(s).financial_year,"onUpdate:modelValue":y[2]||(y[2]=_=>t(s).financial_year=_),options:t(s).financial_year_leave_dropdown,onChange:y[3]||(y[3]=_=>(t(s).getEmployeeLeaveBalance(t(s).financial_year),t(s).getTermLeaveBalance(t(s).financial_year),t(s).getOrgLeaveBalance(t(s).financial_year))),optionLabel:"year",optionValue:"id",class:"w-full md:w-14rem"},null,8,["modelValue","options"])])])),Ts]),e("div",As,[e("div",Rs,[a(Xt)]),e("div",Ms,[a(hs)]),e("div",Os,[a(ja)])])]),a(b,{visible:S.value,"onUpdate:visible":y[4]||(y[4]=_=>S.value=_),style:{width:"80vw"},breakpoints:{"960px":"75vw","641px":"100vw"}},{header:n(()=>[Vs]),default:n(()=>[a(R)]),_:1},8,["visible"])],64)}}};export{Hs as default};
