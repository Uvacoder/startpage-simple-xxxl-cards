### Root is a start-page aimed to simplicity and elegance
Learn more about Root in imreyesjorge's [repository](https://github.com/imreyesjorge/root-startpage/). This project uses [Remix Icons](https://remixicon.com/).

### SVG Support
This fork of Root provides support for SVG icons. I am by no means a web developer, so they probably aren't implemented in the best way.
To use an SVG as an icon, append a new object to the `CARDS` constant, with the icons field left as the empty string. It should look something like this:
```js
{
  name: "<webpage name>",
  icon: "",
  link: "<webpage link>",
  svg: "svg_path.svg"
},
```
The SVG also requires a little bit of preparation.
1. Open the .SVG in a text editor of your choice.
2. Within the `<svg>` tag, change (or add) the `id` as follows: `id="Layer_1"`.
3. For each `<path>` tag, change (or add) the `fill` as follows: `fill="currentColor"`.
4. *(Optional) If the SVG appears too large, scale it down using vector graphics software like [Inkscape](https://inkscape.org/).* 