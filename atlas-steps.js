/* ============================================================
   SMALL STEPS — the incremental gains each state could make next
   ------------------------------------------------------------
   Used by the Take Action page (pick a step, send the letter), the
   Atlas state panel ("small steps to level up") and the social cards.

   Ordering principle (Sep 29, 2026): lead with steps that change minds
   as well as laws — psychedelic research, therapy readiness, live
   psychedelic and cannabis bills. Overdose-focused harm-reduction asks
   come after those, and syringe services come last.

   LEADS are hand-written from the Atlas's own notes (momN). Every fact
   in them is already published in atlas-data.js; update both together.
   Each lead lists the rule themes it covers, so a state never gets the
   same idea twice.
   ============================================================ */
var STEP_LEADS = {
 "Alaska": {covers:["ready"], title:"Act on the task force's recommendations",
   why:"Alaska's own psychedelic task force delivered pro-reform recommendations in February 2026. The homework is done; what's missing is a bill.",
   ask:"turn the state psychedelic task force's February 2026 recommendations into legislation"},
 "Arizona": {covers:["research"], title:"Keep Arizona's psychedelic research funded",
   why:"Arizona is funding a $5 million ibogaine study and a $5 million psilocybin research grant. Research money is the first thing cut in a tight budget.",
   ask:"protect and expand state funding for psilocybin and ibogaine research"},
 "California": {covers:["ready"], title:"Back the therapeutic-access bill",
   why:"SB 751, a bill for supervised therapeutic access, is advancing in 2026. A therapy-first bill is exactly the kind of step that moves skeptics.",
   ask:"support SB 751 and supervised therapeutic access to psychedelics"},
 "Colorado": {covers:["ready"], title:"Protect the healing-center program",
   why:"Colorado's regulated psilocybin healing centers are open. Programs like this get rolled back quietly, through budget lines and rule changes, unless voters speak up first.",
   ask:"fully fund the state's psilocybin healing-center program and protect it from rollback"},
 "Connecticut": {covers:["ready"], title:"Grow the veterans' psychedelic pilot",
   why:"Connecticut expanded its psychedelic expanded-access pilot for veterans and first responders in June 2026. Pilots live or die on funding and follow-through.",
   ask:"fully fund and expand the state's psychedelic expanded-access pilot for veterans and first responders"},
 "Georgia": {covers:["research"], title:"Fund psychedelic research for veterans",
   why:"Georgia regulated psychedelic and ketamine clinics in 2026 (HB 717), which means the state already accepts these treatments are coming. Research is the next step.",
   ask:"fund state psilocybin and ibogaine research for veterans, building on the 2026 clinic law"},
 "Hawaii": {covers:["ready"], title:"Back the psychedelic task-force bill",
   why:"Bills to create a psychedelic study task force (SB 3199) are advancing, and the governor is supportive. Task forces are how states build the case for reform.",
   ask:"support SB 3199 and a state psychedelic study task force"},
 "Illinois": {covers:["ready","decrim"], title:"Revive the CURE Act",
   why:"The CURE Act, decriminalization plus licensed psilocybin service centers, was reintroduced for 2025–26 and has stalled. Stalled bills restart when legislators hear from voters.",
   ask:"support the CURE Act and a regulated path to psilocybin therapy"},
 "Indiana": {covers:["research"], title:"Grow the veterans' psilocybin research fund",
   why:"Indiana created a state psilocybin research fund for veterans and first responders in 2024 (HB 1259). Research funds need renewing and growing to become treatment.",
   ask:"fund and expand the state psilocybin research fund for veterans and first responders"},
 "Iowa": {covers:["ready"], title:"Pass the medical psilocybin bill",
   why:"Iowa's supervised medical psilocybin bill (HF 978) passed the House in 2026 and is advancing in the Senate. A bill this far along turns on what senators hear from home.",
   ask:"pass HF 978 and create supervised medical psilocybin access"},
 "Kentucky": {covers:["research"], title:"Fund the ibogaine research law Kentucky already passed",
   why:"Kentucky passed an ibogaine research law (SB 77) in April 2026, then stripped its roughly $21 million in funding. The law exists; the money doesn't.",
   ask:"restore funding for the state's ibogaine research law (SB 77)"},
 "Louisiana": {covers:["research"], title:"Fund the psychedelic research initiative",
   why:"SB 43 created a psychedelic-assisted therapy research initiative covering psilocybin, ibogaine and MDMA, effective August 2026. New programs succeed or stall on funding.",
   ask:"fully fund and implement the state's psychedelic-assisted therapy research initiative (SB 43)"},
 "Maryland": {covers:["ready"], title:"Back the task force's recommendations",
   why:"Maryland's psychedelics task force endorsed clinical and adult access in November 2025, bills are pending, and Johns Hopkins runs a flagship research center. The evidence is local.",
   ask:"support legislation implementing the state psychedelics task force's recommendations"},
 "Massachusetts": {covers:["ready"], title:"Get the therapy pilot through the Senate",
   why:"The House passed a psychedelic-therapy pilot in July 2026; it's pending in the Senate. Senators decide bills like this by hearing from constituents.",
   ask:"pass the psychedelic-therapy pilot the House approved in July 2026"},
 "Michigan": {covers:["research","ready"], title:"Back Michigan's psychedelic bills",
   why:"Two big bills are in play in 2026: $50 million for ibogaine research (HB 6020) and statewide psilocybin reform (SB 631). Five cities have already decriminalized.",
   ask:"support HB 6020 (ibogaine research) and SB 631 (psilocybin reform)"},
 "Minnesota": {covers:["ready"], title:"Back the psilocybin bills",
   why:"Minnesota's Psychedelic Medicine Task Force urged regulated access, and 2026 psilocybin bills are advancing. The groundwork is done.",
   ask:"support legislation creating regulated psilocybin access, as the state's Psychedelic Medicine Task Force recommended"},
 "Mississippi": {covers:["research"], title:"Protect the ibogaine trials",
   why:"Mississippi put $5 million into ibogaine clinical trials in March 2026 (HB 314). First-year research money is the easiest line to cut.",
   ask:"protect and continue state funding for ibogaine clinical trials (HB 314)"},
 "Missouri": {covers:["research"], title:"Fund psychedelic research for veterans",
   why:"A bill to fund psilocybin and ibogaine research for veterans (HB 1643 / SB 1682) passed the Missouri House in 2026. Getting it the rest of the way comes down to what senators hear from home.",
   ask:"pass legislation funding psilocybin and ibogaine research for veterans (HB 1643 / SB 1682)"},
 "Nevada": {covers:["ready"], title:"Bring the psilocybin pilot back in 2027",
   why:"Nevada's psychedelic working group urged regulated access, and a pilot bill (AB 378) died in 2025. The legislature meets every other year, so 2027 is the next chance.",
   ask:"reintroduce and pass a psilocybin pilot program in the 2027 session"},
 "New Jersey": {covers:["ready"], title:"Make the hospital psilocybin pilot work",
   why:"New Jersey enacted a $6 million hospital psilocybin pilot in January 2026 across three hospitals, with a new advisory board. Pilots succeed on follow-through.",
   ask:"fully fund the hospital psilocybin pilot and publish its results"},
 "New Mexico": {covers:["ready","access"], title:"Keep the medical psilocybin program on track",
   why:"New Mexico's medical psilocybin program (SB 219) is being built ahead of schedule, with first patient sessions targeted for the end of 2026.",
   ask:"fully fund the medical psilocybin program and keep it on schedule"},
 "New York": {covers:["ready"], title:"Get medical psilocybin out of committee",
   why:"Several psilocybin and ibogaine bills are in committee, including A2142 for medical psilocybin, backed by one of the deepest research bases in the country.",
   ask:"move A2142 (medical psilocybin) out of committee and to a vote"},
 "North Carolina": {covers:["research","cannabis"], title:"Fund psychedelic research at Duke and UNC",
   why:"A bill to put about $4.2 million into university psychedelic research at Duke and UNC is moving, alongside the Compassionate Care Act for medical cannabis.",
   ask:"pass the bill funding university psychedelic research at Duke and UNC, and the Compassionate Care Act"},
 "Ohio": {covers:["research"], title:"Turn the ibogaine study into funded trials",
   why:"Ohio created an ibogaine study committee in its 2026–27 budget, and Ohio State runs strong psychedelic research. Money for actual trials is the next step.",
   ask:"fund ibogaine and psilocybin clinical trials, building on the state's ibogaine study committee"},
 "Oklahoma": {covers:["research"], title:"Fund the ibogaine trials",
   why:"Oklahoma's Breakthrough Therapy Act (HB 3834) authorizes ibogaine clinical trials starting November 2026. A law needs funding and follow-through to become treatment.",
   ask:"fund and implement the ibogaine clinical trials authorized by HB 3834"},
 "Oregon": {covers:["ready"], title:"Protect the psilocybin services program",
   why:"Oregon was first to license psilocybin services, and the program is running on a shortfall: regulators dropped a fee doubling in September 2026 and the 2027 legislature decides how to fund it. The state's own 2020 decriminalization was rolled back in four years, so protection isn't hypothetical.",
   ask:"fully fund the state's psilocybin services program and protect it from rollback"},
 "Rhode Island": {covers:["ready"], title:"Restart statewide psilocybin reform",
   why:"Brown University runs active psychedelic research, but statewide psilocybin reform has stalled. Stalled bills restart when legislators hear from voters.",
   ask:"support statewide psilocybin reform and supervised therapeutic access"},
 "South Carolina": {covers:["cannabis"], title:"Get medical cannabis through the House",
   why:"The Compassionate Care Act for medical cannabis has passed the Senate again and again, and stalls in the House. House members need to hear the support is real.",
   ask:"pass the Compassionate Care Act (medical cannabis) in the House"},
 "South Dakota": {covers:["ready"], title:"Be ready when psilocybin is approved",
   why:"South Dakota passed a trigger law in 2026 (HB 1099) that allows psilocybin therapy once the FDA and DEA act. The work now is making sure the state is ready on day one.",
   ask:"fund psilocybin research and a readiness plan so the state's trigger law (HB 1099) works on day one"},
 "Texas": {covers:["research"], title:"Keep the ibogaine initiative funded",
   why:"Texas launched a $50 million state ibogaine research initiative in 2025, the largest in the world. Big research bets get second-guessed in the next budget.",
   ask:"protect and fully fund the state ibogaine research initiative"},
 "Utah": {covers:["ready","access"], title:"Extend the hospital pilot past 2027",
   why:"Utah's hospital pilot for psilocybin and MDMA therapy (SB 266) is running at the University of Utah and Intermountain, and it sunsets in 2027 unless extended.",
   ask:"extend and fund the hospital psilocybin and MDMA pilot (SB 266) beyond its 2027 sunset"},
 "Vermont": {covers:["research"], title:"Back the ibogaine study bill",
   why:"Vermont has an ibogaine study bill in 2026, while psilocybin reform has stalled at the study stage. Study bills are how cautious legislators get comfortable.",
   ask:"pass the 2026 ibogaine study bill and move psilocybin reform past the study stage"},
 "Virginia": {covers:["ready"], title:"Be ready when psilocybin is approved",
   why:"Virginia signed a psilocybin trigger law in April 2026 that reschedules it once the FDA approves it. The work now is making sure the state is ready on day one.",
   ask:"fund psilocybin research and a readiness plan so the state's trigger law works on day one"},
 "Washington": {covers:["ready","research"], title:"Bring back the medical psilocybin act",
   why:"The medical psilocybin act passed the Senate and then died at the 2026 cutoff. The University of Washington's research pilot is live and an ibogaine study bill is pending.",
   ask:"reintroduce and pass the medical psilocybin act, and pass the ibogaine study bill"}
};

