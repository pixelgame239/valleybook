import React, { useState } from 'react';
import "../../public/assets/css/bottomBanner.css";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';

const BottomBanner = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const navigate = useNavigate();

  return (
    <>
        <div className={`bottom-banner ${!isExpanded ? 'hide-banner' : ''}`}>
        <div className="banner-content">
          <p>Đăng nhập để tham gia vào diễn đàn của Valley Book</p>
          <button className='forum-signin' onClick={()=>navigate("/signIn")}>Đăng nhập</button>
          <button className='forum-signup' onClick={()=>navigate("/signUp")}>Đăng ký</button>
        </div>
        </div>
        <div className="banner-buttons">
            <button
              className={`expand-button ${!isExpanded ? 'hide-banner' : ''}`}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ?  <ExpandMoreIcon></ExpandMoreIcon>: <ExpandLessIcon />}
            </button>
          </div>
    </>
  );
};

export default BottomBanner;
