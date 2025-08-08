'use server';

/**
 * @fileOverview Generates social media post suggestions for sharing event information.
 *
 * - suggestSocialMediaPosts - A function that generates social media post suggestions.
 * - SuggestSocialMediaPostsInput - The input type for the suggestSocialMediaPosts function.
 * - SuggestSocialMediaPostsOutput - The return type for the suggestSocialMediaPosts function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestSocialMediaPostsInputSchema = z.object({
  eventName: z.string().describe('The name of the event.'),
  eventDescription: z.string().describe('A description of the event.'),
  hosts: z.string().describe('The hosts of the event.'),
  dates: z.string().describe('The dates of the event.'),
  location: z.string().describe('The location of the event.'),
});
export type SuggestSocialMediaPostsInput = z.infer<typeof SuggestSocialMediaPostsInputSchema>;

const SuggestSocialMediaPostsOutputSchema = z.object({
  facebookPost: z.string().describe('A suggested Facebook post.'),
  xPost: z.string().describe('A suggested X post (formerly Twitter).'),
  instagramPost: z.string().describe('A suggested Instagram post.'),
});
export type SuggestSocialMediaPostsOutput = z.infer<typeof SuggestSocialMediaPostsOutputSchema>;

export async function suggestSocialMediaPosts(input: SuggestSocialMediaPostsInput): Promise<SuggestSocialMediaPostsOutput> {
  return suggestSocialMediaPostsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestSocialMediaPostsPrompt',
  input: {schema: SuggestSocialMediaPostsInputSchema},
  output: {schema: SuggestSocialMediaPostsOutputSchema},
  prompt: `You are an AI social media assistant.  You will be provided with the details of an event.
Your job is to generate suggested social media posts for Facebook, X, and Instagram that will encourage people to attend the event.

Event Name: {{{eventName}}}
Hosts: {{{hosts}}}
Dates: {{{dates}}}
Location: {{{location}}}
Event Description: {{{eventDescription}}}

Here are the suggested social media posts:

Facebook Post:
{{facebookPost}}

X Post:
{{xPost}}

Instagram Post:
{{instagramPost}}`,
});

const suggestSocialMediaPostsFlow = ai.defineFlow(
  {
    name: 'suggestSocialMediaPostsFlow',
    inputSchema: SuggestSocialMediaPostsInputSchema,
    outputSchema: SuggestSocialMediaPostsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
