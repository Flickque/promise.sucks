import { RetroButton } from '@/components/elements/RetroButton';
import { Canvas } from 'canvas';

interface Props {
  selectedFormData: FormData | null;
  setCanvasImage: (canvas: Canvas | null) => void;
  count: number;
  quality: string;
  blendMode: string;
}

export function LegofyButton({
  setCanvasImage,
  count,
  quality,
  blendMode,
}: Props) {
  const handleLegofyImage = async () => {
    // Example: Fetch image and options from backend
    const response = await fetch('/api/legofy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        options: {
          quality,
          count,
          blendMode,
        },
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const canvas = data.canvas; // Assuming the API returns the canvas object

      // Set the canvas image state to trigger re-render
      setCanvasImage(canvas);
    } else {
      console.error('Failed to legofy image');
    }
  };
  return (
    <div className="flex flex-row items-center justify-center">
      <RetroButton onClick={handleLegofyImage}>Legofy</RetroButton>
    </div>
  );
}
