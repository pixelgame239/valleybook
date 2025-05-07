import { useEffect } from "react";

const NotificationSign = ( {items} )=>{
    if (!items||items.length===0) return null;
    useEffect(()=>{

    }, [items])
    return(
        <div style={{backgroundColor:"red", border:"none", borderRadius:"50%", color:"red", width:"20px", height:"20px", display: "flex",
            justifyContent: "center",
            alignItems: "center",}}>
            <p style={{fontSize: items.length>10?"12px":"15px", color:"white"}}>{items.length>99?"99+":items.length}</p>
        </div>
    )
}
export default NotificationSign;