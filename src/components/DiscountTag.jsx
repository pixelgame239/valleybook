import "../../public/assets/css/gridBook.css";

const DiscountTag=({discountAmount})=>{
    return(
        <div className="discount-tag">
            -{discountAmount}%
        </div>
    )
}
export default DiscountTag;