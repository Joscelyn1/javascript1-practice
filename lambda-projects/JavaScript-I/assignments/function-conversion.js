$_$wp(1);
let $_$wvd1 = $_$w(1, 0), myFunction = () => {
        $_$wf(1);
        return $_$w(1, 1), 'Function was invoked!';
    };
$_$w(1, 2), $_$tracer.log(myFunction(), 'myFunction()', 1, 2);
let $_$wvd4 = $_$w(1, 3), anotherFunction = param => {
        $_$wf(1);
        return $_$w(1, 4), param;
    };
$_$w(1, 5), $_$tracer.log(anotherFunction('Example'), 'anotherFunction(\'Example\')', 1, 5);
let $_$wvd7 = $_$w(1, 6), add = (param1, param2) => {
        $_$wf(1);
        return $_$w(1, 7), param1 + param2;
    };
$_$w(1, 8), $_$tracer.log(add(1, 2), 'add(1, 2)', 1, 8);
let $_$wvd10 = $_$w(1, 9), subtract = (param1, param2) => {
        $_$wf(1);
        return $_$w(1, 10), param1 - param2;
    };
$_$w(1, 11), $_$tracer.log(subtract(1, 2), 'subtract(1, 2)', 1, 11);
const exampleArray = ($_$w(1, 12), [
    1,
    2,
    3,
    4
]);
const triple = ($_$w(1, 13), exampleArray.map(number => {
    $_$wf(1);
    return $_$w(1, 14), number * 3;
}));
$_$w(1, 15), $_$tracer.log(triple, 'triple', 1, 15);
$_$wpe(1);