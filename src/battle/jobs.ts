import { Job } from "../engine/battle/job";

export const engineer = new Job(
  "Engineer",
  "master of code",
  "Debilitating Anxiety",
  5, 0, 4, 1
);

export const productManager = new Job(
  "Product Manager",
  "master of product",
  "Jira Mastery",
  3, 1, 5, 3
);

export const salesperson = new Job(
  "Salesperson",
  "master of sales",
  "Smooth Talkin'",
  2, 5, 3, 4
);

export const newHire = new Job(
  "New Hire",
  "master of none",
  "Core Values Alignment",
  0, 0, 0, 0
);
