export const questions = [
  // NOTE TO CLAUDE - the wrong answers should have roughly the same number of words as the right answer.  
  {
    subject: "biology",
    question: "What is the key difference between a hypothesis and a scientific theory?",
    answer: "A hypothesis is a testable prediction based on observations, while a scientific theory is a well-substantiated explanation of natural phenomena supported by multiple lines of evidence and testing.",
    wrongAnswers: [
      "A hypothesis is a proven explanation of natural phenomena, while a scientific theory is an educated prediction based on preliminary observations requiring further testing.",
      "A hypothesis is generated after extensive experimental validation, while a scientific theory is an initial framework proposed to explain a set of observations.",
      "A hypothesis represents the final conclusion of scientific investigation, while a scientific theory serves as a starting point for generating testable predictions."
    ],
    detail: "Many people misunderstand the relationship between hypotheses and theories in science. A hypothesis is like a tentative explanation or prediction that can be tested - think of it as an educated guess based on observations. Scientific theories, contrary to common usage of the word 'theory', are not just guesses. They are comprehensive explanations that have been tested repeatedly, supported by multiple lines of evidence, and can predict new observations. Examples include the Theory of Evolution and the Cell Theory. Neither hypotheses nor theories are ever 'proven' in an absolute sense - science always remains open to new evidence and better explanations.",
    difficulty: 3,
    topic: "nature-of-science"
  },
  {
    subject: "biology",
    question: "Explain the role of mitochondria in cellular respiration.",
    answer: "Mitochondria are the cellular powerhouses where most ATP is produced through oxidative phosphorylation, using electron transport chains to convert energy from glucose breakdown into ATP.",
    wrongAnswers: [
      "Mitochondria are the cellular processing centers where most glucose is synthesized through phosphorylation, using transport proteins to convert ATP into stored chemical energy.",
      "Mitochondria are the cellular recycling units where most proteins are broken down through oxidative processes, using electron carriers to convert amino acids into usable ATP.",
      "Mitochondria are the cellular storage compartments where most carbohydrates are processed through fermentation, using anaerobic pathways to convert glucose into ATP."
    ],
    detail: "Mitochondria are complex organelles that play a crucial role in cellular energy production. The process occurs in several steps: First, glucose is broken down in the cytoplasm through glycolysis. The products then enter the mitochondria, where the citric acid cycle breaks them down further. Finally, the electron transport chain uses oxygen as the final electron acceptor to generate a proton gradient, which drives ATP synthesis through chemiosmosis. This process is much more efficient than anaerobic respiration (fermentation), producing up to 36 ATP molecules per glucose molecule compared to just 2 from fermentation. Mitochondria have their own DNA and are thought to have originated from ancient bacteria through endosymbiosis.",
    difficulty: 3,
    topic: "cell-biology"
  },
  {
    subject: "biology",
    question: "How does natural selection contribute to antibiotic resistance in bacteria?",
    answer: "When bacteria are exposed to antibiotics, individuals with random mutations conferring resistance survive and reproduce, passing these genes to offspring, leading to a resistant population over time.",
    wrongAnswers: [
      "When bacteria are exposed to antibiotics, they actively modify their genes through directed mutation processes to develop resistance, which they then pass to offspring through heredity.",
      "When bacteria encounter antibiotics, they acquire resistance genes from their environment and incorporate them into their genome, sharing these adaptations with their bacterial community.",
      "When bacteria face antibiotics, the stress triggers beneficial genetic changes that enhance survival capabilities, allowing them to develop and transmit resistance to future generations."
    ],
    detail: "Antibiotic resistance is a perfect example of natural selection in action. Bacterial populations naturally contain random genetic variations due to mutations. When antibiotics are present, bacteria with mutations that happen to provide resistance survive (this is called selective pressure), while others die. The surviving bacteria reproduce, passing these resistance genes to their offspring. Over time, the bacterial population becomes predominantly resistant. This is why completing prescribed antibiotic courses is crucial - partial treatments can leave some partially resistant bacteria alive, accelerating resistance development. Bacteria can also share resistance genes through horizontal gene transfer, spreading resistance between different bacterial species. This is not a directed or learned response - the mutations occur randomly before exposure to antibiotics.",
    difficulty: 4,
    topic: "genetics"
  },
  {
    subject: "biology",
    question: "Compare the key characteristics of plants and fungi.",
    answer: "Plants are autotrophs with cell walls made of cellulose and can photosynthesize, while fungi are heterotrophs with cell walls made of chitin and obtain nutrients through absorption.",
    wrongAnswers: [
      "Plants are heterotrophs with cell walls made of chitin and create energy through absorption, while fungi are autotrophs with cell walls made of cellulose and obtain nutrients through photosynthesis.",
      "Plants and fungi both create energy through photosynthesis using chloroplasts, but differ in that fungi have additional cellular mechanisms for breaking down and absorbing organic matter.",
      "Plants and fungi share the same basic cellular structure with cellulose walls and chloroplasts, but fungi have evolved additional metabolic pathways for decomposing organic materials."
    ],
    detail: "While plants and fungi were once classified together, they represent distinct kingdoms with fundamental differences in their biology. Plants are autotrophs, meaning they make their own food through photosynthesis using chloroplasts. Their cell walls contain cellulose, the same material found in paper and cotton. Fungi, however, are heterotrophs that must obtain nutrients from their environment. They do this through absorption, extending thread-like hyphae that secrete digestive enzymes and absorb the broken-down nutrients. Their cell walls contain chitin, the same material found in insect exoskeletons. Fungi play crucial roles as decomposers and can form beneficial relationships with plants through mycorrhizal associations. The color difference is secondary - while most plants are green due to chlorophyll, some parasitic plants lack chlorophyll, and some fungi can be brightly colored.",
    difficulty: 3,
    topic: "diversity"
  },
  {
    subject: "biology",
    question: "What is the role of decomposers in an ecosystem?",
    answer: "Decomposers break down dead organic matter, recycling nutrients back into the ecosystem and making them available for producers to use again.",
    wrongAnswers: [
      "Decomposers synthesize organic compounds from inorganic materials, storing nutrients in the ecosystem and making them available for consumers to use.",
      "Decomposers convert sunlight into chemical energy, transferring nutrients through the ecosystem and making them available for decomposition by other organisms.",
      "Decomposers filter inorganic materials from the environment, purifying nutrients in the ecosystem and making them available for primary producers to use."
    ],
    detail: "Decomposers are essential for ecosystem function, acting as nature's recyclers. They break down dead organisms, fallen leaves, waste products, and other organic matter into simpler inorganic compounds. This process releases nutrients like nitrogen, phosphorus, and carbon back into the ecosystem where they can be used by producers (mainly plants). Without decomposers, nutrients would remain locked in dead organic matter, eventually depleting the available nutrient pool for living organisms. Major decomposers include fungi, bacteria, and some invertebrates like earthworms. They also contribute to soil formation and structure. In addition to recycling nutrients, some decomposers form important symbiotic relationships with other organisms - for example, fungi forming mycorrhizal associations with plant roots to enhance nutrient uptake.",
    difficulty: 2,
    topic: "ecology"
  },
  {
    subject: "biology", 
    question: "How has CRISPR technology impacted genetic research and potential medical treatments?",
    answer: "CRISPR allows precise gene editing, enabling researchers to modify DNA sequences for studying gene function, developing disease treatments, and potentially correcting genetic disorders.",
    wrongAnswers: [
      "CRISPR enables complete genome replacement, allowing researchers to substitute entire DNA sequences for eliminating diseases, developing synthetic organisms, and rebuilding genetic systems.",
      "CRISPR facilitates genetic code translation, enabling researchers to convert DNA sequences into therapeutic proteins for treating diseases, enhancing immunity, and optimizing cellular function.",
      "CRISPR provides targeted gene suppression, allowing researchers to deactivate DNA sequences for controlling gene expression, preventing mutations, and blocking disease development."
    ],
    detail: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) has revolutionized genetic research by providing a precise, relatively simple, and cost-effective way to edit DNA. The technology uses a guide RNA to target specific DNA sequences and an enzyme (usually Cas9) to cut the DNA at that location. This allows researchers to remove, add, or modify genes with unprecedented accuracy. In research, CRISPR has enabled scientists to create better model organisms for studying diseases, understand gene function, and develop new crop varieties. In medicine, CRISPR shows promise for treating genetic disorders by correcting disease-causing mutations, engineering immune cells to fight cancer, and developing new antimicrobial treatments. However, its use also raises ethical concerns, particularly regarding human germline editing that could affect future generations. The technology continues to evolve, with newer versions offering greater precision and expanded capabilities.",
    difficulty: 4,
    topic: "science-tech"
  },
  {
    subject: "biology",
    question: "What is the primary purpose of a control group in a scientific experiment?",
    answer: "A control group provides a baseline for comparison by keeping all variables constant except the one being tested, allowing researchers to determine if observed effects are due to the experimental treatment.",
    wrongAnswers: [
      "A control group provides a secondary experimental condition by varying multiple variables simultaneously, allowing researchers to determine which combinations of factors produce the strongest effects.",
      "A control group creates a standardized testing environment by implementing identical procedures across all experimental groups, allowing researchers to validate their initial experimental hypothesis.",
      "A control group establishes experimental validity by testing alternative explanations to the hypothesis, allowing researchers to eliminate potential sources of experimental error."
    ],
    detail: "Control groups are fundamental to experimental design and the scientific method. They help scientists isolate cause-and-effect relationships by providing a basis for comparison. For example, in a drug trial, the control group receives a placebo while the experimental group receives the drug. All other conditions remain identical between groups. This design allows researchers to attribute any differences in outcomes specifically to the drug, rather than to other factors. Without a control group, it would be impossible to determine if observed effects were due to the treatment or to other variables. Controls can be positive (known to show an effect) or negative (known to show no effect), depending on the experiment's goals.",
    difficulty: 2,
    topic: "nature-of-science"
},
{
    subject: "biology",
    question: "How do peer review and replication contribute to scientific knowledge?",
    answer: "Peer review validates research methods and conclusions through expert evaluation, while replication confirms findings through independent reproduction, together strengthening confidence in scientific results.",
    wrongAnswers: [
      "Peer review confirms experimental data through computational analysis, while replication standardizes procedures through collaborative testing, together establishing permanent scientific facts.",
      "Peer review documents laboratory techniques through detailed protocols, while replication generates identical results through repeated testing, together proving scientific theories conclusively.",
      "Peer review certifies research funding through institutional review, while replication validates publication merit through duplicate studies, together establishing scientific consensus."
    ],
    detail: "The peer review and replication processes are essential safeguards in science. Peer review involves experts critically evaluating research methods, data analysis, and conclusions before publication. This process helps identify potential flaws, biases, or alternative interpretations. Replication involves other scientists independently conducting the same experiment to see if they get similar results. Failed replications don't necessarily invalidate the original research but may suggest limitations or conditions affecting the results. Together, these processes help science self-correct and build reliable knowledge over time. However, both processes face challenges, including publication bias towards positive results and the 'replication crisis' in some fields.",
    difficulty: 3,
    topic: "nature-of-science"
},
{
  subject: "biology",
  question: "What role do models play in scientific understanding?",
  answer: "Scientific models provide simplified representations of complex systems, helping researchers visualize relationships, make predictions, and test hypotheses through abstract or physical simulations.",
  wrongAnswers: [
    "Scientific models create exact duplicates of natural phenomena, helping researchers document observations, establish facts, and demonstrate proven relationships through precise replication.",
    "Scientific models generate mathematical proofs of scientific theories, helping researchers validate experiments, confirm predictions, and establish natural laws through computational analysis.",
    "Scientific models produce permanent explanations of observed phenomena, helping researchers finalize theories, validate hypotheses, and document proven mechanisms through detailed recreation."
  ],
  detail: "Models are essential tools in science, from physical models like DNA's double helix to conceptual models like food webs to mathematical models of population growth. Models help scientists understand complex systems by simplifying them to their key components. However, all models have limitations - they are approximations of reality, not perfect representations. For example, the Bohr model of the atom helped explain atomic behavior but was later refined by quantum mechanical models. Good models are useful because they can generate testable predictions, explain observations, and guide research, even while acknowledging their simplifications. Scientists often use multiple models of the same phenomenon, choosing the most appropriate one for their specific research question.",
  difficulty: 3,
  topic: "nature-of-science"
},
{
  subject: "biology",
  question: "How does correlation differ from causation in scientific research?",
  answer: "Correlation identifies relationships between variables that change together, while causation demonstrates that changes in one variable directly cause changes in another through controlled experimentation.",
  wrongAnswers: [
    "Correlation proves direct relationships between variables through statistical analysis, while causation suggests possible connections that require further testing through observational studies.",
    "Correlation represents temporary associations between factors in complex systems, while causation identifies random relationships that appear significant through repeated observation.",
    "Correlation measures the strength of proven cause-effect relationships, while causation describes theoretical connections between variables that cannot be directly tested."
  ],
  detail: "Understanding the distinction between correlation and causation is crucial for scientific literacy. Correlation means two variables tend to change together, but this doesn't necessarily mean one causes the other. For example, ice cream sales and drowning deaths both increase in summer, but ice cream doesn't cause drowning - both are correlated with warmer weather. Establishing causation requires controlled experiments that isolate variables and rule out alternative explanations. Sometimes, ethical or practical constraints make controlled experiments impossible, so scientists must rely on multiple lines of correlational evidence and natural experiments. The phrase 'correlation does not imply causation' reminds us to be cautious about assuming cause-effect relationships without proper evidence.",
  difficulty: 3,
  topic: "nature-of-science"
},
{
  subject: "biology",
  question: "Why is sample size important in scientific studies?",
  answer: "Larger sample sizes increase statistical reliability by reducing the impact of random variation, making results more representative of the whole population and strengthening research conclusions.",
  wrongAnswers: [
    "Larger sample sizes guarantee experimental accuracy by eliminating all sources of error, making results perfectly accurate and ensuring research conclusions are absolutely certain.",
    "Larger sample sizes validate research hypotheses by proving theoretical predictions, making results mathematically perfect and confirming predetermined experimental outcomes.",
    "Larger sample sizes standardize experimental procedures by removing individual differences, making results completely uniform and producing identical outcomes across all trials."
  ],
  detail: "Sample size is a critical factor in research design that affects the reliability and generalizability of results. Small samples can be misleading because they're more susceptible to random variation and outliers. For example, flipping a coin 10 times might give 7 heads and 3 tails (70% heads), but flipping it 1000 times will likely give closer to 50% heads. In biological studies, larger samples help account for natural variation between individuals. However, practical constraints like cost, time, and availability of subjects often limit sample size. Statistical power analysis helps researchers determine the minimum sample size needed to detect meaningful effects. While larger samples generally provide more reliable results, quality of data collection and appropriate sampling methods remain crucial.",
  difficulty: 2,
  topic: "nature-of-science"
}
];

// Helper function to get topic icons
function getTopicIcon(topic) {
  const icons = {
    'nature-of-science': '🔬',
    'cell-biology': '🧫',
    'genetics': '🧬',
    'diversity': '🦋',
    'ecology': '🌍',
    'science-tech': '💻',
    'mixed': '🎲'
  };
  return icons[topic] || '📚';
}

export const BIOLOGY_TOPICS = {
  // Include mixed topic by default
  'mixed': {
    title: 'Mixed Topics',
    icon: getTopicIcon('mixed')
  },
  ...questions
    .filter(q => q.subject === "biology")
    .reduce((topics, question) => {
      if (!topics[question.topic]) {
        const topicTitles = {
          'nature-of-science': 'Nature of Science & Scientific Inquiry',
          'cell-biology': 'Cellular and Molecular Biology',
          'genetics': 'Genetics and Evolution',
          'diversity': 'Diversity of Life and Organismal Biology',
          'ecology': 'Ecology and Environment',
          'science-tech': 'Science, Technology, and Social Impact',
          'mixed': 'Mixed Topics'
        };
        
        topics[question.topic] = {
          title: topicTitles[question.topic],
          icon: getTopicIcon(question.topic)
        };
      }
      return topics;
    }, {})
};