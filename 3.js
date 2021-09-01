const function1 = () => console.log(89);

// function1();

const function2 = (num)=> console.log(num /7);

// function2(49);

const function3 = (num1,num2) => console.log((num1+num2)/2);

// function3(8,2);

const function4 = (num1,num2) => {
    const sum1 = num1+7;
    const sum2 = num2+7;
    const result = sum1+sum2;
    return result;
}

const sumResult = function4(5,6);
console.log(sumResult);