import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = ()=> JSX.Element;

interface Route{
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
}

const lazyLayout = lazy(()=> import(/*"LazyPage1.chunk"*/'../layout/LazyLayout'));


export const routes:Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: lazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
];