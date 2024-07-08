const diseasesData = [
    {
        name: "Flu",
        symptoms: ["fever", "cough", "sore throat", "runny nose"],
        medications: ["Paracetamol", "Ibuprofen", "Antiviral drugs"],
        description: "The flu is a common viral infection that can be deadly, especially in high-risk groups.",
        link: "https://www.mayoclinic.org/diseases-conditions/influenza/symptoms-causes/syc-20351719"
    },
    {
        name: "Common Cold",
        symptoms: ["sneezing", "runny nose", "sore throat", "cough"],
        medications: ["Decongestants", "Cough syrups", "Pain relievers"],
        description: "The common cold is a viral infection of your nose and throat (upper respiratory tract).",
        link: "https://www.mayoclinic.org/diseases-conditions/common-cold/symptoms-causes/syc-20351605"
    },
    {
        name: "Migraine",
        symptoms: ["headache", "nausea", "sensitivity to light", "sensitivity to sound"],
        medications: ["Triptans", "Anti-nausea medications", "Pain relievers"],
        description: "A migraine can cause severe throbbing pain or a pulsing sensation, usually on one side of the head.",
        link: "https://www.mayoclinic.org/diseases-conditions/migraine/symptoms-causes/syc-20360201"
    },
    {
        name: "Strep Throat",
        symptoms: ["sore throat", "fever", "swollen lymph nodes", "headache"],
        medications: ["Antibiotics", "Pain relievers", "Lozenges"],
        description: "Strep throat is a bacterial infection that can make your throat feel sore and scratchy.",
        link: "https://www.mayoclinic.org/diseases-conditions/strep-throat/symptoms-causes/syc-20350338"
    },
    {
        name: "Diabetes",
        symptoms: ["increased thirst", "frequent urination", "extreme hunger", "unexplained weight loss"],
        medications: ["Insulin", "Metformin", "Sulfonylureas"],
        description: "Diabetes is a chronic (long-lasting) health condition that affects how your body turns food into energy.",
        link: "https://www.mayoclinic.org/diseases-conditions/diabetes/symptoms-causes/syc-20371444"
    },
    {
        name: "Appendicitis",
        symptoms: ["abdominal pain", "fever", "nausea", "loss of appetite"],
        medications: ["Antibiotics", "Pain relievers", "Surgery"],
        description: "Appendicitis is an inflammation of the appendix, a finger-shaped pouch that projects from your colon on the lower right side of your abdomen.",
        link: "https://www.mayoclinic.org/diseases-conditions/appendicitis/symptoms-causes/syc-20369543"
    },
    {
        name: "Gastritis",
        symptoms: ["abdominal pain", "nausea", "vomiting", "bloating"],
        medications: ["Antacids", "H2 blockers", "Proton pump inhibitors"],
        description: "Gastritis is an inflammation, irritation, or erosion of the lining of the stomach.",
        link: "https://www.mayoclinic.org/diseases-conditions/gastritis/symptoms-causes/syc-20355805"
    },
    {
        name: "Irritable Bowel Syndrome (IBS)",
        symptoms: ["abdominal pain", "bloating", "diarrhea", "constipation"],
        medications: ["Laxatives", "Anti-diarrheal medications", "Antispasmodics"],
        description: "Irritable bowel syndrome is a common disorder that affects the large intestine.",
        link: "https://www.mayoclinic.org/diseases-conditions/irritable-bowel-syndrome/symptoms-causes/syc-20360016"
    },
    {
        name: "Peptic Ulcer",
        symptoms: ["abdominal pain", "bloating", "heartburn", "nausea"],
        medications: ["Antibiotics", "Proton pump inhibitors", "H2 blockers"],
        description: "Peptic ulcers are open sores that develop on the inside lining of your stomach and the upper portion of your small intestine.",
        link: "https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223"
    },
    {
        name: "Gastroenteritis",
        symptoms: ["abdominal pain", "diarrhea", "nausea", "vomiting"],
        medications: ["Oral rehydration solutions", "Antiemetics", "Antidiarrheals"],
        description: "Gastroenteritis is an intestinal infection marked by watery diarrhea, abdominal cramps, nausea or vomiting, and sometimes fever.",
        link: "https://www.mayoclinic.org/diseases-conditions/viral-gastroenteritis/symptoms-causes/syc-20378847"
    },
    {
        name: "Stress",
        symptoms: ["stress", "anxiety", "insomnia", "fatigue"],
        medications: ["Relaxation techniques", "Therapy", "Medication"],
        description: "Stress is a feeling of emotional or physical tension. It can come from any event or thought that makes you feel frustrated, angry, or nervous.",
        link: "https://www.mayoclinic.org/tests-procedures/stress-management/about/pac-20385197"
    },
    {
        name: "Depression",
        symptoms: ["stress", "depression", "fatigue", "loss of interest"],
        medications: ["Antidepressants", "Therapy", "Lifestyle changes"],
        description: "Depression is a mood disorder that causes a persistent feeling of sadness and loss of interest.",
        link: "https://www.mayoclinic.org/diseases-conditions/depression/symptoms-causes/syc-20356007"
    },
    {
        name: "Anxiety Disorder",
        symptoms: ["stress", "anxiety", "panic", "insomnia"],
        medications: ["Antianxiety medications", "Therapy", "Lifestyle changes"],
        description: "Anxiety disorders are a group of mental disorders characterized by significant feelings of anxiety and fear.",
        link: "https://www.mayoclinic.org/diseases-conditions/anxiety/symptoms-causes/syc-20350961"
    },
    {
        name: "Hypertension",
        symptoms: ["high blood pressure", "headache", "dizziness", "blurred vision"],
        medications: ["Diuretics", "Beta blockers", "ACE inhibitors"],
        description: "Hypertension, or high blood pressure, is a condition in which the force of the blood against the artery walls is too high.",
        link: "https://www.mayoclinic.org/diseases-conditions/high-blood-pressure/symptoms-causes/syc-20373410"
    },
    {
        name: "Asthma",
        symptoms: ["shortness of breath", "chest tightness", "wheezing", "coughing"],
        medications: ["Inhalers", "Steroids", "Bronchodilators"],
        description: "Asthma is a condition in which your airways narrow and swell and may produce extra mucus.",
        link: "https://www.mayoclinic.org/diseases-conditions/asthma/symptoms-causes/syc-20369653"
    },
    {
        name: "Allergic Rhinitis",
        symptoms: ["sneezing", "runny nose", "itchy eyes", "congestion"],
        medications: ["Antihistamines", "Decongestants", "Nasal corticosteroids"],
        description: "Allergic rhinitis is a type of inflammation in the nose which occurs when the immune system overreacts to allergens in the air.",
        link: "https://www.mayoclinic.org/diseases-conditions/allergic-rhinitis/symptoms-causes/syc-20351473"
    },
    {
        name: "Sinusitis",
        symptoms: ["facial pain", "nasal congestion", "runny nose", "loss of smell"],
        medications: ["Decongestants", "Antibiotics", "Nasal corticosteroids"],
        description: "Sinusitis is an inflammation or swelling of the tissue lining the sinuses.",
        link: "https://www.mayoclinic.org/diseases-conditions/sinusitis/symptoms-causes/syc-20351663"
    },
    {
        name: "Pneumonia",
        symptoms: ["cough", "fever", "shortness of breath", "chest pain"],
        medications: ["Antibiotics", "Antiviral drugs", "Fever reducers"],
        description: "Pneumonia is an infection that inflames the air sacs in one or both lungs.",
        link: "https://www.mayoclinic.org/diseases-conditions/pneumonia/symptoms-causes/syc-20354204"
    },
    {
        name: "Bronchitis",
        symptoms: ["cough", "mucus production", "fatigue", "shortness of breath"],
        medications: ["Cough suppressants", "Bronchodilators", "Antibiotics"],
        description: "Bronchitis is an inflammation of the lining of your bronchial tubes, which carry air to and from your lungs.",
        link: "https://www.mayoclinic.org/diseases-conditions/bronchitis/symptoms-causes/syc-20355566"
    },
    {
        name: "Chronic Fatigue Syndrome",
        symptoms: ["fatigue", "sore throat", "headaches", "muscle pain"],
        medications: ["Antidepressants", "Sleep aids", "Pain relievers"],
        description: "Chronic fatigue syndrome is a complicated disorder characterized by extreme fatigue that can't be explained by any underlying medical condition.",
        link: "https://www.mayoclinic.org/diseases-conditions/chronic-fatigue-syndrome/symptoms-causes/syc-20360591"
    },
    {
        name: "Anemia",
        symptoms: ["fatigue", "weakness", "pale skin", "shortness of breath"],
        medications: ["Iron supplements", "Vitamin B12", "Folate"],
        description: "Anemia is a condition in which you lack enough healthy red blood cells to carry adequate oxygen to your body's tissues.",
        link: "https://www.mayoclinic.org/diseases-conditions/anemia/symptoms-causes/syc-20351360"
    },
    {
        name: "Gastric Ulcer",
        symptoms: ["stomachache", "bloating", "heartburn", "nausea"],
        medications: ["Antibiotics", "Proton pump inhibitors", "H2 blockers"],
        description: "A gastric ulcer is a sore that develops on the lining of the stomach.",
        link: "https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223"
    },
    {
        name: "Gastritis",
        symptoms: ["stomachache", "nausea", "vomiting", "bloating"],
        medications: ["Antacids", "H2 blockers", "Proton pump inhibitors"],
        description: "Gastritis is an inflammation, irritation, or erosion of the lining of the stomach.",
        link: "https://www.mayoclinic.org/diseases-conditions/gastritis/symptoms-causes/syc-20355805"
    },
    {
        name: "Irritable Bowel Syndrome (IBS)",
        symptoms: ["stomachache", "bloating", "diarrhea", "constipation"],
        medications: ["Laxatives", "Anti-diarrheal medications", "Antispasmodics"],
        description: "Irritable bowel syndrome is a common disorder that affects the large intestine.",
        link: "https://www.mayoclinic.org/diseases-conditions/irritable-bowel-syndrome/symptoms-causes/syc-20360016"
    },
    {
        name: "Peptic Ulcer",
        symptoms: ["stomachache", "bloating", "heartburn", "nausea"],
        medications: ["Antibiotics", "Proton pump inhibitors", "H2 blockers"],
        description: "Peptic ulcers are open sores that develop on the inside lining of your stomach and the upper portion of your small intestine.",
        link: "https://www.mayoclinic.org/diseases-conditions/peptic-ulcer/symptoms-causes/syc-20354223"
    },
    {
        name: "Meteorism",
        symptoms: ["bloating", "gas", "abdominal pain", "discomfort"],
        medications: ["Antacids", "Simethicone", "Activated charcoal"],
        description: "Meteorism is the excessive accumulation of gas in the digestive tract.",
        link: "https://www.mayoclinic.org/diseases-conditions/gas-and-gas-pains/symptoms-causes/syc-20372709"
    }
];

