import legofy from './legofy';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const data = await req.formData();

  const { count, quality, blendMode, file } = Object.fromEntries(data);

  if (!count || !quality || !blendMode || !file) {
    return NextResponse.json({
      error: 'Bad Request',
      message: 'Options and image buffer are required',
    });
  }

  try {
    /* eslint-disable */
    const canvas = await legofy(
      file as File,
      { count, quality, blendMode } as any,
    );
    return NextResponse.json({ canvas });
  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json({
      error: 'Internal Server Error',
      message: 'Failed to process the image',
    });
  }
}
