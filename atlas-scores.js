/* ============================================================
   ELEVATED STATES PROJECT — ATLAS CATEGORY SCORES
   ------------------------------------------------------------
   Turns the atlas into five 1-of-51 leaderboards. Each index is a
   transparent 0-100 score computed from sourced fields, then ranked
   #1..#51 (competition ranking; ties share a rank). Ketamine is
   intentionally excluded from scoring — it is legal medically in all
   50 states, so it has zero variance and cannot differentiate states.

   Reads STATES from atlas-data.js (must load first) plus the three
   sourced data tables below (naloxone/DIH, decriminalization, equity).

   ---- SCORING RUBRICS (max 100 each) ----
   HARM REDUCTION : fentanyl test strips 20 · syringe services 20 ·
     Good Samaritan 20 · naloxone access 20 · (minus) drug-induced-homicide 20
   RESEARCH       : program tier 50 · named institutions 36 · MDMA/psi bonus 14
   THERAPEUTIC    : cannabis access 45 · legal/decrim psilocybin 38 · MDMA access 17
   DECRIMINALIZATION : hard-drug possession penalty 50 · cannabis possession 30 · psychedelics decriminalized 20
   EQUITY & REPAIR : expungement 45 · social-equity licensing 27 · revenue reinvestment 28

   Sources per state are carried in each table's "src" for the scorecard.
   Educational only, not legal advice.
   ============================================================ */

/* --- Harm-reduction enrichment: naloxone (nlx) + drug-induced homicide (dih, negative) ---
   Sources: Network for Public Health Law 50-state naloxone survey (2023), PDAPS,
   LAPPA Good-Samaritan/DIH summary (2025), Health in Justice Action Lab. */
var HRX = {
"Alabama":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (fentanyl-only)"},
"Alaska":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (general homicide)"},
"Arizona":{nlx:"strong",dih:"limited",src:"PDAPS; CPHLR/LAPPA (uncertain)"},
"Arkansas":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"California":{nlx:"strong",dih:"limited",src:"PDAPS; active 2nd-deg murder prosecutions"},
"Colorado":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (victims under 18)"},
"Connecticut":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"Delaware":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"District of Columbia":{nlx:"strong",dih:"limited",src:"PDAPS; 1st-deg murder disputed (uncertain)"},
"Florida":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 1st-deg murder DDRD"},
"Georgia":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (fentanyl-only, 2025)"},
"Hawaii":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"Idaho":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"Illinois":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 drug-induced homicide"},
"Indiana":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 dealing resulting in death"},
"Iowa":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"Kansas":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"Kentucky":{nlx:"strong",dih:"limited",src:"PDAPS; general manslaughter"},
"Louisiana":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 2nd-deg murder"},
"Maine":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"Maryland":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"Massachusetts":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"Michigan":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 delivery causing death"},
"Minnesota":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 3rd-deg murder"},
"Mississippi":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (fentanyl-only)"},
"Missouri":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 delivery resulting in death"},
"Montana":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 distribution resulting in death"},
"Nebraska":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute"},
"Nevada":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 murder drug-delivery death"},
"New Hampshire":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 death-resulting DDRD"},
"New Jersey":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 strict-liability drug death"},
"New Mexico":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"New York":{nlx:"strong",dih:"no",src:"PDAPS; no DIH statute (LAPPA'25)"},
"North Carolina":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 death by distribution (2019)"},
"North Dakota":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"Ohio":{nlx:"strong",dih:"limited",src:"PDAPS; involuntary-manslaughter prosecutions"},
"Oklahoma":{nlx:"moderate",dih:"yes",src:"no statewide standing order (uncertain); LAPPA'25 1st-deg murder"},
"Oregon":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (Schedule IV only)"},
"Pennsylvania":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 delivery resulting in death"},
"Rhode Island":{nlx:"moderate",dih:"yes",src:"2022 removed standing order (uncertain); LAPPA'25 DDRD"},
"South Carolina":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (fentanyl-only, 2025)"},
"South Dakota":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"Tennessee":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 2nd-deg murder drug death"},
"Texas":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"Utah":{nlx:"moderate",dih:"no",src:"third-party Rx limited (uncertain); no DIH statute"},
"Vermont":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 DDRD"},
"Virginia":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 felony manslaughter (fentanyl)"},
"Washington":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 CS homicide"},
"West Virginia":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 drug delivery death"},
"Wisconsin":{nlx:"strong",dih:"yes",src:"PDAPS; LAPPA'25 'Len Bias' reckless homicide"},
"Wyoming":{nlx:"strong",dih:"limited",src:"PDAPS; LAPPA'25 (victims under 18)"}
};

