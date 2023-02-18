import React from 'react';
import BannerPic from '../../../pic/Banner.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-blue-50">
            <div className="hero-content flex-col lg:flex-row gap-20">
                <img src={BannerPic} className="max-w rounded-lg bg-blue-50" />
                <div>
                    <h1 className="text-6xl font-bold text-blue-500">Find the most exciting startup Job</h1>
                    <p className="py-6 text-xl font-semi-bold">Searching for a job? find the best start of job that fit you. Your dream job is waiting.</p>
                    <input type="text" placeholder="Job Title or Keyword" className="input rounded-none" />
                    <div className="dropdown">
                        <label tabIndex={0} className="btn rounded-none bg-blue-400">Location</label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Bangladesh</a></li>
                            <li><a>Usa</a></li>
                        </ul>
                    </div>
                    <button className="btn rounded-l-none bg-blue-400">Find job</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;