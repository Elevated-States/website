/* ============================================================
   ELEVATED STATES PROJECT — LOCAL RESOURCE DIRECTORY
   ------------------------------------------------------------
   Per-jurisdiction directory of real, currently-active local
   organizations: drug-policy reform, harm reduction, research,
   psychedelic community/integration, veterans, entheogenic
   churches, and education. Every entry was verified to have a
   live web presence at compile time (2026-08). Educational only.

   ORGS[state] = [ {n:name, cat, city, u:url, note}, ... ]
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
 {n:"SSDP — University of Alabama",cat:"reform",city:"Tuscaloosa",u:"https://ssdp.org",note:"Student drug-policy reform chapter"},
 {n:"Addiction Prevention Coalition",cat:"harm",city:"Birmingham",u:"https://apcbham.org",note:"Naloxone distribution, ONEbox overdose-rescue, prevention"},
 {n:"Mobile County Health Dept — Overdose Prevention",cat:"harm",city:"Mobile",u:"https://mchd.org",note:"Free naloxone and harm-reduction kiosks"},
 {n:"UAB Center for Addiction & Pain Prevention (CAPPI)",cat:"research",city:"Birmingham",u:"https://sites.uab.edu/cappi/",note:"UAB psilocybin trials — cocaine, smoking, depression"},
 {n:"Birmingham Psychedelic Society",cat:"community",city:"Birmingham",u:"https://www.facebook.com/p/Birmingham-Psychedelic-Society-Alabama-100064781209700/",note:"Local psychedelic education and peer community"},
 {n:"Huntsville Psychedelic Society",cat:"community",city:"Huntsville",u:"https://www.meetup.com/huntsville-psychedelic-society-meetup-group/",note:"Peer education, harm reduction, integration"},
 {n:"Psychedelic Discussion & Integration Group",cat:"community",city:"Birmingham",u:"https://www.meetup.com/psychedelic-entheogen-experience-integration-group/",note:"Discussion, support, integration of experiences"}
],
"Alaska":[
 {n:"Alaskan AIDS Assistance Assoc. (Four A's)",cat:"harm",city:"Anchorage",u:"https://www.alaskanaids.org",note:"Anchorage syringe services and HIV prevention"},
 {n:"Interior AIDS Association",cat:"harm",city:"Fairbanks",u:"https://www.interioraids.org",note:"Fairbanks borough's only syringe program"},
 {n:"Project HOPE Alaska",cat:"harm",city:"Anchorage",u:"https://health.alaska.gov/en/services/project-hope-get-naloxone",note:"Statewide free naloxone and overdose response"},
 {n:"The Exchange (South Peninsula Hospital)",cat:"harm",city:"Homer",u:"https://www.sphosp.org/mc-events/the-exchange/",note:"Homer syringe services and harm reduction"},
 {n:"Recover Alaska",cat:"harm",city:"Anchorage",u:"https://recoveralaska.org",note:"Statewide alcohol harm-reduction and recovery coalition"},
 {n:"iKnowMine (ANTHC)",cat:"education",city:"Anchorage",u:"https://iknowmine.org",note:"Youth health education, mailed harm-reduction supplies"},
 {n:"Center for Behavioral Health Research (UAA)",cat:"research",city:"Anchorage",u:"https://iseralaska.org/cbhrs",note:"University substance-misuse and behavioral-health research"},
 {n:"Alaska Psychedelic Society",cat:"community",city:"Palmer",u:"https://www.facebook.com/groups/alaskapsychedelicsociety",note:"Statewide psychedelic community and education"},
 {n:"Alaska Marijuana Industry Association",cat:"reform",city:"Anchorage",u:"https://alaskamia.org",note:"Cannabis policy advocacy tracking state bills"}
],
"Arizona":[
 {n:"Decriminalize Nature Arizona",cat:"reform",city:"Phoenix",u:"https://arizona.decriminalizenature.com/",note:"Grassroots entheogen decriminalization advocacy"},
 {n:"SSDP Arizona (ASU)",cat:"reform",city:"Tempe",u:"https://ssdp.org/chapters/southwest/arizona/",note:"Student drug-policy reform chapters"},
 {n:"Sonoran Prevention Works",cat:"harm",city:"Phoenix",u:"https://spwaz.org/",note:"Statewide syringe access, naloxone, user advocacy"},
 {n:"Aunt Rita's Foundation — HIVAZ",cat:"harm",city:"Phoenix",u:"https://hivaz.org/harm-reduction/",note:"Harm reduction and HIV prevention statewide"},
 {n:"University of Arizona Psilocybin Research",cat:"research",city:"Tucson",u:"https://healthsciences.arizona.edu/news/psilocybin-science-behind-magic-mushrooms-great-healing-potential",note:"Psilocybin clinical trials (Dr. Francisco Moreno)"},
 {n:"Scottsdale Research Institute",cat:"research",city:"Scottsdale",u:"https://www.scottsdaleresearchinstitute.org/about",note:"FDA-approved cannabis and psilocybin trials"},
 {n:"ASU Translational Research in Psychedelics (TRiP)",cat:"research",city:"Tempe",u:"https://chs.asu.edu/research/translational-teams/translational-research-in-Psychedelics",note:"Psychedelic therapy and neuroplasticity research"},
 {n:"Andrew Weil Center for Integrative Medicine",cat:"education",city:"Tucson",u:"https://awcim.arizona.edu/education/online_courses/intro-therapeutic-psychedelics.html",note:"Clinician education on therapeutic psychedelics"},
 {n:"Psychedelic Medicine Radar (U of A)",cat:"education",city:"Tucson",u:"https://arizona.campusgroups.com/pmr/home/",note:"Student-led psychedelic science education group"},
 {n:"Arizona Psychedelic Society",cat:"community",city:"Phoenix",u:"https://arizonapsychedelicsociety.com/",note:"Events, integration circles, science awareness"},
 {n:"Phoenix Psychedelic Society",cat:"community",city:"Phoenix",u:"https://phoenixpsychedelic.org/",note:"Integration coaching and community connection"},
 {n:"Psychedelic Club of Phoenix",cat:"community",city:"Phoenix",u:"https://psychedelicstoday.com/phx/",note:"Connects Phoenix psychedelic community"},
 {n:"Phoenix Women's Psychedelic Integration",cat:"community",city:"Phoenix",u:"https://www.meetup.com/phoenix-womens-psychedelic-integration-community/",note:"Women's integration and peer support"},
 {n:"Church of the Eagle and the Condor",cat:"church",city:"Phoenix",u:"https://www.churcheaglecondor.org/",note:"Ayahuasca church with federal RFRA exemption"},
 {n:"Peyote Way Church of God",cat:"church",city:"Willcox",u:"https://peyoteway.org/",note:"Church offering peyote spiritual sacrament"}
],
"Arkansas":[
 {n:"Central Arkansas Harm Reduction",cat:"harm",city:"Little Rock",u:"https://www.arkansasharmreduction.org/",note:"Syringe services, naloxone, fentanyl test strips"},
 {n:"Northwest Arkansas Harm Reduction",cat:"harm",city:"Fayetteville",u:"https://www.nwaharmreduction.org/",note:"NWA naloxone and harm-reduction outreach"},
 {n:"NARCANsas",cat:"harm",city:"Statewide",u:"https://narcansas.com/",note:"State naloxone distribution and overdose education"},
 {n:"Arkansas Opioid Recovery Partnership",cat:"harm",city:"Statewide",u:"https://www.arorp.org/",note:"Funds naloxone, recovery housing, overdose response"},
 {n:"UAMS Psychiatric Research Institute",cat:"research",city:"Little Rock",u:"https://psychiatry.uams.edu/",note:"University addiction and behavioral-health research"},
 {n:"NWA Psychedelic Society",cat:"community",city:"Fayetteville",u:"https://www.psychedelicsdaily.com/community/united-states/arkansas/nwa-psychedelic-society/",note:"Northwest Arkansas psychedelic community"},
 {n:"Song for Charlie",cat:"education",city:"Statewide",u:"https://songforcharlie.org/",note:"Fentanyl-awareness education active in Arkansas"}
],
"California":[
 {n:"Decriminalize Nature",cat:"reform",city:"Oakland",u:"https://decriminalizenature.org",note:"Original grassroots entheogen decriminalization org"},
 {n:"SSDP at UC Berkeley",cat:"reform",city:"Berkeley",u:"https://callink.berkeley.edu/organization/ssdp",note:"Student drug-policy reform chapter"},
 {n:"SSDP at UC Irvine Law",cat:"reform",city:"Irvine",u:"https://www.law.uci.edu/campus-life/student-organizations/orgs/ssdp.html",note:"Law-school harm reduction and reform chapter"},
 {n:"Drug Policy Alliance (Sacramento)",cat:"reform",city:"Sacramento",u:"https://drugpolicy.org/news/california/",note:"State capitol drug-war reform advocacy"},
 {n:"National Harm Reduction Coalition",cat:"harm",city:"Oakland",u:"https://harmreduction.org",note:"National coalition headquartered in Oakland"},
 {n:"SF AIDS Foundation Syringe Access",cat:"harm",city:"San Francisco",u:"https://www.sfaf.org/programs/syringe-access-services/",note:"Syringe access and DOPE naloxone program"},
 {n:"Harm Reduction Services",cat:"harm",city:"Sacramento",u:"https://hrssac.org/",note:"Syringe exchange, Narcan, HIV/HCV testing"},
 {n:"DanceSafe",cat:"harm",city:"Oakland",u:"https://dancesafe.org",note:"Drug checking and peer education at events"},
 {n:"UC Berkeley Center for the Science of Psychedelics",cat:"research",city:"Berkeley",u:"https://psychedelics.berkeley.edu",note:"Psilocybin research and public education"},
 {n:"UCSF Neuroscape Psychedelics Division",cat:"research",city:"San Francisco",u:"https://neuroscape.ucsf.edu/psychedelics/",note:"Clinical psychedelic and neuroimaging research"},
 {n:"Stanford Psychedelic Science Group",cat:"research",city:"Stanford",u:"https://med.stanford.edu/spsg.html",note:"Psilocybin, MDMA, ketamine research and education"},
 {n:"MAPS (Multidisciplinary Assoc. for Psychedelic Studies)",cat:"research",city:"San Jose",u:"https://maps.org",note:"Nonprofit psychedelic research and education"},
 {n:"Aware Project: Rethinking Psychedelics",cat:"community",city:"San Diego",u:"https://awareproject.org",note:"Southern California psychedelic education society"},
 {n:"San Francisco Psychedelic Society",cat:"community",city:"San Francisco",u:"https://psychedelicsocietysf.org",note:"Integration circles and community events"},
 {n:"PsychedeLiA",cat:"community",city:"Los Angeles",u:"https://www.psychedeliaintegration.org",note:"LA integration circles and workshops since 2016"},
 {n:"Queer Psychedelic Society",cat:"community",city:"San Diego",u:"https://www.queerpsychedelicsociety.com",note:"LGBTQ-focused psychedelic community and events"},
 {n:"InnerSpace Integration",cat:"community",city:"San Diego",u:"https://innerspaceintegration.com/",note:"Monthly integration circles, LA and San Diego"},
 {n:"Zide Door / Church of Ambrosia",cat:"church",city:"Oakland",u:"https://zidedoor.com",note:"Entheogenic mushroom and cannabis church"},
 {n:"Sacred Garden Community",cat:"church",city:"Berkeley",u:"https://www.sacredgarden.life",note:"Interfaith entheogenic sacrament church"}
],
"Colorado":[
 {n:"SSDP — CU Boulder",cat:"reform",city:"Boulder",u:"https://ssdp.org/chapters/mountain/colorado/",note:"Student drug-policy reform chapter"},
 {n:"SSDP — University of Denver",cat:"reform",city:"Denver",u:"https://www.facebook.com/denverSSDP/",note:"DU student chapter for sensible drug policy"},
 {n:"Decriminalize Nature Boulder County",cat:"reform",city:"Boulder",u:"https://www.facebook.com/decrimnatureboulder/",note:"Grassroots entheogen decriminalization"},
 {n:"Harm Reduction Action Center",cat:"harm",city:"Denver",u:"https://harmreductionactioncenter.org/",note:"Denver syringe access and naloxone since 2002"},
 {n:"High Rockies Harm Reduction",cat:"harm",city:"Leadville",u:"https://highrockiesharmreduction.com/",note:"Rural naloxone, test strips, peer support"},
 {n:"The Works Program",cat:"harm",city:"Boulder",u:"https://bouldercounty.gov/families/disease/the-works-program/",note:"Free anonymous Boulder County syringe access"},
 {n:"Access Point — Colorado Health Network",cat:"harm",city:"Denver",u:"https://coloradohealthnetwork.org/prevention-health-education/access-point/",note:"Statewide syringe exchange and overdose prevention"},
 {n:"CU Denver Center for Psychedelic Research",cat:"research",city:"Denver",u:"https://clas.ucdenver.edu/psychedelic-research/",note:"Transdisciplinary psychedelic science and public health"},
 {n:"CU Anschutz Psychedelic Research Consortium",cat:"research",city:"Aurora",u:"https://medschool.cuanschutz.edu/psychiatry/programs-centers/brain-behavior-innovation-center/psychedelic-research-consortium",note:"Med-school psilocybin clinical trials"},
 {n:"Naropa University Center for Psychedelic Studies",cat:"research",city:"Boulder",u:"https://www.naropa.edu/",note:"Psychedelic studies and facilitator training"},
 {n:"Psychedelic Club of Denver",cat:"community",city:"Denver",u:"https://pcodenver.com/",note:"Education, harm reduction, integration support"},
 {n:"Colorado Psychedelic Community",cat:"community",city:"Denver",u:"https://www.coloradopsychedeliccommunity.org/",note:"Integration circles, book clubs, film screenings"},
 {n:"The Nowak Society",cat:"community",city:"Boulder",u:"https://www.meetup.com/the-nowak-society/",note:"Community for psychedelic professionals and healers"},
 {n:"Next Chapter",cat:"veterans",city:"Colorado Springs",u:"https://nextchapterco.org/",note:"No-cost psychedelic treatment for local veterans"},
 {n:"Colorado Psychedelic Church",cat:"church",city:"Denver",u:"https://www.coloradopsychedelicchurch.com/",note:"Legal psilocybin community with veteran meetups"},
 {n:"Ceremonia",cat:"church",city:"Denver",u:"https://www.ceremoniacircle.org/",note:"Nonprofit legal psilocybin and ayahuasca retreats"},
 {n:"Church of Entheogenics (Ahavah Gardens)",cat:"church",city:"Sedalia",u:"https://www.ahavahgardens.org/",note:"Entheogenic healing sanctuary and community"},
 {n:"Colorado Consortium for Rx Drug Misuse Prevention",cat:"education",city:"Aurora",u:"https://corxconsortium.org/",note:"Statewide drug education, naloxone, prevention"},
 {n:"Act On Drugs",cat:"education",city:"Denver",u:"https://actondrugs.org/",note:"Drug-education nonprofit by former forensic chemist"}
],
"Connecticut":[
 {n:"Connecticut for Accessible Psychedelic Medicine",cat:"reform",city:"Statewide",u:"https://www.instagram.com/ct.psychedelic.med/",note:"Education and advocacy for psilocybin decriminalization"},
 {n:"Connecticut Harm Reduction Alliance",cat:"harm",city:"Hartford",u:"https://www.ghhrc.org",note:"Statewide syringe services, naloxone, outreach"},
 {n:"Yale Program for Psychedelic Science",cat:"research",city:"New Haven",u:"https://medicine.yale.edu/psychiatry/research/clinics-and-programs/psychedelic/",note:"Psilocybin for depression, OCD, PTSD, headaches"},
 {n:"ACLU of Connecticut",cat:"reform",city:"Hartford",u:"https://www.acluct.org",note:"Opposes criminal prohibition of drugs"}
],
"Delaware":[
 {n:"Brandywine Counseling & Community Services",cat:"harm",city:"Wilmington",u:"https://www.brandywinecounseling.org",note:"Delaware syringe services and treatment provider"},
 {n:"atTAcK addiction",cat:"harm",city:"New Castle",u:"https://www.attackaddiction.org",note:"Overdose awareness and community naloxone"},
 {n:"UD Center for Drug & Health Studies",cat:"research",city:"Newark",u:"https://cdhs.udel.edu",note:"University substance-use and health-policy research"},
 {n:"Delaware Center for Justice",cat:"reform",city:"Wilmington",u:"https://www.dcjustice.org",note:"Criminal-justice and drug-policy reform"},
 {n:"AIDS Delaware",cat:"harm",city:"Wilmington",u:"https://www.aidsdelaware.org",note:"HIV services and harm-reduction programs"}
],
"District of Columbia":[
 {n:"Decriminalize Nature DC",cat:"reform",city:"Washington",u:"https://decrimnaturedc.org",note:"Initiative 81 organizers; entheogen decriminalization"},
 {n:"HIPS",cat:"harm",city:"Washington",u:"https://www.hips.org",note:"Syringe access, drug checking, harm reduction"},
 {n:"DC Marijuana Justice (DCMJ)",cat:"reform",city:"Washington",u:"https://dcmj.org",note:"Grassroots cannabis legalization advocacy"},
 {n:"Reason for Hope",cat:"education",city:"Washington",u:"https://reasonforhope.org",note:"Psychedelic policy advocacy and public education"},
 {n:"Psychedelic Medicine Coalition",cat:"reform",city:"Washington",u:"https://psychedelicmedicinecoalition.org",note:"Federal psychedelic-policy advocacy"},
 {n:"DC NORML",cat:"reform",city:"Washington",u:"https://norml.org/chapters/dc-norml/",note:"Local NORML chapter for cannabis reform"},
 {n:"Whitman-Walker",cat:"harm",city:"Washington",u:"https://www.whitman-walker.org",note:"HIV care and harm-reduction health services"},
 {n:"InnerSpace Integration",cat:"community",city:"Washington",u:"https://www.innerspaceintegration.com",note:"Psychedelic integration and peer support"}
],
"Florida":[
 {n:"SSDP at University of South Florida",cat:"reform",city:"Tampa",u:"https://bullsconnect.usf.edu/ssdp/home/",note:"Student drug-policy reform chapter"},
 {n:"SSDP at University of Miami",cat:"reform",city:"Coral Gables",u:"https://events.miami.edu/group/students_for_sensible_drug_policy_ssdp",note:"Student drug-policy reform chapter"},
 {n:"SSDP at FSU",cat:"reform",city:"Tallahassee",u:"https://www.facebook.com/fsussdp/",note:"FSU student chapter for sensible drug policy"},
 {n:"IDEA Exchange",cat:"harm",city:"Miami",u:"https://med.miami.edu/community-outreach/idea",note:"Florida's first legal syringe services program"},
 {n:"Florida Harm Reduction Collective",cat:"harm",city:"Statewide",u:"https://www.flhrc.org/",note:"Statewide mail naloxone, syringe access, advocacy"},
 {n:"The SPOT Broward",cat:"harm",city:"Fort Lauderdale",u:"https://thespotbroward.org/",note:"Broward's approved syringe services mobile clinic"},
 {n:"Care Resource",cat:"harm",city:"Miami",u:"https://careresource.org/",note:"Health center with HIV testing and harm reduction"},
 {n:"USF Health Psychedelic Research",cat:"research",city:"Tampa",u:"https://www.usf.edu/health/",note:"Psilocybin clinical trials for depression, PTSD"},
 {n:"Tampa Bay Psychedelic",cat:"community",city:"Tampa",u:"https://www.tampabaypsychedelic.org/",note:"Nonprofit peer support, education, integration"},
 {n:"Central Florida Psychedelic Society",cat:"community",city:"Orlando",u:"https://psychedelic.support/community/central-florida-psychedelic-society/",note:"Orlando integration, education, gatherings"},
 {n:"Orlando Psychedelic Society",cat:"community",city:"Orlando",u:"https://www.meetup.com/orlando-psychedelic-society/",note:"Integration groups, classes, plant-medicine community"}
],
"Georgia":[
 {n:"Georgia Harm Reduction Coalition",cat:"harm",city:"Atlanta",u:"https://georgiaharmreduction.org/",note:"Statewide syringe services, Narcan, MAT"},
 {n:"Georgia Overdose Prevention",cat:"harm",city:"Statewide",u:"https://georgiaoverdoseprevention.org/",note:"Naloxone; passed 911 Medical Amnesty Law"},
 {n:"Positive Impact Health Centers",cat:"harm",city:"Atlanta",u:"https://www.positiveimpacthealthcenters.org/",note:"HIV prevention, addiction recovery, peer support"},
 {n:"Peachtree NORML",cat:"reform",city:"Atlanta",u:"https://peachtreenorml.org/",note:"Georgia cannabis legalization advocacy"},
 {n:"Emory Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Atlanta",u:"https://med.emory.edu/departments/psychiatry/index.html",note:"Addiction center and psychiatric research"},
 {n:"Emory Healthcare Veterans Program",cat:"veterans",city:"Atlanta",u:"https://www.emoryhealthcare.org/centers-programs/veterans-program",note:"Free PTSD/TBI care for post-9/11 veterans"}
],
"Hawaii":[
 {n:"Hawaii Health & Harm Reduction Center",cat:"harm",city:"Honolulu",u:"https://www.hhhrc.org/",note:"Statewide syringe exchange, naloxone, prevention"},
 {n:"Drug Policy Forum of Hawai'i",cat:"reform",city:"Honolulu",u:"https://www.facebook.com/DrugPolicyForumHI/",note:"Longtime statewide drug-policy reform advocacy"},
 {n:"Hawai'i Alliance for Cannabis Reform",cat:"reform",city:"Honolulu",u:"https://www.acluhi.org/hawaii-alliance-cannabis-reform/",note:"Coalition to end cannabis prohibition"},
 {n:"Medical Cannabis Coalition of Hawai'i",cat:"reform",city:"Honolulu",u:"https://mcchi.org/",note:"Medical cannabis patient advocacy"},
 {n:"The Clarity Project",cat:"reform",city:"Honolulu",u:"https://www.clarityproject.org/",note:"Citizen initiative expanding psilocybin-therapy access"},
 {n:"SSDP Hawaii",cat:"reform",city:"Honolulu",u:"https://ssdp.org/chapters/pacific/hawaii/",note:"Students for Sensible Drug Policy state chapter"},
 {n:"Hawaii Island Psychedelic Society",cat:"community",city:"Hawaii Island",u:"https://www.hawaiipsychesociety.com/",note:"Advocacy, education, community resources"},
 {n:"Maui Psychedelic Society",cat:"community",city:"Kihei",u:"https://www.facebook.com/MauiPsychedelicSociety/",note:"Research, knowledge-sharing, responsible use"},
 {n:"UH Manoa JABSOM Emerging Therapies Task Force",cat:"research",city:"Honolulu",u:"https://www.hawaii.edu/",note:"Psychedelic-assisted therapy curriculum and research"},
 {n:"Muaisa Hale Pule",cat:"church",city:"Kealakekua",u:"https://www.muaisa.org/",note:"Native American Church, entheogenic plant ceremonies"}
],
"Idaho":[
 {n:"Kind Idaho",cat:"reform",city:"Boise",u:"https://www.kindidaho.org/",note:"Cannabis patient advocacy; 2026 ballot initiative"},
 {n:"Idaho Harm Reduction Project",cat:"harm",city:"Boise",u:"https://linktr.ee/idahoharmreductionproject",note:"Distributes naloxone and syringe services"},
 {n:"Idaho Psychedelic Society",cat:"community",city:"Boise",u:"https://www.idahopsychedelicsociety.org/",note:"Education, discussion, and community"},
 {n:"Boise State Institute for Behavioral Health & Addiction",cat:"research",city:"Boise",u:"https://www.boisestate.edu/healthsciences-instituteforthestudyofaddiction/",note:"University addiction research institute"},
 {n:"Project ECHO Idaho",cat:"research",city:"Moscow",u:"https://www.uidaho.edu/",note:"Clinician training on opioids and substance use"}
],
"Illinois":[
 {n:"SSDP — Illinois",cat:"reform",city:"Statewide",u:"https://ssdp.org/chapters/midwest/illinois/",note:"Illinois student drug-policy reform chapters"},
 {n:"Entheo IL",cat:"reform",city:"Statewide",u:"https://www.entheoil.org/",note:"Coalition behind Illinois CURE Act psilocybin policy"},
 {n:"Chicago Recovery Alliance",cat:"harm",city:"Chicago",u:"https://anypositivechange.org/",note:"First US naloxone distributor; syringe exchange"},
 {n:"Illinois Harm Reduction & Recovery Coalition",cat:"harm",city:"Statewide",u:"https://www.illinoisharmreduction.org/",note:"Statewide overdose-prevention policy coalition"},
 {n:"Live4Lali",cat:"harm",city:"Arlington Heights",u:"https://live4lali.org/",note:"Naloxone, test strips, mobile outreach"},
 {n:"AIDS Foundation Chicago",cat:"harm",city:"Chicago",u:"https://www.aidschicago.org/",note:"Narcan Newsstands and harm-reduction programs"},
 {n:"West Side Heroin Task Force",cat:"harm",city:"Chicago",u:"https://www.lorettohospital.org/",note:"Loretto Hospital Narcan trainings, West Side"},
 {n:"DanceSafe Chicago",cat:"harm",city:"Chicago",u:"https://dancesafe.org/",note:"Nightlife drug-checking and #TestIt alerts"},
 {n:"UChicago Human Behavioral Pharmacology Lab",cat:"research",city:"Chicago",u:"https://hbpl.uchicago.edu/",note:"Harriet de Wit's MDMA and LSD human research"},
 {n:"UIC HAPPY Lab (Psychiatry)",cat:"research",city:"Chicago",u:"https://www.psych.uic.edu/research/lab-directory/the-happy-lab",note:"Emma Childs studies psychoactive-substance effects"},
 {n:"Sana Healing Collective",cat:"community",city:"Chicago",u:"https://sanahealingcollective.org/",note:"Nonprofit integration and ketamine-assisted therapy"},
 {n:"Chicago Psychedelic Community",cat:"community",city:"Chicago",u:"https://www.meetup.com/chicago-psychedelic-community/",note:"Events for newcomers and experienced"},
 {n:"Psychedelic Safety, Support & Integration — Chicago",cat:"community",city:"Chicago",u:"https://psychedelic.support/community/psychedelic-safety-support-and-integration/",note:"Safety, support, and integration community"},
 {n:"Illinois Psychedelic Society",cat:"education",city:"Chicago",u:"https://www.illinoispsychedelicsociety.org/",note:"501c3 for psychedelic literacy and advocacy"}
],
"Indiana":[
 {n:"IUPUI Students for Sensible Drug Policy",cat:"reform",city:"Indianapolis",u:"https://ssdp.org/",note:"IUPUI campus drug-policy reform chapter"},
 {n:"Indiana NORML",cat:"reform",city:"Indianapolis",u:"https://indiananorml.org/",note:"Oldest Indiana cannabis reform group, founded 1974"},
 {n:"Decriminalize Nature Bloomington",cat:"reform",city:"Bloomington",u:"https://inpsychedelicsociety.org/decriminalization",note:"Local entheogen decriminalization campaign"},
 {n:"Indiana Recovery Alliance",cat:"harm",city:"Bloomington",u:"https://indianarecoveryalliance.org/",note:"Syringe access, naloxone, user rights advocacy"},
 {n:"Overdose Lifeline",cat:"harm",city:"Indianapolis",u:"https://www.overdoselifeline.org/",note:"Statewide naloxone; over 1M kits distributed"},
 {n:"Safe Syringe Access and Support Program",cat:"harm",city:"Indianapolis",u:"https://marionhealth.org/safesyringe/",note:"Marion County syringe access and mobile unit"},
 {n:"Health Foundation of Greater Indianapolis",cat:"harm",city:"Indianapolis",u:"https://thfgi.org/syringe-service-programming/",note:"Funds syringe service programming statewide"},
 {n:"Boone County Syringe Service Program",cat:"harm",city:"Lebanon",u:"https://boonecounty.in.gov/Offices/health-department/Public-Health-Nursing/Substance-Use-Disorder/Syringe-Service-Programs/",note:"County syringe services and referrals"},
 {n:"Indiana Recovery Network",cat:"education",city:"Indianapolis",u:"https://indianarecoverynetwork.org/",note:"Statewide recovery resources and program directory"},
 {n:"Indiana University School of Medicine",cat:"research",city:"Indianapolis",u:"https://medicine.iu.edu/",note:"State-funded psilocybin trials — veterans, depression"},
 {n:"Indiana Psychedelic Society",cat:"community",city:"Bloomington",u:"https://inpsychedelicsociety.org/",note:"Education, harm reduction, integration, festival"}
],
"Iowa":[
 {n:"Iowa Harm Reduction Coalition",cat:"harm",city:"Des Moines",u:"https://www.iowaharmreductioncoalition.org/",note:"Statewide syringe access, naloxone, user health"},
 {n:"Naloxone Iowa",cat:"harm",city:"Statewide",u:"https://www.naloxoneiowa.org/",note:"Statewide naloxone finder and overdose training"},
 {n:"University of Iowa Psychedelics Research Program",cat:"research",city:"Iowa City",u:"https://psychedelics.lab.uiowa.edu/",note:"Psilocybin and ketamine for alcohol-use disorder"},
 {n:"Iowa Cannabis Action Network",cat:"reform",city:"Statewide",u:"https://iowacannabisaction.org/",note:"Advocates cannabis decriminalization and reform"},
 {n:"Iowa Psilocybin Wellness Initiative",cat:"reform",city:"Statewide",u:"https://www.facebook.com/iowapsilocybin",note:"Grassroots advocacy to regulate psilocybin"},
 {n:"Iowaska Church of Healing",cat:"church",city:"Des Moines",u:"https://iowaskachurchofhealing.com/",note:"Interfaith ayahuasca ceremony and healing community"},
 {n:"Psychedelic Club of Iowa City",cat:"community",city:"Iowa City",u:"https://www.facebook.com/groups/2924405497680359",note:"Education, peer support, community"},
 {n:"YSS (Youth & Shelter Services)",cat:"education",city:"Ames",u:"https://yss.org/programs/prevention/",note:"Science-based youth substance-use prevention"}
],
"Kansas":[
 {n:"DCCCA",cat:"harm",city:"Lawrence",u:"https://www.dccca.org/naloxone-program/",note:"Statewide naloxone and harm-reduction services"},
 {n:"KU HERO — Campus Naloxone",cat:"harm",city:"Lawrence",u:"https://hero.ku.edu/narcan",note:"University of Kansas campus naloxone distribution"},
 {n:"Wyandotte County Substance Use Program",cat:"harm",city:"Kansas City",u:"https://www.wycokck.org/Departments/Health/Alerts",note:"Naloxone and fentanyl test-strip services"},
 {n:"CKF Addiction Treatment",cat:"harm",city:"Salina",u:"https://ckfaddictiontreatment.org/",note:"SBIRT screening and substance-use services"},
 {n:"Kansas Prevention Collaborative",cat:"education",city:"Topeka",u:"https://kansaspreventioncollaborative.org/",note:"Statewide prevention resources and coalitions"},
 {n:"Kansas Health Matters",cat:"education",city:"Statewide",u:"https://www.kansashealthmatters.org/",note:"Community health data and substance-use dashboards"}
],
"Kentucky":[
 {n:"Kentucky NORML",cat:"reform",city:"Louisville",u:"https://norml.org/about/kentucky-chapters/",note:"State NORML chapter leading cannabis reform"},
 {n:"Kentuckians for Medicinal Marijuana",cat:"reform",city:"Statewide",u:"https://ky4mm.org/",note:"Grassroots nonprofit advocating medical cannabis"},
 {n:"SSDP at University of Kentucky",cat:"reform",city:"Lexington",u:"https://www.facebook.com/ssdpuky/",note:"Student-led drug-policy reform chapter"},
 {n:"Kentucky Harm Reduction Coalition",cat:"harm",city:"Louisville",u:"https://kyhrc.org",note:"Naloxone, drug-checking, overdose prevention"},
 {n:"VOCAL-KY",cat:"harm",city:"Louisville",u:"https://vocal-ky.org",note:"Grassroots harm reduction and drug-war advocacy"},
 {n:"Three Rivers District Health — Harm Reduction",cat:"harm",city:"Owenton",u:"https://kyharmreduction.org",note:"Syringe program and statewide harm-reduction toolkit"},
 {n:"UK Center on Drug and Alcohol Research (CDAR)",cat:"research",city:"Lexington",u:"https://cdar.uky.edu",note:"University substance-use and treatment research"},
 {n:"Kentucky Injury Prevention & Research Center",cat:"research",city:"Lexington",u:"https://kiprc.uky.edu/injury-focus-areas/drug-overdose-prevention",note:"Overdose prevention research and surveillance"},
 {n:"Appalachian Psychedelic Society",cat:"community",city:"Appalachia",u:"https://www.appalachianpsychedelicsociety.org",note:"Education community, conferences and podcasts"},
 {n:"Psychedelic Society of S. Indiana & W. Kentucky",cat:"community",city:"Western Kentucky",u:"https://www.facebook.com/TPSofSIWKY/",note:"Community psychedelic education group"},
 {n:"People Advocating Recovery (PAR)",cat:"community",city:"Louisville",u:"https://peopleadvocatingrecovery.org",note:"Peer recovery advocacy and policy work"},
 {n:"Psanctuary",cat:"church",city:"Louisville",u:"https://www.psanctuary.org",note:"Sacred mushroom church with member ceremonies"},
 {n:"Aya Quest Native Americas Church",cat:"church",city:"Greensburg",u:"https://www.facebook.com/profile.php?id=100057385790967",note:"Entheogenic church holding ayahuasca ceremonies"},
 {n:"Peaceful Mountain Way Church",cat:"church",city:"Berea",u:"https://peacefulmountainway.org",note:"Ayahuasca ceremonies and integration counseling"}
],
"Louisiana":[
 {n:"Trystereo",cat:"harm",city:"New Orleans",u:"https://trystereo.org/",note:"Peer-run syringe access, naloxone, drug checking"},
 {n:"CrescentCare — Overdose Prevention",cat:"harm",city:"New Orleans",u:"https://www.crescentcare.org/service/overdose-prevention/",note:"Clinic; syringe access and overdose prevention"},
 {n:"Odyssey House Louisiana",cat:"harm",city:"New Orleans",u:"https://www.ohlinc.org/",note:"Addiction treatment and harm-reduction services"},
 {n:"ULM HERO Program",cat:"harm",city:"Monroe",u:"https://ulm.edu/hero/",note:"University harm-reduction education and naloxone"},
 {n:"Northeast Delta Human Services Authority",cat:"harm",city:"Monroe",u:"https://nedeltahsa.org/harm-reduction-vending-machine-pr/",note:"Harm-reduction vending machines and test strips"},
 {n:"New Orleans Syringe Access Program",cat:"harm",city:"New Orleans",u:"https://nola.gov/opioids-and-overdose-prevention/syringe-access-and-syringe-service-programs/",note:"Municipal syringe services and overdose prevention"},
 {n:"LEAD New Orleans",cat:"reform",city:"New Orleans",u:"https://leadneworleans.org/",note:"Law-enforcement diversion instead of drug arrests"},
 {n:"Southern University Center for Prevention Resources",cat:"education",city:"Baton Rouge",u:"https://www.subr.edu/",note:"University substance-use prevention resource center"}
],
"Maine":[
 {n:"Decriminalize Nature Maine",cat:"reform",city:"Portland",u:"https://www.decriminalizemaine.me",note:"Organizing to decriminalize entheogenic plants and fungi"},
 {n:"Maine Access Points",cat:"harm",city:"Statewide",u:"https://www.maineaccesspoints.org",note:"Naloxone, overdose prevention, harm reduction"},
 {n:"Church of Safe Injection",cat:"harm",city:"Lewiston",u:"https://www.churchofsafeinjection.org",note:"Harm reduction nonprofit; naloxone, wound care, outreach"}
],
"Maryland":[
 {n:"Johns Hopkins Center for Psychedelic & Consciousness Research",cat:"research",city:"Baltimore",u:"https://hopkinspsychedelic.org",note:"Leading academic psychedelic research center"},
 {n:"Baltimore Harm Reduction Coalition",cat:"harm",city:"Baltimore",u:"https://www.baltimoreharmreduction.org",note:"Syringe services, naloxone, user advocacy"},
 {n:"Baltimore Safe Haven",cat:"harm",city:"Baltimore",u:"https://www.baltimoresafehaven.org",note:"Trans-led harm reduction, housing, outreach"},
 {n:"Charm City Care Connection",cat:"harm",city:"Baltimore",u:"https://www.charmcitycareconnection.org",note:"Harm reduction and low-barrier care navigation"},
 {n:"Maryland Psychiatric Research Center",cat:"research",city:"Baltimore",u:"https://www.mprc.umaryland.edu",note:"University center studying substance use, psychiatry"},
 {n:"Maryland NORML",cat:"reform",city:"Statewide",u:"https://norml.org/chapters/maryland-norml/",note:"State NORML chapter for cannabis reform"},
 {n:"Baltimore Psychedelic Society",cat:"community",city:"Baltimore",u:"https://www.baltimorepsychedelicsociety.com",note:"Education, integration, and community events"}
],
"Massachusetts":[
 {n:"Bay Staters for Natural Medicine",cat:"reform",city:"Somerville",u:"https://www.baystatersnm.org",note:"Grassroots plant-medicine decriminalization across MA"},
 {n:"SSDP — Massachusetts",cat:"reform",city:"Amherst",u:"https://ssdp.org/chapters/northeast/massachusetts/",note:"Student drug-policy reform; SSDP roots at UMass"},
 {n:"MGH Center for the Neuroscience of Psychedelics",cat:"research",city:"Boston",u:"https://www.massgeneral.org/",note:"Psilocybin for treatment-resistant depression"},
 {n:"Harvard CSWR Psychedelics, Spirituality & Religion",cat:"research",city:"Cambridge",u:"https://cswr.hds.harvard.edu/",note:"Psychedelics, religion, chaplaincy scholarship"},
 {n:"Harvard Study of Psychedelics in Society & Culture",cat:"research",city:"Cambridge",u:"https://psychedelics-study.harvard.edu/about",note:"Interdisciplinary university study"},
 {n:"Boston Psychedelic Society",cat:"community",city:"Boston",u:"https://bostonpsychedelicsociety.org",note:"Education, advocacy, twice-monthly integration circles"},
 {n:"AHOPE Boston",cat:"harm",city:"Boston",u:"https://www.boston.gov/",note:"City needle exchange, naloxone, overdose prevention"},
 {n:"Tapestry Health",cat:"harm",city:"Northampton",u:"https://www.tapestryhealth.org",note:"Western MA syringe access and drug checking"},
 {n:"Massachusetts for Overdose Prevention Coalition",cat:"harm",city:"Statewide",u:"https://ma4opc.org",note:"30+ orgs advocating overdose prevention centers"},
 {n:"RIZE Massachusetts",cat:"harm",city:"Boston",u:"https://www.rizema.org",note:"Foundation funding solutions to overdose crisis"},
 {n:"Learn to Cope",cat:"community",city:"Statewide",u:"https://www.learn2cope.org",note:"Family peer support; 16 chapters"},
 {n:"Justice Resource Institute Health",cat:"harm",city:"Framingham",u:"https://jri.org",note:"MetroWest harm reduction and overdose prevention"},
 {n:"Massachusetts Substance Use Helpline",cat:"education",city:"Statewide",u:"https://helplinema.org",note:"Free statewide info and referral"}
],
"Michigan":[
 {n:"Michigan Psychedelic Society",cat:"community",city:"Ann Arbor",u:"https://mipsychedelicsociety.org",note:"Education and integration since 2017"},
 {n:"Decriminalize Psilocybin Michigan",cat:"reform",city:"Statewide",u:"https://decriminalizepsilocybinmi.org",note:"Statewide entheogen decriminalization campaign"},
 {n:"SSDP at U-M",cat:"reform",city:"Ann Arbor",u:"https://maizepages.umich.edu/organization/michiganssdp",note:"University of Michigan drug-policy reform chapter"},
 {n:"Grand Rapids Red Project",cat:"harm",city:"Grand Rapids",u:"https://www.redproject.org",note:"Syringe access, naloxone, drug checking"},
 {n:"Harm Reduction Michigan",cat:"harm",city:"Petoskey",u:"https://harmreductionmi.org",note:"Naloxone boxes, syringe services, recovery support"},
 {n:"Michigan Overdose Prevention Coalition",cat:"harm",city:"Statewide",u:"https://mioverdoseprevention.com",note:"Grassroots overdose-prevention advocacy"},
 {n:"Detroit Recovery Project",cat:"harm",city:"Detroit",u:"https://www.recovery4detroit.com",note:"Peer outreach, syringe services, overdose training"},
 {n:"Michigan OPEN",cat:"harm",city:"Ann Arbor",u:"https://michigan-open.org",note:"Naloxone, safer-use supplies, overdose education"},
 {n:"NEXT Distro Michigan",cat:"harm",city:"Statewide",u:"https://nextdistro.org/michigan",note:"Mail-based naloxone and harm-reduction supplies"},
 {n:"Michigan Psychedelic Center (M-PsyC)",cat:"research",city:"Ann Arbor",u:"https://michiganpsychedelic.med.umich.edu",note:"U-M clinical and neuroscience psychedelic center"},
 {n:"Wayne State Addiction Psychiatry",cat:"research",city:"Detroit",u:"https://psychiatry.med.wayne.edu/addiction-psychiatry",note:"Substance-use and opioid addiction research"},
 {n:"Eisenberg Family Depression Center",cat:"research",city:"Ann Arbor",u:"https://depressioncenter.org",note:"U-M depression research exploring novel treatments"},
 {n:"Soul Tribes International Ministries",cat:"church",city:"Detroit",u:"https://soultribes.org",note:"Psychedelic church using mushrooms as sacrament"},
 {n:"Face Addiction Now",cat:"education",city:"Fraser",u:"https://faceaddictionnow.org",note:"Statewide drug education and family support"}
],
"Minnesota":[
 {n:"NORML Minnesota",cat:"reform",city:"Minneapolis",u:"https://norml.org/chapters/minnesota",note:"State chapter advocating cannabis legalization"},
 {n:"Southside Harm Reduction Services",cat:"harm",city:"Minneapolis",u:"https://shrs.org",note:"Syringe services, safe-use supplies, overdose prevention"},
 {n:"Steve Rummler HOPE Network",cat:"harm",city:"Golden Valley",u:"https://steverummlerhopenetwork.org",note:"Naloxone distribution and overdose-prevention advocacy"},
 {n:"Valhalla Place",cat:"harm",city:"Woodbury",u:"https://valhallaplace.com",note:"Addiction treatment; naloxone and syringe access"},
 {n:"Rural AIDS Action Network",cat:"harm",city:"St. Cloud",u:"https://raan.org",note:"Syringe exchanges, naloxone, HIV testing, rural MN"},
 {n:"NUWAY Alliance",cat:"harm",city:"Minneapolis",u:"https://nuway.org",note:"Recovery and harm-reduction support services"},
 {n:"The Aliveness Project",cat:"harm",city:"Minneapolis",u:"https://aliveness.org",note:"HIV services, syringe access, overdose prevention"},
 {n:"Native American Community Clinic",cat:"harm",city:"Minneapolis",u:"https://nacc-healthcare.org",note:"Native-led clinic offering harm reduction"},
 {n:"PLURderapolis",cat:"harm",city:"Minneapolis",u:"https://plurderapolis.org",note:"Harm reduction and drug-checking for rave community"},
 {n:"Earl E. Bakken Center for Spirituality & Healing",cat:"research",city:"Minneapolis",u:"https://csh.umn.edu",note:"Integrative-health center exploring psychedelics"},
 {n:"Nielson Lab, University of Minnesota",cat:"research",city:"Minneapolis",u:"https://nielsonlab.umn.edu",note:"Psilocybin, MDMA, and psychedelic data science"},
 {n:"UMN Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Minneapolis",u:"https://med.umn.edu/psychiatry",note:"Psychedelic and mental-health research"},
 {n:"Minnesota Psychedelic Medicine Task Force",cat:"research",city:"St. Paul",u:"https://www.health.state.mn.us/people/psychmed/index.html",note:"State task force on therapeutic psychedelic policy"},
 {n:"Psychedelic Society of Minnesota",cat:"community",city:"Minneapolis",u:"https://psychedelicmn.com",note:"Education, events, integration statewide"},
 {n:"Minnesota Recovery Connection",cat:"community",city:"Minneapolis",u:"https://minnesotarecovery.org",note:"Peer recovery support, education, advocacy"},
 {n:"Luna Wolf Sanctuary",cat:"church",city:"Minneapolis",u:"https://lunawolf.org",note:"Entheogenic sacrament ceremonies and community"}
],
"Mississippi":[
 {n:"End It For Good",cat:"reform",city:"Jackson",u:"https://enditforgood.com",note:"Nonprofit for health-based drug-policy reform"},
 {n:"Mississippi Harm Reduction",cat:"harm",city:"Jackson",u:"https://msharmreduction.org",note:"Free naloxone, recovery housing, HIV prevention"},
 {n:"Ole Miss Marijuana Research Project (NCNPR)",cat:"research",city:"University",u:"https://pharm.olemiss.edu/marijuana/",note:"Longtime federally licensed cannabis research"},
 {n:"National Center for Cannabis Research & Education",cat:"research",city:"University",u:"https://olemiss.edu/nccre/",note:"Ole Miss national cannabis research/education center"}
],
"Missouri":[
 {n:"WashU Dept. of Psychiatry Research",cat:"research",city:"St. Louis",u:"https://psychiatry.wustl.edu/research/",note:"Addiction and substance-use disorder research"},
 {n:"Taylor Family Institute for Psychiatric Research",cat:"research",city:"St. Louis",u:"https://taylorfamilyinstitute.wustl.edu/",note:"Psychiatric drug discovery and novel therapeutics"},
 {n:"SLU Addiction Medicine Fellowship",cat:"research",city:"St. Louis",u:"https://www.slu.edu/medicine/family-medicine/fellowships/addiction-medicine.php",note:"Addiction prevention, treatment, harm reduction"},
 {n:"MoNetwork (Missouri Network)",cat:"harm",city:"St. Louis",u:"https://www.monetwork.org",note:"Wound care, peer support, street outreach"},
 {n:"Assisted Recovery Centers of America",cat:"harm",city:"St. Louis",u:"https://www.arcamidwest.com",note:"Addiction treatment, naloxone vending machines"},
 {n:"No MO Deaths",cat:"harm",city:"Statewide",u:"https://nomodeaths.org",note:"Statewide naloxone and Medication-First access"},
 {n:"PreventEd",cat:"education",city:"St. Louis",u:"https://prevented.org",note:"Drug education, Narcan distribution, advocacy"},
 {n:"NORML KC",cat:"reform",city:"Kansas City",u:"https://www.normlkc.org",note:"Kansas City cannabis reform advocacy"}
],
"Montana":[
 {n:"CAIRN Montana",cat:"reform",city:"Missoula",u:"https://www.cairnmontana.org/",note:"Harm reduction, drug-checking legalization, education"},
 {n:"SSDP — University of Montana",cat:"reform",city:"Missoula",u:"https://grizhub.umt.edu/organization/studentsforsensibledrugpolicy",note:"UM harm reduction and policy chapter"},
 {n:"SSDP — Montana State University",cat:"reform",city:"Bozeman",u:"https://www.cairnmontana.org/allies/ssdp-bozeman",note:"MSU chapter working to end the drug war"},
 {n:"Open Aid Alliance",cat:"harm",city:"Missoula",u:"https://www.openaidalliance.org/",note:"Syringe services, naloxone, wound care, outreach"},
 {n:"Montana Public Health Institute",cat:"harm",city:"Helena",u:"https://www.mtphi.org/opioid-prevention-2/harm-reduction",note:"Opioid prevention and naloxone distribution"},
 {n:"University of Montana Research",cat:"research",city:"Missoula",u:"https://www.umt.edu/research/",note:"Neuroscience and pharmacology drug research"},
 {n:"Montana State University Research",cat:"research",city:"Bozeman",u:"https://www.montana.edu/research/",note:"Neuroscience and addiction research programs"},
 {n:"Sacred Ally",cat:"community",city:"Missoula",u:"https://www.sacredally.love/",note:"Wellness space hosting integration circles"},
 {n:"Harvest Wholeness Center",cat:"community",city:"Missoula",u:"https://psychedelic.support/network/harvest-wholeness-center/",note:"Ketamine-assisted psychedelic psychotherapy"}
],
"Nebraska":[
 {n:"Nebraska Urban Indian Health Coalition",cat:"harm",city:"Omaha",u:"https://www.nuihc.org/",note:"Omaha harm reduction and behavioral health"},
 {n:"Stop Overdose Nebraska",cat:"harm",city:"Statewide",u:"https://stopodne.com/",note:"Naloxone locator and overdose-prevention campaign"},
 {n:"Central Nebraska Council on Alcoholism & Addictions",cat:"harm",city:"Grand Island",u:"https://cncaa.net/",note:"Substance-use treatment and prevention"},
 {n:"UNL Rural Drug Addiction Research Center",cat:"research",city:"Lincoln",u:"https://rdar.unl.edu/",note:"University rural addiction research center"},
 {n:"Nebraska MEDS Coalition",cat:"education",city:"Statewide",u:"http://www.nebraskameds.org/",note:"Safe medication disposal and education"},
 {n:"Psychedelic Society of Omaha",cat:"community",city:"Omaha",u:"https://www.psychedelicsdaily.com/community/united-states/nebraska/psychedelic-society-of-omaha/",note:"Omaha psychedelic education and integration"}
],
"Nevada":[
 {n:"Decriminalize Nature Nevada",cat:"reform",city:"Las Vegas",u:"https://www.facebook.com/DecrimNatureNV/",note:"Grassroots entheogen decriminalization advocacy"},
 {n:"Trac-B Exchange",cat:"harm",city:"Las Vegas",u:"https://www.tracbexchange.com/",note:"Syringe exchange, naloxone, vending machines"},
 {n:"Harm Reduction Center Las Vegas",cat:"harm",city:"Las Vegas",u:"https://www.harmreductioncenterlv.com/",note:"Overdose prevention supplies and machines"},
 {n:"Wake Up Nevada",cat:"harm",city:"Reno",u:"https://wakeupnv.org/",note:"Free Narcan boxes and overdose education"},
 {n:"Las Vegas DanceSafe",cat:"harm",city:"Las Vegas",u:"https://www.instagram.com/vegasdancesafe/",note:"Drug checking and peer education at events"},
 {n:"Foundation for Recovery",cat:"harm",city:"Las Vegas",u:"https://forrecovery.org/overdose-prevention/",note:"Free overdose prevention kits and recovery"},
 {n:"UNLV Hines Neuroscience Lab",cat:"research",city:"Las Vegas",u:"https://www.unlv.edu/",note:"Schedule 1 psychedelic research for mental health"},
 {n:"Nevada Opioid Center of Excellence (UNR)",cat:"research",city:"Reno",u:"https://nvopioidcoe.org/",note:"UNR opioid research and harm-reduction training"},
 {n:"Las Vegas Psychedelic Society",cat:"community",city:"Las Vegas",u:"https://www.meetup.com/las-vegas-psychedelic-society/",note:"Integration circles, risk reduction, education"},
 {n:"Sierra Psychedelic Society",cat:"community",city:"Reno",u:"https://www.sierrapsychedelic.org/",note:"Integration circles, speaker series, safety"},
 {n:"963 Tribe Church",cat:"church",city:"Las Vegas",u:"https://963tribe.com/",note:"Entheogenic church, Shipibo-lineage ceremonies"}
],
"New Hampshire":[
 {n:"New Hampshire Harm Reduction Coalition",cat:"harm",city:"Dover",u:"https://www.nhhrc.org",note:"Statewide syringe services, naloxone, advocacy"},
 {n:"Queen City Exchange",cat:"harm",city:"Manchester",u:"https://www.nhhrc.org/queen-city-exchange-manchester",note:"Volunteer-run Manchester syringe services"},
 {n:"SOS Recovery Community Organization",cat:"community",city:"Rochester",u:"https://sosrco.org",note:"Peer recovery centers and syringe service provider"}
],
"New Jersey":[
 {n:"New Jersey Harm Reduction Coalition",cat:"harm",city:"Asbury Park",u:"https://njharmreduction.org",note:"Naloxone mailing, syringe access, user dignity"},
 {n:"North Jersey Community Research Initiative",cat:"harm",city:"Newark",u:"https://www.njcri.org",note:"Newark HIV, hepatitis-C, harm-reduction services"},
 {n:"Hyacinth",cat:"harm",city:"New Brunswick",u:"https://www.hyacinth.org",note:"NJ's oldest HIV org; harm reduction, testing"},
 {n:"Coalition for Medical Marijuana–New Jersey",cat:"reform",city:"Trenton",u:"https://cmmnj.org",note:"Cannabis patient advocacy and policy reform"},
 {n:"New Jersey NORML",cat:"reform",city:"Statewide",u:"https://norml.org/chapters/new-jersey-norml/",note:"State NORML chapter for cannabis reform"},
 {n:"Rutgers Center of Alcohol & Substance Use Studies",cat:"research",city:"Piscataway",u:"https://alcoholstudies.rutgers.edu",note:"University addiction and substance-use research"},
 {n:"Center for Prevention & Counseling",cat:"harm",city:"Newton",u:"https://centerforprevention.org",note:"Sussex County prevention and naloxone services"},
 {n:"Prevention Links",cat:"community",city:"Roselle",u:"https://preventionlinks.org",note:"Recovery support, peer services, family programs"},
 {n:"Southern Jersey Family Medical Centers",cat:"harm",city:"Hammonton",u:"https://www.sjfmc.org",note:"South Jersey harm-reduction and health services"}
],
"New Mexico":[
 {n:"Decriminalize Psychedelics New Mexico",cat:"reform",city:"Albuquerque",u:"https://www.decrimpsychnm.org/",note:"Nonprofit for psychedelic education, safety, reform"},
 {n:"New Mexico Psychedelic Science Society",cat:"reform",city:"Statewide",u:"https://nmpss.org/",note:"Advocates safe, legal, regulated psychedelic therapy"},
 {n:"New Mexico Harm Reduction Collaborative",cat:"harm",city:"Albuquerque",u:"https://www.nmhrc.org/",note:"Syringe services, overdose prevention, drug checking"},
 {n:"Alianza of New Mexico",cat:"harm",city:"Las Cruces",u:"https://www.alianzaofnewmexico.org/",note:"Syringe services, free Narcan, drug checking"},
 {n:"The Mountain Center",cat:"harm",city:"Santa Fe",u:"https://themountaincenter.org/",note:"Clean needles, naloxone, behavioral health"},
 {n:"Santa Fe Recovery Center",cat:"harm",city:"Santa Fe",u:"https://www.sfrecovery.org/",note:"Substance-use treatment, detox, MAT services"},
 {n:"Santa Fe Psychedelic Society",cat:"community",city:"Santa Fe",u:"https://santafepsychedelicsociety.com/",note:"Peer-led education, dialogue, integration"},
 {n:"UNM Center on Alcohol, Substance use & Addictions",cat:"research",city:"Albuquerque",u:"https://casaa.unm.edu/",note:"NIH-funded addiction and substance-use research"},
 {n:"UNM Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Albuquerque",u:"https://hsc.unm.edu/medicine/departments/psychiatry/",note:"Behavioral health, addiction, treatment research"}
],
"New York":[
 {n:"OnPoint NYC",cat:"harm",city:"New York",u:"https://onpointnyc.org",note:"Nation's first overdose prevention centers"},
 {n:"NEXT Distro",cat:"harm",city:"New York",u:"https://nextdistro.org",note:"Mail-based naloxone and syringe access"},
 {n:"VOCAL-NY",cat:"harm",city:"Brooklyn",u:"https://vocal-ny.org",note:"Grassroots syringe exchange and drug-policy organizing"},
 {n:"Housing Works",cat:"harm",city:"New York",u:"https://www.housingworks.org",note:"HIV and harm-reduction services"},
 {n:"St. Ann's Corner of Harm Reduction",cat:"harm",city:"Bronx",u:"https://sachr.org",note:"Longstanding Bronx syringe access center"},
 {n:"Alliance for Positive Change",cat:"harm",city:"New York",u:"https://www.allianceforpositivechange.org",note:"Syringe access, peer services, health navigation"},
 {n:"Drug Policy Alliance",cat:"reform",city:"New York",u:"https://drugpolicy.org",note:"National drug-policy reform nonprofit, HQ in NYC"},
 {n:"Decriminalize Nature NYC",cat:"reform",city:"New York",u:"https://dnnyc.org",note:"Campaign to decriminalize entheogenic plants and fungi"},
 {n:"SSDP (NYU chapter)",cat:"reform",city:"New York",u:"https://ssdp.org/chapters/",note:"Student drug-policy reform; active NYU chapter"},
 {n:"Mount Sinai Center for Psychedelic Research",cat:"research",city:"New York",u:"https://www.mountsinai.org/",note:"Psychedelic-assisted psychotherapy and trauma research"},
 {n:"NYC Psychedelic Society",cat:"community",city:"New York",u:"https://www.meetup.com/nycedelic/",note:"Education, integration, and community events"},
 {n:"Psychedelic & Entheogenic Society of NY",cat:"community",city:"New York",u:"https://www.meetup.com/psychedelicsocietyny/",note:"Integration circles and discussion group"},
 {n:"The Ancestor Project",cat:"community",city:"New York",u:"https://psychedelic.support/community/bipoc-integration-circle-the-ancestor-project/",note:"BIPOC psychedelic integration circles"},
 {n:"Horizons: Perspectives on Psychedelics",cat:"education",city:"New York",u:"https://horizonsconference.org",note:"NYC psychedelic science and policy conference"},
 {n:"Heroic Hearts Project",cat:"veterans",city:"New York",u:"https://heroicheartsproject.org",note:"Helps veterans access psychedelic therapy for PTSD"},
 {n:"Psymposia",cat:"education",city:"New York",u:"https://www.psymposia.com",note:"Independent psychedelic journalism and education"}
],
"North Carolina":[
 {n:"NC Harm Reduction Coalition",cat:"harm",city:"Raleigh",u:"https://www.nchrc.org/",note:"Statewide harm reduction, overdose prevention, advocacy"},
 {n:"Urban Survivors Union",cat:"harm",city:"Greensboro",u:"https://urbansurvivorsunion.org/",note:"Drug-user union; harm reduction and advocacy"},
 {n:"Western NC AIDS Project (WNCAP)",cat:"harm",city:"Asheville",u:"https://wncap.org/",note:"HIV services and harm reduction, western NC"},
 {n:"The Olive Branch Ministry",cat:"harm",city:"Hickory",u:"https://olivebranchministry.org/",note:"Peer support outreach for people using drugs"},
 {n:"NC NORML",cat:"reform",city:"Statewide",u:"https://ncnorml.org/",note:"North Carolina cannabis law reform advocacy"},
 {n:"UNC Dept. of Psychiatry",cat:"research",city:"Chapel Hill",u:"https://www.med.unc.edu/psych/research/",note:"Substance-use and clinical psychiatric research"},
 {n:"Duke Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Durham",u:"https://psychiatry.duke.edu/",note:"Clinical and translational psychiatric research"}
],
"North Dakota":[
 {n:"The ONE Program (Opioid & Naloxone Education)",cat:"harm",city:"Fargo",u:"https://one-program.org",note:"NDSU pharmacy overdose-prevention; tribal & statewide"},
 {n:"NDSU Center for Collaboration & Advancement in Pharmacy",cat:"research",city:"Fargo",u:"https://www.ndsu.edu/centers/cap",note:"Opioid/naloxone and hepatitis-C research"}
],
"Ohio":[
 {n:"Ohio NORML",cat:"reform",city:"Columbus",u:"https://norml.org/about/ohio-chapters/",note:"State affiliate reforming marijuana laws"},
 {n:"Sensible Movement Coalition",cat:"reform",city:"Cleveland",u:"https://www.facebook.com/SensibleMovementCoalition/",note:"Passed local cannabis decrim in 40+ Ohio cities"},
 {n:"NORML Appalachia of Ohio",cat:"reform",city:"Athens",u:"https://www.normlappalachiaohio.org/",note:"Grassroots cannabis reform in Appalachian Ohio"},
 {n:"SSDP at Kent State University",cat:"reform",city:"Kent",u:"https://www.facebook.com/kentSSDP/",note:"Student drug-policy reform chapter"},
 {n:"Harm Reduction Ohio",cat:"harm",city:"Granville",u:"https://www.harmreductionohio.org/",note:"Distributes naloxone and fentanyl test strips statewide"},
 {n:"The SOAR Initiative",cat:"harm",city:"Columbus",u:"https://thesoarinitiative.org/",note:"Drug-checking, bad-batch alerts, test strips app"},
 {n:"Equitas Health Safe Point",cat:"harm",city:"Columbus",u:"https://equitashealth.com/our-services/harm-reduction/",note:"Syringe service program"},
 {n:"Northwest Ohio Safe Services (NOSS)",cat:"harm",city:"Toledo",u:"https://lucascountyhealth.com/lc-opiate-coalition/syringe-services/",note:"Syringe exchange, naloxone, overdose supplies"},
 {n:"Project DAWN",cat:"harm",city:"Columbus",u:"https://odh.ohio.gov/know-our-programs/project-dawn/",note:"Statewide naloxone distribution, 100+ sites"},
 {n:"OSU Center for Psychedelic Drug Research & Education",cat:"research",city:"Columbus",u:"https://www.cpdre.org/",note:"Psychedelic trials, public-health research, certificate"},
 {n:"University of Cincinnati Psychedelic Research",cat:"research",city:"Cincinnati",u:"https://www.uc.edu/",note:"Psychedelics for substance-use and mental illness"},
 {n:"Ohio Psychedelic Society",cat:"community",city:"North Olmsted",u:"https://www.facebook.com/ohiopsychedelicsociety/",note:"Integration circles, advocacy, harm-reduction events"},
 {n:"Cincinnati Psychedelic Society",cat:"community",city:"Cincinnati",u:"https://www.meetup.com/cincinnati-psychedelic-society/",note:"Education and peer support meetups"},
 {n:"Entheogenic Society of Greater Dayton",cat:"community",city:"Dayton",u:"https://www.meetup.com/entheogenic-society-of-greater-dayton/",note:"Monthly discussion, integration, safety education"},
 {n:"Mind Manifest Midwest",cat:"community",city:"Columbus",u:"https://www.facebook.com/mindmanifestmidwest/",note:"Columbus psychedelic society hosting speakers"},
 {n:"Columbus Psych Fest",cat:"education",city:"Columbus",u:"https://columbuspsychfest.com/",note:"Public psychedelic science education festival"}
],
"Oklahoma":[
 {n:"Oklahoma Harm Reduction Alliance",cat:"harm",city:"Oklahoma City",u:"https://www.okhra.org/",note:"Syringe services and naloxone statewide"},
 {n:"Family & Children's Services — NARCAN",cat:"harm",city:"Tulsa",u:"https://www.fcsok.org/narcan/",note:"Free NARCAN distribution and training"},
 {n:"DCCCA Oklahoma",cat:"harm",city:"Oklahoma City",u:"https://www.dccca.org/prevention-services/oklahoma/",note:"Prevention and naloxone services statewide"},
 {n:"OSU National Center for Wellness & Recovery",cat:"research",city:"Tulsa",u:"https://ncwrecovery.org/",note:"OSU addiction and substance-use research"},
 {n:"Southwest Prevention Center (OU)",cat:"education",city:"Norman",u:"https://outreach.ou.edu/community-services/health-human-services/southwest-prevention-center/",note:"Substance-use prevention training and resources"},
 {n:"Public Health Institute of Oklahoma",cat:"education",city:"Oklahoma City",u:"https://publichealthok.org/",note:"Statewide public-health policy and advocacy"},
 {n:"Wichita Mountains Prevention Network",cat:"education",city:"Lawton",u:"https://www.wmpn.org/",note:"Regional substance-misuse prevention coalitions"}
],
"Oregon":[
 {n:"SSDP Oregon",cat:"reform",city:"Portland",u:"https://ssdp.org/chapters/pacific/oregon/",note:"Student-led drug-policy reform chapters"},
 {n:"Decriminalize Nature Portland",cat:"reform",city:"Portland",u:"https://www.decriminalizenatureportland.org/",note:"Grassroots entheogen decriminalization advocacy"},
 {n:"Oregon NORML",cat:"reform",city:"Portland",u:"https://ornorml.org/",note:"State cannabis-law reform organization"},
 {n:"Plant Medicine Healing Alliance",cat:"reform",city:"Portland",u:"https://plantmedicinehealing.org/",note:"Decriminalizing plant/fungi medicines"},
 {n:"Max's Mission",cat:"harm",city:"Medford",u:"https://www.maxsmission.org/",note:"Naloxone distribution, syringe exchange, S. Oregon"},
 {n:"Portland People's Outreach Project",cat:"harm",city:"Portland",u:"https://portlandpeoplesoutreach.org/",note:"Peer-run syringe and naloxone distribution"},
 {n:"Save Lives Oregon",cat:"harm",city:"Portland",u:"https://www.savelivesoregon.org/",note:"Statewide naloxone and harm-reduction supply network"},
 {n:"HIV Alliance",cat:"harm",city:"Eugene",u:"https://hivalliance.org/",note:"Syringe services and overdose prevention, Lane County"},
 {n:"White Bird Clinic",cat:"harm",city:"Eugene",u:"https://whitebirdclinic.org/",note:"Needle exchange and naloxone distribution"},
 {n:"DanceSafe Portland",cat:"harm",city:"Portland",u:"https://dancesafe.org/",note:"Drug checking and nightlife safety chapter"},
 {n:"The Everly Project",cat:"harm",city:"Portland",u:"https://www.everlyproject.org/",note:"Mobile harm reduction for houseless community"},
 {n:"OHSU (Oregon Psilocybin Evaluation Nexus)",cat:"research",city:"Portland",u:"https://www.ohsu.edu/",note:"Federally funded psilocybin services research"},
 {n:"Portland Psychedelic Society",cat:"community",city:"Portland",u:"https://www.portlandpsychedelic.org/",note:"Nonprofit integration circles and education"},
 {n:"Portland Integration Network",cat:"community",city:"Portland",u:"https://www.portlandintegrationnetwork.com/",note:"Psychedelic integration peer support network"},
 {n:"Heroic Hearts Project",cat:"veterans",city:"Ashland",u:"https://heroicheartsproject.org/",note:"Veteran psychedelic-therapy retreats"},
 {n:"Raven of the Sacred Entheogen",cat:"church",city:"Oregon",u:"https://www.ravenofthesacredentheogen.com/",note:"Faith-based psilocybin sacrament community"},
 {n:"Healing Advocacy Fund",cat:"education",city:"Portland",u:"https://healingadvocacyfund.org/",note:"Supports regulated psilocybin-therapy programs"}
],
"Pennsylvania":[
 {n:"Prevention Point Philadelphia",cat:"harm",city:"Philadelphia",u:"https://ppponline.org",note:"Major syringe services and overdose-prevention nonprofit"},
 {n:"Prevention Point Pittsburgh",cat:"harm",city:"Pittsburgh",u:"https://www.pppgh.org",note:"Western PA syringe access and naloxone"},
 {n:"Savage Sisters Recovery",cat:"harm",city:"Philadelphia",u:"https://www.savagesisters.org",note:"Kensington harm reduction, outreach, recovery housing"},
 {n:"Unity Recovery",cat:"harm",city:"Philadelphia",u:"https://www.unityrecovery.org",note:"Peer recovery support and harm reduction"},
 {n:"Project SAFE",cat:"harm",city:"Philadelphia",u:"https://www.projectsafephilly.org",note:"Harm reduction for women who use drugs"},
 {n:"Philadelphia Psychedelic Society",cat:"community",city:"Philadelphia",u:"https://www.philadelphiapsychedelicsociety.com",note:"Local psychedelic education and integration"},
 {n:"Pennsylvania NORML",cat:"reform",city:"Statewide",u:"https://norml.org/chapters/pennsylvania-norml/",note:"State NORML chapter for cannabis reform"}
],
"Rhode Island":[
 {n:"Project Weber/RENEW",cat:"harm",city:"Providence",u:"https://weberrenew.org",note:"Runs nation's first state-sanctioned overdose prevention center"},
 {n:"RICARES",cat:"community",city:"Pawtucket",u:"https://www.ricares.org",note:"Recovery advocacy, peer support, policy reform"},
 {n:"Brown University Psilocybin for OCD Research",cat:"research",city:"Providence",u:"https://www.brownhealth.org/magic-mushrooms",note:"Pilot studying psilocybin for treatment-resistant OCD"},
 {n:"The Healing Church (INRI)",cat:"church",city:"West Greenwich",u:"https://www.thehealingchurchri.com",note:"Cannabis as sacramental holy anointing"},
 {n:"Rhode Island Public Health Institute",cat:"education",city:"Providence",u:"https://www.riphi.org",note:"Harm reduction resources and public-health programs"}
],
"South Carolina":[
 {n:"MUSC Dept. of Psychiatry & Behavioral Sciences",cat:"research",city:"Charleston",u:"https://medicine.musc.edu/departments/psychiatry-behavioral-sciences",note:"Addiction sciences; historic MDMA-PTSD research site"},
 {n:"Challenges Inc SC",cat:"harm",city:"Greenville",u:"https://challengesinc.org/",note:"Statewide syringe services and overdose prevention"},
 {n:"WakeUp Carolina",cat:"harm",city:"Mount Pleasant",u:"https://wakeupcarolina.org/",note:"Naloxone, test strips, peer recovery support"},
 {n:"FAVOR Greenville",cat:"community",city:"Greenville",u:"https://favorgreenville.org/",note:"Peer-based recovery support and family healing"},
 {n:"LRADAC",cat:"education",city:"Columbia",u:"https://www.lradac.org/",note:"Lexington/Richland prevention and treatment"}
],
"South Dakota":[
 {n:"Emily's Hope",cat:"harm",city:"Sioux Falls",u:"https://emilyshope.charity",note:"Free naloxone, overdose response, prevention curriculum"},
 {n:"Great Plains Tribal Leaders Health Board",cat:"harm",city:"Rapid City",u:"https://www.gptchb.org",note:"Tribal harm-reduction and overdose-prevention programs"}
],
"Tennessee":[
 {n:"Choice Health Network",cat:"harm",city:"Knoxville",u:"https://choicehealthnetwork.org/",note:"Statewide syringe access, HIV testing, harm reduction"},
 {n:"A Betor Way",cat:"harm",city:"Memphis",u:"https://abetorway.org/",note:"Mobile syringe access and overdose prevention"},
 {n:"Tennessee Recovery Alliance",cat:"harm",city:"Knoxville",u:"https://www.tnrecoveryalliance.org/",note:"Knoxville 'any positive change' harm reduction"},
 {n:"Nashville CARES",cat:"harm",city:"Nashville",u:"https://nashvillecares.org/",note:"HIV prevention, testing, and support"},
 {n:"Tennessee Overdose Prevention",cat:"harm",city:"Statewide",u:"https://www.tnoverdoseprevention.org/",note:"Naloxone access and Good Samaritan advocacy"},
 {n:"Cempa Community Care",cat:"harm",city:"Chattanooga",u:"https://cempacare.org/",note:"HIV care and syringe services"},
 {n:"Street Works",cat:"harm",city:"Nashville",u:"https://streetworks.org/",note:"HIV prevention and drug-related outreach"},
 {n:"Metro Drug Coalition",cat:"education",city:"Knoxville",u:"https://metrodrug.org/",note:"Prevention, overdose education, Narcan distribution"},
 {n:"TN Assoc. of Alcohol, Drug & Addiction Services",cat:"education",city:"Nashville",u:"https://www.taadas.org/",note:"Addiction education, clearinghouse, policy advocacy"},
 {n:"Vanderbilt Dept. of Psychiatry (Addiction Research)",cat:"research",city:"Nashville",u:"https://www.vumc.org/psychiatry/research",note:"Substance-use and addiction research programs"},
 {n:"UTHSC Center for Addiction Science",cat:"research",city:"Memphis",u:"https://www.uthsc.edu/medicine/addiction-science/index.php",note:"University addiction research and treatment"}
],
"Texas":[
 {n:"SSDP — UT Austin",cat:"reform",city:"Austin",u:"https://ssdp.org/",note:"Award-winning UT Austin student drug-policy chapter"},
 {n:"SSDP — UNT",cat:"reform",city:"Denton",u:"https://www.facebook.com/UNTssdp/",note:"Helped pass Denton cannabis decriminalization"},
 {n:"SSDP — Texas State",cat:"reform",city:"San Marcos",u:"https://www.instagram.com/ssdp.txst/",note:"Texas State student drug-policy chapter"},
 {n:"Decriminalize Nature Austin",cat:"reform",city:"Austin",u:"https://www.instagram.com/decriminalizenatureaustin/",note:"Entheogenic plant decriminalization advocacy"},
 {n:"Decriminalize Nature Dallas",cat:"reform",city:"Dallas",u:"https://decriminalizenature.org/introducing-decriminalize-nature-dallas/",note:"Plant-medicine decriminalization group"},
 {n:"Texas Harm Reduction Alliance",cat:"harm",city:"Austin",u:"https://www.texasharmreduction.org/",note:"Drop-in center; naloxone, syringes, test strips"},
 {n:"Austin Harm Reduction Coalition",cat:"harm",city:"Austin",u:"http://www.austinharmreduction.org/",note:"One of Texas's largest syringe exchanges"},
 {n:"Corazon San Antonio",cat:"harm",city:"San Antonio",u:"https://corazonsa.org/",note:"San Antonio syringe services and street outreach"},
 {n:"Houston Harm Reduction Alliance",cat:"harm",city:"Houston",u:"https://nasen.org/sep/houston-harm-reduction-alliance",note:"Houston overdose prevention and naloxone training"},
 {n:"Houston Emergency Opioid Engagement System",cat:"harm",city:"Houston",u:"https://sbmi.uth.edu/heroes/",note:"UTHealth opioid recovery and naloxone program"},
 {n:"McGill Center for Psychedelic Research (Dell Med)",cat:"research",city:"Austin",u:"https://dellmed.utexas.edu/units/charmaine-and-gordon-mcgill-center-for-psychedelic-research-and-therapy",note:"UT Austin psilocybin/MDMA trials; first in Texas"},
 {n:"Baylor College of Medicine — ELIPSIS",cat:"research",city:"Houston",u:"https://www.bcm.edu/",note:"Bioethics and policy of psychedelics research"},
 {n:"Addiction Research Institute (UT Austin)",cat:"research",city:"Austin",u:"https://ari.socialwork.utexas.edu/",note:"Substance-use and overdose research"},
 {n:"Psychedelic Society of Texas (PsyT)",cat:"community",city:"Austin",u:"https://www.psytexas.com/",note:"Integration circles in Austin, Dallas, Houston, SA"},
 {n:"Dallas Psychedelic Society",cat:"community",city:"Dallas",u:"https://www.dallaspsychedelicsociety.org/",note:"Dallas psychedelic education and integration"},
 {n:"Heroic Hearts Project",cat:"veterans",city:"Austin",u:"https://heroicheartsproject.org/",note:"Veteran psychedelic therapy; UT Dell research partner"}
],
"Utah":[
 {n:"Utah Patients Coalition",cat:"reform",city:"Salt Lake City",u:"https://utahpatients.org/",note:"Passed medical cannabis; backs therapeutic psilocybin"},
 {n:"Libertas Institute",cat:"reform",city:"Lehi",u:"https://libertas.institute/",note:"Think tank; medical cannabis and decrim reform"},
 {n:"Utah Naloxone",cat:"harm",city:"Salt Lake City",u:"https://www.utahnaloxone.org/",note:"Statewide naloxone distribution and free kits"},
 {n:"Utah Harm Reduction Coalition",cat:"harm",city:"Midvale",u:"https://www.utahharmreduction.org/",note:"Syringe exchange, HIV/HCV testing, referrals"},
 {n:"University of Utah Psychedelic Science Initiative",cat:"research",city:"Salt Lake City",u:"https://medicine.utah.edu/psychiatry/research/labs/upsi",note:"Psychedelic-assisted therapy research lab"},
 {n:"The Divine Assembly",cat:"church",city:"Salt Lake City",u:"https://thedivineassembly.org/",note:"Psilocybin-sacrament church (Steve Urquhart)"},
 {n:"Utah Support Advocates for Recovery Awareness",cat:"community",city:"Salt Lake City",u:"https://www.utahrecovers.org/",note:"Recovery centers, peer support, advocacy"},
 {n:"Odyssey House of Utah",cat:"community",city:"Salt Lake City",u:"https://odysseyhouse.org/",note:"Utah's largest addiction-treatment nonprofit"}
],
"Vermont":[
 {n:"Psychedelic Society of Vermont",cat:"community",city:"Stowe",u:"https://vermontpsychedelic.org",note:"200-member community; science, integration, annual summit"},
 {n:"Decriminalize Nature Vermont",cat:"reform",city:"Burlington",u:"https://www.facebook.com/DecriminalizeNatureVT/",note:"Campaigns to decriminalize entheogenic plants and fungi"},
 {n:"Vermont CARES",cat:"harm",city:"Burlington",u:"https://www.facebook.com/vtcares/",note:"HIV/HCV harm reduction, syringe services, naloxone"}
],
"Virginia":[
 {n:"Virginia NORML",cat:"reform",city:"Richmond",u:"https://www.vanorml.org/",note:"Statewide cannabis law reform advocacy"},
 {n:"Chris Atwood Foundation",cat:"harm",city:"Fairfax",u:"https://www.thecaf.org/",note:"Naloxone, harm reduction, peer recovery, N. Virginia"},
 {n:"Health Brigade",cat:"harm",city:"Richmond",u:"https://www.healthbrigade.org/",note:"Free clinic with needle exchange services"},
 {n:"The McShin Foundation",cat:"community",city:"Richmond",u:"https://mcshin.org/",note:"Peer-run recovery community organization"},
 {n:"VCU Institute for Drug and Alcohol Studies",cat:"research",city:"Richmond",u:"https://idas.vcu.edu/",note:"Multidisciplinary addiction research and training"},
 {n:"UVA Division of Perceptual Studies",cat:"research",city:"Charlottesville",u:"https://med.virginia.edu/perceptual-studies/",note:"Consciousness research; psychedelics-in-practice scholarship"},
 {n:"UVA Contemplative Sciences Center",cat:"community",city:"Charlottesville",u:"https://csc.virginia.edu/",note:"Contemplative science and consciousness research"}
],
"Washington":[
 {n:"SSDP — UW Chapter",cat:"reform",city:"Seattle",u:"https://huskylink.washington.edu/organization/ssdp",note:"Student drug-policy reform and harm reduction"},
 {n:"SSDP — WWU Chapter",cat:"reform",city:"Bellingham",u:"https://www.facebook.com/WWUSSDP",note:"Western Washington student reform chapter"},
 {n:"Psychedelic Medicine Alliance of Washington",cat:"reform",city:"Seattle",u:"https://pmaw.org/",note:"Drafts psilocybin bills; statewide access advocacy"},
 {n:"Bellingham Psychedelic Society",cat:"reform",city:"Bellingham",u:"https://www.bellinghampsychedelicsociety.org/",note:"Entheogen decriminalization and community education"},
 {n:"People's Harm Reduction Alliance",cat:"harm",city:"Seattle",u:"https://www.peoplesharmreductionalliance.org/",note:"Peer-run syringe access, naloxone, test strips"},
 {n:"Dave Purchase Project",cat:"harm",city:"Tacoma",u:"https://www.davepurchaseproject.org/",note:"Nation's first legal needle exchange; Pierce County"},
 {n:"UW Center for Novel Therapeutics in Addiction Psychiatry",cat:"research",city:"Seattle",u:"https://ntap.psychiatry.uw.edu/",note:"UW psychedelic trials for addiction, PTSD, AUD"},
 {n:"UW Addictions, Drug & Alcohol Institute",cat:"research",city:"Seattle",u:"https://adai.uw.edu/",note:"University substance-use research institute"},
 {n:"WSU Alcohol & Drug Abuse Research Program",cat:"research",city:"Pullman",u:"https://adarp.wsu.edu/",note:"Substance-use disorder and psychedelic-provider research"},
 {n:"Cascadia Psychedelic Community",cat:"community",city:"Seattle",u:"https://www.cascadiapsychedelic.com/",note:"Regional education events, integration circles, conference"},
 {n:"Tacoma Psychedelic Society",cat:"community",city:"Tacoma",u:"https://www.meetup.com/tacoma-psychedelic-society-integration-circle/",note:"Integration circle and peer community"},
 {n:"Port Townsend Psychedelic Society",cat:"community",city:"Port Townsend",u:"https://www.porttownsendpsychedelicsociety.org/",note:"Integration circles, recovery, decrim education"},
 {n:"Seattle Psychedelic Healing & Spirituality",cat:"community",city:"Seattle",u:"https://www.meetup.com/seattle-psychedelic-healing-and-spirituality-community/",note:"Heart-centered peer support and gatherings"},
 {n:"New Life Rising",cat:"church",city:"Seattle",u:"https://www.newliferising.com/locations/ayahuasca-seattle-washington",note:"501c3 church for religious ayahuasca sacrament"},
 {n:"Entheo Society of Washington",cat:"church",city:"Seattle",u:"https://www.facebook.com/entheosocietywa/",note:"Advocates legal access to entheogenic plants and fungi"}
],
"West Virginia":[
 {n:"SOAR WV",cat:"harm",city:"Charleston",u:"https://soarwv.org/",note:"Volunteer overdose-prevention; naloxone and test strips"},
 {n:"West Virginia Health Right",cat:"harm",city:"Charleston",u:"https://wvhealthright.org/",note:"Free clinic; HIV prevention, recovery, peer support"},
 {n:"Cabell-Huntington Health Department",cat:"harm",city:"Huntington",u:"https://cabellhealth.org/clinical-services/overdose-and-infectious-disease-prevention-program/",note:"Naloxone, syringe services, disease prevention"},
 {n:"Wheeling Health Right",cat:"harm",city:"Wheeling",u:"https://www.wheelinghealthright.com/",note:"Free clinic serving northern-panhandle counties"},
 {n:"West Virginia Drug Intervention Institute",cat:"education",city:"Dunbar",u:"https://www.wvdii.org/",note:"Naloxone, ONEbox kits, drug-safety education"},
 {n:"WVU Rockefeller Neuroscience Institute",cat:"research",city:"Morgantown",u:"https://wvumedicine.org/our-care/institutes/rni/",note:"Addiction neuroscience; deep-brain stimulation for OUD"},
 {n:"Marshall Univ. Joan C. Edwards School of Medicine",cat:"research",city:"Huntington",u:"https://jcesom.marshall.edu/",note:"Addiction-medicine fellowship and substance-use research"},
 {n:"ACLU of West Virginia",cat:"reform",city:"Charleston",u:"https://www.acluwv.org/",note:"Litigates drug-policy and criminal-justice reform"},
 {n:"Recovery Point West Virginia",cat:"community",city:"Huntington",u:"https://recoverypointwv.org/",note:"Free peer-led recovery housing and support"}
],
"Wisconsin":[
 {n:"Center for Psychedelic Research & Education (UW–Madison)",cat:"research",city:"Madison",u:"https://research.pharmacy.wisc.edu/cpre/",note:"Psychedelic research, education, clinician training"},
 {n:"Usona Institute",cat:"research",city:"Madison",u:"https://www.usonainstitute.org/",note:"Nonprofit psilocybin and 5-MeO-DMT clinical trials"},
 {n:"Vivent Health — Lifepoint",cat:"harm",city:"Milwaukee",u:"https://viventhealth.org/services/harm-reduction/",note:"Syringe services, naloxone, drug-checking statewide"},
 {n:"Safe Communities of Madison-Dane County",cat:"harm",city:"Madison",u:"https://safecommunities.org/",note:"Overdose aid kits, naloxone, recovery coaching"},
 {n:"Wisconsin Voices for Recovery",cat:"harm",city:"Madison",u:"https://wisconsinvoicesforrecovery.org/",note:"Recovery advocacy; NALOX-ZONE naloxone distribution"},
 {n:"AIDS Network",cat:"harm",city:"Madison",u:"https://www.aidsnetwork.org/",note:"Southern WI HIV prevention, testing, support"},
 {n:"Southeastern Wisconsin NORML",cat:"reform",city:"Milwaukee",u:"https://www.sewisconsinnorml.org/",note:"Local cannabis and drug-law reform chapter"}
],
"Wyoming":[
 {n:"Wyoming NORML",cat:"reform",city:"Cody",u:"https://www.wyomingnorml.org/",note:"Statewide cannabis-law reform; lobbying, decrim"},
 {n:"Recover Wyoming",cat:"harm",city:"Cheyenne",u:"https://www.recoverwyoming.org/",note:"Recovery org; peer support, naloxone, meetings"},
 {n:"Volunteers of America Northern Rockies",cat:"veterans",city:"Sheridan",u:"https://www.voanr.org/",note:"Veteran services plus addiction treatment"},
 {n:"Wyoming Survey & Analysis Center (UW)",cat:"research",city:"Laramie",u:"https://wysac.uwyo.edu/",note:"Substance use and opioid policy research"},
 {n:"Wyoming Prevention Depot",cat:"education",city:"Laramie",u:"https://www.wyomingpreventiondepot.org/",note:"Statewide substance-use prevention resources"}
]
};

if (typeof module!=="undefined"&&module.exports){module.exports={ORGS:ORGS,ORG_CATS:ORG_CATS,ORG_CAT_ORDER:ORG_CAT_ORDER};}
