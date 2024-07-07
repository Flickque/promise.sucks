import { AsciiPromiseArt } from '@/components/elements/AsciiPromiseArt';
import { AsciiHoldYourPromise } from '@/components/elements/AsciiHoldYourPromise';
import { RetroButton } from '@/components/elements/RetroButton';
import { FarcasterIcon } from '@/components/icons/FarcasterIcon';
import { UniswapIcon } from '@/components/icons/UniswapIcon';
import { ZoraIcon } from '@/components/icons/ZoraIcon';
import { FigmaIcon } from '@/components/icons/FigmaIcon';
import { TypeWriting } from '@/components/elements/TypeWriting';

export default function Home() {
  return (
    <div className="container max-w-2xl">
      <section>
        <div className="flex flex-col gap-12 items-center justify-center">
          <AsciiPromiseArt />
          <TypeWriting />
        </div>
      </section>
      <section className="mt-20">
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <RetroButton>
            <FarcasterIcon className="size-5" />
            Connect
          </RetroButton>
          <RetroButton>
            <FigmaIcon className="size-5" />
            Create
          </RetroButton>
          <RetroButton>
            <ZoraIcon className="size-5 grayscale" />
            Mint
          </RetroButton>
          <RetroButton>
            <UniswapIcon className="size-5" />
            Buy In
          </RetroButton>
        </div>
      </section>
      <section className="mt-12">
        <div className="flex flex-col items-start justify-center gap-6">
          <AsciiHoldYourPromise />
          <span className="font-bold text-caption">
            PROMISE.SUCKS© MADE BY SUNDAY MORNING PRODUCTION. NONE OF THE
            RIGHTS RESERVED, PROTECTED BY A COPYRIGHT LAW, OR TRADEMARKED. ALL
            PARTS OF THIS SITE MAY BE REPRODUCED, DISTRIBUTED, AND TRANSMITTED
            IN ANY FORM OR BY ANY MEANS WITHOUT PRIOR WRITTEN PERMISSION. NOT
            FINANCIAL ADVICE. DYOR.
          </span>
        </div>
      </section>
    </div>
  );
}