function findDiseases(symptoms) {
    return diseasesData.filter(disease => 
        symptoms.every(symptom => disease.symptoms.includes(symptom))
    );
}

function checkSymptoms() {
    const input = document.getElementById('symptom').value.toLowerCase();
    const symptoms = input.split(',').map(symptom => symptom.trim());
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (symptoms.length < 1 || symptoms.length > 5) {
        resultDiv.innerHTML = '<p>Please enter between 1 and 5 symptoms.</p>';
        return;
    }

    let diseases = findDiseases(symptoms);
    if (symptoms.length == 2) {
        diseases = diseases.slice(0, 2);  // limit to 2 diseases if 2 symptoms
    } else if (symptoms.length >= 3) {
        diseases = diseases.slice(0, 1);  // limit to 1 disease if 3-5 symptoms
    }

    if (diseases.length === 0) {
        resultDiv.innerHTML = '<p>No diseases found for these symptoms.</p>';
        return;
    }

    diseases.forEach(disease => {
        displayDisease(resultDiv, disease);
    });
}

function displayDisease(resultDiv, disease) {
    const randomPrice = () => Math.floor(Math.random() * (20000 - 1000 + 1)) + 1000;
    const diseaseDiv = document.createElement('div');
    diseaseDiv.className = 'result-item';

    const diseaseName = document.createElement('p');
    diseaseName.className = 'disease';
    diseaseName.textContent = `Disease: ${disease.name}`;

    const diseaseDescription = document.createElement('p');
    diseaseDescription.textContent = `${disease.description} `;

    const diseaseLink = document.createElement('a');
    diseaseLink.href = disease.link;
    diseaseLink.target = '_blank';
    diseaseLink.textContent = "Read more";
    diseaseDescription.appendChild(diseaseLink);

    const medicationsList = document.createElement('ul');
    medicationsList.className = 'medications';
    disease.medications.forEach(medication => {
        const medicationItem = document.createElement('li');
        medicationItem.className = 'medication';
        medicationItem.textContent = `${medication} - ${randomPrice()} KZT`;
        medicationsList.appendChild(medicationItem);
    });

    diseaseDiv.appendChild(diseaseName);
    diseaseDiv.appendChild(diseaseDescription);
    diseaseDiv.appendChild(medicationsList);
    resultDiv.appendChild(diseaseDiv);
}
