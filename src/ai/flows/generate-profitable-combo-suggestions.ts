'use server';

/**
 * @fileOverview AI-powered combo suggestion flow.
 *
 * - generateProfitableComboSuggestions - A function that generates profitable combo suggestions.
 * - GenerateProfitableComboSuggestionsInput - The input type for the generateProfitableComboSuggestions function.
 * - GenerateProfitableComboSuggestionsOutput - The return type for the generateProfitableComboSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProfitableComboSuggestionsInputSchema = z.object({
  salesData: z
    .string()
    .describe('Sales data in JSON format, including product names, quantities sold, and revenue generated.'),
  ingredientCosts: z.string().describe("Ingredient costs in JSON format, including ingredient names and costs."),
  fixedCosts: z.string().describe("Fixed costs in JSON format, including cost names and amounts."),
  desiredProfitMargin: z.number().describe('The desired profit margin as a percentage (e.g., 0.2 for 20%).'),
});
export type GenerateProfitableComboSuggestionsInput = z.infer<
  typeof GenerateProfitableComboSuggestionsInputSchema
>;

const GenerateProfitableComboSuggestionsOutputSchema = z.object({
  comboSuggestions: z
    .array(z.object({}))
    .describe('An array of suggested product combinations (combos) with estimated profitability.'),
  analysisSummary: z.string().describe('A summary of the analysis performed to generate the combo suggestions.'),
});
export type GenerateProfitableComboSuggestionsOutput = z.infer<
  typeof GenerateProfitableComboSuggestionsOutputSchema
>;

export async function generateProfitableComboSuggestions(
  input: GenerateProfitableComboSuggestionsInput
): Promise<GenerateProfitableComboSuggestionsOutput> {
  return generateProfitableComboSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProfitableComboSuggestionsPrompt',
  input: {schema: GenerateProfitableComboSuggestionsInputSchema},
  output: {schema: GenerateProfitableComboSuggestionsOutputSchema},
  prompt: `You are an expert in product profitability analysis. Analyze the provided sales data, ingredient costs, and fixed costs to identify product combinations (combos) that are likely to be highly profitable.

Sales Data: {{{salesData}}}
Ingredient Costs: {{{ingredientCosts}}}
Fixed Costs: {{{fixedCosts}}}
Desired Profit Margin: {{desiredProfitMargin}}

Based on this information, suggest product combinations (combos) that will maximize revenue and provide a summary of your analysis.

Output the combo suggestions and the summary in JSON format.`, //Crucially, the prompt string MUST be formatted using Handlebars syntax
});

const generateProfitableComboSuggestionsFlow = ai.defineFlow(
  {
    name: 'generateProfitableComboSuggestionsFlow',
    inputSchema: GenerateProfitableComboSuggestionsInputSchema,
    outputSchema: GenerateProfitableComboSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
