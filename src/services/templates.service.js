import request from "./api";

export async function getTemplates(id) {
  console.log("step1 getTemplates");

  const response = await fetch(`/templates/${id}`);

  console.log("step2 getTemplates");
  console.log(response);

  if (!response.ok) throw new Error("Failed to fetch templates");
  const data = await response.json();

  return data; // apenas os valores internos
}
