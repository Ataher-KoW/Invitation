# Luxury Arabic Wedding Invitation

Static Arabic wedding invitation website built with plain HTML, CSS, and JavaScript.

The invitation starts with a clickable envelope. After the visitor opens it, the single-screen card appears, text fades in and out in stages, and the animation ends on the Z&A logo with the venue location button.

## Files

- `index.html` contains the invitation text and stage order.
- `styles.css` contains the visual design, colors, and animations.
- `script.js` contains the countdown date, stage timing, and music setup.
- `assets/images/ag-logo.png` contains the original second logo artwork.
- `assets/images/ag-logo-transparent.png` contains the cleaned second logo used on the opening envelope and final screen.
- `assets/images/za-final-logo.png` contains the first logo used on the invitation details screen.
- `assets/images/luxury-garden-bg.svg` contains the garden-style background.
- `assets/images/paper-texture.svg` contains the invitation paper texture.
- `assets/images/rose-corner.svg` contains the soft rose decorations.
- `assets/images/no-camera-soft.svg` and `assets/images/no-kids-soft.svg` contain the warning artwork.
- `snaptik_7615383836368571656_v3.mp3` is used as the background music.

## 1. Edit the Family Name

Open `index.html` and search for:

```html
عائلة د. عبدالسلام صالح
```

Replace it with the desired family name.

## 2. Edit the Couple Names

Open `index.html` and search for:

```html
Dr. Zobida | Abdullah
```

Replace it with the desired couple names.

## 3. Edit the Date and Time

In `index.html`, update the visible Arabic date and time:

```html
الجمعة
9 أكتوبر
8:00 مساءً
```

Then open `script.js` and update the countdown date near the top:

```js
const weddingDate = new Date("2026-10-09T20:00:00");
```

Use this format:

```js
new Date("YYYY-MM-DDTHH:mm:ss")
```

## 4. Edit the Venue

Open `index.html` and update the Google Maps link on the final button:

```html
href="https://maps.app.goo.gl/2x57w6zQ6cUisXuz7?g_st=ac"
```

## 5. Edit Stage Timing

Each animated text screen in `index.html` has a `data-duration` value:

```html
<section class="stage" data-duration="5200">
```

The value is in milliseconds. Increase it to keep a screen visible longer.

## 6. Change Colors

Open `styles.css`. The main palette is at the top:

```css
:root {
  --lavender: #C5B9D2;
  --lavender-light: #D8CFE3;
  --blush: #E6CCC1;
  --blush-light: #F0DCD4;
  --ivory: #EEEBE4;
  --ivory-light: #FAF7F1;
  --sage: #A8B19D;
  --sage-light: #C0C8B5;
  --gold: #C8A96A;
  --gold-light: #D8BF85;
  --text: #5E5048;
  --text-soft: #7A6A5F;
}
```

Change these values to adjust the full design.

## 7. Music

The music file is set in `script.js`:

```js
const musicPath = "snaptik_7615383836368571656_v3.mp3";
```

Music starts when the visitor clicks the envelope, because that click gives the browser permission to play audio. Visitors can also press the music button to play or pause it.

## 8. Deploy on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders.
3. Go to repository `Settings`.
4. Open `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select the `main` branch and `/root`.
7. Save and wait for GitHub to publish the site.

Your website will be available at the GitHub Pages URL shown in the Pages settings.
