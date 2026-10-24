import type { ImageMetadata } from 'astro';
import reliefPearls from '../assets/art/relief-pearls.jpg';
import reliefGoldLines from '../assets/art/relief-gold-lines.jpg';
import reliefWaves from '../assets/art/relief-waves.jpg';
import reliefGinkgo from '../assets/art/relief-ginkgo.jpg';
import reliefFourPanels from '../assets/art/relief-four-panels.jpg';
import calligraphyLove from '../assets/art/calligraphy-love.jpg';
import calligraphyVerse from '../assets/art/calligraphy-verse.jpg';
import calligraphyLovePlant from '../assets/art/calligraphy-love-plant.jpg';
import lineSilentUnion from '../assets/art/line-silent-union.jpg';
import dotworkThinker from '../assets/art/dotwork-thinker.jpg';
import dotworkPortrait from '../assets/art/dotwork-portrait.jpg';
import lionHiddenAnimals from '../assets/art/lion-hidden-animals.jpg';
import purseBlack from '../assets/art/purse-black.jpg';
import pursePink from '../assets/art/purse-pink.jpg';
import purseDaisies from '../assets/art/purse-daisies.jpg';
import pursePearls from '../assets/art/purse-pearls.jpg';
import purseRed from '../assets/art/purse-red.jpg';
import homeShelf from '../assets/art/home-shelf.jpg';
import homeLamp from '../assets/art/home-lamp.jpg';
import homeCabinet from '../assets/art/home-cabinet.jpg';
import mirrorFrame from '../assets/art/mirror-frame.jpg';

/** One artwork photo. */
export interface Artwork {
  src: ImageMetadata;
  alt: string;
  /** Short handwritten caption on the print. */
  caption: string;
}

/** A group of related works, with a few words about the technique. */
export interface Series {
  id: string;
  title: string;
  text: string;
  works: Artwork[];
}

/** Opening words for the Portfolio page, adapted from the Artida portfolio. */
export const studio = {
  name: 'Artida',
  meaning: 'A name born where Art and Neda meet.',
  story: [
    'My heart has always been drawn to art. I was once denied the chance to study it formally, but I never let it go. It has guided how I see and how I make things, on canvas and on screen.',
    'Everything here is handmade: relief panels, Persian calligraphy, dotwork drawings, resin pieces and objects for my home.',
  ],
};

export const series: Series[] = [
  {
    id: 'relief',
    title: 'Biomorphic relief',
    text: 'Texture and quiet tones shaped into three-dimensional panels that suggest movement, softness and nature.',
    works: [
      { src: reliefWaves, caption: 'waves', alt: 'White and sand-coloured relief panel shaped like breaking waves' },
      { src: reliefGoldLines, caption: 'gold lines', alt: 'Relief panel with flowing gold lines, next to dried pampas grass' },
      { src: reliefGinkgo, caption: 'ginkgo', alt: 'Framed relief of white ginkgo leaves on a grey ground' },
      { src: reliefPearls, caption: 'pearls, in progress', alt: 'Grey relief panel with lines of raised dots, with a brush and paint jar beside it' },
      { src: reliefFourPanels, caption: 'four panels', alt: 'Four small cream relief panels hung in a row' },
    ],
  },
  {
    id: 'calligraphy',
    title: 'Modern 3D calligraphy',
    text: 'Persian calligraphy brought into relief, where words take shape through form, shadow and texture. Made in Iran, 2023.',
    works: [
      { src: calligraphyLove, caption: 'عشق · love', alt: 'The Persian word عشق (love) in raised copper letters on a dark textured panel' },
      { src: calligraphyVerse, caption: 'verse in gold', alt: 'A framed panel of dark relief calligraphy with lines of gold Persian script' },
      { src: calligraphyLovePlant, caption: 'عشق, with a plant', alt: 'The calligraphy panel عشق seen from the side, with a plant in front' },
    ],
  },
  {
    id: 'drawing',
    title: 'Drawing',
    text: 'Dotwork portraits built from countless points, a single-line portrait, and a lion that hides other animals in its details.',
    works: [
      { src: lionHiddenAnimals, caption: 'lion, hidden animals', alt: 'Black ink drawing of a lion filled with patterns that hide other animals' },
      { src: dotworkPortrait, caption: 'dotwork portrait', alt: 'Framed dotwork portrait of a woman in a headscarf' },
      { src: dotworkThinker, caption: 'dotwork, thoughts', alt: 'Dotwork drawing of a man with thought bubbles showing a smaller portrait and formulas' },
      { src: lineSilentUnion, caption: 'the silent union', alt: 'Minimal line-art painting of two faces in warm tones, hung above a wooden table' },
    ],
  },
  {
    id: 'resin',
    title: 'Resin purses',
    text: 'Sculpted by hand and set with flowers, pearls and colour, so a bag becomes something to wear and to look at.',
    works: [
      { src: purseRed, caption: 'red and ivory', alt: 'Resin clutch half ivory, half deep red, with a gold chain' },
      { src: purseDaisies, caption: 'daisies', alt: 'Clear resin clutch with pressed daisies and a gold chain' },
      { src: pursePearls, caption: 'pearls', alt: 'Resin clutch with dried flowers and a pearl strap, on a shelf' },
      { src: pursePink, caption: 'pink blossoms', alt: 'Pink resin clutch filled with tiny pink flowers' },
      { src: purseBlack, caption: 'black', alt: 'Black resin clutch with a gold chain beside a knotted cream sculpture' },
    ],
  },
  {
    id: 'home',
    title: 'Objects for home',
    text: 'Candles, sculptures, lamps and frames, all handmade and arranged to bring an artistic spirit into everyday rooms.',
    works: [
      { src: mirrorFrame, caption: 'mirror frame, clay', alt: 'Tall mirror with an organic clay and cardboard frame, next to plants' },
      { src: homeCabinet, caption: 'the cabinet', alt: 'Black metal shelf with handmade lamps, vases and objects' },
      { src: homeShelf, caption: 'shelf', alt: 'Lit shelf with handmade white sculptures, framed prints and flowers' },
      { src: homeLamp, caption: 'bamboo lamp', alt: 'Handmade lamp with a shade of bamboo sticks, lit warmly' },
    ],
  },
];

/** All works in page order, for the viewer. */
export const allWorks = series.flatMap((s) => s.works);
