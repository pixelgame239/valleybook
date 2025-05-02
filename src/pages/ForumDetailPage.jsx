import { useParams } from "react-router-dom";
import Header from "../components/Header";

const ForumDetailPage =()=>{
    const { id } = useParams();
    return(
        <div>
            <Header currentPage="forum"></Header>
            <Footer></Footer>
        </div>
    );
}
export default ForumDetailPage;