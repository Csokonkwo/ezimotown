import { format, parseISO } from 'date-fns';

export const formatDate = (isoDate: string): string => {
  return format(parseISO(isoDate), 'MMMM d, yyyy');
};

export const calculateReadingTime = (text: string): string => {
  const wordsPerMintute = 200;
  const wordCount = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(wordCount / wordsPerMintute);
  return `${minutes} min read`;
};
