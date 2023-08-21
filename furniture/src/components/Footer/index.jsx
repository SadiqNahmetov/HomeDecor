// import React from "react";
// import classes from "./footer.module.scss";

// function Footer() {
//   return (
//     <footer>
//       <div className="container">
//         <div className={classes.footer}>
//           <div className={classes["footer__logo--copyrigt"]}>
//             <p>HomeDecor</p>
//             <span>©2023 All Right Reserved. Developed by Webcoder Agency</span>
//           </div>
//           <div className={classes["footer__text"]}>
//             <p>
//               At vero eos et accusamus et iusto odio dignissimos ducimus qui{" "}
//             </p>
//           </div>
//           <div className={classes["footer__contact"]}>
//             <span className={classes["phone"]}>+994 50 555 55 55</span>
//             <span className={classes["gmail"]}>youremailhere@gmail.com</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className='container'>
            <div className="footer">
                <div className="footer__left">
                    <p className="footer__left--title">HomeDecor</p>
                    <p className="footer__left--copyright">©2022 All Right Reserved. Developed by Webcoder Agency</p>
                </div>
                <div className="footer__right">
                    <p className="footer__right--desc">At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
                    <p className="footer__right--phone">+994 50 555 55 55</p>
                    <p className="footer__right--email">youremailhere@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
