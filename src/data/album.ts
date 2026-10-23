import type { ImageMetadata } from 'astro';
import frame01 from '../assets/album/01.jpg';
import frame02 from '../assets/album/02.jpg';
import frame03 from '../assets/album/03.jpg';
import frame04 from '../assets/album/04.jpg';
import frame03Tone from '../assets/album/03-tone.jpg';
import frame04Tone from '../assets/album/04-tone.jpg';

/** One frame on the album's contact sheet. */
export interface Frame {
  src: ImageMetadata;
  alt: string;
  /**
   * Warm hand-tinted version for photos taken in black and white,
   * shown when the print "develops" on hover, focus and in the viewer.
   */
  tone?: ImageMetadata;
  /** Handwritten blue-pencil note for a chosen frame. */
  note?: string;
}

/** Photos in sheet order. Add a frame by adding an image and a line here. */
export const frames: Frame[] = [
  { src: frame01, alt: 'Neda smiling outdoors in a blue striped shirt', note: 'on the cover' },
  { src: frame02, alt: 'Neda in a floral top, in warm evening light' },
  { src: frame03, tone: frame03Tone, alt: 'Studio portrait of Neda in front of a dark curtain' },
  { src: frame04, tone: frame04Tone, alt: 'Portrait of Neda looking back over one shoulder, a ring of light behind' },
];

/** The photo on the home page. */
export const homePhoto = frames[0];

/** The photo on the About page. */
export const aboutPhoto = frames[1];
