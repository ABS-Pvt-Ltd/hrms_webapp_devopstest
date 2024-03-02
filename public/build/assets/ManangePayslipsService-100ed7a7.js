import{q as k,r as s,x as F,p}from"./app-e1ab7da0.js";import{d as i}from"./dayjs.min-ac6c82aa.js";import{S as N}from"./Service-a2d19084.js";const j=k("useManagePayslip",()=>{const f=s();N();const n=s(),u=s(),d=s(),y=s(),r=s([]),w=s(),v=s();F("$swal");const M=s(),Y=s(1);async function g(e,l){let t=window.location.origin+"/payroll/paycheck/getAllEmployeesPayslipDetails_v2";p.post(t,{month:e,year:l}).then(a=>{f.value=a.data.data,console.log(a.data),a.data.data.length<=0&&Swal.fire({title:"No employees found in this category",text:"",icon:"warning"}).then(o=>{})})}async function S(){p.get("/fetch-location").then(e=>{y.value=e.data,console.log(y.value)})}async function _(){p.get("/clients-fetchAll").then(e=>{w.value=e.data}).finally(()=>{})}function b(e,l){e&&(Y.value=e);let t=e.map(({Payroll_month:o,Employee_code:c})=>({month:i(o).format("MM"),year:i(o).format("YYYY"),status:l,user_code:c})),a=window.location.origin+"/payroll/paycheck/updatePayslipReleaseStatus";p.post(a,t).then(o=>{console.log(o.data),l===1?o.data.status=="success"&&Swal.fire({title:"",text:"Employee's payslip has been released",icon:"success"}).then(()=>{}):l==0?o.data.status=="success"&&Swal.fire({title:"success",text:"Employee's payslip has been Hold Back",icon:"success"}).then(()=>{}):e&&o.data.status=="success"&&Swal.fire({title:"",text:"Employee's payslip has been sent by email",icon:"success"})}).finally(()=>{g(n.value.getMonth()+1,n.value.getFullYear())})}function D(e){let l=e.map(({Payroll_month:a,Employee_code:o})=>({month:i(a).format("MM"),year:i(a).format("YYYY"),user_code:o,type:"mail"})),t=window.location.origin+"/payroll/paycheck/sendAllEmployeePayslipPdf";p.post(t,l).then(a=>{console.log(a.data)}).finally(()=>{g(n.value.getMonth()+1,n.value.getFullYear())})}async function x(e){console.log("Downloading payslip PDF.....");let l=e.map(({Payroll_month:t,Employee_code:a})=>({month:i(t).format("MM"),year:i(t).format("YYYY"),user_code:a,type:"pdf"}));await p.post("/generatePayslip",l).then(t=>{if(console.log(" Response [downloadPayslipReleaseStatus] : "+JSON.stringify(t.data.data)),t.data){let a=t.data.data.payslip,o=t.data.data.emp_name,c=t.data.data.month,h=t.data.data.year;console.log(a),a&&(a.startsWith("JVB")?(a="data:application/pdf;base64,"+a,m(a,o,c,h)):a.startsWith("data:application/pdf;base64")&&m(a))}else console.log("Response Url Not Found")}).finally(()=>{})}function m(e,l,t,a){const o=e,c=document.createElement("a"),h=`${l}-${t}-${a}.pdf`;c.href=o,c.download=h,c.click()}function E(e,l){e=="Business Unit"?u.value=l:e=="departments"?d.value=l:e=="Location"?(r.value=l,console.log(r.value)):e=="selectedDate"&&(n.value=l)}return{selectedDetails:v,manage_payslips_details:f,selectedDate:n,enable_select_calendar:M,getManagePayslipDetails:g,send_payslip_request:b,send_payslip_Email:D,downloadFileObject:m,downloadPayslip:x,selectedFilter:E,businessUnit:u,departments:d,selected_Location:r,getlocation:y,Enable_btn:Y,getLocationDetails:S,getClientDetails:_,clientList:w,getFilterSource:e=>{if(n.value){let l=window.location.origin+"/payroll/paycheck/getAllEmployeesPayslipDetails_v2";p.post(l,{department_id:d.value,location:r.value,legal_entity:u.value,month:e?i(e).format("MM"):n.value.getMonth()+1,year:e?i(e).format("YYYY"):n.value.getFullYear()}).then(t=>{f.value=t.data.data,t.data.data.length<=0&&Swal.fire({title:"No employees found in this category",text:"",icon:"warning"}).then(a=>{}),console.log(t.data)})}else Swal.fire({title:"failure",text:"please select the Month",icon:"warning"}).then(l=>{})},clearFilter:()=>{d.value=null,u.value=null,v.value="",n.value=new Date}}});export{j as u};
