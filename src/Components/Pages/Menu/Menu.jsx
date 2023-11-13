import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import menuImg from '/public/assets/menu/banner3.jpg'
import PopularMenu from '../PopularMenu/PopularMenu';

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            <Cover img={menuImg} title="Our Menu"></Cover>
            <PopularMenu></PopularMenu>
            
        </div>
    );
};

export default Menu;