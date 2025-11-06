// Use server directive specifies that this code should be run on the server.
'use server';

/**
 * @fileOverview This file defines a Genkit flow for receiving insightful margin alerts.
 *
 * It includes:
 * - `receiveInsightfulMarginAlerts`: The main function to trigger the margin alert process.
 * - `MarginAlertInput`: The input type for the receiveInsightfulMarginAlerts function.
 * - `MarginAlertOutput`: The output type for the receiveInsightfulMarginAlerts function, containing insights and suggestions.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MarginAlertInputSchema = z.object({
  currentMargin: z.number().describe('The current profit margin as a percentage.'),
  marginThreshold: z.number().describe('The pre-defined profit margin threshold as a percentage.'),
  recentSalesData: z.string().describe('A summary of recent sales data, including volume and revenue.'),
  costChanges: z.string().describe('A description of any recent changes in ingredient or production costs.'),
});
export type MarginAlertInput = z.infer<typeof MarginAlertInputSchema>;

const MarginAlertOutputSchema = z.object({
  alertMessage: z.string().describe('A message indicating whether the margin is below the threshold.'),
  potentialCauses: z.string().describe('Insights into the potential causes of the margin drop.'),
  suggestions: z.string().describe('Suggestions for improving the profit margins.'),
});
export type MarginAlertOutput = z.infer<typeof MarginAlertOutputSchema>;

export async function receiveInsightfulMarginAlerts(input: MarginAlertInput): Promise<MarginAlertOutput> {
  return marginAlertFlow(input);
}

const marginAlertPrompt = ai.definePrompt({
  name: 'marginAlertPrompt',
  input: {schema: MarginAlertInputSchema},
  output: {schema: MarginAlertOutputSchema},
  prompt: `You are an AI assistant designed to provide insightful alerts when profit margins fall below a specified threshold.

  Current Margin: {{currentMargin}}%
  Margin Threshold: {{marginThreshold}}%
  Recent Sales Data: {{recentSalesData}}
  Cost Changes: {{costChanges}}

  Analyze the provided information and determine if the current margin is below the threshold. Provide potential causes for the margin drop and suggest actionable steps to improve margins.
  Ensure that the alertMessage field indicates whether the margin is below the threshold and if so, by how much.
`,
});

const marginAlertFlow = ai.defineFlow(
  {
    name: 'marginAlertFlow',
    inputSchema: MarginAlertInputSchema,
    outputSchema: MarginAlertOutputSchema,
  },
  async input => {
    const {output} = await marginAlertPrompt(input);
    return output!;
  }
);
