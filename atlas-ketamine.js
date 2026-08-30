/* ============================================================
   ELEVATED STATES PROJECT — KETAMINE ACCESS DIRECTORY
   ------------------------------------------------------------
   Curated per-state directory of real, in-person ketamine
   providers: IV ketamine infusion clinics, ketamine-assisted
   psychotherapy (KAP), and Spravato/esketamine-certified centers.
   National telehealth/mail-order providers are intentionally
   excluded. Verified to have a live web presence in 2026.
   Informational only, not an endorsement or medical advice —
   verify current status and licensure before seeking care.

   KETAMINE[state] = [ {n:name, city, u:url, note}, ... ]
   ============================================================ */

var KETAMINE = {
"Alabama":[
 {n:"Southern Ketamine & Wellness",city:"Vestavia Hills",u:"https://southernketamine.com",note:"IV ketamine and Spravato; anesthesiologist-led"},
 {n:"Crestline Health and Wellness",city:"Mountain Brook",u:"https://crestlinehealthandwellness.com",note:"IV ketamine and psychiatry; early Alabama clinic"},
 {n:"Synergy Wellness",city:"Huntsville",u:"https://synergywellnessal.com",note:"IV ketamine infusions plus primary care"},
 {n:"Southern Ketamine & Wellness — Auburn",city:"Opelika",u:"https://skawauburn.com",note:"IV ketamine and Spravato; Auburn area"},
 {n:"Wholistic Health",city:"Theodore",u:"https://wholistictelehealth.org",note:"In-office IV ketamine and Spravato"},
 {n:"Integrated Neurohealth",city:"Florence",u:"https://integrated-neurohealth.com",note:"Ketamine for depression, PTSD, pain"}
],
"Alaska":[
 {n:"Ketamine Wellness Institute (Ketwell)",city:"Anchorage",u:"https://ketwellalaska.com/",note:"Alaska's only VA-approved IV ketamine clinic"},
 {n:"Ketwell Alaska — Fairbanks",city:"Fairbanks",u:"https://ketwellalaska.com/locations/fairbanks-ak/",note:"IV ketamine infusions, Fairbanks"},
 {n:"Alpenglow Pain & Wellness",city:"Anchorage",u:"https://www.alpenglowpain.com/services/ketamine",note:"Physician-led IV ketamine for pain, depression"},
 {n:"Quest Counseling & Wellness",city:"Fairbanks",u:"https://www.questcounselingandwellness.com/ketamine-therapy",note:"Ketamine-assisted psychotherapy"},
 {n:"Alaska Compass",city:"Anchorage",u:"https://www.alaskacompass.com/ketamine",note:"Ketamine-assisted psychotherapy practice"},
 {n:"Greenbrook TMS",city:"Anchorage",u:"https://greenbrooktms.com/",note:"REMS-certified Spravato esketamine"}
],
"Arizona":[
 {n:"Advanced Wellness and Pain",city:"Scottsdale",u:"https://advancedwellnessandpain.com",note:"IV ketamine for depression, anxiety, PTSD"},
 {n:"NuGen Medicine",city:"Scottsdale",u:"https://www.nugenmedicine.com/ketamine-therapy-arizona",note:"Physician-supervised IV ketamine infusions"},
 {n:"Scottsdale Ketamine Clinic",city:"Scottsdale",u:"https://scottsdaleketamineclinic.com",note:"IV ketamine and KAP"},
 {n:"Vibrant Health Care",city:"Scottsdale",u:"https://www.vibranthealthcare.org/ketamine-infusion-scottsdale/",note:"IV ketamine restorative medicine"},
 {n:"Atlas Ketamine",city:"Glendale",u:"https://atlasketamine.com",note:"IV ketamine infusions and Spravato"},
 {n:"Arizona Ketamine Specialists",city:"Glendale",u:"https://arizonaketaminespecialists.com",note:"IV infusion and KAP"},
 {n:"Kadelyx",city:"Phoenix",u:"https://kadelyx.com",note:"IM ketamine and in-clinic Spravato"},
 {n:"The Ketamine Clinic",city:"Phoenix",u:"https://theketamineclinicllc.com",note:"IV ketamine for chronic depression"},
 {n:"DayTryp Health",city:"Phoenix",u:"https://daytryp.com",note:"Ketamine for anxiety, depression, PTSD"},
 {n:"Mental Health Center of America",city:"Mesa",u:"https://mentalhealthcenter.com/ketamine-assisted-psychotherapy/",note:"Psychiatrist-supervised KAP"},
 {n:"Integrity Pain & Wellness",city:"Mesa",u:"https://www.integritypainaz.com/services/ketamine-infusions",note:"Ketamine at interventional pain practice"},
 {n:"Be Balanced Counseling",city:"Tempe",u:"https://www.bebalancedcounseling.com/ketamine-assisted-psychotherapy",note:"Therapist-guided KAP"},
 {n:"Find Your Shine Therapy",city:"Tempe",u:"https://www.findyourshinetherapy.com/kap",note:"KAP for depression, anxiety, PTSD"},
 {n:"Cathexis Psychedelics",city:"Tucson",u:"https://www.cathexispsychedelics.com",note:"State-licensed KAP clinic"},
 {n:"Revitalize Ketamine Clinics",city:"Flagstaff",u:"https://revitalizeketamine.com",note:"IV ketamine, Spravato, and rTMS"}
],
"Arkansas":[
 {n:"Arkansas Psychiatric Clinic",city:"Little Rock",u:"https://apclr.com/",note:"Spravato and ketamine; longtime psychiatric clinic"},
 {n:"Silver Lining Clinic (NWA Ketamine)",city:"Fayetteville",u:"https://northwestarkansasketamine.com/",note:"IV ketamine for depression, PTSD, pain"},
 {n:"UAMS Health",city:"Little Rock",u:"https://uamshealth.com/treatment/ketamine/",note:"University hospital ketamine program"},
 {n:"SwiftieMed",city:"Fayetteville",u:"https://swiftiemed.com/",note:"Physician-led ketamine for depression"}
],
"California":[
 {n:"Ketamine Clinics Los Angeles",city:"Los Angeles",u:"https://ketamineclinics.com/",note:"IV ketamine for depression, PTSD since 2014"},
 {n:"Ketamine Therapy Center",city:"Los Angeles",u:"https://www.ketaminectr.com/",note:"Ketamine for treatment-resistant depression, PTSD"},
 {n:"Clarus Health",city:"San Francisco",u:"https://www.clarus-health.com/iv-ketamine",note:"IV ketamine for depression, PTSD, pain"},
 {n:"Bay Psychiatric Associates",city:"San Francisco",u:"https://baypsychiatric.com/services/ketamine/",note:"Ketamine for depression, anxiety, PTSD"},
 {n:"Polaris Insight Center",city:"San Francisco",u:"https://www.polarisinsight.com/",note:"Ketamine-assisted psychotherapy since 2018"},
 {n:"Kadima Neuropsychiatry",city:"San Diego",u:"https://www.kadimanp.com/",note:"Established ketamine and TMS clinic"},
 {n:"Stella Mental Health",city:"San Diego",u:"https://stellamentalhealth.com/locations/san-diego",note:"Spravato, ketamine infusion, TMS, SGB"},
 {n:"San Diego Ketamine Center",city:"San Diego",u:"https://sandiegoketaminecenter.com/",note:"IV ketamine for depression, PTSD, OCD, pain"},
 {n:"Mindful Health Solutions",city:"Sacramento",u:"https://mindfulhealthsolutions.com/ketamine-infusion-therapy/",note:"IV ketamine and Spravato for depression"},
 {n:"OC Ketamine Therapy",city:"Newport Beach",u:"https://ocketaminetherapy.com/",note:"Ketamine and TMS for severe depression"},
 {n:"Allied Psychiatry",city:"Newport Beach",u:"https://alliedpsychiatry.com/services/iv-ketamine-treatment/",note:"IV ketamine for treatment-resistant depression"},
 {n:"Eagle View Psychiatry",city:"San Jose",u:"https://eagleviewpsychiatry.com/",note:"Spravato esketamine and TMS psychiatry"},
 {n:"ShaMynds",city:"Sacramento",u:"https://shamynds.com/",note:"Ketamine-assisted therapy, TMS, brain mapping"}
],
"Colorado":[
 {n:"Wholeness Center",city:"Fort Collins",u:"https://wholeness.com",note:"Integrative KAP, IV ketamine, Spravato"},
 {n:"Klarisana",city:"Denver",u:"https://www.klarisana.com",note:"IV/IM ketamine infusions and KAP"},
 {n:"Vitalitas Denver",city:"Denver",u:"https://www.ketaminedenver.com",note:"Physician-led IV ketamine for depression, PTSD"},
 {n:"Ballen Medical & Wellness",city:"Denver",u:"https://www.ballenmedical.com",note:"Long-running supervised ketamine infusions"},
 {n:"NeuConnections Wellness",city:"Highlands Ranch",u:"https://neuconnectionswellness.com",note:"Highly rated IV ketamine infusion clinic"},
 {n:"Mind Spa Denver",city:"Denver",u:"https://www.mindspadenver.com",note:"Low-dose IV ketamine for depression"},
 {n:"Summit Ketamine Innovations",city:"Denver",u:"https://summit-med.com",note:"IV ketamine for depression, anxiety, PTSD"},
 {n:"Rocky Mountain Mind and Body",city:"Denver",u:"https://rockymountainmindandbody.com",note:"Integrative psychiatry with IV ketamine"},
 {n:"Amavi Integrative Mental Health",city:"Boulder",u:"https://www.amavimentalhealth.com",note:"Ketamine-assisted psychotherapy"},
 {n:"Integrative Psychiatry Centers",city:"Boulder",u:"https://psychiatrycenters.com",note:"Ketamine therapy and psychiatry"},
 {n:"Delos Psychiatry",city:"Boulder",u:"https://delospsych.com",note:"Ketamine-assisted therapy; accepts insurance"},
 {n:"Colorado Psychiatry Solutions",city:"Colorado Springs",u:"https://psychsolutions.health",note:"IV ketamine, Spravato, KAP, TMS"},
 {n:"Serenity Mental Health Centers",city:"Colorado Springs",u:"https://serenitymentalhealthcenters.com",note:"Ketamine infusions and Spravato"}
],
"Connecticut":[
 {n:"Yale New Haven Psychiatric Hospital",city:"New Haven",u:"https://www.ynhh.org/psychiatric/services/specialized-services/esketamine-ketamine",note:"Academic esketamine and IV ketamine program"},
 {n:"Advanced Diagnostic Pain Treatment Centers",city:"New Haven",u:"https://www.ihurt.com/ketamine-infusions-new-haven",note:"IV ketamine for depression and pain"},
 {n:"Ki Ketamine",city:"Stamford",u:"https://www.ki-ketamine.com",note:"IV ketamine, Stamford and Westport"},
 {n:"New England Institute for Neurology & Headache",city:"Stamford",u:"https://www.neinh.com/service/ketamine-infusions",note:"Ketamine infusions for pain and mood"},
 {n:"Complete Ketamine Solutions",city:"Stamford",u:"https://completeketaminesolutions.com/ketamine-therapy-ct/",note:"IV ketamine infusion therapy"},
 {n:"Ketamine Center of Greater Hartford",city:"Avon",u:"https://greaterhartfordketamine.com",note:"Private-room IV ketamine infusions"},
 {n:"Greenwich Avenue Psychiatry",city:"Greenwich",u:"https://www.greenwichavenuepsychiatry.com/service/spravato",note:"Spravato and ketamine-assisted psychotherapy"},
 {n:"Contemporary Care",city:"Danbury",u:"https://contemporarycare.com/treatments/ketamine-therapy-at-ccc-in-danbury-ct/",note:"Ketamine therapy and Spravato"},
 {n:"Innovative Psychiatry",city:"South Windsor",u:"https://www.loricalabresemd.com",note:"Physician-led ketamine for depression"},
 {n:"Mar Y Sol Mental Health Experts",city:"Danbury",u:"https://www.marysolmhe.com/ketamine-infusion-therapy",note:"IV ketamine infusion therapy"},
 {n:"Ketamine Center of Connecticut",city:"Milford",u:"https://www.ketaminecenterofct.com",note:"IV ketamine, Milford and Westport"}
],
"Delaware":[
 {n:"Therapeutic Infusions",city:"Wilmington",u:"https://therapeuticinfusions.com/",note:"Delaware ketamine infusion and Spravato center"},
 {n:"Initia Nova Wilmington",city:"Wilmington",u:"https://myinitianova.com/wilmington/",note:"Ketamine infusion, Spravato, KAP, NAD+"},
 {n:"A Peaceful Place Integrated Care",city:"Dover",u:"https://mddcare.com/clinic/delaware/dover/a-peaceful-place-integrated-care/",note:"Spravato for depression and addiction"}
],
"District of Columbia":[
 {n:"DC Ketamine Clinic",city:"Washington",u:"https://healingmaps.com/listing/dc-ketamine-clinic-washington-dc/",note:"Dedicated IV ketamine infusion provider"},
 {n:"Washington Interventional Psychiatry",city:"Washington",u:"https://www.washingtoninterventionalpsychiatry.com/services/ketamine-therapy/",note:"IV ketamine and KAP, Spring Valley"},
 {n:"Avesta Ketamine & Wellness",city:"Washington",u:"https://avestaketaminewellness.com/location/washington-dc/",note:"IV ketamine, Spravato, KAP; Dupont Circle"},
 {n:"Rock Creek Therapy",city:"Washington",u:"https://rockcreektherapy.com/ketamine-assisted-therapy-dc/",note:"Ketamine-assisted psychotherapy practice"}
],
"Florida":[
 {n:"Serenity Mental Health Centers",city:"Jacksonville",u:"https://serenitymentalhealthcenters.com",note:"IV ketamine and Spravato psychiatric clinic"},
 {n:"Sana Ketamine",city:"Orlando",u:"https://www.sanaketamine.com",note:"IV infusions for mood disorders, Baldwin Park"},
 {n:"Orlando Premier Psychiatry",city:"Orlando",u:"https://orlandopremierpsychiatry.com",note:"IV ketamine infusion therapy"},
 {n:"K Plus Clinics",city:"Winter Park",u:"https://kplusclinics.com",note:"Ketamine for depression and anxiety"},
 {n:"Complete Ketamine Tampa",city:"Tampa",u:"https://completeketaminetampa.com",note:"Affordable IV ketamine infusion clinic"},
 {n:"Rewired Ketamine",city:"South Florida",u:"https://www.rewiredketamine.com",note:"IV ketamine infusion therapy"},
 {n:"Ketamine Wellness Florida",city:"Fort Lauderdale",u:"https://ketaminewellnessfl.com",note:"In-office ketamine infusion treatment"},
 {n:"KMD Clinics",city:"Boca Raton",u:"https://kmdclinics.com",note:"Ketamine for depression and pain"},
 {n:"Ketamine Wellness Clinic of South Florida",city:"Miami",u:"https://ketamineclinicsouthflorida.com",note:"IV ketamine infusion clinic"},
 {n:"Complete Ketamine Solutions",city:"Tampa",u:"https://completeketaminesolutions.com",note:"Established multi-location IV ketamine group"}
],
"Georgia":[
 {n:"Georgia Psychiatric Consultants",city:"Atlanta",u:"https://www.gapsychconsultants.com",note:"IV, intranasal, and Spravato options"},
 {n:"Atlanta Center for Ketamine Therapy",city:"Atlanta",u:"https://www.ketaminetherapyatlanta.net",note:"Dedicated ketamine infusion center"},
 {n:"Atlanta Ketamine Center",city:"Atlanta",u:"https://atlantaketamine.com",note:"Depression, anxiety, PTSD infusions"},
 {n:"Invictus Clinic",city:"Marietta",u:"https://theinvictusclinic.com",note:"Ketamine treatment; Marietta and Woodstock"},
 {n:"Complete Ketamine Solutions",city:"Roswell",u:"https://completeketaminesolutions.com",note:"Multi-location metro Atlanta IV ketamine"},
 {n:"Shrink Savannah",city:"Savannah",u:"https://www.shrinksavannah.com",note:"IV ketamine and Spravato psychiatry"},
 {n:"Serenity Mental Health Centers",city:"Alpharetta",u:"https://serenitymentalhealthcenters.com",note:"IV ketamine with precise dosing, TMS"},
 {n:"Georgia Ketamine",city:"Atlanta",u:"https://gaketamineinfusion.com",note:"Ketamine infusion therapy provider"}
],
"Hawaii":[
 {n:"Ketamine Clinic of Hawaii",city:"Honolulu",u:"https://ketamineclinichawaii.com/",note:"IV ketamine and REMS-certified Spravato"},
 {n:"Ketamine Therapy Hawaii",city:"Honolulu",u:"https://www.ketaminetherapyhawaii.com/",note:"Anesthesiologist-led IV ketamine, Hawaii Kai"},
 {n:"Hawaii Ketamine",city:"Kailua-Kona",u:"https://hawaiiketamine.com/",note:"Multi-island IV ketamine infusion clinic"},
 {n:"Maui Longevity Rx",city:"Wailuku",u:"https://mauilongevityrx.com/services/ketamine-therapy/",note:"IV ketamine therapy for depression, pain"},
 {n:"The Kahala Clinic",city:"Honolulu",u:"https://www.kahalaclinic.org/",note:"Spravato and KAP; insurance accepted"},
 {n:"MindWave Medicine",city:"Honolulu",u:"https://www.mindwavemedicine.com/",note:"Integrative psychiatry with KAP program"},
 {n:"Center for Healing and Transformation",city:"Kailua",u:"https://centerforhealingandtransformation.com/therapeutic-services/ketamine-assisted-psychotherapy-kap-program/",note:"Structured KAP program"}
],
"Idaho":[
 {n:"Boise Ketamine Clinic",city:"Boise",u:"https://boiseketamineclinic.com/",note:"Ketamine infusions, injections, and Spravato"},
 {n:"Boise Ketamine Institute",city:"Boise",u:"https://boiseketamine.com/",note:"Anesthesiologist-led IV ketamine infusions"},
 {n:"EleMental Health",city:"Boise",u:"https://elementalhealthcenter.com/spravato-treatment-boise/",note:"Certified Spravato esketamine center"},
 {n:"MAP Clinic (Meridian Advanced Psychiatry)",city:"Meridian",u:"https://www.map-clinic.com/ketamine",note:"Psychiatry practice offering ketamine"},
 {n:"North Idaho Ketamine & TMS",city:"Coeur d'Alene",u:"https://www.northidahoketamine.com/",note:"Physician-led ketamine infusions and TMS"},
 {n:"Ketamine Infusions of Idaho",city:"Idaho Falls",u:"https://ketamineinfusionsofidaho.com/",note:"IV infusions and KAP"},
 {n:"H3O Wellness",city:"Twin Falls",u:"https://h3owellness.com/ketamine-treatment/",note:"IV and IM ketamine for mental health"}
],
"Illinois":[
 {n:"Stella Mental Health",city:"Westmont",u:"https://stellamentalhealth.com/ketamine-therapy-chicago",note:"IV ketamine and Spravato for depression"},
 {n:"MD Infusions",city:"Chicago",u:"https://mdinfusions.com/",note:"IV ketamine and KAP for depression, PTSD"},
 {n:"Balance Ketamine Clinic",city:"Chicago",u:"https://balanceketamine.com/",note:"IV ketamine infusions and KAP"},
 {n:"IV Solution & Ketamine Centers",city:"Chicago",u:"https://chicagoivsolution.com/",note:"IV ketamine for depression, anxiety, PTSD, pain"},
 {n:"Optimum Ketamine Center",city:"Lombard",u:"https://www.optketamine.com/",note:"IV ketamine for treatment-resistant depression"},
 {n:"Hopemark Health",city:"Naperville",u:"https://hopemarkhealth.com/psychiatry-ketamine-clinic-locations/naperville/",note:"IV ketamine, Spravato, TMS"},
 {n:"Golden Hour Wellness",city:"Naperville",u:"https://goldenhour-wellness.com/",note:"Physician-led IV ketamine and KAP"},
 {n:"Aya Fusion Ketamine",city:"Downers Grove",u:"https://www.ayafusionketamine.com/",note:"Ketamine for depression and chronic pain"},
 {n:"Midwest Alternative Treatment Clinic",city:"Oak Park",u:"https://www.progressiveketamine.com/",note:"IV ketamine infusions and KAP"},
 {n:"Imagine Healthcare",city:"Chicago",u:"https://www.imaginehealthcare.org/",note:"KAP, Spravato, and ketamine infusions"},
 {n:"Sana Healing Collective",city:"Chicago",u:"https://sanahealingcollective.org/",note:"Nonprofit KAP and integration"},
 {n:"The Juniper Center",city:"Chicago",u:"https://www.thejunipercenter.com/ketamine-assisted-psychotherapy/",note:"KAP at downtown Chicago office"},
 {n:"Pryor Health",city:"Rockford",u:"https://www.pryorhealth.com/",note:"Ketamine infusion therapy and medspa"},
 {n:"Genesys Infusion Center",city:"East Peoria",u:"https://genesysinfusioncenter.com/",note:"IV ketamine infusions for mental health"}
],
"Indiana":[
 {n:"Hoosier Ketamine & Wellness",city:"Indianapolis",u:"https://hoosierketamine.com/",note:"IV ketamine for depression, anxiety, PTSD, OCD"},
 {n:"Accentus Mental Health",city:"Indianapolis",u:"https://www.accentusmentalhealth.com/",note:"IV ketamine, Spravato, and TMS"},
 {n:"Apollo Pain Center",city:"Indianapolis",u:"https://www.apollopaincenter.com/",note:"Physician-led ketamine for chronic pain"},
 {n:"Zionsville Ketamine",city:"Zionsville",u:"https://www.zionsvilleketamine.com/",note:"Physician-directed IV ketamine and Spravato"},
 {n:"Klarity Mental Health & Wellness",city:"Greenwood",u:"https://www.getklarity.com/",note:"Ketamine infusions, Spravato, TMS, psychiatry"},
 {n:"Evansville Ketamine & Vitamin Center",city:"Evansville",u:"https://evansvilleketamine.com/",note:"Tri-State's first ketamine infusion clinic"},
 {n:"Viking Psychiatry & Wellness",city:"Fort Wayne",u:"https://vikingpsych.net/",note:"Spravato and KAP provider"},
 {n:"EMDR Indiana",city:"Fishers",u:"https://emdrindiana.com/ketamine-assisted-psychotherapy",note:"Sublingual ketamine-assisted psychotherapy"}
],
"Iowa":[
 {n:"Iowa Ketamine Clinic",city:"West Des Moines",u:"https://iowaketamine.com/",note:"IV, Spravato, and KAP; also Ankeny"},
 {n:"Resilient Health Services",city:"Des Moines",u:"https://www.resilienthealthdsm.com/ketamine-treatment",note:"Ketamine and certified Spravato"},
 {n:"Holistic Wellness & Psychiatry",city:"Cedar Rapids",u:"https://holisticwellness.clinic/ketamine-therapy/",note:"KAP with IV, IM, and Spravato options"},
 {n:"Corridor Ketamine",city:"Coralville",u:"https://corridorketamine.com/",note:"IV ketamine and Spravato; multiple locations"},
 {n:"Rein Center",city:"Iowa City",u:"https://www.reincenter.com/service/ketamine-treatment",note:"Ketamine treatment and KAP"},
 {n:"Quad Cities Ketamine & Wellness",city:"Davenport",u:"https://www.quadcitiesketamine.com/",note:"IV ketamine infusion and Spravato"}
],
"Kansas":[
 {n:"Kansas Mental Health Medicine",city:"Wichita",u:"https://kmhm.org/",note:"IV ketamine and Spravato; multiple locations"},
 {n:"Vitality Health Center",city:"Wichita",u:"https://vitality-hc.com/",note:"Outpatient IV ketamine infusions since 2018"},
 {n:"Kansas City Psychiatry Partners",city:"Overland Park",u:"https://kcpsychiatrypartners.com/",note:"IV ketamine, Spravato, and Deep TMS"},
 {n:"Interpersonal Psychiatry",city:"Overland Park",u:"https://ip-psych.com/",note:"Ketamine, Spravato, and Deep TMS"}
],
"Kentucky":[
 {n:"Ketamine of Louisville",city:"Louisville",u:"https://www.ketamineoflouisville.com",note:"IV ketamine for depression, anxiety, PTSD"},
 {n:"Bluegrass Ketamine Center",city:"Lexington",u:"https://www.bluegrassketaminecenter.com",note:"IV ketamine for mood and pain"},
 {n:"Ohio Valley Center for TMS and Ketamine",city:"Louisville",u:"https://ovpsych.com",note:"Psychiatry offering Spravato, ketamine, TMS"},
 {n:"Awen Health & Wellness",city:"Louisville",u:"https://www.awenhw.com",note:"Spravato esketamine clinic and psychiatry"},
 {n:"Lumera Healthcare",city:"Paducah",u:"https://lumerahealthcare.com",note:"CARF-accredited esketamine, TMS, behavioral health"},
 {n:"Onyx Regent Health & Wellness",city:"Bowling Green",u:"https://www.onyxregenthealthwellness.org",note:"In-person Spravato clinic and psychiatry"},
 {n:"Owensboro Medical Practice",city:"Owensboro",u:"https://owensboromedical.com",note:"Behavioral health offering Spravato esketamine"}
],
"Louisiana":[
 {n:"Ketamine Infusion & IV Wellness Center",city:"New Orleans",u:"https://ketamine-la.com/",note:"Louisiana's first IV ketamine infusion center"},
 {n:"Kismet Ketamine",city:"Baton Rouge",u:"https://www.kismetketamine.com/",note:"Baton Rouge's dedicated IV ketamine clinic"},
 {n:"The Kite Clinic",city:"Lafayette",u:"https://thekiteclinic.com/",note:"Spravato esketamine for depression"},
 {n:"Empath Psychiatry",city:"Shreveport",u:"https://www.empathpsychiatry.com/",note:"Interventional psychiatry: ketamine, TMS"},
 {n:"Willis-Knighton Health",city:"Shreveport",u:"https://www.wkhs.com/",note:"Hospital-based IV ketamine for depression, pain"}
],
"Maine":[
 {n:"Riverbird Clinic",city:"Portland",u:"https://www.riverbirdclinic.com",note:"Maine's first ketamine-assisted therapy clinic"},
 {n:"Bishop Health",city:"Portland",u:"https://www.bishophealth.com/portland-maine/ketamine-treatment/",note:"Spravato and IV ketamine infusion therapy"},
 {n:"Portland Pain Solutions",city:"Portland",u:"https://healingmaps.com/listing/portland-pain-solutions-portland-maine/",note:"IV ketamine infusions for chronic pain"}
],
"Maryland":[
 {n:"Avesta Ketamine & Wellness",city:"Bethesda",u:"https://avestaketaminewellness.com/location/bethesda-maryland/",note:"IV ketamine, Spravato, and KAP"},
 {n:"Calliope Health",city:"Bethesda",u:"https://calliope.health/locations/bethesda/",note:"IV ketamine with KAP; Spravato"},
 {n:"Baltimore Ketamine Clinic",city:"Baltimore",u:"https://baltimoreketamineclinic.com/",note:"Ketamine blended with integrative psychotherapy"},
 {n:"The Mood Center",city:"Columbia",u:"https://themoodcenter.com/",note:"IV ketamine, Spravato, KAP; Annapolis too"},
 {n:"Evolve Medical Clinics",city:"Annapolis",u:"https://evolvemedicalclinics.com/our-services/ketamine/",note:"IV ketamine with hospital-grade pumps"},
 {n:"Vita Nova Wellness Clinic",city:"Baltimore",u:"https://vitanovawellnessclinic.com/",note:"Ketamine and IV therapy, greater Baltimore"},
 {n:"APMI Ketamine Infusion Center",city:"Chevy Chase",u:"https://apmiketamine.com/",note:"Supervised IV ketamine infusions"},
 {n:"Blue Sky Mental Health",city:"Silver Spring",u:"https://www.blueskymentalhealthclinic.com/psychiatric-care-services/ketamine-infusion",note:"Ketamine infusion within psychiatry"}
],
"Massachusetts":[
 {n:"Massachusetts General Hospital Psychiatry",city:"Boston",u:"https://www.massgeneral.org/psychiatry",note:"Academic hospital IV ketamine program"},
 {n:"McLean Hospital Ketamine Service",city:"Belmont",u:"https://www.mcleanhospital.org/treatment/ketamine-service",note:"Harvard-affiliated ketamine and esketamine service"},
 {n:"Cambridge Biotherapies",city:"Cambridge",u:"https://www.cambridgebiotherapies.com",note:"IV ketamine, KAP, and Spravato"},
 {n:"Boston MindCare",city:"Lexington",u:"https://bostonmindcare.com",note:"Anesthesiologist-run IV ketamine clinic"},
 {n:"Ketamine Greater Boston",city:"Boston",u:"https://www.ketaminegreaterboston.com",note:"Psychiatrist-led IV ketamine infusions"},
 {n:"Stella Center",city:"Boston",u:"https://stellamentalhealth.com/ketamine-therapy-boston",note:"IV ketamine and Spravato for mood disorders"},
 {n:"Ketamine Treatment Massachusetts",city:"Boston",u:"https://ketaminetreatmentmassachusetts.com/ketamine-therapy-boston-ma/",note:"IV ketamine infusion clinic"},
 {n:"ServiceNet Esketamine Program",city:"Northampton",u:"https://www.servicenet.org/services/counseling-and-psychiatry/esketamine-for-depression/",note:"Esketamine for treatment-resistant depression"},
 {n:"David Raniere, PhD",city:"Framingham",u:"https://davidranierephd.org/ketamine-assisted-psychotherapy-kap",note:"Ketamine-assisted psychotherapy provider"},
 {n:"Brighter Life Therapy",city:"Arlington",u:"https://brighterlifetherapy.com/ketamine-assisted-psychotherapy/",note:"KAP; Arlington and Haverhill"}
],
"Michigan":[
 {n:"University of Michigan Health Ketamine Clinic",city:"Ann Arbor",u:"https://www.uofmhealth.org/our-care/specialties-services/ketamine-clinic",note:"Academic IV ketamine for depression"},
 {n:"Michigan Progressive Health",city:"Royal Oak",u:"https://www.michiganprogressivehealth.com/",note:"IV, IM, oral ketamine and KAP"},
 {n:"Ketamine Institute of Michigan",city:"Southfield",u:"https://ketaminecenter.org/",note:"Anesthesiologist-supervised IV ketamine"},
 {n:"Rochester Center for Behavioral Medicine",city:"Rochester Hills",u:"https://www.rcbm.net/",note:"In-office Spravato; clinical trials"},
 {n:"Advanced Psychiatry",city:"Troy",u:"https://www.advancedpsych.com/spravato-treatment",note:"Spravato and IV ketamine treatment"},
 {n:"Reset Brain and Body",city:"Ann Arbor",u:"https://www.resetbrainandbody.com/ketamine-assisted-psychotherapy",note:"Medically supervised KAP"},
 {n:"Sanford Behavioral Health Spravato Clinic",city:"Grand Rapids",u:"https://sanfordbehavioralhealth.com/mental-health/sanford-spravato-esketomine-clinic/",note:"Certified Spravato esketamine clinic"},
 {n:"Thrive Center for Health",city:"Grand Rapids",u:"https://thriveketamine.com/",note:"Anesthesiologist-led ketamine and psychiatry"},
 {n:"West Michigan Ketamine Clinic",city:"Grand Rapids",u:"https://wmketamineclinics.com/",note:"IV ketamine serving West Michigan"},
 {n:"Lifeline Interventional Therapeutics",city:"Grand Rapids",u:"https://litketamine.net/",note:"IV ketamine and Spravato therapy"},
 {n:"Exponential Health",city:"Grand Rapids",u:"https://expohealth.care/in/grand-rapids/ketamine-therapy/",note:"Physician-led ketamine infusion therapy"},
 {n:"Complete Ketamine Solutions",city:"Detroit",u:"https://completeketaminesolutions.com/ketamine-infusion-therapy-detroit/",note:"IV ketamine infusion clinic in Detroit"},
 {n:"Michigan Interventional Pain Associates",city:"Lansing",u:"https://www.mipainclinic.com/what-we-do/ketamine-therapy/",note:"Ketamine for pain and depression"}
],
"Minnesota":[
 {n:"The Remedy Mental Health",city:"Burnsville",u:"https://theremedymn.com/ketamine/",note:"IV ketamine and Spravato; large MN practice"},
 {n:"Center for Conscious Alchemy",city:"St. Paul",u:"https://consciousalchemy.co/ketamine-assisted-therapy",note:"KAP, individual and group sessions"},
 {n:"Modern Experience Clinic",city:"Maple Grove",u:"https://www.the-me-clinic.com/spravato-treatment",note:"Certified Spravato REMS clinic"},
 {n:"Integrative Health MN",city:"Minneapolis",u:"https://integrativehealthmn.com/ketamine-assisted-psychotherapy/",note:"In-office KAP, sublingual dosing"},
 {n:"Expanse MN",city:"Eagan",u:"https://expansemn.com/services/ketamine-assisted-psychotherapy/",note:"KAP; multiple Twin Cities locations"},
 {n:"Mind Body Centers",city:"Burnsville",u:"https://mindbodycenters.com/locations/burnsville-minnesota/",note:"IV ketamine infusions"},
 {n:"Psych North",city:"Duluth",u:"https://psychnorthmn.com/",note:"IV ketamine, Spravato, TMS; Northern MN"},
 {n:"LifeStance Health",city:"St. Louis Park",u:"https://lifestance.com/services/spravato-therapy/mn/",note:"Spravato treatment, provider-supervised"},
 {n:"Art of Counseling",city:"St. Paul",u:"https://artofcounselingstpaul.com/services-2/psychedelic-assisted-therapy/",note:"KAP; IM sessions and integration"},
 {n:"Institute for Integrative Therapies",city:"Eden Prairie",u:"https://www.iit-mn.com/",note:"Ketamine infusions and KAP; research-focused"},
 {n:"Intero Psychedelic Therapy",city:"Mendota Heights",u:"https://www.intero-psychedelic.com/",note:"KAP in the Twin Cities"},
 {n:"TRU Wellness Center",city:"Minnetonka",u:"https://truwellnesscenters.com/locations/tru-wellness-center-minnesota/",note:"Ketamine infusions with therapy support"}
],
"Mississippi":[
 {n:"restoratIV Ketamine Therapy Centers",city:"Madison",u:"https://restorativ.com",note:"First Madison ketamine clinic; IV infusions"},
 {n:"Comprehensive Pain Center",city:"Jackson",u:"https://yourpaincenter.com",note:"Ketamine within pain-management practice"},
 {n:"Gulf Coast NeuroSpa",city:"Gulfport",u:"https://gulfcoastneurospa.com",note:"Ketamine, Spravato, TMS; interventional psychiatry"},
 {n:"NeuroKare",city:"Gulfport",u:"https://myneurokare.com",note:"IV ketamine and NAD+ infusions"},
 {n:"MidSouth Pain Treatment Center",city:"Southaven",u:"https://midsouthpain.com",note:"Ketamine infusion; multiple north-MS locations"},
 {n:"MS Pain & Migraine Center",city:"Hattiesburg",u:"https://mspaincenter.com",note:"Ketamine for chronic pain conditions"}
],
"Missouri":[
 {n:"Alive Health & Wellness",city:"Wildwood",u:"https://alivehealthstl.com/",note:"IV ketamine for depression, PTSD, pain"},
 {n:"Midwest Hearts & Minds",city:"St. Louis",u:"https://www.midwestheartsandminds.com/",note:"IV ketamine infusion clinic"},
 {n:"Interpersonal Psychiatry",city:"Kansas City",u:"https://ip-psych.com/",note:"Ketamine, Spravato, and TMS"},
 {n:"Bibi Health",city:"Springfield",u:"https://www.bibihealth.com/services/ketamine-infusion-therapy/",note:"Ketamine infusion, Southwest Missouri"},
 {n:"InVita Health and Wellness",city:"St. Louis",u:"https://www.invitahealthandwellness.com/",note:"IV ketamine plus functional medicine"},
 {n:"360 Infusions",city:"St. Louis",u:"https://360-infusions.com/ketamine-therapy-st-louis-mo/",note:"IV ketamine for mood and pain"},
 {n:"Alternative Therapy STL",city:"St. Louis",u:"https://www.alternativetherapystl.com/ketamine-assisted-therapy",note:"In-person ketamine-assisted psychotherapy"},
 {n:"Clayton Behavioral",city:"St. Louis",u:"https://www.claytonbehavioral.com/ketamine",note:"Ketamine and Spravato for depression"},
 {n:"White Oak Psychiatric Services",city:"Kansas City",u:"https://www.whiteoakpsych.com/",note:"Spravato and ketamine psychiatry"}
],
"Montana":[
 {n:"Montana Psychiatry & Brain Health Center",city:"Billings",u:"https://mtpsychiatry.com/",note:"IV ketamine and Spravato; board-certified"},
 {n:"Luvita",city:"Helena",u:"https://luvita.us/",note:"IV ketamine for mood and pain disorders"},
 {n:"Big Sky Ketamine Care",city:"Missoula",u:"https://bigskyketaminecare.com/",note:"IV ketamine; psychiatrist-led"},
 {n:"Northwest Ketamine Care",city:"Missoula",u:"https://northwestketaminecare.com/",note:"In-person ketamine therapy clinic"},
 {n:"Sub Rosa Therapy",city:"Bozeman",u:"https://www.subrosatherapy.com/",note:"KAP and REMS-certified Spravato"},
 {n:"Ketamine Infusion of Montana",city:"Kalispell",u:"https://www.ketamineinfusionofmontana.com/",note:"KAP in NW Montana"}
],
"Nebraska":[
 {n:"South Omaha Medical Associates (SOMA)",city:"Omaha",u:"https://www.southomahamedical.com/ketamine-omaha/",note:"IV ketamine for mental health"},
 {n:"Mind Body Wellness",city:"Omaha",u:"https://www.mindbodywellnessomaha.com/",note:"Ketamine-assisted therapy for depression"},
 {n:"Omaha Pain Physicians",city:"Omaha",u:"https://omahapainphysicians.com/ketamine-mood-disorders/",note:"IV ketamine for mood disorders, pain"},
 {n:"Waybridge Clinics",city:"Omaha",u:"https://www.waybridgeclinics.com/",note:"Psychiatry with Spravato, ketamine, TMS"},
 {n:"Nebraska Pain Institute",city:"Lincoln",u:"https://www.nebraskapaininstitute.com/services/ketamine-infusions",note:"Ketamine infusions for depression, pain"},
 {n:"Lumos Mental Health Services",city:"Lincoln",u:"https://www.lumosmhs.com/spravato",note:"Spravato for treatment-resistant depression"}
],
"Nevada":[
 {n:"WellCentric Health",city:"Reno",u:"https://wellcentrichealth.com/ketamine-therapy/",note:"IV ketamine for depression, PTSD, pain"},
 {n:"Radiance Ketamine Clinic",city:"Reno",u:"https://www.radianceketamineclinic.com/",note:"AAAASF-accredited IV ketamine and Spravato"},
 {n:"Thunder Pain and Wellness",city:"Reno",u:"https://www.thunderpain.com/subanesthetic-ketamine-infusion-therapy.html",note:"IV ketamine for chronic pain, mood"},
 {n:"Changing Minds Psychiatry",city:"Henderson",u:"https://changingmindspsych.com/spravato",note:"Spravato for treatment-resistant depression"},
 {n:"Kalea Wellness",city:"Henderson",u:"https://www.kaleawellness.com/ketamine-therapy",note:"KAP for depression, PTSD, anxiety"},
 {n:"Las Vegas Medical Institute",city:"Las Vegas",u:"https://lasvegasmedicalinstitute.com/ketamine-iv-therapy/",note:"IV ketamine for depression, PTSD, pain"},
 {n:"Higher Dimensions of Healing",city:"Carson City",u:"https://www.higherdimensionsofhealing.com/",note:"Spravato and KAP"}
],
"New Hampshire":[
 {n:"New England Ketamine",city:"Salem",u:"https://www.newenglandketamine.com",note:"Anesthesia-guided IV ketamine with support"},
 {n:"Pain Specialty Group",city:"Newington",u:"https://www.painspecialtygroup.com/services/ketamine-infusion",note:"IV ketamine for pain and depression"},
 {n:"Oasis Therapeutics",city:"Nashua",u:"https://oasistherapeutics.net",note:"Spravato and ketamine infusion therapy"},
 {n:"Compass of Hope",city:"Bedford",u:"https://www.compassofhope.com/psychiatry/spravato-esketamine-treatment",note:"Spravato and intranasal ketamine"}
],
"New Jersey":[
 {n:"Cavora Mind & Wellness",city:"Montclair",u:"https://cavoramindandwellness.com/",note:"IV ketamine and Spravato, several NJ sites"},
 {n:"Restorative Infusions",city:"Paramus",u:"https://restorativeinfusions.com/",note:"Ketamine and Spravato, Bergen County"},
 {n:"Vital IV Infusions",city:"Hoboken",u:"https://vitalivinfusion.com/",note:"Ketamine therapy at multiple NJ locations"},
 {n:"Initia Nova",city:"Cherry Hill",u:"https://myinitianova.com/",note:"Ketamine infusion, KAP, Spravato, TMS"},
 {n:"Westwood Psychiatry Associates",city:"Westwood",u:"https://www.westwoodpsychnj.com/service/ketamine-therapy",note:"Psychiatry offering IV ketamine"},
 {n:"Allevate Health",city:"Princeton",u:"https://allevatehealth.com/",note:"Physician-led ketamine and Spravato"},
 {n:"Wayne Behavioral Service",city:"Wayne",u:"https://waynebehavioral-nj.com/ketamine-depression/",note:"IV ketamine and Spravato for depression"},
 {n:"KetaRevive",city:"Paramus",u:"https://www.ketarevive.com/",note:"Ketamine IV infusion and Spravato"},
 {n:"Alternativ Total Wellness",city:"Marlton",u:"https://alternativtw.com/",note:"Ketamine, lidocaine, and Spravato infusions"},
 {n:"RestoratIV Wellness",city:"Sewell",u:"https://restorativwellness.com/",note:"Ketamine infusions for depression and pain"}
],
"New Mexico":[
 {n:"Injection and Infusion Clinic of ABQ",city:"Albuquerque",u:"https://infusionclinicabq.com",note:"IV ketamine and Spravato for depression, PTSD"},
 {n:"Tranquility Ketamine Clinic",city:"Albuquerque",u:"https://tranquilityketamine.com",note:"IV infusions and Spravato, physician-founded"},
 {n:"UNM Health Esketamine Clinic",city:"Albuquerque",u:"https://unmhealth.org/services/behavioral-health/esketamine-clinic.html",note:"Spravato for treatment-resistant depression"},
 {n:"Insight Ketamine of Santa Fe",city:"Santa Fe",u:"https://insightketamine.com",note:"Physician-guided ketamine infusions, integration"},
 {n:"Blue Sky Ketamine of Santa Fe",city:"Santa Fe",u:"https://www.blueskyketamine.com",note:"NM's first ketamine clinic, IV infusions"},
 {n:"Vigor Mental Health",city:"Las Cruces",u:"https://vigormentalhealth.com",note:"Ketamine-assisted psychotherapy"}
],
"New York":[
 {n:"NY Ketamine Infusions",city:"New York",u:"https://nyketamine.com/",note:"Longtime Manhattan IV ketamine and Spravato"},
 {n:"Ember Health",city:"Brooklyn",u:"https://emberhealth.co/",note:"Dedicated IV ketamine for depression"},
 {n:"Principium Psychiatry",city:"New York",u:"https://www.principiumpsychiatry.com/",note:"Interventional psychiatry, IV ketamine and KAP"},
 {n:"Gracie Square Hospital Ketamine Program",city:"New York",u:"https://www.nygsh.org/ketamine-therapy.html",note:"Hospital-based ketamine therapy program"},
 {n:"Keta Medical Center",city:"New York",u:"https://ketamc.com/",note:"IV ketamine and Spravato clinic"},
 {n:"Ketamine Wellness",city:"Commack",u:"https://www.ketamine-wellness.com/",note:"Long Island ketamine infusion provider"},
 {n:"Brooklyn Psychedelic Therapy",city:"Brooklyn",u:"https://www.brooklynpsychedelictherapy.com/",note:"Ketamine-assisted psychotherapy practice"},
 {n:"Acheron Psychiatry",city:"New York",u:"https://acheronpsych.com/",note:"KAP in Financial District Manhattan"},
 {n:"NYC Integrative Psychiatry",city:"New York",u:"https://www.nycintegrativepsych.com/services/ketamine-services",note:"Ketamine services, Manhattan/Brooklyn/Bronx"},
 {n:"Albany Ketamine Infusions",city:"Albany",u:"https://albanyketamine.com/",note:"Dedicated ketamine clinic, Capital Region"},
 {n:"Thrivewell Infusion",city:"Brooklyn",u:"https://www.thrivewellinfusion.com/",note:"IV ketamine, multiple NYC-area sites"}
],
"North Carolina":[
 {n:"Ketamine Wellness Institute",city:"Chapel Hill",u:"https://ketwell.com",note:"IV ketamine, Spravato, and KAP since 2017"},
 {n:"Garden Path Ketamine",city:"Garner",u:"https://www.gardenpathketamine.com",note:"Spravato and IV ketamine for depression"},
 {n:"Zen Psychiatric",city:"Asheville",u:"https://zenpsychiatric.com",note:"Spravato and intramuscular ketamine therapy"},
 {n:"GPW Psychiatry",city:"Raleigh",u:"https://www.gpwpsychiatry.com",note:"Ketamine within psychiatric practice"},
 {n:"Derive Health",city:"Charlotte",u:"https://derivehealth.com",note:"IV ketamine and assisted psychotherapy"},
 {n:"Charlotte Ketamine Center",city:"Charlotte",u:"https://www.charlotteketaminecenter.us",note:"IV, IM, nebulized ketamine and KAP"},
 {n:"CAREolina Wellness and Infusion Center",city:"Winston-Salem",u:"https://careolinawellness.com",note:"Ketamine infusion and wellness center"},
 {n:"Restoring Wellness Solutions",city:"Winston-Salem",u:"https://restoringwellnesssolutions.com",note:"IV ketamine therapy serving the Triad"}
],
"North Dakota":[
 {n:"Journey to Wellness",city:"Bismarck",u:"https://www.journeytowellnesspllc.com",note:"Ketamine infusions, TMS, psychiatry; CRNA-led"},
 {n:"ReNewed Wellness and Ketamine Clinic",city:"Fargo",u:"https://renewedwellnessandketamine.com",note:"CRNA-administered IV ketamine infusions"},
 {n:"Ascend Wellness MBS",city:"Minot",u:"https://healingmaps.com/listing/ascend-wellness-mbs-minot-north-dakota/",note:"IV ketamine for depression, PTSD, pain"}
],
"Ohio":[
 {n:"New Pathways Clinic",city:"Cleveland",u:"https://newpathwaysclinic.com/",note:"IV ketamine and Spravato; multiple locations"},
 {n:"Ketamine Health & Wellness Clinics of Ohio",city:"Dublin",u:"https://www.khwcohio.com/",note:"Spravato, psychiatry, and ketamine infusion"},
 {n:"MiNDSET Integrative Ketamine Care",city:"Columbus",u:"https://mindsetketamine.com/",note:"IV ketamine combined with psychotherapy"},
 {n:"Happier You",city:"Columbus",u:"https://happieryouohio.com/",note:"IV ketamine for depression, PTSD, anxiety"},
 {n:"CarePoint Infusion",city:"Beachwood",u:"https://carepointinfusion.com/",note:"IV ketamine for depression and pain"},
 {n:"The Anderson Clinic",city:"Cincinnati",u:"https://www.theandersonclinic.net/",note:"IV ketamine and Spravato for depression, PTSD"},
 {n:"New Life Wellness and Ketamine Clinic",city:"Dayton",u:"https://newlifewellnessclinic.com/",note:"Ketamine infusion and TMS therapy"},
 {n:"Ascend Health Center",city:"Akron",u:"https://ascendhealthcenter.com/",note:"Spravato and ketamine-assisted psychotherapy"},
 {n:"Awakenings (NW Ohio Ketamine Clinic)",city:"Toledo",u:"https://nwohioketamineclinic.com/",note:"IV ketamine for depression and pain"},
 {n:"Vitality Lounge",city:"Cleveland",u:"https://vitalitylounge.health/",note:"IV ketamine for depression, chronic pain"},
 {n:"Stella Luna Therapy",city:"Middleburg Heights",u:"https://stellalunatherapy.com/",note:"Ketamine-assisted psychotherapy provider"},
 {n:"Mind/Body Institute",city:"Brunswick",u:"https://www.mindbodyohio.com/",note:"KAP for mood disorders"},
 {n:"LuminaThera",city:"Columbus",u:"https://luminathera.com/",note:"KAP with licensed clinicians"}
],
"Oklahoma":[
 {n:"Mind Rejuvenation",city:"Tulsa",u:"https://mindrejuvenation.net/en/",note:"Ketamine IV and Spravato for depression"},
 {n:"Integrative Psychiatry of Oklahoma",city:"Oklahoma City",u:"https://www.integrativepsychiatryoklahoma.com/",note:"Physician-supervised ketamine infusions and KAP"},
 {n:"Above All Psychedelic-Assisted Therapy",city:"Oklahoma City",u:"https://www.aboveallpatc.com/",note:"KAP with licensed therapist"},
 {n:"Find the Center",city:"Edmond",u:"https://www.findthecenter.love/",note:"Somatic and ketamine-assisted therapy collective"},
 {n:"Norman Primary Care",city:"Norman",u:"https://normanprimarycare.com/spravato",note:"Spravato esketamine for depression"}
],
"Oregon":[
 {n:"Portland Ketamine Clinic",city:"Portland",u:"https://portlandketamineclinic.com/",note:"IV ketamine for depression, PTSD, CRPS, OCD"},
 {n:"NW Ketamine Infusion",city:"Portland",u:"https://nwketamineinfusion.com/",note:"IV ketamine infusion for mood and pain"},
 {n:"Portland Pain Solutions",city:"Portland",u:"https://portlandpainsolutions.com/ketamine-therapy/",note:"IV ketamine for neuropathic pain, depression"},
 {n:"Head Well Integrative Psychiatry & Wellness",city:"Eugene",u:"https://headwell.org/",note:"IV ketamine, Spravato, and KAP"},
 {n:"NTX Care",city:"Eugene",u:"https://ntxcare.com/ketamine-clinic/",note:"IV ketamine for depression, anxiety, PTSD"},
 {n:"Flow Wellness",city:"Bend",u:"https://flowwellness.com/ketamine-therapy-bend-oregon/",note:"In-person ketamine therapy with oversight"},
 {n:"Medicine Within",city:"Bend",u:"https://medicinewithin.com/",note:"Ketamine-assisted psychotherapy, private setting"},
 {n:"Bright Mind Integrative Psychiatry",city:"Bend",u:"https://www.brightmindtms.com/ketamine",note:"KAP, Spravato, and TMS"},
 {n:"Active Path Mental Health",city:"Salem",u:"https://activepath.com/services/spravato-therapy/",note:"Spravato esketamine and TMS"},
 {n:"BestMind Behavioral Health",city:"Salem",u:"https://bestmindbh.com/services/esketamine/",note:"Spravato-certified esketamine for depression"},
 {n:"Ashland Consciousness Medicine",city:"Ashland",u:"https://ashlandconsciousnessmedicine.com/",note:"KAP for depression, PTSD, anxiety"},
 {n:"Rogue Revitalize",city:"Medford",u:"https://www.roguerevitalize.com/ketamine-therapy",note:"In-person ketamine therapy for mental health"},
 {n:"Paradigm Mental Health and Wellness",city:"Medford",u:"https://www.paradigm.clinic/",note:"Ketamine for treatment-resistant depression"}
],
"Pennsylvania":[
 {n:"Ketamine of Philadelphia",city:"Philadelphia",u:"https://www.ketamineofphiladelphia.com/",note:"IV ketamine for depression and anxiety"},
 {n:"Philadelphia Smart Pain & Wellness",city:"Philadelphia",u:"https://phillysmartpain.com/ketamine-infusion-therapy/",note:"Ketamine infusion therapy clinic"},
 {n:"Ketamine Wellness Infusions PA",city:"Philadelphia",u:"https://www.ketaminewellnessinfusionspa.com/",note:"Ketamine therapy for mood and pain"},
 {n:"UPMC Center for Interventional Psychiatry",city:"Pittsburgh",u:"https://www.upmc.com/locations/hospitals/western-psychiatric/services/interventional-psychiatry/services/ketamine",note:"Academic IV ketamine and Spravato program"},
 {n:"The Good Drop",city:"Pittsburgh",u:"https://thegood-drop.com/ketamine-therapy-pittsburgh-pa/",note:"Ketamine infusion therapy in Pittsburgh"},
 {n:"Lancaster Ketamine Institute",city:"Lancaster",u:"https://healingmaps.com/listing/lancaster-ketamine-institute-lancaster-pennsylvania/",note:"Supervised IV ketamine infusion sessions"},
 {n:"Pennsylvania Ketamine",city:"Wexford",u:"https://www.pennsylvaniaketamine.com/",note:"Ketamine infusion therapy for depression"},
 {n:"Ketamine Treatment Pennsylvania",city:"Pittsburgh",u:"https://ketaminetreatmentpennsylvania.com/pittsburgh-pa/",note:"Pittsburgh-area ketamine providers"}
],
"Rhode Island":[
 {n:"PVD Ketamine & Wellness",city:"Providence",u:"https://www.pvdketamineandwellness.com",note:"Supervised ketamine for mood, OCD, addiction"},
 {n:"Butler Hospital (BRAIN Program)",city:"Providence",u:"https://www.butler.org",note:"Hospital Spravato and psychiatric program"},
 {n:"Equanimity RI",city:"Warwick",u:"https://healingmaps.com/listing/equanimity-ri-warwick-rhode-island/",note:"Ketamine therapy clinic in Warwick"},
 {n:"Stillwaters Wellness",city:"East Providence",u:"https://ketamineatlas.com/clinic/stillwaters-wellness-east-providence-ri/",note:"Ketamine therapy provider"}
],
"South Carolina":[
 {n:"Charleston Ketamine Center",city:"Mount Pleasant",u:"https://charlestonketaminecenter.com",note:"State's first ketamine clinic, IV infusions"},
 {n:"Columbia Ketamine Center",city:"Columbia",u:"https://ketaminetreatmentsouthcarolina.com",note:"IV ketamine clinic operating since 2014"},
 {n:"Greenville Ketamine Center",city:"Greenville",u:"https://www.greenville-ketamine.com",note:"Infusion therapy for depression and pain"},
 {n:"Ketamine Solutions",city:"Greenville",u:"https://ketaminesolutions.net",note:"Ketamine treatment for mental health"},
 {n:"Infused Clinics",city:"Myrtle Beach",u:"https://www.infusedclinics.com",note:"Ketamine therapy and IV hydration"},
 {n:"MindWell Health",city:"Greenville",u:"https://mindwell.com",note:"IV ketamine and Spravato provider"}
],
"South Dakota":[
 {n:"South Dakota Ketamine Clinic",city:"Sioux Falls",u:"https://sdketamine.com",note:"IV ketamine; depression, PTSD, bipolar"},
 {n:"PAX Institute",city:"Sioux Falls",u:"https://www.pax-institute.com",note:"Ketamine IV, Spravato, psychiatry"},
 {n:"The Remedy Mental Health",city:"Rapid City",u:"https://theremedymn.com",note:"Ketamine, Spravato, TMS; interventional psychiatry"},
 {n:"MWI Health",city:"Rapid City",u:"https://mwihealth.org",note:"Spravato pathway, TMS, psychiatric care"}
],
"Tennessee":[
 {n:"Nashville Ketamine Center",city:"Nashville",u:"https://nashvilleketamine.com/",note:"Psychiatrist-led IV ketamine, established 2012"},
 {n:"Complete Ketamine Solutions of Nashville",city:"Nashville",u:"https://completeketaminesolutions.com/locations/nashville-tn/",note:"IV/IM ketamine, Spravato, KAP; CRNA-led"},
 {n:"Three Rivers Wellness",city:"Gallatin",u:"https://3riverswellness.com/",note:"IV ketamine infusions and Spravato"},
 {n:"Tennessee Ketamine & Wellness Center",city:"Franklin",u:"https://tnketaminewellness.com/",note:"IV ketamine infusion therapy and Spravato"},
 {n:"Revive Ketamine Clinic",city:"Bartlett",u:"https://reviveketamineclinic.com/",note:"CRNA-led IV ketamine and Spravato, Memphis area"},
 {n:"Restoration Infusions Center",city:"Germantown",u:"https://www.restorationinfusions.com/",note:"IV ketamine infusions, Memphis suburb"},
 {n:"865 Wellness + Ketamine",city:"Knoxville",u:"https://865wellnessketamine.com/",note:"IV/IM ketamine, Spravato, vitamin infusions"},
 {n:"Revitalist Clinic",city:"Knoxville",u:"https://revitalistclinic.com/",note:"Ketamine, Spravato, KAP"},
 {n:"Scenic City Neurotherapy",city:"Chattanooga",u:"https://www.sceniccityneurotherapy.com/",note:"CRNA-led IV ketamine and TMS"},
 {n:"Chattanooga Ketamine Center",city:"Chattanooga",u:"https://www.infusionketamine.com/",note:"Physician-led ketamine infusions"},
 {n:"Valor Health Solutions",city:"Johnson City",u:"https://valorhealthconnect.com/",note:"Veteran-led ketamine, Spravato, psychotherapy"}
],
"Texas":[
 {n:"Lone Star Infusion",city:"Houston",u:"https://www.lonestarinfusion.com/",note:"IV ketamine for depression and mood disorders"},
 {n:"Houston Ketamine Therapeutics",city:"Houston",u:"https://houstonketaminetherapy.com/",note:"IV ketamine and Spravato esketamine"},
 {n:"Sandhya Prashad MD",city:"Houston",u:"https://sprashadmd.com/",note:"Psychiatrist-led IV ketamine treatment center"},
 {n:"MindVibe",city:"Houston",u:"https://www.mindvibe.com/",note:"REMS-certified Spravato esketamine"},
 {n:"Texas Ketamine Specialists",city:"Dallas",u:"https://texasketaminespecialists.com/",note:"IV ketamine for depression, PTSD, pain"},
 {n:"On The Mend Recovery",city:"Dallas",u:"https://onthemendtx.com/",note:"Ketamine infusion; Dallas and Austin"},
 {n:"Neuroglow",city:"Flower Mound",u:"https://neuroglow.com/",note:"Standalone IV ketamine clinic near Dallas"},
 {n:"Austin Ketamine Clinic",city:"Austin",u:"https://austinketamineclinic.com/",note:"IV and IM ketamine infusion therapy"},
 {n:"Lake Austin Psychotherapy",city:"Austin",u:"https://www.lakeaustinpsychotherapy.com/",note:"KAP and IV infusions"},
 {n:"Klarisana",city:"San Antonio",u:"https://www.klarisana.com/",note:"IM ketamine, KAP, and Spravato clinics"},
 {n:"Soluz Health",city:"San Antonio",u:"https://saketamine.com/",note:"Physician-administered IV ketamine"},
 {n:"Institute For Advanced Psychiatry",city:"Fort Worth",u:"https://www.psychiatryfortworth.com/",note:"Ketamine for treatment-resistant depression"},
 {n:"Impact Infusions",city:"Argyle",u:"https://impactinfusions.com/",note:"IV ketamine serving Fort Worth area"},
 {n:"Donya Pain and Wellness Center",city:"El Paso",u:"https://dpmelpaso.com/",note:"IV ketamine for depression, pain"}
],
"Utah":[
 {n:"Mindful Infusions",city:"Salt Lake City",u:"https://mindfulinfusions.com/",note:"IV ketamine and KAP, CRNA-led"},
 {n:"Ketamine Therapy SLC",city:"West Jordan",u:"https://ktherapyslc.com/",note:"IV and IM ketamine for mental health"},
 {n:"Serenity Mental Health Centers",city:"Lehi",u:"https://serenitymentalhealthcenters.com/utah-psychiatry-clinics/lehi/",note:"Spravato plus ketamine and TMS"},
 {n:"Therapy Reset",city:"Ogden",u:"https://therapyreset.com/",note:"IV ketamine paired with neurofeedback"},
 {n:"Ascend Ketamine Clinic",city:"Ogden",u:"https://ascendketamineclinic.com/",note:"IV ketamine infusion therapy, private rooms"},
 {n:"Better Balance Psychiatry",city:"St. George",u:"https://www.betterbalancepsychiatry.com/iv-ketamine",note:"Psychiatrist-led IV ketamine and Spravato"},
 {n:"Utah Ketamine Clinic",city:"American Fork",u:"https://www.utahketamineclinic.com/",note:"High-volume IV ketamine infusion provider"}
],
"Vermont":[
 {n:"North Branch Health",city:"Montpelier",u:"https://www.nbhvt.com/ketamine",note:"Therapeutic ketamine for treatment-resistant depression"},
 {n:"Hummingbird Psychiatry",city:"Burlington",u:"https://healingmaps.com/listing/hummingbird-psychiatry-burlington-vermont/",note:"Psychiatry practice offering ketamine therapy"}
],
"Virginia":[
 {n:"Serenity Mental Health Centers",city:"Fairfax",u:"https://serenitymentalhealthcenters.com",note:"IV ketamine infusions psychiatric clinic"},
 {n:"Avesta Ketamine & Wellness",city:"Norfolk",u:"https://avestaketaminewellness.com",note:"IV ketamine, Spravato, and KAP"},
 {n:"Care Clinic Infusions",city:"Fairfax",u:"https://careclinicinfusions.com",note:"Physician-supervised ketamine, Spravato, TMS"},
 {n:"MindPeace Clinics",city:"Richmond",u:"https://www.mindpeaceclinics.com",note:"Multi-location IV ketamine, since 2017"},
 {n:"Charlottesville Ketamine Center",city:"Charlottesville",u:"https://www.cvilleketamine.com",note:"Ketamine infusion services"},
 {n:"Adam O'Neill & Associates",city:"Fairfax",u:"https://www.aoavirginia.com",note:"Ketamine infusion clinic, Northern Virginia"},
 {n:"Alchemy Wellness",city:"Richmond",u:"https://wellwithalchemy.com",note:"Ketamine treatment; 5,000+ infusions administered"},
 {n:"Virginia Beach Ketamine & Wellness",city:"Virginia Beach",u:"https://vbketamineandwellness.com",note:"In-person ketamine wellness clinic"}
],
"Washington":[
 {n:"Northwest Ketamine Clinics",city:"Seattle",u:"https://nwketamineclinics.com/",note:"IV ketamine for depression, anxiety, PTSD, pain"},
 {n:"Seattle Neuropsychiatric Treatment Center",city:"Seattle",u:"https://seattlentc.com/",note:"IV ketamine, Spravato, and KAP"},
 {n:"Lighthouse Infusions",city:"Seattle",u:"https://lhinfusions.com/",note:"IV ketamine for mood disorders and pain"},
 {n:"The Ketamine Clinic of Seattle",city:"Seattle",u:"https://ketamineclinicofseattle.com/",note:"IV ketamine for depression and anxiety"},
 {n:"LightHeart Associates",city:"Seattle",u:"https://lightheartassociates.com/",note:"Spravato-certified psychiatry for depression"},
 {n:"Acute & Chronic Pain Therapies",city:"Bellevue",u:"https://acutepaintherapies.com/",note:"IV ketamine and Spravato-certified center"},
 {n:"Bellevue Pain and Wellness",city:"Bellevue",u:"https://www.bellevuepainwellness.com/",note:"Spravato REMS-certified treatment center"},
 {n:"Active Path Mental Health",city:"Kirkland",u:"https://activepath.com/",note:"Spravato and psychiatry for depression"},
 {n:"Ketamine Clinic of Spokane",city:"Spokane",u:"https://ketamineclinicofspokane.com/",note:"IV ketamine for depression, anxiety, PTSD, pain"},
 {n:"Illume Wellbeing",city:"Spokane",u:"https://illume-wellbeing.com/",note:"IV ketamine infusion therapy"},
 {n:"Bellingham Ketamine Clinic",city:"Bellingham",u:"https://www.bellinghamketamineclinic.com/",note:"In-person ketamine-assisted psychotherapy"},
 {n:"Evergreen Integrative Psychiatry",city:"Olympia",u:"https://evergreenintegrativepsychiatry.com/",note:"KAP for depression and PTSD"},
 {n:"Vancouver Ketamine Infusions",city:"Vancouver",u:"https://vancouverketamineinfusions.com/",note:"CRNA-administered IV ketamine infusions"},
 {n:"Remedy Room",city:"Vancouver",u:"https://remedyroompnw.com/",note:"IV ketamine for depression, anxiety, pain"}
],
"West Virginia":[
 {n:"WV Ketamine Infusion Therapy",city:"Charleston",u:"https://wvkit.com/",note:"IV ketamine by board-certified anesthesiologist"},
 {n:"HealthPath Medical & Psychiatric Care",city:"Charleston",u:"https://healthpathcare.com/",note:"Spravato esketamine and TMS for depression"},
 {n:"Harmony (GRW Health)",city:"Morgantown",u:"https://www.grwhealth.com/locations/morgantown-west-virginia/",note:"Spravato-certified plus TMS and psychiatry"},
 {n:"Harmony (GRW Health)",city:"Wheeling",u:"https://www.grwhealth.com/locations/wheeling-west-virginia/",note:"Spravato and TMS clinic, northern panhandle"},
 {n:"Eastern Panhandle Psychiatry",city:"Martinsburg",u:"https://www.eppsych.com/",note:"IV, IM, Spravato ketamine and TMS"},
 {n:"Beckley Psychiatric Services",city:"Beckley",u:"https://www.beckleypsych.com/",note:"Ketamine infusion therapy, TMS, psychiatry"}
],
"Wisconsin":[
 {n:"Edelica Health",city:"Milwaukee",u:"https://edelicahealth.com/",note:"IV ketamine and Spravato for depression/PTSD"},
 {n:"Revival Infusion Madison",city:"Fitchburg",u:"https://www.ketaminemadison.com/",note:"Dedicated IV ketamine infusion clinic"},
 {n:"American Behavioral Clinics",city:"Milwaukee",u:"https://americanbehavioralclinics.com/",note:"Spravato/esketamine-certified psychiatry"},
 {n:"AVIVA Infusions",city:"Green Bay",u:"https://avivainfusions.com/",note:"IV ketamine and Spravato at medical spa"},
 {n:"JoyDeVie Infusions",city:"Green Bay",u:"https://joydevie.com/",note:"CRNA-led ketamine infusions"},
 {n:"Ketamine Wellness Center",city:"Kimberly",u:"https://ketamineappleton.com/",note:"Ketamine-assisted psychotherapy, physician-directed"}
],
"Wyoming":[
 {n:"Jackson Hole Ketamine Clinic",city:"Jackson",u:"https://jacksonholeketamineclinic.com/",note:"CRNA-run IV ketamine infusions and KAP"},
 {n:"Wyoming Wellness Center",city:"Torrington",u:"https://www.wyomingwc.com/",note:"IV, IM, sublingual ketamine; ASKP member"},
 {n:"Wyoming Wellness Center",city:"Cheyenne",u:"https://www.wyomingwc.com/",note:"Satellite clinic; ketamine therapy by appointment"}
]
};

if (typeof module!=="undefined"&&module.exports){module.exports={KETAMINE:KETAMINE};}
