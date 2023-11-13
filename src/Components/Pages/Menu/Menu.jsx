import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '/public/assets/menu/banner3.jpg'
import desertImg from '/public/assets/menu/dessert-bg.jpeg'
import pizzaImg from '/public/assets/menu/pizza-bg.jpg'
import saladImg from '/public/assets/menu/salad-bg.jpg'
import soupImg from '/public/assets/menu/soup-bg.jpg'
import useMenu from '../../../Hooks/UseMenu';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';



const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert' );
    const soup = menu.filter(item => item.category === 'soup' );
    const salad = menu.filter(item => item.category === 'salad' );
    const pizza = menu.filter(item => item.category === 'pizza' );
    const offered = menu.filter(item => item.category === 'offered' );
    return (
        <div className='p-20'>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading="Do not miss" heading="Today's Offer"></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            {/* desert menu  */}
            <MenuCategory items={dessert} title="Desert" coverImg={desertImg}></MenuCategory>

            {/* pizza menu  */}

            <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg}></MenuCategory>

            {/* salad menu  */}
            <MenuCategory items={salad} title="salad" coverImg={saladImg}></MenuCategory>

            {/* soup menu  */}

            <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>

            
            
        </div>
    );
};

export default Menu;