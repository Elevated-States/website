/* atlas-harm.js — "Legal vs. Harm" context data.
   This is NOT part of the policy scoring/leaderboards. It exists to give
   readers the bigger picture: the most harmful drugs are the legal, normalized
   ones. Per-jurisdiction fields (50 states + DC), all CDC/NCHS-sourced:
     ad = alcohol-attributable deaths / yr (CDC ARDI, 2020-2021 avg)
     ar = alcohol death rate per 100k (crude; ARDI deaths / Census pop)
     bd = excessive/binge drinking, % of adults (CDC BRFSS via AHR, 2024)
     sp = adult cigarette smoking, % (CDC BRFSS, 2024)
     sd = smoking-attributable deaths / yr (CDC Best Practices 2014, cigarettes only)
     od = drug overdose deaths (CDC NCHS, 2024)
     or = drug overdose death rate per 100k, age-adjusted (CDC NCHS, 2024)
*/
var HARM = {
  "Alabama":{ad:2740,ar:54.4,bd:16.4,sp:14.0,sd:8600,od:1211,or:25.0},
  "Alaska":{ad:562,ar:76.7,bd:20.1,sp:14.7,sd:600,od:340,or:45.1},
  "Arizona":{ad:4981,ar:68.9,bd:17.7,sp:10.2,sd:8300,od:2453,or:32.6},
  "Arkansas":{ad:1797,ar:59.5,bd:15.5,sp:16.5,sd:5800,od:416,or:13.9},
  "California":{ad:19743,ar:50.1,bd:16.6,sp:7.6,sd:40000,od:9028,or:21.7},
  "Colorado":{ad:3722,ar:64.2,bd:19.5,sp:9.7,sd:5100,od:1610,or:25.7},
  "Connecticut":{ad:1766,ar:49.0,bd:16.5,sp:9.0,sd:4900,od:995,or:26.2},
  "Delaware":{ad:561,ar:56.2,bd:14.8,sp:10.1,sd:1400,od:338,or:33.4},
  "District of Columbia":{ad:472,ar:69.4,bd:27.2,sp:8.5,sd:800,od:315,or:43.2},
  "Florida":{ad:13189,ar:60.8,bd:16.1,sp:10.6,sd:32300,od:4958,or:21.3},
  "Georgia":{ad:5214,ar:48.4,bd:14.3,sp:11.2,sd:11700,od:2029,or:18.1},
  "Hawaii":{ad:619,ar:42.8,bd:17.1,sp:8.1,sd:1400,od:333,or:21.0},
  "Idaho":{ad:986,ar:52.6,bd:15.3,sp:9.6,sd:1800,od:338,or:17.3},
  "Illinois":{ad:5949,ar:46.7,bd:19.4,sp:10.5,sd:18300,od:2531,or:19.3},
  "Indiana":{ad:3808,ar:56.0,bd:15.9,sp:13.9,sd:11100,od:1717,or:25.7},
  "Iowa":{ad:1717,ar:53.8,bd:21.4,sp:12.9,sd:5100,od:427,or:13.7},
  "Kansas":{ad:1567,ar:53.4,bd:17.7,sp:13.7,sd:4400,od:570,or:19.7},
  "Kentucky":{ad:2742,ar:60.8,bd:14.8,sp:17.2,sd:8900,od:1492,or:33.5},
  "Louisiana":{ad:2888,ar:62.3,bd:18.7,sp:15.0,sd:7200,od:1467,or:33.5},
  "Maine":{ad:948,ar:69.3,bd:16.5,sp:14.4,sd:2400,od:483,or:35.2},
  "Maryland":{ad:2884,ar:46.8,bd:14.2,sp:7.8,sd:7500,od:1772,or:26.9},
  "Massachusetts":{ad:3098,ar:44.2,bd:17.1,sp:8.8,sd:9300,od:1590,or:21.8},
  "Michigan":{ad:5947,ar:59.1,bd:16.8,sp:13.4,sd:16200,od:1944,or:19.1},
  "Minnesota":{ad:2869,ar:50.3,bd:19.4,sp:10.2,sd:5900,od:995,or:17.3},
  "Mississippi":{ad:1966,ar:66.6,bd:14.6,sp:13.8,sd:5400,od:525,or:18.6},
  "Missouri":{ad:3501,ar:56.8,bd:17.7,sp:14.7,sd:11000,od:1461,or:23.7},
  "Montana":{ad:859,ar:78.4,bd:22.5,sp:12.2,sd:1600,od:170,or:15.3},
  "Nebraska":{ad:1001,ar:51.0,bd:20.5,sp:12.2,sd:2500,od:155,or:8.1},
  "Nevada":{ad:2023,ar:64.7,bd:16.9,sp:11.9,sd:4100,od:1237,or:35.9},
  "New Hampshire":{ad:756,ar:54.6,bd:17.6,sp:9.1,sd:1900,od:293,or:21.6},
  "New Jersey":{ad:3576,ar:38.6,bd:16.1,sp:8.6,sd:11800,od:1992,or:20.2},
  "New Mexico":{ad:2095,ar:99.0,bd:16.3,sp:12.0,sd:2600,od:775,or:37.1},
  "New York":{ad:8093,ar:40.5,bd:16.4,sp:9.9,sd:28200,od:4449,or:21.3},
  "North Carolina":{ad:5686,ar:54.1,bd:14.3,sp:11.5,sd:14200,od:2780,or:25.7},
  "North Dakota":{ad:432,ar:55.6,bd:20.5,sp:12.4,sd:1000,od:108,or:14.8},
  "Ohio":{ad:6784,ar:57.6,bd:17.3,sp:14.1,sd:20200,od:3165,or:27.2},
  "Oklahoma":{ad:2614,ar:65.8,bd:13.8,sp:14.1,sd:7500,od:1019,or:25.5},
  "Oregon":{ad:2877,ar:67.8,bd:16.2,sp:10.6,sd:5500,od:1500,or:33.5},
  "Pennsylvania":{ad:6624,ar:51.0,bd:17.5,sp:11.7,sd:22000,od:3341,or:25.6},
  "Rhode Island":{ad:599,ar:54.7,bd:18.2,sp:9.9,sd:1800,od:323,or:28.0},
  "South Carolina":{ad:3575,ar:69.3,bd:17.5,sp:12.6,sd:7200,od:1467,or:27.5},
  "South Dakota":{ad:678,ar:76.1,bd:19.5,sp:13.5,sd:1300,od:98,or:11.9},
  "Tennessee":{ad:4775,ar:68.7,bd:null,sp:17.0,sd:11400,od:2499,or:35.2},
  "Texas":{ad:13701,ar:46.6,bd:17.8,sp:10.0,sd:28000,od:4980,or:15.8},
  "Utah":{ad:1113,ar:33.6,bd:11.9,sp:5.7,sd:1300,od:674,or:20.3},
  "Vermont":{ad:439,ar:68.2,bd:18.7,sp:10.5,sd:1000,od:208,or:33.6},
  "Virginia":{ad:3902,ar:45.2,bd:15.1,sp:11.1,sd:10300,od:1552,or:17.6},
  "Washington":{ad:4299,ar:55.6,bd:16.0,sp:7.9,sd:8300,od:3145,or:37.6},
  "West Virginia":{ad:1243,ar:69.6,bd:14.0,sp:20.8,sd:4300,od:821,or:48.9},
  "Wisconsin":{ad:3481,ar:59.1,bd:20.4,sp:11.9,sd:7900,od:1175,or:19.8},
  "Wyoming":{ad:457,ar:79.1,bd:17.5,sp:12.7,sd:800,od:120,or:20.1}
};

