/* ============================================================
   ELEVATED STATES PROJECT — POLICY ATLAS DATA
   ------------------------------------------------------------
   Single source of truth. Every layer, the time-slider, and the
   ask-the-map engine read from STATES / CITIES / CHURCHES below.

   ⚠ ILLUSTRATIVE DATA. The SCHEMA (field definitions) is real and
   sourceable; the VALUES are best-effort and must be verified
   against authoritative trackers (NORML, MPP, Psychedelic Alpha)
   before this is shown publicly. Educational only, not legal advice.

   ---- PER-STATE SCHEMA (STATES[name] = {...}) ----
   o     : Number  0–100  composite "openness" index
   can   : String  cannabis status — "rec" | "med" | "lowthc" | "illegal"
   recY  : Number|null     year recreational cannabis became legal
   medY  : Number|null     year a comprehensive medical program began (approx)
   psi   : String  psilocybin — "legal" | "decrim" | "none"
   psiY  : Number|null     year of first psilocybin reform (state or major city)
   ibo   : String  ibogaine research — "active" | "considering" | "none"
   ket   : String  ketamine access — "open" (telehealth+clinic) | "clinic" (in-person only)
                    [ketamine is medically legal in every state; this is an access nuance]
   mdma  : String  MDMA — "trial" (active research site) | "rtt" (right-to-try law) | "none"
   rfra  : 0 | 1   state Religious Freedom Restoration Act on the books
   pen   : (derived at runtime from `can`) possession-penalty proxy

   ---- CITIES (psychedelic municipal decriminalization) ----
   {n: "City, ST", lat, lon, y: year}

   ---- CHURCHES (recognized federal ayahuasca exemptions) ----
   {n: "Church · City, ST", lat, lon, y: year}
   ============================================================ */

