const departmentData = {

  AADHAR: [
    "Aadhaar Update",
    "Aadhaar Address Change"
  ],

  ghmc: [
"BIRTH AND DEATH CERTIFICATE GHMC",
"CHILD NAME INCLUSION GHMC",
"GHMC BIRTH CORRECTION",
"GHMC BIRTH HOME",
"GHMC BIRTH VERIFICATION OF DATA",
"GHMC DEATH CORRECTION",
"GHMC DEATH HOME",
"GHMC PROPERTY ASSESSMENT ACTIVATION",
"GHMC PROPERTY ASSESSMENT EXEMPTION",
"GHMC PROPERTY ASSESSMENT REVISION",
"GHMC PROPERTY TAX",
"GHMC PROPERTY TAX NEW ASSESSMENT",
"GHMC PROPERTY VACANCY REMISSION",
"GHMC TRADE LICENCE FRESH APPLICATIONS",
"GHMC TRADE LICENCE RENEWAL",
"GHMC VERIFICATION DEATH",
"NONAVAILABILITY CERTIFICATE GHMC"
  ],

    bcwelfare: [
    "REGISTRATION FOR FREE ELECTRICITY TO RAJAKAS AND NAYEE BRAHMINS"
  ],

  cmda: [
    "BIRTH AND DEATH CERTIFICATE CDMA",
    "CORRECTIONS IN BIRTH CERTIFICATE AND CHILD NAME INCLUSION CDMA",
    "CORRECTIONS IN DEATH CERTIFICATE CDMA",
    "DMA PROPERTY TAX COLLECTION",
    "NON AVAILABILITY BIRTH APPLICATION CDMA",
    "NON AVAILABILITY DEATH APPLICATION CDMA"
  ],

  civil: [
"CORRECTIONS IN FOOD SECURITY CARD",
"FAIR PRICE SHOP RENEWAL",
"GRANT OF LICENSING AND REGULATION OF SUPPLIES OF KEROSENE PRODUCTS",
"GRANT OF LICENSING AND REGULATION OF SUPPLIES OF LPG GAS PRODUCTS",
"GRANT OF LICENSING AND REGULATION OF SUPPLIES OF PETROLEUM PRODUCTS",
"ISSUE OF AUTHORIZATION OF FP SHOPS",
"REGISTRATION CERTIFICATE FOR TRANSPORTING PETROLEUM PRODUCTS",
"RENEWAL OF LICENSING AND REGULATION OF SUPPLIES OF KEROSENE PRODUCTS",
"RENEWAL OF LICENSING AND REGULATION OF SUPPLIES OF LPG GAS PRODUCTS",
"RENEWAL OF LICENSING AND REGULATION OF SUPPLIES OF PETROLEUM PRODUCTS",
"RENEWAL OF REGISTRATION CERTIFICATE FOR TRANSPORTING PETROLEUM PRODUCTS",
"REPLACEMENT OF ALL EXISTING LICENSES FOR PETROLEUM,LPG AND KEROSENE PRODUCTS",
"REPLACEMENT OF EXISTING FP SHOP AUTHORIZATION",
"RO PAYMENTS"
],
pooja: [
  "TEMPLE POOJA BOOKING",
  "ARCHANA BOOKING",
  "SPECIAL DARSHAN BOOKING",
  "SEVA BOOKING"
],

factories: [
  "FACTORY LICENSE APPLICATION",
  "FACTORY LICENSE RENEWAL",
  "FACTORY PLAN APPROVAL",
  "AMENDMENT OF FACTORY LICENSE"
],

health: [
  "BIRTH CERTIFICATE HEALTH DEPARTMENT",
  "DEATH CERTIFICATE HEALTH DEPARTMENT",
  "MEDICAL CERTIFICATE ISSUE",
  "FOOD SAFETY REGISTRATION"
],

hmwssb: [
  "FREE WATER CONNECTION APPLICATION",
  "WATER CONNECTION STATUS",
  "WATER BILL PAYMENT",
  "SEWERAGE CONNECTION APPLICATION"
],

itec: [
  "IT INDUSTRY INCENTIVE APPLICATION",
  "IT POLICY SUBSIDY CLAIM",
  "STARTUP INCENTIVE REGISTRATION"
],

labour: [
  "LABOUR REGISTRATION ESTABLISHMENT",
  "LABOUR LICENSE RENEWAL",
  "CONTRACTOR LICENSE APPLICATION",
  "SHOPS AND ESTABLISHMENT REGISTRATION",
  "SHOPS AND ESTABLISHMENT RENEWAL"
],

bhu: [
  "BHU BHARATI LAND DETAILS",
  "BHU BHARATI LAND MUTATION STATUS",
  "BHU BHARATI PATTADAR PASSBOOK"
],

boiler: [
  "BOILER REGISTRATION",
  "BOILER INSPECTION APPLICATION",
  "BOILER CERTIFICATE RENEWAL"
],

gad: [
  "GAZETTE NAME CHANGE APPLICATION",
  "GAZETTE PUBLICATION STATUS"
],

legal: [
  "WEIGHTS AND MEASURES LICENSE",
  "LEGAL METROLOGY LICENSE RENEWAL",
  "VERIFICATION OF WEIGHING INSTRUMENTS"
],

challan: [
  "TRAFFIC CHALLAN PAYMENT",
  "POLICE CHALLAN PAYMENT",
  "COURT CHALLAN PAYMENT"
],

register: [
  "APPLICATION FOR ENCUMBRANCE CERTIFICATE",
  "CERTIFIED COPY OF REGISTERED DOCUMENT",
  "MARRIAGE REGISTRATION",
  "REGISTRATION APPOINTMENT BOOKING",
  "REGISTRATION OF SOCIETIES",
  "REGISTRATION OF PARTNERSHIP FIRM"
],

revenue: [
  "COMMUNITY AND DATE OF BIRTH CERTIFICATE",
  "NATIVITY CERTIFICATE",
  "INCOME CERTIFICATE",
  "RESIDENCE CERTIFICATE",
  "EBC CERTIFICATE",
  "FAMILY MEMBER CERTIFICATE",
  "ROR 1B",
  "CURRENT ADANGAL / PAHANI",
  "MUTATION",
  "MUTATION + E PATTADAR PASSBOOK"
],

rta: [
  "LEARNER LICENSE APPLICATION",
  "DRIVING LICENSE APPLICATION",
  "DRIVING LICENSE RENEWAL",
  "DUPLICATE DRIVING LICENSE",
  "VEHICLE REGISTRATION SERVICES",
  "TRANSFER OF OWNERSHIP",
  "DUPLICATE RC",
  "VEHICLE FITNESS CERTIFICATE",
  "GOODS CARRIAGE PERMIT"
],

school: [
  "SCHOOL REGISTRATION APPLICATION",
  "SCHOOL RECOGNITION RENEWAL",
  "SCHOOL NOC APPLICATION"
],

serp: [
  "SADAREM SLOT BOOKING",
  "SADAREM CERTIFICATE STATUS"
],

social: [
  "EPASS SCHOLARSHIP APPLICATION",
  "EPASS SCHOLARSHIP RENEWAL",
  "POST MATRIC SCHOLARSHIP STATUS"
],

ssc: [
  "SSC DUPLICATE MEMO APPLICATION",
  "SSC VERIFICATION SERVICE"
],

tgnpdcl: [
  "ELECTRICITY BILL PAYMENT (NORTH)",
  "NEW ELECTRICITY CONNECTION (NORTH)",
  "LOAD CHANGE APPLICATION (NORTH)"
],

tgspdcl: [
  "ELECTRICITY BILL PAYMENT (SOUTH)",
  "NEW ELECTRICITY CONNECTION (SOUTH)",
  "LOAD CHANGE APPLICATION (SOUTH)"
],

tgprre: [
  "BUILDING PERMISSION APPLICATION",
  "BUILDING PLAN APPROVAL",
  "BUILDING PERMISSION STATUS"
],

tresury: [
  "TREASURY CHALLAN PAYMENT",
  "GOVERNMENT RECEIPT PAYMENT"
],

twallet: [
  "TWALLET ACCOUNT REGISTRATION",
  "TWALLET BILL PAYMENT",
  "TWALLET TRANSACTION HISTORY"
],

wms: [
  "WMC PROPERTY TAX",
  "WMC PROPERTY TAX NEW ASSESSMENT",
  "WMC PROPERTY TAX REVISION"
],

wumt: [
  "URBAN MUNICIPAL TAX PAYMENT",
  "URBAN PROPERTY ASSESSMENT"
],

tsddcf: [
  "DAIRY FARM REGISTRATION",
  "MILK SUPPLY LICENSE APPLICATION"
],

tshb: [
  "TSHB HOUSING APPLICATION",
  "TSHB HOUSING SCHEME STATUS"
],

tsche: [
  "COLLEGE AFFILIATION APPLICATION",
  "COURSE APPROVAL APPLICATION",
  "TSCHE VERIFICATION SERVICE"
]
};

