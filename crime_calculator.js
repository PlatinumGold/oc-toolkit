
const crimePresets = {
  "First-Degree Murder":       { min: 20, max: 40, capital: true },
  "Second-Degree Murder":      { min: 15, max: 30, capital: false },
  "Voluntary Manslaughter":    { min: 3,  max: 10, capital: false },
  "Involuntary Manslaughter":  { min: 1,  max: 5,  capital: false },
  "Aggravated Assault":        { min: 3,  max: 15, capital: false },
  "Simple Assault":            { min: 1,  max: 5,  capital: false },
  "Domestic Violence":         { min: 1,  max: 5,  capital: false },
  "Kidnapping":                { min: 10, max: 25, capital: false },
  "Rape":                      { min: 10, max: 30, capital: false },
  "Aggravated Rape":           { min: 15, max: 40, capital: false },
  "Armed Robbery":             { min: 7,  max: 20, capital: false },
  "Burglary":                  { min: 5,  max: 20, capital: false },
  "Arson":                     { min: 5,  max: 20, capital: false },
  "Human Trafficking":         { min: 10, max: 30, capital: false },
  "Cannibalism":               { min: 15, max: 30, capital: false },
  "Genocide":                  { min: 25, max: 50, capital: false },
  "Torture":                   { min: 5,  max: 25, capital: false },
  "Drug Trafficking":          { min: 5,  max: 40, capital: false },
  "Money Laundering":          { min: 5,  max: 20, capital: false },
  "Fraud":                     { min: 2,  max: 10, capital: false },
  "Embezzlement":              { min: 1,  max: 10, capital: false },
  "Bribery":                   { min: 1,  max: 5,  capital: false },
  "Identity Theft":            { min: 2,  max: 20, capital: false },
  "Cybercrime (Hacking)":      { min: 1,  max: 5,  capital: false },
  "Espionage":                 { min: 10, max: 30, capital: false },
  "Terrorism":                 { min: 20, max: 50, capital: false },
  "Piracy":                    { min: 5,  max: 20, capital: false },
  "Hate Crime":                { min: 2,  max: 10, capital: false },
  "Other":                     { min: 0,  max: 0,  capital: false }
};

const definitions = {
  "First-Degree Murder": "Premeditated and intentional killing.",
  "Second-Degree Murder": "Intentional killing without premeditation.",
  "Voluntary Manslaughter": "Killing in the heat of passion.",
  "Involuntary Manslaughter": "Unintentional killing due to reckless acts.",
  "Aggravated Assault": "Severe physical attack, often with a weapon.",
  "Simple Assault": "Minor attack or threat of violence.",
  "Domestic Violence": "Abuse within a household or intimate relationship.",
  "Kidnapping": "Taking someone against their will.",
  "Rape": "Non-consensual sexual act.",
  "Aggravated Rape": "Rape with violence or a weapon.",
  "Armed Robbery": "Robbery using a weapon.",
  "Burglary": "Illegal entry to commit a crime.",
  "Arson": "Deliberate fire setting.",
  "Human Trafficking": "Exploitation through forced labor or sex.",
  "Cannibalism": "Consumption of human flesh.",
  "Genocide": "Mass killing of an ethnic or national group.",
  "Torture": "Infliction of severe pain for punishment or coercion.",
  "Drug Trafficking": "Transporting or selling drugs.",
  "Money Laundering": "Hiding the origins of illegally obtained money.",
  "Fraud": "Deception for financial gain.",
  "Embezzlement": "Theft or misuse of funds by a trusted person.",
  "Bribery": "Offering something to influence an action.",
  "Identity Theft": "Using another person's identity for fraud.",
  "Cybercrime (Hacking)": "Unauthorized access to computers or networks.",
  "Espionage": "Spying, typically for political gain.",
  "Terrorism": "Acts of violence for political purposes.",
  "Piracy": "Criminal acts at sea or digital content theft.",
  "Hate Crime": "Crime motivated by prejudice.",
  "Other": "Custom offense not listed."
};

const addedCrimes = [];

window.onload = () => {
  const crimeSelect = document.getElementById("crimeSelect");
  for (let crime in crimePresets) {
    const option = document.createElement("option");
    option.value = crime;
    option.text = crime;
    crimeSelect.appendChild(option);
  }
};

function addCrime() {
  const crime = document.getElementById("crimeSelect").value;
  if (crime && !addedCrimes.includes(crime)) {
    addedCrimes.push(crime);
    const div = document.createElement("div");
    div.className = "crime-item";
    div.innerHTML = `<strong>${crime}</strong><br><small>${definitions[crime]}</small>`;
    document.getElementById("crimeList").appendChild(div);
  }
}

function calculateTime() {
  let minYears = 0, maxYears = 0, capitalOffense = false;
  addedCrimes.forEach(crime => {
    const { min, max, capital } = crimePresets[crime];
    minYears += min;
    maxYears += max;
    if (capital) capitalOffense = true;
  });

  let result = `<strong>Minimum Sentence:</strong> ${minYears} years<br>`;
  result += `<strong>Maximum Sentence:</strong> ${maxYears} years<br>`;
  if (capitalOffense) result += `<strong>Note:</strong> Includes capital offense(s).`;
  document.getElementById("results").innerHTML = result;
}