const STATES = {
"Alabama":{o:36,can:"med",recY:null,medY:2021,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Alaska":{o:74,can:"rec",recY:2014,medY:1998,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Arizona":{o:70,can:"rec",recY:2020,medY:2010,psi:"none",psiY:null,ibo:"considering",ket:"open",mdma:"rtt",rfra:1},
"Arkansas":{o:42,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"California":{o:88,can:"rec",recY:2016,medY:1996,psi:"decrim",psiY:2019,ibo:"none",ket:"open",mdma:"trial",rfra:0},
"Colorado":{o:98,can:"rec",recY:2012,medY:2000,psi:"legal",psiY:2022,ibo:"none",ket:"open",mdma:"trial",rfra:0},
"Connecticut":{o:76,can:"rec",recY:2021,medY:2012,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"trial",rfra:1},
"Delaware":{o:70,can:"rec",recY:2023,medY:2011,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"District of Columbia":{o:82,can:"rec",recY:2014,medY:2010,psi:"decrim",psiY:2020,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Florida":{o:48,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1},
"Georgia":{o:30,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Hawaii":{o:48,can:"med",recY:null,medY:2000,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Idaho":{o:8,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1},
"Illinois":{o:75,can:"rec",recY:2019,medY:2013,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"trial",rfra:1},
"Indiana":{o:20,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Iowa":{o:26,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0},
"Kansas":{o:15,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1},
"Kentucky":{o:38,can:"med",recY:null,medY:2025,psi:"none",psiY:null,ibo:"considering",ket:"open",mdma:"none",rfra:1},
"Louisiana":{o:44,can:"med",recY:null,medY:2019,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Maine":{o:76,can:"rec",recY:2016,medY:1999,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Maryland":{o:72,can:"rec",recY:2022,medY:2013,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Massachusetts":{o:84,can:"rec",recY:2016,medY:2012,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"trial",rfra:0},
"Michigan":{o:80,can:"rec",recY:2018,medY:2008,psi:"decrim",psiY:2020,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Minnesota":{o:80,can:"rec",recY:2023,medY:2014,psi:"decrim",psiY:2023,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Mississippi":{o:38,can:"med",recY:null,medY:2022,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1},
"Missouri":{o:70,can:"rec",recY:2022,medY:2018,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Montana":{o:70,can:"rec",recY:2020,medY:2004,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Nebraska":{o:40,can:"med",recY:null,medY:2024,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0},
"Nevada":{o:76,can:"rec",recY:2016,medY:2000,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"New Hampshire":{o:46,can:"med",recY:null,medY:2013,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"New Jersey":{o:74,can:"rec",recY:2020,medY:2010,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"none",rfra:0},
"New Mexico":{o:88,can:"rec",recY:2021,medY:2007,psi:"legal",psiY:2025,ibo:"none",ket:"open",mdma:"none",rfra:1},
"New York":{o:78,can:"rec",recY:2021,medY:2014,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"trial",rfra:0},
"North Carolina":{o:22,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"North Dakota":{o:38,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0},
"Ohio":{o:68,can:"rec",recY:2023,medY:2016,psi:"none",psiY:null,ibo:"considering",ket:"open",mdma:"none",rfra:0},
"Oklahoma":{o:52,can:"med",recY:null,medY:2018,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Oregon":{o:100,can:"rec",recY:2014,medY:1998,psi:"legal",psiY:2020,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Pennsylvania":{o:50,can:"med",recY:null,medY:2016,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Rhode Island":{o:74,can:"rec",recY:2022,medY:2006,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"South Carolina":{o:18,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1},
"South Dakota":{o:40,can:"med",recY:null,medY:2020,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0},
"Tennessee":{o:22,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Texas":{o:28,can:"lowthc",recY:null,medY:null,psi:"none",psiY:null,ibo:"active",ket:"open",mdma:"rtt",rfra:1},
"Utah":{o:38,can:"med",recY:null,medY:2018,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"rtt",rfra:0},
"Vermont":{o:78,can:"rec",recY:2018,medY:2004,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:0},
"Virginia":{o:66,can:"rec",recY:2021,medY:2020,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"none",rfra:1},
"Washington":{o:85,can:"rec",recY:2012,medY:1998,psi:"decrim",psiY:2021,ibo:"none",ket:"open",mdma:"trial",rfra:0},
"West Virginia":{o:40,can:"med",recY:null,medY:2017,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:0},
"Wisconsin":{o:24,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"open",mdma:"trial",rfra:0},
"Wyoming":{o:14,can:"illegal",recY:null,medY:null,psi:"none",psiY:null,ibo:"none",ket:"clinic",mdma:"none",rfra:1}
};

const CITIES = [
{n:"Denver, CO",lat:39.74,lon:-104.99,y:2019},{n:"Oakland, CA",lat:37.80,lon:-122.27,y:2019},
{n:"Santa Cruz, CA",lat:36.97,lon:-122.03,y:2020},{n:"Ann Arbor, MI",lat:42.28,lon:-83.74,y:2020},
{n:"Washington, DC",lat:38.90,lon:-77.04,y:2020},{n:"Cambridge, MA",lat:42.37,lon:-71.11,y:2021},
{n:"Somerville, MA",lat:42.39,lon:-71.10,y:2021},{n:"Northampton, MA",lat:42.32,lon:-72.63,y:2021},
{n:"Seattle, WA",lat:47.61,lon:-122.33,y:2021},{n:"Detroit, MI",lat:42.33,lon:-83.05,y:2021},
{n:"Arcata, CA",lat:40.87,lon:-124.08,y:2021},{n:"San Francisco, CA",lat:37.77,lon:-122.42,y:2022},
{n:"Minneapolis, MN",lat:44.98,lon:-93.27,y:2023},{n:"Berkeley, CA",lat:37.87,lon:-122.27,y:2023},
{n:"Amherst, MA",lat:42.37,lon:-72.52,y:2021},{n:"Easthampton, MA",lat:42.27,lon:-72.67,y:2021}
];

const CHURCHES = [
{n:"UDV · Santa Fe, NM",lat:35.69,lon:-105.94,y:2006},
{n:"Santo Daime · Ashland, OR",lat:42.19,lon:-122.71,y:2009}
];

if (typeof module !== "undefined") { module.exports = { STATES, CITIES, CHURCHES }; }
