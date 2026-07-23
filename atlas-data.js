/* ============================================================
   ELEVATED STATES PROJECT — POLICY ATLAS DATA
   ------------------------------------------------------------
   Single source of truth. Every layer, the time-slider, and the
   ask-the-map engine read from STATES / CITIES / CHURCHES below.

   ACCURACY MODEL: each state carries a "verified" flag. verified:1
   states have been re-sourced against authoritative trackers with a
   "src" (sources) and "updated" (as-of date); verified:0 states are
   still best-effort ILLUSTRATIVE placeholders. Educational only, not
   legal advice.

   ---- PER-STATE SCHEMA (STATES[name] = {...}) ----
   o     : Number 0–100   composite "openness" index (relief height)
   can   : "rec" | "med" | "lowthc" | "illegal"    cannabis status
   recY,medY : Number|null   year rec / comprehensive medical began
   psi   : "legal" | "decrim" | "none"    psilocybin status;  psiY : year
   ibo   : "active" | "considering" | "none"    ibogaine initiative
   ket   : "open" | "clinic"    ketamine access nuance
   mdma  : "trial" | "rtt" | "none"    MDMA
   rfra  : 0|1    state Religious Freedom Restoration Act
   fts   : "legal" | "illegal"    fentanyl test strips
   ssp   : "yes" | "limited" | "no"    syringe-services programs
   gsl   : "yes" | "limited" | "no"    Good Samaritan overdose-immunity law
   rsch  : "active" | "emerging" | "none"    psychedelic research;  rschN : institutions
   ---- NEW capabilities ----
   mom   : "high" | "med" | "low" | "none" | "na"   reform momentum / trajectory
   momN  : String   what's pending / moving
   tribal: 0|1      tribal or notable local legalization a state map would miss;  tribalN : note
   verified : 0|1   has this state been re-sourced?
   src   : String   sources (verified states)
   updated : String   as-of date (verified states)
   ============================================================ */