/* --- Decriminalization: hard-drug personal-possession penalty (decrim) + cannabis possession (cannPos) ---
   Sources: Drug Policy Alliance, Urban Institute, Alaska ACJC 50-state survey,
   NORML, DISA, state criminal codes. Reflects 2025-26 status incl. Oregon rollback. */
var DEC = {
"Alabama":{decrim:"felony",cannPos:"illegal",src:"AL 13A-12-212; NORML/DISA"},
"Alaska":{decrim:"defelonized",cannPos:"legal",src:"ACJC survey; NORML"},
"Arizona":{decrim:"felony",cannPos:"legal",src:"ARS 13-3408; Prop 207"},
"Arkansas":{decrim:"felony",cannPos:"illegal",src:"AR 5-64-419; NORML/DISA"},
"California":{decrim:"defelonized",cannPos:"legal",src:"Prop 47; NORML"},
"Colorado":{decrim:"defelonized",cannPos:"legal",src:"HB19-1263; NORML"},
"Connecticut":{decrim:"defelonized",cannPos:"legal",src:"2015 reform; NORML"},
"Delaware":{decrim:"defelonized",cannPos:"legal",src:"16 Del.C. 4763; NORML"},
"District of Columbia":{decrim:"defelonized",cannPos:"legal",src:"DC 48-904.01(d); NORML"},
"Florida":{decrim:"felony",cannPos:"illegal",src:"FL 893.13; Amend.3 failed 2024"},
"Georgia":{decrim:"felony",cannPos:"illegal",src:"GA 16-13-30; low-THC only"},
"Hawaii":{decrim:"felony",cannPos:"decrim",src:"HRS 712-1243; ≤3g civil fine"},
"Idaho":{decrim:"felony",cannPos:"illegal",src:"ID 37-2732; fully illegal"},
"Illinois":{decrim:"felony",cannPos:"legal",src:"720 ILCS 570/402; rec legal 2020"},
"Indiana":{decrim:"felony",cannPos:"illegal",src:"IC 35-48-4-6; no medical"},
"Iowa":{decrim:"defelonized",cannPos:"illegal",src:"IA 124.401(5) 1st-offense; NORML"},
"Kansas":{decrim:"felony",cannPos:"illegal",src:"KS 21-5706; no medical"},
"Kentucky":{decrim:"felony",cannPos:"illegal",src:"KRS 218A.1415; medical 2025"},
"Louisiana":{decrim:"felony",cannPos:"decrim",src:"LA 40:966 (uncertain); ≤14g decrim"},
"Maine":{decrim:"felony",cannPos:"legal",src:"heroin/meth felony; rec legal"},
"Maryland":{decrim:"defelonized",cannPos:"legal",src:"MD 5-601; rec legal 2023"},
"Massachusetts":{decrim:"defelonized",cannPos:"legal",src:"Ch.94C misdemeanor; rec legal"},
"Michigan":{decrim:"felony",cannPos:"legal",src:"MCL 333.7403; rec legal 2018"},
"Minnesota":{decrim:"felony",cannPos:"legal",src:"MN 152.025 (uncertain); rec legal 2023"},
"Mississippi":{decrim:"felony",cannPos:"decrim",src:"MS 41-29-139 (uncertain); ≤30g decrim"},
"Missouri":{decrim:"felony",cannPos:"legal",src:"MO 579.015; rec legal 2022"},
"Montana":{decrim:"felony",cannPos:"legal",src:"MT 45-9-102; rec legal 2021"},
"Nebraska":{decrim:"felony",cannPos:"decrim",src:"NE 28-416; ≤1oz civil infraction"},
"Nevada":{decrim:"felony",cannPos:"legal",src:"NRS 453.336 (AB236); rec legal"},
"New Hampshire":{decrim:"felony",cannPos:"decrim",src:"RSA 318-B:2; ≤0.75oz decrim"},
"New Jersey":{decrim:"felony",cannPos:"legal",src:"NJ 2C:35-10; rec legal 2021"},
"New Mexico":{decrim:"defelonized",cannPos:"legal",src:"NM 30-31-23 1st-offense; rec legal 2021"},
"New York":{decrim:"felony",cannPos:"legal",src:"NY PL 220 (uncertain); rec legal 2021"},
"North Carolina":{decrim:"felony",cannPos:"decrim",src:"NC 90-95; ≤0.5oz decrim (no jail)"},
"North Dakota":{decrim:"defelonized",cannPos:"decrim",src:"ND 19-03.1-23 (HB1041); ≤0.5oz decrim"},
"Ohio":{decrim:"felony",cannPos:"legal",src:"ORC 2925.11; rec legal 2023"},
"Oklahoma":{decrim:"defelonized",cannPos:"illegal",src:"SQ780 all-drug misdemeanor; medical only"},
"Oregon":{decrim:"defelonized",cannPos:"legal",src:"HB4002 recriminalized 2024 (misdemeanor); rec legal"},
"Pennsylvania":{decrim:"defelonized",cannPos:"illegal",src:"35 P.S. 780-113(b) 1st-offense; medical"},
"Rhode Island":{decrim:"felony",cannPos:"legal",src:"RI 21-28-4.01; rec legal 2022"},
"South Carolina":{decrim:"defelonized",cannPos:"illegal",src:"SC 44-53-370(d) 1st-offense (uncertain); no medical"},
"South Dakota":{decrim:"felony",cannPos:"illegal",src:"SD 22-42-5; medical only"},
"Tennessee":{decrim:"defelonized",cannPos:"illegal",src:"TCA 39-17-418 1st/2nd; no medical"},
"Texas":{decrim:"felony",cannPos:"illegal",src:"HSC 481.115 <1g state-jail felony; ≤2oz misdemeanor"},
"Utah":{decrim:"defelonized",cannPos:"illegal",src:"HB348 1st/2nd misdemeanor; medical only"},
"Vermont":{decrim:"felony",cannPos:"legal",src:"18 V.S.A. 4231 (uncertain); rec legal"},
"Virginia":{decrim:"felony",cannPos:"legal",src:"VA 18.2-250; rec possession legal 2021"},
"Washington":{decrim:"defelonized",cannPos:"legal",src:"post-Blake gross misdemeanor; rec legal"},
"West Virginia":{decrim:"defelonized",cannPos:"illegal",src:"WV 60A-4-401(c) misdemeanor; medical only"},
"Wisconsin":{decrim:"felony",cannPos:"illegal",src:"WI 961.41(3g) (uncertain); no medical"},
"Wyoming":{decrim:"defelonized",cannPos:"illegal",src:"WY 35-7-1031(c) 1st/2nd (uncertain); no medical"}
};

