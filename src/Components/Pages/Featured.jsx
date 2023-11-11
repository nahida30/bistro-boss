import SectionTitle from "./Shared/SectionTitle/SectionTitle";
import featured from '/public/assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white pt-8 my-20">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div  className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="text-xl md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae fugit iure dolores, amet ducimus labore cum reiciendis nihil assumenda delectus rem nobis ipsa dolor sequi a accusantium voluptates iste non.</p>
                    <button className="btn btn-outline mt-2">Button</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;