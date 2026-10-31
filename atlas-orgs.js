/* ============================================================
   ELEVATED STATES PROJECT — LOCAL RESOURCE DIRECTORY
   ------------------------------------------------------------
   Per-jurisdiction directory of real, currently-active local
   organizations: drug-policy reform, harm reduction, research,
   psychedelic community/integration, veterans, entheogenic
   churches, and education, plus NATIONAL_ORGS for groups that
   work in every state. Compiled 2026-08; every entry re-audited
   2026-10: the link is the org's own site (or its own chapter
   page), the group shows recent activity, and nothing listed
   sells, distributes or helps people obtain drugs. Educational only.

   ORGS[state] = [ {n:name, cat, city, u:url, note}, ... ]
   NATIONAL_ORGS = [ {n, cat, city, u, note}, ... ]
   cat ∈ reform | harm | research | community | veterans | church | education
   ============================================================ */

var ORG_CATS = {
  reform:    {label:"Reform & policy",         color:"#2F9E9E", icon:"⚖"},
  harm:      {label:"Harm reduction",          color:"#3FB65C", icon:"✚"},
  research:  {label:"Research",                 color:"#8B6CFF", icon:"🔬"},
  community: {label:"Community & integration",  color:"#E0862E", icon:"◎"},
  veterans:  {label:"Veterans",                 color:"#B8893C", icon:"★"},
  church:    {label:"Entheogenic church",       color:"#C8497A", icon:"✧"},
  education: {label:"Education",                 color:"#4A90D9", icon:"✦"}
};
var ORG_CAT_ORDER = ["reform","harm","research","community","veterans","church","education"];

