import { lazy, LazyExoticComponent } from "react";

type JSXComponent = ()=> JSX.Element;

interface Route{
    to: string,
    path: string,
    name: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>
}

const ShoppingPage = lazy(()=> import(/*"LazyPage1.chunk"*/'../02-component-patterns/pages/ShoppingPage'));


export const routes:Route[] = [
    {
        to: '/shopping',
        path: 'shopping',
        Component: ShoppingPage,
        name: 'Shopping Page'
    }
];