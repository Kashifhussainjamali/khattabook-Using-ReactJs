import style from "./navbar.module.css"

function NavBer(){
    return<>
    <ul className={style["ul1"]}>
        <li className={style["li1"]}> <img src="pic1.jpeg" alt="" className={style["img1"]} /><h1 className={style["h1"]}> HISSAB KITTAB</h1></li>
        <li className={style["li2"]}>DAILY BASES</li>
    </ul>
    </>

}
export default NavBer;