// Rule-based steps, in priority order. Each returns a step or null.
var STEP_RULES = [
 function research(n,d){
   if(d.psi==="legal") return {theme:"research", title:"Fund outcome research on the program",
     why:"Public programs earn trust by publishing results. Independent outcome studies show what works, protect the program from rollback, and give other states a model.",
     ask:"fund independent outcome research on the state's psilocybin program and publish the results"};
   if(d.rsch==="active") return {theme:"research", title:"Put state money behind local research",
     why:n+" already has active psychedelic research"+(d.rschN?" ("+d.rschN+")":"")+". State funding for clinical trials, starting with veterans, turns that expertise into treatment.",
     ask:"fund clinical trials of psilocybin and ibogaine at the state's research universities, starting with veterans"};
   return {theme:"research", title:"Fund psychedelic research for veterans",
     why:"Texas, Indiana, Louisiana, Mississippi, Kentucky and Oklahoma have all passed laws backing psilocybin or ibogaine research, much of it for veterans. Research lets the evidence speak for itself.",
     ask:"create a state-funded psilocybin and ibogaine research program for veterans and first responders"}; },
 function cannabis(n,d){
   if(d.can==="illegal") return {theme:"cannabis", title:"Pass a medical-cannabis program",
     why:n+" is one of a handful of states with no medical-cannabis program at all, so patients with cancer, PTSD or chronic pain have no legal option.",
     ask:"pass a medical-cannabis program"};
   if(d.can==="lowthc") return {theme:"cannabis", title:"Grow the low-THC law into a full medical program",
     why:n+" allows only low-THC products, which leaves out many of the patients a medical program is meant to help.",
     ask:"expand the state's low-THC law into a full medical-cannabis program"};
   return null; },
 function ready(n,d){
   if(d.psi==="none") return {theme:"ready", title:"Get ready for FDA-approved psychedelic therapy",
     why:"Psilocybin already has FDA breakthrough-therapy designation. A state task force on training, licensing and access now means patients aren't left waiting years after approval.",
     ask:"create a state task force to prepare for FDA-approved psychedelic therapies, starting with veterans"};
   if(d.psi==="decrim") return {theme:"ready", title:"Stand up a regulated therapy program",
     why:n+" has decriminalized psilocybin in places but has no regulated path to supervised therapy. Oregon, Colorado and New Mexico show how it's done.",
     ask:"create a regulated, supervised psilocybin therapy program"};
   return {theme:"ready", title:"Protect the program you already have",
     why:"Programs like this get rolled back quietly, through budget lines and rule changes, unless voters speak up first.",
     ask:"fully fund the state's psychedelic programs and protect them from rollback"}; },
 function access(n,d){ if(d.psi!=="legal") return null;
   return {theme:"access", title:"Make the program affordable",
     why:"Sessions in state psilocybin programs are paid out of pocket, which puts them out of reach for many of the veterans and patients they could help.",
     ask:"create sliding-scale and veteran subsidies for the state psilocybin program"}; },
 function decrim(n,d){
   if(d.psi==="decrim" && n!=="District of Columbia") return {theme:"decrim", title:"Take decriminalization statewide",
     why:"Cities in "+n+" have already made personal use of natural psychedelics a low priority. A statewide standard ends the patchwork.",
     ask:"make personal possession of natural psychedelics the lowest law-enforcement priority statewide"};
   if(d.psi!=="none") return null;
   return {theme:"decrim", title:"Make personal use of natural psychedelics a low police priority",
     why:"More than a dozen cities, from Denver to Ann Arbor, have made personal use of natural psychedelics their lowest enforcement priority. Arrests for personal use cost money and help no one.",
     ask:"make personal possession of natural psychedelics the lowest law-enforcement priority"}; },
 function adultuse(n,d){ if(d.can!=="med") return null;
   return {theme:"adultuse", title:"Move toward regulated adult-use cannabis",
     why:n+"'s medical program is in place. Twenty-four states now regulate and tax adult use.",
     ask:"pass regulated adult-use cannabis with expungement for past convictions"}; },
 function gsl(n,d){ if(d.gsl!=="limited"&&d.gsl!=="no") return null;
   return {theme:"gsl", title:"Broaden 911 Good Samaritan protections",
     why:"When people fear arrest, they hesitate to call 911 for a friend in trouble. Broad immunity for anyone who calls costs the state nothing.",
     ask:"broaden Good Samaritan immunity so nobody hesitates to call 911"}; },
 function fts(n,d){ if(d.fts==="legal") return null;
   return {theme:"fts", title:"Legalize drug-checking test strips",
     why:n+" still treats test strips as drug paraphernalia. They cost about a dollar, show what's actually in a substance, and more than twenty states have removed them from paraphernalia law.",
     ask:"remove drug-checking test strips from the state's drug-paraphernalia statute"}; },
 function dih(n,d,hx){ if(hx.dih!=="yes") return null;
   return {theme:"dih", title:"Repeal drug-induced homicide charges",
     why:"These laws don't deter supply, and they stop people from calling 911 when a friend is in danger.",
     ask:"repeal or narrow the state's drug-induced-homicide statute"}; },
 function ssp(n,d){ if(d.ssp!=="no"&&d.ssp!=="limited") return null;
   return {theme:"ssp", title:"Authorize syringe services",
     why:"Syringe service programs are among the most studied public-health tools; "+n+" still "+(d.ssp==="no"?"doesn't authorize them":"limits them")+".",
     ask:"authorize and fund syringe service programs statewide"}; },
 function keep(n,d){
   return {theme:"keep", title:"Protect and extend what's working",
     why:n+" is ahead of most of the country, so the job is defending the gains and funding them properly.",
     ask:"protect and fully fund the state's existing psychedelic and harm-reduction programs"}; }
];

function stateSteps(n){
  var d = (typeof STATES!=="undefined" && STATES[n]) || {};
  var hx = (typeof HRX!=="undefined" && HRX[n]) || {};
  var out = [], covered = {};
  var lead = STEP_LEADS[n];
  if(lead){
    out.push({theme:"lead", title:lead.title, why:lead.why, ask:lead.ask});
    (lead.covers||[]).forEach(function(t){ covered[t]=true; });
  }
  STEP_RULES.forEach(function(rule){
    var s = rule(n, d, hx);
    if(!s || covered[s.theme]) return;
    if(s.theme==="keep" && out.length>=3) return;   // filler only when fewer than three steps apply
    out.push(s); covered[s.theme]=true;
  });
  return out;
}
