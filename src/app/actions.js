"use server";

export async function getData(_state, _formData) {
  return { letters: ["A", "B", "C", "D"] };
}
