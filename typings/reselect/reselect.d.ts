declare module "reselect" {
    type Selector<TInput, TOutput> = (arg1: TInput, arg2?: any) => TOutput;
    export function createSelector<TInput, TOutput, T1>(selector1: Selector<TInput, T1>, combiner: (arg1: T1) => TOutput): Selector<TInput, TOutput>;
    export function createSelector<TInput, TOutput, T1, T2>(selector1: Selector<TInput, T1>, selector2: Selector<TInput, T2>, combiner: (arg1: T1, arg2: T2) => TOutput): Selector<TInput, TOutput>;
    export function createSelector<TInput, TOutput, T1, T2, T3>(selector1: Selector<TInput, T1>, selector2: Selector<TInput, T2>, selector3: Selector<TInput, T3>, combiner: (arg1: T1, arg2: T2, arg3: T3) => TOutput): Selector<TInput, TOutput>;
    /* etc */
}
