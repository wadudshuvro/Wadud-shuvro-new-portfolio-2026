import { readFile } from 'node:fs/promises';
import path from 'node:path';

export async function GET() {
  try {
    const resumePath = path.join(
      process.cwd(),
      'assets',
      'certificates',
      'Wadud Shuvro Resume.pdf'
    );
    const resumeBuffer = await readFile(resumePath);

    return new Response(resumeBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Wadud Shuvro Resume.pdf"',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch {
    return new Response('Resume file not found.', { status: 404 });
  }
}
