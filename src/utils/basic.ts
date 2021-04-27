const l = console.log;

export function basic() {

    // # 평가
    // - 코드가 계산(Evaluation) 되어 값을 만드는 것

    // # 일급
    // - 값으로 다룰 수 있다.
    // - 변수에 담을 수 있다.
    // - 함수의 인자로 사용될 수 있다.
    // - 함수의 결과로 사용될 수 있다.

    const a = 10;
    const add9 = a => a + 9;
    const r = add9(a);

    l(r);

    l("==")

    //# 일급 함수
    // - 함수를 값으로 다룰 수 있다.
    // - 조합성과 추상화의 도구

    const add5 = (a: number) => a + 5;
    l(add5);
    l(add5(2));

    const f1 = () => () => 1;
    l(f1);
    l(f1());


    const f2 = f1();
    l(f2);
    l(f2());
    l(f1()());

    l("==")

    // # 일급 함수
    // - 함수가 값으로 다뤄질 수 있다.
    //
    // # 고차 함수
    // - 함수를 값으로 다루는 함수
    //
    // ## 함수를 인자로 받아서 실행하는 함수
    // - apply1
    // - times

    const apply1 = f => f(1);
    const add2 = a => a + 2;
    l(apply1(add2));
    l(apply1(a => a - 1));

    const times = (f, n) => {
        let i = -1;
        while (++i < n) f(i);
    };

    times(l, 3);
    times(a => l(a + 10), 3);

    l("==")

    // ## 함수를 만들어 리턴하는 함수 (클로저를 만들어 리턴하는 함수)
    // - addMaker

    const addMaker = a => b => a + b;
    const add10 = addMaker(10);
    l(add10);
    l(add10(5));
    l(add10(10));
}

