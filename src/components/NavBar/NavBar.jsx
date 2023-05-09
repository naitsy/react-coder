import React, { useEffect, useState } from "react";
import { CartWidget } from "../CartWidget/CartWidget";
import logo from "../../party.png";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { getFirestore } from "../../data/firebaseConfig";
import { SearchBar } from "../SearchBar/SearchBar";


export const NavigationBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const db = getFirestore()
        db.collection("categories")
            .get()
            .then((res) => {
                const result = res.docs.map( doc => {
                    return {
                        ...doc.data()
                    }
                })
                setCategories(result)
            })
            .catch((err) => {console.log(err)})

    },[])


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light shadow-bottom sticky-top">
                <Link to="/" className="navbar-brand">
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="flex-col w-100">
                    <div className="flex-row my-2">
                        <SearchBar />
                    </div>
                    <div
                        className="collapse navbar-collapse flex-row"
                        id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            {
                                categories.map( category => {
                                    return (
                                        <li className="nav-item" key={category.name}>
                                            <Link to={`/category/${category.link}`} className="nav-link" >
                                                { category.name }
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="flex-shrink-1">
                    <CartWidget />
                </div>
            </nav>
        </>
    );
};
