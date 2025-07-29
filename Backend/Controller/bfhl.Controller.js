import { processData } from "../services/bfhlService.js";
import { formatResponse } from "../Utils/responseFormatter.js";
import { USER_INFO } from "../Constants/userInfo.js";

export const handleBFHL = (req, res) => {
  try {
    const { data } = req.body;

    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const processed = processData(data);
    const response = formatResponse(processed, USER_INFO);
    return res.status(200).json(response);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ is_success: false, message: "Server error" });
  }
};
