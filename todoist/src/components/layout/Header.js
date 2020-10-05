import React from 'react';

export const Header = () => {
    return (
        <header className="header" data-testid="header"> 
            <nav>
                <div className="logo">
                    <img src="/images/log.png" alt="Todoist" />
                </div>
                <div className="settings">
                    <ul>
                        <li>+</li>
                        <li>Pizza slice!</li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}