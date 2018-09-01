# ![https://sharils.github.io/slides/20180831-css-grid-layout/][1]

# CSS Grid Layout

[1]: data:image/png;base64,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

---

# Superpower

- [Golden ratio with CSS Grid Layout][1]
- [Bauhaus Style By CSS Grid Layout 3D][2]

[1]: https://codepen.io/bobby1030/full/EWmyZW
[2]: https://codepen.io/Wcc723/full/MvyzWZ/

---

# Path

- [A Complete Guide to Grid | CSS-Tricks][1]
- [The Difference Between Explicit and Implicit Grids | CSS-Tricks][2]
- [Grid Garden - A game for learning CSS grid][3]
- [CSS Grid Practice][4]
- [Breaking Down a CSS Grid Layout, an article by Tim Wright][5]
- [Auto-Sizing Columns in CSS Grid: `auto-fill` vs `auto-fit` | CSS-Tricks][6]

[1]: https://css-tricks.com/snippets/css/complete-guide-grid/
[2]: https://css-tricks.com/difference-explicit-implicit-grids/
[3]: https://cssgridgarden.com/
[4]: https://coursework.vschool.io/css-grid-practice/
[5]: https://csskarma.com/blog/css-grid-layout/
[6]: https://css-tricks.com/auto-sizing-columns-css-grid-auto-fill-vs-auto-fit/

---

# [Introduction to CSS Grid][1]

[1]: https://www.slideshare.net/KaraLuton1/introduction-to-css-grid

---

# Toolbox

- [Grid Inspector Tool][1]
- [Eyedropper - Firefox Developer Tools][2]
- [Measure a portion of the page][3]

[1]: https://www.mozilla.org/en-US/developer/css-grid/
[2]: https://developer.mozilla.org/en-US/docs/Tools/Eyedropper
[3]: https://developer.mozilla.org/en-US/docs/Tools/Measure_a_portion_of_the_page

---

# [Practice 0][1]

[1]: https://jsfiddle.net/elvishhunter/cgp8we29/

---

# [Practice 1][1]

[1]: https://jsfiddle.net/elvishhunter/us05az1L/

---

# [Practice 2][1]

[1]: https://jsfiddle.net/elvishhunter/0m1k5qyh/

---

# [Practice 3][1]

[1]: https://jsfiddle.net/elvishhunter/ot4fycm6/

---

# [Practice 4][1]

[1]: https://jsfiddle.net/elvishhunter/nobuqast/

---

# [More practice][1]

[1]: https://gridbyexample.com/examples/

---

# Q&A

---

# Thank