const serviceDetailsData = {

"BIRTH AND DEATH CERTIFICATE GHMC": {
  fee: "₹35 per certificate (additional meeseva fee may apply)",
  timeline: "3-7 Working Days",
  description: "Issue of Birth or Death Certificate from GHMC records.",
  documents: [
    "Application Form",
    "Hospital Record / Death Report",
    "Identity Proof of Applicant"
  ]
},

"CHILD NAME INCLUSION GHMC": {
  fee: "₹35 (additional meeseva fee may apply)",
  timeline: "7 Working Days",
  description: "Inclusion of child name in birth certificate.",
  documents: [
"Birth Certificate",
"Discharge Summary",
"Notarized Affidavit (for More than one year)",
"Ration Card / Aadhaar Card / PAN Card / Voter ID (Any one parent residential proof)",
"School Bonafide Certificate (if school going child)"
  ]
},

"GHMC BIRTH CORRECTION": {
  fee: "₹45 (additional meeseva fee may apply)",
  timeline: "7 Working Days",
  description: "Correction of clerical errors in birth certificate.",
  documents: [
"Any Other Supporting Documents (if any, please specify)",
"Consent Letter from the Concerned Hospital Regarding the Correction",
"Documentary Evidence (Any Two IDs: Educational Certificate, Election ID, Ration Card, Passport, Driving License, Marriage Certificate, LIC Policy, Caste Certificate, Property Papers, etc.)",
"Notary Affidavit on Rs.10/- Non-Judicial Stamp Paper",
"Original Birth Certificate",
"Declaration Certified by Two Gazetted Officers (Names in CAPITAL LETTERS)"
  ]
},

"GHMC BIRTH HOME": {
  fee: "₹45 (additional meeseva fee may apply)",
  timeline: "7-10 Working Days",
  description: "Registration of birth occurred at home within GHMC limits.",
  documents: [
    "Form-1 (Birth) along with ID Proofs like Ration card/Aadhaar Card/Pan card/Voter ID any other residential proofs and Immunization card."
  ]
},

"GHMC BIRTH VERIFICATION OF DATA": {
  fee: "₹45 (additional meeseva fee may apply)",
  timeline: "3-5 Working Days",
  description: "Verification of birth record details from GHMC database.",
  documents: [
    "Application Form",
    "Birth Details Information",
    "Applicant ID Proof"
  ]
},

"GHMC DEATH CORRECTION": {
  fee: "₹45 (additional meeseva fee may apply)",
  timeline: "7 Working Days",
  description: "Correction of clerical errors in death certificate.",
  documents: [
    "Original Death Certificate",
    "Supporting Documents",
    "Notary Affidavit"
  ]
},

"GHMC DEATH HOME": {
  fee: "₹45 (additional meeseva fee may apply)",
  timeline: "7-10 Working Days",
  description: "Registration of death occurred at home within GHMC limits.",
  documents: [
    "Application Form",
    "Medical Certificate of Cause of Death",
    "Address Proof",
    "Applicant ID Proof"
  ]
},

"GHMC PROPERTY ASSESSMENT ACTIVATION": {
  fee: "As per property tax rules",
  timeline: "15 Working Days",
  description: "Activation of property tax assessment in GHMC records.",
  documents: [
    "Property Documents",
    "Previous Tax Receipt",
    "Owner Identity Proof"
  ]
},

"GHMC PROPERTY ASSESSMENT EXEMPTION": {
  fee: "No Fee (subject to eligibility)",
  timeline: "15 Working Days",
  description: "Application for property tax exemption under eligible categories.",
  documents: [
    "Property Documents",
    "Eligibility Proof",
    "Owner Aadhaar Card"
  ]
},

"GHMC PROPERTY ASSESSMENT REVISION": {
  fee: "As per assessment rules",
  timeline: "15 Working Days",
  description: "Request for revision of property tax assessment details.",
  documents: [
    "Property Documents",
    "Previous Tax Receipt",
    "Supporting Documents for Revision"
  ]
},

"GHMC PROPERTY TAX": {
  fee: "As per property tax calculation",
  timeline: "Instant (upon payment)",
  description: "Payment of GHMC property tax.",
  documents: [
    "Property Tax Identification Number",
    "Previous Tax Receipt (if available)"
  ]
},

"GHMC PROPERTY TAX NEW ASSESSMENT": {
  fee: "As per property category",
  timeline: "15-20 Working Days",
  description: "New property tax assessment for newly constructed or unassessed property.",
  documents: [
    "Building Permission Copy",
    "Property Ownership Documents",
    "Owner Identity Proof"
  ]
},

"GHMC PROPERTY VACANCY REMISSION": {
  fee: "No Fee",
  timeline: "15 Working Days",
  description: "Application for tax remission due to property vacancy.",
  documents: [
    "Property Documents",
    "Previous Tax Receipt",
    "Vacancy Proof"
  ]
},

"GHMC TRADE LICENCE FRESH APPLICATIONS": {
  fee: "As per trade category",
  timeline: "15 Working Days",
  description: "Fresh application for GHMC trade license.",
  documents: [
    "Application Form",
    "Business Address Proof",
    "Owner Identity Proof",
    "NOC (if applicable)"
  ]
},

"GHMC TRADE LICENCE RENEWAL": {
  fee: "As per trade category",
  timeline: "7-10 Working Days",
  description: "Renewal of existing GHMC trade license.",
  documents: [
    "Existing Trade License",
    "Tax Paid Receipt",
    "Owner Identity Proof"
  ]
},

"GHMC VERIFICATION DEATH": {
  fee: "₹45 (additional meeseva fee may apply)",
  timeline: "3-5 Working Days",
  description: "Verification of death record details from GHMC database.",
  documents: [
    "Application Form",
    "Death Details Information",
    "Applicant ID Proof"
  ]
},

"NONAVAILABILITY CERTIFICATE GHMC": {
  fee: "₹100 (additional meeseva fee may apply)",
  timeline: "7 Working Days",
  description: "Certificate issued when birth or death record is not available in GHMC records.",
  documents: [
    "Application Form",
    "Address Proof",
    "Applicant Identity Proof",
    "Affidavit"
  ]
},

  "Aadhaar Update": {
    fee: "₹50 (additional meeseva fee may apply)",
    timeline: "3 Working Days",
    description: "Update Aadhaar demographic details.",
    documents: [
      "Aadhaar Card",
      "Mobile Number Linked",
      "Address Proof"
    ]
  },

  "REGISTRATION FOR FREE ELECTRICITY TO RAJAKAS AND NAYEE BRAHMINS": {
    fee: "₹0 (additional meeseva fee may apply)",
    timeline: "NA",
    description: "Registration for free electricity for Rajakas and Nayee Brahmins.",
    documents: [
      "Beneficiary Photo",
      "Photo of Salon/Laundry",
      "Electricity Bill",
    ]
  },

// CMDA Services
  "BIRTH AND DEATH CERTIFICATE CDMA": {
    fee: "₹35 (additional meeseva fee may apply)",
    timeline: "3 Working Days",
    description: "Apply for birth or death certificate through CDMA.",
    documents: [
      "Application Form (available at Meeseva)",
    ]
  },

  "CORRECTIONS IN BIRTH CERTIFICATE AND CHILD NAME INCLUSION CDMA": {
    fee: "₹45 (additional meeseva fee may apply)",
    timeline: "3 Working Days",
    description: "Correction of clerical errors and inclusion of child name in birth certificate.",
    documents: [
      "Application Form (available at Meeseva)",
    ]
  },

  "CORRECTIONS IN DEATH CERTIFICATE CDMA": {
    fee: "₹45 (additional meeseva fee may apply)",
    timeline: "3 Working Days",
    description: "Correction of clerical errors in death certificate.",
    documents: [
      "Application Form (available at Meeseva)",
    ]
  },

  "DMA PROPERTY TAX COLLECTION": {
    fee: "Varies based on property (additional meeseva fee may apply)",
    timeline: "Varies based on property",
    description: "Pay property tax through DMA.",
    documents: [
      "Property Tax Assessment Notice",
      "Owner's ID Proof",
      "Property Documents"
    ]
  },

  "NON AVAILABILITY BIRTH APPLICATION CDMA": {
    fee: "₹45 (additional meeseva fee may apply)",
    timeline: "7 Working Days",
    description: "Apply for birth certificate when original is not available.",
    documents: [
      "Application Form (available at Meeseva)",
    ]
  },

  "NON AVAILABILITY DEATH APPLICATION CDMA": {
    fee: "₹45 (additional meeseva fee may apply)",
    timeline: "7 Working Days",
    description: "Apply for death certificate when original is not available.",
    documents: [
      "Application Form (available at Meeseva)",
    ]
  },

  // Civil Supplies Services
"CORRECTIONS IN FOOD SECURITY CARD": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "30 Working Days",
  description: "Correction of details in Food Security Card such as name, address, age, or family member details.",
  documents: [
    "Original Food Security Card",
    "Government ID Proof",
    "Application Form (available at Meeseva)",
  ]
},

