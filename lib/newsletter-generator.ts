import { scrapeContent } from './content-scraper';
import { recordSentContent, getSentContentForUser } from './content-tracking';

export async function generateNewsletter(userId: string, preferences: string[]) {
  // Get previously sent content
  const sentContent = await getSentContentForUser(userId);

  // Scrape new content
  const newContent = await scrapeContent(preferences);

  // Filter out already sent content
  const filteredContent = newContent.filter(content => 
    !sentContent.some(sent => sent.content_url === content.url)
  );

  // Select top 5 pieces of content (or less if there aren't 5)
  const selectedContent = filteredContent.slice(0, 5);

  // Record the selected content as sent
  for (const content of selectedContent) {
    await recordSentContent(userId, content.url, content.type);
  }

  return selectedContent;
}