import{q as Be,x as Ve,r,y as Le,z as ve,v as Pe,p as R,u as $e}from"./app-e1ab7da0.js";import{S as Se}from"./Service-a2d19084.js";import{r as Oe,u as we}from"./xlsx-4ad528ac.js";import{r as s,c,e as ze,u as Re}from"./index.esm-8509f6bf.js";import"./dayjs.min-ac6c82aa.js";const Ue=Be("useNormalOnboardingMainStore",()=>{const y=Se();Ve("$swal");const f=r(!1),d=Le(),e=ve({can_onboard_employee:1,emp_client_code:"",employee_code:"",doj:"",aadhar_number:"",passport_number:"",bank_id:"",bank_name:"",employee_name:"",gender:"",pan_number:"",passport_date:"",AccountNumber:"",dob:"",mobile_number:"",dl_no:"",blood_group_name:"",blood_group_id:"",bank_ifsc:"",marital_status:"",marital_status_id:"",email:"",nationality:"",physically_challenged:"",first_letter_emp_name:"",second_letter_emp_name:"",current_address_line_1:"",current_address_line_2:"",current_country:"",current_state:"",current_country_id:"",current_state_id:"",current_city:"",current_pincode:"",permanent_address_line_1:"",permanent_address_line_2:"",permanent_country:"",permanent_state:"",permanent_country_id:"",permanent_state_id:"",permanent_city:"",permanent_pincode:"",department:"",department_id:"",process:"",designation:"",cost_center:"",probation_period:"",work_location:"",l1_manager_code:"",l1_manager_code_id:"",holiday_location:"",officical_mail:"",official_mobile:"",emp_notice:"",confirmation_period:"",father_name:"",dob_father:"",father_gender:"Male",father_age:"",mother_name:"",dob_mother:"",mother_gender:"Female",mother_age:"",spouse_name:"",wedding_date:"",spouse_gender:"",dob_spouse:"",no_of_children:"",basic:"",hra:"",statutory_bonus:"",child_education_allowance:"",food_coupon:"",lta:"",other_allowance:"",special_allowance:"",graduity:"",cic:"",insurance:"",epf_employee:"",epf_employer_contribution:"",esic_employee:"",esic_employer_contribution:"",professional_tax:"",labour_welfare_fund:"",net_income:"0",total_ctc:0,AadharCardFront:"",AadharCardBack:"",PanCardDoc:"",DrivingLicenseDoc:"",EductionDoc:"",VoterIdDoc:"",RelievingLetterDoc:"",PassportDoc:"",save_draft_messege:""}),U=r(!1),x=r(!1),b=r(!1),M=r(),i=r(!1),le=r(),j=r(!1),A=r(!1),D=r(!1),se=r(!1),ie=r(!1),De=r(!1),m=r(),l=ve({AadharFrontIsMandatory:!0,AadharBackIsMandatory:!0,panCardIsMandatory:!0,educationCertificateIsMandatory:!0,passport:!0,DrivingLicense:!0,voterId:!0,RelievingLetter:!0}),F=(a,t)=>{let o=a.target.files[0];console.log(o);const n=2*512*512;o&&(o.type=="image/jpeg"||o.type=="image/png"?t=="AadharFront"?(e.AadharCardFront=a.target.files[0],e.AadharCardFront.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.AadharCardFront.name}`,life:3e3}),e.AadharCardFront="",a.target.files[0]="",o="")):t=="AadharBack"?(e.AadharCardBack=a.target.files[0],e.AadharCardBack.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.AadharCardBack.name}`,life:3e3}),e.AadharCardBack="",a.target.files[0]="",o="")):t=="Pancard"?(e.PanCardDoc=a.target.files[0],e.PanCardDoc.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.PanCardDoc.name}`,life:3e3}),e.PanCardDoc="",a.target.files[0]="",o="")):t=="DrivingLicense"?(e.DrivingLicenseDoc=a.target.files[0],e.DrivingLicenseDoc.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.DrivingLicenseDoc.name}`,life:3e3}),e.DrivingLicenseDoc="",a.target.files[0]="",o="")):t=="Passport"?(e.PassportDoc=a.target.files[0],e.PassportDoc.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.PassportDoc.name}`,life:3e3}),e.PassportDoc="",a.target.files[0]="",o="")):t=="VoterId"?(e.VoterIdDoc=a.target.files[0],e.VoterIdDoc.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.VoterIdDoc.name}`,life:3e3}),e.VoterIdDoc="",a.target.files[0]="",o="")):t=="EducationCertificate"?(e.EductionDoc=a.target.files[0],e.EductionDoc.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.EductionDoc.name}`,life:3e3}),e.EductionDoc="",a.target.files[0]="",o="")):t=="RelievingLetter"?(e.RelievingLetterDoc=a.target.files[0],e.RelievingLetterDoc.size>n&&(console.log("testing image update size :: "),d.add({severity:"error",summary:"Error",detail:`The file its too large.Allowed maximum size is 1MB ${e.RelievingLetterDoc.name}`,life:3e3}),e.RelievingLetterDoc="",a.target.files[0]="",o="")):console.log("No more files"):d.add({severity:"error",summary:"Error",detail:"Upload Valid File format",life:3e3}))},C=r(),q=r(),z=r(),B=r(),Z=r(),ce=r(),H=r(),L=()=>{e.aadhar_number=r("3977 8798 6564"),e.pan_number=r("BGAJP6646F"),e.blood_group_name=r("B Positive"),e.dob=r("23-07-2000"),e.dl_no=r("HR-0619850034761"),e.passport_number=r("A2096457"),e.passport_date=r("23-5-2030"),e.bank_name=r("ANDHRA BANK"),e.physically_challenged=r("No"),e.AccountNumber=r("35216644292"),e.bank_ifsc=r("SBIN0121325"),e.nationality=r("Indian"),e.gender=r("Male"),e.marital_status=r("Married"),e.mobile_number=r("8248023344"),e.current_address_line_1=r("45/21 2nd Avenue,chennai"),e.current_address_line_2=r("45/21 2nd Avenue,chennai"),e.current_country=r("India"),e.current_state=r("Tamil Nadu"),e.current_city=r("chennai"),e.current_pincode=r("600023"),e.permanent_address_line_1=r("45/21 2nd Avenue,chennai"),e.permanent_address_line_2=r("45/21 2nd Avenue,chennai"),e.permanent_country=r("India"),e.permanent_city=r("chennai"),e.permanent_state=r("Tamil Nadu"),e.permanent_pincode=r("600003"),e.department=r("IT"),e.process=r("Iti"),e.cost_center=r("Chennai"),e.holiday_location=r("Tamilnadu"),e.work_location=r("chennai"),e.officical_mail=r("voidmax@gmail.com"),e.official_mobile=r("4646454547"),e.father_name=r("David"),e.father_age=r("45"),e.dob_father=r("23-09-1968"),e.mother_name=r("Licas"),e.dob_mother=r("23-8-1970"),e.mother_gender=r("Female"),e.mother_age=r("35"),e.spouse_gender=r("female"),e.dob_spouse=r("12-8-1995"),e.spouse_name=r("priyanka")},Q=()=>{O.value=!1,i.value=!0;let a=parseInt(e.basic)+parseInt(e.hra)+parseInt(e.special_allowance);e.gross=Math.floor(a);let t=e.gross-e.epf_employee-e.esic_employee;e.net_income=t;let o=parseInt(e.gross)+parseInt(e.epf_employer_contribution)+parseInt(e.esic_employer_contribution)+parseInt(e.insurance)+parseInt(e.graduity);e.total_ctc=o};function G(a,t){return a.setFullYear(a.getFullYear()+t),a}function S(a,t){return a.setFullYear(a.getFullYear()-t),a}const Y=a=>G(a,18),J=a=>S(a,10),ue=a=>S(a,18),g=a=>a?a.type=="image/jpeg"||a.type=="image/png"||a.type=="application/pdf":!0,T=a=>(console.log("employee_onboarding.spouse_name",e.spouse_name),e.marital_status==2?!!a:!0),K=Pe(()=>({employee_code:{},employee_name:{required:s},gender:{},passport_number:{},passport_date:{},blood_group_name:{},physically_challenged:{},gender:{},dl_no:{},nationality:{},doj:{required:s},aadhar_number:{required:c.withMessage("Aadhar number is required",s),validateAadhar:c.withMessage("Invalid aadhar number",a=>/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(a))},bank_name:{required:s},gender:{required:s},pan_number:{required:c.withMessage("Pan number is required",s),ValidatePan:c.withMessage("Invalid Pan number ",a=>/^([a-zA-Z]){3}([Pp]){1}([a-zA-Z]){1}([0-9]){4}([a-zA-Z]){1}?$/.test(a))},AccountNumber:{required:s,ValidateAccountNo(a){return/^[0-9]{9,18}$/.test(a)}},dob:{required:s},mobile_number:{required:s,maxLength:10},bank_ifsc:{required:c.withMessage("Ifsc code is required",s),ValidateIfscNo:c.withMessage("Invalid Ifsc code",a=>/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(a))},marital_status:{required:s},email:{required:s,email:ze},nationality:{required:s},physically_challenged:{},current_address_line_1:{required:s},current_address_line_2:{required:s},current_country:{required:s},current_state:{required:s},current_city:{required:s},current_pincode:{required:s,maxLength:6},permanent_address_line_1:{required:s},permanent_address_line_2:{required:s},permanent_country:{required:s},permanent_state:{required:s},permanent_city:{required:s},permanent_pincode:{required:s,maxLength:6},process:{},designation:{required:s},department:{},cost_center:{},probation_period:{},holiday_location:{},officical_mail:{email:c.withMessage("Enter valid email",ze)},official_mobile:{},probation_period:{},emp_notice:{},work_location:{required:s},l1_manager_code:{required:s},confirmation_period:{required:s},father_name:{required:s},dob_father:{required:s},mother_name:{required:s},dob_mother:{required:s},spouse_name:{isMarried:c.withMessage("Spouse name is required",T)},spouse_gender:{isMarried:c.withMessage("Spouse gender is required",T)},dob_spouse:{isMarried:c.withMessage("Spouse dob is required",T)},cic:{},AadharCardFront:{required:c.withMessage("Aadhar front is required",a=>l.AadharFrontIsMandatory?!0:a?!l.AadharFrontIsMandatory:l.AadharFrontIsMandatory),validateFile:c.withMessage("Upload Valid format",g)},AadharCardBack:{required:c.withMessage("Aadhar back is required",a=>l.AadharBackIsMandatory?!0:a?!l.AadharBackIsMandatory:l.AadharBackIsMandatory),validateFile:c.withMessage("Upload Valid format",g)},PanCardDoc:{required:c.withMessage("Pan Card is required",a=>l.panCardIsMandatory?!0:a?!l.panCardIsMandatory:l.panCardIsMandatory),validateFile:c.withMessage("Upload Valid format",g)},DrivingLicenseDoc:{required:c.withMessage("Driving License is required",a=>l.DrivingLicense?!0:a?!l.DrivingLicense:l.DrivingLicense),validateFile:c.withMessage("Upload Valid format",g)},EductionDoc:{required:c.withMessage("Education Certificate is required",a=>l.educationCertificateIsMandatory?!0:a?!l.educationCertificateIsMandatory:l.educationCertificateIsMandatory),validateFile:c.withMessage("Upload Valid format",g)},VoterIdDoc:{required:c.withMessage("Voter Id is required",a=>l.voterId?!0:a?!l.voterId:l.voterId),validateFile:c.withMessage("Upload Valid format",g)},RelievingLetterDoc:{required:c.withMessage("Relieving Letter is required",a=>l.RelievingLetter?!0:a?!l.RelievingLetter:l.RelievingLetter),validateFile:c.withMessage("Upload Valid format",g)},PassportDoc:{required:c.withMessage("passport is required",a=>l.passport?!0:a?!l.passport:l.passport),validateFile:c.withMessage("Upload Valid format",g)}})),k=Re(K,e),I=a=>{console.log(a);let t=new FormData;t.append("can_onboard_employee",e.can_onboard_employee),t.append("emp_client_code",e.emp_client_code),t.append("employee_code",`${e.emp_client_code}${e.employee_code}`),t.append("doj",e.doj?moment(e.doj).format("YYYY-MM-DD"):e.doj),t.append("aadhar_number",e.aadhar_number),t.append("passport_number",e.passport_number),t.append("bank_id",e.bank_name),t.append("employee_name",e.employee_name),t.append(" gender",e.gender),t.append("pan_number",e.pan_number),t.append("passport_date",e.passport_date),t.append("AccountNumber",e.AccountNumber),t.append("dob",e.dob?moment(e.dob).format("YYYY-MM-DD"):e.dob),t.append("mobile_number",e.mobile_number),t.append("dl_no",e.dl_no),t.append("blood_group_name",e.blood_group_name),t.append("bank_ifsc",e.bank_ifsc),t.append("marital_status",e.marital_status),t.append("email",e.email),t.append("nationality",e.nationality),t.append("physically_challenged",e.physically_challenged),t.append("current_address_line_1",e.current_address_line_1),t.append("current_address_line_2",e.current_address_line_2),t.append("current_country",e.current_country),t.append("current_state",e.current_state),t.append("current_city",e.current_city),t.append("current_pincode",e.current_pincode),t.append(" permanent_address_line_1",e.permanent_address_line_1),t.append("permanent_address_line_2",e.permanent_address_line_2),t.append("permanent_country",e.permanent_country),t.append("permanent_state",e.permanent_state),t.append("permanent_city",e.permanent_city),t.append("permanent_pincode",e.permanent_pincode),t.append("department",e.department),t.append("process",e.process),t.append("designation",e.designation),t.append("cost_center",e.cost_center),t.append("probation_period",e.probation_period),t.append("work_location",e.work_location),t.append("l1_manager_code_id",e.l1_manager_code.user_code),t.append("holiday_location",e.holiday_location),t.append("officical_mail",e.officical_mail),t.append("official_mobile",e.official_mobile),t.append("emp_notice",e.emp_notice),t.append("confirmation_period",e.confirmation_period?moment(e.confirmation_period).format("YYYY-MM-DD"):e.confirmation_period),t.append("father_name",e.father_name),e.dob_father==""?t.append("dob_father",e.dob_father):t.append("dob_father",moment(e.dob_father).format("YYYY-MM-DD")),t.append("father_gender",e.father_gender),t.append("father_age",e.father_age),t.append("mother_name",e.mother_name),e.dob_mother==""?t.append("dob_mother",e.dob_mother):t.append("dob_mother",moment(e.dob_mother).format("YYYY-MM-DD")),t.append("mother_gender",e.mother_gender),t.append("mother_age",e.mother_age),t.append("spouse_name",e.spouse_name),e.wedding_date==""?t.append("wedding_date",e.wedding_date):t.append("wedding_date",moment(e.wedding_date).format("YYYY-MM-DD")),t.append("spouse_gender",e.spouse_gender),e.dob_spouse==""?t.append("dob_spouse",e.dob_spouse):t.append("dob_spouse",moment(e.dob_spouse).format("YYYY-MM-DD")),t.append("no_of_children",e.no_of_children),t.append("basic",e.basic),t.append("hra",e.hra),t.append("statutory_bonus",e.statutory_bonus),t.append("child_education_allowance",e.child_education_allowance),t.append("food_coupon",e.food_coupon),t.append("lta",e.lta),t.append("special_allowance",e.special_allowance),t.append("other_allowance",e.other_allowance),t.append("gross",e.gross),t.append("epf_employer_contribution",e.epf_employer_contribution),t.append("graduity",e.graduity),t.append("insurance",e.insurance),t.append("cic",e.total_ctc),t.append("epf_employee",e.epf_employee),t.append("esic_employee",e.esic_employee),t.append("esic_employer_contribution",e.esic_employer_contribution),t.append("professional_tax",e.professional_tax),t.append("labour_welfare_fund",e.labour_welfare_fund),t.append("net_income",e.net_income),t.append("Aadharfront",e.AadharCardFront),t.append("AadharBack",e.AadharCardBack),t.append("panDoc",e.PanCardDoc),t.append("eductionDoc",e.EductionDoc),t.append("releivingDoc",e.RelievingLetterDoc),t.append("voterId",e.VoterIdDoc),t.append("passport",e.PassportDoc),t.append("dlDoc",e.DrivingLicenseDoc),console.log(t),f.value=!0,R.post("/vmt-employee-onboard",t).then(o=>{o.data.status=="success"?(a==1&&setTimeout(()=>{window.location.reload()},1e3),Swal.fire({title:o.data.status="success",text:o.data.message,icon:"success",showCancelButton:!1}).then(n=>{M.value=="quick"&&o.data.can_redirect=="1"&&(window.location.href="/Information")})):Swal.fire("Failure",`${o.data.message}`,"error"),e.save_draft_messege=o.data}).catch(function(o){console.log(o)}).finally(()=>{f.value=!1})},V=a=>{e.can_onboard_employee=a,k.value.$validate(),!A.value&&!D.value?!se.value&&!ie.value&&(a==0?e.employee_code&&e.employee_name&&e.mobile_number&&e.email?(I(a),k.value.$reset()):j.value=!0:a==1&&(k.value.$error?(console.log("Form failed validation"),d.add({severity:"error",summary:"Invalid",detail:"fill mandatory fields",life:3e3})):(console.log("Form successfully submitted."),I(a),M.value&&(window.location.href="/Information")))):console.log("invalid")},de=a=>{a?R.post("/fetch-quickonboarded-emp-details",{user_id:a}).then(t=>{W(t.data)}):(console.log("UID not found in req params"),R.get("/get-client-code").then(t=>{console.log(t.data),le.value=t.data,e.emp_client_code=t.data}))},W=a=>{console.log("populate data"),console.log("populateQuickOnboardData : "+JSON.stringify(a)),M.value=a.onboard_type,a.onboard_type=="quick"||a.onboard_type=="bulk"?(console.log(a.onboard_type+"Onboarding"),i.value=!0,O.value=!1,p.is_emp_code_quick=!0,p.is_doj_quick=!0,p.is_emp_name_quick=!0,p.is_mob_quick=!0,p.is_email_quick=!0,p.statutory=!0,p.child=!0,p.fdc=!0,p.lta=!0,p.other=!0,p.mobile=!0,p.designation=!0,p.isDisableClientCode=!1):console.log("normal onboarding"),a.marital_status_id=="2"&&(x.value=!0),console.log(r(a.gender),"ref(emp_data.gender)"),_e(a.gender),e.employee_code=r(a.user_code),e.employee_name=r(a.name),e.dob=r(a.dob),e.marital_status=parseInt(a.marital_status_id),e.gender=r(a.gender),e.aadhar_number=r(a.aadhar_number),e.pan_number=r(a.pan_number),e.dl_no=r(a.dl_no),e.nationality=r(a.nationality),e.blood_group_name=r(a.blood_group_name),e.email=r(a.email),e.doj=r(a.doj),e.mobile_number=r(a.mobile_number),e.designation=r(a.designation),e.l1_manager_code=r(a.l1_manager_code),console.log("emp_data.basic"+_(a.basic)),e.basic=r(_(a.basic)),e.hra=r(_(a.hra)),e.statutory_bonus=r(_(a.Statutory_bonus)),e.child_education_allowance=r(_(a.child_education_allowance)),e.food_coupon=r(_(a.food_coupon)),e.lta=r(_(a.lta)),e.special_allowance=r(_(a.special_allowance)),e.other_allowance=r(_(a.other_allowance)),e.epf_employer_contribution=r(_(a.epf_employer_contribution)),e.esic_employer_contribution=r(_(a.esic_employer_contribution)),e.insurance=r(_(a.insurance)),e.graduity=r(_(a.graduity)),e.epf_employee=r(_(a.epf_employee)),e.esic_employee=r(_(a.esic_employee)),e.professional_tax=r(_(a.professional_tax)),e.labour_welfare_fund=r(_(a.labour_welfare_fund)),e.cic=r(_(a.cic))};function Me(a){console.log(a,"spouseDisable"),e.marital_status==2||a==2?x.value=!0:x.value=!1}const Ae=()=>{y.getBankList().then(a=>C.value=a.data),y.getCountryList().then(a=>q.value=a.data),y.getStateList().then(a=>B.value=a.data),y.ManagerDetails().then(a=>Z.value=a.data),y.DepartmentDetails().then(a=>z.value=a.data),y.getMaritalStatus().then(a=>{ce.value=a.data}),y.getBloodGroups().then(a=>H.value=a.data),R.get("/getMandatoryDocumentDetails").then(a=>{m.value=a.data,console.log(a.data[0])}).finally(()=>{m.value&&(console.log("working"),m.value.forEach(a=>{a.document_name=="Aadhar Card Front"&&a.is_mandatory==1&&(console.log("Aadhar Card Front in man"),l.AadharFrontIsMandatory=!1),a.document_name=="Aadhar Card Back"&&a.is_mandatory==1&&(console.log("Aadhar Card Back in man"),l.AadharBackIsMandatory=!1),a.document_name=="Pan Card"&&a.is_mandatory==1&&(console.log("Pan in man"),l.panCardIsMandatory=!1),a.document_name=="Education Certificate"&&a.is_mandatory==1&&(console.log("Education in man"),l.educationCertificateIsMandatory=!1),a.document_name=="Passport"&&a.is_mandatory==1&&(console.log("Passport in man"),l.passport=!1),a.document_name=="Voter ID"&&a.is_mandatory==1&&(l.voterId=!1),a.document_name=="Driving License"&&a.is_mandatory==1&&(l.DrivingLicense=!1),a.document_name=="Relieving Letter"&&a.is_mandatory==1&&(l.RelievingLetter=!1)}))})},_e=a=>{console.log(a),(a=="Male"||a=="Male")&&(console.log("0"+e.gender),e.spouse_gender="Female",console.log(e.spouse_gender),p.spouse=!0),(a=="Female"||a=="female")&&(e.spouse_gender="Male",console.log("1"+e.gender),console.log(e.spouse_gender),p.spouse=!0),(a=="Others"||a=="others")&&(p.spouse=!1)},Ce=()=>{if(console.log("Father's Age"+e.dob_father),console.log("Mother's Age"+e.dob_mother),e.dob_father){var a=new Date(e.dob_father);console.log(" birthDate"+a);var t=Date.now()-a.getTime(),o=new Date(t),n=Math.abs(o.getUTCFullYear()-1970);e.father_age=n}if(e.dob_mother){var a=new Date(e.dob_mother);console.log(" birthDate"+a);var t=Date.now()-a.getTime(),o=new Date(t),n=Math.abs(o.getUTCFullYear()-1970);e.mother_age=n}if(e.dob){var a=new Date(e.dob);console.log(" birthDate"+a);var t=Date.now()-a.getTime(),o=new Date(t),n=Math.abs(o.getUTCFullYear()-1970);console.log("calculated Age"+n),n<18&&(console.log("not less than 18"),e.dob="")}},X=()=>{e.nationality=="Other Nationality"?b.value=!0:b.value=!1},ke=()=>{U.value==!1?(e.permanent_address_line_1=e.current_address_line_1,e.permanent_address_line_2=e.current_address_line_2,e.permanent_country=e.current_country,e.permanent_state=e.current_state,e.permanent_city=e.current_city,e.permanent_pincode=e.current_pincode):U.value==!0&&(e.permanent_address_line_1="",e.permanent_address_line_2="",e.permanent_country="",e.permanent_city="",e.permanent_state="",e.permanent_pincode="")};ve({});const E=r(),h=()=>{let a=e.cic*50/100;console.log("Basic :"+Math.floor(a)),e.basic=Math.floor(a);let t=e.basic*50/100;e.hra=Math.floor(t),e.special_allowance=e.basic-e.hra,console.log(e.special_allowance),E.value=a+t+e.special_allowance,console.log("Actual gross"+E.value);let o=a+t+e.special_allowance;e.gross=Math.floor(o),console.log("Gross",Math.floor(o)),he(),setTimeout(()=>{pe()},1e3),setTimeout(()=>{ee()},1e3)},ee=()=>{e.net_income=e.gross-e.epf_employee-e.esic_employee},pe=()=>{e.total_ctc=e.gross+e.epf_employer_contribution+e.esic_employer_contribution+e.insurance+e.graduity,console.log("ctc"+e.total_ctc)},me=()=>{let a=e.statutory_bonus,t=e.special_allowance;console.log(a,t),console.log(t-a),setTimeout(()=>{e.special_allowance=t-a,e.special_allowance<0&&(d.add({severity:"error",summary:" Special Allowance",detail:"Not less than zero",life:3e3}),h(),e.statutory_bonus="",e.child_education_allowance="",e.food_coupon="",e.lta="",e.other_allowance="")},1e3)},fe=()=>{let a=e.statutory_bonus+e.child_education_allowance+e.food_coupon+e.other_allowance,t=e.special_allowance;console.log(a,t),console.log(t-a),setTimeout(()=>{e.special_allowance=t-a,e.special_allowance<0&&(d.add({severity:"error",summary:" Special Allowance",detail:"Not less than zero",life:3e3}),h(),e.statutory_bonus="",e.child_education_allowance="",e.food_coupon="",e.lta="",e.other_allowance="")},3e3)},ge=()=>{let a=e.child_education_allowance,t=e.special_allowance;console.log(a,t),setTimeout(()=>{e.special_allowance=t-a,e.special_allowance<0&&(d.add({severity:"error",summary:" Special Allowance",detail:"Not less than zero",life:3e3}),h(),e.statutory_bonus="",e.child_education_allowance="",e.food_coupon="",e.lta="",e.other_allowance="")},1100)},P=()=>{let a=e.food_coupon,t=e.special_allowance;console.log(a,t),setTimeout(()=>{e.special_allowance=t-a,e.special_allowance<0&&(d.add({severity:"error",summary:" Special Allowance",detail:"Not less than zero",life:3e3}),h(),e.statutory_bonus="",e.child_education_allowance="",e.food_coupon="",e.lta="",e.other_allowance="")},1150)},ae=()=>{let a=e.lta,t=e.special_allowance;console.log(a,t),setTimeout(()=>{e.special_allowance=t-a,e.special_allowance<0&&(d.add({severity:"error",summary:" Special Allowance",detail:"Not less than zero",life:2e3}),h(),e.statutory_bonus="",e.child_education_allowance="",e.food_coupon="",e.lta="",e.other_allowance="")},1200)},$=()=>{let a=e.other_allowance,t=e.special_allowance;console.log(a,t),setTimeout(()=>{e.special_allowance=t-a,e.special_allowance<0&&(d.add({severity:"error",summary:" Special Allowance",detail:"Not less than zero",life:3e3}),h(),e.statutory_bonus="",e.child_education_allowance="",e.food_coupon="",e.lta="",e.other_allowance="")},1250)},Ie=()=>{let a=e.total_ctc;console.log("total"+a);let t=parseInt(a)+parseInt(e.insurance);console.log("sum "+t),setTimeout(()=>{e.total_ctc=t},1e3)},Ee=()=>{let a=e.total_ctc;console.log("total"+a);let t=parseInt(e.total_ctc)+parseInt(e.graduity);console.log(t),console.log(e.total_ctc),setTimeout(()=>{e.total_ctc=t},2e3)},he=()=>{let a=e.gross-e.hra,t=E.value;if(console.log("EpfCalculation:"+a),a<15e3)e.epf_employer_contribution=Math.floor(a*12/100),e.epf_employee=Math.floor(a*12/100);else if(a>15e3){let o=1800;e.epf_employee=o,e.epf_employer_contribution=o}if(t<=21e3)e.esic_employer_contribution=Math.floor(e.gross*3.25/100),e.esic_employee=Math.floor(e.gross*.75/100);else if(t>21e3){console.log(t);let o=0;e.esic_employee=o,e.esic_employer_contribution=o}},p=ve({is_emp_code_quick:!1,is_emp_name_quick:!1,is_doj_quick:!1,is_mob_quick:!1,is_email_quick:!1,statutory:!1,child:!1,fdc:!1,lta:!1,other:!1,l1_code:!1,designation:!1,mobile:!1,spouse:!1,isDisableClientCode:!0}),O=r(!0),_=a=>{const t=parseFloat(a.replace(/,/g,""));return console.log(t),t};return{canShowLoading:f,employee_onboarding:e,getBasicDeps:Ae,clientCode:le,bankList:C,country:q,state:B,departmentDetails:z,Managerdetails:Z,maritalDetails:ce,bloodGroups:H,checkIsQuickOrNormal:M,family_details_disable:i,isSpouseDisable:x,spouseDisable:Me,ForCopyAdrress:ke,spouseGenderCheck:_e,fnCalculateAge:Ce,isNationalityVisible:b,NationalityCheck:X,RequiredDocument:j,user_code_exists:A,is_ac_no_exists:ie,is_mobile_no_exists:se,personal_mail_exists:D,pan_card_exists:De,mandatoryDocuments:m,isQuickOrBulkOnboarding:de,populateQuickOnboardData:W,compensatory_calculation:h,net_calculation:ee,gross_calculation:pe,statutory_bonus:me,special_allowance_cal:fe,child_allowance:ge,food_coupon:P,lta:ae,other_allowance:$,insurance:Ie,graduity:Ee,compensatoryCalWhileQuick:Q,Sampledata:L,rules:K,submitForm:V,getPersonalDocuments:F,readonly:p,afterYears:Y,beforeYears:J,compen_disable:O,dateOfBirth:ue,stringIntoNumber:_}}),Je=Be("useOnboardingMainStore",()=>{Se(),Ue();const y=$e(),f=r(!1),d=Le(),e=r(),U=r(),x=r(),b=r(),M=r([]),i=r([]),le=r(!1),j=r(!1),A=r(),D=r(),se=o=>{b.value=o.target.files[0]},ie=o=>{if(A.value=o,console.log(o),b.value){var n=b.value;if(!n)return;var u=new FileReader;u.onload=function(N){const Ye=u.result;var ye=Oe(Ye,{type:"binary",cellDates:!0,dateNF:"dd-mm-yyyy"}),Fe=ye.Sheets[ye.SheetNames[0]];let te=[],qe=[];const oe={},Ne=we.decode_range(Fe["!ref"]);let v;const Te=Ne.s.r;for(v=Ne.s.c;v<=Ne.e.c;++v){const w=Fe[we.encode_cell({c:v,r:Te})];let ne="UNKNOWN "+v;w&&w.t&&(ne=we.format_cell(w)),oe[v]=ne,te.push(oe[v]);let xe={title:oe[v],value:oe[v]};oe[v].includes("UNKNOWN")||qe.push(xe)}U.value=qe,x.value=te,console.log(te),f.value=!0,setTimeout(()=>{o=="quick"?t(te,de.value)?(D.value="quick",y.replace("/Organization/import"),f.value=!1):(f.value=!1,d.add({severity:"error",summary:"Fields are not matched",detail:"fill",life:2e3}),b.value=null):o=="bulk"&&(D.value="bulk",t(te,W.value)?(y.replace("/Organization/import"),f.value=!1):(f.value=!1,d.add({severity:"error",summary:"Fields are not matched",detail:"fill",life:2e3}),b.value=null))},1e3);const re=ye.SheetNames.reduce((w,ne)=>{const xe=ye.Sheets[ne];return w[ne]=we.sheet_to_json(xe,{raw:!1,dateNF:"dd-mm-yyyy"}),w},{}),be=Object.keys(re)[0];re[be]?e.value=re[be]:e.value=[],e.value&&Z(e.value),M.value.push(e.value);for(let w=0;w<re[be].length;w++)console.log("jsonData['Sheet1'].length :",re[be].length),a(e.value[w])},u.readAsArrayBuffer(n)}else d.add({severity:"error",summary:"file missing!",detail:"selected",life:2e3})},De=o=>{let n="";D.value=="quick"?n="/onboarding/storeQuickOnboardEmployees":D.value=="bulk"&&(n="/onboarding/storeBulkOnboardEmployees"),i.value==0?(f.value=!0,R.post(n,o).then(u=>{u.data.status=="failure"?d.add({severity:"error",summary:"failure",detail:`${u.data.message}`,life:3e3}):u.data.status=="success"&&(u.data.data.forEach(N=>{d.add({severity:"success",summary:`${N.Employee_Name}`,detail:`${N.message}`,life:3e3})}),setTimeout(()=>{window.location.replace(window.location.origin+"/Organization/manage-employees")},4e3))}).finally(()=>{f.value=!1})):d.add({severity:"error",summary:"Failure!",detail:"Clear error fields",life:3e3})};function m(o){return o.filter((n,u)=>o.indexOf(n)!==u)}let l=r([]),F=r([]),C=r([]),q=r([]),z=r([]),B=r([]);const Z=o=>{o.forEach(n=>{l.value.push(n["Employee Code"]),F.value.push(n.Email),C.value.push(n["Mobile Number"]),q.value.push(n["Pan No"]),z.value.push(n.Aadhar),B.value.push(n["Account No"])})},ce=(o,n)=>!!m(o).includes(n),H=r(),L=r(),Q=r(),G=r(),S=r(),Y=r(),J=r(),ue=r(),g=r(),T=r(),K=r(),k=r(),I=r(),V=r([]),de=r(),W=r(),Me=()=>{R.get("/onboarding/getEmployeeMandatoryDetails").then(o=>{Object.values(o.data).forEach(n=>{H.value=n.client_code,L.value=n.user_code,G.value=n.mobile_number,Q.value=n.email,S.value=n.pan_number,Y.value=n.aadhar_number,J.value=n.bankaccount_number,ue.value=n.bank_name,g.value=n.department_name,T.value=n.official_mail,K.value=n.employees_blood_group,k.value=n.employees_marital_status,I.value=n.client_details,I.value&&I.value.forEach(u=>{V.value.push(u.client_fullname)}),de.value=n.quick_onboard_column_data,W.value=n.bulk_onboard_column_data})})},Ae=o=>!/^[ A-Za-z_ ]+$/.test(o),_e=o=>!(/^[A-Za-z0-9]+$/.test(o)&&!L.value.includes(o));function Ce(o,n){const u=n.split(/(?=\d)/);return!!Object.values(o).includes(u[0])}const X=o=>o?!L.value.includes(o):!0,ke=o=>!/^[0-9]+$/.test(o),E=o=>o?!(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(o.trim())&&!Q.value.includes(o.trim())):!1,h=o=>{const n=ee(o);return o?!(/^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/.test(n)&&!Y.value.includes(n)):!1};function ee(o){const n=String(o),u=[];for(let N=0;N<n.length;N+=4)u.push(n.substr(N,4));return u.join(" ")}const pe=o=>!!Y.value.includes(o),me=o=>{let n="";return o&&(n=o.toUpperCase()),o?!(/^([a-zA-Z]){3}([Pp]){1}([a-zA-Z]){1}([0-9]){4}([a-zA-Z]){1}?$/.test(n.trim())&&S.value.includes(n.trim())):!0},fe=o=>o?!!J.value.includes(o.trim()):!1,ge=o=>{let n="";return o&&(n=o.toUpperCase()),o?!/^[A-Za-z]{4}0[A-Za-z0-9]{6}$/.test(n.trim()):!1},P=o=>o?!/^[0-9]{1,2}-[0-9]{1,2}-[0-9]{4}$/.test(o):!0,ae=o=>o?!(/^[0-9]{10,10}$/.test(o.trim())&&!G.value.includes(o.trim())):!1,$=(o,n)=>n?!o.includes(n):!1,Ie=o=>{let n=String.fromCharCode(o.keyCode);if(/^[0-9]+$/.test(n))return!0;o.preventDefault()},Ee=o=>{let n=String.fromCharCode(o.keyCode);if(/^[A-Za-z_ ]+$/.test(n))return!0;o.preventDefault()},he=o=>{let n=String.fromCharCode(o.keyCode);if(/^[A-Za-z0-9]+$/.test(n))return!0;o.preventDefault()},p=o=>{if(o){let u=(o?o.toUpperCase():"").trim();return!ue.value.includes(u)}else return!0},O=o=>o?!!g.value.includes(o):!0,_=o=>!!T.value.includes(o),a=o=>{console.log(A.value);let n=[];return A.value=="quick"?m(l.value).includes(o["Employee Code"])||!X(o["Employee Code"])||$(V.value,o["Legal Entity"])?i.value.push("invalid"):o["Legal Entity"]?(m(F.value).includes(o.Email)||E(o.Email)||P(o.DOJ)||m(C.value).includes(o["Mobile Number"])||ae(o["Mobile Number"]))&&i.value.push("invalid"):i.value.push("invalid"):A.value=="bulk"?m(l.value).includes(o["Employee Code"])||!X(o["Employee Code"])||$(V.value,o["Legal Entity"])?i.value.push("invalid"):o["Legal Entity"]?m(F.value).includes(o.Email)||E(o.Email)||P(o.DOJ)||P(o.DOB)||m(q.value).includes(o["Pan No"])||!me(o["Pan No"])?i.value.push("invalid"):m(z.value).includes(o.Aadhar)||h(o.Aadhar)?(console.log(h(o.Aadhar)),i.value.push("invalid")):m(C.value).includes(o["Mobile Number"])||ae(o["Mobile Number"])||p(o["Bank Name"])||$(k.value,o["Marital Status"])||ge(o["Bank ifsc"])||m(B.value).includes(o["Account No"])||fe(o["Account No"])?i.value.push("invalid"):O(o.Department)||i.value.push("invalid"):i.value.push("invalid"):console.log("No more error record found!"),n};function t(o,n){if(console.log(o,n),o.length!==n.length)return console.log("length is not equal"),!1;for(let u=0;u<o.length;u++)if(o[u]!==n[u])return console.log("not matched"),!1;return!0}return{getCurrentlyImportedTableDuplicateEntries:Z,currentlyImportedTableEmployeeCodeValues:l,findCurrentTableDups:ce,uploadOnboardingFile:De,type:D,currentlyImportedTableAadharValues:z,currentlyImportedTablePanValues:q,currentlyImportedTableAccNoValues:B,currentlyImportedTableEmailValues:F,currentlyImportedTableMobileNumberValues:C,getExistingOnboardingDocuments:Me,existingUserCode:L,existingEmails:Q,existingMobileNumbers:G,existingAadharCards:Y,existingPanCards:S,existingBankAccountNumbers:J,initialUpdate:le,isValueUpdated:j,existingMartialStatus:k,existingBloodgroups:K,existingClientCode:H,existingLegalEntity:V,legalEntityDropdown:I,isLetter:Ae,isEmail:E,isNumber:ke,isEnterLetter:Ee,isEnterSpecialChars:he,isEnterSpecialChars:he,isValidAadhar:h,isValidBankAccountNo:fe,isValidBankIfsc:ge,isSpecialChars:_e,isValidDate:P,isValidMobileNumber:ae,isValidPancard:me,isEnteredNos:Ie,totalRecordsCount:M,errorRecordsCount:i,selectedFile:b,isUserExists:X,isBankExists:p,isDepartmentExists:O,isOfficialMailExists:_,isAadharExists:pe,isExistsOrNot:$,isClientCodeExists:Ce,splitNumberWithSpaces:ee,convertExcelIntoArray:ie,EmployeeQuickOnboardingDynamicHeader:U,EmployeeQuickOnboardingSource:e,getValidationMessages:a,getExcelForUpload:se,canShowloading:f}});export{Je as a,Ue as u};
