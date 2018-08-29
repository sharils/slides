html document
=============

html vs xhtml
-------------
| html vs xhtml           | html        | xhtml      |
| closing tag             | optional    | required   |
| attribute value         | optional    | required   |
| single or double quotes | optional    | required   |
| case sensitivity        | insensitive | lower case |

comment
-------
<!-- todo -->

element
-------

### usage ###
- <element />
- <element></element>

### example ###
- <br />
- <p></p>

### all elements ###
- [Index of Elements] (http://www.w3.org/TR/REC-html40/index/elements.html)
- E means <element/>.
- D, F means do not use it.
- You do not need to care about O, E.

attribute
---------

### usage ###
- attribute-name="attribute-value"
- id attribute's value must be unique in the document.

### example ###
<br id="example" />

### all attributes ###
- [Index of Attributes] (http://www.w3.org/TR/REC-html40/index/attributes.html)
- Related Elements means the attribute can only be used with these element.
  e.g. only td and th can have abbr attribute.
- D means do not used it.
- F means only use it with iframe.
- #REQUIRED means the related elements require this attribute.
  e.g. form requires action

block and inline
----------------
- an element is either a block element or an inline elemenet.
- block element can have block and inline elements.
- inline elements can have only inline elements.

### block element ###
- [definition] (http://www.w3.org/TR/REC-html40/sgml/dtd.html#block)
- address, blockquote, div, dl, fieldset, form, hr, noscript, p, table,
  h1, h2, h3, h4, h5, h6, ul, ol, pre

### inline element ###
- [definition] (http://www.w3.org/TR/REC-html40/sgml/dtd.html#inline)

document structure
------------------
- [content model definitions] (http://www.w3.org/TR/html401/intro/sgmltut.html#h-3.3.3.1)
- [body] (http://www.w3.org/TR/html401/struct/global.html#edef-BODY)

markup validation service
-------------------------
- [Markup Validation Service] (http://validator.w3.org/#validate_by_input+with_options)
- Validate HTML fragment

head
----
	<head>
		<meta content="application/xhtml+xml; charset=UTF-8" http-equiv="Content-Type" />
		<title>example title</title>
	</head>

image
-----
	<img alt="example" src="http://example.com/image.png" />

table
-----
	<table>
		<caption>Example</caption>
		<thead>
			<tr>
				<th>year</th>
				<th>month</th>
			</tr>
		</thead>
		<tfoot>
			<tr>
				<th>year</th>
				<th>month</th>
			</tr>
		</tfoot>
		<tbody>
			<tr>
				<td>January</td>
				<td>1</td>
			</tr>
			<tr>
				<td>February</td>
				<td>2</td>
			</tr>
		</tbody>
		<tbody>
			<tr>
				<td>March</td>
				<td>3</td>
			</tr>
		</tbody>
	</table>

form
----
	<form action="#">
		<fieldset>
			<legend>text fields</legend>
			<label>
				<span>subject</span>
				<input type="text" value="type your subject here" />
			</label>
			<label>
				<span>notes</span>
				<textarea cols="80" rows="24">type your notes here</textarea>
			</label>
		</fieldset>
		<fieldset>
			<legend>radio buttons</legend>
			<label>
				<span>January</span>
				<input name="month" type="radio" value="1" />
			</label>
			<label>
				<span>February</span>
				<input name="month" type="radio" value="2" />
			</label>
		</fieldset>
		<fieldset>
			<legend>checkboxes</legend>
			<label>
				<span>Monday</span>
				<input name="day" type="checkbox" value="1" />
			</label>
			<label>
				<span>Tuesday</span>
				<input name="day" type="checkbox" value="2" />
			</label>
		</fieldset>
		<fieldset>
			<legend>buttons</legend>
			<button type="button">do nothing</button>
			<button type="reset">cancel</button>
			<button type="submit">ok</button>
		</fieldset>
		<fieldset>
			<legend>disabled and readonly</legend>
			<label>
				<span>disabled</span>
				<input disabled="disabled" type="text" value="type your subject here" />
			</label>
			<label>
				<span>readonly</span>
				<input readonly="readonly" type="text" value="type your subject here" />
			</label>
		</fieldset>
		<fieldset>
			<legend>menus</legend>
			<label>
				<span>single select</span>
				<select>
					<optgroup label="Red Fruit">
						<option value="apple">Apple</option>
						<option value="strawberry">Strawberry</option>
					</optgroup>
					<optgroup label="Yellow Fruit">
						<option value="banana">Banana</option>
						<option value="mango">Mango</option>
					</optgroup>
				</select>
			</label>
			<label>
				<span>multiple select</span>
				<select multiple="multiple">
					<optgroup label="Red Fruit">
						<option value="apple">Apple</option>
						<option value="strawberry">Strawberry</option>
					</optgroup>
					<optgroup label="Yellow Fruit">
						<option value="banana">Banana</option>
						<option value="mango">Mango</option>
					</optgroup>
				</select>
			</label>
		</fieldset>
	</form>

bad practices
-------------

### document and style separation ###
- Do not use the style attribute.
- Do not use br element to layout elements or style your document.
- Do not use &nbsp; to layout elements or style your document.
- Do not use table to layout your page elements.
- Do not use style element to embed CSS.
- Do not use tt, i, b, big, small, strike, s, u, font and basefont elements.

### document and behaviour separation ###
- Do not use the event attributes, e.g. onclick, onsubmit, etc.
- Do not use script element to embed JavaScript.

style suggestion
----------------
- Sort your attributes in alphabet. Less conflict.
- Connect multiple words using dashes. Because css uses dash.

resources
---------
- [HTML 4.01 Specification] (http://www.w3.org/TR/REC-html40/)
