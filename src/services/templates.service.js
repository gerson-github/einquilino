import request from "./api";

export async function getTemplate(templateId) {
  // example endpoint: /templates/:id
  return await request(`/templates/${templateId}`);
}