"FAIR PRICE SHOP RENEWAL": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "15 Working Days",
  description: "Issue to new authorization and Renewal of Fair Price Shop authorization after expiry period.",
  documents: [
    "Application Form (available at Meeseva)",
    "Copy of Existing Authorization letter",
  ]
},

"GRANT OF LICENSING AND REGULATION OF SUPPLIES OF KEROSENE PRODUCTS": {
  fee: "₹45(additional meeseva charges may apply)",
  timeline: "30 Working Days",
  description: "Grant of new license for storage, distribution, and sale of kerosene products.",
  documents: [
"AFFIDAVIT",
"APPLICATION",
"CASTE CERTIFICATE / SADHARAM CERTIFICATE",
"LAND DOCUMENT OF BUSINESS PREMISES/SALE DEED/LEASE DEED",
"LEGAL METEOROLOGY CERTIFICATE",
"LETTER OF APPOINTMENT ISSUED BY THE OIL COMPANY",
"NATIONAL SAVING CERTIFICATE FOR RS: 10,000/- SCAN COPY",
"NOC FROM COLLECTOR (IN CASE OF HYDERBAD - POLICE COMMISSIONER)",
"VALID EXPLOSIVE LICENSE",
"VAT LICENCE"
]
},

"GRANT OF LICENSING AND REGULATION OF SUPPLIES OF LPG GAS PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "30 Working Days",
  description: "Grant of new license for storage and distribution of LPG gas products.",
  documents: [
"AFFIDAVIT",
"APPLICATION",
"CASTE CERTIFICATE / SADHARAM CERTIFICATE",
"LAND DOCUMENT OF BUSINESS PREMISES/SALE DEED/LEASE DEED",
"LEGAL METEOROLOGY CERTIFICATE",
"LETTER OF APPOINTMENT ISSUED BY THE GAS COMPANY",
"NATIONAL SAVING CERTIFICATE FOR RS: 10,000/- SCAN COPY",
"NOC FROM COLLECTOR (IN CASE OF HYDERBAD - POLICE COMMISSIONER)",
"VALID EXPLOSIVE LICENSE",
"VAT LICENCE"
  ]
},

