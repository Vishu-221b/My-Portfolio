import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '2uydzu1j',
  dataset: 'production',
  apiVersion: '2023-05-03',
  useCdn: true,
  token: 'skOAYjXzdz0vIYm0d4buCr4vo8uosTiK6pUm6pgln2Tb18RJvHvsHiRnargQJCW5HoH20bNPENZ9m4lL1T3SlweRw7txV2hsJuLLvIShtSw8tqxOK9p6oelOWdgNPbtmSEoqFisKCaU36c9CytgZ6Qt2Di6N0kAaE0t25kMcB0VIN1GbsxdI',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);