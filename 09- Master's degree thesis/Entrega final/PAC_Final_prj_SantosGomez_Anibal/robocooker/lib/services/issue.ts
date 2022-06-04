import { Issue } from "@/models/issue";
import fetcher from "@/utils/fetcher";
import toast from "react-hot-toast";

export const onPostIssueService = async (issue: Issue) => {
  try {
    const response = await fetcher(`/api/issues`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ issue }),
    });
    toast.success("Tu petición ha sido enviada");
    return response;
  } catch (error) {
    toast.error("Ocurrió un error al enviar tu petición");
    throw error;
  }
};