"GRANT OF LICENSING AND REGULATION OF SUPPLIES OF PETROLEUM PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "30 Working Days",
  description: "Grant of new license for storage and sale of petroleum products.",
  documents: [
"AFFIDAVIT",
"APPLICATION",
"CASTE CERTIFICATE / SADHARAM CERTIFICATE",
"LAND DOCUMENT OF BUSINESS PREMISES/SALE DEED/LEASE DEED",
"LEGAL METEOROLOGY CERTIFICATE",
"LETTER OF APPOINTMENT ISSUED BY THE OIL COMPANY",
"NATIONAL SAVING CERTIFICATE FOR RS: 10,000/- SCAN COPY",
"NOC FROM COLLECTOR (IN CASE OF HYDERBAD - POLICE COMMISSIONER)",
"VALID EXPLOSIVE LICENSE",
"VAT LICENCE"
  ]
},

"ISSUE OF AUTHORIZATION OF FP SHOPS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "10-15 Working Days",
  description: "Issue of authorization to operate a Fair Price Shop under Public Distribution System.",
  documents: [
"Aadhaar Card",
"Application Form 1 See clause 5 (8)",
"Caste Certificate For SC / ST",
"Date of Birth Certificate",
"Educational Certificate",
"Passport Size Photo of Applicant",
"Physically handicapped Certified (In Case of PH)",
"Selection of FP Dealer letter by Sub Collector/RDO/DCSO",
"Trade Deposit - National Saving Certificate"
  ]
},

