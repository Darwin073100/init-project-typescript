import { lazy, LazyExoticComponent } from "react";

type JSXComponent = ()=> JSX.Element;

interface Route{
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
}

const lazy2 = lazy(()=> import(/*"LazyPage1.chunk"*/'../01-lazyload/pages/LazyLoadPage2'));
const lazy3 = lazy(()=> import(/*"LazyPage2.chunk"*/'../01-lazyload/pages/LazyLoadPage3'));
const lazy1 = lazy(()=> import(/*"LazyPage3.chunk"*/'../01-lazyload/pages/LazyLoadPage1'));

export const routes:Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: lazy3,
        name: 'Lazy 3'
    }
];