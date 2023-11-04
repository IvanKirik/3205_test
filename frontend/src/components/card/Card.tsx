import React from 'react';
import {IUser} from "../../models/user.interface";

interface ICardProps {
    user: IUser;
}

const Card: React.FC<ICardProps> = ({ user }) => {
    return (
        <div className="w-[600px] bg-indigo-200 p-4 rounded-md transition-all">
            <h1 className="font-sans">Email: <span className="font-bold">{user.email}</span></h1>
            <h2 className="font-sans">Phone: <span className="font-bold">{user.number}</span></h2>
        </div>
    );
};

export default Card;
