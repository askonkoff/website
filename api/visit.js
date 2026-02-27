export default async function handler(req, res) {
  const APPS_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbzAARrlC1wzyGRY7wt1jqq7vXFjpwsuUGAOSXjXAZo-1qydU3PQ6cebIVamk5yaJ_Hg/exec?action=visit';

  try {
    await fetch(APPS_SCRIPT_URL, { redirect: 'follow' });
  } catch (_) {
    /* ignore – best-effort tracking */
  }

  // Return 1x1 transparent GIF so <img> onload fires
  const pixel = Buffer.from(
    'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    'base64'
  );
  res.setHeader('Content-Type', 'image/gif');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.status(200).send(pixel);
}
