'use client';

import { AsciiLegofy } from '@/components/elements/AsciiLegofy';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RetroButton } from '@/components/elements/RetroButton';
import Image from 'next/image';

const counts = [4, 8, 16, 32];

const qualities = ['fast', 'good', 'best', 'nearest', 'bilinear'];

const blendModes = [
  'hard-light',
  'multiply',
  'source-over',
  'lighter',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
];

export default function Lego() {
  const [canvasImage, setCanvasImage] = useState<string | null>(null);
  const { register, handleSubmit } = useForm();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  /* eslint-disable */
  const onSubmit = async (data: any) => {
    const formData = new FormData();

    formData.append('file', data.file[0]);
    formData.append('count', data.count);
    formData.append('quality', data.quality);
    formData.append('blendMode', data.blendMode);

    try {
      const response = await fetch('/api/legofy', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const canvas = data.canvas;

        setCanvasImage(canvas);
      } else {
        console.error('Failed to legofy image');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="container max-w-6xl">
      <section>
        <div className="flex flex-col gap-12 items-center justify-center">
          <AsciiLegofy />
        </div>
      </section>

      <section className="mt-8">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row w-full flex-wrap items-center justify-center gap-8">
            <div>
              <label htmlFor="count" className="mr-2">
                Bricks Count:
              </label>

              <select
                {...register('count', { required: true })}
                defaultValue={counts[1]}
                id="count"
                className="bg-black cursor-pointer ring-[1.5px] ring-white"
              >
                {counts.map((count) => (
                  <option key={count} value={count}>
                    {count}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="quality" className="mr-2">
                Quality:
              </label>

              <select
                defaultValue={qualities[1]}
                {...register('quality', {
                  required: true,
                })}
                id="quality"
                className="bg-black cursor-pointer ring-[1.5px] ring-white"
              >
                {qualities.map((q) => (
                  <option key={q} value={q}>
                    {q}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="blendMode" className="mr-2">
                Blend Mode:
              </label>

              <select
                {...register('blendMode', { required: true })}
                id="blendMode"
                className="bg-black cursor-pointer ring-[1.5px] ring-white"
              >
                {blendModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <input
              {...register('file', { required: true })}
              type="file"
              accept="image/jpeg, image/png"
              onChange={(e) => {
                const file = e?.target?.files?.[0];

                if (file) {
                  const fileType = file.type;

                  if (fileType === 'image/jpeg' || fileType === 'image/png') {
                    setPreviewUrl(URL.createObjectURL(file));
                  } else {
                  }
                }
              }}
              className="ring-[1.5px] ring-white"
            />
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 items-center justify-start col-span-1 bg-neutral-900 p-4 rounded-2xl min-h-40">
                <h2 className="text-primary-md">Input:</h2>
                <div>
                  {previewUrl && (
                    <Image
                      src={previewUrl}
                      alt="Preview"
                      width={300}
                      height={200}
                      className="object-contain mt-8"
                    />
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-start col-span-1 bg-neutral-900 p-4 rounded-2xl min-h-40">
                <h2 className="text-primary-md">Output:</h2>
                <div className="mt-8">
                  {canvasImage && (
                    <Image
                      alt="canvas"
                      src={canvasImage}
                      width={300}
                      height={200}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="flex flex-row items-center justify-center">
              <RetroButton type="submit" className="px-12 py-4 text-primary-xs">
                Legofy
              </RetroButton>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
