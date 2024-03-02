import{q as oe,r as c,K as se,y as X,x as Z,ab as ee,D as S,o as te,p as E,b as u,d as r,e as m,m as n,k as o,f as e,P as G,t as s,g as b,j as ae,h as U,n as R,i as B,F as le}from"./app-e1ab7da0.js";import"./moment-fbc5633a.js";import{S as ne}from"./Service-a2d19084.js";import{d as k}from"./dayjs.min-ac6c82aa.js";/* empty css                                                                       */import{L as ie}from"./LoadingSpinner-1df67a25.js";const P=oe("UseAttendance",()=>({canShowLoadingScreen:c(!1)}));const re={class:"confirmation-content"},de=e("i",{class:"mr-2 text-red-600 pi pi-exclamation-triangle",style:{"font-size":"1.3rem"}},null,-1),ce={class:"my-auto"},ue={class:"flex w-full p-2 justify-left"},pe={class:"flex justify-center items-center gap-3"},me={class:"relative"},_e={class:"absolute top-[-80px] right-0"},ve={class:"flex justify-center items-center"},fe=e("span",{class:"font-['poppins'] text-[16px]"},"Select Month",-1),he={class:"flex items-center !justify-left"},ge=["src"],ye={class:"text-center"},we={class:"p-2 text-center"},xe={key:0,class:"font-['poppins']"},be={key:1,class:"font-['poppins']"},Se={class:"text-bold"},ke={key:0},Ce=e("span",{class:"text-blue-400 font-['poppins']"}," explore more...",-1),Ae={class:"font-['poppins']"},$e={key:1},Re={class:"text-bold"},Te={key:1},De={key:0,style:{width:"250px"},class:"flex justify-center items-center gap-2"},je=["onClick"],Le=e("i",{class:"pi pi-check"},null,-1),Ve=[Le],Ne=["onClick"],Ue=e("i",{class:"pi pi-times"},null,-1),ze=[Ue],Fe={__name:"attendance_regularization",setup(J){const f=P();let T=c(),p=c(!1);c(!1),se();const D=X(),x=c(""),A=c(),C=ne();Z("$swal");const w=c();ee(()=>{p&&(A.value=null)});const z=c(),j=d=>{z.value.toggle(d)},F=c({global:{value:null,matchMode:S.CONTAINS},employee_name:{value:null,matchMode:S.STARTS_WITH,matchMode:S.EQUALS,matchMode:S.CONTAINS},status:{value:"Pending",matchMode:S.EQUALS}}),q=c(["Pending","Approved","Rejected"]);let $=null,L=null;te(async()=>{w.value=new Date,await M(k().month()+1,k().year())});async function M(d,i){f.canShowLoadingScreen=!0;let _=window.location.origin+"/fetch-att-regularization-data";await E.post(_,{month:d,year:i}).then(Y=>{T.value=Y.data.data}).finally(()=>{f.canShowLoadingScreen=!1})}function O(d,i){p.value=!0,$=i,x.value=i,L=d}function Q(d){p.value=!1,d&&N()}function N(){$="",L=null}const h=d=>{switch(d){case"Rejected":return"danger";case"Approved":return"success";case"Pending":return"warning"}};function l(){Q(!1),f.canShowLoadingScreen=!0,E.post(window.location.origin+"/attendance-regularization-approvals",{record_id:L.id,approver_user_code:C.current_user_code,status:$=="Approve"?"Approved":$=="Reject"?"Rejected":$,status_text:A.value}).then(d=>{d.data.status=="success"?D.add({severity:"success",summary:"Success",detail:"Your request has been recorded successfully",life:3e3}):Swal.fire("Failure",`${d.data.message}`,"error"),N()}).catch(d=>{f.canShowLoadingScreen=!1,N()}).finally(()=>{A.value=null,f.canShowLoadingScreen=!1,M(k().month()+1,k().year())})}return(d,i)=>{const _=u("Textarea"),Y=u("Dialog"),K=u("Calendar"),H=u("InputText"),g=u("Column"),W=u("OverlayPanel"),a=u("Tag"),V=u("Dropdown"),v=u("DataTable");return r(),m("div",null,[n(Y,{header:"Confirmation",visible:b(p),"onUpdate:visible":i[3]||(i[3]=t=>G(p)?p.value=t:p=t),breakpoints:{"960px":"80vw","640px":"90vw"},style:{width:"380px"},modal:!0},{footer:o(()=>[e("div",pe,[e("button",{class:"bg-[#F9BE00] px-4 rounded-md text-[#000] h-[25px]",onClick:i[1]||(i[1]=t=>(l(),G(p)?p.value=!1:p=!1))},"Yes"),e("button",{class:"bg-[#000] px-4 rounded-md text-[#fff] h-[25px]",onClick:i[2]||(i[2]=t=>G(p)?p.value=!1:p=!1)},"No")])]),default:o(()=>[e("div",re,[de,e("span",ce,"Are you sure you want to "+s(b($))+"?",1)]),e("div",ue,[n(_,{modelValue:A.value,"onUpdate:modelValue":i[0]||(i[0]=t=>A.value=t),rows:"3",cols:"35",class:"border rounded-md",placeholder:"Your Comments..."},null,8,["modelValue"])])]),_:1},8,["visible"]),e("div",me,[e("div",_e,[e("div",ve,[fe,n(K,{view:"month",dateFormat:"mm/yy",class:"mx-4",modelValue:w.value,"onUpdate:modelValue":i[4]||(i[4]=t=>w.value=t),style:{"border-radius":"7px",height:"30px",width:"120px"},onDateSelect:i[5]||(i[5]=t=>M(w.value.getMonth()+1,w.value.getFullYear()))},null,8,["modelValue"])])]),b(T)?(r(),ae(v,{key:0,value:b(T),paginator:!0,rows:10,dataKey:"id",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],sortField:"attendance_date",sortOrder:-1,currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Records",responsiveLayout:"scroll",filters:F.value,"onUpdate:filters":i[6]||(i[6]=t=>F.value=t),filterDisplay:"menu",globalFilterFields:["name","status"]},{empty:o(()=>[U(" No Employeee found. ")]),loading:o(()=>[U(" Loading customers data. Please wait. ")]),default:o(()=>[n(g,{field:"employee_name",header:"Employee Name",class:"",style:{width:"12rem !important"}},{body:o(t=>[e("div",he,[e("div",null,[t.data.employee_avatar&&JSON.parse(t.data.employee_avatar).type=="shortname"?(r(),m("p",{key:0,class:R(["flex justify-center items-center font-semibold text-white rounded-full h-[30px] w-[30px] text-[14px]",b(C).getBackgroundColor(t.index)])},s(t.data.employee_avatar?JSON.parse(t.data.employee_avatar).data:null),3)):(r(),m("img",{key:1,class:"rounded-circle userActive-status profile-img",style:{height:"30px !important",width:"30px !important"},src:`data:image/png;base64,${t.data.employee_avatar?JSON.parse(t.data.employee_avatar).data:""}`,srcset:"",alt:""},null,8,ge))]),e("div",null,[e("p",{class:R(["pl-2 text-left font-['poppins']",t.data.employee_name.length<=20?"w-[200px]":"w-[250px] "])},s(t.data.employee_name),3)])])]),filter:o(({filterModel:t,filterCallback:I})=>[n(H,{modelValue:t.value,"onUpdate:modelValue":y=>t.value=y,onInput:y=>I(),placeholder:"Search",class:"p-column-filter",showClear:!0},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),n(g,{field:"attendance_date",header:"Date",sortable:!0,style:{"min-width":"15rem"}},{body:o(t=>[e("h1",ye,s(b(k)(t.data.attendance_date).format("DD-MMM-YYYY")),1)]),_:1}),n(g,{field:"regularization_type",header:"Type",style:{"min-width":"10rem"}},{body:o(t=>[e("div",we,s(t.data.regularization_type),1)]),_:1}),n(g,{field:"user_time",header:"Actual Time",style:{"min-width":"10rem"}}),n(g,{field:"regularize_time",header:"Regularize Time",style:{"min-width":"10rem"}}),n(g,{field:"reason_type",header:"Reason",style:{"min-width":"18rem"}},{body:o(t=>[t.data.reason_type=="Others"?(r(),m("span",xe,s(t.data.custom_reason),1)):(r(),m("span",be,s(t.data.reason_type),1))]),_:1}),n(g,{field:"reviewer_name",header:"Approve Name"},{body:o(t=>[e("p",Se,s(t.data.reviewer_name?t.data.reviewer_name:"---"),1)]),_:1}),n(g,{field:"reviewer_comments",header:"Approve Comments"},{body:o(t=>[t.data.reviewer_comments&&t.data.reviewer_comments.length>80?(r(),m("div",ke,[e("p",{onClick:j,class:"font-medium text-orange-400 underline cursor-pointer"},[e("span",null,s(t.data&&t.data.reviewer_comments?t.data.reviewer_comments.substring(0,40)+"..":""),1),U(),Ce]),n(W,{ref_key:"overlayPanel",ref:z,style:{height:"200px"}},{default:o(()=>[e("span",Ae,s(t.data.reviewer_comments),1)]),_:2},1536)])):(r(),m("div",$e,s(t.data.reviewer_comments?t.data.reviewer_comments:"---"),1))]),_:1}),n(g,{field:"reviewer_reviewed_date",header:"Reviewed Date"},{body:o(t=>[e("p",Re,s(t.data.reviewer_reviewed_date?t.data.reviewer_reviewed_date:"---"),1)]),_:1}),n(g,{field:"status",header:"Status",icon:"pi pi-check"},{body:o(({data:t})=>[n(a,{value:t.status,severity:h(t.status)},null,8,["value","severity"])]),filter:o(({filterModel:t,filterCallback:I})=>[n(V,{modelValue:t.value,"onUpdate:modelValue":y=>t.value=y,onChange:y=>I(),options:q.value,placeholder:"Select",class:"p-column-filter",showClear:!0},{value:o(y=>[y.value?(r(),m("span",{key:0,class:R("customer-badge status-"+y.value)},s(y.value),3)):(r(),m("span",Te,s(y.placeholder),1))]),option:o(y=>[e("span",{class:R("customer-badge status-"+y.option)},s(y.option),3)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),n(g,{field:"",header:"Action"},{body:o(t=>[t.data.status=="Pending"?(r(),m("span",De,[e("button",{class:"bg-[#F9BE00] px-4 rounded-md text-[#000] h-[25px] flex justify-center items-center",onClick:I=>O(t.data,"Approve")},Ve,8,je),e("button",{class:"bg-black px-4 rounded-md text-[#ffff] h-[25px] flex justify-center items-center",onClick:I=>O(t.data,"Reject")},ze,8,Ne)])):B("",!0)]),_:1})]),_:1},8,["value","filters"])):B("",!0)])])}}},Me={class:"relative"},Oe={class:"absolute top-[-80px] right-0"},Ye={class:""},Ie=e("span",{class:"font-['poppins'] text-[16px]"},"Select Month",-1),Ee={class:"flex items-center !justify-left"},Be=["src"],Je={class:"text-bold"},qe={class:"text-bold"},Qe={class:"text-bold"},Ke={key:1},He={key:0,style:{width:"250px"},class:"flex gap-2 justify-center items-center"},We=["onClick"],Ge=e("i",{class:"pi pi-check"},null,-1),Pe=[Ge],Xe=["onClick"],Ze=e("i",{class:"pi pi-times"},null,-1),et=[Ze],tt={class:"confirmation-content"},at=e("i",{class:"mr-2 text-red-600 pi pi-exclamation-triangle",style:{"font-size":"1.3rem"}},null,-1),nt={class:"my-auto"},ot={class:"flex w-full p-2 justify-left"},st={class:"flex justify-center items-center gap-3"},lt={__name:"absent_Regularization",setup(J){const f=P(),T=X(),p=c(),D=ne();Z("$swal");const x=c(!1);c(!1);const A=c(""),C=c();let w=null,z=null;const j=c(),F=c({global:{value:null,matchMode:S.CONTAINS},employee_name:{value:null,matchMode:S.STARTS_WITH,matchMode:S.EQUALS,matchMode:S.CONTAINS},status:{value:"Pending",matchMode:S.EQUALS}}),q=c(["Pending","Approved","Rejected"]);ee(()=>{x&&(C.value=null)}),te(async()=>{j.value=new Date,await L(k().month()+1,k().year())});function $(h,l){T.add({severity:h,summary:l,life:3e3})}async function L(h,l){f.canShowLoadingScreen=!0;let d=window.location.origin+"/fetch-absent-regularization-data";await E.post(d,{month:h,year:l}).then(i=>{p.value=i.data.data}).finally(()=>{f.canShowLoadingScreen=!1})}const M=h=>{switch(h){case"Rejected":return"danger";case"Approved":return"success";case"Pending":return"warning"}};function O(h,l){w=l,A.value=l,z=h,x.value=!0}function Q(){f.canShowLoadingScreen=!1}function N(){Q(),f.canShowLoadingScreen=!0,E.post("/approveRejectAbsentRegularization",{record_id:z.id,approver_user_code:D.current_user_code,status:w=="Approve"?"Approved":w=="Reject"?"Rejected":w,status_text:C.value,user_code:D.current_user_code}).then(h=>{h.data.status=="success"?T.add({severity:"success",summary:"Success",detail:"Your request has been recorded successfully",life:3e3}):Swal.fire("Failure",`${h.data.message}`,"error"),L(k().month()+1,k().year())}).catch(h=>{f.canShowLoadingScreen=!1}).finally(()=>{f.canShowLoadingScreen=!1,C.value=null})}return(h,l)=>{const d=u("Calendar"),i=u("InputText"),_=u("Column"),Y=u("Tag"),K=u("Dropdown"),H=u("DataTable"),g=u("Textarea"),W=u("Dialog");return r(),m("div",Me,[e("div",Oe,[e("div",Ye,[Ie,n(d,{view:"month",dateFormat:"mm/yy",class:"mx-4",modelValue:j.value,"onUpdate:modelValue":l[0]||(l[0]=a=>j.value=a),style:{"border-radius":"7px",width:"120px",height:"30px"},onDateSelect:l[1]||(l[1]=a=>L(j.value.getMonth()+1,j.value.getFullYear()))},null,8,["modelValue"])])]),n(H,{value:p.value,paginator:!0,rows:10,dataKey:"id",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",rowsPerPageOptions:[5,10,25],sortField:"attendance_date",sortOrder:-1,currentPageReportTemplate:"Showing {first} to {last} of {totalRecords} Records",responsiveLayout:"scroll",filters:F.value,"onUpdate:filters":l[2]||(l[2]=a=>F.value=a),filterDisplay:"menu",globalFilterFields:["name","status"]},{empty:o(()=>[U(" No Employeee found. ")]),loading:o(()=>[U(" Loading customers data. Please wait. ")]),default:o(()=>[n(_,{class:"font-bold",field:"employee_name",header:"Employee Name"},{body:o(a=>[e("div",Ee,[e("div",null,[JSON.parse(a.data.employee_avatar).type=="shortname"?(r(),m("p",{key:0,class:R(["flex justify-center items-center font-semibold text-white rounded-full h-[30px] w-[30px] text-[14px]",b(D).getBackgroundColor(a.index)])},s(JSON.parse(a.data.employee_avatar).data),3)):(r(),m("img",{key:1,class:"rounded-circle userActive-status profile-img",style:{height:"30px !important",width:"30px !important"},src:`data:image/png;base64,${JSON.parse(a.data.employee_avatar).data}`,srcset:"",alt:""},null,8,Be))]),e("div",null,[e("p",{class:R(["pl-2 text-left font-['poppins']",a.data.employee_name.length<=20?"w-[200px]":"w-[250px]"])},s(a.data.employee_name),3)])])]),filter:o(({filterModel:a,filterCallback:V})=>[n(i,{modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,onInput:v=>V(),placeholder:"Search",class:"p-column-filter",showClear:!0},null,8,["modelValue","onUpdate:modelValue","onInput"])]),_:1}),n(_,{class:"font-bold",field:"attendance_date",sortable:!0,header:"Attendance Date"},{body:o(a=>[U(s(b(k)(a.data.attendance_date).format("DD-MMM-YYYY")),1)]),_:1}),n(_,{class:"font-bold",field:"regularization_type",header:"Regularization Type"}),n(_,{class:"font-bold",field:"checkin_time",header:"Checkin Time"}),n(_,{class:"font-bold",field:"checkout_time",header:"Checkout Time"}),n(_,{class:"font-bold",field:"reason",header:"Reason"}),n(_,{class:"font-bold",field:"custom_reason",header:"Custom Reason"}),n(_,{field:"reviewer_name",header:"Approve Name"},{body:o(a=>[e("p",Je,s(a.data.reviewer_name?a.data.reviewer_name:"---"),1)]),_:1}),n(_,{field:"reviewer_comments",header:"Approve Comments"},{body:o(a=>[e("p",qe,s(a.data.reviewer_comments?a.data.reviewer_comments:"---"),1)]),_:1}),n(_,{field:"reviewer_reviewed_date",header:"Reviewed Date"},{body:o(a=>[e("p",Qe,s(a.data.reviewer_reviewed_date?a.data.reviewer_reviewed_date:"---"),1)]),_:1}),n(_,{class:"font-bold",field:"status",header:"Status"},{body:o(({data:a})=>[n(Y,{value:a.status,severity:M(a.status)},null,8,["value","severity"])]),filter:o(({filterModel:a,filterCallback:V})=>[n(K,{modelValue:a.value,"onUpdate:modelValue":v=>a.value=v,onChange:v=>V(),options:q.value,placeholder:"Select",class:"p-column-filter",showClear:!0},{value:o(v=>[v.value?(r(),m("span",{key:0,class:R("customer-badge status-"+v.value)},s(v.value),3)):(r(),m("span",Ke,s(v.placeholder),1))]),option:o(v=>[e("span",{class:R("customer-badge status-"+v.option)},s(v.option),3)]),_:2},1032,["modelValue","onUpdate:modelValue","onChange","options"])]),_:1}),n(_,{class:"font-bold",field:"",header:"Action"},{body:o(a=>[a.data.status=="Pending"?(r(),m("span",He,[e("button",{class:"bg-[#F9BE00] px-4 rounded-md text-[#000] h-[25px] flex justify-center items-center",onClick:V=>O(a.data,"Approve")},Pe,8,We),e("button",{class:"bg-black px-4 rounded-md text-[#ffff] h-[25px] flex justify-center items-center",onClick:V=>O(a.data,"Reject")},et,8,Xe)])):B("",!0)]),_:1})]),_:1},8,["value","filters"]),n(W,{header:"Confirmation",visible:x.value,"onUpdate:visible":l[6]||(l[6]=a=>x.value=a),breakpoints:{"960px":"80vw","640px":"90vw"},style:{width:"380px"},modal:!0},{footer:o(()=>[e("div",st,[e("button",{class:"bg-[#F9BE00] px-4 rounded-md text-[#000] h-[25px]",onClick:l[4]||(l[4]=a=>(A.value=="Reject"?C.value?(N(),x.value=!1):(x.value=!0,$("warn"," Reviewer Comment required")):N(),x.value=!1))},"Yes"),e("button",{class:"bg-[#000] px-4 rounded-md text-[#fff] h-[25px]",onClick:l[5]||(l[5]=a=>x.value=!1)},"No")])]),default:o(()=>[e("div",tt,[at,e("span",nt,"Are you sure you want to "+s(b(w))+"?",1)]),e("div",ot,[n(g,{modelValue:C.value,"onUpdate:modelValue":l[3]||(l[3]=a=>C.value=a),rows:"3",cols:"35",class:"border rounded-md",placeholder:"Your Comments..."},null,8,["modelValue"])])]),_:1},8,["visible"])])}}},it={class:"w-full"},rt=e("h6",{class:"mb-0 text-[18px] font-semibold my-4"},"Attendance Regularization Approvals",-1),dt=e("div",{class:"p-2 pb-0 my-2 mb-3 rounded-lg"},[e("div",{class:"flex justify-between"},[e("ul",{class:"py-auto nav nav-pills divide-solid nav-tabs-dashed",id:"pills-tab",role:"tablist"},[e("li",{class:"nav-item text-muted",role:"presentation"},[e("a",{class:"pb-2 nav-link active","data-bs-toggle":"tab",href:"#leave_balance","aria-selected":"true",role:"tab"}," Attendance Regularization")]),e("li",{class:"nav-item text-muted",role:"presentation"},[e("a",{class:"pb-2 mx-4 nav-link","data-bs-toggle":"tab",href:"#team_leaveBalance","aria-selected":"false",tabindex:"-1",role:"tab"}," Absent Regularization")])])])],-1),ct={class:"tab-content h-[100vh]",id:"pills-tabContent"},ut={class:"tab-pane show fade active",id:"leave_balance",role:"tabpanel","aria-labelledby":"pills-profile-tab"},pt={class:"tab-pane fade show",id:"team_leaveBalance",role:"tabpanel","aria-labelledby":"pills-profile-tab"},yt={__name:"AttRegularizationApproval",setup(J){const f=P();return(T,p)=>{const D=u("Toast");return r(),m(le,null,[n(D),b(f).canShowLoadingScreen?(r(),ae(ie,{key:0,class:"absolute z-50 bg-white w-[100%] h-[100%]"})):B("",!0),e("div",it,[rt,dt,e("div",ct,[e("div",ut,[n(Fe)]),e("div",pt,[n(lt)])])])],64)}}};export{yt as default};