/* National context + the Nutt 2010 harm ranking for the "legal vs. harm" story. */
var HARM_META = {
  natl: {
    alcohol: 178000,          // CDC, excessive-alcohol deaths/yr, 2020-2021 avg
    tobacco: 480000,          // CDC, cigarette + secondhand deaths/yr
    overdose: 105000,         // CDC NCHS, 2023 (fell to ~80k provisional in 2024)
    overdoseYr: "2023",
    psilocybin: "≈0"     // ≈0 direct-toxicity deaths; no established human lethal dose
  },
  // David Nutt et al., "Drug harms in the UK," The Lancet, 2010 — overall harm score (0-100)
  nutt: [
    ["Alcohol",72,"legal"],
    ["Heroin",55,"illegal"],
    ["Crack cocaine",54,"illegal"],
    ["Methamphetamine",33,"illegal"],
    ["Cocaine",27,"illegal"],
    ["Tobacco",26,"legal"],
    ["Amphetamine",23,"illegal"],
    ["Cannabis",20,"mixed"],
    ["GHB",18,"illegal"],
    ["Benzodiazepines",15,"rx"],
    ["Ketamine",15,"rx"],
    ["Methadone",14,"rx"],
    ["Mephedrone",13,"illegal"],
    ["Butane",10,"legal"],
    ["Anabolic steroids",10,"rx"],
    ["Khat",9,"illegal"],
    ["MDMA (Ecstasy)",9,"illegal"],
    ["LSD",7,"illegal"],
    ["Buprenorphine",6,"rx"],
    ["Psilocybin mushrooms",5,"illegal"]
  ],
  sources: {
    alcohol: "CDC Alcohol-Related Disease Impact (ARDI), 2020-2021; MMWR 2024;73:154-161",
    drinking: "CDC BRFSS 2024 (via America's Health Rankings)",
    tobacco: "CDC BRFSS 2024 (smoking prevalence); CDC Best Practices 2014 (smoking deaths)",
    overdose: "CDC NCHS, Stats of the States — Drug Overdose Mortality, 2024 (CDC WONDER/NVSS)",
    nutt: "Nutt DJ, King LA, Phillips LD. Drug harms in the UK: a multicriteria decision analysis. The Lancet 2010;376:1558-65",
    toxicity: "Nichols DE. Psychedelics. Pharmacological Reviews 2016;68:264-355"
  }
};
if (typeof module !== "undefined") { module.exports = { HARM: HARM, HARM_META: HARM_META }; }