"REGISTRATION CERTIFICATE FOR TRANSPORTING PETROLEUM PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "!5 Min",
  description: "Registration certificate for vehicles transporting petroleum products.",
  documents: [
"Affidavit",
"Application Form",
"Caste Certificate / Sadharam Certificate (For SC / ST / PH applicants)",
"National Saving Certificate for Rs: 10,000/- Scan Copy",
"Valid Certificate of Vehicle Fitness Issued By RTA",
"Valid Certificate of Verification from Legal Metrology Dept",
"Valid Explosive Licence /Approved Plan",
"Valid Goods Carriage Permit Issued By RTA",
"Valid Vehicle Insurance",
"Vehicle Registration Certificate (RC) Issued By RTA"
  ]
},

"RENEWAL OF LICENSING AND REGULATION OF SUPPLIES OF KEROSENE PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "15 Working Days",
  description: "Renewal of existing license for kerosene product distribution.",
  documents: [
    "Existing License",
    "Renewal Application Form",
    "Valid Explosive License",
  ]
},

"RENEWAL OF LICENSING AND REGULATION OF SUPPLIES OF LPG GAS PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "15 Working Days",
  description: "Renewal of existing license for LPG gas distribution.",
  documents: [
    "Existing License",
    "Renewal Application Form",
    "Valid Explosive License",
  ]
},