var ORGS = {
"Alabama":[
 {n:"Addiction Prevention Coalition",cat:"harm",city:"Birmingham",u:"https://apcbham.org",note:"Naloxone distribution, ONEbox overdose-rescue, prevention"},
 {n:"Mobile County Health Dept — Overdose Prevention",cat:"harm",city:"Mobile",u:"https://mchd.org/community-health/",note:"Overdose Prevention Office: peer recovery support, free naloxone kiosks"},
 {n:"UAB Center for Addiction and Pain Prevention and Intervention (CAPPI)",cat:"research",city:"Birmingham",u:"https://sites.uab.edu/cappi/",note:"Addiction and pain research; Hendricks' psilocybin trials for cocaine use, smoking"},
 {n:"Psychedelic Discussion & Integration Group",cat:"community",city:"Birmingham",u:"https://www.meetup.com/psychedelic-entheogen-experience-integration-group/",note:"Discussion, support, integration of experiences"}
],
"Alaska":[
 {n:"Interior AIDS Association",cat:"harm",city:"Fairbanks",u:"https://www.interioraids.org",note:"Fairbanks syringe access, naloxone, HIV/HCV testing, MAT"},
 {n:"Project HOPE Alaska",cat:"harm",city:"Anchorage",u:"https://health.alaska.gov/en/services/project-hope-get-naloxone",note:"Statewide free naloxone and overdose response"},
 {n:"Megan's Place (Homer Exchange)",cat:"harm",city:"Homer",u:"https://sphosp.org/health-wellness/recovery-support",note:"Monthly volunteer syringe exchange, naloxone, HIV/HCV testing"},
 {n:"Recover Alaska",cat:"harm",city:"Anchorage",u:"https://recoveralaska.org",note:"Statewide alcohol harm-reduction and recovery coalition"},
 {n:"iKnowMine (ANTHC)",cat:"education",city:"Anchorage",u:"https://iknowmine.org",note:"Youth health education, mailed harm-reduction supplies"},
 {n:"UAA Center for Behavioral Health Research & Services",cat:"research",city:"Anchorage",u:"https://iseralaska.org/cbhrs",note:"University substance-misuse and behavioral-health research"}
],
"Arizona":[
 {n:"Sonoran Prevention Works",cat:"harm",city:"Tempe",u:"https://spwaz.org/",note:"Statewide syringe access, naloxone, user advocacy"},
 {n:"Aunt Rita's Foundation — HIVAZ",cat:"harm",city:"Phoenix",u:"https://auntritas.org/",note:"HIV testing, HIVAZ.org service locator, grants for harm reduction"},
 {n:"University of Arizona Dept. of Psychiatry",cat:"research",city:"Tucson",u:"https://medicine.arizona.edu/psychiatry/research",note:"Psilocybin clinical trial for OCD (Dr. Francisco Moreno)"},
 {n:"SRI Foundation (Scottsdale Research Institute)",cat:"research",city:"Phoenix",u:"https://www.scottsdaleresearchinstitute.org/",note:"Nonprofit cannabis and psilocybin clinical research (Dr. Sue Sisley)"},
 {n:"ASU Translational Research in Psychedelics (TRiP)",cat:"research",city:"Tempe",u:"https://chs.asu.edu/research/translational-teams/translational-research-in-Psychedelics",note:"Psychedelic therapy and neuroplasticity research"},
 {n:"Andrew Weil Center for Integrative Medicine",cat:"education",city:"Tucson",u:"https://awcim.arizona.edu/education/online_courses/intro-therapeutic-psychedelics.html",note:"Clinician education on therapeutic psychedelics"},
 {n:"Arizona Psychedelic Society",cat:"community",city:"Phoenix",u:"https://www.meetup.com/arizona-psychedelic-society/",note:"Educational events, socials, psychedelic-science awareness"},
 {n:"Phoenix Psychedelic Society",cat:"community",city:"Phoenix",u:"https://phoenixpsychedelic.org/",note:"Free integration circles and talks, mostly online"},
 {n:"Southwest Recovery Alliance",cat:"harm",city:"Phoenix",u:"https://southwestrecoveryalliance.org/",note:"Peer-led harm reduction, mobile syringe services, advocacy"}
],
"Arkansas":[
 {n:"Northwest Arkansas Harm Reduction",cat:"harm",city:"Fayetteville",u:"https://www.nwaharmreduction.org/",note:"NWA naloxone and harm-reduction outreach"},
 {n:"Arkansas Opioid Recovery Partnership",cat:"harm",city:"Statewide",u:"https://www.arorp.org/",note:"Opioid-settlement grants, free naloxone, ReviveAR overdose app"},
 {n:"UAMS Psychiatric Research Institute",cat:"research",city:"Little Rock",u:"https://psychiatry.uams.edu/",note:"University addiction and behavioral-health research"}
],
"California":[
 {n:"DOPE Project (National Harm Reduction Coalition)",cat:"harm",city:"San Francisco",u:"https://harmreduction.org/our-work/action/dope-project-san-francisco/",note:"Naloxone distribution and overdose-prevention training, SF"},
 {n:"SF AIDS Foundation Syringe Access",cat:"harm",city:"San Francisco",u:"https://www.sfaf.org/programs/syringe-access-services/",note:"Syringe access, Narcan and hep C care at 6th Street Center"},
 {n:"Harm Reduction Services",cat:"harm",city:"Sacramento",u:"https://hrssac.org/",note:"Syringe exchange, Narcan, HIV/HCV testing"},
 {n:"UC Berkeley Center for the Science of Psychedelics",cat:"research",city:"Berkeley",u:"https://psychedelics.berkeley.edu",note:"Psilocybin research and public education"},
 {n:"UCSF Neuroscape Psychedelics Division",cat:"research",city:"San Francisco",u:"https://neuroscape.ucsf.edu/psychedelics/",note:"Clinical psychedelic and neuroimaging research"},
 {n:"Stanford Psychedelic Science Group",cat:"research",city:"Stanford",u:"https://med.stanford.edu/spsg.html",note:"Psilocybin, MDMA, ketamine research and education"},
 {n:"Aware Project: Rethinking Psychedelics",cat:"community",city:"Los Angeles",u:"https://awareproject.org",note:"Southern California psychedelic education society"},
 {n:"San Francisco Psychedelic Society",cat:"community",city:"San Francisco",u:"https://psychedelicsocietysf.org",note:"Integration circles and community events"},
 {n:"PsychedeLiA",cat:"community",city:"Los Angeles",u:"https://www.psychedeliaintegration.org",note:"LA integration circles and workshops since 2016"},
 {n:"Queer Psychedelic Society",cat:"community",city:"San Diego",u:"https://www.queerpsychedelicsociety.com",note:"LGBTQ-focused psychedelic community and events"},
 {n:"California NORML",cat:"reform",city:"San Francisco",u:"https://www.canorml.org/",note:"State cannabis-consumer advocacy since 1972; lobbying and legal info"},
 {n:"UC San Diego Center for Psychedelic Research",cat:"research",city:"San Diego",u:"https://cpr.ucsd.edu/",note:"Formerly the Psychedelics and Health Research Initiative; translational research"},
 {n:"CIIS Center for Psychedelic Therapies and Research",cat:"education",city:"San Francisco",u:"https://www.ciis.edu/continuing-education/center-for-psychedelic-therapies-and-research",note:"University certificate program training psychedelic therapists since 2015"},
 {n:"Homeless Youth Alliance",cat:"harm",city:"San Francisco",u:"https://www.homelessyouthalliance.org/",note:"Needle exchange and harm reduction for homeless youth in the Haight"}
],
"Colorado":[
 {n:"Harm Reduction Action Center",cat:"harm",city:"Denver",u:"https://harmreductionactioncenter.org/",note:"Denver syringe access and naloxone since 2002"},
 {n:"High Rockies Harm Reduction",cat:"harm",city:"Carbondale",u:"https://highrockiesharmreduction.com/",note:"Mobile syringe access, naloxone, peer support in five mountain counties"},
 {n:"The Works Program",cat:"harm",city:"Boulder",u:"https://bouldercounty.gov/families/disease/the-works-program/",note:"Free anonymous Boulder County syringe access"},
 {n:"Access Point — Colorado Health Network",cat:"harm",city:"Denver",u:"https://coloradohealthnetwork.org/prevention-health-education/access-point/",note:"Statewide syringe exchange and overdose prevention"},
 {n:"CU Denver Center for Psychedelic Research",cat:"research",city:"Denver",u:"https://clas.ucdenver.edu/psychedelic-research/",note:"Transdisciplinary psychedelic science and public health"},
 {n:"University of Colorado Psychedelic Research Consortium",cat:"research",city:"Aurora",u:"https://medschool.cuanschutz.edu/psychiatry/BBICen/psychedelic-research-consortium",note:"CU Anschutz and CU Denver joint psychedelic research consortium"},
 {n:"Naropa University Psychedelic Studies Minor",cat:"education",city:"Boulder",u:"https://www.naropa.edu/academics/undergraduate-academics/psychedelic-studies-minor-at-naropa-university/",note:"Undergraduate minor in psychedelic studies"},
 {n:"The Nowak Society",cat:"community",city:"Boulder",u:"https://www.thenowaksociety.org/",note:"Nonprofit hosting Psychedelic Professionals meetups statewide"},
 {n:"Next Chapter",cat:"veterans",city:"Colorado Springs",u:"https://nextchapterco.org/",note:"No-cost counseling and support for veterans and families"},
 {n:"Colorado Consortium for Prescription Drug Misuse Prevention",cat:"education",city:"Aurora",u:"https://corxconsortium.org/",note:"Statewide drug education, naloxone, prevention"},
 {n:"ACT on Drugs",cat:"education",city:"Thornton",u:"https://actondrugs.org/",note:"Drug-education nonprofit by former forensic chemist"},
 {n:"Aspen Psychedelic Resource Center",cat:"education",city:"Aspen",u:"https://aspenpsychedelicresourcecenter.org/",note:"Nonprofit psychedelic education; hosts Aspen Psychedelic Symposium"}
],
"Connecticut":[
 {n:"Connecticut Harm Reduction Alliance",cat:"harm",city:"Hartford",u:"https://www.ghhrc.org",note:"Statewide syringe services, naloxone, outreach"},
 {n:"Yale Program for Psychedelic Science",cat:"research",city:"New Haven",u:"https://medicine.yale.edu/psychiatry/research/clinics-and-programs/psychedelic/",note:"Psilocybin studies in depression, OCD and headache; MDMA in PTSD"},
 {n:"ACLU of Connecticut",cat:"reform",city:"Hartford",u:"https://www.acluct.org",note:"Opposes criminal prohibition of drugs"},
 {n:"Alliance for Living",cat:"harm",city:"New London",u:"https://www.allianceforliving.org",note:"New London syringe services, HIV/HCV testing and housing help"}
],
"Delaware":[
 {n:"Brandywine Counseling & Community Services",cat:"harm",city:"Wilmington",u:"https://www.brandywinecounseling.org",note:"Delaware syringe services and treatment provider"},
 {n:"atTAcK addiction",cat:"harm",city:"Newark",u:"https://www.attackaddiction.org",note:"Overdose awareness and community naloxone"},
 {n:"UD Center for Drug & Health Studies",cat:"research",city:"Newark",u:"https://cdhs.udel.edu",note:"University substance-use and health-policy research"},
 {n:"Delaware Center for Justice",cat:"reform",city:"Wilmington",u:"https://www.dcjustice.org",note:"Criminal-legal reform advocacy and reentry services"},
 {n:"AIDS Delaware",cat:"harm",city:"Wilmington",u:"https://www.aidsdelaware.org",note:"HIV testing, PrEP, case management and education"},
 {n:"Help Is Here Delaware",cat:"harm",city:"Statewide",u:"https://www.helpisherede.com",note:"State hub: free naloxone, test strips, harm reduction vending"}
],
"District of Columbia":[
 {n:"HIPS",cat:"harm",city:"Washington",u:"https://www.hips.org",note:"Syringe access, drug checking, harm reduction"},
 {n:"Whitman-Walker",cat:"harm",city:"Washington",u:"https://www.whitman-walker.org",note:"HIV/PrEP care, LGBTQ+ health, substance use treatment"},
 {n:"Live.Long.DC",cat:"harm",city:"Washington",u:"https://livelong.dc.gov",note:"DC government hub for free naloxone, syringe services, treatment"},
 {n:"Family Medical Counseling Service (FMCS)",cat:"harm",city:"Washington",u:"https://www.fmcsinc.org",note:"Anacostia health center with syringe exchange and overdose prevention"}
],
"Florida":[
 {n:"IDEA Exchange",cat:"harm",city:"Miami",u:"https://med.miami.edu/community-outreach/idea",note:"Florida's first legal syringe services program"},
 {n:"Florida Harm Reduction Collective",cat:"harm",city:"Statewide",u:"https://www.flhrc.org/",note:"Statewide mail naloxone, syringe access, advocacy"},
 {n:"The SPOT Broward",cat:"harm",city:"Fort Lauderdale",u:"https://thespotbroward.org/",note:"Broward's approved syringe services mobile clinic"},
 {n:"Care Resource",cat:"harm",city:"Miami",u:"https://careresource.org/",note:"Health center with HIV testing and harm reduction"},
 {n:"USF Health Dept. of Psychiatry & Behavioral Neurosciences",cat:"research",city:"Tampa",u:"https://health.usf.edu/medicine/psychiatry/clinical-trials/current-studies",note:"Psychiatry dept. trials of psilocybin and other psychedelics for PTSD, anxiety"},
 {n:"Tampa Bay Psychedelic",cat:"community",city:"Tampa",u:"https://www.tampabaypsychedelic.com/",note:"Nonprofit peer support, education, integration"},
 {n:"Central Florida Psychedelic Society",cat:"community",city:"Orlando",u:"https://www.centralflpsysociety.org/",note:"Orlando integration, education, gatherings"}
],
"Georgia":[
 {n:"Georgia Harm Reduction Coalition",cat:"harm",city:"Atlanta",u:"https://georgiaharmreduction.org/",note:"Metro Atlanta harm reduction centers, MAT, PrEP; mails free Narcan statewide"},
 {n:"Georgia Overdose Prevention",cat:"harm",city:"Statewide",u:"https://georgiaoverdoseprevention.org/",note:"Free naloxone kits; led push for Georgia's 2014 911 Medical Amnesty Law"},
 {n:"Positive Impact Health Centers",cat:"harm",city:"Atlanta",u:"https://www.positiveimpacthealthcenters.org/",note:"HIV prevention, addiction recovery, peer support"},
 {n:"Peachtree NORML",cat:"reform",city:"Atlanta",u:"https://peachtreenorml.org/",note:"Georgia cannabis legalization advocacy"},
 {n:"Emory Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Atlanta",u:"https://med.emory.edu/departments/psychiatry/index.html",note:"Addiction center and psychiatric research"},
 {n:"Emory Healthcare Veterans Program",cat:"veterans",city:"Atlanta",u:"https://www.emoryhealthcare.org/centers-programs/veterans-program",note:"Free PTSD/TBI care for post-9/11 veterans"},
 {n:"Emory Center for Psychedelics and Spirituality",cat:"research",city:"Atlanta",u:"https://psychedelics.emory.edu/",note:"Emory psychiatry and spiritual-health research on psychedelic-assisted therapy"}
],
"Hawaii":[
 {n:"Hawaii Health & Harm Reduction Center",cat:"harm",city:"Honolulu",u:"https://www.hhhrc.org/",note:"Statewide syringe exchange, naloxone, prevention"},
 {n:"Drug Policy Forum of Hawai'i",cat:"reform",city:"Honolulu",u:"https://www.facebook.com/DrugPolicyForumHI/",note:"Longtime statewide drug-policy reform advocacy"},
 {n:"Hawai'i Alliance for Cannabis Reform",cat:"reform",city:"Honolulu",u:"https://www.legalizehawaii.org/",note:"Coalition to end cannabis prohibition"},
 {n:"The Clarity Project",cat:"reform",city:"Honolulu",u:"https://www.clarityproject.org/",note:"Citizen initiative expanding psilocybin-therapy access"},
 {n:"Kumukahi Health + Wellness (formerly Hawaii Island HIV/AIDS Foundation)",cat:"harm",city:"Hilo",u:"https://www.kumukahihealth.org/",note:"Hawai'i Island syringe exchange, Narcan training, HIV/HCV testing"},
 {n:"Maui AIDS Foundation",cat:"harm",city:"Wailuku",u:"https://mauiaids.org/",note:"Maui County Narcan kits, HIV/HCV testing and harm reduction outreach"}
],
"Idaho":[
 {n:"Kind Idaho",cat:"reform",city:"Boise",u:"https://www.kindidaho.org/",note:"Cannabis patient advocacy; 2026 ballot initiative"},
 {n:"Idaho Harm Reduction Project",cat:"harm",city:"Boise",u:"https://www.idahoharmreductionproject.org/",note:"Syringe exchange, mailed naloxone, found-syringe pickup"},
 {n:"Idaho Psychedelic Society",cat:"community",city:"Boise",u:"https://www.idahopsychedelicsociety.org/",note:"Education, discussion, and community"},
 {n:"Boise State Institute for the Study of Behavioral Health & Addiction",cat:"research",city:"Boise",u:"https://www.boisestate.edu/healthsciences-instituteforthestudyofaddiction/",note:"Addiction research, training, and Idaho's RADAR prevention center"},
 {n:"Project ECHO Idaho",cat:"education",city:"Moscow",u:"https://www.uidaho.edu/health-medical-professions/idaho-underserved-rural-medical/echo",note:"Clinician training on opioids and substance use"},
 {n:"Latah Recovery Community Center",cat:"harm",city:"Moscow",u:"https://latahrecoverycenter.org/",note:"Peer recovery center with free Narcan and HIV/HCV testing"}
],
"Illinois":[
 {n:"Chicago Recovery Alliance",cat:"harm",city:"Chicago",u:"https://anypositivechange.org/",note:"First US naloxone distributor; syringe exchange"},
 {n:"Illinois Harm Reduction & Recovery Coalition",cat:"harm",city:"Statewide",u:"https://www.illinoisharmreduction.org/",note:"Statewide overdose-prevention policy coalition"},
 {n:"Live4Lali",cat:"harm",city:"Arlington Heights",u:"https://live4lali.org/",note:"Naloxone, test strips, mobile outreach"},
 {n:"AIDS Foundation Chicago",cat:"harm",city:"Chicago",u:"https://www.aidschicago.org/",note:"HIV advocacy and housing; Connection to Harm Reduction outreach"},
 {n:"West Side Heroin/Opioid Task Force",cat:"harm",city:"Chicago",u:"https://www.p2online.net/westsidetaskforce",note:"Street outreach, Narcan and safer-use supplies on Chicago's West Side"},
 {n:"UChicago Human Behavioral Pharmacology Lab",cat:"research",city:"Chicago",u:"https://hbpl.uchicago.edu/",note:"Harriet de Wit's MDMA and LSD human research"},
 {n:"UIC HAPPY Lab (Psychiatry)",cat:"research",city:"Chicago",u:"https://www.psych.uic.edu/research/lab-directory/the-happy-lab",note:"Emma Childs studies psychoactive-substance effects"},
 {n:"Sana Healing Collective",cat:"community",city:"Chicago",u:"https://sanahealingcollective.org/",note:"Nonprofit integration and ketamine-assisted therapy"},
 {n:"Illinois Psychedelic Society",cat:"education",city:"Chicago",u:"https://www.illinoispsychedelicsociety.org/",note:"501c3 for psychedelic literacy and advocacy"},
 {n:"HOPE for Illinois",cat:"reform",city:"Statewide",u:"https://www.hopeforillinois.org/",note:"Campaign for a five-year psilocybin-therapy pilot (HOPE Act)"}
],
"Indiana":[
 {n:"Indiana Recovery Alliance",cat:"harm",city:"Bloomington",u:"https://indianarecoveryalliance.org/",note:"Syringe access, naloxone, user rights advocacy"},
 {n:"Overdose Lifeline",cat:"harm",city:"Indianapolis",u:"https://www.overdoselifeline.org/",note:"Statewide naloxone and test-strip distribution, CRAFT family support"},
 {n:"Safe Syringe Access and Support Program",cat:"harm",city:"Indianapolis",u:"https://marionhealth.org/safesyringe/",note:"Marion County syringe access and mobile unit"},
 {n:"Health Foundation of Greater Indianapolis",cat:"harm",city:"Indianapolis",u:"https://thfgi.org/syringe-service-programming/",note:"Private foundation funding HIV prevention and SSP supplies"},
 {n:"Boone County Health Department — Free Naloxone",cat:"harm",city:"Lebanon",u:"https://boonecounty.in.gov/offices/health-department/public-health-nursing/substance-use-disorder/intranasal-narcan/",note:"Free naloxone kits and overdose-response training by appointment"},
 {n:"Indiana Recovery Network",cat:"education",city:"Indianapolis",u:"https://indianarecoverynetwork.org/",note:"Statewide recovery resources and program directory"},
 {n:"IU School of Medicine — Psychiatry Research",cat:"research",city:"Indianapolis",u:"https://medicine.iu.edu/psychiatry/research/clinical-trials",note:"Addiction and depression clinical trials, Indianapolis"},
 {n:"Indiana Psychedelic Society",cat:"community",city:"Bloomington",u:"https://inpsychedelicsociety.org/",note:"Psychedelic literacy, advocacy and decriminalization efforts"},
 {n:"Damien Center",cat:"harm",city:"Indianapolis",u:"https://damien.org/community-health/safer-steps",note:"HIV care hub; Safer Steps syringe exchange, naloxone and safer-use kits"}
],
"Iowa":[
 {n:"Iowa Harm Reduction Coalition",cat:"harm",city:"Des Moines",u:"https://www.iowaharmreductioncoalition.org/",note:"Statewide syringe access, naloxone, user health"},
 {n:"Naloxone Iowa",cat:"harm",city:"Statewide",u:"https://www.naloxoneiowa.org/",note:"Statewide naloxone finder and overdose training"},
 {n:"University of Iowa Psychedelics Research Program",cat:"research",city:"Iowa City",u:"https://psychedelics.lab.uiowa.edu/",note:"Psilocybin and ketamine for alcohol-use disorder"},
 {n:"YSS (Youth & Shelter Services)",cat:"education",city:"Ames",u:"https://www.yss.org/",note:"Youth prevention education, counseling, Ember youth addiction treatment"}
],
"Kansas":[
 {n:"DCCCA",cat:"harm",city:"Lawrence",u:"https://www.dccca.org/naloxone-program/",note:"Statewide naloxone and harm-reduction services"},
 {n:"KU HERO — Campus Naloxone",cat:"harm",city:"Lawrence",u:"https://hero.ku.edu/naloxone",note:"University of Kansas campus naloxone distribution"},
 {n:"CKF Addiction Treatment",cat:"harm",city:"Salina",u:"https://ckfaddictiontreatment.org/",note:"Nonprofit addiction treatment; free naloxone and test strips"},
 {n:"Kansas Prevention Collaborative",cat:"education",city:"Topeka",u:"https://kansaspreventioncollaborative.org/",note:"Statewide prevention resources and coalitions"}
],
"Kentucky":[
 {n:"Kentucky Harm Reduction Coalition",cat:"harm",city:"Louisville",u:"https://kyhrc.org",note:"Naloxone, test strips, syringe services, overdose prevention"},
 {n:"VOCAL-KY",cat:"harm",city:"Louisville",u:"https://vocal-ky.org",note:"Grassroots harm reduction and drug-war advocacy"},
 {n:"Three Rivers District Health Dept. Harm Reduction Program",cat:"harm",city:"Owenton",u:"https://trdhd.com/harmreduction/",note:"Syringe services, naloxone boxes, test strips; Owen, Carroll, Pendleton counties"},
 {n:"UK Center on Drug and Alcohol Research (CDAR)",cat:"research",city:"Lexington",u:"https://cdar.uky.edu",note:"University substance-use and treatment research"},
 {n:"Kentucky Injury Prevention & Research Center",cat:"research",city:"Lexington",u:"https://kiprc.uky.edu/injury-focus-areas/drug-overdose-prevention",note:"Overdose prevention research and surveillance"},
 {n:"People Advocating Recovery (PAR)",cat:"community",city:"Louisville",u:"https://peopleadvocatingrecovery.org",note:"Peer recovery advocacy and policy work"}
],
"Louisiana":[
 {n:"Trystereo",cat:"harm",city:"New Orleans",u:"https://trystereo.org/",note:"Harm-reduction supplies, naloxone, wound care, trainings"},
 {n:"CrescentCare — Overdose Prevention",cat:"harm",city:"New Orleans",u:"https://www.crescentcare.org/service/overdose-prevention/",note:"Clinic; syringe access and overdose prevention"},
 {n:"Odyssey House Louisiana",cat:"harm",city:"New Orleans",u:"https://www.ohlinc.org/",note:"Addiction treatment and harm-reduction services"},
 {n:"ULM HERO Program",cat:"harm",city:"Monroe",u:"https://ulm.edu/hero/",note:"University harm-reduction education and naloxone"},
 {n:"Northeast Delta Human Services Authority",cat:"harm",city:"Monroe",u:"https://nedeltahsa.org/services/opioid-recovery/",note:"12-parish public agency; overdose prevention, peer support, MAT"},
 {n:"LEAD New Orleans",cat:"reform",city:"New Orleans",u:"https://leadneworleans.org/",note:"Law-enforcement diversion instead of drug arrests"},
 {n:"Women With A Vision",cat:"harm",city:"New Orleans",u:"https://www.wwav-no.org/",note:"Harm reduction, drug-policy and decriminalization advocacy for women"},
 {n:"Acadiana CARES",cat:"harm",city:"Lafayette",u:"https://www.acadianacares.org/",note:"HIV/HCV care, PrEP, residential and outpatient substance-use treatment"}
],
"Maine":[
 {n:"Maine Access Points",cat:"harm",city:"Statewide",u:"https://www.maineaccesspoints.org",note:"Naloxone, overdose prevention, harm reduction"},
 {n:"Health Equity Alliance (HEAL)",cat:"harm",city:"Bangor",u:"https://www.mainehealthequity.org",note:"Safer-use supplies, naloxone, HIV care and homeless services"},
 {n:"Maine OPTIONS Initiative",cat:"harm",city:"Statewide",u:"https://knowyouroptions.me",note:"State overdose outreach: county liaisons, naloxone, safer-use info"}
],
"Maryland":[
 {n:"Johns Hopkins Center for Psychedelic & Consciousness Research",cat:"research",city:"Baltimore",u:"https://hopkinspsychedelic.org",note:"Leading academic psychedelic research center"},
 {n:"Baltimore Harm Reduction Coalition",cat:"harm",city:"Baltimore",u:"https://www.baltimoreharmreduction.org",note:"Syringe services, naloxone, user advocacy"},
 {n:"Baltimore Safe Haven",cat:"harm",city:"Baltimore",u:"https://www.baltimoresafehaven.org",note:"Black-led drop-in, housing, HIV prevention and outreach"},
 {n:"Charm City Care Connection",cat:"harm",city:"Baltimore",u:"https://www.charmcitycareconnection.org",note:"Harm reduction and low-barrier care navigation"},
 {n:"Baltimore Psychedelic Society",cat:"community",city:"Baltimore",u:"https://www.bmorepsychedelic.com",note:"Education, integration, and community events"},
 {n:"Maryland Office of Overdose Prevention & Education",cat:"harm",city:"Statewide",u:"https://health.maryland.gov/pha/NALOXONE/Pages/accessharmreduction.aspx",note:"State office for naloxone, syringe service programs and RAD drug checking"}
],
"Massachusetts":[
 {n:"MGH Center for the Neuroscience of Psychedelics",cat:"research",city:"Boston",u:"https://www.massgeneral.org/psychiatry/treatments-and-services/center-for-the-neuroscience-of-psychedelics",note:"Brain research on psilocybin and MDMA; depression and PTSD studies"},
 {n:"Harvard Study of Psychedelics in Society & Culture",cat:"research",city:"Cambridge",u:"https://psychedelics-study.harvard.edu/about",note:"Interdisciplinary university study"},
 {n:"Boston Psychedelic Society",cat:"community",city:"Boston",u:"https://bostonpsychedelicsociety.org",note:"Community events, integration workshops, education and advocacy"},
 {n:"AHOPE Boston",cat:"harm",city:"Boston",u:"https://www.boston.gov/government/cabinets/boston-public-health-commission/recovery-services/services-active-users",note:"City needle exchange, naloxone, overdose prevention"},
 {n:"Tapestry Health",cat:"harm",city:"Northampton",u:"https://www.tapestryhealth.org",note:"Western MA syringe access and drug checking"},
 {n:"Massachusetts for Overdose Prevention Coalition",cat:"harm",city:"Statewide",u:"https://ma4opc.org",note:"30+ orgs advocating overdose prevention centers"},
 {n:"RIZE Massachusetts",cat:"harm",city:"Boston",u:"https://www.rizema.org",note:"Foundation funding solutions to overdose crisis"},
 {n:"Learn to Cope",cat:"community",city:"Statewide",u:"https://www.learn2cope.org",note:"Peer support meetings for families affected by addiction; naloxone training"},
 {n:"JRI Health Program RISE",cat:"harm",city:"Framingham",u:"https://jri.org/node/55",note:"MetroWest HIV/HCV testing, naloxone and overdose prevention"},
 {n:"Massachusetts Substance Use Helpline",cat:"education",city:"Statewide",u:"https://helplinema.org",note:"Free statewide info and referral"},
 {n:"Mass Healing",cat:"reform",city:"Statewide",u:"https://www.masshealing.org",note:"Psychedelic therapy policy advocacy, education and community network"},
 {n:"Entheogen Melanin Collective",cat:"community",city:"Boston",u:"https://emcollective.org",note:"Melanated-led psychedelic education, integration and healing community"},
 {n:"Safer Psychedelics Association of New England (SPAN)",cat:"harm",city:"Boston",u:"https://spanbase.org",note:"Free psychedelic safety and harm-reduction education and trainings"},
 {n:"MassCann (Massachusetts Cannabis Reform Coalition)",cat:"reform",city:"Statewide",u:"https://www.masscann.org",note:"Grassroots cannabis reform coalition; runs the Boston Freedom Rally"}
],
"Michigan":[
 {n:"Decriminalize Psilocybin Michigan",cat:"reform",city:"Statewide",u:"https://decriminalizepsilocybinmi.org",note:"Statewide psilocybin decriminalization campaign"},
 {n:"Grand Rapids Red Project",cat:"harm",city:"Grand Rapids",u:"https://www.redproject.org",note:"Syringe services, naloxone, HIV testing, mobile unit, recovery coaching"},
 {n:"Harm Reduction Michigan",cat:"harm",city:"Traverse City",u:"https://harmreductionmi.org",note:"Naloxone boxes, syringe access, drug checking across northern Michigan"},
 {n:"Michigan Overdose Prevention Coalition",cat:"harm",city:"Statewide",u:"https://mioverdoseprevention.com",note:"Grassroots overdose-prevention advocacy"},
 {n:"Detroit Recovery Project",cat:"harm",city:"Detroit",u:"https://www.recovery4detroit.com",note:"Peer recovery, street outreach, HIV/HCV testing, overdose training"},
 {n:"Michigan OPEN",cat:"harm",city:"Ann Arbor",u:"https://michigan-open.org",note:"Naloxone, safer-use supplies, overdose education"},
 {n:"NEXT Distro Michigan",cat:"harm",city:"Statewide",u:"https://nextdistro.org/michigan",note:"Mail-based naloxone and harm-reduction supplies"},
 {n:"Michigan Psychedelic Center (M-PsyC)",cat:"research",city:"Ann Arbor",u:"https://michiganpsychedelic.med.umich.edu",note:"U-M clinical and neuroscience psychedelic center"},
 {n:"Wayne State Addiction Psychiatry",cat:"research",city:"Detroit",u:"https://psychiatry.med.wayne.edu/addiction-psychiatry",note:"Addiction psychiatry fellowship; Substance Abuse Research Division"},
 {n:"Eisenberg Family Depression Center",cat:"research",city:"Ann Arbor",u:"https://depressioncenter.org",note:"U-M depression research exploring novel treatments"},
 {n:"Face Addiction Now",cat:"education",city:"Clinton Township",u:"https://faceaddictionnow.org",note:"Hope Not Handcuffs, naloxone, street outreach, family support"},
 {n:"Vivent Health — Metro Detroit",cat:"harm",city:"Highland Park",u:"https://viventhealth.org/locations/metro-detroit/",note:"Syringe services, naloxone, test strips, HIV care; Ypsilanti site too"}
],
"Minnesota":[
 {n:"Southside Harm Reduction Services",cat:"harm",city:"Minneapolis",u:"https://shrs.org",note:"Syringe services, safe-use supplies, overdose prevention"},
 {n:"Steve Rummler HOPE Network",cat:"harm",city:"St. Paul",u:"https://steverummlerhopenetwork.org",note:"Naloxone distribution and overdose-prevention advocacy"},
 {n:"Valhalla Place",cat:"harm",city:"Woodbury",u:"https://valhallaplace.com",note:"Addiction treatment; naloxone and syringe access"},
 {n:"Rural AIDS Action Network",cat:"harm",city:"St. Cloud",u:"https://raan.org",note:"Syringe exchanges, naloxone, HIV testing, rural MN"},
 {n:"NUWAY Alliance",cat:"harm",city:"Minneapolis",u:"https://nuway.org",note:"Nonprofit residential addiction and mental health treatment"},
 {n:"The Aliveness Project",cat:"harm",city:"Minneapolis",u:"https://aliveness.org",note:"HIV services, syringe access, overdose prevention"},
 {n:"Native American Community Clinic",cat:"harm",city:"Minneapolis",u:"https://nacc-healthcare.org",note:"Native-led clinic offering harm reduction"},
 {n:"PLURderapolis",cat:"harm",city:"Minneapolis",u:"https://plurderapolis.org",note:"Rave harm-reduction booths, Narcan and test-strip education"},
 {n:"UMN Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Minneapolis",u:"https://med.umn.edu/psychiatry",note:"Psychiatry research incl. substance-use disorder training"},
 {n:"Psychedelic Society of Minnesota",cat:"community",city:"Minneapolis",u:"https://psychedelicmn.com",note:"Psychedelic education, harm-reduction info, policy advocacy"},
 {n:"Minnesota Recovery Connection",cat:"community",city:"Fridley",u:"https://minnesotarecovery.org",note:"Peer recovery support, education, advocacy"},
 {n:"Indigenous Peoples Task Force",cat:"harm",city:"Minneapolis",u:"https://indigenouspeoplestf.org/syringe-exchange-program/",note:"Native-led syringe exchange, Narcan training and kits, HIV/HCV testing"},
 {n:"Harm Reduction Sisters",cat:"harm",city:"Duluth",u:"https://harmreductionsisters.org/",note:"Feminist harm reduction: drop-in syringe services, Narcan, drug checking"}
],
"Mississippi":[
 {n:"End It For Good",cat:"reform",city:"Jackson",u:"https://enditforgood.com",note:"Nonprofit for health-based drug-policy reform"},
 {n:"Mississippi Harm Reduction",cat:"harm",city:"Jackson",u:"https://msharmreduction.org",note:"Free naloxone, recovery housing, HIV prevention"},
 {n:"Ole Miss Marijuana Research Project (NCNPR)",cat:"research",city:"University",u:"https://pharm.olemiss.edu/marijuana/",note:"Longtime federally licensed cannabis research"},
 {n:"National Center for Cannabis Research & Education",cat:"research",city:"University",u:"https://olemiss.edu/nccre/",note:"Ole Miss national cannabis research/education center"}
],
"Missouri":[
 {n:"WashU Dept. of Psychiatry Research",cat:"research",city:"St. Louis",u:"https://psychiatry.wustl.edu/research/",note:"Addiction and substance-use disorder research"},
 {n:"Taylor Family Institute for Innovative Psychiatric Research",cat:"research",city:"St. Louis",u:"https://taylorfamilyinstitute.wustl.edu/",note:"Psychiatric drug discovery and novel therapeutics"},
 {n:"SLU Addiction Medicine Fellowship",cat:"education",city:"St. Louis",u:"https://www.slu.edu/medicine/family-medicine/fellowships/addiction-medicine.php",note:"Addiction-medicine fellowship incl. harm-reduction training"},
 {n:"MoNetwork (Missouri Network)",cat:"harm",city:"St. Louis",u:"https://www.monetwork.org",note:"Wound care, peer support, street outreach"},
 {n:"Assisted Recovery Centers of America",cat:"harm",city:"St. Louis",u:"https://www.arcamidwest.com",note:"Addiction treatment, naloxone vending machines"},
 {n:"No MO Deaths",cat:"harm",city:"Statewide",u:"https://nomodeaths.org",note:"Statewide naloxone and Medication-First access"},
 {n:"PreventEd",cat:"education",city:"St. Louis",u:"https://prevented.org",note:"Drug education, Narcan distribution, advocacy"},
 {n:"Vivent Health — St. Louis",cat:"harm",city:"St. Louis",u:"https://viventhealth.org/locations/st-louis-locust-street/",note:"Harm-reduction services, naloxone, HIV testing and primary care"},
 {n:"Psychedelic Society of the Ozarks",cat:"community",city:"Springfield",u:"https://psychedelicsoto.org/",note:"Education, integration, harm reduction; hosts Psychedelic Freedom Conference"},
 {n:"Psychedelic Society of Kansas City",cat:"community",city:"Kansas City",u:"https://psychedelickc.org/",note:"Monthly talks, harm-reduction education, annual KC Psychedelic Conference"}
],
"Montana":[
 {n:"Open Aid Alliance",cat:"harm",city:"Missoula",u:"https://www.openaidalliance.org/",note:"Syringe services, naloxone, HIV/HCV testing, peer support"},
 {n:"Montana Public Health Institute",cat:"harm",city:"Helena",u:"https://www.mtphi.org/opioid-response",note:"Funds regional naloxone distribution and opioid education programs"}
],
"Nebraska":[
 {n:"Nebraska Urban Indian Health Coalition",cat:"harm",city:"Omaha",u:"https://www.nuihc.org/",note:"Native-led substance-use treatment, behavioral and primary care"},
 {n:"Stop Overdose Nebraska",cat:"harm",city:"Statewide",u:"https://stopodne.com/",note:"Naloxone locator and overdose-prevention campaign"},
 {n:"Central Nebraska Council on Alcoholism & Addictions",cat:"education",city:"Grand Island",u:"https://cncaa.net/",note:"Youth and family addiction prevention and education classes"},
 {n:"UNL Rural Drug Addiction Research Center",cat:"research",city:"Lincoln",u:"https://rdar.unl.edu/",note:"University rural addiction research center"},
 {n:"Nebraska MEDS Coalition",cat:"education",city:"Statewide",u:"https://www.nebraskameds.org/",note:"Safe medication disposal and education"},
 {n:"Nebraskans for Medical Marijuana",cat:"reform",city:"Statewide",u:"https://nebraskamarijuana.org/",note:"Passed 2024 medical cannabis initiatives; pushing lawmakers to implement"}
],
"Nevada":[
 {n:"Trac-B Exchange",cat:"harm",city:"Las Vegas",u:"https://www.harmreductioncenterlv.com/",note:"Syringe exchange, naloxone, vending machines; Las Vegas, Sparks, Elko"},
 {n:"Foundation for Recovery",cat:"harm",city:"Las Vegas",u:"https://forrecovery.org/overdose-prevention/",note:"Free overdose prevention kits and recovery"},
 {n:"UNLV Hines Group Neuroscience Lab",cat:"research",city:"Las Vegas",u:"https://www.hinesgroup.net/",note:"UNLV lab studying psychedelics and cannabinoids in the brain"},
 {n:"Nevada Opioid Center of Excellence (UNR)",cat:"education",city:"Reno",u:"https://nvopioidcoe.org/",note:"UNR-run opioid training, technical assistance and resources"},
 {n:"Las Vegas Psychedelic Society",cat:"community",city:"Las Vegas",u:"https://www.meetup.com/las-vegas-psychedelic-society/",note:"Integration circles, risk reduction, education"},
 {n:"Sierra Psychedelic Society",cat:"community",city:"Reno",u:"https://www.sierrapsychedelic.org/",note:"Integration circles, speaker series, safety"},
 {n:"Nevada Coalition for Psychedelic Medicines",cat:"reform",city:"Reno",u:"https://www.nevadacpm.org/",note:"Statewide psychedelic-therapy policy campaign; passed SB242 and SJR10"}
],
"New Hampshire":[
 {n:"New Hampshire Harm Reduction Coalition",cat:"harm",city:"Dover",u:"https://www.nhhrc.org",note:"Statewide syringe services, naloxone, advocacy"},
 {n:"Queen City Exchange",cat:"harm",city:"Manchester",u:"https://www.nhhrc.org/queen-city-exchange-manchester",note:"Volunteer-run Manchester syringe services"},
 {n:"SOS Recovery Community Organization",cat:"community",city:"Dover",u:"https://sosrco.org",note:"Peer recovery centers and syringe service provider"},
 {n:"HIV/HCV Resource Center",cat:"harm",city:"Lebanon",u:"http://www.h2rc.org",note:"Upper Valley mobile syringe services, HIV/HCV testing and care"},
 {n:"Revive Recovery Resource Center",cat:"community",city:"Nashua",u:"https://www.reviverecovery.org",note:"Peer recovery center running Greater Nashua syringe services (SSANA)"},
 {n:"MWV Supports Recovery Coalition",cat:"community",city:"Conway",u:"https://mwvsupportsrecovery.org",note:"Recovery community center and Mt. Washington Valley syringe services"}
],
"New Jersey":[
 {n:"New Jersey Harm Reduction Coalition",cat:"harm",city:"New Brunswick",u:"https://njharmreduction.org",note:"Naloxone by mail, syringe access, drug-decrim advocacy"},
 {n:"North Jersey Community Research Initiative",cat:"harm",city:"Newark",u:"https://www.njcri.org",note:"Newark HIV, hepatitis-C, harm-reduction services"},
 {n:"Hyacinth",cat:"harm",city:"New Brunswick",u:"https://www.hyacinth.org",note:"NJ's oldest HIV org; harm reduction, testing"},
 {n:"Coalition for Medical Marijuana–New Jersey",cat:"reform",city:"Trenton",u:"https://cmmnj.org",note:"Cannabis patient advocacy and policy reform"},
 {n:"Rutgers Center of Alcohol & Substance Use Studies",cat:"research",city:"Piscataway",u:"https://alcoholstudies.rutgers.edu",note:"University addiction and substance-use research"},
 {n:"Center for Prevention & Counseling",cat:"harm",city:"Newton",u:"https://centerforprevention.org",note:"Sussex County prevention and naloxone services"},
 {n:"Prevention Links",cat:"community",city:"Kenilworth",u:"https://preventionlinks.org",note:"Recovery support, peer services, family programs"},
 {n:"Sea Change Recovery Community Organization",cat:"harm",city:"West Creek",u:"https://seachangerco.org",note:"Ocean County peer recovery, harm reduction supplies, opioid-settlement advocacy"},
 {n:"Prevention is Key",cat:"community",city:"Hibernia",u:"https://www.preventioniskey.org",note:"North Jersey peer recovery centers, harm reduction and prevention"}
],
"New Mexico":[
 {n:"Decriminalize Psychedelics New Mexico",cat:"reform",city:"Albuquerque",u:"https://www.decrimpsychnm.org/",note:"Nonprofit for psychedelic education, safety, reform"},
 {n:"New Mexico Harm Reduction Collaborative",cat:"harm",city:"Albuquerque",u:"https://www.nmhrc.org/",note:"Syringe services, overdose prevention, drug checking"},
 {n:"Alianza of New Mexico",cat:"harm",city:"Las Cruces",u:"https://www.alianzaofnewmexico.org/",note:"Syringe services, free Narcan, drug checking"},
 {n:"The Mountain Center",cat:"harm",city:"Santa Fe",u:"https://themountaincenter.org/",note:"Clean needles, naloxone, behavioral health"},
 {n:"Santa Fe Recovery Center",cat:"community",city:"Santa Fe",u:"https://www.sfrecovery.org/",note:"Detox, residential and outpatient treatment, MAT; Santa Fe and Gallup"},
 {n:"Santa Fe Psychedelic Society",cat:"community",city:"Santa Fe",u:"https://santafepsychedelicsociety.com/",note:"Peer-led education, dialogue, integration"},
 {n:"UNM Center on Alcohol, Substance use & Addictions",cat:"research",city:"Albuquerque",u:"https://casaa.unm.edu/",note:"NIH-funded addiction and substance-use research"},
 {n:"UNM Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Albuquerque",u:"https://hsc.unm.edu/medicine/departments/psychiatry/",note:"Behavioral health, addiction, treatment research"}
],
"New York":[
 {n:"OnPoint NYC",cat:"harm",city:"New York",u:"https://onpointnyc.org",note:"Nation's first overdose prevention centers"},
 {n:"NEXT Distro",cat:"harm",city:"Statewide",u:"https://nextdistro.org/nydistro",note:"Mail-based syringes and naloxone for New Yorkers outside NYC"},
 {n:"VOCAL-NY",cat:"harm",city:"Brooklyn",u:"https://vocal-ny.org",note:"Grassroots syringe exchange and drug-policy organizing"},
 {n:"Housing Works",cat:"harm",city:"New York",u:"https://www.housingworks.org",note:"HIV and harm-reduction services"},
 {n:"St. Ann's Corner of Harm Reduction",cat:"harm",city:"Bronx",u:"https://sachr.org",note:"Longstanding Bronx syringe access center"},
 {n:"Alliance for Positive Change",cat:"harm",city:"New York",u:"https://alliance.nyc",note:"Syringe access, peer services, health navigation"},
 {n:"Parsons Research Center for Psychedelic Healing (Mount Sinai)",cat:"research",city:"New York",u:"https://icahn.mssm.edu/research/center-psychedelic-parsons-research",note:"MDMA and psilocybin trials for PTSD and trauma; therapist training"},
 {n:"Horizons: Perspectives on Psychedelics",cat:"education",city:"New York",u:"https://horizonsconference.org",note:"NYC psychedelic science and policy conference"},
 {n:"Evergreen Health",cat:"harm",city:"Buffalo",u:"https://www.evergreenhs.org/behavioral-health-services/harm-reduction-syringe-services/",note:"Western NY syringe services, naloxone, drop-in and mobile unit"},
 {n:"Trillium Health",cat:"harm",city:"Rochester",u:"https://www.trilliumhealth.org/patient-and-community-services/harm-reduction",note:"Rochester syringe services, naloxone training, HIV/HCV testing"},
 {n:"ACR Health",cat:"harm",city:"Syracuse",u:"https://acrhealth.org",note:"Central NY syringe exchange, naloxone training, harm reduction clinic"},
 {n:"NYU Langone Center for Psychedelic Medicine",cat:"research",city:"New York",u:"https://med.nyu.edu/departments-institutes/psychiatry/research/psychedelic-medicine",note:"Psychedelic research from basic science to clinical trials; researcher training"}
],
"North Carolina":[
 {n:"NC Harm Reduction Coalition",cat:"harm",city:"Raleigh",u:"https://www.nchrc.org/",note:"Statewide harm reduction, overdose prevention, advocacy"},
 {n:"NC Survivors Union",cat:"harm",city:"Greensboro",u:"https://ncsurvivorsunion.org/",note:"User-led syringe services, drug checking, health hub and advocacy"},
 {n:"Western NC AIDS Project (WNCAP)",cat:"harm",city:"Asheville",u:"https://wncap.org/",note:"HIV services and harm reduction, western NC"},
 {n:"The Olive Branch Ministry",cat:"harm",city:"Hickory",u:"https://olivebranchministry.org/",note:"Peer support outreach for people using drugs"},
 {n:"UNC Dept. of Psychiatry",cat:"research",city:"Chapel Hill",u:"https://www.med.unc.edu/psych/research/",note:"Substance-use and clinical psychiatric research"},
 {n:"Duke Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Durham",u:"https://psychiatry.duke.edu/",note:"Clinical and translational psychiatric research"},
 {n:"The Pearl Psychedelic Institute",cat:"research",city:"Waynesville",u:"https://www.pearlpsychedelicinstitute.org/",note:"Nonprofit psychedelic-therapy research, clinician training and trauma care"},
 {n:"Carolinas for Care",cat:"reform",city:"Statewide",u:"https://carolinasforcare.org/",note:"Veteran-clinician coalition backing NC psychedelic-therapy research bills"},
 {n:"The Steady Collective",cat:"harm",city:"Asheville",u:"https://www.thesteadycollective.org/",note:"Syringe services, naloxone, fentanyl/xylazine test strips, wound care"},
 {n:"Psychedelic Society of Asheville",cat:"community",city:"Asheville",u:"https://www.meetup.com/psychedelic-society-of-asheville/",note:"Sober integration circles, education and community events"},
 {n:"Holler Harm Reduction",cat:"harm",city:"Marshall",u:"https://www.hollerharmreduction.org/",note:"Rural syringe access, naloxone and supply delivery in Madison and N. Buncombe"}
],
"North Dakota":[
 {n:"The ONE Program (Opioid & Naloxone Education)",cat:"harm",city:"Fargo",u:"https://one-program.org",note:"NDSU pharmacy overdose-prevention; tribal & statewide"},
 {n:"NDSU Center for Collaboration & Advancement in Pharmacy",cat:"research",city:"Fargo",u:"https://www.ndsu.edu/centers/cap",note:"Opioid/naloxone and hepatitis-C research"},
 {n:"Fargo Cass Public Health Harm Reduction Division",cat:"harm",city:"Fargo",u:"https://fargond.gov/city-government/departments/fargo-cass-public-health/harm-reduction-division",note:"Syringe services, harm reduction center, outreach, withdrawal care"},
 {n:"Heartview Foundation",cat:"harm",city:"Bismarck",u:"https://heartview.org/",note:"Nonprofit addiction treatment and opioid treatment program"},
 {n:"Bismarck-Burleigh Public Health — Substance Abuse Prevention",cat:"harm",city:"Bismarck",u:"https://www.bismarcknd.gov/1867/Substance-Abuse-Prevention",note:"Free Narcan training for groups, medication disposal bags"}
],
"Ohio":[
 {n:"Harm Reduction Ohio",cat:"harm",city:"Columbus",u:"https://www.harmreductionohio.org/",note:"Distributes naloxone and fentanyl test strips statewide"},
 {n:"The SOAR Initiative",cat:"harm",city:"Columbus",u:"https://thesoarinitiative.org/",note:"Bad-batch alerts, outreach, free naloxone and test-strip directory"},
 {n:"Equitas Health Safe Point",cat:"harm",city:"Columbus",u:"https://safepointohio.org/",note:"Syringe exchange, naloxone, HIV and hep C testing"},
 {n:"Northwest Ohio Safe Services (NOSS)",cat:"harm",city:"Toledo",u:"https://lucascountyhealth.com/lc-opiate-coalition/syringe-services/",note:"Syringe exchange, naloxone, overdose supplies"},
 {n:"Project DAWN",cat:"harm",city:"Columbus",u:"https://odh.ohio.gov/know-our-programs/project-dawn/",note:"Statewide naloxone distribution, 100+ sites"},
 {n:"OSU Center for Psychedelic Drug Research & Education",cat:"research",city:"Columbus",u:"https://www.cpdre.org/",note:"Psychedelic trials, public-health research, certificate"},
 {n:"Cincinnati Psychedelic Society",cat:"community",city:"Cincinnati",u:"https://www.meetup.com/cincinnati-psychedelic-society/",note:"Education and peer support meetups"},
 {n:"Entheogenic Society of Greater Dayton",cat:"community",city:"Dayton",u:"https://www.meetup.com/entheogenic-society-of-greater-dayton/",note:"Monthly discussion, integration, safety education"},
 {n:"Caracole",cat:"harm",city:"Cincinnati",u:"https://caracole.org/",note:"HIV services; harm-reduction vending machine and weekly syringe exchange site"}
],
"Oklahoma":[
 {n:"Oklahoma Harm Reduction Alliance",cat:"harm",city:"Tulsa",u:"https://www.okhra.net/",note:"Naloxone by mail, disease screening, sharps-disposal kiosks"},
 {n:"Family & Children's Services — NARCAN",cat:"harm",city:"Tulsa",u:"https://www.fcsok.org/narcan/",note:"Free Narcan and test strips via Tulsa distribution boxes"},
 {n:"DCCCA Oklahoma",cat:"harm",city:"Edmond",u:"https://www.dccca.org/oklahoma/",note:"Prevention and naloxone services statewide"},
 {n:"OSU National Center for Wellness & Recovery",cat:"research",city:"Tulsa",u:"https://www.hopeforaddiction.org/",note:"OSU addiction and substance-use research"},
 {n:"Southwest Prevention Center (OU)",cat:"education",city:"Norman",u:"https://outreach.ou.edu/community-services/health-human-services/southwest-prevention-center/",note:"Substance-use prevention training and resources"},
 {n:"Wichita Mountains Prevention Network",cat:"education",city:"Lawton",u:"https://www.wmpn.org/",note:"Regional substance-misuse prevention coalitions"},
 {n:"OK I'M READY (ODMHSAS)",cat:"harm",city:"Statewide",u:"https://okimready.org/",note:"State program: free naloxone by mail, treatment and recovery finder"}
],
"Oregon":[
 {n:"Max's Mission",cat:"harm",city:"Medford",u:"https://www.maxsmission.org/",note:"Naloxone distribution, syringe exchange, S. Oregon"},
 {n:"Portland People's Outreach Project",cat:"harm",city:"Portland",u:"https://portlandpeoplesoutreach.org/",note:"Peer-run syringe and naloxone distribution"},
 {n:"Save Lives Oregon",cat:"harm",city:"Portland",u:"https://www.savelivesoregon.org/",note:"Statewide naloxone and harm-reduction supply network"},
 {n:"HIV Alliance",cat:"harm",city:"Eugene",u:"https://hivalliance.org/",note:"Syringe services and overdose prevention, Lane County"},
 {n:"White Bird Clinic",cat:"harm",city:"Eugene",u:"https://whitebirdclinic.org/harm-reduction/",note:"Harm reduction center: safer-use supplies, test strips, treatment"},
 {n:"The Everly Project",cat:"harm",city:"Portland",u:"https://www.everlyproject.org/",note:"Mobile harm reduction for houseless community"},
 {n:"Open Psychedelic Evaluation Nexus (OHSU)",cat:"research",city:"Portland",u:"https://openpsychedelicscience.org/",note:"OHSU-housed research on safety and outcomes of Oregon's legal psilocybin services"},
 {n:"Portland Psychedelic Society",cat:"community",city:"Portland",u:"https://www.portlandpsychedelic.org/",note:"Nonprofit integration circles and education"},
 {n:"Portland Psychedelic Society Action Fund",cat:"reform",city:"Portland",u:"https://www.yesfornaturalmedicine.org/",note:"Led Portland's 2026 psychedelic low-priority ordinance; statewide push next"},
 {n:"Outside In",cat:"harm",city:"Portland",u:"https://outsidein.org/health-services/substance-user-engagement-services/",note:"Syringe services, naloxone, drug checking and HIV/HCV testing"}
],
"Pennsylvania":[
 {n:"Prevention Point Philadelphia",cat:"harm",city:"Philadelphia",u:"https://ppponline.org",note:"Major syringe services and overdose-prevention nonprofit"},
 {n:"Prevention Point Pittsburgh",cat:"harm",city:"Pittsburgh",u:"https://www.pppgh.org",note:"Western PA syringe access and naloxone"},
 {n:"Savage Sisters Recovery",cat:"harm",city:"Philadelphia",u:"https://www.savagesisters.org",note:"Kensington harm reduction, outreach, recovery housing"},
 {n:"Unity Recovery",cat:"community",city:"Philadelphia",u:"https://www.unityrecovery.org",note:"Free peer recovery support for all pathways of recovery"},
 {n:"Project SAFE",cat:"harm",city:"Philadelphia",u:"https://www.projectsafephilly.org",note:"Peer harm reduction for women, queer and trans people in Kensington"},
 {n:"Pennsylvania Recovery Organizations Alliance (PRO-A)",cat:"community",city:"Harrisburg",u:"https://pro-a.org",note:"Statewide recovery advocacy, peer workforce training and anti-stigma work"},
 {n:"Philadelphia Substance Use Prevention & Harm Reduction (SUPHR)",cat:"harm",city:"Philadelphia",u:"https://www.substanceusephilly.com",note:"City harm reduction: naloxone, test strips, drug-checking alerts, overdose data"}
],
"Rhode Island":[
 {n:"Project Weber/RENEW",cat:"harm",city:"Providence",u:"https://weberrenew.org",note:"Runs nation's first state-sanctioned overdose prevention center"},
 {n:"RICARES",cat:"community",city:"Providence",u:"https://www.ricares.org",note:"Recovery advocacy, peer support, policy reform"},
 {n:"Brown University Health Psilocybin for OCD Research Program",cat:"research",city:"Providence",u:"https://www.brownhealth.org/magic-mushrooms",note:"Pilot studying psilocybin for treatment-resistant OCD"},
 {n:"Rhode Island Public Health Institute",cat:"education",city:"Providence",u:"https://www.riphi.org",note:"Public-health nonprofit: HIV/HCV, overdose-crisis research, LGBTQ+ clinic"},
 {n:"Prevent Overdose RI",cat:"harm",city:"Statewide",u:"https://preventoverdoseri.org",note:"State overdose task force hub: naloxone by mail, data and local resources"},
 {n:"People, Place & Health Collective (Brown University)",cat:"research",city:"Providence",u:"https://pphcollective.org",note:"Brown public-health lab studying overdose, drug use and overdose prevention centers"}
],
"South Carolina":[
 {n:"MUSC Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Charleston",u:"https://medicine.musc.edu/departments/psychiatry-behavioral-sciences",note:"Ranked 14th in NIH psychiatry funding; addiction and substance-use research"},
 {n:"Challenges Inc SC",cat:"harm",city:"Greenville",u:"https://challengesinc.org/",note:"Statewide syringe services and overdose prevention"},
 {n:"WakeUp Carolina",cat:"harm",city:"Mount Pleasant",u:"https://wakeupcarolina.org/",note:"Naloxone, test strips, peer recovery support"},
 {n:"FAVOR Greenville",cat:"community",city:"Greenville",u:"https://favorgreenville.org/",note:"Peer-based recovery support and family healing"},
 {n:"LRADAC",cat:"education",city:"Columbia",u:"https://www.lradac.org/",note:"Lexington/Richland prevention and treatment"}
],
"South Dakota":[
 {n:"Emily's Hope",cat:"harm",city:"Sioux Falls",u:"https://emilyshope.charity",note:"Free naloxone, overdose response, prevention curriculum"},
 {n:"Great Plains Tribal Leaders Health Board",cat:"harm",city:"Rapid City",u:"https://www.greatplainstribalhealth.org/health-programs/behavioral-and-community-health-programs/opioid-response-program/",note:"Tribal opioid response, youth overdose prevention, recovery support"},
 {n:"Let's Be Clear SD",cat:"harm",city:"Statewide",u:"https://letsbeclearsd.com/",note:"State naloxone finder, free overdose training, treatment links"},
 {n:"South Dakota Urban Indian Health",cat:"harm",city:"Sioux Falls",u:"https://sduih.org/",note:"Native-led clinics offering MAT, behavioral and cultural health"}
],
"Tennessee":[
 {n:"Choice Health Network",cat:"harm",city:"Knoxville",u:"https://choicehealthnetwork.org/",note:"HIV care; Knoxville syringe services, naloxone, test strips, mobile units"},
 {n:"A Betor Way",cat:"harm",city:"Memphis",u:"https://abetorway.org/",note:"Mobile syringe access and overdose prevention"},
 {n:"Nashville CARES",cat:"harm",city:"Nashville",u:"https://nashvillecares.org/",note:"HIV care plus sterile supplies, Narcan and mobile risk-reduction outreach"},
 {n:"Cempa Community Care",cat:"harm",city:"Chattanooga",u:"https://cempa.org/steptn/",note:"HIV care; STEP TN syringe exchange, naloxone and testing"},
 {n:"Street Works",cat:"harm",city:"Nashville",u:"https://streetworks.org/",note:"HIV testing and prevention; state-approved syringe services in Nashville"},
 {n:"Metro Drug Coalition",cat:"education",city:"Knoxville",u:"https://metrodrug.org/",note:"Prevention, overdose education, Narcan distribution"},
 {n:"TN Assoc. of Alcohol, Drug & Addiction Services",cat:"education",city:"Nashville",u:"https://www.taadas.org/",note:"Addiction education, clearinghouse, policy advocacy"},
 {n:"Vanderbilt Division of Addiction Psychiatry",cat:"research",city:"Nashville",u:"https://www.vumc.org/addiction-psychiatry/research",note:"Addiction psychiatry research labs on alcohol, opioids and stress"},
 {n:"UTHSC Center for Addiction Science",cat:"research",city:"Memphis",u:"https://www.uthsc.edu/medicine/addiction-science/index.php",note:"University addiction research and treatment"},
 {n:"Hellbender Harm Reduction",cat:"harm",city:"Knoxville",u:"https://www.hellbenderharmreduction.org/",note:"Mail-based naloxone for Tennessee residents; state-listed syringe program"}
],
"Texas":[
 {n:"Texas Harm Reduction Alliance",cat:"harm",city:"Austin",u:"https://harmreductiontx.org/",note:"Drop-in center, street outreach, naloxone, safer-use supplies"},
 {n:"Corazón Ministries",cat:"harm",city:"San Antonio",u:"https://corazonsa.org/",note:"San Antonio syringe services and street outreach"},
 {n:"Honor's HEROES (UTHealth Houston)",cat:"harm",city:"Houston",u:"https://sbmi.uth.edu/heroes/",note:"UTHealth opioid recovery and naloxone program"},
 {n:"McGill Center for Psychedelic Research & Therapy (Dell Med)",cat:"research",city:"Austin",u:"https://dellmed.utexas.edu/units/charmaine-and-gordon-mcgill-center-for-psychedelic-research-and-therapy",note:"Dell Med psychedelic-assisted therapy research; first in Texas"},
 {n:"Baylor College of Medicine — ELIPSIS",cat:"research",city:"Houston",u:"https://www.bcm.edu/academic-centers/medical-ethics-and-health-policy/research/ethical-legal-implications-of-psychedelics-in-society-program-elipsis",note:"Bioethics and policy of psychedelics research"},
 {n:"Addiction Research Institute (UT Austin)",cat:"research",city:"Austin",u:"https://ari.socialwork.utexas.edu/",note:"Substance-use and overdose research"},
 {n:"Psychedelic Society of Texas (PsyT)",cat:"community",city:"Austin",u:"https://www.psytexas.com/",note:"Integration circles in Austin, Dallas, Houston, SA"},
 {n:"Dallas Psychedelic Society",cat:"community",city:"Dallas",u:"https://www.meetup.com/dallas-psychedelic-society/",note:"Dallas psychedelic education and integration"},
 {n:"Houston Psychedelic Society",cat:"community",city:"Houston",u:"https://www.meetup.com/houston-psychedelic-society/",note:"PsyT Houston chapter; talks and integration circles"},
 {n:"San Antonio Psychedelic Society",cat:"community",city:"San Antonio",u:"https://www.meetup.com/san-antonio-psychedelic-society/",note:"PsyT San Antonio chapter; integration circles and workshops"},
 {n:"Vivent Health — Austin",cat:"harm",city:"Austin",u:"https://viventhealth.org/locations/austin/",note:"Harm-reduction services, naloxone, HIV testing and primary care"}
],
"Utah":[
 {n:"Libertas Institute",cat:"reform",city:"Lehi",u:"https://libertas.institute/",note:"Libertarian think tank; medical cannabis and justice reform"},
 {n:"Utah Naloxone",cat:"harm",city:"Salt Lake City",u:"https://www.utahnaloxone.org/",note:"Statewide naloxone distribution and free kits"},
 {n:"Utah Harm Reduction Coalition",cat:"harm",city:"Midvale",u:"https://www.utahharmreduction.org/",note:"Syringe exchange, HIV/HCV testing, referrals"},
 {n:"University of Utah Psychedelic Science Initiative",cat:"research",city:"Salt Lake City",u:"https://medicine.utah.edu/psychiatry/research/labs/upsi",note:"Psychedelic-assisted therapy research lab"},
 {n:"Utah Support Advocates for Recovery Awareness",cat:"community",city:"Salt Lake City",u:"https://www.utahrecovers.org/",note:"Recovery centers, peer support, advocacy"},
 {n:"Odyssey House of Utah",cat:"community",city:"Salt Lake City",u:"https://odysseyhouse.org/",note:"Utah's largest addiction-treatment nonprofit"}
],
"Vermont":[
 {n:"Psychedelic Society of Vermont",cat:"community",city:"Stowe",u:"https://vermontpsychedelic.org",note:"Clinician-led psychedelic education group; annual Soulquinox Summit"},
 {n:"Vermont CARES",cat:"harm",city:"Burlington",u:"https://www.facebook.com/vtcares/",note:"HIV/HCV harm reduction, syringe services, naloxone"},
 {n:"AIDS Project of Southern Vermont",cat:"harm",city:"Brattleboro",u:"https://www.aidsprojectsouthernvermont.org",note:"Syringe services, naloxone, HIV/HCV testing in Windham and Bennington"}
],
"Virginia":[
 {n:"Virginia NORML",cat:"reform",city:"Richmond",u:"https://www.vanorml.org/",note:"Statewide cannabis law reform advocacy"},
 {n:"Chris Atwood Foundation",cat:"harm",city:"Fairfax",u:"https://www.thecaf.org/",note:"Naloxone, harm reduction, peer recovery, N. Virginia"},
 {n:"Health Brigade",cat:"harm",city:"Richmond",u:"https://www.healthbrigade.org/",note:"Free clinic with needle exchange services"},
 {n:"The McShin Foundation",cat:"community",city:"Richmond",u:"https://mcshin.org/",note:"Peer-run recovery community organization"},
 {n:"VCU Institute for Drug and Alcohol Studies",cat:"research",city:"Richmond",u:"https://idas.vcu.edu/",note:"Multidisciplinary addiction research and training"},
 {n:"UVA Division of Perceptual Studies",cat:"research",city:"Charlottesville",u:"https://med.virginia.edu/clinical/psychiatry-neurobehavioral-sciences/perceptual-studies",note:"Consciousness research; runs UVA's first psilocybin study (prolonged grief)"},
 {n:"Strength in Peers",cat:"community",city:"Harrisonburg",u:"https://strengthinpeers.org",note:"Peer-run recovery support and state-authorized syringe services, Shenandoah Valley"}
],
"Washington":[
 {n:"SSDP — UW Chapter",cat:"reform",city:"Seattle",u:"https://www.instagram.com/ssdp.uw/",note:"Student drug-policy reform and harm reduction"},
 {n:"Psychedelic Medicine Alliance of Washington",cat:"reform",city:"Seattle",u:"https://pmaw.org/",note:"Local entheogen decrim resolutions; statewide access advocacy"},
 {n:"People's Harm Reduction Alliance",cat:"harm",city:"Seattle",u:"https://phra.org/",note:"Peer-run syringe access, naloxone, test strips"},
 {n:"Dave Purchase Project",cat:"harm",city:"Tacoma",u:"https://www.davepurchaseproject.org/",note:"Nation's first legal needle exchange; Pierce County"},
 {n:"UW Center for Novel Therapeutics in Addiction Psychiatry",cat:"research",city:"Seattle",u:"https://ntap.psychiatry.uw.edu/",note:"UW psychedelic trials for addiction, PTSD, AUD"},
 {n:"UW Addictions, Drug & Alcohol Institute",cat:"research",city:"Seattle",u:"https://adai.uw.edu/",note:"University substance-use research institute"},
 {n:"WSU Alcohol & Drug Addiction Research Program",cat:"research",city:"Pullman",u:"https://adarp.wsu.edu/",note:"State-funded grants and seminars for WSU addiction research"},
 {n:"Tacoma Psychedelic Society",cat:"community",city:"Tacoma",u:"https://www.tacomapsychedelicsociety.org/",note:"Integration circles, book club, local entheogen-decrim advocacy"},
 {n:"Seattle Psychedelic Healing & Spirituality",cat:"community",city:"Seattle",u:"https://www.meetup.com/seattle-psychedelic-healing-and-spirituality-community/",note:"Psychedelic Advocacy Network meetup; online talks and integration circles"},
 {n:"Entheo Society of Washington",cat:"reform",city:"Seattle",u:"https://entheosocietywa.org/",note:"Entheogen decriminalization advocacy, town halls and education"},
 {n:"Hepatitis Education Project",cat:"harm",city:"Seattle",u:"https://www.hep.org/",note:"Syringe services, hep C testing and care coordination"}
],
"West Virginia":[
 {n:"SOAR WV",cat:"harm",city:"Charleston",u:"https://soarwv.org/",note:"Volunteer overdose-prevention; naloxone and test strips"},
 {n:"West Virginia Health Right",cat:"harm",city:"Charleston",u:"https://wvhealthright.org/",note:"Free clinic; HIV prevention, recovery, peer support"},
 {n:"Cabell-Huntington Health Department",cat:"harm",city:"Huntington",u:"https://cabellhealth.org/clinical-services/overdose-and-infectious-disease-prevention-program/",note:"Naloxone, syringe services, disease prevention"},
 {n:"West Virginia Drug Intervention Institute",cat:"education",city:"Dunbar",u:"https://www.wvdii.org/",note:"Naloxone, ONEbox kits, drug-safety education"},
 {n:"WVU Rockefeller Neuroscience Institute",cat:"research",city:"Morgantown",u:"https://wvumedicine.org/our-care/institutes/rni/",note:"Addiction neuroscience; deep-brain stimulation for OUD"},
 {n:"Marshall Univ. Joan C. Edwards School of Medicine",cat:"research",city:"Huntington",u:"https://jcesom.marshall.edu/",note:"Addiction-medicine fellowship and substance-use research"},
 {n:"ACLU of West Virginia",cat:"reform",city:"Charleston",u:"https://www.acluwv.org/",note:"Litigates drug-policy and criminal-justice reform"},
 {n:"Recovery Point West Virginia",cat:"community",city:"Huntington",u:"https://recoverypointwv.org/",note:"Free peer-led recovery housing and support"}
],
"Wisconsin":[
 {n:"Center for Psychedelic Research & Education (UW–Madison)",cat:"research",city:"Madison",u:"https://research.pharmacy.wisc.edu/cpre/",note:"Psychedelic research, education, clinician training"},
 {n:"Vivent Health — Lifepoint",cat:"harm",city:"Milwaukee",u:"https://viventhealth.org/services/harm-reduction/",note:"Syringe services, naloxone, drug-checking statewide"},
 {n:"Safe Communities of Madison and Dane County",cat:"harm",city:"Madison",u:"https://safecommunities.org/",note:"Overdose aid kits, naloxone, recovery coaching"},
 {n:"Wisconsin Voices for Recovery",cat:"harm",city:"Madison",u:"https://wisconsinvoicesforrecovery.org/",note:"Recovery advocacy; NALOX-ZONE naloxone distribution"}
],
"Wyoming":[
 {n:"Recover Wyoming",cat:"community",city:"Cheyenne",u:"https://www.recoverwyoming.org/",note:"Peer recovery coaching, phone support and all-recovery meetings"},
 {n:"Volunteers of America Northern Rockies",cat:"veterans",city:"Sheridan",u:"https://www.voanr.org/",note:"Veteran services plus addiction treatment"},
 {n:"Wyoming Prevention Depot",cat:"education",city:"Laramie",u:"https://www.wyomingpreventiondepot.org/",note:"Statewide substance-use prevention resources"},
 {n:"Wyoming Dept. of Health Opioid Overdose Response",cat:"harm",city:"Cheyenne",u:"https://health.wyo.gov/publichealth/prevention/substanceabuseandsuicide/opioid/opioid-overdose-response/",note:"Free Narcan for Wyoming organizations; overdose response training"}
]
};