const STATES = {
"Alabama":{o:36,can:"med",recY:null,medY:2021,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"emerging",rschN:"UAB",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Alaska":{o:74,can:"rec",recY:2014,medY:1998,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Arizona":{o:70,can:"rec",recY:2020,medY:2010,psi:"none",psiY:null,ibo:"considering",ket:"open",mdma:"rtt",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"emerging",rschN:"U of Arizona",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Arkansas":{o:42,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"California":{o:88,can:"rec",recY:2016,medY:1996,psi:"decrim",psiY:2019,ibo:"none",ket:"open",mdma:"trial",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"UC Berkeley / UCSF / UCLA / Stanford",mom:"med",momN:"Statewide decrim vetoed (SB58, 2023); SB751 therapeutic-access bill advancing 2026; ongoing city decrim",tribal:0,tribalN:"",verified:1,src:"MPP; Psychedelic Alpha; CA DHCS",updated:"2026-07"},
"Colorado":{o:98,can:"rec",recY:2012,medY:2000,psi:"legal",psiY:2022,ibo:"considering",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"CU Denver / CU Anschutz / Naropa",mom:"high",momN:"Regulated psilocybin healing-center program rolling out (enacted, operational)",tribal:0,tribalN:"",verified:1,src:"MPP; CO Natural Medicine Division; Psychedelic Alpha",updated:"2026-02"},
"Connecticut":{o:76,can:"rec",recY:2021,medY:2012,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"trial",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"Yale",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Delaware":{o:70,can:"rec",recY:2023,medY:2011,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"District of Columbia":{o:82,can:"rec",recY:2014,medY:2010,psi:"decrim",psiY:2020,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Florida":{o:48,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"emerging",rschN:"UF / USF",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Georgia":{o:30,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"limited",gsl:"yes",rsch:"emerging",rschN:"Emory",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Hawaii":{o:48,can:"med",recY:null,medY:2000,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Idaho":{o:8,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1,fts:"illegal",ssp:"no",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Illinois":{o:75,can:"rec",recY:2019,medY:2013,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"trial",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"U of Chicago",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Indiana":{o:20,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"illegal",ssp:"limited",gsl:"yes",rsch:"emerging",rschN:"IU (state psilocybin research fund)",mom:"med",momN:"State psilocybin research fund enacted 2023 (veterans/first responders); syringe extension advancing 2026; cannabis bills stalled",tribal:0,tribalN:"",verified:1,src:"Marijuana Moment; Indiana Capital Chronicle; KFF",updated:"2026-05"},
"Iowa":{o:26,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0,fts:"illegal",ssp:"limited",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Kansas":{o:15,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1,fts:"illegal",ssp:"no",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Kentucky":{o:38,can:"med",recY:null,medY:2025,psi:"none",psiY:null,ibo:"considering",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Louisiana":{o:44,can:"med",recY:null,medY:2019,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Maine":{o:76,can:"rec",recY:2016,medY:1999,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Maryland":{o:72,can:"rec",recY:2022,medY:2013,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"Johns Hopkins",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Massachusetts":{o:84,can:"rec",recY:2016,medY:2012,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"trial",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"Harvard / MGH",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Michigan":{o:80,can:"rec",recY:2018,medY:2008,psi:"decrim",psiY:2020,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"emerging",rschN:"U of Michigan",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Minnesota":{o:80,can:"rec",recY:2023,medY:2014,psi:"decrim",psiY:2023,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"emerging",rschN:"U of Minnesota",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Mississippi":{o:38,can:"med",recY:null,medY:2022,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Missouri":{o:70,can:"rec",recY:2022,medY:2018,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"emerging",rschN:"WashU",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Montana":{o:70,can:"rec",recY:2020,medY:2004,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Nebraska":{o:40,can:"med",recY:null,medY:2024,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0,fts:"illegal",ssp:"limited",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Nevada":{o:76,can:"rec",recY:2016,medY:2000,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"New Hampshire":{o:46,can:"med",recY:null,medY:2013,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"New Jersey":{o:74,can:"rec",recY:2020,medY:2010,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"New Mexico":{o:88,can:"rec",recY:2021,medY:2007,psi:"legal",psiY:2025,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"emerging",rschN:"UNM",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"New York":{o:78,can:"rec",recY:2021,medY:2014,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"trial",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"NYU / Mount Sinai",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"North Carolina":{o:22,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"emerging",rschN:"UNC / Duke",mom:"med",momN:"Compassionate Care Act (medical cannabis) + HEAL Act psychedelic research — introduced, not enacted",tribal:1,tribalN:"EBCI (Cherokee) adult-use cannabis on the Qualla Boundary",verified:1,src:"MPP; Psychedelic Alpha; NC DHHS",updated:"2026-07"},
"North Dakota":{o:38,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0,fts:"legal",ssp:"limited",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Ohio":{o:68,can:"rec",recY:2023,medY:2016,psi:"none",psiY:null,ibo:"considering",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"emerging",rschN:"Ohio State",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Oklahoma":{o:52,can:"med",recY:null,medY:2018,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Oregon":{o:100,can:"rec",recY:2014,medY:1998,psi:"legal",psiY:2020,ibo:"none",ket:"open",mdma:"trial",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"OHSU",mom:"med",momN:"Psilocybin services program operational (fine-tuning); 2020 drug-decrim rolled back in 2024",tribal:0,tribalN:"",verified:1,src:"Oregon Health Authority; Psychedelic Alpha; DPA",updated:"2026-Q1"},
"Pennsylvania":{o:50,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"emerging",rschN:"Penn",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Rhode Island":{o:74,can:"rec",recY:2022,medY:2006,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"South Carolina":{o:18,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"South Dakota":{o:40,can:"med",recY:null,medY:2020,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0,fts:"illegal",ssp:"no",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Tennessee":{o:22,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Texas":{o:28,can:"med",recY:null,medY:2015,psi:"none",psiY:null,ibo:"active",ket:"open",mdma:"trial",rfra:1,fts:"illegal",ssp:"limited",gsl:"limited",rsch:"active",rschN:"UTMB / UTHealth / Baylor",mom:"high",momN:"$50M state ibogaine research initiative (2025, largest worldwide) + medical cannabis expanded 2025",tribal:0,tribalN:"",verified:1,src:"MPP; Texas Tribune; UTMB; KFF",updated:"2026-03"},
"Utah":{o:38,can:"med",recY:null,medY:2018,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"rtt",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Vermont":{o:78,can:"rec",recY:2018,medY:2004,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Virginia":{o:66,can:"rec",recY:2021,medY:2020,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1,fts:"legal",ssp:"yes",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Washington":{o:85,can:"rec",recY:2012,medY:1998,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"trial",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"UW",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"West Virginia":{o:40,can:"med",recY:null,medY:2017,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0,fts:"legal",ssp:"limited",gsl:"yes",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Wisconsin":{o:24,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"trial",rfra:0,fts:"legal",ssp:"yes",gsl:"yes",rsch:"active",rschN:"UW–Madison",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""},
"Wyoming":{o:14,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1,fts:"illegal",ssp:"no",gsl:"limited",rsch:"none",rschN:"",mom:"na",momN:"",tribal:0,tribalN:"",verified:0,src:"illustrative — not yet sourced",updated:""}
};

const CITIES = [{"n":"Denver, CO","lat":39.74,"lon":-104.99,"y":2019},{"n":"Oakland, CA","lat":37.8,"lon":-122.27,"y":2019},{"n":"Santa Cruz, CA","lat":36.97,"lon":-122.03,"y":2020},{"n":"Ann Arbor, MI","lat":42.28,"lon":-83.74,"y":2020},{"n":"Washington, DC","lat":38.9,"lon":-77.04,"y":2020},{"n":"Cambridge, MA","lat":42.37,"lon":-71.11,"y":2021},{"n":"Somerville, MA","lat":42.39,"lon":-71.1,"y":2021},{"n":"Northampton, MA","lat":42.32,"lon":-72.63,"y":2021},{"n":"Seattle, WA","lat":47.61,"lon":-122.33,"y":2021},{"n":"Detroit, MI","lat":42.33,"lon":-83.05,"y":2021},{"n":"Arcata, CA","lat":40.87,"lon":-124.08,"y":2021},{"n":"San Francisco, CA","lat":37.77,"lon":-122.42,"y":2022},{"n":"Minneapolis, MN","lat":44.98,"lon":-93.27,"y":2023},{"n":"Berkeley, CA","lat":37.87,"lon":-122.27,"y":2023},{"n":"Amherst, MA","lat":42.37,"lon":-72.52,"y":2021},{"n":"Easthampton, MA","lat":42.27,"lon":-72.67,"y":2021}];

const CHURCHES = [{"n":"UDV · Santa Fe, NM","lat":35.69,"lon":-105.94,"y":2006},{"n":"Santo Daime · Ashland, OR","lat":42.19,"lon":-122.71,"y":2009}];

if (typeof module !== "undefined") { module.exports = { STATES, CITIES, CHURCHES }; }
