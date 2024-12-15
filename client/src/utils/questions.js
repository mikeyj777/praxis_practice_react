export const questions = [
  /* NOTES TO CLAUDE - the wrong answers should have roughly the same number of words as the right answer. 
     difficulty level - 1 is easiest.  5 is hardest.
     wrong answers should have roughly the same length as right answers.
  */ 
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
},
{
  subject: "biology",
  question: "What is the primary function of the plasma membrane in a cell?",
  answer: "The plasma membrane regulates material movement into and out of the cell through selective permeability, maintaining cellular homeostasis while allowing necessary substance transport.",
  wrongAnswers: [
    "The plasma membrane generates cellular energy through active protein channels, controlling metabolic processes while facilitating continuous nutrient production within the cell.",
    "The plasma membrane synthesizes essential proteins through membrane-bound ribosomes, maintaining cellular structure while coordinating all internal molecular processes.",
    "The plasma membrane stores genetic information through specialized phospholipid structures, controlling cell division while protecting DNA from environmental damage."
  ],
  detail: "The plasma membrane, or cell membrane, is a phospholipid bilayer with embedded proteins that forms the boundary of all cells. Its selective permeability is crucial for life, allowing cells to maintain different internal and external concentrations of substances. Transport across the membrane occurs through various mechanisms: passive transport (diffusion and facilitated diffusion) requires no energy and moves substances down their concentration gradients, while active transport uses ATP to move substances against their concentration gradients. The membrane's fluid mosaic model explains how its structure enables both stability and flexibility, with phospholipids providing the basic barrier and proteins serving as channels, pumps, receptors, and structural elements.",
  difficulty: 2,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "How do enzymes facilitate biochemical reactions in cells?",
  answer: "Enzymes lower activation energy by providing specific substrate binding sites and stabilizing transition states, dramatically increasing reaction rates without being consumed in the process.",
  wrongAnswers: [
    "Enzymes create chemical energy by breaking down cellular molecules and releasing stored ATP, dramatically increasing energy availability without requiring oxygen.",
    "Enzymes generate new molecules by combining random substrates and forming permanent bonds, dramatically increasing cellular material without depleting resources.",
    "Enzymes transfer genetic information by copying DNA sequences and modifying proteins, dramatically increasing cellular diversity without changing the original code."
  ],
  detail: "Enzymes are biological catalysts that are essential for life, making possible in milliseconds reactions that might otherwise take years. They work by temporarily binding to substrates at their active sites, which have shapes and chemical properties specifically complementary to their target molecules. This binding helps bring reactants together and stabilizes the transition state, reducing the activation energy needed for the reaction. Enzyme activity is affected by temperature, pH, substrate concentration, and the presence of inhibitors or activators. Most enzymes are proteins, though some RNA molecules (ribozymes) can also act as enzymes. The lock-and-key and induced fit models help explain enzyme specificity, while allosteric regulation allows cells to control enzyme activity based on their needs.",
  difficulty: 3,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What role does ATP synthase play in cellular respiration?",
  answer: "ATP synthase harnesses the energy from proton gradients to mechanically rotate and combine ADP with phosphate, producing ATP through chemiosmosis in mitochondria.",
  wrongAnswers: [
    "ATP synthase breaks down glucose molecules to extract chemical energy and combine oxygen with hydrogen, producing ATP through direct substrate conversion.",
    "ATP synthase transfers electrons through membrane proteins to split water molecules, producing ATP through photochemical reactions in chloroplasts.",
    "ATP synthase transforms nuclear energy into chemical bonds to merge carbon dioxide with water, producing ATP through radioactive decay processes."
  ],
  detail: "ATP synthase is a remarkable molecular machine that acts as the final step in cellular respiration's energy production. Located in the inner mitochondrial membrane (and chloroplast thylakoid membrane in plants), it consists of two main parts: the F0 portion embedded in the membrane and the F1 portion extending into the matrix. The enzyme works like a turbine powered by protons. The electron transport chain creates a proton gradient across the membrane, and as these protons flow through ATP synthase, they cause it to rotate. This mechanical rotation forces ADP and phosphate together to form ATP. This process, called chemiosmosis, produces most of a cell's ATP, making ATP synthase crucial for cellular energy production.",
  difficulty: 4,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "How do vesicles contribute to cellular transport and organization?",
  answer: "Vesicles transport materials between cellular compartments by budding off from source membranes and fusing with target membranes, maintaining organelle identity and directing protein trafficking.",
  wrongAnswers: [
    "Vesicles generate new cellular proteins by combining amino acids and ribosomes, maintaining protein production and directing metabolic processes in the cytoplasm.",
    "Vesicles create energy storage compartments by synthesizing lipids and carbohydrates, maintaining fuel reserves and directing nutrient distribution throughout cells.",
    "Vesicles protect genetic material by isolating DNA and RNA molecules, maintaining chromosome structure and directing gene expression in the nucleus."
  ],
  detail: "Vesicles are small, membrane-bounded compartments that play crucial roles in cellular transport and organization. They are essential for the secretory pathway, moving proteins from the endoplasmic reticulum through the Golgi apparatus and to their final destinations. Vesicles also participate in endocytosis, bringing materials into the cell, and exocytosis, releasing materials from the cell. The formation of vesicles involves specific proteins like clathrin and COPI/COPII coats, while their targeting and fusion require SNARE proteins and other molecular markers. This system allows cells to maintain distinct organelle identities while enabling communication between compartments. Disorders in vesicular transport can lead to various diseases, highlighting the importance of this cellular machinery.",
  difficulty: 3,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the significance of the cell cycle checkpoints?",
  answer: "Cell cycle checkpoints monitor critical conditions and halt progression if problems are detected, ensuring accurate DNA replication and chromosome segregation during cell division.",
  wrongAnswers: [
    "Cell cycle checkpoints generate new cellular materials and initiate protein synthesis, ensuring continuous growth and development during metabolic processes.",
    "Cell cycle checkpoints regulate energy production and distribute ATP molecules, ensuring efficient metabolism and respiration during cellular activities.",
    "Cell cycle checkpoints coordinate membrane transport and direct vesicle movement, ensuring proper organization and communication during cellular processes."
  ],
  detail: "Cell cycle checkpoints are crucial quality control mechanisms that prevent cells from proceeding through division if conditions aren't optimal. There are three main checkpoints: G1 (checking cell size and environmental conditions), G2 (verifying DNA replication completion and cell growth), and the metaphase checkpoint (ensuring proper chromosome attachment to spindle fibers). These checkpoints involve complex molecular pathways, including cyclins, cyclin-dependent kinases, and regulatory proteins like p53. If problems are detected, checkpoint proteins can halt the cycle and activate repair mechanisms or trigger apoptosis if damage is too severe. Dysfunction in checkpoint regulation is a hallmark of cancer, leading to uncontrolled cell division. Understanding these checkpoints has been crucial for developing cancer treatments.",
  difficulty: 3,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the basic structure of a cell membrane?",
  answer: "A cell membrane consists of a phospholipid bilayer with embedded proteins, creating a flexible barrier that separates the cell from its environment.",
  wrongAnswers: [
    "A cell membrane consists of a rigid carbohydrate layer with floating lipids, creating a solid barrier that permanently seals the cell interior.",
    "A cell membrane consists of a protein matrix with scattered phosphates, creating a static barrier that filters all molecules by size only.",
    "A cell membrane consists of a single lipid layer with fixed channels, creating a permanent barrier that controls all cellular movement."
  ],
  detail: "The cell membrane, also called the plasma membrane, follows the fluid mosaic model. The phospholipid bilayer forms because phospholipids are amphipathic - they have hydrophilic (water-loving) heads and hydrophobic (water-fearing) tails. The membrane is fluid, allowing components to move laterally, which is essential for cell function. Proteins embedded in or attached to the membrane serve various functions including transport, cell recognition, and enzymatic activity. Cholesterol molecules help maintain membrane fluidity. This structure allows cells to maintain their internal environment while still interacting with their surroundings.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the main function of the nucleus in a cell?",
  answer: "The nucleus stores and protects genetic material in the form of DNA, controlling gene expression and chromosome organization during cell division.",
  wrongAnswers: [
    "The nucleus produces energy through cellular respiration, controlling metabolism and oxygen consumption during cellular activities.",
    "The nucleus breaks down waste products from the cell, controlling toxin removal and molecule recycling during cellular processes.",
    "The nucleus synthesizes all proteins for the cell, controlling nutrient processing and enzyme production during growth phases."
  ],
  detail: "The nucleus is often called the control center of the cell because it contains the cell's genetic instructions in the form of DNA. It's surrounded by a double membrane called the nuclear envelope, which has nuclear pores that regulate the movement of molecules between the nucleus and cytoplasm. Inside the nucleus, DNA is organized into chromosomes, and the nucleolus is where ribosomal RNA is synthesized. During cell division, the nuclear envelope breaks down to allow chromosome separation. The nucleus also contains enzymes and proteins necessary for DNA replication, transcription, and the initial stages of gene expression.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What are ribosomes and what do they do?",
  answer: "Ribosomes are cellular structures that read messenger RNA and assemble amino acids into proteins, serving as the cell's protein production factories.",
  wrongAnswers: [
    "Ribosomes are cellular structures that create new DNA molecules and copy genetic material, serving as the cell's genome duplicators.",
    "Ribosomes are cellular structures that store energy and produce ATP, serving as the cell's power generation centers.",
    "Ribosomes are cellular structures that break down old proteins and recycle nutrients, serving as the cell's waste management."
  ],
  detail: "Ribosomes are complex molecular machines made of both protein and RNA (called ribosomal RNA or rRNA). They can be found free in the cytoplasm or attached to the endoplasmic reticulum. During protein synthesis, ribosomes read the genetic instructions carried by messenger RNA (mRNA) and use transfer RNA (tRNA) to bring in the correct amino acids, linking them together in the right order. This process is called translation. Ribosomes can work individually or in groups called polyribosomes when producing multiple copies of the same protein. They are essential for cell survival, which is why many antibiotics target bacterial ribosomes.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the role of the cytoplasm in cells?",
  answer: "Cytoplasm provides a fluid environment where cellular components float and move, supporting chemical reactions and transport within the cell.",
  wrongAnswers: [
    "Cytoplasm generates electrical signals and nerve impulses, coordinating cellular communication and response to stimuli.",
    "Cytoplasm produces new cell membranes and organelles, directing growth and division of cellular structures.",
    "Cytoplasm stores genetic information and chromosomes, protecting DNA during cellular reproduction."
  ],
  detail: "Cytoplasm is the gel-like substance that fills the cell between the nuclear envelope and cell membrane. It consists mainly of water (about 80%) along with dissolved nutrients, ions, proteins, and other molecules. The cytoplasm helps distribute materials throughout the cell and provides an appropriate environment for many cellular reactions. It contains the cytosol (the fluid portion) and organelles suspended within it. The cytoplasm's consistency can change through cytoplasmic streaming, which helps move materials around the cell. It also contains a network of protein fibers called the cytoskeleton that helps maintain cell shape and assists with internal movement of materials.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the basic function of the cell wall in plant cells?",
  answer: "The cell wall provides structural support and protection, maintaining cell shape and preventing over-expansion when the cell takes in water.",
  wrongAnswers: [
    "The cell wall produces energy through photosynthesis, capturing sunlight and converting it into glucose for the plant.",
    "The cell wall controls genetic expression, regulating which genes are active during plant development and growth.",
    "The cell wall creates new proteins, assembling amino acids into essential enzymes for plant survival."
  ],
  detail: "The plant cell wall is a rigid layer outside the cell membrane composed primarily of cellulose fibers. Unlike the cell membrane, it is relatively inflexible and porous. The primary cell wall forms during cell growth and can expand, while secondary cell walls develop in some cells after growth is complete, providing additional strength. The cell wall's strength helps plants stay upright without skeletal systems and prevents cells from bursting due to osmotic pressure when they take up water. It also helps protect against pathogens and allows for pressure to build up inside cells (turgor pressure), which is essential for plant structure and growth.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the basic structure of a cell membrane?",
  answer: "A cell membrane consists of a phospholipid bilayer with embedded proteins, creating a flexible barrier that separates the cell from its environment.",
  wrongAnswers: [
    "A cell membrane consists of a rigid carbohydrate layer with floating lipids, creating a solid barrier that permanently seals the cell interior.",
    "A cell membrane consists of a protein matrix with scattered phosphates, creating a static barrier that filters all molecules by size only.",
    "A cell membrane consists of a single lipid layer with fixed channels, creating a permanent barrier that controls all cellular movement."
  ],
  detail: "The cell membrane, also called the plasma membrane, follows the fluid mosaic model. The phospholipid bilayer forms because phospholipids are amphipathic - they have hydrophilic (water-loving) heads and hydrophobic (water-fearing) tails. The membrane is fluid, allowing components to move laterally, which is essential for cell function. Proteins embedded in or attached to the membrane serve various functions including transport, cell recognition, and enzymatic activity. Cholesterol molecules help maintain membrane fluidity. This structure allows cells to maintain their internal environment while still interacting with their surroundings.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the main function of the nucleus in a cell?",
  answer: "The nucleus stores and protects genetic material in the form of DNA, controlling gene expression and chromosome organization during cell division.",
  wrongAnswers: [
    "The nucleus produces energy through cellular respiration, controlling metabolism and oxygen consumption during cellular activities.",
    "The nucleus breaks down waste products from the cell, controlling toxin removal and molecule recycling during cellular processes.",
    "The nucleus synthesizes all proteins for the cell, controlling nutrient processing and enzyme production during growth phases."
  ],
  detail: "The nucleus is often called the control center of the cell because it contains the cell's genetic instructions in the form of DNA. It's surrounded by a double membrane called the nuclear envelope, which has nuclear pores that regulate the movement of molecules between the nucleus and cytoplasm. Inside the nucleus, DNA is organized into chromosomes, and the nucleolus is where ribosomal RNA is synthesized. During cell division, the nuclear envelope breaks down to allow chromosome separation. The nucleus also contains enzymes and proteins necessary for DNA replication, transcription, and the initial stages of gene expression.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What are ribosomes and what do they do?",
  answer: "Ribosomes are cellular structures that read messenger RNA and assemble amino acids into proteins, serving as the cell's protein production factories.",
  wrongAnswers: [
    "Ribosomes are cellular structures that create new DNA molecules and copy genetic material, serving as the cell's genome duplicators.",
    "Ribosomes are cellular structures that store energy and produce ATP, serving as the cell's power generation centers.",
    "Ribosomes are cellular structures that break down old proteins and recycle nutrients, serving as the cell's waste management."
  ],
  detail: "Ribosomes are complex molecular machines made of both protein and RNA (called ribosomal RNA or rRNA). They can be found free in the cytoplasm or attached to the endoplasmic reticulum. During protein synthesis, ribosomes read the genetic instructions carried by messenger RNA (mRNA) and use transfer RNA (tRNA) to bring in the correct amino acids, linking them together in the right order. This process is called translation. Ribosomes can work individually or in groups called polyribosomes when producing multiple copies of the same protein. They are essential for cell survival, which is why many antibiotics target bacterial ribosomes.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the role of the cytoplasm in cells?",
  answer: "Cytoplasm provides a fluid environment where cellular components float and move, supporting chemical reactions and transport within the cell.",
  wrongAnswers: [
    "Cytoplasm generates electrical signals and nerve impulses, coordinating cellular communication and response to stimuli.",
    "Cytoplasm produces new cell membranes and organelles, directing growth and division of cellular structures.",
    "Cytoplasm stores genetic information and chromosomes, protecting DNA during cellular reproduction."
  ],
  detail: "Cytoplasm is the gel-like substance that fills the cell between the nuclear envelope and cell membrane. It consists mainly of water (about 80%) along with dissolved nutrients, ions, proteins, and other molecules. The cytoplasm helps distribute materials throughout the cell and provides an appropriate environment for many cellular reactions. It contains the cytosol (the fluid portion) and organelles suspended within it. The cytoplasm's consistency can change through cytoplasmic streaming, which helps move materials around the cell. It also contains a network of protein fibers called the cytoskeleton that helps maintain cell shape and assists with internal movement of materials.",
  difficulty: 1,
  topic: "cell-biology"
},
{
  subject: "biology",
  question: "What is the basic function of the cell wall in plant cells?",
  answer: "The cell wall provides structural support and protection, maintaining cell shape and preventing over-expansion when the cell takes in water.",
  wrongAnswers: [
    "The cell wall produces energy through photosynthesis, capturing sunlight and converting it into glucose for the plant.",
    "The cell wall controls genetic expression, regulating which genes are active during plant development and growth.",
    "The cell wall creates new proteins, assembling amino acids into essential enzymes for plant survival."
  ],
  detail: "The plant cell wall is a rigid layer outside the cell membrane composed primarily of cellulose fibers. Unlike the cell membrane, it is relatively inflexible and porous. The primary cell wall forms during cell growth and can expand, while secondary cell walls develop in some cells after growth is complete, providing additional strength. The cell wall's strength helps plants stay upright without skeletal systems and prevents cells from bursting due to osmotic pressure when they take up water. It also helps protect against pathogens and allows for pressure to build up inside cells (turgor pressure), which is essential for plant structure and growth.",
  difficulty: 1,
  topic: "cell-biology"
},

];