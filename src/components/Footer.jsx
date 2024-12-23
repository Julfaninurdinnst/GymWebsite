import React from 'react';

function Footer() {
    return (
        <footer className="bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} J.nurdin NST. All rights reserved.</p>
                <p>
                    Source code from <a href="https://smoljames.com/" className="text-blue-400 hover:underline">Smoljames Education</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;