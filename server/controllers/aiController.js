import ai from "../config/ai.js";
import Resume from "../models/Resume.js";

// controller for enhancing a resume's professional summary
// POST: /api/ai/enhancing-pro-sum

export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    const prompt = `
You are an expert resume writer.

Enhance the following professional summary.

Requirements:
- ATS friendly
- Professional tone
- 2-4 sentences
- Keep only the enhanced summary.
- No explanation.

Summary:

${userContent}
`;

    console.log("Model:", process.env.GEMINI_MODEL);
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return res.status(200).json({
      enhancedContent: response.text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc

export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    const prompt = `
Rewrite the following resume job description.

Requirements:
- ATS friendly
- Strong action verbs
- Professional
- Keep only the rewritten text.

${userContent}
`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: prompt,
    });

    return res.json({
      enhancedContent: response.text,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: error.message,
    });
  }
};

// controller for uploading a resume to the database
// POST: /api/ai/upload-resume

export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const systemPrompt =
      "You are an expert AI Agent to extract to data from resume.";

    const userPrompt = `extract data from this resume: ${resumeText}
    Provide data in the following JSON format with no additional text before or 
    after: 

    {
    professional_summary: {type: String, default: ""},
    skills: [{type: String}],
    personal_info: {
        image: {type: String, default: ""},
        full_name: {type: String, default: ""},
        email: {type: String, default: ""},
        phone: {type: String, default: ""},
        location: {type: String, default: ""},
        linkedin: {type: String, default: ""},
        website: {type: String, default: ""},
    },
    experience: [
        {
            company: {type: String},
            position: {type: String},
            start_date: {type: String},
            end_date: {type: String},
            description: {type: String},
            is_current: {type: Boolean},
        }
    ],
    project: [
        {
            name: {type: String},
            type: {type: String},
            description: {type: String},
        }
    ],
    education: [
        {
            institution: {type: String},
            degree: {type: String},
            field: {type: String},
            graduation_date: {type: String},
            gpa: {type: String},
        }
    ],
    }`;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL,
      contents: `${systemPrompt}

${userPrompt}`,
    });

    const extractedData = response.text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();
    const parsedData = JSON.parse(extractedData);
    const newResume = await Resume.create({ userId, title, ...parsedData });

    res.json({ resumeId: newResume._id });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