/* --- Equity & repair: expungement (expunge) + social-equity licensing (equity) + revenue reinvestment (reinvest) ---
   Sources: Marijuana Policy Project, Collateral Consequences Resource Center,
   Last Prisoner Project, state regulators. "na" = no comprehensive market to score. */
var EQ = {
"Alabama":{expunge:"petition",equity:"no",reinvest:"no",src:"AL 2021 expungement; medical-only"},
"Alaska":{expunge:"none",equity:"no",reinvest:"yes",src:"MPP; 50% tax to Recidivism Reduction Fund"},
"Arizona":{expunge:"petition",equity:"yes",reinvest:"yes",src:"Prop 207; 10% to Justice Reinvestment Fund"},
"Arkansas":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; general petition sealing"},
"California":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"AB1793/1706; Community Reinvestment Grants"},
"Colorado":{expunge:"automatic",equity:"yes",reinvest:"no",src:"Clean Slate SB22-099 (2025); HB20-1424 equity"},
"Connecticut":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"2023 erasure; Social Equity & Innovation Fund"},
"Delaware":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"Clean Slate; Justice Reinvestment Fund"},
"District of Columbia":{expunge:"automatic",equity:"yes",reinvest:"no",src:"Second Chance Act (2025); Congress blocks sales"},
"Florida":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; narrow petition sealing"},
"Georgia":{expunge:"petition",equity:"na",reinvest:"na",src:"low-THC registry only"},
"Hawaii":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; limited petition expungement"},
"Idaho":{expunge:"none",equity:"na",reinvest:"na",src:"fully prohibited"},
"Illinois":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"auto ≤30g; 25% tax to R3 reinvestment"},
"Indiana":{expunge:"petition",equity:"na",reinvest:"na",src:"CBD-only; Second Chance petition"},
"Iowa":{expunge:"petition",equity:"na",reinvest:"na",src:"low-THC CBD only"},
"Kansas":{expunge:"petition",equity:"na",reinvest:"na",src:"prohibited; general petition expungement"},
"Kentucky":{expunge:"petition",equity:"no",reinvest:"no",src:"medical 2025; petition expungement"},
"Louisiana":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; petition expungement"},
"Maine":{expunge:"none",equity:"no",reinvest:"no",src:"MPP; no cannabis expungement enacted"},
"Maryland":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"auto expungement; 35% to Community Reinvestment & Repair"},
"Massachusetts":{expunge:"petition",equity:"yes",reinvest:"no",src:"2018 sealing; Social Equity Trust Fund"},
"Michigan":{expunge:"automatic",equity:"yes",reinvest:"no",src:"Clean Slate (2023); MRA equity fee cuts"},
"Minnesota":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"BCA auto (57k+); CanRenew grants"},
"Mississippi":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; limited petition"},
"Missouri":{expunge:"automatic",equity:"yes",reinvest:"no",src:"Amend.3 auto expungement; microbusiness licenses"},
"Montana":{expunge:"petition",equity:"no",reinvest:"no",src:"I-190 on request; HEART fund (treatment)"},
"Nebraska":{expunge:"petition",equity:"na",reinvest:"na",src:"no operational market (uncertain)"},
"Nevada":{expunge:"petition",equity:"no",reinvest:"no",src:"petition sealing + 2020 pardons"},
"New Hampshire":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; annulment by petition"},
"New Jersey":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"auto/expedited; 70% revenue to impact zones"},
"New Mexico":{expunge:"automatic",equity:"yes",reinvest:"no",src:"auto expungement; microbusiness + $5M loans"},
"New York":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"MRTA auto + Clean Slate; 40% to reinvestment"},
"North Carolina":{expunge:"petition",equity:"na",reinvest:"na",src:"no state market (tribal only); petition"},
"North Dakota":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; petition sealing"},
"Ohio":{expunge:"petition",equity:"no",reinvest:"no",src:"SB56 (2025) repealed equity, redirected revenue"},
"Oklahoma":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; petition expungement"},
"Oregon":{expunge:"petition",equity:"yes",reinvest:"yes",src:"SB420; Cannabis Equity Act; M110 revenue"},
"Pennsylvania":{expunge:"automatic",equity:"no",reinvest:"no",src:"medical-only; Clean Slate auto-seals misdemeanors"},
"Rhode Island":{expunge:"automatic",equity:"yes",reinvest:"no",src:"auto expungement 2024; Social Equity Assistance Fund"},
"South Carolina":{expunge:"petition",equity:"na",reinvest:"na",src:"prohibited; limited petition"},
"South Dakota":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; petition sealing"},
"Tennessee":{expunge:"petition",equity:"na",reinvest:"na",src:"low-THC only; petition"},
"Texas":{expunge:"petition",equity:"na",reinvest:"na",src:"low-THC only; narrow expunction (uncertain)"},
"Utah":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; petition + Clean Slate"},
"Vermont":{expunge:"automatic",equity:"yes",reinvest:"no",src:"S.234 auto; Cannabis Business Development Fund"},
"Virginia":{expunge:"automatic",equity:"yes",reinvest:"yes",src:"auto sealing (phasing); Cannabis Equity Reinvestment Fund 30%"},
"Washington":{expunge:"petition",equity:"yes",reinvest:"yes",src:"2019 vacation; Community Reinvestment Account $60M"},
"West Virginia":{expunge:"petition",equity:"no",reinvest:"no",src:"medical-only; petition expungement"},
"Wisconsin":{expunge:"none",equity:"na",reinvest:"na",src:"CBD-only; no post-conviction pathway"},
"Wyoming":{expunge:"petition",equity:"na",reinvest:"na",src:"prohibited; petition expungement"}
};

