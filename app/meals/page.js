import Link from 'next/link';
import classes from './page.module.css';
import MealsGrid from '@/components/meals/meal-grid';
import { getMeals } from '@/lib/meal';
import { Suspense } from 'react';
export default async function MealsPage(){
    async function Meals(){
        const meals =await getMeals();
        return <MealsGrid meals={meals}/>
    }
   
    return(
        <>
        <header className={classes.header}>
            <h1>
                Delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p> choose your favorite recipe and cook it yourself. It is easy and fun!</p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                    Share your Favorite Recipe
                </Link>
            </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
                    <Meals/>
                </Suspense>
                </main></>
        
    )
}