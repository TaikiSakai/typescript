{
    class EmptyValueError extends Error;
    try {
        console.log('tryブロックの中');
        throw new Error('例外が発生しました');
    } catch (e: EmptyValueError) {
        console.log('catchブロックの中');
        console.log(e.message);
    }
    console.log('try-catchブロックの外');

}