/* ---------------- scoring functions (0-100) ---------------- */
function esHR(n){var s=STATES[n]||{},x=HRX[n]||{},v=0;
  v+=(s.fts==="legal")?20:0;
  v+=(s.ssp==="yes")?20:(s.ssp==="limited")?10:0;
  v+=(s.gsl==="yes")?20:(s.gsl==="limited")?10:0;
  v+=(x.nlx==="strong")?20:(x.nlx==="moderate")?10:0;
  v+=(x.dih==="no")?20:(x.dih==="limited")?10:0;
  return v;}
function esResearch(n){var s=STATES[n]||{};
  var base=(s.rsch==="active")?50:(s.rsch==="emerging")?25:0;
  var inst=(s.rschN||"").split(/[\/,&]| and /).map(function(t){return t.trim();}).filter(function(t){return t.length>2;}).length;
  var iv=Math.min(inst*12,36);
  var bonus=((s.mdma==="trial")?8:0)+((s.psi==="legal")?6:0);
  return Math.min(base+iv+bonus,100);}
function esMedical(n){var s=STATES[n]||{},v=0;
  v+=(s.can==="rec")?45:(s.can==="med")?32:(s.can==="lowthc")?13:0;
  v+=(s.psi==="legal")?38:(s.psi==="decrim")?13:0;
  v+=(s.mdma==="rtt")?17:(s.mdma==="trial")?9:0;
  return Math.min(v,100);}
