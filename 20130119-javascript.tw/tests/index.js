test("[]", function()
{
	var actual

	actual = [] ? true : false
	strictEqual(actual, true, "[] ? true : false")

	actual = [] == true
	strictEqual(actual, false, "[] == true")

	actual = [0] == true
	strictEqual(actual, false, "[0] == true")

	actual = [""] == true
	strictEqual(actual, false, "[\"\"] == true")

	actual = ["0"] == true
	strictEqual(actual, false, "[\"0\"] == true")
})

test("[sth] == sth", function()
{
	var actual

	actual = [0] == 0
	strictEqual(actual, true, "[0] == 0")

	actual = [false] == false
	strictEqual(actual, false, "[false] == false")
})

test("[x] == x, [y] == y, [x] == [y]", function()
{
	var actual

	actual = [0] == false
	strictEqual(actual, true, "[0] == false")

	actual = [""] == false
	strictEqual(actual, true, "[\"\"] == false")

	actual = [0] == [""]
	strictEqual(actual, false, "[0] == [\"\"]")
})

test("x == x, [x] == [x]", function()
{
	var actual

	actual = 0 == 0
	strictEqual(actual, true, "0 == 0")

	actual = [0] == [0]
	strictEqual(actual, false, "[0] == [0]")
})

test("x == x, x != x", function()
{
	var actual,
		value

	value = 'War does not determine who is right - only who is left.'
	actual = value == value
	strictEqual(actual, true, "value == value")

	value = NaN
	actual = value != value
	strictEqual(actual, true, "value != value")
})

test("Compare with a Date object.", function()
{
	var actual

	actual = new Date(0) < 0
	strictEqual(actual, false, "new Date(0) < 0")

	actual = new Date(0) > 0
	strictEqual(actual, false, "new Date(0) > 0")

	actual = new Date(0) == 0
	strictEqual(actual, false, "new Date(0) == 0")
})

test("Array arithmetics", function()
{
	var actual

	actual = [] + 1 == [1]
	strictEqual(actual, true, "[] + 1 == [1]")

	actual = [1] - 1 == []
	strictEqual(actual, true, "[1] - 1 == []")

	actual = [1] - [] == 1
	strictEqual(actual, true, "[1] - [] == 1")

	actual = [1] * 2 == [1 * 2]
	strictEqual(actual, true, "[1] * 2 == [1 * 2]")

	actual = [1] / 2 == [1 / 2]
	strictEqual(actual, true, "[1] / 2 == [1 / 2]")
})

test("Array arithmetics with string", function()
{
	var actual

	actual = [] + "" == [""]
	strictEqual(actual, true, "[] + \"\" == [\"\"]")

	actual = [""] - "" == []
	strictEqual(actual, true, "[\"\"] - \"\" == []")

	actual = [""] - [] == ""
	strictEqual(actual, true, "[\"\"] - [] == \"\"")
})

test("Array arithmetics strikes back", function()
{
	var actual

	actual = [] + 'a' == ['a']
	strictEqual(actual, true, "[] + 'a' == ['a']")

	actual = ['a'] - 'a' == []
	strictEqual(actual, false, "['a'] - 'a' == []")

	actual = ['a'] - [] == 'a'
	strictEqual(actual, false, "['a'] - [] == 'a'")
})

test("Array arithmetics strikes back again and again", function()
{
	var actual

	actual = [] + '1' == ['1']
	strictEqual(actual, true, "[] + '1' == ['1']")

	actual = ['1'] - '1' == []
	strictEqual(actual, true, "['1'] - '1' == []")

	actual = ['1'] - [] == '1'
	strictEqual(actual, true, "['1'] - [] == '1'")
})

test("Plus zero", function()
{
	var actual,
		value

	actual = null + 0
	strictEqual(actual, 0, "null + 0")

	actual = false + 0
	strictEqual(actual, 0, "false + 0")

	actual = 0 + 0
	strictEqual(actual, 0, "0 + 0")

	actual = [] + 0
	strictEqual(actual, "0", "[] + 0")

	actual = new Date(0) + 0
	strictEqual(actual, "Thu Jan 01 1970 08:00:00 GMT+0800 (台北標準時間)0", "new Date(0) + 0")

	value = 
	{
		toString: function()
		{
			return ""
		},
		valueOf: function()
		{
			return 0
		}
	}
	actual = value + 0
	strictEqual(actual, 0, "object + 0")
})

test("Plus string", function()
{
	var actual,
		value

	actual = null + ""
	strictEqual(actual, "null", "null + \"\"")

	actual = false + ""
	strictEqual(actual, "false", "false + \"\"")

	actual = 0 + ""
	strictEqual(actual, "0", "0 + \"\"")

	actual = [] + ""
	strictEqual(actual, "", "[] + \"\"")

	actual = new Date(0) + ""
	strictEqual(actual, "Thu Jan 01 1970 08:00:00 GMT+0800 (台北標準時間)", "new Date(0) + \"\"")

	value = 
	{
		toString: function()
		{
			return ""
		},
		valueOf: function()
		{
			return 0
		}
	}
	actual = value + ""
	strictEqual(actual, "0", "object + \"\"")

	value = []
	value.valueOf = function()
	{
		return +this.join()
	}
	actual = value + ""
	strictEqual(actual, "0", "modified [] + \"\"")

	value = new Date(0)
	value.toString = function()
	{
		return "[" + this.getTime() + "]"
	}
	actual = value + ""
	strictEqual(actual, "[0]", "modified new Date + \"\"")
})
