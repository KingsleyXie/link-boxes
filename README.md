## Brief Introduction
This is a responsive link-boxes snippet inspired by and modified from Typecho's link-box, initially used for the links page of friends on my blog. Actually it can also be used as an index page or other situations which requires a list of links.

Demo is shown at [https://demos.kingsleyxie.cn/link-boxes/](https://demos.kingsleyxie.cn/link-boxes/), the [Alpha version](https://github.com/KingsleyXie/NaiveProjects/tree/c3c13f9/Snippets/link-boxes/) wrote with both CSS and JavaScript is also shown [here](https://demos.kingsleyxie.cn/link-boxes-alpha/), but it is deprecated since the CSS-only version now has a better performance.

More infomation about this repository can be found from this [blog](https://kingsleyxie.cn/implementation-of-link-boxes) if you are interested.

## Usage
### With Pure HTML Code

Include the [`./link-boxes.css`](./link-boxes.css) file or add corresponding code inside it in your page code(HTML for example), and write your link boxes with syntax shown below:

```html
<div class="link-boxes">
    <a href="LINK-HERE" class="link-box">
        <div class="avatar">
            <img src="AVATAR-LINK-HERE" alt="AVATAR-ALT-HERE">
        </div>
        <div class="nickname">NICKNAME-HERE</div>
    </a>

    <!-- or more `<a></a>` tags -->
</div>
```

Remember to change these four variables: `LINK-HERE`, `AVATAR-LINK-HERE`, `AVATAR-ALT-HERE` and `NICKNAME-HERE` to whatever value it is in your case.

### With Simplified Format
Besides the CSS file `./link-boxes.css`, add the Javascript code inside [`./link-boxes.js`](./link-boxes.js), and then you can use this kind of simplified format to create a link-box:

```html
<div class="link-boxes">
    <!-- Standard format for **each** link box -->
    [nickname](link+avatar)
</div>
```

**Note: Formated code should be inside a `div` with `link-boxes` class, otherwise they won't be parsed to the corresponding HTML code**

For example:

```html
<div class="link-boxes">
    [Google](https://www.google.com+https://balabala.png)
    [Google](https://www.google.com+https://balabala.png)
    [Google](https://www.google.com+https://balabala.png)
</div>

<!-- Multiple `link-boxes` classes are also supported -->
<!-- Each of them will be parsed separately -->

<div class="link-boxes">
    [Google](https://www.google.com+https://balabala.png)
    [Google](https://www.google.com+https://balabala.png)
</div>
```

## Customization
If you are not satisfied with the image size or other style of these link boxes, or want to customize your own link boxes, you can simply change the corresponding values inside [`./link-boxes.css`](./link-boxes.css). By default, value of the core variables are:

```css
html {
    --img-size: 150px;
}

@media (max-width: 520px) {
    html {
        --img-size: calc(50vw - 22.4px) !important;
    }
}
```

Which means if the device with is less than `520px`, image size will be `50vw - 22.4px` * `50vw - 22.4px`(22.4px is the width offset of boxes' margin). And otherwise the image size is always `150px` * `150px`