/* National groups that work in every state (shown with every state's list). */
var NATIONAL_ORGS = [
 {n:"Americans for Ibogaine",cat:"reform",city:"Online",u:"https://www.americansforibogaine.org",note:"Advocacy for state and federal ibogaine research funding and medical access"},
 {n:"Americans for Safe Access",cat:"reform",city:"Washington, DC",u:"https://www.safeaccessnow.org",note:"Patient advocacy for safe, legal access to medical cannabis"},
 {n:"Decriminalize Nature",cat:"reform",city:"Oakland, CA",u:"https://www.decriminalizenature.org",note:"Grassroots movement to decriminalize entheogenic plants and fungi"},
 {n:"Doctors for Drug Policy Reform",cat:"reform",city:"Washington, DC",u:"https://www.d4dpr.org",note:"Clinicians and scientists pushing evidence-based drug policy and harm reduction"},
 {n:"Drug Policy Alliance",cat:"reform",city:"New York, NY",u:"https://drugpolicy.org",note:"Leading national nonprofit working to end the drug war with health-based policy"},
 {n:"Healing Advocacy (formerly Healing Advocacy Fund)",cat:"reform",city:"Portland, OR",u:"https://www.healingadvocacy.us",note:"Helps states build regulated psilocybin programs in OR, CO and NM"},
 {n:"Last Prisoner Project",cat:"reform",city:"Denver, CO",u:"https://www.lastprisonerproject.org",note:"Frees cannabis prisoners through clemency, resentencing and reentry support"},
 {n:"Law Enforcement Action Partnership (LEAP)",cat:"reform",city:"Beverly, MA",u:"https://lawenforcementactionpartnership.org",note:"Current and former police, prosecutors and judges pushing drug policy reform"},
 {n:"Marijuana Policy Project",cat:"reform",city:"Washington, DC",u:"https://www.mpp.org",note:"Lobbies and runs ballot campaigns to end cannabis prohibition"},
 {n:"NORML",cat:"reform",city:"Washington, DC",u:"https://norml.org",note:"Cannabis law reform since 1970, with state chapters and a lawyer network"},
 {n:"Parabola Center for Law and Policy",cat:"reform",city:"Malden, MA",u:"https://www.parabolacenter.com",note:"Think tank designing cannabis laws that favor consumers, workers and small businesses"},
 {n:"Psychedelic Medicine Coalition",cat:"reform",city:"Washington, DC",u:"https://psychedelicmedicinecoalition.org",note:"Nonpartisan DC advocacy for safe, equitable access to psychedelic medicine"},
 {n:"Reason for Hope",cat:"reform",city:"Washington, DC",u:"https://www.reasonforhope.org",note:"Federal and state advocacy plus research funding for psychedelic therapies"},
 {n:"Students for Sensible Drug Policy (SSDP)",cat:"reform",city:"Washington, DC",u:"https://ssdp.org",note:"Youth-led network of campus chapters pushing evidence-based drug policy"},
 {n:"DanceSafe",cat:"harm",city:"Denver, CO",u:"https://dancesafe.org",note:"Drug checking, test kits and peer education at events; volunteer chapters"},
 {n:"End Overdose",cat:"harm",city:"Burbank, CA",u:"https://endoverdose.net",note:"Free naloxone, overdose-response training and test strips; festival outreach"},
 {n:"Fireside Project",cat:"harm",city:"Online",u:"https://firesideproject.org",note:"Free peer support line during and after psychedelic experiences"},
 {n:"National Harm Reduction Coalition",cat:"harm",city:"New York, NY",u:"https://harmreduction.org",note:"Training, policy work and capacity-building for harm reduction programs"},
 {n:"Never Use Alone",cat:"harm",city:"Online",u:"https://neverusealone.com",note:"Peer-run hotline that alerts EMS if someone using alone stops responding"},
 {n:"NEXT Distro",cat:"harm",city:"New York, NY",u:"https://nextdistro.org",note:"Mail-based naloxone and syringe access, focused on rural and suburban areas"},
 {n:"North American Syringe Exchange Network (NASEN)",cat:"harm",city:"Tacoma, WA",u:"https://nasen.org",note:"Directory and supply buyers club for US syringe services programs"},
 {n:"Remedy Alliance / For The People",cat:"harm",city:"Berkeley, CA",u:"https://remedyallianceftp.org",note:"Low-cost naloxone buyers club for community harm reduction programs"},
 {n:"UNC Street Drug Analysis Lab",cat:"harm",city:"Chapel Hill, NC",u:"https://www.streetsafe.supply",note:"Mail-in lab drug checking for US harm reduction programs; free to user unions"},
 {n:"Zendo Project",cat:"harm",city:"San Francisco, CA",u:"https://zendoproject.org",note:"Psychedelic peer support at festivals and training in psychedelic care"},
 {n:"Heffter Research Institute",cat:"research",city:"Greenwich, CT",u:"https://www.heffter.org",note:"Funds psilocybin research; backed many landmark clinical studies"},
 {n:"MAPS (Multidisciplinary Association for Psychedelic Studies)",cat:"research",city:"San Jose, CA",u:"https://maps.org",note:"Psychedelic research, policy and education nonprofit; hosts Psychedelic Science"},
 {n:"Psychedelic Science Funders Collaborative (PSFC)",cat:"research",city:"Online",u:"https://psfc.co",note:"Donor network coordinating philanthropy for psychedelic research and access"},
 {n:"Usona Institute",cat:"research",city:"Madison, WI",u:"https://www.usonainstitute.org",note:"Nonprofit medical research org running psilocybin and 5-MeO-DMT trials"},
 {n:"People of Color Psychedelic Collective",cat:"community",city:"New York, NY",u:"https://www.pocpc.org",note:"Supports people of color through psychedelic education, healing and justice"},
 {n:"Psychedelic Support",cat:"community",city:"Online",u:"https://psychedelic.support",note:"Directory of integration groups and providers, plus online courses"},
 {n:"Psychedelics in Recovery",cat:"community",city:"Online",u:"https://www.psychedelicsinrecovery.org",note:"Twelve-step fellowship meetings, online and in person, on psychedelics and recovery"},
 {n:"Heroic Hearts Project",cat:"veterans",city:"New York, NY",u:"https://heroicheartsproject.org",note:"Veteran-led psychedelic retreat programs, research and advocacy"},
 {n:"Veteran Mental Health Leadership Coalition (VMHLC)",cat:"veterans",city:"Online",u:"https://www.vmhlc.org",note:"Veteran-member coalition pushing for access to psychedelic therapies"},
 {n:"VETS (Veterans Exploring Treatment Solutions)",cat:"veterans",city:"Southlake, TX",u:"https://vetsolutions.org",note:"Grants and coaching for veterans' psychedelic therapy, plus VA policy advocacy"},
 {n:"Council on Spiritual Practices",cat:"church",city:"San Francisco, CA",u:"https://www.csp.org",note:"Religious-freedom and research advocacy for entheogenic spiritual practice"},
 {n:"Chacruna Institute for Psychedelic Plant Medicines",cat:"education",city:"San Francisco, CA",u:"https://chacruna.net",note:"Plant-medicine education, Indigenous reciprocity and psychedelic justice"},
 {n:"Erowid Center",cat:"education",city:"Online",u:"https://www.erowid.org",note:"Long-running online library of drug information and experience reports"},
 {n:"Intercollegiate Psychedelics Network",cat:"education",city:"Online",u:"https://www.intercollegiatepsychedelics.net",note:"Student and early-career network: talks, mentorship and PsychedelX"},
 {n:"Psychedelics Today",cat:"education",city:"Online",u:"https://psychedelicstoday.com",note:"Podcasts, news, courses and the Vital practitioner training program"}
];
