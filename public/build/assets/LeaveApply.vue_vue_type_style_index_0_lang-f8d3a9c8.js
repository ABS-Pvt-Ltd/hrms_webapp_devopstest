import{q as de,r as s,v as _e,x as ve,p as w,y as pe,z as fe}from"./app-e1ab7da0.js";import{h as F}from"./moment-fbc5633a.js";import{S as me}from"./Service-a2d19084.js";import{u as ge}from"./LeaveModuleService-22be0d8f.js";import{d as C}from"./dayjs.min-ac6c82aa.js";const he=de("calendar",()=>{const a=ye();me();const o=s(new Date().getFullYear()),m=s(new Date().getMonth()),h=s(new Date().getDate()),_=_e(()=>o.value),e=_e(()=>m.value),$=_e(()=>h.value);function L(y){o.value=o.value+y}function f(y){o.value=o.value-y}function n(y){if(m.value==11){L(1),m.value=0,a.currentlySelectedTimesheet==1?a.getSelectedEmployeeAttendance():a.currentlySelectedTimesheet==2?a.getSelectedEmployeeTeamDetails(a.currentlySelectedTeamMemberUserId):a.currentlySelectedTimesheet==3&&a.getSelectedEmployeeOrgDetails(a.currentlySelectedOrgMemberUserId);return}m.value=m.value+y,a.currentlySelectedTimesheet==1?a.getSelectedEmployeeAttendance():a.currentlySelectedTimesheet==2?a.getSelectedEmployeeTeamDetails(a.currentlySelectedTeamMemberUserId):a.currentlySelectedTimesheet==3&&a.getSelectedEmployeeOrgDetails(a.currentlySelectedOrgMemberUserId)}function D(y){if(a.disabledDecrementMonthForDunamis()){if(!(o.value==2023&&m.value<10)){if(m.value==0){f(1),m.value=11,a.currentlySelectedTimesheet==1?a.getSelectedEmployeeAttendance():a.currentlySelectedTimesheet==2?a.getSelectedEmployeeTeamDetails(a.currentlySelectedTeamMemberUserId):a.currentlySelectedTimesheet==3&&a.getSelectedEmployeeOrgDetails(a.currentlySelectedOrgMemberUserId);return}m.value=m.value-y,a.currentlySelectedTimesheet==1?a.getSelectedEmployeeAttendance():a.currentlySelectedTimesheet==2?a.getSelectedEmployeeTeamDetails(a.currentlySelectedTeamMemberUserId):a.currentlySelectedTimesheet==3&&a.getSelectedEmployeeOrgDetails(a.currentlySelectedOrgMemberUserId)}}else{if(m.value==0){f(1),m.value=11,a.currentlySelectedTimesheet==1?a.getSelectedEmployeeAttendance():a.currentlySelectedTimesheet==2?a.getSelectedEmployeeTeamDetails(a.currentlySelectedTeamMemberUserId):a.currentlySelectedTimesheet==3&&a.getSelectedEmployeeOrgDetails(a.currentlySelectedOrgMemberUserId);return}m.value=m.value-y,a.currentlySelectedTimesheet==1?a.getSelectedEmployeeAttendance():a.currentlySelectedTimesheet==2?a.getSelectedEmployeeTeamDetails(a.currentlySelectedTeamMemberUserId):a.currentlySelectedTimesheet==3&&a.getSelectedEmployeeOrgDetails(a.currentlySelectedOrgMemberUserId)}}function M(y){m.value=y}function b(y){o.value=y}function U(){o.value=new Date().getFullYear(),m.value=new Date().getMonth(),h.value=new Date().getDate()}return{year:o,month:m,day:h,getYear:_,getMonth:e,getDay:$,incrementYear:L,incrementMonth:n,decrementMonth:D,setMonth:M,setYear:b,resetDate:U}});ve("$swal");const ye=de("Timesheet",()=>{const a=he(),o=me(),m=s(!0),h=s(!1),_=s(!1),e=s(!1),$=s("single"),L=s("Classic"),f=s();s();const n=s(1),D=s(),M=s({}),b=s({}),U=s({}),y=s({}),k=s(),z=s(),S=s({}),K=s({}),ae=s(!1),H=s(!1),se=s(!1),le=s(!1),Q=s(!1),oe=s(!1),j=s(!1),B=s(),x=s(0),W=s(),X=s(),Z=s(),ee=s();s();const A=s({}),q=s(),N=s(),G=async(t,l,c)=>{m.value=!0,D.value=t,q.value=l,N.value=c;let v="/fetch-attendance-user-timesheet";try{return await w.post(v,{month:l+1,year:c,user_code:t}).then(J=>J.data).finally(()=>{m.value=!1})}catch(J){return console.error("Error [ getEmployeeAttendance() ]:",J),null}},p=async t=>{B.value=[],x.value=[],console.log(x.value,x.value,"currentEmployeeAttendanceLength :: :");try{let l;return t?l=t:l=o.current_user_code,m.value=!0,await G(l,a.getMonth,a.getYear).then(c=>{if(c)B.value=c.data?Object.values(c.data):[],x.value=c.data?Object.values(c.data).length:0;else return null})}catch(l){console.error("Error [ getSelectedEmployeeAttendance() ]:",l)}finally{m.value=!1}},O=(t,l)=>{$.value=l,m.value=!0,W.value=t,G(t,a.getMonth,a.getYear).then(c=>{X.value=c.data?Object.values(c.data):[]}).catch(c=>{console.log("Error[ getSelectedEmployeeTeamDetails)() ]",c)}).finally(()=>{m.value=!1})},Y=async(t,l,c)=>{$.value=l,f.value=c,m.value=!0,Z.value=t,await G(t,a.getMonth,a.getYear).then(v=>{ee.value=v.data?Object.values(v.data):[]}).finally(()=>{m.value=!1})},re=async t=>w.post("/fetch-team-members",{user_code:t}),ne=async()=>w.get("/fetch-org-members"),ue=t=>t=="biometric"?"fas fa-fingerprint fs-12":t=="web"?"fa fa-laptop fs-12":t=="mobile"?"fa fa-mobile-phone fs-12":"",R=(t,l)=>{let c=f.value;if(n.value==2||n.value==3){if(o.current_user_role==1||o.current_user_role==2){let v={admin_user_code:o.current_user_code,user_code:c,regularization_type:l,attendance_date:t.date,user_time:t.checkin_time,regularize_time:l=="LC"||l=="MIP"?I(k.value):l=="EG"||l=="MOP"?I(z.value):"",reason:t.reason,custom_reason:t.custom_reason?t.custom_reason:""};return k.value=null,z.value=null,v}}else{let v={user_code:o.current_user_code,regularization_type:l,attendance_date:t.date,user_time:l=="EG"?t.checkout_time:t.checkin_time,regularize_time:l=="LC"||l=="MIP"?I(k.value):l=="EG"||l=="MOP"?I(z.value):"",reason:t.reason,custom_reason:t.custom_reason?t.custom_reason:""};return k.value=null,z.value=null,v}},r=t=>{_.value=!0,A.value={...t},U.value={...t},f.value=t.user_code},ce=()=>{h.value=!0;let t=f.value?f.value:o.current_user_code;console.log("currentlySelectedUser :: ",t);let l;n.value==2||n.value==3?(o.current_user_role==1||o.current_user_role==2)&&(l=`${window.location.origin}/checkAttendanceEmployeeAdminStatus`):l=`${window.location.origin}/attendance-req-regularization`,w.post(l,R(U.value,"LC")).then(c=>{let v=c.data.message;c.data.status=="success"?(_.value=!1,j.value=!1,Swal.fire("Good job!","Attendance Regularized Successful","success").then(()=>{n.value==1?p(t):(o.current_user_role==1||o.current_user_role==2)&&(n.value==2?O(t,!0):n.value==3&&Y(t,!1,t))})):Swal.fire("Oops!",`${v}`,"error").then(()=>{p(t)})}).finally(()=>{h.value=!1})},ie=t=>{y.value={...t},A.value={...t},_.value=!0,f.value=t.user_code},te=()=>{let t=f.value,l;n.value==2||n.value==3?(o.current_user_role==1||o.current_user_role==2)&&(l=`${window.location.origin}/checkAttendanceEmployeeAdminStatus`):l=`${window.location.origin}/attendance-req-regularization`,h.value=!0,w.post(l,R(y.value,"EG")).then(c=>{p(t);let v=c.data.message;c.data.status=="success"?(j.value=!1,_.value=!1,Swal.fire("Success!","Attendance Regularized Successful","success").then(()=>{o.current_user_role==1||o.current_user_role==2?n.value==2?O(t,!0):n.value==3&&Y(t,!1,t):p(t)})):Swal.fire("Error",`${v}`,"error")}).finally(()=>{h.value=!1})},u=t=>{b.value={...t},A.value={...t},_.value=!0,f.value=t.user_code},g=()=>{let t=f.value;h.value=!0;let l;n.value==2||n.value==3?(o.current_user_role==1||o.current_user_role==2)&&(l=`${window.location.origin}/checkAttendanceEmployeeAdminStatus`):l=`${window.location.origin}/attendance-req-regularization`,w.post(l,R(b.value,"MIP")).then(c=>{p(t);let v=c.data.message;c.data.status=="success"?(j.value=!1,_.value=!1,Swal.fire("Good job!","Attendance Regularized Successful","success").then(()=>{o.current_user_role==1||o.current_user_role==2?n.value==2?O(t,!0):n.value==3&&Y(t,!1,t):p(t)})):Swal.fire("Oops!",`${v}`,"error")}).finally(()=>{h.value=!1})},i=t=>{M.value={...t},A.value={...t},_.value=!0,f.value=t.user_code},d=()=>{let t=f.value,l;n.value==2||n.value==3?(o.current_user_role==1||o.current_user_role==2)&&(l=`${window.location.origin}/checkAttendanceEmployeeAdminStatus`):l=`${window.location.origin}/attendance-req-regularization`,h.value=!0,w.post(l,R(M.value,"MOP")).then(c=>{p(t);let v=c.data.message;c.data.status=="success"?(j.value=!1,_.value=!1,Swal.fire("Good job!","Attendance Regularized Successful","success").then(()=>{o.current_user_role==1||o.current_user_role==2?n.value==2?O(t,!0):n.value==3&&Y(t,!1,t):p(t)})):Swal.fire("Oops!",`${v}`,"error")}).finally(()=>{h.value=!1})},E=()=>{h.value=!0;let t=f.value,l;n.value==2||n.value==3?o.current_user_role==2&&(l=`${window.location.origin}/checkAbsentEmployeeAdminStatus`):l=`${window.location.origin}/attendance-req-absent-regularization`,n.value==2||n.value==3?t&&(o.current_user_role==1||o.current_user_role==2)&&w.post(l,{admin_user_code:o.current_user_code,user_code:t,attendance_date:S.value.date,regularization_type:"Absent Regularization",checkin_time:I(S.value.start_time),checkout_time:I(S.value.end_time),reason:S.value.reason,custom_reason:S.value.custom_reason?S.value.custom_reason:""}).then(c=>{p(t);let v=c.data.message;c.data.status=="success"?(j.value=!1,_.value=!1,Swal.fire("Good job!","Attendance Regularized Successful","success").then(()=>{o.current_user_role==1||o.current_user_role==2?n.value==2?O(t,!0):n.value==3&&Y(t,!1,t):p(t)})):Swal.fire("Oops!",`${v}`,"error")}).finally(()=>{h.value=!1}):w.post(l,{user_code:o.current_user_code,attendance_date:S.value.date,regularization_type:"Absent Regularization",checkin_time:I(S.value.start_time),checkout_time:I(S.value.end_time),reason:S.value.reason,custom_reason:S.value.custom_reason?S.value.custom_reason:""}).then(c=>{p();let v=c.data.message;c.data.status=="success"?Swal.fire("Good job!","Attendance Regularized Successful","success").then(()=>{o.current_user_role==1||o.current_user_role==2?n.value==2?O(t,!0):n.value==3&&Y(t,!1,t):p(t)}):Swal.fire("Oops!",`${v}`,"error")}).finally(()=>{h.value=!1})},T=(t,l)=>{console.log("attendaceType"+l),console.log(t)},P=t=>{Q.value=!0,K.value=t},I=t=>{if(t){const[l,c]=t.split(" "),[v,J]=l.split(":");let V=parseInt(v);return c==="PM"&&V!==12?V+=12:c==="AM"&&V===12&&(V=0),`${V.toString().padStart(2,"0")}:${J}:00`}};return{getEmployeeAttendance:G,currentEmployeeAttendance:B,currentEmployeeAttendanceLength:x,getSelectedEmployeeOrgDetails:Y,getTeamList:re,getOrgList:ne,getSelectedEmployeeTeamDetails:O,getSelectedEmployeeAttendance:p,CurrentlySelectedUser:f,classicTimesheetSidebar:oe,currentlySelectedTeamMemberUserId:W,currentlySelectedTeamMemberAttendance:X,currentlySelectedOrgMemberUserId:Z,currentlySelectedOrgMemberAttendance:ee,currentlySelectedTimesheet:n,currentlySelectedCellRecord:A,canShowLoading:m,canShowApplyRegularizationLoading:h,canShowSidebar:_,isManager:e,isTeamOrg:$,findAttendanceMode:ue,AttendanceLateOrMipRegularization:k,AttendanceEarylOrMopRegularization:z,onClickShowLcRegularization:r,applyMopRegularization:d,mopDetails:M,dialog_Mop:ae,onClickShowEgRegularization:ie,applyMipRegularization:g,mipDetails:b,dialog_Mip:H,onClickShowMipRegularization:u,applyLcRegularization:ce,lcDetails:U,dialog_Lc:se,onClickShowMopRegularization:i,applyEgRegularization:te,egDetails:y,dialog_Eg:le,dialog_Selfie:Q,onClickSViewSelfie:P,selfieDetails:K,switchTimesheet:L,absentRegularizationDetails:S,applyAbsentRegularization:E,classicAttendanceRegularizationDialog:j,withdrawAttendanceRegularization:T,selected_user_code:D,disabledDecrementMonthForDunamis:()=>{const t=localStorage.getItem("client_code");return t==="DM"||t==="DMC"},selectedyear:N,selectedMonth:q}});ve("$swal");const Te=de("useLeaveService",()=>{const a=pe(),o=me(),m=s(),h=ge(),_=ye(),e=fe({current_login_user:"",selected_leave:"",full_day_leave_date:"",half_day_leave_date:"",half_day_leave_session:"",radiobtn_full_day:"",radiobtn_half_day:"",radiobtn_custom:"",custom_start_date:"",custom_start_day_session:"",custom_end_day_session:"",custom_end_date:"",custom_total_days:"",permission_date:"",permission_session:"",permission_start_time:"",permission_total_time:"",permission_total_time_in_minutes:0,permission_end_time:"",compensatory_leaves:"",compensatory_leaves_dates:"",selected_compensatory_leaves:"",compensatory_start_date:"",compensatory_total_days:"",compensatory_end_date:"",notifyTo:"",leave_reason:"",leave_request_error_message:""}),$=s(!1),L=s(!0),f=s(!0),n=s(!1),D=s(!1),M=s(!1),b=s(!1),U=s(),y=s();let k=new Date;const z=s(!1),S=s(!1),K=s(!1),ae=s(!1);s(!1);let H=new Date;H.setDate(k.getDate()-1),U.value=[k,H];const se=s(),le=()=>{e.radiobtn_full_day=="full_day"?f.value=!0:f.value=!1,f.value=!0,D.value=!1,M.value=!1,n.value=!1,b.value=!1},Q=()=>{e.radiobtn_half_day=="half_day"?n.value=!0:n.value=!1,n.value=!0,D.value=!1,M.value=!1,f.value=!1,b.value=!1},oe=()=>{e.radiobtn_custom=="custom"?D.value=!0:D.value=!1,D.value=!0,M.value=!1,n.value=!1,f.value=!1,b.value=!1},j=()=>{D.value==!0&&(e.custom_start_date.length<0||e.custom_start_date=="")&&a.add({severity:"info",summary:"Info Message",detail:"Select Start date",life:3e3}),M.value==!0&&(e.permission_start_time<0||e.permission_start_time=="")&&a.add({severity:"info",summary:"Info Message",detail:"Select Start Time",life:3e3}),new Date().toJSON().slice(0,10);var u=new Date(e.custom_start_date);console.log(e.custom_start_date);var g=new Date(e.custom_end_date);console.log(e.custom_end_date),e.custom_start_date===""&&e.custom_end_date===""&&(e.custom_total_days="");var T=g.getTime()-u.getTime();console.log("Differenece"+T);var P=(T/(1e3*60*60*24)).toFixed(0);let i=P;console.log(i),e.custom_total_days=parseInt(i)+1,e.custom_total_days<0&&(a.add({severity:"warn",summary:"Oops!",detail:"Choose correct start date and end date",life:5e3}),e.custom_start_date="",e.custom_end_date="",e.custom_total_days=""),isNaN(e.custom_total_days)&&(a.add({severity:"warn",summary:"Oops!",detail:"Choose correct start date and end date",life:5e3}),e.custom_start_date="",e.custom_end_date="",e.custom_total_days=""),console.log(e.custom_total_days);var d=new Date(e.compensatory_start_date);console.log(e.compensatory_start_date);var E=new Date(e.compensatory_end_date);console.log(e.compensatory_end_date);var T=E.getTime()-d.getTime();console.log("Differenece"+T);var P=(T/(1e3*60*60*24)).toFixed(0);let I=P;console.log(I),e.compensatory_total_days=parseInt(I)+1,console.log(e.compensatory_total_days)},B=()=>{e.custom_end_day_session==="Forenoon"&&Number.isInteger(e.custom_total_days)?(e.custom_total_days+=.5,console.log(e.custom_total_days,"add Forenoon ::")):Number.isInteger(e.custom_total_days)},x=()=>{e.custom_end_day_session==="Full day"&&!Number.isInteger(e.custom_total_days)?(e.custom_total_days-=.5,console.log(e.custom_total_days," sub Forenoon ::")):Number.isInteger(e.custom_total_days)},W=()=>{let u=F(e.full_day_leave_date).format("YYYY-MM-DD"),g=e.permission_start_time.toString();g=u+" "+g.substring(16,24);let i=e.permission_end_time.toString();i=u+" "+i.substring(16,24),console.log();let d=new Date(e.permission_start_time).getTime(),E=new Date(e.permission_end_time).getTime();console.log("start"+d,"end"+E);var T=((E-d)/1e3/60/60).toFixed(0),P=((E-d)/1e3/60).toFixed(0);e.permission_total_time=T,e.permission_total_time_in_minutes=P,console.log("Time duration : "+(E-d)/1e3),console.log("Total Hours : "+T),console.log("Total Minutes : "+P),e.permission_start_time==""&&e.permission_end_time==""&&(a.add({severity:"warn",summary:"Oops!",detail:"Choose start time and end time",life:5e3}),e.permission_start_time="",e.permission_end_time="",e.permission_total_time_in_minutes=""),isNaN(e.permission_total_time_in_minutes)&&(a.add({severity:"warn",summary:"Oops!",detail:"Choose start time and end time",life:5e3}),e.permission_start_time="",e.permission_end_time="",e.permission_total_time_in_minutes=""),e.permission_total_time_in_minutes<0&&(a.add({severity:"warn",summary:"Oops!",detail:"Choose start time and end time",life:5e3}),e.permission_start_time="",e.permission_end_time="",e.permission_total_time_in_minutes=""),e.permission_total_time_in_minutes>120&&(a.add({severity:"warn",summary:"Oops!",detail:"Total duration should not exceed 120 minutes",life:5e3}),e.permission_start_time="",e.permission_end_time="",e.permission_total_time_in_minutes="")},X=()=>{e.selected_leave.includes("Permission")?(M.value=!0,L.value=!1,n.value=!1,D.value=!1,b.value=!1,f.value=!1):e.selected_leave.includes("Compensatory")?(b.value=!0,M.value=!1,f.value=!1,n.value=!1,D.value=!1,L.value=!1,R(),e.compensatory_leaves_dates=F(e.compensatory_leaves.emp_attendance_date).format("dddd DD-MMM-YYYY"),console.log("kn"+e.compensatory_leaves.emp_attendance_date)):e.selected_leave=="Select"?(b.value=!1,M.value=!1,f.value=!0,n.value=!1,D.value=!1,L.value=!0):(M.value=!1,b.value=!1,L.value=!0,f.value=!0)},Z=()=>{w.get("/currentUser").then(u=>{e.current_login_user=u.data,S.value=!1}).catch(u=>{console.log(u)})},ee=u=>{w.post("/fetch-leave-policy-details",{user_code:u}).then(g=>{console.log(g.data),y.value=g.data})};s([]);const A=s(!1),q=s(!1),N=s(!1),G=async(u,g)=>{console.log(u),await w.post("/fetch-leave-policy-details",{user_code:g}).then(i=>{i.data.map(d=>{u===d.leave_value&&(d.is_finite===1?d.leave_balance>1?(console.log(!0),q.value=!0,A.value=!0,N.value=!0):d.leave_balance===1?(console.log(!0),q.value=!0,A.value=!0,N.value=!1):d.leave_balance===.5?(console.log(!0),q.value=!0,A.value=!1,N.value=!1):(console.log(!1),a.add({severity:"warn",summary:"Oops!",detail:"Cannot able to apply Leave",life:5e3}),e.selected_leave=""):(console.log(!0),q.value=!0,A.value=!0,N.value=!0))})}).catch(i=>{console.log(i)})},p=s(),O=s(),Y=s(),re=async()=>{await w.post("/restrictedDaysForLeaveApply",{user_code:o.current_user_code}).then(u=>{console.log(u.data),p.value=new Date(u.data.attendance_start_date),Y.value=new Date(p.value),Y.value.setDate(p.value.getDate()+1),console.log(p.value,"Min date"),console.log(Y.value,"beforedate"),O.value=u.data.restricted_days})},ne=u=>{console.log(C(u).format("YYYY-MM-DD"));let g=C(u).format("YYYY-MM-DD");O.value.includes(g)&&(a.add({severity:"warn",summary:"Oops!",detail:"Cannot able to choose date",life:5e3}),e.full_day_leave_date="",e.half_day_leave_date="",e.custom_start_date="",e.custom_end_date="")},ue=()=>{let u=_.currentlySelectedOrgMemberAttendance;console.log(u,_.currentEmployeeAttendance,"attendance_timesheet :: ");let g="",i=[];for(let[d,E]of Object.entries(u))console.log(C(e.custom_start_date).format("YYYY-MM-DD")>=u[d].date&&C(e.custom_end_date).format("YYYY-MM-DD")<u[d].date),C(e.custom_start_date).format("YYYY-MM-DD")<=u[d].date&&C(e.custom_end_date).format("YYYY-MM-DD")>=u[d].date&&i.push(u[d]);for(let[d,E]of Object.entries(i))console.log(i[d].isAbsent),i[d].isAbsent==!0&&i[d].is_holiday==!1&&i[d].is_week_off==!1&&i[d].leave_status==null||i[d].leave_status=="Rejected"&&i[d].absent_status=="Not Applied"?console.log(!0):(g=!0,e.custom_end_date="",console.log("custom_end_date::"));g&&a.add({severity:"info",summary:"",detail:"",life:3e3}),console.log(i),console.log(C(e.custom_end_date).format("YYYY-MM-DD"),"leave_data.custom_end_date")},R=async()=>{e.current_login_user,await w.get("/fetch-employee-unused-compensatory-days").then(u=>{e.compensatory_leaves=u.data,console.log(e.compensatory_leaves)}).catch(u=>{console.log(u)})},r=fe({leave_type_id:1,leave_Request_date:F().format("YYYY-MM-DD  HH:mm:ss"),leave_type_name:"",leave_session:"",start_date:"",end_date:"",no_of_days:"",hours_diff:"",notify_to:"",leave_reason:"",compensatory_leave_id:[],user_type:"Employee"}),ce=()=>{location.reload()},ie=async u=>{if(r.leave_type_name=e.selected_leave,e.radiobtn_full_day=="full_day")console.log("Full day leave : "+e.full_day_leave_date),r.no_of_days=1,r.start_date=F(e.full_day_leave_date).format("YYYY-MM-DD"),r.end_date=r.start_date,r.leave_session="";else if(e.radiobtn_half_day=="half_day")if(console.log("Applying half-day leave on : "+e.half_day_leave_date),r.no_of_days=.5,console.log("half day leave date"+e.half_day_leave_date),r.start_date=F(e.half_day_leave_date).format("YYYY-MM-DD"),r.end_date=r.start_date,e.half_day_leave_session=="Forenoon")r.leave_session="FN";else if(e.half_day_leave_session=="Afternoon")r.leave_session="AN";else{a.add({severity:"info",summary:"Select Session",detail:"Select Leave Session",life:3e3});return}else if(e.radiobtn_custom=="custom")r.start_date=F(e.custom_start_date).format("YYYY-MM-DD"),r.end_date=F(e.custom_end_date).format("YYYY-MM-DD"),r.no_of_days=e.custom_total_days,r.leave_session="";else if(e.selected_leave.includes("Compensatory")){r.start_date=F(e.compensatory_start_date).format("YYYY-MM-DD"),r.end_date=F(e.compensatory_end_date).format("YYYY-MM-DD"),r.no_of_days=e.compensatory_total_days;let i=Object.values(e.selected_compensatory_leaves).length;console.log("Selected Compensatory No.of days : "+e.compensatory_total_days),console.log("Selected Compensatory Leaves : "+i);const d=Object.values(e.selected_compensatory_leaves);if(parseInt(e.compensatory_total_days)!=i){a.add({severity:"info",summary:"Error",detail:"Compensatory leaves doesnt match with available leave days",life:3e3});return}else d.map(E=>{let T=E.emp_attendance_id;r.compensatory_leave_id.push(T),console.log(r.compensatory_leave_id)})}else e.selected_leave.includes("Permission")?(r.start_date=`${C(e.permission_date).format("YYYY-MM-DD")}
                             ${C(e.permission_start_time).format("HH:mm:ss ")}`,console.log(r.start_date," leave_Request_data.start_date"),r.end_date=`${C(e.permission_date).format("YYYY-MM-DD")}
                             ${C(e.permission_end_time).format("HH:mm:ss")} `,r.hours_diff=e.permission_total_time):a.add({severity:"info",summary:"Info Message",detail:"Select Leave",life:3e3});r.notify_to=e.notifyTo,r.leave_reason=e.leave_reason,z.value=!0,console.log(r),S.value=!0;let g;console.log(u),g=u=="applyleave"?"/applyLeaveRequest":"/applyLeaveRequest_AdminRole",w.post(g,{admin_user_code:u=="applyleave"?" ":o.current_user_code,user_code:u=="applyleave"?o.current_user_code:_.selected_user_code,leave_request_date:r.leave_Request_date,leave_type_name:r.leave_type_name,leave_session:r.leave_session,start_date:r.start_date,end_date:r.end_date,no_of_days:r.no_of_days,hours_diff:e.permission_total_time_in_minutes,compensatory_work_days_ids:r.compensatory_leave_id,notify_to:r.notify_to,leave_reason:r.leave_reason,user_type:r.user_type}).then(i=>{S.value=!1,console.log(i.data.messege),i.data.status=="success"&&Swal.fire("Success",i.data.message,"success"),i.data.status=="failure"&&Swal.fire("Failure",i.data.message,"error"),console.log("Email status"+i.data.status)}).catch(i=>{console.log(i)}).finally(()=>{h.getTermLeaveBalance(),te(),_.getEmployeeAttendance(_.selected_user_code,_.selectedMonth,_.selectedyear),_.currentlySelectedTimesheet==1?_.getSelectedEmployeeAttendance(_.selected_user_code):(o.current_user_role==1||o.current_user_role==2)&&(_.currentlySelectedTimesheet==2?getSelectedEmployeeTeamDetails(_.selected_user_code,!0):_.currentlySelectedTimesheet==3&&_.getSelectedEmployeeOrgDetails(_.selected_user_code,!1,_.selected_user_code)),$.value=!1,_.canShowApplyRegularizationLoading=!1})},te=()=>{e.current_login_user=null,e.selected_leave="",e.full_day_leave_date="",e.half_day_leave_date="",e.half_day_leave_session="",e.radiobtn_full_day="",e.radiobtn_half_day="",e.radiobtn_custom="",e.custom_start_date="",e.custom_end_date="",e.custom_total_days="",e.permission_date="",e.permission_start_time="",e.permission_total_time="",e.permission_total_time_in_minutes=0,e.permission_end_time="",e.compensatory_leaves="",e.compensatory_leaves_dates="",e.selected_compensatory_leaves="",e.compensatory_start_date="",e.compensatory_total_days="",e.compensatory_end_date="",e.notifyTo="",e.leave_reason="",e.leave_request_error_message=null,e.custom_start_day_session="",e.custom_end_day_session=""};return{leaveApplyDailog:$,leave_data:e,invalidDate:H,today:k,invalidDates:U,toast:a,leave_Request_data:r,leave_types:y,data_checking:S,Email_Service:K,Email_Error:ae,selected_compensatory_leaves:se,attendance_start_date:p,leave_restrict_dates:O,before_date:Y,leave_apply_role_type:m,half_day:Q,full_day:le,custom_day:oe,Permission:X,Submit:ie,ReloadPage:ce,dayCalculation:j,time_difference:W,get_user:Z,get_leave_types:ee,get_compensatroy_leaves:R,checkLeaveEligibility:G,getLeaveRestrictDates:re,isRestrict:ne,restChars:te,addHalfday:B,addFullday:x,full_day_format:f,half_day_format:n,custom_format:D,Permission_format:M,compensatory_format:b,TotalNoOfDays:L,RequiredField:z,check_custom_day:N,check_full_day:A,check_half_day:q,custom_date_validation:ue}});export{he as a,ye as b,Te as u};