"RENEWAL OF LICENSING AND REGULATION OF SUPPLIES OF PETROLEUM PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "15 Working Days",
  description: "Renewal of existing petroleum product storage and sale license.",
  documents: [
    "Existing License",
    "Renewal Application Form",
    "Valid Explosive License",
  ]
},

"RENEWAL OF REGISTRATION CERTIFICATE FOR TRANSPORTING PETROLEUM PRODUCTS": {
  fee: "₹NA (additional meeseva charges may apply)",
  timeline: "NA Working Days",
  description: "Renewal of registration certificate for petroleum transporting vehicles.",
  documents: [
    "Renewal Application Form (available at Meeseva)",
  ]
},

"REPLACEMENT OF ALL EXISTING LICENSES FOR PETROLEUM,LPG AND KEROSENE PRODUCTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "15 Working Days",
  description: "Replacement of damaged, lost, or outdated licenses for petroleum, LPG, and kerosene products.",
  documents: [
"Application",
"Challan Paid",
"Copy of Explosive License",
"Copy of Lease Document",
"Copy of Letter of Intent of Oil Company",
"Copy of NOC for Gram Panchayat in respect of LPG",
"Copy of NOC issued by the District Administration",
"Security Deposit"
  ]
},

"REPLACEMENT OF EXISTING FP SHOP AUTHORIZATION": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "15 Working Days",
  description: "Replacement of lost or damaged Fair Price Shop authorization certificate.",
  documents: [
"Aadhaar Card",
"Application Form 1 See clause 5 (8)",
"Date of Birth Certificate",
"Educational Certificate",
"Passport Size Photo of Applicant",
"Physically handicapped Certified (In Case of PH)"
  ]
},

