import React from 'react';

// Helper component for individual menu items
const MenuItem = ({ name, price }) => {
    const formatPrice = (value) => {
        return `Rp ${new Intl.NumberFormat('id-ID').format(value)}`;
    };

    return (
        <div className="menu-item">
            <p>{name}</p>
            <span>{formatPrice(price)}</span>
        </div>
    );
};

// Helper component for menu categories
const MenuCategory = ({ title, items }) => (
    <div className="menu-category">
        <h3 className="category-title">{title}</h3>
        <div className="items-grid">
            {items.map(item => (
                <MenuItem key={item.name} name={item.name} price={item.price} />
            ))}
        </div>
    </div>
);

// Main Menu Section component with scroll animation
const Menu = ({ menuData }) => {

    return (
        <section
            id="menu"
            className="menu-section content-section"
        >
            <div className="container">
                <h2 className="section-title">Menu Kami</h2>
                {menuData.map(category => (
                    <MenuCategory key={category.name} title={category.name} items={category.items} />
                ))}
            </div>
        </section>
    );
};

export default Menu;