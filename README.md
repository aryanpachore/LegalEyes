📖 About The Project

LegalEyes is a Capstone Project designed to democratize legal understanding. Much like how platforms like "Resume Worded" optimize professional profiles, LegalEyes breaks down complex legal documents into clear, actionable insights.

Legal jargon is often a barrier for the common person. Our solution leverages a custom Machine Learning model, LawSum, to summarize documents and an interactive chatbot to answer specific questions about your uploaded files (e.g., "What is the notice period in this agreement?").

🔄 System Workflow

The following diagram illustrates how a document travels from the user dashboard through our custom ML pipeline and back as a simplified summary.
<img width="4302" height="2940" alt="LegalEyes Workflow" src="https://github.com/user-attachments/assets/d8221182-cb4b-4b3f-a742-6cfdfa545312" />


✨ Key Features

1. 📄 Intelligent Summarization (LawSum)

Unlike generic summarizers, our core engine is powered by LawSum, a custom ML model trained specifically on a comprehensive Indian Legal Dataset. It understands the nuance of Indian Penal Code sections, acts, and formal legal notices.

2. 🤖 Interactive Legal Chatbot

Have a question about a specific clause? Upload your document and ask the chatbot.

User: "Does this rent agreement allow pets?"

LegalEyes: "According to Clause 4.2, pets are allowed with prior written consent from the landlord."

3. 🗂️ Document Management Dashboard

A centralized hub to store, organize, and review all your legal notices, contracts, and drafts.

🧠 The "LawSum" Model

The heart of LegalEyes is LawSum.

Dataset: Trained on thousands of Indian legal judgments, contracts, and constitution articles.

Objective: To extract key entities (Dates, Parties, Monetary Amounts, Obligations) rather than just shortening text.

Tech: [Insert your specific tech here, e.g., Fine-tuned BERT/T5/Llama on Indian Legal text]
