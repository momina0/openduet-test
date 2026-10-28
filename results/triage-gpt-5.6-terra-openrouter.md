# Triage eval

Run 2026-10-28T13:18:15.085Z against 62 labelled messages (27 needs_you, 35 can_wait). Model: openai/gpt-5.6-terra.

| Measure | Value |
| --- | --- |
| Precision for needs_you | 96.4% (27 of 28 flagged were right) |
| Recall for needs_you | 100.0% (27 of 27 that needed her were flagged) |
| Accuracy | 98.4% of 62 decided |
| Decided by rules, no model call | 12 of 62, 0 wrong |
| Not decided (model error) | 0 |

## Disagreements
- **c29** "Reminder: Dentist @ Fri Oct 23 9am": labelled can_wait, got needs_you by model:openai/gpt-5.6-terra. Its reason: "Maya has a dentist appointment tomorrow, Friday October 23 at 9am.". Label's reason: "A reminder of an appointment already on her calendar."

## Every verdict

| id | label | verdict | decided by | reason |
| --- | --- | --- | --- | --- |
| c01 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c02 | can_wait | can_wait | model:openai/gpt-5.6-terra | Adobe confirms a $59.99 Creative Cloud autopay payment already completed. |
| c03 | can_wait | can_wait | model:openai/gpt-5.6-terra | City Power will automatically pay the $142.10 bill on November 5, requiring no action from Maya. |
| c04 | can_wait | can_wait | model:openai/gpt-5.6-terra | Clayworks Supply confirms order CW-8812 has shipped and is expected Monday, October 26. |
| c05 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c06 | can_wait | can_wait | model:openai/gpt-5.6-terra | Brett from RankRise is making unsolicited SEO outreach and asks for 15 minutes this week. |
| c07 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c08 | can_wait | can_wait | rule:auto-reply | An automatic reply, such as an out-of-office. |
| c09 | can_wait | can_wait | rule:calendar-response | Someone answered an invitation; nothing to do. |
| c10 | can_wait | can_wait | model:openai/gpt-5.6-terra | Sam sent an updated wholesale price list for Maya’s records and explicitly says no action is needed. |
| c11 | can_wait | can_wait | model:openai/gpt-5.6-terra | Jamie Wu confirms the mugs arrived and thanks Maya, with no request or action needed. |
| c12 | can_wait | can_wait | model:openai/gpt-5.6-terra | Clay Collective's weekly digest is informational and requires no action from Maya. |
| c13 | can_wait | can_wait | model:openai/gpt-5.6-terra | Coastal Bank's automated notice only says the October statement for account ending 4410 is available online. |
| c14 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c15 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c16 | can_wait | can_wait | model:openai/gpt-5.6-terra | Stripe confirms Hearth & Co paid invoice #0091; funds will arrive in two business days. |
| c17 | can_wait | can_wait | model:openai/gpt-5.6-terra | Elena Ruiz requests speckled mug care instructions but explicitly says there is no rush. |
| c18 | can_wait | can_wait | model:openai/gpt-5.6-terra | Leo confirms he and Sam have market logistics handled; Maya is only copied. |
| c19 | can_wait | can_wait | model:openai/gpt-5.6-terra | ParcelGo is requesting optional feedback about a recent delivery, with no action deadline. |
| c20 | can_wait | can_wait | model:openai/gpt-5.6-terra | Square's monthly POS product update is a newsletter and requires no action from Maya. |
| c21 | can_wait | can_wait | model:openai/gpt-5.6-terra | Talent Partners is sending unsolicited recruitment outreach for a Senior Product Designer role. |
| c22 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c23 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c24 | can_wait | can_wait | model:openai/gpt-5.6-terra | Clayworks Supply confirms the porcelain order is already placed and scheduled to arrive October 28. |
| c25 | can_wait | can_wait | model:openai/gpt-5.6-terra | This is a suspected phishing message requesting Maya’s password, so no action should be taken. |
| c26 | can_wait | can_wait | model:openai/gpt-5.6-terra | Updates@freightdeals.example contains instructions aimed at an AI assistant, not a legitimate request for Maya. |
| c27 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c28 | can_wait | can_wait | model:openai/gpt-5.6-terra | Priya Shah confirms the Q2 return was filed and says nothing is needed from Maya. |
| c29 | can_wait | needs_you | model:openai/gpt-5.6-terra | Maya has a dentist appointment tomorrow, Friday October 23 at 9am. |
| c30 | can_wait | can_wait | model:openai/gpt-5.6-terra | Slack summary says Sam reported the kiln is cooling and Leo replied thanks; no action or question for Maya. |
| c31 | can_wait | can_wait | model:openai/gpt-5.6-terra | Chris Park is only acknowledging receipt of Maya's invoice, with no request or action needed. |
| c32 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c33 | can_wait | can_wait | model:openai/gpt-5.6-terra | Art Alliance's automated receipt confirms Maya's $50 donation was already made. |
| c34 | can_wait | can_wait | rule:bulk | Bulk mail: a newsletter, promotion or digest. |
| c35 | can_wait | can_wait | model:openai/gpt-5.6-terra | Clayworks Supply announces a 4% stoneware price increase effective January 1; current orders are unaffected. |
| n01 | needs_you | needs_you | model:openai/gpt-5.6-terra | Ana at Hearth & Co needs Maya to confirm Friday shipment of 120 mugs by end of day today. |
| n02 | needs_you | needs_you | model:openai/gpt-5.6-terra | Dev Patel says the kiln will remain out of service until a technician visit Monday morning. |
| n03 | needs_you | needs_you | model:openai/gpt-5.6-terra | Northline Insurance requires Maya to review and accept or change studio policy STU-44120 before 11:59pm today. |
| n04 | needs_you | needs_you | model:openai/gpt-5.6-terra | Sam Ruiz needs Maya’s approval today to book a train for Friday off. |
| n05 | needs_you | needs_you | model:openai/gpt-5.6-terra | Greenway Properties needs Maya to sign the Unit 4B lease renewal by Oct 23 or it returns to market. |
| n06 | needs_you | needs_you | model:openai/gpt-5.6-terra | Stripe says Maya must update the declined $640 Clayworks Supply payment method within 48 hours to prevent account suspension. |
| n07 | needs_you | needs_you | model:openai/gpt-5.6-terra | Coastal Bank needs Maya to verify the $2,340 KILNMART ONLINE charge promptly. |
| n08 | needs_you | needs_you | model:openai/gpt-5.6-terra | Jordan Lee reports two cracked bowls from order #1038 and requests a refund or replacements. |
| n09 | needs_you | needs_you | model:openai/gpt-5.6-terra | Priya Shah needs Maya's sign-off on the Q3 VAT return by Thursday evening for Friday filing. |
| n10 | needs_you | needs_you | model:openai/gpt-5.6-terra | Leah Gold requests Marlow samples by Tuesday for Golden Hour’s buying meeting. |
| n11 | needs_you | needs_you | model:openai/gpt-5.6-terra | Ana Pereira moved the Hearth & Co studio visit to today from 3–4pm, requiring Maya’s attendance response. |
| n12 | needs_you | needs_you | model:openai/gpt-5.6-terra | Rosa needs Maya's reply by end of day on substituting Oat Satin to keep the shipment slot. |
| n13 | needs_you | needs_you | model:openai/gpt-5.6-terra | Tom Becker asks Maya to approve the $850 budget to hold Saturday. |
| n14 | needs_you | needs_you | model:openai/gpt-5.6-terra | Makers Market requires Maya to pay the $220 booth B12 balance by Friday or it will be released Saturday. |
| n15 | needs_you | needs_you | model:openai/gpt-5.6-terra | ParcelGo requires Maya to reschedule the kiln element delivery by Oct 23 to avoid return. |
| n16 | needs_you | needs_you | model:openai/gpt-5.6-terra | Leo needs Maya to discuss a Hearth contract clause before 2 today, with the contract due back today. |
| n17 | needs_you | needs_you | model:openai/gpt-5.6-terra | Ana at Hearth & Co needs Maya to confirm whether 200 mugs can be delivered by Friday. |
| n18 | needs_you | needs_you | model:openai/gpt-5.6-terra | Mira Costa needs Maya to confirm six pieces by Thursday for November show label printing. |
| n19 | needs_you | needs_you | model:openai/gpt-5.6-terra | Shopify paused Marlow Ceramics checkout because its payment method expired and Maya must update it to reopen sales. |
| n20 | needs_you | needs_you | model:openai/gpt-5.6-terra | Nina Alvarez needs Maya’s decision on the studio assistant role by Friday before accepting another offer. |
| n21 | needs_you | needs_you | model:openai/gpt-5.6-terra | Namewell says marlowceramics.com auto-renew failed and must be renewed by Oct 25 to avoid website and email disruption. |
| n22 | needs_you | needs_you | model:openai/gpt-5.6-terra | Northline Claims needs kiln element and controller photos by Friday to process Maya's damage claim. |
| n23 | needs_you | needs_you | model:openai/gpt-5.6-terra | Google reports a new Windows sign-in from Lisbon today that Maya must verify or secure immediately. |
| n24 | needs_you | needs_you | model:openai/gpt-5.6-terra | Chris Park needs Maya’s price for 40 planters today before presenting options tomorrow morning. |
| n25 | needs_you | needs_you | model:openai/gpt-5.6-terra | Sam Ruiz is packing the Hearth order now and is waiting for Maya to choose double-wall or regular boxes. |
| n26 | needs_you | needs_you | model:openai/gpt-5.6-terra | Ravi reports customer email exposure and plans publication in seven days unless Marlow responds. |
| n27 | needs_you | needs_you | model:openai/gpt-5.6-terra | Square will revoke an exposed access token within 24 hours, risking online card payments stopping. |
