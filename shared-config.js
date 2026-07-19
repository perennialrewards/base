// ============================================================
// Perennial shared config — single source of truth
// ============================================================
// Previously these were copy-pasted independently into every page
// (points.html, trophies.html, index.html, profiles.html, etc.),
// which let them silently drift out of sync with each other.
// Load this BEFORE any page-specific script:
//   <script src="shared-config.js"></script>
// Then reference via window.PERENNIAL, or alias locally:
//   const TIERS = window.PERENNIAL.TIERS;
// ============================================================
window.PERENNIAL = {

  // Milestones — Sprout to Evergreen. Lifetime (sales-earned + bonus)
  // points, permanent, never affected by spending or gifting.
  TIERS: [
    { pts:500,  name:'Sprout',    reward:'$5 Gift Card',         emoji:'🌱' },
    { pts:1000, name:'Sapling',   reward:'$10 Gift Card',        emoji:'🌿' },
    { pts:2500, name:'Harvest',   reward:'$25 Gift Card',        emoji:'🍂' },
    { pts:5000, name:'Evergreen', reward:'$50 Gift Card + Swag', emoji:'🌲' },
  ],

  // Skill Trees — mastery rank, same lifetime-points number as Milestones
  // but framed as status/title rather than a reward tier.
  SKILL_TITLES: [
    { pts:0,    name:'Novice',        cls:'lvl1' },
    { pts:250,  name:'Budtender',     cls:'lvl2' },
    { pts:750,  name:'Specialist',    cls:'lvl3' },
    { pts:2000, name:'Closer',        cls:'lvl4' },
    { pts:5000, name:'Master Closer', cls:'lvl5' },
  ],

  // Your Famous Achiever — 8 archetypes. Full objects (used by achiever.html
  // for the reveal screen) and a titles-only map (used by points.html/
  // profiles.html, which only ever show the name, never the full breakdown).
  ARCHETYPES: {
    visionary: { emoji:'🧭', title:'The Visionary', desc:"You're driven by purpose. A shift feels different when you know it's part of something bigger." },
    climber:   { emoji:'📈', title:'The Climber',   desc:"You're driven by growth. Every shift is a rep toward becoming the best version of yourself." },
    innovator: { emoji:'🎨', title:'The Innovator', desc:"You're driven by curiosity. You'd rather find a better way than follow the old one." },
    collector: { emoji:'💰', title:'The Collector', desc:"You're driven by ownership. Points, titles, badges — you like watching what's yours add up." },
    connector: { emoji:'🤝', title:'The Connector', desc:"You're driven by people. A good shift is one where the team wins together." },
    closer:    { emoji:'⏳', title:'The Closer',    desc:"You're driven by the clock. Nothing focuses you like a deadline closing in." },
    wildcard:  { emoji:'🎲', title:'The Wildcard',  desc:"You're driven by surprise. Predictable is fine. Unexpected is better." },
    guardian:  { emoji:'🛡️', title:'The Guardian',  desc:"You're driven by consistency. Streaks aren't just numbers — they're a point of pride." },
  },
  get ARCHETYPE_TITLES(){
    const out = {};
    Object.entries(this.ARCHETYPES).forEach(([k,v]) => { out[k] = v.title; });
    return out;
  },

  // Generosity — Peer-to-Peer Recognition badge tiers, based on cumulative
  // points given away (never received), so it rewards generosity itself.
  GENEROSITY_TIERS: [
    { pts:0,    name:'',                     cls:'g0' },
    { pts:100,  name:'🌰 Seed-Sower',        cls:'g1' },
    { pts:300,  name:'🤝 Helping Hand',      cls:'g2' },
    { pts:750,  name:'🌻 Community Builder', cls:'g3' },
    { pts:1500, name:'🌳 Pillar of the Team',cls:'g4' },
  ],

  // The canonical 13-tone autumn leaf palette, used for avatars, squad
  // colors, and anywhere a rotating set of on-brand colors is needed.
  LEAF_COLORS: ['#C17F24','#C94B1E','#B85C38','#D4952A','#A63D2F','#E8AC2D','#6B3A2A','#C05C2C','#6B7C3E','#D4A832','#8B2518','#D4721A','#5B3F8A'],

};
