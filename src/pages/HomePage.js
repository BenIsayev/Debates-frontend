import { fetchDebateIds } from "../store/debate-actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";



const googleIcon = require('../assets/img/google.png')

const HomePage = () => {
    const isLoggedin = true;
    const dispatch = useDispatch()
    const randomDebateId = useSelector(state => state.debate.nextDebateId)


    useEffect(() => {
        if (!isLoggedin) return
        dispatch(fetchDebateIds())

    }, [dispatch, isLoggedin])

    return (
        <section className='home-page'>
            {isLoggedin && <h1 className='greeting'> היי אופיר!</h1>}
            {!isLoggedin && <section className='login'>
                <div className='guest-input'>
                    <label htmlFor="username">התחבר כאורח</label>
                    <input type="text" id='username' placeholder='הכנס כינוי' />
                    <button>התחבר</button>
                </div>
                <span>או</span>
                <div>
                    <button className='btn google-signin'>
                        <span> התחבר עם גוגל</span>
                        <img src={googleIcon} alt="google icon" />
                    </button>
                </div>
            </section>
            }
            {isLoggedin &&
                <section className='game-details'>
                    <NavLink to={`/debate/${randomDebateId}`} className='btn'>בואו נתדיין!</NavLink>
                </section>
            }
        </section >
    );
}

export default HomePage