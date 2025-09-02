import { BarLoader } from "react-spinners";

const override = {
    display: 'block',
    margin: '0 auto 100px auto',

}


const Spinner = ( {color= 'purple', size='300'} ) => {
    return ( 
        <>
            <BarLoader 
                color={color}
                size={size}
                cssOverride={override}
                aria-label="...Loading..."
            />
        </>
     );
}
 
export default Spinner;