function esDecrim(n){var d=DEC[n]||{},s=STATES[n]||{},v=0;
  v+=(d.decrim==="decrim")?50:(d.decrim==="defelonized")?28:0;      // hard-drug possession penalty
  v+=(d.cannPos==="legal")?30:(d.cannPos==="decrim")?18:(d.cannPos==="medical-only")?7:0; // cannabis possession
  v+=(s.psi==="legal")?20:(s.psi==="decrim")?12:0;                  // psychedelics decriminalized (breaks the reform-leader tie)
  return v;}
function esEquity(n){var e=EQ[n]||{},v=0;
  v+=(e.expunge==="automatic")?45:(e.expunge==="petition")?20:0;
  v+=(e.equity==="yes")?27:0;
  v+=(e.reinvest==="yes")?28:0;
  return v;}

/* ---------------- categories + computed ranks ---------------- */
var ES_CATS = [
 {key:"hr",       label:"Harm Reduction",    fn:esHR,       tbl:HRX, color:"#D63A2F",
  blurb:"Naloxone access, syringe services, fentanyl test strips and Good Samaritan protection — minus drug-induced-homicide laws that deter 911 calls."},
 {key:"research", label:"Research & Trials",  fn:esResearch, tbl:null, color:"#8B6CFF",
  blurb:"Active psychedelic research: university programs, named institutions, and MDMA/psilocybin trials."},
 {key:"medical",  label:"Therapeutic Access", fn:esMedical,  tbl:null, color:"#E0862E",
  blurb:"What a patient can actually access today: cannabis, legal or decriminalized psilocybin, and MDMA access. (Ketamine excluded — legal everywhere.)"},
 {key:"decrim",   label:"Decriminalization", fn:esDecrim,   tbl:DEC, color:"#2F9E9E",
  blurb:"The criminal penalty for personal possession — a jail cell versus a fine — across hard drugs, cannabis, and psychedelics."},
 {key:"equity",   label:"Equity & Repair",   fn:esEquity,   tbl:EQ,  color:"#C8497A",
  blurb:"Repairing the drug war: record expungement, social-equity business licensing, and reinvestment of revenue into harmed communities."}
];

var ES_DC = "District of Columbia";   // scored & shown, but excluded from the rankings
var ES_NRANK = 50;
var ES_INDEX = {};
(function(){
  if(typeof STATES==="undefined"){return;}
  var names = Object.keys(STATES);
  var rankable = names.filter(function(n){return n!==ES_DC;});
  ES_NRANK = rankable.length;
  ES_CATS.forEach(function(c){
    var sc={}; names.forEach(function(n){sc[n]=c.fn(n);});   // DC keeps a score to display
    // primary: score; deterministic tie-order by overall openness, then name — states only
    var ks=rankable.slice().sort(function(a,b){return (sc[b]-sc[a]) || (((STATES[b]||{}).o||0)-((STATES[a]||{}).o||0)) || a.localeCompare(b);});
    var rank={},prev=null,r=0;
    for(var i=0;i<ks.length;i++){if(sc[ks[i]]!==prev){r=i+1;prev=sc[ks[i]];}rank[ks[i]]=r;}
    rank[ES_DC]=null;   // DC: not ranked
    ES_INDEX[c.key]={label:c.label,blurb:c.blurb,color:c.color,score:sc,rank:rank,order:ks};
  });
})();

/* helper: all category ranks for one state, for the scorecard */
function esScorecard(n){
  return ES_CATS.map(function(c){
    return {key:c.key,label:c.label,color:c.color,score:ES_INDEX[c.key].score[n],rank:ES_INDEX[c.key].rank[n]};
  });
}
function esRankStr(cat,n){var r=ES_INDEX[cat].rank[n];if(r==null)return "Not ranked · DC";return "#"+r+" of "+ES_NRANK;}

if (typeof module!=="undefined"&&module.exports){module.exports={HRX:HRX,DEC:DEC,EQ:EQ,ES_CATS:ES_CATS,ES_INDEX:ES_INDEX,esScorecard:esScorecard};}
