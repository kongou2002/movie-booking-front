import React from 'react';

export default function Navigation() {
    return (
        <div className='Navigation'>
            <nav>
                <ul>
                    <li><a className='active' href='#home'>Home</a></li>
                    <li><a href='#news'>News</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <div className='search-zone'>
                    <form className='search-form'>
                        <input className='search-box' type="text" placeholder="search" name='search'></input>
                        <input className='submit' type="submit" name='search'></input>
                    </form>
                </div>
            </nav>
        </div>
    );
}
