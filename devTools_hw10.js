// message logging
// log info
console.info("Espeon Giga Pet loaded successfully!");

// log warning
console.warn("Warning: Espeon's energy is low...");

// log error
console.error("Error: Could not save Espeon's stats.");

// log table
const espeonStats = [
  { stat: "Weight", value: "12 lbs" },
  { stat: "Happiness", value: "8 tail wags/min" },
  { stat: "Energy", value: "5 zaps" }
];
console.table(espeonStats);

// log group
console.group("✨ Espeon Info");
console.log("Name: Espeon");
console.log("Type: Psychic");
console.log("Ability: Synchronize");
console.groupEnd();

// log custom
console.log(
  "%c✨ Giga Pet Espeon ✨",
  "color: #9b59b6; font-size: 16px; font-weight: bold; background: #f3e5f5; padding: 6px 12px; border-radius: 6px;"
);

// cause 404 network error
fetch("espeon-save-data.json");

// cause typeError
try {
  let pet = undefined;
  pet.feed();
} catch (e) {
  console.error("Caught TypeError:", e.message);
}

// cause voilation
setTimeout(function blockingTask() {
  const start = Date.now();
  while (Date.now() - start < 300) {
  }
}, 100);