"RO PAYMENTS": {
  fee: "₹45 (additional meeseva charges may apply)",
  timeline: "NA",
  description: "RO payments related to Civil Supplies department through authorized channels.",
  documents: [
    "Reference Number",
    "Payment Details",
    "Identity Proof (if required)"
  ]
}


};

// ==========================
// LOGIC
// ==========================

const departmentContainer = document.getElementById("departmentContainer");
const serviceContainer = document.getElementById("serviceContainer");
const detailsContainer = document.getElementById("detailsContainer");
const pageTitle = document.getElementById("pageTitle");

let currentLevel = "department";
let selectedDepartment = "";

/* ======================
   INITIAL LOAD
====================== */

function init() {
  const params = new URLSearchParams(window.location.search);
  const deptFromURL = params.get("dept");

  if (deptFromURL && departmentData[deptFromURL]) {
    loadServices(deptFromURL);
  } else {
    showDepartments();
  }
}

/* ======================
   SHOW DEPARTMENTS
====================== */

function showDepartments() {
  currentLevel = "department";

  departmentContainer.style.display = "grid";
  serviceContainer.style.display = "none";
  detailsContainer.style.display = "none";

  pageTitle.innerText = "Select Department";

  departmentContainer.innerHTML = "";

  Object.keys(departmentData).forEach(dept => {
    const div = document.createElement("div");
    div.className = "service-card";
    div.innerText = dept.toUpperCase();
    div.onclick = () => loadServices(dept);
    departmentContainer.appendChild(div);
  });
}

/* ======================
   LOAD SERVICES
====================== */

function loadServices(dept) {

  selectedDepartment = dept;
  currentLevel = "service";

  departmentContainer.style.display = "none";
  serviceContainer.style.display = "block";
  detailsContainer.style.display = "none";

  pageTitle.innerText = dept.toUpperCase() + " Services";

  let services = departmentData[dept];

  let tableHTML = `
    <div class="content-wrapper">
      <div class="table-wrapper">
        <table class="services-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Service Name</th>
            </tr>
          </thead>
          <tbody>
  `;

  services.forEach((service, index) => {
    tableHTML += `
      <tr onclick="loadDetails('${service.replace(/'/g, "\\'")}')">
        <td>${index + 1}</td>
        <td>${service}</td>
      </tr>
    `;
  });

  tableHTML += `
          </tbody>
        </table>
      </div>
    </div>
  `;

  serviceContainer.innerHTML = tableHTML;
}

/* ======================
   LOAD DETAILS
====================== */
function loadDetails(service) {

  currentLevel = "details";

  serviceContainer.style.display = "none";
  detailsContainer.style.display = "block";

  const data = serviceDetailsData[service];

  if (!data) {
    detailsContainer.innerHTML = "<p>No details available.</p>";
    return;
  }

  pageTitle.innerText = service;

  detailsContainer.innerHTML = `
    <div class="content-wrapper">
      <div class="details-container">

        <div class="details-top-boxes">
          <div class="info-box">
            <span>Fee</span>
            <h3>${data.fee}</h3>
          </div>
          <div class="info-box">
            <span>Timeline</span>
            <h3>${data.timeline}</h3>
          </div>
        </div>

        <table class="details-table">
          <tr>
            <th>Description</th>
            <td>${data.description}</td>
          </tr>
          <tr>
            <th>Mandatory Documents</th>
            <td>
              <ul>
                ${data.documents.map(doc => `<li>${doc}</li>`).join("")}
              </ul>
            </td>
          </tr>
        </table>

      </div>
    </div>
  `;
}

/* ======================
   BACK BUTTON
====================== */

function goBack() {

  // If currently viewing service details
  if (currentLevel === "details") {
    loadServices(selectedDepartment);
    return;
  }

  // If currently viewing services list
  if (currentLevel === "service") {
    window.location.href = "all-services.html";
    return;
  }

  // If currently on department list
  if (currentLevel === "department") {
    window.location.href = "index.html";
    return;
  }
}

init();