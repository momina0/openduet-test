// Feeds sample outgoing-email arguments to OpenBot's deterministic content check.
import { inspectToolArguments } from "../upstream/openbot/server/src/plugins/content-governance";

const cases: Record<string, Record<string, unknown>> = {
  "card number + CVC": { to: ["ana@example.com"], body: "Charge card 4242 4242 4242 4242, exp 12/29, CVC 123." },
  "health detail": { to: ["ana@example.com"], body: "I'm out Friday, my HIV test results came back and I need rest." },
  "IBAN": { to: ["ana@example.com"], body: "Wire it to GB33BUKB20201555555555." },
  "OpenAI-style key in body": { to: ["ana@example.com"], body: `Use ${"sk"}-proj-${"x".repeat(32)} for the API.` },
  "GitHub token in body": { to: ["ana@example.com"], body: `token ${"gh"}p_${"x".repeat(36)}` },
  "field named password": { to: ["ana@example.com"], body: "hi", password: "hunter2" },
};
for (const [name, args] of Object.entries(cases)) {
  const r = inspectToolArguments(args);
  console.log(`${name.padEnd(26)} ${r.safe ? "passes (not flagged)" : "BLOCKED: " + r.findings.map((f) => f.category).join(",")}`);
}
