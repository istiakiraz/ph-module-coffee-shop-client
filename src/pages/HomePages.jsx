import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import CoffeeCard from '../components/CoffeeCard';
import { useLoaderData } from 'react-router';

const HomePages = () => {

    const coffeeData = useLoaderData()

    return (
        <div>
            <Hero></Hero>
            <Card></Card>
            <CoffeeCard coffeeData={coffeeData } ></CoffeeCard>
        </div>
    );
};

export default HomePages;